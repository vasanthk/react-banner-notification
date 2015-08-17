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
      success: '#4CAF50',
      error: '#D32F2F',
      info: '#1976D2'
    };

    const styles = {
      notificationItem: {
        width: 200,
        marginTop: 5,
        marginRight: 10,
        paddingBottom: 1,
        borderRadius: 5,
        color: '#fff',
        backgroundColor: hexColors[this.props.type],
        opacity: 0.8
      },
      notificationBody: {
        margin: 10,
        opacity: 0.8
      },
      notificationTitle: {
        fontWeight: 600,
        paddingTop: 5,
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

NotificationItem.propTypes = {
  hideNotification: React.PropTypes.func,
  id: React.PropTypes.number.isRequired,
  type: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  msg: React.PropTypes.string
};
