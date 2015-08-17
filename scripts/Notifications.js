import React, {Component} from 'react/addons';
import NotificationItem from './NotificationItem'

export default class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: []
    };

    this.success = this.success.bind(this);
    this.error = this.error.bind(this);
    this.info = this.info.bind(this);
    this.addNotification = this.addNotification.bind(this);
    this.countdownToHide = this.countdownToHide.bind(this);
    this.hideNotification = this.hideNotification.bind(this);
  }

  success(title, msg, duration) {
    this.addNotification(title, msg, duration, 'success');
  }

  error(title, msg, duration) {
    this.addNotification(title, msg, duration, 'error');
  }

  info(title, msg, duration) {
    this.addNotification(title, msg, duration, 'info');
  }

  addNotification(title, msg, duration, type) {
    const notifications = this.state.notifications;
    const newKey = notifications.length;

    notifications.push({
      title: title,
      msg: msg,
      duration: duration,
      type: type
    });

    this.setState({
      notifications: notifications
    });

    this.countdownToHide(duration, newKey);
  }

  countdownToHide(duration, key) {
    const that = this;
    setTimeout(function() {
      that.hideNotification(key)
    }, duration)
  }

  hideNotification(key) {
    delete this.state.notifications[key];
    this.setState(this.state);

    // TODO: Check how to handle this with React immutability helpers and avoid 'delete' + Setstate
    // Uses react addons' immutability helpers - to remove element from array in component state
    // http://stackoverflow.com/a/29533459/1672655
    //this.setState({
    //  notifications: React.addons.update(this.state.notifications, {$splice: [[key, 1]]})
    //});
  }

  render() {
    let notificationElems;

    if(this.state.notifications.length) {
      notificationElems = this.state.notifications.map((notification, index) => {
        return (
          <NotificationItem id={index}
                            key={'notification-' + index}
                            title={notification.title}
                            msg={notification.msg}
                            type={notification.type}
                            hideNotification={this.hideNotification}
            />
        );
      });
    }

    return (
      <div className='notification-container'>
        {notificationElems}
      </div>
    );
  }
}