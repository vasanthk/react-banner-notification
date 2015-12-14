var React = require('react');
var Notifications = require('./../../scripts/es5/Notifications');

var Demo = React.createClass({
  duration: function () {
    return Math.round(Math.random() * 9) * 1000;
  },

  showNotification: function () {
    var r = Math.round(Math.random() * 2);
    var arr = ['success', 'info', 'error'];

    this.notification(arr[r]);
  },

  notification: function (notify) {
    var duration = this.duration();
    var body = "Message - " + notify + ', Duration: ' + duration;
    this.refs.notificator[notify]("Title - " + notify, body, duration);
  },

  render: function () {
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
});

module.exports = Demo;
