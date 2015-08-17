var React = require('react');
var NotificationItem = require('./NotificationItem');

var Notifications = React.createClass({
  getInitialState: function () {
    return {
      notifications: []
    };
  },

  success: function(title, msg, duration) {
    this.addNotification(title, msg, duration, 'success');
  },

  error: function(title, msg, duration) {
    this.addNotification(title, msg, duration, 'error');
  },

  info: function(title, msg, duration) {
    this.addNotification(title, msg, duration, 'info');
  },

  addNotification: function(title, msg, duration, type) {
    var notifications = this.state.notifications;
    var newKey = notifications.length;

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
  },

  countdownToHide: function(duration, key) {
    var that = this;
    setTimeout(function () {
      that.hideNotification(key);
    }, duration);
  },

  hideNotification: function(key) {
    delete this.state.notifications[key];
    this.setState(this.state);

    // TODO: Check how to handle this with React immutability helpers and avoid 'delete' + Setstate
    // Uses react addons' immutability helpers - to remove element from array in component state
    // http://stackoverflow.com/a/29533459/1672655
    //  this.setState({
    //    notifications: React.addons.update(this.state.notifications, {$splice: [[key, 1]]})
    //  });
  },

  render: function() {
    var notificationElems;
    var styles = {
      container: {
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 0
      }
    };

    if (this.state.notifications.length) {
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
      <div className='notification-container'
           style={styles.container}
        >
        {notificationElems}
      </div>
    );
  }

});

module.exports = Notifications;
