'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _get = require('babel-runtime/helpers/get')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

var _React$Component = require('react');

var _React$Component2 = _interopRequireDefault(_React$Component);

var _NotificationItem = require('./NotificationItem');

var _NotificationItem2 = _interopRequireDefault(_NotificationItem);

var Notifications = (function (_Component) {
  function Notifications(props) {
    _classCallCheck(this, Notifications);

    _get(Object.getPrototypeOf(Notifications.prototype), 'constructor', this).call(this, props);
    this.state = {
      notifications: []
    };

    this.success = this.success.bind(this);
    this.error = this.error.bind(this);
    this.info = this.info.bind(this);
    this.addNotification = this.addNotification.bind(this);
    this.countdownToHide = this.countdownToHide.bind(this);
    this.hideNotification = this.hideNotification.bind(this);
  }

  _inherits(Notifications, _Component);

  _createClass(Notifications, [{
    key: 'success',
    value: function success(title, msg, duration) {
      this.addNotification(title, msg, duration, 'success');
    }
  }, {
    key: 'error',
    value: function error(title, msg, duration) {
      this.addNotification(title, msg, duration, 'error');
    }
  }, {
    key: 'info',
    value: function info(title, msg, duration) {
      this.addNotification(title, msg, duration, 'info');
    }
  }, {
    key: 'addNotification',
    value: function addNotification(title, msg, duration, type) {
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
    }
  }, {
    key: 'countdownToHide',
    value: function countdownToHide(duration, key) {
      var that = this;
      setTimeout(function () {
        that.hideNotification(key);
      }, duration);
    }
  }, {
    key: 'hideNotification',
    value: function hideNotification(key) {
      delete this.state.notifications[key];
      this.setState(this.state);

      // TODO: Check how to handle this with React immutability helpers and avoid 'delete' + Setstate
      // Uses react addons' immutability helpers - to remove element from array in component state
      // http://stackoverflow.com/a/29533459/1672655
      //  this.setState({
      //    notifications: React.addons.update(this.state.notifications, {$splice: [[key, 1]]})
      //  });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var notificationElems = undefined;
      var styles = {
        container: {
          display: 'block',
          position: 'absolute',
          top: 0,
          right: 0
        }
      };

      if (this.state.notifications.length) {
        notificationElems = this.state.notifications.map(function (notification, index) {
          return _React$Component2['default'].createElement(_NotificationItem2['default'], { id: index,
            key: 'notification-' + index,
            title: notification.title,
            msg: notification.msg,
            type: notification.type,
            hideNotification: _this.hideNotification
          });
        });
      }

      return _React$Component2['default'].createElement(
        'div',
        { className: 'notification-container',
          style: styles.container
        },
        notificationElems
      );
    }
  }]);

  return Notifications;
})(_React$Component.Component);

exports['default'] = Notifications;
module.exports = exports['default'];