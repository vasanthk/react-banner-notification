import React from 'react';
import Notifications from './../../scripts/es6/Notifications';

export default class Demo extends React.Component {

  constructor(props) {
    super(props);

    this.duration = this.duration.bind(this);
    this.showNotification = this.showNotification.bind(this);
    this.notification = this.notification.bind(this);
  }

  duration() {
    return Math.round(Math.random() * 9) * 1000;
  }

  showNotification() {
    var r = Math.round(Math.random() * 2);
    var arr = ['success', 'info', 'error'];

    this.notification(arr[r]);
  }

  notification(notify) {
    var duration = this.duration();
    var body = "Message - " + notify + ', Duration: ' + duration;
    this.refs.notificator[notify]("Title - " + notify, body, duration);
  }

  render() {
    return (
      <div>
        <h3>Notifications Demo</h3>
        <button onClick={this.showNotification}>
          Show Demo Notifications
        </button>
        <Notifications ref='notificator'/>
      </div>
    );
  }
}