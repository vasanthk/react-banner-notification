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
    const hexColors = {
      // keys based on this.props.type
      success: {
        color: '#51a351',
        opacity: 0.4
      },
      error: {
        color: '#cb645e',
        opacity: 0.8
      },
      info: {
        color: '#2196f3',
        opacity: 0.8
      }
    };

    const styles = {
      notificationItem: {
        width: 250,
        marginTop: 5,
        marginRight: 10,
        borderRadius: 5,
        color: '#fff',
        backgroundColor: hexColors[this.props.type].color,
        opacity: hexColors[this.props.type].opacity
      },
      notificationBody: {
        margin: 10,
        opacity: 0.8
      },
      notificationTitle: {
        fontWeight: 70,
        margin: 10,
        opacity: 0.8
      }
    };

    return (
      <div className={'notification-item ' + this.props.type}
           onClick={this.hideNotification}
           style={styles.notificationItem}
        >
        <p className='notification-title'
           style={styles.notificationTitle}
          >
          {this.props.title}
        </p>

        <p className='notification-body'
           style={styles.notificationBody}
          >
          {this.props.msg}
        </p>
      </div>
    );
  }
}