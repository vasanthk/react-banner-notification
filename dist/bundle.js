/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var NotificationItem = __webpack_require__(2);
	
	var Notifications = React.createClass({
	  displayName: 'Notifications',
	
	  getInitialState: function getInitialState() {
	    return {
	      notifications: []
	    };
	  },
	
	  success: function success(title, msg, duration) {
	    this.addNotification(title, msg, duration, 'success');
	  },
	
	  error: function error(title, msg, duration) {
	    this.addNotification(title, msg, duration, 'error');
	  },
	
	  info: function info(title, msg, duration) {
	    this.addNotification(title, msg, duration, 'info');
	  },
	
	  addNotification: function addNotification(title, msg, duration, type) {
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
	  },
	
	  countdownToHide: function countdownToHide(duration, key) {
	    var that = this;
	    setTimeout(function () {
	      that.hideNotification(key);
	    }, duration);
	  },
	
	  hideNotification: function hideNotification(key) {
	    delete this.state.notifications[key];
	    this.setState(this.state);
	
	    // TODO: Check how to handle this with React immutability helpers and avoid 'delete' + Setstate
	    // Uses react addons' immutability helpers - to remove element from array in component state
	    // http://stackoverflow.com/a/29533459/1672655
	    //  this.setState({
	    //    notifications: React.addons.update(this.state.notifications, {$splice: [[key, 1]]})
	    //  });
	  },
	
	  render: function render() {
	    var notificationElems;
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
	        return React.createElement(NotificationItem, { id: index,
	          key: 'notification-' + index,
	          title: notification.title,
	          msg: notification.msg,
	          type: notification.type,
	          hideNotification: this.hideNotification
	        });
	      });
	    }
	
	    return React.createElement(
	      'div',
	      { className: 'notification-container',
	        style: styles.container
	      },
	      notificationElems
	    );
	  }
	
	});
	
	module.exports = {
	  React: React,
	  Notifications: Notifications
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = undefined;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	
	var NotificationItem = React.createClass({
	  displayName: 'NotificationItem',
	
	  propTypes: {
	    hideNotification: React.PropTypes.func,
	    id: React.PropTypes.number.isRequired,
	    type: React.PropTypes.string.isRequired,
	    title: React.PropTypes.string.isRequired,
	    msg: React.PropTypes.string
	  },
	
	  hideNotification: function hideNotification() {
	    this.props.hideNotification(this.props.id);
	  },
	
	  render: function render() {
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
	
	    return React.createElement(
	      'div',
	      { className: 'notification-item ' + this.props.type,
	        onClick: this.hideNotification,
	        style: styles.notificationItem
	      },
	      React.createElement(
	        'p',
	        { className: 'notification-title',
	          style: styles.notificationTitle
	        },
	        this.props.title
	      ),
	      React.createElement(
	        'p',
	        { className: 'notification-body',
	          style: styles.notificationBody
	        },
	        this.props.msg
	      )
	    );
	  }
	});
	
	module.exports = NotificationItem;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map