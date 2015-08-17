import React, {Component} from 'react';

export default class NotificationItem extends Component {
  constructor(props) {
    super(props);

    this.hideNotification = this.hideNotification.bind(this);
  }

  hideNotification() {
    this.props.hideNotification(this.props.id);
  }

  render() {
    return (
      <div className={'notification-item ' + this.props.type}
           onClick={this.hideNotification}>
        <p className='notification-title'>
          {this.props.title}
        </p>

        <p className='notification-body'>
          {this.props.msg}
        </p>
      </div>
    );
  }
}