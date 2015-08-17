import React from 'react';
import Notifications from './Notifications';

export default class Demo extends React.Component {

  constructor(props) {
    super(props);

    this.showNotification = this.showNotification.bind(this);
  }

  showNotification() {
    //this.refs.notificator.error("Title.", "Msg - body.", 3000);
    //this.refs.notificator.info("Title.", "Msg - body.", 5000);
    this.refs.notificator.success('Title', 'Message body here', 3000);
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