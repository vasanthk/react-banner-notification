import React from 'react';
import Notifications from './Notifications';

export default class Demo extends React.Component {

  constructor(props) {
    super(props);

    this.showNotification = this.showNotification.bind(this);
  }

  showNotification() {
    this.refs.notificator.error('Error Notification', 'Optional Error Message', 1000);
    this.refs.notificator.info('Info Notification', 'Optional Info Message', 5000);
    this.refs.notificator.success('Success Notification', 'Optional Success Message', 3000);
  }

  render() {
    return (
      <div>
        <button onClick={this.showNotification}>
          Show
        </button>
        <Notifications ref='notificator'/>
      </div>
    );
  }
}