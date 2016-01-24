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

var NotificationItem = (function (_Component) {
  function NotificationItem(props) {
    _classCallCheck(this, NotificationItem);

    _get(Object.getPrototypeOf(NotificationItem.prototype), 'constructor', this).call(this, props);

    this.hideNotification = this.hideNotification.bind(this);
  }

  _inherits(NotificationItem, _Component);

  _createClass(NotificationItem, [{
    key: 'hideNotification',
    value: function hideNotification() {
      this.props.hideNotification(this.props.id);
    }
  }, {
    key: 'render',
    value: function render() {
      var hexColors = {
        // keys based on this.props.type
        success: '#4CAF50',
        error: '#D32F2F',
        info: '#1976D2'
      };

      var styles = {
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

      return _React$Component2['default'].createElement(
        'div',
        { className: 'notification-item ' + this.props.type,
          onClick: this.hideNotification,
          style: styles.notificationItem
        },
        _React$Component2['default'].createElement(
          'p',
          { className: 'notification-title',
            style: styles.notificationTitle
          },
          this.props.title
        ),
        _React$Component2['default'].createElement(
          'p',
          { className: 'notification-body',
            style: styles.notificationBody
          },
          this.props.msg
        )
      );
    }
  }]);

  return NotificationItem;
})(_React$Component.Component);

exports['default'] = NotificationItem;

NotificationItem.propTypes = {
  hideNotification: _React$Component2['default'].PropTypes.func,
  id: _React$Component2['default'].PropTypes.number.isRequired,
  type: _React$Component2['default'].PropTypes.string.isRequired,
  title: _React$Component2['default'].PropTypes.string.isRequired,
  msg: _React$Component2['default'].PropTypes.string
};
module.exports = exports['default'];