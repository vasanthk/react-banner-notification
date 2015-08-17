var React = require('react');
var Notifications = require('./../../scripts/es5/Notifications');

var Demo = React.createClass({
  showNotification() {
    this.refs.notificator.error('Error Notification', 'Optional Error Message', 1000);
    this.refs.notificator.info('Info Notification', 'Optional Info Message', 5000);
    this.refs.notificator.success('Success Notification', 'Optional Success Message', 3000);
  },

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
});

module.exports = Demo;
