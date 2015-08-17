!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}([function(t,e,n){"use strict";var o=n(12)["default"],r=n(13)["default"],i=n(11)["default"],u=n(10)["default"],c=n(14)["default"];Object.defineProperty(e,"__esModule",{value:!0});var f=n(30),a=c(f),s=function(t){function e(t){u(this,e),o(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t),this.hideNotification=this.hideNotification.bind(this)}return r(e,t),i(e,[{key:"hideNotification",value:function(){this.props.hideNotification(this.props.id)}},{key:"render",value:function(){var t={success:"#4CAF50",error:"#D32F2F",info:"#1976D2"},e={notificationItem:{width:200,marginTop:5,marginRight:10,paddingBottom:1,borderRadius:5,color:"#fff",backgroundColor:t[this.props.type],opacity:.8},notificationBody:{margin:10,opacity:.8},notificationTitle:{fontWeight:600,paddingTop:5,margin:10,opacity:.8}};return a["default"].createElement("div",{className:"notification-item "+this.props.type,onClick:this.hideNotification,style:e.notificationItem},a["default"].createElement("p",{className:"notification-title",style:e.notificationTitle},this.props.title),a["default"].createElement("p",{className:"notification-body",style:e.notificationBody},this.props.msg))}}]),e}(f.Component);e["default"]=s,s.propTypes={hideNotification:a["default"].PropTypes.func,id:a["default"].PropTypes.number.isRequired,type:a["default"].PropTypes.string.isRequired,title:a["default"].PropTypes.string.isRequired,msg:a["default"].PropTypes.string},t.exports=e["default"]},function(t,e){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},function(t,e){var n=t.exports={};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){return null!==t&&("object"==typeof t||"function"==typeof t)}},function(t,e,n){function o(t,e){return function(){return t.apply(e,arguments)}}function r(t,e,n){var f,a,s,p,l=t&r.G,d=t&r.P,y=l?i:t&r.S?i[e]:(i[e]||{})[c],v=l?u:u[e]||(u[e]={});l&&(n=e);for(f in n)a=!(t&r.F)&&y&&f in y,a&&f in v||(s=a?y[f]:n[f],l&&"function"!=typeof y[f]?p=n[f]:t&r.B&&a?p=o(s,i):t&r.W&&y[f]==s?!function(t){p=function(e){return this instanceof t?new t(e):t(e)},p[c]=t[c]}(s):p=d&&"function"==typeof s?o(Function.call,s):s,v[f]=p,d&&((v[c]||(v[c]={}))[f]=s))}var i=n(26),u=n(2),c="prototype";r.F=1,r.G=2,r.S=4,r.P=8,r.B=16,r.W=32,t.exports=r},function(t,e,n){var o=n(24),r=n(23);t.exports=function(t,e){return(e?Object:o)(r(t))}},function(t,e,n){t.exports={"default":n(15),__esModule:!0}},function(t,e,n){t.exports={"default":n(16),__esModule:!0}},function(t,e,n){t.exports={"default":n(17),__esModule:!0}},function(t,e,n){t.exports={"default":n(18),__esModule:!0}},function(t,e){"use strict";e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},e.__esModule=!0},function(t,e,n){"use strict";var o=n(7)["default"];e["default"]=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o(t,r.key,r)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),e.__esModule=!0},function(t,e,n){"use strict";var o=n(8)["default"];e["default"]=function(t,e,n){for(var r=!0;r;){var i=t,u=e,c=n;f=s=a=void 0,r=!1,null===i&&(i=Function.prototype);var f=o(i,u);if(void 0!==f){if("value"in f)return f.value;var a=f.get;return void 0===a?void 0:a.call(c)}var s=Object.getPrototypeOf(i);if(null===s)return void 0;t=s,e=u,n=c,r=!0}},e.__esModule=!0},function(t,e,n){"use strict";var o=n(6)["default"],r=n(9)["default"];e["default"]=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=o(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(r?r(t,e):t.__proto__=e)},e.__esModule=!0},function(t,e){"use strict";e["default"]=function(t){return t&&t.__esModule?t:{"default":t}},e.__esModule=!0},function(t,e,n){var o=n(1);t.exports=function(t,e){return o.create(t,e)}},function(t,e,n){var o=n(1);t.exports=function(t,e,n){return o.setDesc(t,e,n)}},function(t,e,n){var o=n(1);n(29),t.exports=function(t,e){return o.getDesc(t,e)}},function(t,e,n){n(28),t.exports=n(2).Object.setPrototypeOf},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var o=n(3);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var o=n(19);t.exports=function(t,e,n){if(o(t),~n&&void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var o=n(21),r=Object;t.exports=0 in r("z")?r:function(t){return"String"==o(t)?t.split(""):r(t)}},function(t,e,n){function o(t){try{return u(t)}catch(e){return c.slice()}}var r={}.toString,i=n(5),u=n(1).getNames,c="object"==typeof window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.get=function(t){return c&&"[object Window]"==r.call(t)?o(t):u(i(t))}},function(t,e){var n="undefined"!=typeof self&&self.Math==Math?self:Function("return this")();t.exports=n,"number"==typeof __g&&(__g=n)},function(t,e,n){function o(t,e){if(u(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")}var r=n(1).getDesc,i=n(3),u=n(20);t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e){try{e=n(22)(Function.call,r(Object.prototype,"__proto__").set,2),e({},[])}catch(i){t=!0}return function(n,r){return o(n,r),t?n.__proto__=r:e(n,r),n}}():void 0),check:o}},function(t,e,n){var o=n(4);o(o.S,"Object",{setPrototypeOf:n(27).set})},function(t,e,n){var o=n(1),r=n(2),i=n(4),u=n(5),c=n(3);o.each.call("freeze,seal,preventExtensions,isFrozen,isSealed,isExtensible,getOwnPropertyDescriptor,getPrototypeOf,keys,getOwnPropertyNames".split(","),function(t,e){var o=(r.Object||{})[t]||Object[t],f=0,a={};a[t]=0==e?function(t){return c(t)?o(t):t}:1==e?function(t){return c(t)?o(t):t}:2==e?function(t){return c(t)?o(t):t}:3==e?function(t){return c(t)?o(t):!0}:4==e?function(t){return c(t)?o(t):!0}:5==e?function(t){return c(t)?o(t):!1}:6==e?function(t,e){return o(u(t),e)}:7==e?function(t){return o(u(t,!0))}:8==e?function(t){return o(u(t))}:n(25).get;try{o("z")}catch(s){f=1}i(i.S+i.F*f,"Object",a)})},function(t,e){t.exports=void 0}]);
//# sourceMappingURL=bundle.js.map