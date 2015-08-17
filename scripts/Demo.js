import React from 'react';
import Notifications from './Notifications';

export default class Demo extends React.Component {

  constructor(props) {
    super(props);

    this.showNotification = this.showNotification.bind(this);
  }

  showNotification() {
    //this.refs.notificator.error("Title.", "Msg - body.", duration);
    //this.refs.notificator.info("Title.", "Msg - body.", duration);
    this.refs.notificator.success('Title', 'Msg - body.', 3000);
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