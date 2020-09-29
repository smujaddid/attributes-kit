(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("radium"), require("lodash/merge"), require("lodash/isEmpty"), require("lodash/isUndefined"), require("lodash/isObject"), require("lodash/map"), require("sift"), require("lodash/isArray"), require("eidolon"), require("react-dom"), require("lodash/each"), require("lodash/every"), require("abagnale"), require("dedent"), require("fbemitter"), require("lodash/cloneDeep"), require("lodash/isString"), require("lodash/last"), require("lodash/max"), require("lodash/random"), require("lodash/reduce"), require("lodash/some"), require("lodash/values"), require("marked"), require("minim"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "radium", "lodash/merge", "lodash/isEmpty", "lodash/isUndefined", "lodash/isObject", "lodash/map", "sift", "lodash/isArray", "eidolon", "react-dom", "lodash/each", "lodash/every", "abagnale", "dedent", "fbemitter", "lodash/cloneDeep", "lodash/isString", "lodash/last", "lodash/max", "lodash/random", "lodash/reduce", "lodash/some", "lodash/values", "marked", "minim"], factory);
	else if(typeof exports === 'object')
		exports["AttributesKit"] = factory(require("react"), require("radium"), require("lodash/merge"), require("lodash/isEmpty"), require("lodash/isUndefined"), require("lodash/isObject"), require("lodash/map"), require("sift"), require("lodash/isArray"), require("eidolon"), require("react-dom"), require("lodash/each"), require("lodash/every"), require("abagnale"), require("dedent"), require("fbemitter"), require("lodash/cloneDeep"), require("lodash/isString"), require("lodash/last"), require("lodash/max"), require("lodash/random"), require("lodash/reduce"), require("lodash/some"), require("lodash/values"), require("marked"), require("minim"));
	else
		root["AttributesKit"] = factory(root["react"], root["radium"], root["lodash/merge"], root["lodash/isEmpty"], root["lodash/isUndefined"], root["lodash/isObject"], root["lodash/map"], root["sift"], root["lodash/isArray"], root["eidolon"], root["react-dom"], root["lodash/each"], root["lodash/every"], root["abagnale"], root["dedent"], root["fbemitter"], root["lodash/cloneDeep"], root["lodash/isString"], root["lodash/last"], root["lodash/max"], root["lodash/random"], root["lodash/reduce"], root["lodash/some"], root["lodash/values"], root["marked"], root["minim"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_98__, __WEBPACK_EXTERNAL_MODULE_99__, __WEBPACK_EXTERNAL_MODULE_100__, __WEBPACK_EXTERNAL_MODULE_101__, __WEBPACK_EXTERNAL_MODULE_102__, __WEBPACK_EXTERNAL_MODULE_103__, __WEBPACK_EXTERNAL_MODULE_104__, __WEBPACK_EXTERNAL_MODULE_105__, __WEBPACK_EXTERNAL_MODULE_106__, __WEBPACK_EXTERNAL_MODULE_107__, __WEBPACK_EXTERNAL_MODULE_108__, __WEBPACK_EXTERNAL_MODULE_109__, __WEBPACK_EXTERNAL_MODULE_110__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 91);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = __webpack_require__(34);

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(43)(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(42)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _array = __webpack_require__(74);

Object.keys(_array).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _array[key];
    }
  });
});

var _defaultValue = __webpack_require__(75);

Object.keys(_defaultValue).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _defaultValue[key];
    }
  });
});

var _description = __webpack_require__(76);

Object.keys(_description).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _description[key];
    }
  });
});

var _inheritance = __webpack_require__(77);

Object.keys(_inheritance).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _inheritance[key];
    }
  });
});

var _object = __webpack_require__(78);

Object.keys(_object).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _object[key];
    }
  });
});

var _query = __webpack_require__(79);

Object.keys(_query).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _query[key];
    }
  });
});

var _samples = __webpack_require__(80);

Object.keys(_samples).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _samples[key];
    }
  });
});

var _structuredElement = __webpack_require__(81);

Object.keys(_structuredElement).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _structuredElement[key];
    }
  });
});

var _type = __webpack_require__(17);

Object.keys(_type).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _type[key];
    }
  });
});

var _value = __webpack_require__(82);

Object.keys(_value).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _value[key];
    }
  });
});

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "ElementUtils.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "ElementUtils.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Column = (0, _radium2.default)(_class = function (_React$Component) {
  _inherits(Column, _React$Component);

  function Column() {
    _classCallCheck(this, Column);

    return _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).apply(this, arguments));
  }

  _createClass(Column, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: this.style },
        this.props.children
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var style = {
        height: 'auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'no-wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
      };

      return (0, _merge2.default)(style, this.props.style);
    }
  }]);

  return Column;
}(_react2.default.Component)) || _class;

exports.default = Column;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "Column.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "Column.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Row = function (_React$Component) {
  _inherits(Row, _React$Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
  }

  _createClass(Row, [{
    key: 'getStyles',
    value: function getStyles() {
      var styles = {
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        position: 'relative'
      };

      return (0, _merge2.default)(styles, this.props.style || {});
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          style: this.getStyles(),
          onClick: this.props.onClick
        },
        this.props.children
      );
    }
  }]);

  return Row;
}(_react2.default.Component);

exports.default = Row;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "Row.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "Row.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DEFAULT_FONT_FAMILY = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"; // eslint-disable-line max-len
var MONO_FONT_FAMILY = "SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace";

exports.DEFAULT_FONT_FAMILY = DEFAULT_FONT_FAMILY;
exports.MONO_FONT_FAMILY = MONO_FONT_FAMILY;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "fonts.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "fonts.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Value = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isUndefined = __webpack_require__(11);

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ElementUtils = __webpack_require__(5);

var _PrimitiveValue = __webpack_require__(70);

var _Attribute = __webpack_require__(21);

var _Attribute2 = _interopRequireDefault(_Attribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Value = function (_React$Component) {
  _inherits(Value, _React$Component);

  function Value() {
    _classCallCheck(this, Value);

    return _possibleConstructorReturn(this, (Value.__proto__ || Object.getPrototypeOf(Value)).apply(this, arguments));
  }

  _createClass(Value, [{
    key: 'render',
    value: function render() {
      var value = void 0;

      if (!this.props.element) {
        return null;
      }

      if ((0, _ElementUtils.isMember)(this.props.element)) {
        if ((0, _ElementUtils.isStructured)(this.props.element)) {
          return _react2.default.createElement(_Attribute2.default, {
            element: this.props.element.content.value,
            expandableCollapsible: this.props.expandableCollapsible,
            parentElement: this.props.parentElement,
            style: this.props.style,
            isSample: this.props.isSample,
            collapseByDefault: this.props.collapseByDefault
          });
        }

        return _react2.default.createElement(_PrimitiveValue.PrimitiveValue, {
          value: this.props.element.content.value.content,
          style: this.props.style,
          collapseByDefault: this.props.collapseByDefault
        });
      }

      if ((0, _ElementUtils.isStructured)(this.props.element)) {
        value = _react2.default.createElement(_Attribute2.default, {
          element: this.props.element,
          expandableCollapsible: this.props.expandableCollapsible,
          parentElement: this.props.parentElement,
          style: this.props.style,
          isSample: this.props.isSample,
          collapseByDefault: this.props.collapseByDefault
        });
      } else if ((0, _ElementUtils.isObject)(this.props.element) || (0, _ElementUtils.isArray)(this.props.element) || (0, _ElementUtils.isSelect)(this.props.element) || (0, _ElementUtils.isEnum)(this.props.element)) {
        value = _react2.default.createElement(_Attribute2.default, {
          element: this.props.element,
          expandableCollapsible: this.props.expandableCollapsible,
          parentElement: this.props.parentElement,
          style: this.props.style,
          isSample: this.props.isSample,
          collapseByDefault: this.props.collapseByDefault
        });
      } else if (!(0, _isUndefined2.default)(this.props.element.content)) {
        value = _react2.default.createElement(_PrimitiveValue.PrimitiveValue, {
          value: this.props.element.content,
          style: this.props.style,
          collapseByDefault: this.props.collapseByDefault
        });
      } else {
        value = null;
      }

      return value;
    }
  }]);

  return Value;
}(_react2.default.Component);

exports.Value = Value;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "Value.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "Value.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _Column = __webpack_require__(6);

var _Column2 = _interopRequireDefault(_Column);

var _Row = __webpack_require__(7);

var _Row2 = _interopRequireDefault(_Row);

var _fonts = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SampleToggle = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(SampleToggle, _React$Component);

  function SampleToggle() {
    _classCallCheck(this, SampleToggle);

    return _possibleConstructorReturn(this, (SampleToggle.__proto__ || Object.getPrototypeOf(SampleToggle)).apply(this, arguments));
  }

  _createClass(SampleToggle, [{
    key: 'renderStyles',
    value: function renderStyles() {
      var SAMPLE_TOGGLE_TITLE_COLOR = this.context.theme.SAMPLE_TOGGLE_TITLE_COLOR;


      var styles = {
        root: {
          cursor: 'pointer'
        },
        iconColumn: {
          width: '12px',
          minWidth: '12px',
          maxWidth: '12px'
        },
        icon: {
          width: '12px',
          height: '12px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left center'
        },
        title: {
          userSelect: 'none',
          lineHeight: '12px',
          letterSpacing: '0.85px',
          fontFamily: _fonts.DEFAULT_FONT_FAMILY,
          fontSize: '12px',
          color: SAMPLE_TOGGLE_TITLE_COLOR,
          textTransform: 'uppercase',
          paddingLeft: '6px'
        }
      };

      if (this.props.isExpanded) {
        styles.icon.backgroundImage = 'url(' + __webpack_require__(95) + ')';
        styles.icon.backgroundSize = '12px 7px';
      } else {
        styles.icon.backgroundImage = 'url(' + __webpack_require__(94) + ')';
        styles.icon.backgroundSize = '7px 12px';
      }

      return (0, _merge2.default)(styles, this.props.style || {});
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Row2.default,
        { style: this.renderStyles().root, onClick: this.props.onClick },
        _react2.default.createElement(
          _Column2.default,
          { style: this.renderStyles().iconColumn },
          _react2.default.createElement('div', { style: this.renderStyles().icon })
        ),
        _react2.default.createElement(
          _Column2.default,
          null,
          _react2.default.createElement(
            'div',
            { style: this.renderStyles().title },
            this.props.sampleTitle || 'Sample'
          )
        )
      );
    }
  }]);

  return SampleToggle;
}(_react2.default.Component), _class2.contextTypes = {
  theme: _propTypes2.default.object
}, _temp)) || _class;

exports.default = SampleToggle;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "SampleToggle.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "SampleToggle.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _isObject = __webpack_require__(18);

var _isObject2 = _interopRequireDefault(_isObject);

var _isString = __webpack_require__(102);

var _isString2 = _interopRequireDefault(_isString);

var _marked = __webpack_require__(109);

var _marked2 = _interopRequireDefault(_marked);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fonts = __webpack_require__(8);

var _type = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_marked2.default.setOptions({
  sanitize: true
});

var Description = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(Description, _React$Component);

  function Description() {
    _classCallCheck(this, Description);

    return _possibleConstructorReturn(this, (Description.__proto__ || Object.getPrototypeOf(Description)).apply(this, arguments));
  }

  _createClass(Description, [{
    key: 'render',
    value: function render() {
      var description = Description.getDescription(this.props.element);

      if (!description && (0, _type.isMember)(this.props.element)) {
        var content = this.props.element.content;
        if (content && content.value) {
          description = Description.getDescription(content.value);
        }
      }

      if (!description) {
        return false;
      }

      var markdownMarkup = { __html: (0, _marked2.default)(description) };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', {
          style: this.style.base,
          dangerouslySetInnerHTML: markdownMarkup
        })
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var DESCRIPTION_COLOR = this.context.theme.DESCRIPTION_COLOR;


      var style = {
        base: {
          fontFamily: _fonts.DEFAULT_FONT_FAMILY,
          fontSize: '13px',
          color: DESCRIPTION_COLOR,
          lineHeight: '150%',
          fontWeight: 'regular'
        }
      };

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }], [{
    key: 'getDescription',
    value: function getDescription(element) {
      if (element.meta && element.meta.description) {
        if ((0, _isString2.default)(element.meta.description)) {
          return element.meta.description;
        }

        if ((0, _isObject2.default)(element.meta.description)) {
          return element.meta.description.content;
        }
      }

      return null;
    }
  }]);

  return Description;
}(_react2.default.Component), _class2.contextTypes = {
  theme: _propTypes2.default.object
}, _temp)) || _class;

exports.default = Description;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "Description.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "Description.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _ElementUtils = __webpack_require__(5);

var _fonts = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Type = (_temp2 = _class = function (_React$Component) {
  _inherits(Type, _React$Component);

  function Type() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Type);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Type.__proto__ || Object.getPrototypeOf(Type)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      var reference = (0, _ElementUtils.getReference)(_this.props.element);
      var element = (0, _ElementUtils.findElement)(reference, _this.context.dereferencedDataStructures);

      if (_this.context.onElementLinkClick) {
        return _this.context.onElementLinkClick(element.meta.id, element, event);
      }

      return null;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Type, [{
    key: 'render',
    value: function render() {
      if (this.props.reference) {
        return _react2.default.createElement(
          'div',
          {
            style: this.style.reference,
            onClick: this.handleClick
          },
          this.props.reference
        );
      }

      if (this.props.type) {
        return _react2.default.createElement(
          'div',
          { style: this.style.type },
          this.props.type
        );
      }

      if (this.props.element) {
        var type = (0, _ElementUtils.getType)(this.props.element);

        if (type) {
          return _react2.default.createElement(
            'div',
            { style: this.style.type },
            type
          );
        }
      }

      return null;
    }
  }, {
    key: 'style',
    get: function get() {
      var TYPE_COLOR = this.context.theme.TYPE_COLOR;


      var style = {
        type: {
          width: '100%',
          fontFamily: _fonts.MONO_FONT_FAMILY,
          fontWeight: 'regular',
          fontSize: '13px',
          color: TYPE_COLOR,
          lineHeight: '13px'
        },
        reference: {
          width: '100%',
          fontFamily: _fonts.MONO_FONT_FAMILY,
          fontWeight: 'regular',
          fontSize: '13px',
          color: TYPE_COLOR,
          textDecoration: 'underline',
          cursor: 'pointer',

          ':hover': {
            textDecoration: 'none'
          }
        }
      };

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }]);

  return Type;
}(_react2.default.Component), _class.contextTypes = {
  theme: _propTypes2.default.object,
  onElementLinkClick: _propTypes2.default.func,
  dereferencedDataStructures: _propTypes2.default.array
}, _temp2);
exports.default = (0, _radium2.default)(Type);
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "Type.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "Type.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MissingCacheObjectException = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    The element is missing the \u2018cache\u2019 object. Please check that the the Refract     tree has been preprocessed. Element is \u2018', '\u2019.\n  '], ['\n    The element is missing the \u2018cache\u2019 object. Please check that the the Refract \\\n    tree has been preprocessed. Element is \u2018', '\u2019.\n  ']);

var _dedent = __webpack_require__(99);

var _dedent2 = _interopRequireDefault(_dedent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function MissingCacheObjectException(element) {
  this.name = 'MissingCacheObjectException';

  this.message = (0, _dedent2.default)(_templateObject, JSON.stringify(element, null, 2));
}

MissingCacheObjectException.prototype = new Error();

exports.MissingCacheObjectException = MissingCacheObjectException;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "MissingCacheObject.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "MissingCacheObject.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _Value = __webpack_require__(10);

var _Column = __webpack_require__(6);

var _Column2 = _interopRequireDefault(_Column);

var _Row = __webpack_require__(7);

var _Row2 = _interopRequireDefault(_Row);

var _SampleToggle = __webpack_require__(12);

var _SampleToggle2 = _interopRequireDefault(_SampleToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sample = (0, _radium2.default)(_class = function (_React$Component) {
  _inherits(Sample, _React$Component);

  function Sample(props) {
    _classCallCheck(this, Sample);

    var _this = _possibleConstructorReturn(this, (Sample.__proto__ || Object.getPrototypeOf(Sample)).call(this, props));

    _this.handleExpandCollapse = function () {
      _this.setState({
        isExpanded: !_this.state.isExpanded
      });
    };

    _this.state = {
      isExpanded: false
    };
    return _this;
  }

  _createClass(Sample, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Row2.default,
        { style: this.style.row },
        _react2.default.createElement(
          _Column2.default,
          null,
          _react2.default.createElement(_SampleToggle2.default, {
            sampleTitle: this.props.title || 'Sample',
            onClick: this.handleExpandCollapse,
            isExpanded: this.state.isExpanded
          }),
          this.state.isExpanded && _react2.default.createElement(_Value.Value, {
            element: this.props.sample,
            style: this.style.value,
            collapseByDefault: this.props.collapseByDefault
          })
        )
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var styles = {
        row: {
          width: '100%'
        },
        value: {
          base: {
            marginTop: '4px',
            marginBottom: '4px'
          }
        }
      };

      return (0, _merge2.default)(styles, this.props.style || {});
    }
  }]);

  return Sample;
}(_react2.default.Component)) || _class;

exports.default = Sample;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "Sample.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "Sample.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSelect = exports.isObjectOrArrayOrEnum = exports.isObjectOrArray = exports.isObject = exports.isMember = exports.isEnum = exports.isArrayOrEnumOrSelect = exports.isArrayOrEnum = exports.isArray = exports.hasType = exports.getTypeOfValue = exports.getType = undefined;

var _MissingCacheObject = __webpack_require__(15);

var _types = __webpack_require__(33);

var _isUndefined = __webpack_require__(11);

var _isUndefined2 = _interopRequireDefault(_isUndefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isObject(element) {
  if (!element) {
    return false;
  }

  if (!element.cache) {
    throw new _MissingCacheObject.MissingCacheObjectException(element);
  }

  return element.cache.isObject;
}

function isArray(element) {
  if (!element) {
    return false;
  }

  if (!element.cache) {
    throw new _MissingCacheObject.MissingCacheObjectException(element);
  }

  return element.cache.isArray;
}

function isEnum(element) {
  if (!element) {
    return false;
  }

  if (!element.cache) {
    throw new _MissingCacheObject.MissingCacheObjectException(element);
  }

  return element.cache.isEnum;
}

function isSelect(element) {
  if (!element) {
    return false;
  }

  if (!element.cache) {
    throw new _MissingCacheObject.MissingCacheObjectException(element);
  }

  return element.cache.isSelect;
}

function isObjectOrArray(element) {
  return isObject(element) || isArray(element);
}

function isObjectOrArrayOrEnum(element) {
  return isObject(element) || isArray(element) || isEnum(element);
}

function isArrayOrEnum(element) {
  return isArray(element) || isEnum(element);
}

function isArrayOrEnumOrSelect(element) {
  return isArray(element) || isEnum(element) || isSelect(element);
}

function isMember(element) {
  if (!element) {
    return false;
  }

  if (element.element) {
    return element.element === _types.TYPES.MEMBER;
  }

  return element === _types.TYPES.MEMBER;
}

function getTypeOfValue(element) {
  if (isMember(element.element)) {
    if ((0, _isUndefined2.default)(element.content.value)) {
      return undefined;
    };

    return element.content.value.element;
  }

  return element.element;
}

function getType(element) {
  if (isMember(element.element)) {
    return getTypeOfValue(element);
  }

  return element.element;
}

function hasType(element) {
  if (!element) {
    return false;
  }

  return !!getType(element);
}

exports.getType = getType;
exports.getTypeOfValue = getTypeOfValue;
exports.hasType = hasType;
exports.isArray = isArray;
exports.isArrayOrEnum = isArrayOrEnum;
exports.isArrayOrEnumOrSelect = isArrayOrEnumOrSelect;
exports.isEnum = isEnum;
exports.isMember = isMember;
exports.isObject = isObject;
exports.isObjectOrArray = isObjectOrArray;
exports.isObjectOrArrayOrEnum = isObjectOrArrayOrEnum;
exports.isSelect = isSelect;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "type.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "type.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Error = __webpack_require__(54);

var _Error2 = _interopRequireDefault(_Error);

var _refractToComponentMap = __webpack_require__(89);

var _refractToComponentMap2 = _interopRequireDefault(_refractToComponentMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Attribute = function (_React$Component) {
  _inherits(Attribute, _React$Component);

  function Attribute() {
    _classCallCheck(this, Attribute);

    return _possibleConstructorReturn(this, (Attribute.__proto__ || Object.getPrototypeOf(Attribute)).apply(this, arguments));
  }

  _createClass(Attribute, [{
    key: 'render',
    value: function render() {
      if (!this.props.element) {
        return false;
      }

      var reactComponent = _refractToComponentMap2.default[this.props.element.element];

      // If we didn't find the component which is able to render the specific
      // element, display an error message.
      if (typeof reactComponent === 'undefined') {
        var errorMessage = '\n        Attributes Kit is not able to render the \u2018' + this.props.element.element + '\u2019\n        element.\n      ';

        return _react2.default.createElement(_Error2.default, { errorMessage: errorMessage });
      }

      var reactElement = _react2.default.createElement(reactComponent, {
        collapseByDefault: this.props.collapseByDefault,
        element: this.props.element,
        expandableCollapsible: this.props.expandableCollapsible,
        parentElement: this.props.parentElement,
        isSample: this.props.isSample
      });

      return reactElement;
    }
  }]);

  return Attribute;
}(_react2.default.Component);

exports.default = Attribute;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "Attribute.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "Attribute.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCache = setCache;
/*
 * Preprocessor utility functions.
 */

function setCache(refract, name, value) {
  if (refract.cache === undefined) {
    refract.cache = {};
  }

  refract.cache[name] = value;
}

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "utilities.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "utilities.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _fonts = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArrayItemIndex = (0, _radium2.default)(_class = function (_React$Component) {
  _inherits(ArrayItemIndex, _React$Component);

  function ArrayItemIndex() {
    _classCallCheck(this, ArrayItemIndex);

    return _possibleConstructorReturn(this, (ArrayItemIndex.__proto__ || Object.getPrototypeOf(ArrayItemIndex)).apply(this, arguments));
  }

  _createClass(ArrayItemIndex, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        { style: this.style.base },
        this.props.index
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var style = {
        base: {
          position: 'absolute',
          top: '8px',
          right: '8px',
          fontFamily: _fonts.MONO_FONT_FAMILY,
          fontSize: '13px',
          color: '#8A93A3',
          opacity: '0.56'
        }
      };

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }]);

  return ArrayItemIndex;
}(_react2.default.Component)) || _class;

exports.default = ArrayItemIndex;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "ArrayItemIndex.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "ArrayItemIndex.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _sift = __webpack_require__(20);

var _sift2 = _interopRequireDefault(_sift);

var _each = __webpack_require__(36);

var _each2 = _interopRequireDefault(_each);

var _isEmpty = __webpack_require__(9);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _last = __webpack_require__(103);

var _last2 = _interopRequireDefault(_last);

var _map = __webpack_require__(19);

var _map2 = _interopRequireDefault(_map);

var _max = __webpack_require__(104);

var _max2 = _interopRequireDefault(_max);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _values = __webpack_require__(108);

var _values2 = _interopRequireDefault(_values);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _Select = __webpack_require__(31);

var _Select2 = _interopRequireDefault(_Select);

var _ObjectProperty = __webpack_require__(60);

var _ObjectProperty2 = _interopRequireDefault(_ObjectProperty);

var _ObjectPropertiesGroup = __webpack_require__(59);

var _ObjectPropertiesGroup2 = _interopRequireDefault(_ObjectPropertiesGroup);

var _StructuredObjectProperty = __webpack_require__(61);

var _StructuredObjectProperty2 = _interopRequireDefault(_StructuredObjectProperty);

var _ElementUtils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ObjectProperties = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(ObjectProperties, _React$Component);

  function ObjectProperties(props) {
    _classCallCheck(this, ObjectProperties);

    var _this = _possibleConstructorReturn(this, (ObjectProperties.__proto__ || Object.getPrototypeOf(ObjectProperties)).call(this, props));

    _this.componentDidMount = function () {
      // Everytime the `alignKeys` event is emitted, we'll re-align the keys.
      _this.subscription = _this.context.eventEmitter.addListener('alignKeys', _this.alignKeys);
    };

    _this.componentWillReceiveProps = function (nextProps) {
      if (nextProps.keyWidth) {
        _this.setState({ keyWidth: nextProps.keyWidth });
      }
    };

    _this.componentWillUnmount = function () {
      _this.subscription.remove();
    };

    _this.alignKeys = function () {
      _this.keyWidthsIndex = {};

      _this.setState({
        keyWidth: null
      });

      window.setTimeout(function () {
        _this.context.eventEmitter.emit(_this.props.element.meta.id + ':alignKey');
      }, 5);
    };

    _this.reportKeyWidth = function (keyIdentifier, keyWidth) {
      if (_this.props.reportKeyWidth) {
        _this.props.reportKeyWidth(keyIdentifier, keyWidth);
        return;
      }

      _this.keyWidthsIndex[keyIdentifier] = keyWidth;

      var keyWidths = (0, _values2.default)(_this.keyWidthsIndex);

      if (keyWidths.length === _this.props.element.content.length) {
        _this.setState({
          keyWidth: (0, _max2.default)(keyWidths)
        });
      }

      return;
    };

    _this.state = {
      keyWidth: _this.props.keyWidth || null
    };

    _this.keyWidthsIndex = {};
    return _this;
  }

  _createClass(ObjectProperties, [{
    key: 'getComponent',
    value: function getComponent(element, _ref) {
      var key = _ref.key,
          index = _ref.index;

      if (!key) {
        key = index;
      }

      if ((0, _ElementUtils.isSelect)(element)) {
        return _react2.default.createElement(_Select2.default, {
          key: key,
          index: index,
          element: element,
          parentElement: this.props.element,
          reportKeyWidth: this.reportKeyWidth,
          keyWidth: this.state.keyWidth
        });
      } else if ((0, _ElementUtils.isStructured)(element)) {
        return _react2.default.createElement(_StructuredObjectProperty2.default, {
          key: key,
          index: index,
          element: element,
          parentElement: this.props.element,
          collapseByDefault: this.props.collapseByDefault,
          reportKeyWidth: this.reportKeyWidth,
          keyWidth: this.state.keyWidth
        });
      }

      return _react2.default.createElement(_ObjectProperty2.default, {
        key: key,
        index: index,
        element: element,
        parentElement: this.props.element,
        collapseByDefault: this.props.collapseByDefault,
        reportKeyWidth: this.reportKeyWidth,
        keyWidth: this.state.keyWidth
      });
    }
  }, {
    key: 'groupElements',
    value: function groupElements() {
      var _this2 = this;

      var elements = this.props.element.content;

      // Element groups, each group is represented by an object with
      // the following properties.
      //
      // * type (enum, required)
      //   * inherited (string) - Group of inherited properites
      //   * included (string) - Group of properties which were included
      //   * own (string) - Groupo of own properties
      //
      // * components (array, required)
      // * element (object, required)
      var groups = [];

      (0, _each2.default)(elements, function (element, index) {
        // Element hasn't been inherited, nor included.
        if (!element.meta || !element.meta.ref) {
          // The last group is a group of own properties, append the the current
          // element to that group.
          if (groups.length && (0, _last2.default)(groups).type === 'own') {
            return (0, _last2.default)(groups).components.push(_this2.getComponent(element, { index: index }));
          }

          // Last group is a group of inherited/included properties, create
          // a new group of own properties.
          return groups.push({
            type: 'own',
            components: [_this2.getComponent(element, { index: index })]
          });
        }

        var group = void 0;

        // Element has been inherited, or included; let's create a new group.
        if (groups.length && (0, _last2.default)(groups).name === element.meta.ref) {
          group = (0, _last2.default)(groups);
        } else {
          group = {
            name: element.meta.ref,
            components: []
          };

          if ((0, _ElementUtils.isInherited)(element)) {
            group.type = 'inherited';
          } else if ((0, _ElementUtils.isIncluded)(element)) {
            group.type = 'included';
          }

          groups.push(group);
        }

        return group.components.push(_this2.getComponent(element, {
          key: group.name + '+' + index,
          index: index
        }));
      });

      return groups;
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.element) {
        return false;
      }

      if ((0, _isEmpty2.default)(this.props.element.content)) {
        return false;
      }

      var elementGroups = this.groupElements();

      var ownPropertiesQuery = {
        type: 'own'
      };

      var includedPropertiesQuery = {
        type: 'included'
      };

      var inheritedPropertiesQuery = {
        type: 'inherited'
      };

      var ownOrIncludedGroupsQuery = {
        $or: [ownPropertiesQuery, includedPropertiesQuery]
      };

      var ownProperties = (0, _sift2.default)(ownPropertiesQuery, elementGroups);
      var inheritedProperties = (0, _sift2.default)(inheritedPropertiesQuery, elementGroups);
      var includedProperties = (0, _sift2.default)(includedPropertiesQuery, elementGroups);

      var ownOrIncludedProperties = (0, _sift2.default)(ownOrIncludedGroupsQuery, elementGroups);

      if (this.context.inheritedProperties === 'placeholder' && this.context.includedProperties === 'placeholder') {
        return _react2.default.createElement(
          'div',
          { style: this.style.root },
          (0, _map2.default)(inheritedProperties, function (group, groupIndex) {
            return _react2.default.createElement(
              _ObjectPropertiesGroup2.default,
              { type: group.type, name: group.name, key: groupIndex },
              group.components
            );
          }),
          (0, _map2.default)(includedProperties, function (group, groupIndex) {
            return _react2.default.createElement(
              _ObjectPropertiesGroup2.default,
              { type: group.type, name: group.name, key: groupIndex },
              group.components
            );
          }),
          _react2.default.createElement('div', { style: this.style.separator }),
          (0, _map2.default)(ownProperties, function (group, groupIndex) {
            return _react2.default.createElement(
              _ObjectPropertiesGroup2.default,
              { type: group.type, name: group.name, key: groupIndex },
              group.components
            );
          })
        );
      }

      return _react2.default.createElement(
        'div',
        { style: this.style.root },
        (0, _map2.default)(ownOrIncludedProperties, function (group, groupIndex) {
          return _react2.default.createElement(
            _ObjectPropertiesGroup2.default,
            { type: group.type, name: group.name, key: groupIndex },
            group.components
          );
        }),
        (0, _map2.default)(inheritedProperties, function (group, groupIndex) {
          return _react2.default.createElement(
            _ObjectPropertiesGroup2.default,
            { type: group.type, name: group.name, key: groupIndex },
            group.components
          );
        })
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var style = {
        root: {
          width: '100%',
          height: 'auto'
        },
        separator: {
          width: '100%',
          height: '1px',
          backgroundColor: 'rgb(232, 235, 238)'
        }
      };

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }]);

  return ObjectProperties;
}(_react2.default.Component), _class2.contextTypes = {
  theme: _propTypes2.default.object,
  eventEmitter: _propTypes2.default.object,
  includedProperties: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  inheritedProperties: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string])
}, _temp)) || _class;

exports.default = ObjectProperties;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "ObjectProperties.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "ObjectProperties.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeyColumn = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _random = __webpack_require__(105);

var _random2 = _interopRequireDefault(_random);

var _Column = __webpack_require__(6);

var _Column2 = _interopRequireDefault(_Column);

var _Key = __webpack_require__(55);

var _Key2 = _interopRequireDefault(_Key);

var _Requirement = __webpack_require__(71);

var _Requirement2 = _interopRequireDefault(_Requirement);

var _ElementUtils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KeyColumn = (0, _radium2.default)(_class = (_temp2 = _class2 = function (_React$Component) {
  _inherits(KeyColumn, _React$Component);

  function KeyColumn() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, KeyColumn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = KeyColumn.__proto__ || Object.getPrototypeOf(KeyColumn)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
      // After the component has been mounted, we can align the keys (the component
      // is in the DOM, it's possible to get the `clientWidth`).
      _this.alignKey();

      // Everytime the `alignKeys` event is emitted, we'll re-align the keys.
      if (_this.context.eventEmitter) {
        if (_this.props.parentElement.meta && _this.props.parentElement.meta.id) {
          _this.subscription = _this.context.eventEmitter.addListener(_this.props.parentElement.meta.id + ':alignKey', _this.alignKey);
        }
      }
    }, _this.componentWillUnmount = function () {
      if (_this.subscription) {
        _this.subscription.remove();
      }
    }, _this.alignKey = function () {
      var keyIdentifier = void 0;

      if (_this.props.element.meta && _this.props.element.meta.id) {
        keyIdentifier = _this.props.element.meta.id;
      } else {
        keyIdentifier = (0, _random2.default)(0, 1000000);
      }

      var keyDomNode = _reactDom2.default.findDOMNode(_this.refs.key);

      if (keyDomNode) {
        _this.props.reportKeyWidth(keyIdentifier, keyDomNode.clientWidth);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(KeyColumn, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Column2.default,
        { style: this.style.base },
        _react2.default.createElement(_Key2.default, {
          onClick: this.props.onClick,
          element: this.props.element,
          ref: 'key'
        }),
        _react2.default.createElement(_Requirement2.default, {
          element: this.props.element
        })
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var style = {
        base: {}
      };

      if ((0, _ElementUtils.isStructured)(this.props.element)) {
        style.base.marginLeft = '0px';
      } else {
        if ((0, _ElementUtils.containsStructuredElement)(this.props.parentElement)) {
          if (this.props.element.meta._nestedLevel === 0) {
            if ((0, _ElementUtils.containsSelectElement)(this.props.parentElement)) {
              style.base.marginLeft = '42px';
            } else {
              style.base.marginLeft = '20px';
            }
          } else {
            if ((0, _ElementUtils.containsSelectElement)(this.props.parentElement)) {
              style.base.marginLeft = '42px';
            } else {
              style.base.marginLeft = '30px';
            }
          }
        } else {
          style.base.marginLeft = '30px';
        }
      }

      style.base.marginRight = '40px';

      var keyWidth = void 0;

      if (this.props.keyWidth) {
        keyWidth = this.props.keyWidth + 'px';
      }

      if (keyWidth) {
        style.base.width = keyWidth;
        style.base.minWidth = keyWidth;
        style.base.maxWidth = keyWidth;
      } else {
        style.base.width = 'auto';
        style.base.minWidth = null;
        style.base.maxWidth = null;
      }

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }]);

  return KeyColumn;
}(_react2.default.Component), _class2.contextTypes = {
  eventEmitter: _propTypes2.default.object
}, _temp2)) || _class;

;

exports.KeyColumn = KeyColumn;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "KeyColumn.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "KeyColumn.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ruler = (_temp = _class = function (_React$Component) {
  _inherits(Ruler, _React$Component);

  function Ruler() {
    _classCallCheck(this, Ruler);

    return _possibleConstructorReturn(this, (Ruler.__proto__ || Object.getPrototypeOf(Ruler)).apply(this, arguments));
  }

  _createClass(Ruler, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: this.style.base },
        _react2.default.createElement(
          'div',
          { style: this.style.container },
          _react2.default.createElement('div', { style: this.style.talon }),
          this.props.children
        )
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var BORDER_COLOR = this.context.theme.BORDER_COLOR;


      var style = {
        base: {
          minWidth: '100%',
          maxWidth: '100%',
          height: 'auto'
        },
        container: {
          minWidth: '100%',
          maxWidth: '100%',
          width: '100%',
          borderLeft: '1px solid ' + BORDER_COLOR,
          position: 'relative'
        },
        talon: {
          position: 'absolute',
          top: '-14px',
          left: '-1px',
          width: '1px',
          height: '14px',
          backgroundColor: BORDER_COLOR
        }
      };

      if (this.props.subtle) {
        style.container.borderLeft = '1px solid transparent';
        style.talon.backgroundColor = 'transparent';
      }

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }]);

  return Ruler;
}(_react2.default.Component), _class.contextTypes = {
  theme: _propTypes2.default.object
}, _temp);
exports.default = (0, _radium2.default)(Ruler);
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "Ruler.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "Ruler.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _isEmpty = __webpack_require__(9);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _Row = __webpack_require__(7);

var _Row2 = _interopRequireDefault(_Row);

var _Column = __webpack_require__(6);

var _Column2 = _interopRequireDefault(_Column);

var _SelectOption = __webpack_require__(72);

var _SelectOption2 = _interopRequireDefault(_SelectOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _this.handleExpandCollapse = function () {
      _this.setState({
        isExpanded: !_this.state.isExpanded
      });
    };

    _this.state = {
      isExpanded: true
    };

    _this.keyWidthsIndex = {};
    return _this;
  }

  _createClass(Select, [{
    key: 'renderOptions',
    value: function renderOptions() {
      var _this2 = this;

      return this.props.element.content.map(function (element, index) {
        return _react2.default.createElement(_SelectOption2.default, {
          key: index,
          index: index,
          element: element,
          parentElement: _this2.props.element,
          reportKeyWidth: _this2.props.reportKeyWidth,
          keyWidth: _this2.props.keyWidth
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if ((0, _isEmpty2.default)(this.props.element.content)) {
        return null;
      }

      return _react2.default.createElement(
        _Row2.default,
        null,
        _react2.default.createElement(_Column2.default, { style: this.style.column }),
        _react2.default.createElement(
          _Column2.default,
          null,
          this.renderOptions()
        )
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var style = {
        column: {
          width: '2px',
          backgroundColor: this.context.theme.SELECT_LINE_COLOR
        }
      };

      return (0, _merge2.default)(style, {});
    }
  }]);

  return Select;
}(_react2.default.Component), _class2.contextTypes = {
  theme: _propTypes2.default.object,
  eventEmitter: _propTypes2.default.object
}, _temp)) || _class;

exports.default = Select;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "Select.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "Select.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toggle = (0, _radium2.default)(_class = function (_React$Component) {
  _inherits(Toggle, _React$Component);

  function Toggle() {
    _classCallCheck(this, Toggle);

    return _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).apply(this, arguments));
  }

  _createClass(Toggle, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          onClick: this.props.onClick,
          style: this.style.base
        },
        _react2.default.createElement('div', { style: this.style.icon })
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var style = {};

      style.base = {
        width: '13px',
        height: '13px'
      };

      style.icon = {
        width: '13px',
        height: '13px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      };

      if (this.props.isExpanded) {
        style.icon.backgroundImage = 'url(' + __webpack_require__(97) + ')';
        style.icon.backgroundSize = '13px 8px';
      } else {
        style.icon.backgroundImage = 'url(' + __webpack_require__(96) + ')';
        style.icon.backgroundSize = '8px 13px';
      }

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }]);

  return Toggle;
}(_react2.default.Component)) || _class;

exports.default = Toggle;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "Toggle.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "Toggle.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var TYPES = {
  MEMBER: 'member',
  ARRAY: 'array',
  OBJECT: 'object',
  STRING: 'string',
  NUMBER: 'number',
  ENUM: 'enum',
  SELECT: 'select'
};

exports.TYPES = TYPES;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "types.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "types.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(93);
} else {
  module.exports = __webpack_require__(92);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "'data:image/svg+xml;utf8,<svg width=\"8\" height=\"8\" viewBox=\"0 0 8 8\" xmlns=\"http://www.w3.org/2000/svg\"><title>Slice 1</title><rect stroke=\"%23B6BAC4\" stroke-width=\"2\" x=\"1\" y=\"1\" width=\"6\" height=\"6\" rx=\"40\" fill=\"none\" fill-rule=\"evenodd\"/></svg>'"

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function eventListener() {
      if (errorListener !== undefined) {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };
    var errorListener;

    // Adding an error listener is not optional because
    // if an error is thrown on an event emitter we cannot
    // guarantee that the actual event we are waiting will
    // be fired. The result could be a silent way to create
    // memory or file descriptor leaks, which is something
    // we should avoid.
    if (name !== 'error') {
      errorListener = function errorListener(err) {
        emitter.removeListener(name, eventListener);
        reject(err);
      };

      emitter.once('error', errorListener);
    }

    emitter.once(name, eventListener);
  });
}


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _abagnale = __webpack_require__(98);

var _abagnale2 = _interopRequireDefault(_abagnale);

var _cloneDeep = __webpack_require__(101);

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _eidolon = __webpack_require__(25);

var _eidolon2 = _interopRequireDefault(_eidolon);

var _fbemitter = __webpack_require__(100);

var _isUndefined = __webpack_require__(11);

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _isArray = __webpack_require__(24);

var _isArray2 = _interopRequireDefault(_isArray);

var _isObject = __webpack_require__(18);

var _isObject2 = _interopRequireDefault(_isObject);

var _map = __webpack_require__(19);

var _map2 = _interopRequireDefault(_map);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _minim = __webpack_require__(110);

var _minim2 = _interopRequireDefault(_minim);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduce = __webpack_require__(106);

var _reduce2 = _interopRequireDefault(_reduce);

var _radium = __webpack_require__(3);

var _Attribute = __webpack_require__(21);

var _Attribute2 = _interopRequireDefault(_Attribute);

var _Title = __webpack_require__(73);

var _Title2 = _interopRequireDefault(_Title);

var _fonts = __webpack_require__(8);

var _Preprocessor = __webpack_require__(83);

var _SamplesPreprocessor = __webpack_require__(87);

var _theme = __webpack_require__(90);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// isMinimElement :: * -> Boolean
var isMinimElement = function isMinimElement(element) {
  return element instanceof _minim2.default.Element || element instanceof _minim2.default.ArraySlice;
};

var Attributes = (_temp = _class = function (_React$Component) {
  _inherits(Attributes, _React$Component);

  function Attributes(props) {
    _classCallCheck(this, Attributes);

    var _this = _possibleConstructorReturn(this, (Attributes.__proto__ || Object.getPrototypeOf(Attributes)).call(this, props));

    _this.alignKeys = function () {
      _this.eventEmitter.emit('alignKeys');
    };

    _this.state = _this.transformPropsIntoState(_this.props);
    _this.eventEmitter = new _fbemitter.EventEmitter();
    return _this;
  }

  _createClass(Attributes, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        dereferencedDataStructures: this.state.dereferencedDataStructures,
        eventEmitter: this.eventEmitter,
        includedProperties: this.state.includedProperties,
        inheritedProperties: this.state.inheritedProperties,
        onElementLinkClick: this.state.onElementLinkClick,
        theme: this.state.theme,
        namedTypes: this.state.namedTypes,
        element: this.state.element
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState(this.transformPropsIntoState(nextProps));
    }
  }, {
    key: 'transformPropsIntoState',
    value: function transformPropsIntoState(props) {
      var theme = void 0;

      // Make a deep clone of the default theme object
      // to prevent future mutations; then we'll merge in custom theme.
      theme = (0, _cloneDeep2.default)(_theme2.default);
      theme = (0, _merge2.default)(theme, props.theme || {});

      // `dataStructures` prop is optional and is used to
      // resolve inheritance, references and includes/mixins, plus to
      // render the inheritance tree.
      var dataStructures = (0, _isUndefined2.default)(props.dataStructures) ? [] : props.dataStructures;
      var element = props.element;

      // serialize minim Element inputs (`element` and `dataStructures`)
      // to the expected refract 0.6 serialization
      var refract06Serializer = new _minim.JSON06Serialiser();
      if (isMinimElement(element)) {
        element = refract06Serializer.serialise(element.content);
      }
      if (isMinimElement(dataStructures)) {
        dataStructures = dataStructures.map(function (d) {
          return refract06Serializer.serialise(d.content);
        });
      }

      // We have to resolve all references, otherwise we wouldn't be able to
      // render the element. Dereferencing turns `{ element: 'MyObject', ... }`
      // into `{ element: 'object', ... }`, which is something Attributes Kit
      // understands.
      //
      // First, let's build index of the data structure elements in the following
      // format—`[dataStructure.meta.id]: dataStructureElement`, where
      // `dataStructure.meta.id` is name of the data structure.
      var dataStructuresIndex = props.dataStructuresIndex || (0, _reduce2.default)(dataStructures, function (result, dataStructure) {
        if (_typeof(dataStructure.meta.id) === 'object') {
          result[dataStructure.meta.id.content] = dataStructure;
        } else {
          result[dataStructure.meta.id] = dataStructure;
        }

        return result;
      }, {});

      var dereferencedDataStructures = props.dereferencedDataStructures || (0, _map2.default)(dataStructures, function (dataStructure) {
        return _eidolon2.default.dereference((0, _cloneDeep2.default)(dataStructure), dataStructuresIndex);
      });

      // Set default value of `inheritedProperties` and `includedProperties` options.
      // If a user hasn't provided the values, we default to true (= we'll render
      // the whole data structure including inherited and included properties).
      //
      // Options `showInherited` and `showIncluded` have been deprecated and
      // will be removed in the 1.0 release.
      var inheritedProperties = props.inheritedProperties || props.showInherited;
      var includedProperties = props.includedProperties || props.showIncluded;

      if ((0, _isUndefined2.default)(inheritedProperties)) {
        inheritedProperties = true;
      }

      if ((0, _isUndefined2.default)(includedProperties)) {
        includedProperties = true;
      }

      var title = void 0;

      if (props.title === 'show') {
        title = true;
      } else if (props.title === 'hide') {
        title = false;
      } else {
        title = true;
      }

      var maxInheritanceDepth = props.maxInheritanceDepth || undefined;

      // Set default value of `collapseByDefault` option. If a user hasn't
      // provided the value, we default to false (= render
      // the whole data structure expanded).
      var collapseByDefault = props.collapseByDefault;

      if ((0, _isUndefined2.default)(collapseByDefault)) {
        collapseByDefault = false;
      }

      var namedTypes = props.namedTypes;

      if ((0, _isUndefined2.default)(namedTypes)) {
        namedTypes = false;
      }

      // Set up a dummy handler for element link clicks.
      var onElementLinkClick = props.onElementLinkClick;

      if ((0, _isUndefined2.default)(onElementLinkClick)) {
        onElementLinkClick = function defaultOnElementLinkClickHandler() {};
      }

      var originElement = this.addNestedLevels((0, _cloneDeep2.default)(element));

      // Dereference the element. This overwrites the original
      // value with the normalized result. Reference information
      // is still available in the `meta.ref` properties.
      var dereferencedElement = _eidolon2.default.dereference(originElement, dataStructuresIndex);

      element = _abagnale2.default.forge([dereferencedElement], { separator: '.' })[0];

      (0, _SamplesPreprocessor.preprocessSamples)(element);
      (0, _Preprocessor.preprocess)(element);

      return {
        collapseByDefault: collapseByDefault,
        dereferencedDataStructures: dereferencedDataStructures,
        element: element,
        includedProperties: includedProperties,
        inheritedProperties: inheritedProperties,
        maxInheritanceDepth: maxInheritanceDepth,
        namedTypes: namedTypes,
        onElementLinkClick: onElementLinkClick,
        theme: theme,
        title: title
      };
    }
  }, {
    key: 'addNestedLevels',
    value: function addNestedLevels(element) {
      var _this2 = this;

      var nestedLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

      if (!element) {
        return element;
      }

      if (!element.meta) {
        element.meta = {};
      }

      if (element.content && element.content.value) {
        nestedLevel = nestedLevel + 1;
      }

      element.meta._nestedLevel = nestedLevel;

      if (element.content && (0, _isArray2.default)(element.content)) {
        element.content = (0, _map2.default)(element.content, function (nestedElement) {
          return _this2.addNestedLevels(nestedElement, nestedLevel);
        });
      } else if (element.content && (0, _isObject2.default)(element.content)) {
        element.content.value = this.addNestedLevels(element.content.value, nestedLevel);
      }

      return element;
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.element) {
        console.error(new Error('\n          Please provide the \u2018element\u2019 prop (\u2018<Attributes element="" />\u2019)\n          to the Attributes Kit.\n        '));

        return null;
      }
      var DESCRIPTION_COLOR = this.state.theme.DESCRIPTION_COLOR;

      return _react2.default.createElement(
        'div',
        { className: 'attributesKit' },
        this.state.title && _react2.default.createElement(_Title2.default, { element: this.state.element }),
        _react2.default.createElement(_radium.Style, {
          scopeSelector: '.attributesKit',
          rules: {
            p: {
              marginBottom: '4px',
              fontFamily: _fonts.DEFAULT_FONT_FAMILY,
              fontSize: '14px',
              color: DESCRIPTION_COLOR,
              lineHeight: '21px',
              fontWeight: 'regular'
            },
            'p:last-child': {
              marginBottom: '0px'
            },
            ul: {
              marginLeft: '20px'
            },
            a: {
              color: '#747E8E',
              textDecoration: 'none',
              borderBottom: '1px solid #DCE0E8'
            },
            'a:hover': {
              borderBottom: 'none'
            }
          }
        }),
        _react2.default.createElement(_Attribute2.default, {
          element: this.state.element,
          theme: this.state.theme,
          collapseByDefault: this.state.collapseByDefault
        })
      );
    }
  }]);

  return Attributes;
}(_react2.default.Component), _class.defaultProps = {
  includedProperties: 'show',
  inheritedProperties: 'show'
}, _class.childContextTypes = {
  dereferencedDataStructures: _propTypes2.default.array,
  theme: _propTypes2.default.object,
  element: _propTypes2.default.object,
  namedTypes: _propTypes2.default.bool,
  eventEmitter: _propTypes2.default.object,
  onElementLinkClick: _propTypes2.default.func,
  includedProperties: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  inheritedProperties: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string])
}, _temp);
exports.default = Attributes;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "Attributes.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "Attributes.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = __webpack_require__(22);
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(22);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(34);
var assign = __webpack_require__(40);

var ReactPropTypesSecret = __webpack_require__(22);
var checkPropTypes = __webpack_require__(41);

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ArrayDefaults = __webpack_require__(45);

var _ArrayHeader = __webpack_require__(46);

var _ArrayHeader2 = _interopRequireDefault(_ArrayHeader);

var _ArrayItem = __webpack_require__(47);

var _ArrayItem2 = _interopRequireDefault(_ArrayItem);

var _ArrayItems = __webpack_require__(51);

var _ArrayItems2 = _interopRequireDefault(_ArrayItems);

var _ArraySamples = __webpack_require__(53);

var _Column = __webpack_require__(6);

var _Column2 = _interopRequireDefault(_Column);

var _Row = __webpack_require__(7);

var _Row2 = _interopRequireDefault(_Row);

var _StructuredArrayItem = __webpack_require__(48);

var _StructuredArrayItem2 = _interopRequireDefault(_StructuredArrayItem);

var _ElementUtils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArrayComponent = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(ArrayComponent, _React$Component);

  function ArrayComponent(props) {
    _classCallCheck(this, ArrayComponent);

    var _this = _possibleConstructorReturn(this, (ArrayComponent.__proto__ || Object.getPrototypeOf(ArrayComponent)).call(this, props));

    _this.handleExpandCollapse = function () {
      _this.setState({
        isExpanded: !_this.state.isExpanded
      });
    };

    _this.state = {
      isExpanded: true
    };
    return _this;
  }

  _createClass(ArrayComponent, [{
    key: 'renderArrayItems',
    value: function renderArrayItems() {
      var _this2 = this;

      if (!this.state.isExpanded) {
        return false;
      }

      var showArrayItemIndex = void 0;
      var showBullet = void 0;

      switch (this.props.element.element) {
        case 'enum':
          showArrayItemIndex = false;
          showBullet = true;
          break;
        case 'array':
          showArrayItemIndex = true;
          showBullet = false;
          break;
        default:
          showArrayItemIndex = true;
          showBullet = false;
      }

      return _react2.default.createElement(
        _ArrayItems2.default,
        { style: this.style.arrayItems },
        this.props.element.content.map(function (element, index) {
          if ((0, _ElementUtils.isStructured)(element)) {
            return _react2.default.createElement(_StructuredArrayItem2.default, {
              key: index,
              index: index,
              element: element,
              parentElement: _this2.props.element,
              showArrayItemIndex: showArrayItemIndex,
              showBullet: showBullet,
              collapseByDefault: _this2.props.collapseByDefault
            });
          }

          return _react2.default.createElement(_ArrayItem2.default, {
            key: index,
            index: index,
            element: element,
            parentElement: _this2.props.element,
            showArrayItemIndex: showArrayItemIndex,
            showBullet: showBullet,
            collapseByDefault: _this2.props.collapseByDefault
          });
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.element.content) {
        return false;
      }

      return _react2.default.createElement(
        _Row2.default,
        null,
        _react2.default.createElement(
          _Column2.default,
          null,
          _react2.default.createElement(_ArrayHeader2.default, {
            element: this.props.element,
            parentElement: this.props.parentElement,
            isExpanded: this.state.isExpanded,
            onSampleToggleClick: this.handleExpandCollapse,
            sampleTitle: 'Description'
          }),
          (0, _ElementUtils.hasItems)(this.props.element) && this.renderArrayItems(),
          (0, _ElementUtils.hasSamples)(this.props.element) && _react2.default.createElement(_ArraySamples.ArraySamples, {
            element: this.props.element,
            collapseByDefault: this.props.collapseByDefault
          }),
          (0, _ElementUtils.hasDefault)(this.props.element) && _react2.default.createElement(_ArrayDefaults.ArrayDefaults, {
            element: this.props.element,
            collapseByDefault: this.props.collapseByDefault
          })
        )
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var ARRAY_ITEMS_BORDER_COLOR = this.context.theme.ARRAY_ITEMS_BORDER_COLOR;


      var style = {
        arrayItems: {
          base: {
            border: '1px solid ' + ARRAY_ITEMS_BORDER_COLOR
          }
        }
      };

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }]);

  return ArrayComponent;
}(_react2.default.Component), _class2.contextTypes = {
  theme: _propTypes2.default.object
}, _temp)) || _class;

exports.default = ArrayComponent;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "Array.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "Array.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrayDefaults = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _Column = __webpack_require__(6);

var _Column2 = _interopRequireDefault(_Column);

var _Row = __webpack_require__(7);

var _Row2 = _interopRequireDefault(_Row);

var _Value = __webpack_require__(10);

var _SampleToggle = __webpack_require__(12);

var _SampleToggle2 = _interopRequireDefault(_SampleToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArrayDefaults = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(ArrayDefaults, _React$Component);

  function ArrayDefaults(props) {
    _classCallCheck(this, ArrayDefaults);

    var _this = _possibleConstructorReturn(this, (ArrayDefaults.__proto__ || Object.getPrototypeOf(ArrayDefaults)).call(this, props));

    _this.handleExpandCollapse = function () {
      _this.setState({
        isExpanded: !_this.state.isExpanded
      });
    };

    _this.state = {
      isExpanded: true
    };
    return _this;
  }

  _createClass(ArrayDefaults, [{
    key: 'render',
    value: function render() {
      if (!this.props.element) {
        return false;
      }

      if (!this.props.element.cache.hasDefault) {
        return false;
      }

      return _react2.default.createElement(
        _Row2.default,
        null,
        _react2.default.createElement(
          _Column2.default,
          null,
          _react2.default.createElement(
            _Row2.default,
            {
              style: this.style.header,
              onClick: this.handleExpandCollapse
            },
            _react2.default.createElement(_SampleToggle2.default, {
              isExpanded: this.state.isExpanded,
              onClick: this.handleExpandCollapse,
              sampleTitle: 'Default'
            })
          ),
          this.state.isExpanded && _react2.default.createElement(_Value.Value, {
            element: this.props.element.attributes.default,
            collapseByDefault: this.props.collapseByDefault
          })
        )
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var BORDER_COLOR = this.context.theme.BORDER_COLOR;


      var style = {
        header: {
          background: '#F8F8F9',
          borderLeft: '1px solid ' + BORDER_COLOR,
          borderRight: '1px solid ' + BORDER_COLOR,
          paddingTop: '8px',
          paddingBottom: '8px',
          paddingLeft: '8px',
          paddingRight: '8px'
        }
      };

      if (!this.state.isExpanded) {
        style.header.borderBottom = '1px solid ' + BORDER_COLOR;
      }

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }]);

  return ArrayDefaults;
}(_react2.default.Component), _class2.contextTypes = {
  theme: _propTypes2.default.object
}, _temp)) || _class;

exports.ArrayDefaults = ArrayDefaults;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "ArrayDefaults.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "ArrayDefaults.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _Row = __webpack_require__(7);

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArrayHeader = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(ArrayHeader, _React$Component);

  function ArrayHeader() {
    _classCallCheck(this, ArrayHeader);

    return _possibleConstructorReturn(this, (ArrayHeader.__proto__ || Object.getPrototypeOf(ArrayHeader)).apply(this, arguments));
  }

  _createClass(ArrayHeader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Row2.default, { style: this.style.base });
    }
  }, {
    key: 'style',
    get: function get() {
      var _context$theme = this.context.theme,
          ARRAY_HEADER_BORDER_COLOR = _context$theme.ARRAY_HEADER_BORDER_COLOR,
          ARRAY_HEADER_BACKGROUND_COLOR = _context$theme.ARRAY_HEADER_BACKGROUND_COLOR;


      var style = {
        base: {
          border: '1px solid ' + ARRAY_HEADER_BORDER_COLOR,
          borderBottom: 'none',
          height: '5px',
          width: '100%',
          backgroundColor: ARRAY_HEADER_BACKGROUND_COLOR
        }
      };

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }]);

  return ArrayHeader;
}(_react2.default.Component), _class2.contextTypes = {
  theme: _propTypes2.default.object
}, _temp)) || _class;

exports.default = ArrayHeader;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "ArrayHeader.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "ArrayHeader.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _ArrayItemDefaults = __webpack_require__(49);

var _ArrayItemDefaults2 = _interopRequireDefault(_ArrayItemDefaults);

var _ArrayItemIndex = __webpack_require__(27);

var _ArrayItemIndex2 = _interopRequireDefault(_ArrayItemIndex);

var _ArrayItemSamples = __webpack_require__(50);

var _ArrayItemSamples2 = _interopRequireDefault(_ArrayItemSamples);

var _Column = __webpack_require__(6);

var _Column2 = _interopRequireDefault(_Column);

var _Description = __webpack_require__(13);

var _Description2 = _interopRequireDefault(_Description);

var _Row = __webpack_require__(7);

var _Row2 = _interopRequireDefault(_Row);

var _Type = __webpack_require__(14);

var _Type2 = _interopRequireDefault(_Type);

var _Value = __webpack_require__(10);

var _ElementUtils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArrayItem = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(ArrayItem, _React$Component);

  function ArrayItem() {
    _classCallCheck(this, ArrayItem);

    return _possibleConstructorReturn(this, (ArrayItem.__proto__ || Object.getPrototypeOf(ArrayItem)).apply(this, arguments));
  }

  _createClass(ArrayItem, [{
    key: 'render',
    value: function render() {
      var style = this.style;

      return _react2.default.createElement(
        _Row2.default,
        { style: style.root },
        this.props.showArrayItemIndex && _react2.default.createElement(_ArrayItemIndex2.default, { index: this.props.index }),
        this.props.showBullet && _react2.default.createElement(_Column2.default, { style: style.bulletColumn }),
        _react2.default.createElement(
          _Column2.default,
          { style: style.column },
          _react2.default.createElement(
            _Row2.default,
            null,
            (0, _ElementUtils.hasValue)(this.props.element) && _react2.default.createElement(
              _Column2.default,
              null,
              _react2.default.createElement(_Value.Value, {
                element: this.props.element,
                collapseByDefault: this.props.collapseByDefault
              })
            ),
            (0, _ElementUtils.hasType)(this.props.element) && _react2.default.createElement(
              _Column2.default,
              { style: style.typeColumn },
              _react2.default.createElement(_Type2.default, {
                element: this.props.element,
                style: style.type
              })
            )
          ),
          (0, _ElementUtils.hasDescription)(this.props.element) && _react2.default.createElement(
            _Row2.default,
            null,
            _react2.default.createElement(_Description2.default, { element: this.props.element })
          ),
          (0, _ElementUtils.hasSamples)(this.props.element) && _react2.default.createElement(
            _Row2.default,
            null,
            _react2.default.createElement(_ArrayItemSamples2.default, {
              element: this.props.element,
              collapseByDefault: this.props.collapseByDefault
            })
          ),
          (0, _ElementUtils.hasDefault)(this.props.element) && _react2.default.createElement(
            _Row2.default,
            null,
            _react2.default.createElement(_ArrayItemDefaults2.default, {
              element: this.props.element,
              collapseByDefault: this.props.collapseByDefault
            })
          )
        )
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var ARRAY_ITEMS_BORDER_COLOR = this.context.theme.ARRAY_ITEMS_BORDER_COLOR;


      var style = {
        root: {
          borderBottom: '1px solid ' + ARRAY_ITEMS_BORDER_COLOR,
          paddingTop: '8px',
          paddingBottom: '8px'
        },
        column: {
          paddingLeft: '8px'
        },
        type: {
          type: {
            marginBottom: '0px'
          }
        },
        typeColumn: {
          justifyContent: 'center'
        },
        bulletColumn: {
          width: '8px',
          minWidth: '8px',
          maxWidth: '8px',
          height: 'auto',
          alignSelf: 'stretch',
          backgroundImage: 'url(' + __webpack_require__(35) + ')',
          backgroundSize: '8px 8px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          marginLeft: '16px',
          marginRight: '8px'
        }
      };

      // Last array item doesn't have a border.
      if ((0, _ElementUtils.isLastArrayItem)(this.props.parentElement, this.props.index)) {
        style.root.borderBottom = 'none';
      }

      // In case of objects and array we want to indent
      // all properties (members) the same.
      if ((0, _ElementUtils.isObjectOrArray)(this.props.parentElement) && (0, _ElementUtils.containsStructuredElement)(this.props.parentElement)) {
        style.column.paddingLeft = '10px';
      }

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }]);

  return ArrayItem;
}(_react2.default.Component), _class2.contextTypes = {
  theme: _propTypes2.default.object
}, _temp)) || _class;

exports.default = ArrayItem;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "ArrayItem.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "ArrayItem.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _ArrayItemIndex = __webpack_require__(27);

var _ArrayItemIndex2 = _interopRequireDefault(_ArrayItemIndex);

var _Column = __webpack_require__(6);

var _Column2 = _interopRequireDefault(_Column);

var _Description = __webpack_require__(13);

var _Description2 = _interopRequireDefault(_Description);

var _Row = __webpack_require__(7);

var _Row2 = _interopRequireDefault(_Row);

var _Value = __webpack_require__(10);

var _ElementUtils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StructuredArrayItem = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(StructuredArrayItem, _React$Component);

  function StructuredArrayItem(props) {
    _classCallCheck(this, StructuredArrayItem);

    var _this = _possibleConstructorReturn(this, (StructuredArrayItem.__proto__ || Object.getPrototypeOf(StructuredArrayItem)).call(this, props));

    _this.state = {
      isStructured: (0, _ElementUtils.isStructured)(_this.props.element),
      isObject: (0, _ElementUtils.isObject)(_this.props.element),
      isArray: (0, _ElementUtils.isArray)(_this.props.element)
    };

    // State hasn't been set; tree is expanded by default,
    // after a click, it collapses.
    if (_this.state.isStructured) {
      _this.state.isExpanded = true;
      _this.state.containsStructuredElement = (0, _ElementUtils.containsStructuredElement)(_this.props.parentElement);
    }
    return _this;
  }

  _createClass(StructuredArrayItem, [{
    key: 'render',
    value: function render() {
      var style = this.style;

      return _react2.default.createElement(
        _Row2.default,
        { style: style.base },
        this.props.showArrayItemIndex && _react2.default.createElement(_ArrayItemIndex2.default, { index: this.props.index }),
        this.props.showBullet && _react2.default.createElement(_Column2.default, { style: style.bulletColumn }),
        _react2.default.createElement(
          _Column2.default,
          { style: style.column },
          (0, _ElementUtils.hasDescription)(this.props.element) && _react2.default.createElement(
            _Row2.default,
            null,
            _react2.default.createElement(_Description2.default, { element: this.props.element })
          ),
          _react2.default.createElement(
            _Row2.default,
            null,
            _react2.default.createElement(_Value.Value, {
              expandableCollapsible: true,
              element: this.props.element,
              parentElement: this.props.parentElement,
              collapseByDefault: this.props.collapseByDefault
            })
          )
        )
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var ARRAY_ITEMS_BORDER_COLOR = this.context.theme.ARRAY_ITEMS_BORDER_COLOR;


      var style = {
        base: {
          borderBottom: '1px solid ' + ARRAY_ITEMS_BORDER_COLOR,
          paddingTop: '8px',
          paddingBottom: '8px'
        },
        column: {
          width: '100%'
        },
        type: {
          root: {
            marginBottom: '4px'
          }
        },
        toggleColumn: {
          width: '30px',
          maxWidth: '30px',
          minWidth: '30px'
        },
        bulletColumn: {
          width: '8px',
          minWidth: '8px',
          maxWidth: '8px',
          height: 'auto',
          alignSelf: 'stretch',
          backgroundImage: 'url(' + __webpack_require__(35) + ')',
          backgroundSize: '8px 8px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          marginLeft: '16px',
          marginRight: '8px'
        }
      };

      if ((0, _ElementUtils.isObject)(this.props.element)) {
        style.base.paddingTop = '0px';
        style.base.paddingBottom = '0px';
        style.column.paddingLeft = '0px';
        style.column.paddingRight = '0px';
      } else {
        style.column.paddingLeft = '10px';
        style.column.paddingRight = '10px';
      }

      var isLast = (0, _ElementUtils.isLastArrayItem)(this.props.parentElement, this.props.index);

      // Last array item doesn't have a border.
      if (isLast) {
        style.base.borderBottom = 'none';
      }

      if ((0, _ElementUtils.isObject)(this.props.element)) {
        style.base.paddingBottom = '0px';
      }

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }]);

  return StructuredArrayItem;
}(_react2.default.Component), _class2.contextTypes = {
  theme: _propTypes2.default.object
}, _temp)) || _class;

exports.default = StructuredArrayItem;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "StructuredArrayItem.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "StructuredArrayItem.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _Sample = __webpack_require__(16);

var _Sample2 = _interopRequireDefault(_Sample);

var _Row = __webpack_require__(7);

var _Row2 = _interopRequireDefault(_Row);

var _Column = __webpack_require__(6);

var _Column2 = _interopRequireDefault(_Column);

var _ElementUtils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArrayItemDefaults = (0, _radium2.default)(_class = function (_React$Component) {
  _inherits(ArrayItemDefaults, _React$Component);

  function ArrayItemDefaults() {
    _classCallCheck(this, ArrayItemDefaults);

    return _possibleConstructorReturn(this, (ArrayItemDefaults.__proto__ || Object.getPrototypeOf(ArrayItemDefaults)).apply(this, arguments));
  }

  _createClass(ArrayItemDefaults, [{
    key: 'render',
    value: function render() {
      if (!this.props.element) {
        return false;
      }

      if (!(0, _ElementUtils.hasDefault)(this.props.element)) {
        return false;
      }

      var defaultValue = this.props.element.attributes.default;

      return _react2.default.createElement(
        _Row2.default,
        null,
        _react2.default.createElement(
          _Column2.default,
          null,
          _react2.default.createElement(_Sample2.default, {
            title: 'Default',
            sample: defaultValue,
            style: this.style.sample,
            collapseByDefault: this.props.collapseByDefault
          })
        )
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var style = {
        sample: {
          row: {
            marginTop: '6px'
          }
        }
      };

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }]);

  return ArrayItemDefaults;
}(_react2.default.Component)) || _class;

exports.default = ArrayItemDefaults;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "ArrayItemDefaults.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "ArrayItemDefaults.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _Sample = __webpack_require__(16);

var _Sample2 = _interopRequireDefault(_Sample);

var _Row = __webpack_require__(7);

var _Row2 = _interopRequireDefault(_Row);

var _Column = __webpack_require__(6);

var _Column2 = _interopRequireDefault(_Column);

var _ElementUtils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArrayItemSamples = (0, _radium2.default)(_class = function (_React$Component) {
  _inherits(ArrayItemSamples, _React$Component);

  function ArrayItemSamples() {
    _classCallCheck(this, ArrayItemSamples);

    return _possibleConstructorReturn(this, (ArrayItemSamples.__proto__ || Object.getPrototypeOf(ArrayItemSamples)).apply(this, arguments));
  }

  _createClass(ArrayItemSamples, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.element) {
        return false;
      }

      if (!(0, _ElementUtils.hasSamples)(this.props.element)) {
        return false;
      }

      var samples = this.props.element.attributes.samples;

      return _react2.default.createElement(
        _Row2.default,
        { style: this.style.row },
        _react2.default.createElement(
          _Column2.default,
          null,
          samples.map(function (sample, index) {
            return _react2.default.createElement(_Sample2.default, {
              sample: sample,
              key: index,
              style: _this2.style.sample,
              collapseByDefault: _this2.props.collapseByDefault
            });
          })
        )
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var style = {
        row: {
          marginTop: '2px'
        },
        sample: {
          row: {
            marginTop: '6px'
          }
        }
      };

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }]);

  return ArrayItemSamples;
}(_react2.default.Component)) || _class;

exports.default = ArrayItemSamples;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "ArrayItemSamples.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "ArrayItemSamples.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArrayItems = (0, _radium2.default)(_class = function (_React$Component) {
  _inherits(ArrayItems, _React$Component);

  function ArrayItems() {
    _classCallCheck(this, ArrayItems);

    return _possibleConstructorReturn(this, (ArrayItems.__proto__ || Object.getPrototypeOf(ArrayItems)).apply(this, arguments));
  }

  _createClass(ArrayItems, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: this.style.base },
        this.props.children
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var style = {
        base: {
          width: '100%',
          height: 'auto'
        }
      };

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }]);

  return ArrayItems;
}(_react2.default.Component)) || _class;

exports.default = ArrayItems;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "ArrayItems.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "ArrayItems.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArraySample = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _Row = __webpack_require__(7);

var _Row2 = _interopRequireDefault(_Row);

var _Column = __webpack_require__(6);

var _Column2 = _interopRequireDefault(_Column);

var _Value = __webpack_require__(10);

var _SampleToggle = __webpack_require__(12);

var _SampleToggle2 = _interopRequireDefault(_SampleToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArraySample = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(ArraySample, _React$Component);

  function ArraySample(props) {
    _classCallCheck(this, ArraySample);

    var _this = _possibleConstructorReturn(this, (ArraySample.__proto__ || Object.getPrototypeOf(ArraySample)).call(this, props));

    _this.handleExpandCollapse = function () {
      _this.setState({
        isExpanded: !_this.state.isExpanded
      });
    };

    _this.state = {
      isExpanded: false
    };
    return _this;
  }

  _createClass(ArraySample, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Row2.default,
        null,
        _react2.default.createElement(
          _Column2.default,
          null,
          _react2.default.createElement(
            _Row2.default,
            {
              style: this.style.header,
              onClick: this.handleExpandCollapse
            },
            _react2.default.createElement(_SampleToggle2.default, {
              isExpanded: this.state.isExpanded,
              onClick: this.handleExpandCollapse
            })
          ),
          this.state.isExpanded && _react2.default.createElement(
            _Row2.default,
            null,
            _react2.default.createElement(_Value.Value, {
              element: this.props.sample,
              collapseByDefault: this.props.collapseByDefault
            })
          )
        )
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var BORDER_COLOR = this.context.theme.BORDER_COLOR;


      var style = {
        header: {
          background: '#F8F8F9',
          borderLeft: '1px solid ' + BORDER_COLOR,
          borderRight: '1px solid ' + BORDER_COLOR,
          paddingTop: '8px',
          paddingBottom: '8px',
          paddingLeft: '8px',
          paddingRight: '8px'
        }
      };

      if (!this.state.isExpanded) {
        style.header.borderBottom = '1px solid ' + BORDER_COLOR;
      }

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }]);

  return ArraySample;
}(_react2.default.Component), _class2.contextTypes = {
  theme: _propTypes2.default.object
}, _temp)) || _class;

exports.ArraySample = ArraySample;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "ArraySample.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "ArraySample.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArraySamples = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _ArraySample = __webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArraySamples = (0, _radium2.default)(_class = function (_React$Component) {
  _inherits(ArraySamples, _React$Component);

  function ArraySamples() {
    _classCallCheck(this, ArraySamples);

    return _possibleConstructorReturn(this, (ArraySamples.__proto__ || Object.getPrototypeOf(ArraySamples)).apply(this, arguments));
  }

  _createClass(ArraySamples, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.element) {
        return false;
      }

      if (!this.props.element.cache.hasSamples) {
        return false;
      }

      var samples = this.props.element.attributes.samples;

      return _react2.default.createElement(
        'div',
        { style: this.style.base },
        samples.map(function (sample, index) {
          return _react2.default.createElement(_ArraySample.ArraySample, {
            element: _this2.props.element,
            sample: sample,
            key: index,
            collapseByDefault: _this2.props.collapseByDefault
          });
        })
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var style = {
        base: {
          width: '100%'
        }
      };

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }]);

  return ArraySamples;
}(_react2.default.Component)) || _class;

exports.ArraySamples = ArraySamples;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "ArraySamples.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "ArraySamples.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _fonts = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Error = (0, _radium2.default)(_class = function (_React$Component) {
  _inherits(Error, _React$Component);

  function Error() {
    _classCallCheck(this, Error);

    return _possibleConstructorReturn(this, (Error.__proto__ || Object.getPrototypeOf(Error)).apply(this, arguments));
  }

  _createClass(Error, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: this.style.base },
        _react2.default.createElement(
          'h3',
          { style: this.style.title },
          'Uh-oh, an error occurred!'
        ),
        _react2.default.createElement(
          'p',
          { style: this.style.text },
          this.props.errorMessage
        )
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var style = {
        base: {
          width: '100%',
          height: 'auto',
          color: '#4C5264',
          backgroundColor: '#fff',
          border: '1px solid rgb(213, 222, 237)',
          paddingTop: '10px',
          paddingBottom: '14px',
          paddingLeft: '16px',
          paddingRight: '16px',
          borderRadius: '3px',
          boxShadow: 'rgb(240, 241, 244) 0px 1px 1px 0px'
        },
        title: {
          fontFamily: _fonts.DEFAULT_FONT_FAMILY,
          fontSize: '18px',
          lineHeight: '150%',
          fontWeight: '600',
          marginBottom: '2px',
          color: '#DD1711'
        },
        text: {
          fontFamily: _fonts.DEFAULT_FONT_FAMILY,
          fontSize: '16px',
          lineHeight: '125%'
        }
      };

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }]);

  return Error;
}(_react2.default.Component)) || _class;

exports.default = Error;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "Error.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "Error.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _isUndefined = __webpack_require__(11);

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fonts = __webpack_require__(8);

var _ElementUtils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Key = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(Key, _React$Component);

  function Key() {
    _classCallCheck(this, Key);

    return _possibleConstructorReturn(this, (Key.__proto__ || Object.getPrototypeOf(Key)).apply(this, arguments));
  }

  _createClass(Key, [{
    key: 'render',
    value: function render() {
      if ((0, _isUndefined2.default)(this.key)) {
        return false;
      }

      return _react2.default.createElement(
        'div',
        {
          style: this.style.base,
          onClick: this.props.onClick
        },
        this.key
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var KEY_COLOR = this.context.theme.KEY_COLOR;


      var style = {
        base: {
          width: '100%',
          height: 'auto',
          fontFamily: _fonts.MONO_FONT_FAMILY,
          fontWeight: '500',
          fontSize: '13px',
          lineHeight: '13px',
          color: KEY_COLOR,
          wordBreak: 'keep-all',
          wordWrap: 'normal'
        }
      };

      var isClickable = (0, _isUndefined2.default)(this.props.index) && this.props.element && (0, _ElementUtils.containsStructuredElement)(this.props.element);

      if (isClickable) {
        style.base.cursor = 'pointer';
      }

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }, {
    key: 'key',
    get: function get() {
      if (!(0, _isUndefined2.default)(this.props.index)) {
        return this.props.index;
      }

      if (this.props.element.element === 'member') {
        return this.props.element.content.key.content;
      }

      return undefined;
    }
  }]);

  return Key;
}(_react2.default.Component), _class2.contextTypes = {
  theme: _propTypes2.default.object
}, _temp)) || _class;

exports.default = Key;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "Key.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "Key.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ObjectProperties = __webpack_require__(28);

var _ObjectProperties2 = _interopRequireDefault(_ObjectProperties);

var _ObjectHeader = __webpack_require__(58);

var _ObjectHeader2 = _interopRequireDefault(_ObjectHeader);

var _ObjectSamples = __webpack_require__(67);

var _ObjectSamples2 = _interopRequireDefault(_ObjectSamples);

var _ObjectDefaults = __webpack_require__(57);

var _ObjectDefaults2 = _interopRequireDefault(_ObjectDefaults);

var _Ruler = __webpack_require__(30);

var _Ruler2 = _interopRequireDefault(_Ruler);

var _Row = __webpack_require__(7);

var _Row2 = _interopRequireDefault(_Row);

var _Column = __webpack_require__(6);

var _Column2 = _interopRequireDefault(_Column);

var _ElementUtils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ObjectComponent = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(ObjectComponent, _React$Component);

  function ObjectComponent(props) {
    _classCallCheck(this, ObjectComponent);

    var _this = _possibleConstructorReturn(this, (ObjectComponent.__proto__ || Object.getPrototypeOf(ObjectComponent)).call(this, props));

    _this.handleExpandCollapse = function () {
      _this.setState({
        isExpanded: !_this.state.isExpanded
      });
    };

    _this.props.element.content = _this.props.element.content || [];

    _this.state = {
      isExpanded: true
    };
    return _this;
  }

  _createClass(ObjectComponent, [{
    key: 'renderObjectProperties',
    value: function renderObjectProperties() {
      if (!(0, _ElementUtils.hasProperties)(this.props.element)) {
        return null;
      }

      if (!this.state.isExpanded) {
        return null;
      }

      if ((0, _ElementUtils.isArray)(this.props.parentElement)) {
        return _react2.default.createElement(
          _Row2.default,
          null,
          _react2.default.createElement(_ObjectProperties2.default, {
            element: this.props.element,
            collapseByDefault: this.props.collapseByDefault
          })
        );
      }

      if (this.props.expandableCollapsible) {
        return _react2.default.createElement(
          _Row2.default,
          null,
          _react2.default.createElement(
            _Ruler2.default,
            { style: this.style.ruler },
            _react2.default.createElement(_ObjectProperties2.default, {
              element: this.props.element,
              collapseByDefault: this.props.collapseByDefault
            })
          )
        );
      }

      return _react2.default.createElement(
        _Row2.default,
        null,
        _react2.default.createElement(_ObjectProperties2.default, {
          element: this.props.element,
          collapseByDefault: this.props.collapseByDefault
        })
      );
    }
  }, {
    key: 'renderObjectSamplesAndDefaults',
    value: function renderObjectSamplesAndDefaults() {
      var doesHaveSamples = (0, _ElementUtils.hasSamples)(this.props.element);
      var doesHaveDefaults = (0, _ElementUtils.hasDefault)(this.props.element);

      if (!doesHaveSamples && !doesHaveDefaults) {
        return null;
      }

      return _react2.default.createElement(
        _Row2.default,
        null,
        doesHaveSamples && _react2.default.createElement(_ObjectSamples2.default, {
          element: this.props.element,
          parentElement: this.props.parentElement,
          collapseByDefault: this.props.collapseByDefault
        }),
        doesHaveDefaults && _react2.default.createElement(_ObjectDefaults2.default, {
          element: this.props.element,
          parentElement: this.props.parentElement,
          collapseByDefault: this.props.collapseByDefault
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Row2.default,
        { style: this.style.base },
        _react2.default.createElement(
          _Column2.default,
          null,
          _react2.default.createElement(
            _Row2.default,
            null,
            this.props.parentElement && _react2.default.createElement(_ObjectHeader2.default, {
              onToggleClick: this.handleExpandCollapse,
              onSampleToggleClick: this.handleExpandCollapse,
              onTypeClick: this.handleExpandCollapse,
              isExpanded: this.state.isExpanded,
              element: this.props.element,
              parentElement: this.props.parentElement,
              expandableCollapsible: this.props.expandableCollapsible
            })
          ),
          this.renderObjectProperties(),
          this.renderObjectSamplesAndDefaults()
        )
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var ALTERNATE_BORDER_COLOR = this.context.theme.ALTERNATE_BORDER_COLOR;


      var style = {
        base: {},
        ruler: {
          root: {
            paddingBottom: '0px'
          }
        }
      };

      // Only if it's a top-level element.
      if (!this.props.parentElement && !this.props.isSample) {
        style.base.borderTop = '1px solid ' + ALTERNATE_BORDER_COLOR;
      }

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }]);

  return ObjectComponent;
}(_react2.default.Component), _class2.contextTypes = {
  theme: _propTypes2.default.object
}, _temp)) || _class;

exports.default = ObjectComponent;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "Object.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "Object.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _Column = __webpack_require__(6);

var _Column2 = _interopRequireDefault(_Column);

var _Row = __webpack_require__(7);

var _Row2 = _interopRequireDefault(_Row);

var _SampleToggle = __webpack_require__(12);

var _SampleToggle2 = _interopRequireDefault(_SampleToggle);

var _Value = __webpack_require__(10);

var _ElementUtils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ObjectDefaults = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(ObjectDefaults, _React$Component);

  function ObjectDefaults(props) {
    _classCallCheck(this, ObjectDefaults);

    var _this = _possibleConstructorReturn(this, (ObjectDefaults.__proto__ || Object.getPrototypeOf(ObjectDefaults)).call(this, props));

    _this.handleExpandCollapse = function () {
      _this.setState({
        isExpanded: !_this.state.isExpanded
      });
    };

    _this.state = {
      isExpanded: true
    };
    return _this;
  }

  _createClass(ObjectDefaults, [{
    key: 'render',
    value: function render() {
      if (!this.props.element) {
        return false;
      }

      if (!(0, _ElementUtils.hasDefault)(this.props.element)) {
        return false;
      }

      var defaultValue = this.props.element.attributes.default;

      var style = this.style;

      return _react2.default.createElement(
        _Row2.default,
        { style: style.root },
        _react2.default.createElement(
          _Column2.default,
          null,
          _react2.default.createElement(
            _Row2.default,
            {
              style: style.header,
              onClick: this.handleExpandCollapse
            },
            _react2.default.createElement(_SampleToggle2.default, {
              isExpanded: this.state.isExpanded,
              onClick: this.handleExpandCollapse,
              sampleTitle: 'Default'
            })
          ),
          this.state.isExpanded && _react2.default.createElement(
            _Row2.default,
            { style: style.valueContainer },
            _react2.default.createElement(_Value.Value, {
              element: defaultValue,
              isSample: true,
              collapseByDefault: this.props.collapseByDefault
            })
          )
        )
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var BORDER_COLOR = this.context.theme.BORDER_COLOR;


      var style = {
        root: {
          marginTop: '8px',
          borderTop: '1px solid ' + BORDER_COLOR,
          borderLeft: '1px solid ' + BORDER_COLOR,
          borderRight: '1px solid ' + BORDER_COLOR,
          borderBottom: '1px solid ' + BORDER_COLOR
        },
        header: {
          borderBottom: 'none',
          background: '#F8F8F9',
          paddingTop: '8px',
          paddingBottom: '8px',
          paddingLeft: '8px',
          paddingRight: '8px'
        },
        valueContainer: {
          paddingLeft: '14px',
          paddingRight: '14px'
        }
      };

      if (this.props.parentElement && (0, _ElementUtils.isObject)(this.props.parentElement)) {
        style.root.borderLeft = 'none';
      }

      if (this.state.isExpanded) {
        style.header.borderBottom = '1px solid ' + BORDER_COLOR;
      }

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }]);

  return ObjectDefaults;
}(_react2.default.Component), _class2.contextTypes = {
  theme: _propTypes2.default.object
}, _temp)) || _class;

exports.default = ObjectDefaults;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "ObjectDefaults.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "ObjectDefaults.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _Row = __webpack_require__(7);

var _Row2 = _interopRequireDefault(_Row);

var _Column = __webpack_require__(6);

var _Column2 = _interopRequireDefault(_Column);

var _Type = __webpack_require__(14);

var _Type2 = _interopRequireDefault(_Type);

var _Toggle = __webpack_require__(32);

var _Toggle2 = _interopRequireDefault(_Toggle);

var _SampleToggle = __webpack_require__(12);

var _SampleToggle2 = _interopRequireDefault(_SampleToggle);

var _ElementUtils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ObjectHeader = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(ObjectHeader, _React$Component);

  function ObjectHeader() {
    _classCallCheck(this, ObjectHeader);

    return _possibleConstructorReturn(this, (ObjectHeader.__proto__ || Object.getPrototypeOf(ObjectHeader)).apply(this, arguments));
  }

  _createClass(ObjectHeader, [{
    key: 'renderSampleToggle',
    value: function renderSampleToggle() {
      if (this.props.element && (0, _ElementUtils.hasSamples)(this.props.element)) {
        return _react2.default.createElement(_SampleToggle2.default, {
          onClick: this.props.onSampleToggleClick,
          style: this.style.sampleToggle,
          isExpanded: this.props.isExpanded,
          sampleTitle: 'Description'
        });
      }

      return null;
    }
  }, {
    key: 'renderToggleColumn',
    value: function renderToggleColumn() {
      if (this.props.expandableCollapsible) {
        return _react2.default.createElement(
          _Column2.default,
          { style: this.style.toggleColumn },
          _react2.default.createElement(_Toggle2.default, {
            onClick: this.props.onToggleClick,
            isExpanded: this.props.isExpanded
          })
        );
      }

      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Row2.default,
        { style: this.style.base },
        this.renderToggleColumn(),
        _react2.default.createElement(
          _Column2.default,
          null,
          ((0, _ElementUtils.isArray)(this.props.parentElement) || (0, _ElementUtils.isEnum)(this.props.parentElement)) && _react2.default.createElement(_Type2.default, {
            type: 'object',
            onClick: this.props.expandableCollapsible && this.props.onTypeClick
          }),
          this.renderSampleToggle()
        )
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var ALTERNATE_BORDER_COLOR = this.context.theme.ALTERNATE_BORDER_COLOR;


      var style = {
        base: {
          borderBottom: '1px solid ' + ALTERNATE_BORDER_COLOR,
          paddingLeft: '10px',
          paddingRight: '10px',
          alignItems: 'center'
        },
        toggleColumn: {
          minWidth: '20px',
          maxWidth: '20px',
          width: '20px'
        },
        sampleToggle: {
          root: {
            marginTop: '4px'
          }
        }
      };

      if ((0, _ElementUtils.isArray)(this.props.parentElement)) {
        style.base.height = '30px';
      }

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }]);

  return ObjectHeader;
}(_react2.default.Component), _class2.contextTypes = {
  theme: _propTypes2.default.object
}, _temp)) || _class;

exports.default = ObjectHeader;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "ObjectHeader.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "ObjectHeader.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _ElementUtils = __webpack_require__(5);

var _fonts = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ObjectPropertiesGroup = (_temp2 = _class = function (_React$Component) {
  _inherits(ObjectPropertiesGroup, _React$Component);

  function ObjectPropertiesGroup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ObjectPropertiesGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ObjectPropertiesGroup.__proto__ || Object.getPrototypeOf(ObjectPropertiesGroup)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      var element = (0, _ElementUtils.findElement)(_this.props.name, _this.context.dereferencedDataStructures);

      if (_this.context.onElementLinkClick) {
        return _this.context.onElementLinkClick(element.meta.id, element, event);
      }

      return null;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ObjectPropertiesGroup, [{
    key: 'renderHeader',
    value: function renderHeader() {
      if (!this.props.type) {
        return null;
      }

      var text = void 0;

      if (this.props.type === 'inherited') {
        text = 'Inherited from';
      }

      if (this.props.type === 'included') {
        text = 'Included from';
      }

      return _react2.default.createElement(
        'div',
        { style: this.style.header },
        text,
        '\xA0',
        _react2.default.createElement(
          'a',
          { style: this.style.headerLink, onClick: this.handleClick },
          this.props.name
        )
      );
    }
  }, {
    key: 'renderProperties',
    value: function renderProperties() {
      var propertiesCount = this.props.children.length;

      if (this.props.type === 'inherited' && this.context.inheritedProperties === 'placeholder') {
        return _react2.default.createElement(
          'div',
          { style: this.style.placeholder },
          _react2.default.createElement(
            'span',
            { style: this.style.placeholderProperties },
            propertiesCount,
            ' ',
            propertiesCount === 1 ? 'property' : 'properties'
          ),
          '\xA0inherited from\xA0',
          _react2.default.createElement(
            'a',
            { style: this.style.placeholderLink, onClick: this.handleClick },
            this.props.name
          )
        );
      }

      if (this.props.type === 'included' && this.context.includedProperties === 'placeholder') {
        return _react2.default.createElement(
          'div',
          { style: this.style.placeholder },
          _react2.default.createElement(
            'span',
            { style: this.style.placeholderProperties },
            propertiesCount,
            ' ',
            propertiesCount === 1 ? 'property' : 'properties'
          ),
          '\xA0included from\xA0',
          _react2.default.createElement(
            'a',
            { style: this.style.placeholderLink, onClick: this.handleClick },
            this.props.name
          )
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: this.style.base },
        this.props.type === 'inherited' && this.context.inheritedProperties === 'group' && this.renderHeader(),
        this.props.type === 'included' && this.context.includedProperties === 'group' && this.renderHeader(),
        this.renderProperties()
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var style = {
        base: {},
        header: {
          borderBottom: '1px solid #E8EBEE',
          color: 'rgba(138, 147, 163, 0.75)',
          fontFamily: _fonts.DEFAULT_FONT_FAMILY,
          fontSize: '12px',
          fontStyle: 'italic',
          paddingBottom: '4px',
          paddingTop: '4px'
        },
        headerLink: {
          cursor: 'pointer',

          ':hover': {
            textDecoration: 'underline'
          }
        },
        placeholder: {
          paddingBottom: '4px',
          paddingTop: '4px',
          fontFamily: _fonts.DEFAULT_FONT_FAMILY,
          fontSize: '12px',
          color: '#8A93A3',
          fontStyle: 'italic'
        },
        placeholderProperties: {
          fontWeight: '600'
        },
        placeholderLink: {
          cursor: 'pointer',
          fontWeight: 'regular',
          textDecoration: 'underline',

          ':hover': {
            textDecoration: 'none'
          }
        }
      };

      if (!this.props.type) {
        style.base.borderBottom = '1px solid #E8EBEE';
      }

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }]);

  return ObjectPropertiesGroup;
}(_react2.default.Component), _class.contextTypes = {
  dereferencedDataStructures: _propTypes2.default.array,
  onElementLinkClick: _propTypes2.default.func,
  includedProperties: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  inheritedProperties: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string])
}, _temp2);
exports.default = (0, _radium2.default)(ObjectPropertiesGroup);
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "ObjectPropertiesGroup.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "ObjectPropertiesGroup.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Column = __webpack_require__(6);

var _Column2 = _interopRequireDefault(_Column);

var _Description = __webpack_require__(13);

var _Description2 = _interopRequireDefault(_Description);

var _ObjectPropertyDefaults = __webpack_require__(64);

var _ObjectPropertyDefaults2 = _interopRequireDefault(_ObjectPropertyDefaults);

var _ObjectPropertySamples = __webpack_require__(65);

var _ObjectPropertySamples2 = _interopRequireDefault(_ObjectPropertySamples);

var _ParentInfoLink = __webpack_require__(68);

var _ParentInfoLink2 = _interopRequireDefault(_ParentInfoLink);

var _Row = __webpack_require__(7);

var _Row2 = _interopRequireDefault(_Row);

var _Type = __webpack_require__(14);

var _Type2 = _interopRequireDefault(_Type);

var _Value = __webpack_require__(10);

var _KeyColumn = __webpack_require__(29);

var _ElementUtils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ObjectProperty = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(ObjectProperty, _React$Component);

  function ObjectProperty() {
    _classCallCheck(this, ObjectProperty);

    return _possibleConstructorReturn(this, (ObjectProperty.__proto__ || Object.getPrototypeOf(ObjectProperty)).apply(this, arguments));
  }

  _createClass(ObjectProperty, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Row2.default,
        { style: this.style.base },
        _react2.default.createElement(_KeyColumn.KeyColumn, {
          element: this.props.element,
          parentElement: this.props.parentElement,
          reportKeyWidth: this.props.reportKeyWidth,
          keyWidth: this.props.keyWidth
        }),
        _react2.default.createElement(
          _Column2.default,
          null,
          (0, _ElementUtils.hasType)(this.props.element) && _react2.default.createElement(
            _Row2.default,
            null,
            _react2.default.createElement(
              _Column2.default,
              null,
              _react2.default.createElement(_Type2.default, { element: this.props.element })
            ),
            ((0, _ElementUtils.isIncluded)(this.props.element) && this.context.includedProperties === 'tag' || (0, _ElementUtils.isInherited)(this.props.element) && this.context.inheritedProperties === 'tag') && _react2.default.createElement(
              _Column2.default,
              { style: { alignItems: 'flex-end' } },
              _react2.default.createElement(_ParentInfoLink2.default, { element: this.props.element })
            )
          ),
          (0, _ElementUtils.hasDescription)(this.props.element) && _react2.default.createElement(
            _Row2.default,
            null,
            _react2.default.createElement(_Description2.default, {
              element: this.props.element,
              style: this.style.Description
            })
          ),
          (0, _ElementUtils.hasValue)(this.props.element) && _react2.default.createElement(
            _Row2.default,
            null,
            _react2.default.createElement(_Value.Value, {
              element: this.props.element,
              style: this.style.Value,
              collapseByDefault: this.props.collapseByDefault
            })
          ),
          (0, _ElementUtils.hasSamples)(this.props.element) && _react2.default.createElement(
            _Row2.default,
            null,
            _react2.default.createElement(_ObjectPropertySamples2.default, {
              element: this.props.element,
              collapseByDefault: this.props.collapseByDefault
            })
          ),
          (0, _ElementUtils.hasDefault)(this.props.element) && _react2.default.createElement(
            _Row2.default,
            null,
            _react2.default.createElement(_ObjectPropertyDefaults2.default, {
              element: this.props.element,
              collapseByDefault: this.props.collapseByDefault
            })
          )
        )
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var _context$theme = this.context.theme,
          BORDER_COLOR = _context$theme.BORDER_COLOR,
          ROW_PADDING_TOP = _context$theme.ROW_PADDING_TOP,
          ROW_PADDING_BOTTOM = _context$theme.ROW_PADDING_BOTTOM;


      var style = {
        base: {
          borderBottom: '1px solid ' + BORDER_COLOR,
          paddingTop: ROW_PADDING_TOP,
          paddingBottom: ROW_PADDING_BOTTOM
        }
      };

      if ((0, _ElementUtils.isLastArrayItem)(this.props.parentElement, this.props.index)) {
        style.base.borderBottom = '0px';
      }

      if ((0, _ElementUtils.hasType)(this.props.element) && (0, _ElementUtils.hasDescription)(this.props.element)) {
        style.Description = {
          base: {
            marginTop: '6px'
          }
        };
      }

      if ((0, _ElementUtils.hasType)(this.props.element) || (0, _ElementUtils.hasDescription)(this.props.element)) {
        style.Value = {
          base: {
            marginTop: '6px'
          }
        };
      }

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }]);

  return ObjectProperty;
}(_react2.default.Component), _class2.contextTypes = {
  theme: _propTypes2.default.object,
  eventEmitter: _propTypes2.default.object,
  showMemberParentLinks: _propTypes2.default.bool,
  onElementLinkClick: _propTypes2.default.func,
  includedProperties: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  inheritedProperties: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string])
}, _temp)) || _class;

exports.default = ObjectProperty;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "ObjectProperty.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "ObjectProperty.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Column = __webpack_require__(6);

var _Column2 = _interopRequireDefault(_Column);

var _Description = __webpack_require__(13);

var _Description2 = _interopRequireDefault(_Description);

var _Row = __webpack_require__(7);

var _Row2 = _interopRequireDefault(_Row);

var _Ruler = __webpack_require__(30);

var _Ruler2 = _interopRequireDefault(_Ruler);

var _KeyColumn = __webpack_require__(29);

var _ToggleColumn = __webpack_require__(62);

var _TypeColumn = __webpack_require__(63);

var _Value = __webpack_require__(10);

var _ElementUtils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StructuredObjectProperty = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(StructuredObjectProperty, _React$Component);

  function StructuredObjectProperty(props) {
    _classCallCheck(this, StructuredObjectProperty);

    var _this = _possibleConstructorReturn(this, (StructuredObjectProperty.__proto__ || Object.getPrototypeOf(StructuredObjectProperty)).call(this, props));

    _this.componentWillReceiveProps = function (nextProps) {
      _this.setState(_this.transformPropsIntoState(nextProps));
    };

    _this.handleExpandCollapse = function () {
      _this.setState({
        isExpanded: !_this.state.isExpanded
      });
    };

    _this.state = _this.transformPropsIntoState(props);
    return _this;
  }

  _createClass(StructuredObjectProperty, [{
    key: 'transformPropsIntoState',
    value: function transformPropsIntoState(props) {
      var isExpanded = void 0;

      // State hasn't been set; tree is expanded by default,
      // after a click, it collapses.
      if ((0, _ElementUtils.isStructured)(props.element)) {
        if (props.collapseByDefault) {
          isExpanded = false;
        } else {
          isExpanded = true;
        }
      }

      return {
        containsStructuredElement: (0, _ElementUtils.containsStructuredElement)(this.props.parentElement),
        isArray: (0, _ElementUtils.isArray)(props.element),
        isStructured: (0, _ElementUtils.isStructured)(props.element),
        isExpanded: isExpanded,
        isObject: (0, _ElementUtils.isObject)(props.element)
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Row2.default,
        { style: this.style.base },
        _react2.default.createElement(
          _Column2.default,
          null,
          _react2.default.createElement(
            _Row2.default,
            { style: this.style.firstRow },
            _react2.default.createElement(_ToggleColumn.ToggleColumn, {
              isExpanded: this.state.isExpanded,
              onClick: this.handleExpandCollapse
            }),
            _react2.default.createElement(_KeyColumn.KeyColumn, {
              element: this.props.element,
              parentElement: this.props.parentElement,
              onClick: this.handleExpandCollapse,
              reportKeyWidth: this.props.reportKeyWidth,
              keyWidth: this.props.keyWidth
            }),
            _react2.default.createElement(_TypeColumn.TypeColumn, {
              element: this.props.element
            })
          ),
          this.state.isExpanded && _react2.default.createElement(
            _Ruler2.default,
            {
              style: this.style.ruler,
              subtle: (0, _ElementUtils.isArrayOrEnumOrSelect)(this.props.element)
            },
            (0, _ElementUtils.hasDescription)(this.props.element) && _react2.default.createElement(
              _Row2.default,
              null,
              _react2.default.createElement(_Description2.default, {
                element: this.props.element,
                style: this.style.Description
              })
            ),
            _react2.default.createElement(
              _Row2.default,
              { style: this.style.valueRow },
              _react2.default.createElement(_Value.Value, {
                element: this.props.element,
                parentElement: this.props.parentElement,
                collapseByDefault: this.props.collapseByDefault
              })
            )
          )
        )
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var _context$theme = this.context.theme,
          BORDER_COLOR = _context$theme.BORDER_COLOR,
          ROW_PADDING_TOP = _context$theme.ROW_PADDING_TOP,
          ROW_PADDING_BOTTOM = _context$theme.ROW_PADDING_BOTTOM;


      var style = {
        base: {
          borderBottom: '1px solid ' + BORDER_COLOR,
          paddingTop: ROW_PADDING_TOP,
          paddingBottom: ROW_PADDING_BOTTOM
        },
        firstRow: {
          justifyContent: 'center',
          alignItems: 'center'
        },
        valueRow: {
          // marginTop: '8px',
        },
        ruler: {
          base: {
            paddingLeft: '6px'
          }
        },
        Description: {
          base: {
            marginTop: '4px'
          }
        }
      };

      if (this.props.element.meta && this.props.element.meta._nestedLevel !== 0) {
        style.base.paddingLeft = '10px';
      }

      var isLast = (0, _ElementUtils.isLastArrayItem)(this.props.parentElement, this.props.index);

      // Last array item doesn't have a border.
      if (isLast) {
        style.base.borderBottom = 'none';
      }

      style.base.paddingBottom = '14px';

      if ((0, _ElementUtils.hasDescription)(this.props.element)) {
        style.firstRow.paddingBottom = '14px';

        style.Description = {
          base: {
            marginBottom: '14px',
            paddingLeft: '13px'
          }
        };
      } else {
        style.firstRow.paddingBottom = '14px';
      }

      if ((0, _ElementUtils.containsSelectElement)(this.props.parentElement)) {
        style.base.paddingLeft = '21px';
      }

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }]);

  return StructuredObjectProperty;
}(_react2.default.Component), _class2.contextTypes = {
  element: _propTypes2.default.object,
  theme: _propTypes2.default.object,
  showMemberParentLinks: _propTypes2.default.bool,
  namedTypes: _propTypes2.default.bool,
  onElementLinkClick: _propTypes2.default.func,
  includedProperties: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  inheritedProperties: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string])
}, _temp)) || _class;

exports.default = StructuredObjectProperty;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "StructuredObjectProperty.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "StructuredObjectProperty.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleColumn = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Toggle = __webpack_require__(32);

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToggleColumn = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(ToggleColumn, _React$Component);

  function ToggleColumn() {
    _classCallCheck(this, ToggleColumn);

    return _possibleConstructorReturn(this, (ToggleColumn.__proto__ || Object.getPrototypeOf(ToggleColumn)).apply(this, arguments));
  }

  _createClass(ToggleColumn, [{
    key: 'isVisible',
    value: function isVisible() {
      return this.context.includedProperties === 'show' && this.context.inheritedProperties === 'show' || this.context.includedProperties === 'tag' && this.context.inheritedProperties === 'tag';
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.isVisible()) {
        return _react2.default.createElement(_Toggle2.default, {
          isExpanded: this.props.isExpanded,
          onClick: this.props.onClick,
          style: this.style.Toggle
        });
      }

      return null;
    }
  }, {
    key: 'style',
    get: function get() {
      var style = {
        Toggle: {
          base: {
            width: '13px',
            maxWidth: '13px',
            minWidth: '13px',
            cursor: 'pointer',
            height: '13px',
            marginRight: '7px'
          }
        }
      };

      return style;
    }
  }]);

  return ToggleColumn;
}(_react2.default.Component), _class2.contextTypes = {
  includedProperties: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  inheritedProperties: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string])
}, _temp)) || _class;

;

exports.ToggleColumn = ToggleColumn;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "ToggleColumn.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "ToggleColumn.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeColumn = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Column = __webpack_require__(6);

var _Column2 = _interopRequireDefault(_Column);

var _Type = __webpack_require__(14);

var _Type2 = _interopRequireDefault(_Type);

var _ElementUtils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TypeColumn = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(TypeColumn, _React$Component);

  function TypeColumn(props) {
    _classCallCheck(this, TypeColumn);

    var _this = _possibleConstructorReturn(this, (TypeColumn.__proto__ || Object.getPrototypeOf(TypeColumn)).call(this, props));

    _this.componentWillReceiveProps = function (nextProps) {
      _this.setState(_this.transformPropsIntoState(nextProps));
    };

    _this.state = _this.transformPropsIntoState(props);
    return _this;
  }

  _createClass(TypeColumn, [{
    key: 'transformPropsIntoState',
    value: function transformPropsIntoState(props) {
      return {
        reference: (0, _ElementUtils.getReference)(props.element)
      };
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.context.namedTypes && this.state.reference) {
        return _react2.default.createElement(
          _Column2.default,
          null,
          _react2.default.createElement(_Type2.default, {
            element: this.props.element,
            reference: this.state.reference
          })
        );
      }

      return _react2.default.createElement(
        _Column2.default,
        null,
        _react2.default.createElement(_Type2.default, {
          element: this.props.element
        })
      );
    }
  }]);

  return TypeColumn;
}(_react2.default.Component), _class2.contextTypes = {
  namedTypes: _propTypes2.default.bool
}, _temp)) || _class;

;

exports.TypeColumn = TypeColumn;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "TypeColumn.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "TypeColumn.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Column = __webpack_require__(6);

var _Column2 = _interopRequireDefault(_Column);

var _Sample = __webpack_require__(16);

var _Sample2 = _interopRequireDefault(_Sample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ObjectPropertySamples = function (_React$Component) {
  _inherits(ObjectPropertySamples, _React$Component);

  function ObjectPropertySamples() {
    _classCallCheck(this, ObjectPropertySamples);

    return _possibleConstructorReturn(this, (ObjectPropertySamples.__proto__ || Object.getPrototypeOf(ObjectPropertySamples)).apply(this, arguments));
  }

  _createClass(ObjectPropertySamples, [{
    key: 'render',
    value: function render() {
      if (!this.props.element) {
        return false;
      }

      if (!this.props.element.content) {
        return false;
      }

      var value = this.props.element.content.value;

      if (!value || !value.attributes || !value.attributes.default) {
        return false;
      }

      return _react2.default.createElement(
        _Column2.default,
        null,
        _react2.default.createElement(_Sample2.default, {
          sample: value.attributes.default,
          style: this.style.sample,
          title: 'Default',
          collapseByDefault: this.props.collapseByDefault
        })
      );
    }
  }, {
    key: 'style',
    get: function get() {
      return {
        sample: {
          row: {
            marginTop: '6px'
          }
        }
      };
    }
  }]);

  return ObjectPropertySamples;
}(_react2.default.Component);

exports.default = ObjectPropertySamples;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "ObjectPropertyDefaults.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "ObjectPropertyDefaults.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Column = __webpack_require__(6);

var _Column2 = _interopRequireDefault(_Column);

var _Row = __webpack_require__(7);

var _Row2 = _interopRequireDefault(_Row);

var _Sample = __webpack_require__(16);

var _Sample2 = _interopRequireDefault(_Sample);

var _ElementUtils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ObjectPropertySamples = function (_React$Component) {
  _inherits(ObjectPropertySamples, _React$Component);

  function ObjectPropertySamples() {
    _classCallCheck(this, ObjectPropertySamples);

    return _possibleConstructorReturn(this, (ObjectPropertySamples.__proto__ || Object.getPrototypeOf(ObjectPropertySamples)).apply(this, arguments));
  }

  _createClass(ObjectPropertySamples, [{
    key: 'renderStyles',
    value: function renderStyles() {
      return {
        row: {
          marginTop: '2px'
        }
      };
    }
  }, {
    key: 'renderSamples',
    value: function renderSamples(samples) {
      var _this2 = this;

      var style = {
        row: {
          marginTop: '6px'
        }
      };

      return samples.map(function (sample, index) {
        return _react2.default.createElement(_Sample2.default, {
          sample: sample,
          key: index,
          style: style,
          collapseByDefault: _this2.props.collapseByDefault
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.element) {
        return false;
      }

      if (!this.props.element.content) {
        return false;
      }

      var value = this.props.element.content.value;

      if (!value) {
        return false;
      }

      if ((0, _ElementUtils.isObject)(value.element) || (0, _ElementUtils.isArray)(value.element) || (0, _ElementUtils.isEnum)(value.element)) {
        return false;
      }

      var samples = null;

      if (value.attributes) {
        samples = value.attributes.samples;
      }

      if (!samples) {
        return false;
      }

      var styles = this.renderStyles();

      return _react2.default.createElement(
        _Row2.default,
        { style: styles.row },
        _react2.default.createElement(
          _Column2.default,
          null,
          this.renderSamples(samples)
        )
      );
    }
  }]);

  return ObjectPropertySamples;
}(_react2.default.Component);

exports.default = ObjectPropertySamples;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "ObjectPropertySamples.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "ObjectPropertySamples.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _Value = __webpack_require__(10);

var _Column = __webpack_require__(6);

var _Column2 = _interopRequireDefault(_Column);

var _Row = __webpack_require__(7);

var _Row2 = _interopRequireDefault(_Row);

var _SampleToggle = __webpack_require__(12);

var _SampleToggle2 = _interopRequireDefault(_SampleToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ObjectSample = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(ObjectSample, _React$Component);

  function ObjectSample(props) {
    _classCallCheck(this, ObjectSample);

    var _this = _possibleConstructorReturn(this, (ObjectSample.__proto__ || Object.getPrototypeOf(ObjectSample)).call(this, props));

    _this.handleExpandCollapse = function () {
      _this.setState({
        isExpanded: !_this.state.isExpanded
      });
    };

    _this.state = {
      isExpanded: false
    };
    return _this;
  }

  _createClass(ObjectSample, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Row2.default,
        null,
        _react2.default.createElement(
          _Column2.default,
          null,
          _react2.default.createElement(
            _Row2.default,
            {
              style: this.style.header,
              onClick: this.handleExpandCollapse
            },
            _react2.default.createElement(_SampleToggle2.default, {
              isExpanded: this.state.isExpanded,
              onClick: this.handleExpandCollapse
            })
          ),
          this.state.isExpanded && _react2.default.createElement(
            _Row2.default,
            { style: this.style.valueContainer },
            _react2.default.createElement(_Value.Value, {
              element: this.props.sample,
              isSample: true,
              collapseByDefault: this.props.collapseByDefault
            })
          )
        )
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var BORDER_COLOR = this.context.theme.BORDER_COLOR;


      var style = {
        header: {
          borderTop: '1px solid ' + BORDER_COLOR,
          paddingTop: '8px',
          paddingBottom: '8px',
          paddingLeft: '8px',
          paddingRight: '8px'
        },
        valueContainer: {
          paddingLeft: '14px',
          paddingRight: '14px'
        }
      };

      var isLastObjectSample = this.props.sampleIndex === this.props.samples.length - 1;

      if (this.state.isExpanded || isLastObjectSample) {
        style.header.borderBottom = '1px solid ' + BORDER_COLOR;
      }

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }]);

  return ObjectSample;
}(_react2.default.Component), _class2.contextTypes = {
  theme: _propTypes2.default.object
}, _temp)) || _class;

exports.default = ObjectSample;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "ObjectSample.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "ObjectSample.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _Column = __webpack_require__(6);

var _Column2 = _interopRequireDefault(_Column);

var _ObjectSample = __webpack_require__(66);

var _ObjectSample2 = _interopRequireDefault(_ObjectSample);

var _Row = __webpack_require__(7);

var _Row2 = _interopRequireDefault(_Row);

var _ElementUtils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ObjectSamples = (0, _radium2.default)(_class = function (_React$Component) {
  _inherits(ObjectSamples, _React$Component);

  function ObjectSamples() {
    _classCallCheck(this, ObjectSamples);

    return _possibleConstructorReturn(this, (ObjectSamples.__proto__ || Object.getPrototypeOf(ObjectSamples)).apply(this, arguments));
  }

  _createClass(ObjectSamples, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.element) {
        return false;
      }

      if (!(0, _ElementUtils.hasSamples)(this.props.element)) {
        return false;
      }

      var samples = this.props.element.attributes.samples;

      return _react2.default.createElement(
        _Row2.default,
        null,
        _react2.default.createElement(
          _Column2.default,
          null,
          samples.map(function (sample, index) {
            return _react2.default.createElement(_ObjectSample2.default, {
              element: _this2.props.element,
              sample: sample,
              sampleIndex: index,
              samples: samples,
              key: index,
              collapseByDefault: _this2.props.collapseByDefault
            });
          })
        )
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var style = {};

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }]);

  return ObjectSamples;
}(_react2.default.Component)) || _class;

exports.default = ObjectSamples;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "ObjectSamples.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "ObjectSamples.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _ElementUtils = __webpack_require__(5);

var _fonts = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParentInfoLink = (_temp2 = _class = function (_React$Component) {
  _inherits(ParentInfoLink, _React$Component);

  function ParentInfoLink() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ParentInfoLink);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ParentInfoLink.__proto__ || Object.getPrototypeOf(ParentInfoLink)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.context.onElementLinkClick) {
        return _this.context.onElementLinkClick(_this.props.element.meta.ref, _this.props.element, event);
      }

      return null;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ParentInfoLink, [{
    key: 'render',
    value: function render() {
      var text = void 0;

      if ((0, _ElementUtils.isInherited)(this.props.element)) {
        text = 'Inherited from';
      }

      if ((0, _ElementUtils.isIncluded)(this.props.element)) {
        text = 'Included from';
      }

      return _react2.default.createElement(
        'span',
        { style: this.style.base },
        text,
        '\xA0',
        _react2.default.createElement(
          'a',
          {
            onClick: this.handleClick,
            style: this.style.link
          },
          this.ref
        )
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var DESCRIPTION_COLOR = this.context.theme.DESCRIPTION_COLOR;


      var style = {
        base: {
          fontFamily: _fonts.DEFAULT_FONT_FAMILY,
          fontStyle: 'italic',
          fontSize: '12px',
          color: DESCRIPTION_COLOR
        },
        link: {
          cursor: 'pointer',

          ':hover': {
            textDecoration: 'underline'
          }
        }
      };

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }, {
    key: 'ref',
    get: function get() {
      return this.props.element.meta && this.props.element.meta.ref;
    }
  }]);

  return ParentInfoLink;
}(_react2.default.Component), _class.contextTypes = {
  theme: _propTypes2.default.object,
  onElementLinkClick: _propTypes2.default.func
}, _temp2);
exports.default = (0, _radium2.default)(ParentInfoLink);
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "ParentInfoLink.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "ParentInfoLink.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _Row = __webpack_require__(7);

var _Row2 = _interopRequireDefault(_Row);

var _Type = __webpack_require__(14);

var _Type2 = _interopRequireDefault(_Type);

var _Column = __webpack_require__(6);

var _Column2 = _interopRequireDefault(_Column);

var _Value = __webpack_require__(10);

var _Description = __webpack_require__(13);

var _Description2 = _interopRequireDefault(_Description);

var _ElementUtils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Primitive = (_temp = _class = function (_React$Component) {
  _inherits(Primitive, _React$Component);

  function Primitive() {
    _classCallCheck(this, Primitive);

    return _possibleConstructorReturn(this, (Primitive.__proto__ || Object.getPrototypeOf(Primitive)).apply(this, arguments));
  }

  _createClass(Primitive, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Column2.default,
        { style: this.style.base },
        _react2.default.createElement(
          _Row2.default,
          { style: this.style.typeHeader },
          _react2.default.createElement(_Type2.default, {
            type: this.type,
            style: this.style.type
          })
        ),
        (0, _ElementUtils.hasDescription)(this.props.element) && _react2.default.createElement(
          _Row2.default,
          null,
          _react2.default.createElement(_Description2.default, { element: this.props.element })
        ),
        (0, _ElementUtils.hasValue)(this.props.element) && _react2.default.createElement(
          _Row2.default,
          null,
          _react2.default.createElement(_Value.Value, {
            element: this.props.element,
            collapseByDefault: this.props.collapseByDefault
          })
        )
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var BORDER_COLOR = this.context.theme.BORDER_COLOR;


      var style = {
        base: {},
        typeHeader: {
          borderBottom: '1px solid ' + BORDER_COLOR,
          paddingBottom: '8px',
          paddingLeft: '0px',
          paddingTop: '4px'
        },
        type: {
          root: {
            fontSize: '12px'
          }
        }
      };

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }, {
    key: 'type',
    get: function get() {
      var element = this.props.element;

      if (element.meta && element.meta.id) {
        return element.meta.id;
      }

      return element.element;
    }
  }]);

  return Primitive;
}(_react2.default.Component), _class.contextTypes = {
  theme: _propTypes2.default.object
}, _temp);
exports.default = Primitive;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "Primitive.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "Primitive.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrimitiveValue = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _isUndefined = __webpack_require__(11);

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _ElementUtils = __webpack_require__(5);

var _fonts = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PrimitiveValue = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(PrimitiveValue, _React$Component);

  function PrimitiveValue() {
    _classCallCheck(this, PrimitiveValue);

    return _possibleConstructorReturn(this, (PrimitiveValue.__proto__ || Object.getPrototypeOf(PrimitiveValue)).apply(this, arguments));
  }

  _createClass(PrimitiveValue, [{
    key: 'render',
    value: function render() {
      if (this.props.value === null) {
        return null;
      }

      if (!(0, _isUndefined2.default)(this.props.value)) {
        return _react2.default.createElement(
          'div',
          { style: this.style.base },
          this.props.value.toString()
        );
      }

      if (this.props.element) {
        var element = this.props.element;
        var value = void 0;

        if ((0, _ElementUtils.isObjectOrArray)(element.element)) {
          return false;
        } else if ((0, _ElementUtils.isMember)(element.element)) {
          if ((0, _ElementUtils.isObjectOrArray)(element.content.value.element)) {
            return false;
          } else if (element.content.value.content) {
            value = element.content.value.content;
          } else {
            return false;
          }
        } else if (element.content) {
          value = element.content;
        }

        if (!value) {
          return false;
        }

        return _react2.default.createElement(
          'div',
          { style: this.style.base },
          value.toString()
        );
      }

      return null;
    }
  }, {
    key: 'style',
    get: function get() {
      var _context$theme = this.context.theme,
          VALUE_BACKGROUND_COLOR = _context$theme.VALUE_BACKGROUND_COLOR,
          VALUE_BORDER_RADIUS = _context$theme.VALUE_BORDER_RADIUS,
          VALUE_COLOR = _context$theme.VALUE_COLOR,
          VALUE_FONT_WEIGHT = _context$theme.VALUE_FONT_WEIGHT,
          VALUE_PADDING_BOTTOM = _context$theme.VALUE_PADDING_BOTTOM,
          VALUE_PADDING_LEFT = _context$theme.VALUE_PADDING_LEFT,
          VALUE_PADDING_RIGHT = _context$theme.VALUE_PADDING_RIGHT,
          VALUE_PADDING_TOP = _context$theme.VALUE_PADDING_TOP;


      var style = {
        base: {
          width: 'auto',
          height: 'auto',
          marginTop: '0px',
          marginBottom: '0px',
          marginLeft: '0px',
          marginRight: '0px',
          fontWeight: VALUE_FONT_WEIGHT,
          backgroundColor: VALUE_BACKGROUND_COLOR,
          borderRadius: VALUE_BORDER_RADIUS,
          paddingTop: VALUE_PADDING_TOP,
          paddingBottom: VALUE_PADDING_BOTTOM,
          paddingLeft: VALUE_PADDING_LEFT,
          paddingRight: VALUE_PADDING_RIGHT,
          fontFamily: _fonts.DEFAULT_FONT_FAMILY,
          fontSize: '13px',
          lineHeight: '13px',
          color: VALUE_COLOR,
          wordBreak: 'break-word'
        }
      };

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }]);

  return PrimitiveValue;
}(_react2.default.Component), _class2.contextTypes = {
  theme: _propTypes2.default.object
}, _temp)) || _class;

exports.PrimitiveValue = PrimitiveValue;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "PrimitiveValue.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "PrimitiveValue.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _fonts = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Requirement = function (_React$Component) {
  _inherits(Requirement, _React$Component);

  function Requirement() {
    _classCallCheck(this, Requirement);

    return _possibleConstructorReturn(this, (Requirement.__proto__ || Object.getPrototypeOf(Requirement)).apply(this, arguments));
  }

  _createClass(Requirement, [{
    key: 'render',
    value: function render() {
      var isRequired = this.requirement[0] === 'required';

      if (isRequired) {
        return _react2.default.createElement(
          'div',
          { style: this.style.base },
          'required'
        );
      }

      return null;
    }
  }, {
    key: 'requirement',
    get: function get() {
      var requirement = ['optional'];

      if (this.props.element.attributes) {
        if (this.props.element.attributes.typeAttributes) {
          requirement = this.props.element.attributes.typeAttributes;
        }
      }

      return requirement;
    }
  }, {
    key: 'style',
    get: function get() {
      var style = {
        base: {
          width: '100%',
          height: 'auto',
          fontFamily: _fonts.DEFAULT_FONT_FAMILY,
          fontSize: '12px',
          color: '#A7AAB2'
        }
      };

      return style;
    }
  }]);

  return Requirement;
}(_react2.default.Component);

exports.default = (0, _radium2.default)(Requirement);
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "Requirement.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "Requirement.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _ObjectProperties = __webpack_require__(28);

var _ObjectProperties2 = _interopRequireDefault(_ObjectProperties);

var _fonts = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectOption = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(SelectOption, _React$Component);

  function SelectOption() {
    _classCallCheck(this, SelectOption);

    return _possibleConstructorReturn(this, (SelectOption.__proto__ || Object.getPrototypeOf(SelectOption)).apply(this, arguments));
  }

  _createClass(SelectOption, [{
    key: 'render',
    value: function render() {
      var element = this.props.element;
      element.element = 'object';

      return _react2.default.createElement(
        'div',
        { style: this.style.base },
        _react2.default.createElement(
          'div',
          { style: this.style.content },
          _react2.default.createElement(_ObjectProperties2.default, {
            element: this.props.element,
            reportKeyWidth: this.props.reportKeyWidth,
            keyWidth: this.props.keyWidth
          })
        ),
        _react2.default.createElement(
          'div',
          { style: this.style.separator },
          _react2.default.createElement(
            'span',
            { style: this.style.tag },
            'OR'
          ),
          _react2.default.createElement('span', { style: this.style.line })
        )
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var style = {
        base: {
          width: '100%',
          height: 'auto'
        },
        content: {
          paddingLeft: '10px'
        },
        separator: {
          position: 'relative',
          width: '100%',
          height: '1px',
          paddingLeft: '10px'
        },
        line: {
          display: 'block',
          width: '100%',
          height: '1px',
          backgroundColor: this.context.theme.BORDER_COLOR
        },
        tag: {
          width: '20px',
          height: '20px',
          fontSize: '12px',
          display: 'block',
          backgroundColor: this.context.theme.BACKGROUND_COLOR,
          color: this.context.theme.SELECT_TEXT_COLOR,
          fontFamily: _fonts.MONO_FONT_FAMILY,
          fontWeight: '500',
          textAlign: 'center',
          lineHeight: '20px',
          position: 'absolute',
          top: '-10px',
          left: '-10px'
        }
      };

      if (this.props.index === this.props.parentElement.content.length - 1) {
        style.separator.display = 'none';
      }

      return (0, _merge2.default)(style, this.props.style);
    }
  }]);

  return SelectOption;
}(_react2.default.Component), _class2.contextTypes = {
  theme: _propTypes2.default.object
}, _temp)) || _class;

exports.default = SelectOption;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "SelectOption.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "SelectOption.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _isEmpty = __webpack_require__(9);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _merge = __webpack_require__(4);

var _merge2 = _interopRequireDefault(_merge);

var _radium = __webpack_require__(3);

var _radium2 = _interopRequireDefault(_radium);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fonts = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = (0, _radium2.default)(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(Title, _React$Component);

  function Title() {
    _classCallCheck(this, Title);

    return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).apply(this, arguments));
  }

  _createClass(Title, [{
    key: 'render',
    value: function render() {
      if (!this.props.element) {
        return null;
      }

      if ((0, _isEmpty2.default)(this.props.element.meta)) {
        return null;
      }

      if (!this.props.element.meta.id) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { style: this.style.base },
        _react2.default.createElement(
          'h1',
          { style: this.style.text },
          this.props.element.meta.id
        )
      );
    }
  }, {
    key: 'style',
    get: function get() {
      var VALUE_COLOR = this.context.theme.VALUE_COLOR;

      var style = {
        base: {
          paddingBottom: '10px'
        },
        text: {
          fontFamily: _fonts.DEFAULT_FONT_FAMILY,
          fontSize: '18px',
          color: VALUE_COLOR
        }
      };

      return (0, _merge2.default)(style, this.props.style || {});
    }
  }]);

  return Title;
}(_react2.default.Component), _class2.contextTypes = {
  theme: _propTypes2.default.object
}, _temp)) || _class;

exports.default = Title;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "Title.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "Title.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasItems = exports.isLastArrayItem = undefined;

var _isEmpty = __webpack_require__(9);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isLastArrayItem(arrayElement, currentArrayItemIndex) {
  if (!arrayElement || typeof currentArrayItemIndex === 'undefined') {
    return false;
  }

  var numberOfArrayItems = arrayElement.content.length;

  return numberOfArrayItems - 1 === currentArrayItemIndex;
}

function hasItems(element) {
  if (!element) {
    return false;
  }

  return !(0, _isEmpty2.default)(element.content);
}

exports.isLastArrayItem = isLastArrayItem;
exports.hasItems = hasItems;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "array.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "array.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasDefault = undefined;

var _MissingCacheObject = __webpack_require__(15);

var _type = __webpack_require__(17);

var _isUndefined = __webpack_require__(11);

var _isUndefined2 = _interopRequireDefault(_isUndefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hasDefault(element) {
  if (!element) {
    return false;
  }

  if (!element.cache) {
    throw new _MissingCacheObject.MissingCacheObjectException(element);
  }

  if ((0, _type.isMember)(element) && !(0, _isUndefined2.default)(element.content.value)) {
    return element.content.value.cache.hasDefault;
  }

  return element.cache.hasDefault;
}

exports.hasDefault = hasDefault;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "defaultValue.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "defaultValue.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasDescription = undefined;

var _MissingCacheObject = __webpack_require__(15);

function hasDescription(element) {
  if (!element) {
    return false;
  }

  if (!element.cache) {
    throw new _MissingCacheObject.MissingCacheObjectException(element);
  }

  return element.cache.hasDescription;
}

exports.hasDescription = hasDescription;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "description.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "description.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isReferenced = exports.isInherited = exports.isIncluded = exports.getReference = undefined;

var _isEmpty = __webpack_require__(9);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _every = __webpack_require__(37);

var _every2 = _interopRequireDefault(_every);

var _sift = __webpack_require__(20);

var _sift2 = _interopRequireDefault(_sift);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INHERITED_MEMBER_QUERY = {
  $or: [{
    'meta.links': {
      href: 'http://refract.link/inherited-member/',
      relation: 'origin'
    }
  }, {
    'meta.links': {
      href: 'http://refract.link/inherited/',
      relation: 'origin'
    }
  }]
};

/**
 * Returns `true` if the element has been inherited from a parent element.
 */
function isInherited(element) {
  if (!element) {
    return false;
  }

  var results = (0, _sift2.default)(INHERITED_MEMBER_QUERY, [element]);
  return results.length > 0;
}

var INCLUDED_MEMBER_QUERY = {
  'meta.links': {
    href: 'http://refract.link/included-member/',
    relation: 'origin'
  }
};

/**
 * Returns `true` if the element has been included via `+ Include` construct.
 */
function isIncluded(element) {
  if (!element) {
    return false;
  }

  var results = (0, _sift2.default)(INCLUDED_MEMBER_QUERY, [element]);
  return results.length > 0;
}

function getReference(element) {
  if (!element || !element.content || !element.content.value) {
    return null;
  }

  var nestedElement = element.content.value;

  if (!nestedElement) {
    return null;
  }

  if ((0, _isEmpty2.default)(nestedElement.content)) {
    return null;
  }

  var ref = void 0;

  var isElementReferenced = (0, _every2.default)(nestedElement.content, function (childElement) {
    if (!childElement.meta || !childElement.meta.ref) {
      return false;
    }

    if (!ref) {
      ref = childElement.meta.ref;
      return true;
    }

    return childElement.meta.ref === ref;
  });

  if (isElementReferenced && ref) {
    return ref;
  }

  return null;
}

function isReferenced(element) {
  return !!getReference(element);
}

exports.getReference = getReference;
exports.isIncluded = isIncluded;
exports.isInherited = isInherited;
exports.isReferenced = isReferenced;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "inheritance.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "inheritance.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasProperties = undefined;

var _isEmpty = __webpack_require__(9);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hasProperties(element) {
  if (!element) {
    return false;
  }

  return !(0, _isEmpty2.default)(element.content);
}

exports.hasProperties = hasProperties;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "object.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "object.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findParent = exports.findElement = undefined;

var _isEmpty = __webpack_require__(9);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _sift = __webpack_require__(20);

var _sift2 = _interopRequireDefault(_sift);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function findElement(elementId, dataStructures) {
  var query = {
    'meta.id': elementId
  };

  var results = (0, _sift2.default)(query, dataStructures);

  if ((0, _isEmpty2.default)(results)) {
    return null;
  }

  return results[0];
}

function findParent(elementId, dataStructures) {
  var element = findElement(elementId, dataStructures);

  return findElement(element.meta.ref, dataStructures);
}

exports.findElement = findElement;
exports.findParent = findParent;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "query.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "query.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasSamples = undefined;

var _MissingCacheObject = __webpack_require__(15);

function hasSamples(element) {
  if (!element) {
    return false;
  }

  if (!element.cache) {
    throw new _MissingCacheObject.MissingCacheObjectException();
  }

  return element.cache.hasSamples;
}

exports.hasSamples = hasSamples;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "samples.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "samples.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isStructured = exports.containsStructuredElement = exports.containsSelectElement = undefined;

var _some = __webpack_require__(107);

var _some2 = _interopRequireDefault(_some);

var _MissingCacheObject = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function containsSelectElement(element) {
  if (!element || !element.content) {
    return false;
  }

  if (!element.cache) {
    throw new _MissingCacheObject.MissingCacheObjectException(element);
  }

  return (0, _some2.default)(element.content, function (nestedElement) {
    return nestedElement.cache.isSelect;
  });
}

function containsStructuredElement(element) {
  if (!element) {
    return false;
  }

  if (!element.cache) {
    throw new _MissingCacheObject.MissingCacheObjectException(element);
  }

  return element.cache.containsStructuredElement;
}

function isStructured(element) {
  if (!element) {
    return false;
  }

  if (!element.cache) {
    throw new _MissingCacheObject.MissingCacheObjectException(element);
  }

  return element.cache.isStructured;
}

exports.containsSelectElement = containsSelectElement;
exports.containsStructuredElement = containsStructuredElement;
exports.isStructured = isStructured;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "structuredElement.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "structuredElement.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasValue = undefined;

var _isUndefined = __webpack_require__(11);

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _type = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hasValue(element) {
  if (!element) {
    return false;
  }

  if ((0, _type.isObjectOrArray)(element)) {
    return false;
  }

  if ((0, _isUndefined2.default)(element.content)) {
    return false;
  }

  if ((0, _type.isMember)(element.element)) {
    if (!(0, _isUndefined2.default)(element.content.value) && (0, _type.isObjectOrArray)(element.content.value)) {
      return false;
    }

    if ((0, _isUndefined2.default)(element.content.value)) {
      return false;
    }

    if ((0, _isUndefined2.default)(element.content.value.content)) {
      return false;
    }
  }

  return true;
}

exports.hasValue = hasValue;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "value.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "value.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Preprocessor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Refract Preprocessor
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Adds useful shortcut information and otherwise processes refract structures
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * so that rendering elements via React components is simpler.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


exports.preprocess = preprocess;

var _isEmpty = __webpack_require__(9);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _isArray = __webpack_require__(24);

var _isArray2 = _interopRequireDefault(_isArray);

var _isObject = __webpack_require__(18);

var _isObject2 = _interopRequireDefault(_isObject);

var _map = __webpack_require__(19);

var _map2 = _interopRequireDefault(_map);

var _contains = __webpack_require__(84);

var contains = _interopRequireWildcard(_contains);

var _has = __webpack_require__(85);

var has = _interopRequireWildcard(_has);

var _is = __webpack_require__(86);

var is = _interopRequireWildcard(_is);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function processElement(refract) {
  if (refract.cache) {
    // This item has already been preprocessed!
    // You can force reprocessing by deleting `refract.cache`.
    return;
  }

  // First, set various things on the element
  has.defaultValue(refract);
  has.samples(refract);
  has.description(refract);

  is.arrayType(refract);
  is.enumType(refract);
  is.selectType(refract);
  is.objectType(refract);

  is.included(refract);
  is.inherited(refract);

  is.structured(refract);
  is.referenced(refract);

  // Then, see if it has children and process each of the children as well!
  if (refract.content) {
    if (refract.element === 'member' && refract.content.value) {
      // This is a member of an object
      processElement(refract.content.value);
    } else if (refract.content.length && refract.content[0].element) {
      // This is an array of items
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = refract.content[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          processElement(item);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }

  // This must be done *AFTER* all children are processed, because it
  // depends on values set in the loop above.
  contains.structuredElement(refract);

  // Then, see if it the element has any samples and process them as well!
  if (refract.attributes && !(0, _isEmpty2.default)(refract.attributes.samples)) {
    refract.attributes.samples = (0, _map2.default)(refract.attributes.samples, function (sample) {
      if ((0, _isArray2.default)(sample)) {
        return (0, _map2.default)(sample, function (sampleElement) {
          processElement(sampleElement);
          return sampleElement;
        });
      }

      if ((0, _isObject2.default)(sample)) {
        processElement(sample);
        return sample;
      }

      return sample;
    });
  }

  if (refract.attributes && refract.attributes.default) {
    processElement(refract.attributes.default);
  }
}

var Preprocessor = exports.Preprocessor = function () {
  function Preprocessor(refract) {
    _classCallCheck(this, Preprocessor);

    this.refract = refract;
  }

  _createClass(Preprocessor, [{
    key: 'process',
    value: function process() {
      processElement(this.refract);

      return this;
    }
  }, {
    key: 'value',
    value: function value() {
      return this.refract;
    }

    /*
     * Sorts inherited members either as the first members or the last members.
     * This sort is stable. Passing `head` as `true` puts inherited members first,
     * otherwise they go last.
     */

  }, {
    key: 'sortInherited',
    value: function sortInherited() {
      var head = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (this.refract && this.refract.content && this.refract.content.length) {
        var inherited = [];
        var others = [];

        var result = void 0;

        // We are not using `array.sort(...)` because it may not be stable!
        // The order of items matters because we want to keep the order
        // that was given by the user - it may have semantic meaning.
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.refract.content[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;

            if (item.cache && item.cache.isInherited) {
              inherited.push(item);
            } else {
              others.push(item);
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        if (head) {
          result = inherited.concat(others);
        } else {
          result = others.concat(inherited);
        }

        this.refract.content = result;
      }

      return this;
    }
  }]);

  return Preprocessor;
}();

function preprocess(refract) {
  return new Preprocessor(refract).process().value();
}

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "Preprocessor.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "Preprocessor.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.structuredElement = structuredElement;

var _utilities = __webpack_require__(23);

// This assumes that `cache.isStructured` has already
// been set on any child elements!
function structuredElement(refract) {
  var containsStructured = false;

  if (refract && refract.content && refract.content.length) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = refract.content[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        if (item.cache && item.cache.isStructured) {
          containsStructured = true;
          break;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  (0, _utilities.setCache)(refract, 'containsStructuredElement', containsStructured);
}

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "contains.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "contains.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultValue = defaultValue;
exports.samples = samples;
exports.description = description;

var _isEmpty = __webpack_require__(9);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _utilities = __webpack_require__(23);

var _ElementUtils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function defaultValue(refract) {
  var hasDefault = false;

  if (refract && refract.attributes && refract.attributes.default !== undefined) {
    hasDefault = true;
  }

  (0, _utilities.setCache)(refract, 'hasDefault', hasDefault);
}

function samples(refract) {
  var hasSamples = false;

  if (refract && refract.attributes && !(0, _isEmpty2.default)(refract.attributes.samples)) {
    hasSamples = true;
  }

  (0, _utilities.setCache)(refract, 'hasSamples', hasSamples);
}

function description(refract) {
  var hasDescription = false;

  if (refract && refract.meta && refract.meta.description) {
    hasDescription = true;
  } else if ((0, _ElementUtils.isMember)(refract) && refract.content) {
    var value = refract.content.value;
    if (value && value.meta && value.meta.description) {
      hasDescription = true;
    }
  }

  (0, _utilities.setCache)(refract, 'hasDescription', hasDescription);
}

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "has.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "has.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayType = arrayType;
exports.enumType = enumType;
exports.selectType = selectType;
exports.objectType = objectType;
exports.included = included;
exports.inherited = inherited;
exports.structured = structured;
exports.referenced = referenced;

var _every = __webpack_require__(37);

var _every2 = _interopRequireDefault(_every);

var _isEmpty = __webpack_require__(9);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _sift = __webpack_require__(20);

var _sift2 = _interopRequireDefault(_sift);

var _types = __webpack_require__(33);

var _queries = __webpack_require__(88);

var _utilities = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var includedMember = _queries.QUERIES.includedMember,
    inheritedMember = _queries.QUERIES.inheritedMember;


function isType(refract, type) {
  var result = false;

  if (refract) {
    if (refract === type) {
      result = true;
    }

    if (refract.element === type) {
      result = true;
    } else if (refract.element === 'member') {
      // This is a member of an object, so we really care about the
      // type of its value, e.g. `string` rather than `member`.
      if (refract.content && refract.content.value && refract.content.value.element === type) {
        result = true;
      }
    }
  }

  return result;
}

function arrayType(refract) {
  (0, _utilities.setCache)(refract, 'isArray', isType(refract, _types.TYPES.ARRAY));
}

function enumType(refract) {
  (0, _utilities.setCache)(refract, 'isEnum', isType(refract, _types.TYPES.ENUM));
}

function selectType(refract) {
  (0, _utilities.setCache)(refract, 'isSelect', isType(refract, _types.TYPES.SELECT));
}

function objectType(refract) {
  (0, _utilities.setCache)(refract, 'isObject', isType(refract, _types.TYPES.OBJECT));
}

function included(refract) {
  var results = (0, _sift2.default)(includedMember.query, [refract]);
  var isIncluded = results.length > 0;

  (0, _utilities.setCache)(refract, 'isIncluded', isIncluded);
}

function inherited(refract) {
  var results = (0, _sift2.default)(inheritedMember.query, [refract]);
  var isInherited = results.length > 0;

  (0, _utilities.setCache)(refract, 'isInherited', isInherited);
}

// Note: this check depends on the type checks above to have
// been run first!
function structured(refract) {
  var isStructured = refract.cache.isObject || refract.cache.isArray || refract.cache.isEnum || refract.cache.isSelect;
  (0, _utilities.setCache)(refract, 'isStructured', isStructured);
}

function referenced(refract) {
  var isReferenced = false;

  if (refract && refract.content && refract.content.value) {
    var nestedElement = refract.content.value;

    if (!(0, _isEmpty2.default)(nestedElement.content)) {
      var ref = void 0;

      isReferenced = (0, _every2.default)(nestedElement.content, function (childElement) {
        if (!childElement.meta || !childElement.meta.ref) {
          return false;
        }

        if (!ref) {
          ref = childElement.meta.ref;
          return true;
        }

        return childElement.meta.ref === ref;
      });
    }
  }

  (0, _utilities.setCache)(refract, 'isReferenced', isReferenced);
}

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "is.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "is.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preprocessSamples = undefined;

var _isEmpty = __webpack_require__(9);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _isArray = __webpack_require__(24);

var _isArray2 = _interopRequireDefault(_isArray);

var _isObject = __webpack_require__(18);

var _isObject2 = _interopRequireDefault(_isObject);

var _map = __webpack_require__(19);

var _map2 = _interopRequireDefault(_map);

var _each = __webpack_require__(36);

var _each2 = _interopRequireDefault(_each);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function processElement(refractElement) {
  if (!refractElement) {
    return;
  }

  var attributes = refractElement.attributes;

  // Then, see if it the element has any samples and process them as well!
  if (attributes && !(0, _isEmpty2.default)(attributes.samples)) {
    attributes.samples = (0, _map2.default)(attributes.samples, function (sample) {
      if ((0, _isArray2.default)(sample) || (0, _isObject2.default)(sample)) {
        return {
          element: refractElement.element,
          content: sample
        };
      }

      return {
        element: refractElement.element,
        content: sample
      };
    });
  }

  if (attributes && attributes.default) {
    if ((0, _isArray2.default)(attributes.default) || (0, _isObject2.default)(attributes.default)) {
      attributes.default = {
        element: refractElement.element,
        content: attributes.default
      };
    } else {
      attributes.default = {
        element: refractElement.element,
        content: attributes.default
      };
    };
  }

  // Then, see if it has children and process each of the children as well!
  if (refractElement.content) {
    if (refractElement.element === 'member' && refractElement.content.value) {
      // This is a member of an object.
      processElement(refractElement.content.value);
    } else if (refractElement.content.length && refractElement.content[0].element) {
      // This is an array of items.
      (0, _each2.default)(refractElement.content, function (nestedRefractElement) {
        processElement(nestedRefractElement);
      });
    }
  }
}

function preprocessSamples(refractElement) {
  processElement(refractElement);
  return refractElement;
};

exports.preprocessSamples = preprocessSamples;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "SamplesPreprocessor.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "SamplesPreprocessor.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var QUERIES = {
  inheritedMember: {
    query: {
      $or: [{
        'meta.links': {
          href: 'http://refract.link/inherited-member/',
          relation: 'origin'
        }
      }, {
        'meta.links': {
          href: 'http://refract.link/inherited/',
          relation: 'origin'
        }
      }]
    }
  },
  includedMember: {
    query: {
      'meta.links': {
        href: 'http://refract.link/included-member/',
        relation: 'origin'
      }
    }
  }
};

exports.QUERIES = QUERIES;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "queries.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "queries.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Primitive = __webpack_require__(69);

var _Primitive2 = _interopRequireDefault(_Primitive);

var _Array = __webpack_require__(44);

var _Array2 = _interopRequireDefault(_Array);

var _Select = __webpack_require__(31);

var _Select2 = _interopRequireDefault(_Select);

var _Object = __webpack_require__(56);

var _Object2 = _interopRequireDefault(_Object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  /**
   * Primitive Types
   */
  boolean: _Primitive2.default,
  string: _Primitive2.default,
  number: _Primitive2.default,

  /**
   * Structure Types
   */
  object: _Object2.default,
  select: _Select2.default,

  // Since Array and Enum elements have the same structure we'll
  // share the same component for rendering.
  array: _Array2.default,
  enum: _Array2.default
};
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "refractToComponentMap.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "refractToComponentMap.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var THEME = {
  BACKGROUND_COLOR: 'white',

  BORDER_COLOR: '#E8EBEE',
  ALTERNATE_BORDER_COLOR: '#D2D8DE',

  KEY_COLOR: 'rgb(48, 52, 63)',
  TYPE_COLOR: '#8A93A3',

  /* Value */
  VALUE_COLOR: '#5D6470',
  VALUE_BACKGROUND_COLOR: '#F0F1F4',
  VALUE_BORDER_RADIUS: '3px',
  VALUE_FONT_WEIGHT: '600',
  VALUE_PADDING_TOP: '4px',
  VALUE_PADDING_BOTTOM: '4px',
  VALUE_PADDING_LEFT: '8px',
  VALUE_PADDING_RIGHT: '8px',

  /* Description */
  DESCRIPTION_COLOR: '#8A93A3',

  /* ArrayHeader */
  ARRAY_HEADER_BACKGROUND_COLOR: '#E8EBEE',
  ARRAY_HEADER_BORDER_COLOR: '#E8EBEE',

  /* ArrayItem */
  ARRAY_ITEMS_BORDER_COLOR: '#E8EBEE',

  /* SampleToggle */
  SAMPLE_TOGGLE_TITLE_COLOR: '#A3A7B2',

  /* InheritanceTree */
  INHERITANCE_TREE_NODE_COLOR: '#30343F',
  INHERITANCE_TREE_ROOT_NODE_COLOR: '#30343F',
  INHERITANCE_TREE_CURRENT_NODE_COLOR: '#8A93A3',

  ROW_PADDING_TOP: '14px',
  ROW_PADDING_BOTTOM: '14px',

  /* Select (One Of) */
  SELECT_LINE_COLOR: '#BDC4CB',
  SELECT_TEXT_COLOR: 'black'

};

exports.default = THEME;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "theme.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "theme.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _events = __webpack_require__(38);

var _eidolon = __webpack_require__(25);

var _eidolon2 = _interopRequireDefault(_eidolon);

var _Attributes = __webpack_require__(39);

var _Attributes2 = _interopRequireDefault(_Attributes);

var _Attribute = __webpack_require__(21);

var _Attribute2 = _interopRequireDefault(_Attribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AttributesKit = (_temp = _class = function (_EventEmitter) {
  _inherits(AttributesKit, _EventEmitter);

  _createClass(AttributesKit, null, [{
    key: 'render',
    value: function render(refractElement, element, options) {
      var elementSelector = null;
      if (typeof element === 'string') {
        elementSelector = element;
      }

      var attributesKit = new AttributesKit({
        element: element,
        elementSelector: elementSelector,
        options: options
      });

      attributesKit.render(refractElement);
      return attributesKit;
    }
  }]);

  function AttributesKit(options) {
    _classCallCheck(this, AttributesKit);

    var _this = _possibleConstructorReturn(this, (AttributesKit.__proto__ || Object.getPrototypeOf(AttributesKit)).call(this));

    _this.options = options || {};

    _this.element = options.element;
    _this.elementSelector = options.elementSelector;
    _this.options = options.options;

    _this.getElement();
    _this.validate();
    return _this;
  }

  _createClass(AttributesKit, [{
    key: 'validate',
    value: function validate() {
      if (!this.element) {
        throw Error('Unable to find element where to render attributes.');
      }
    }
  }, {
    key: 'getElement',
    value: function getElement() {
      if (this.element) {
        return this.element;
      }

      this.element = document.querySelector(this.elementSelector);
      return this.element;
    }
  }, {
    key: 'render',
    value: function render(refractElement) {
      _reactDom2.default.render(_react2.default.createElement(_Attributes2.default, { element: refractElement, dataStructures: this.options.dataStructures }), this.element);
    }
  }]);

  return AttributesKit;
}(_events.EventEmitter), _class.Attributes = _Attributes2.default, _class.Attribute = _Attribute2.default, _class.generateExample = _eidolon2.default.example, _class.generateJsonSchema = _eidolon2.default.schema, _temp);

// Exports

exports.default = AttributesKit;
module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "index.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (process.env.NODE_ENV !== "production") {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = "'data:image/svg+xml;utf8,<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><title>arrow</title><path d=\"M4.309 6.103l-3.98-3.98A1.128 1.128 0 0 1 .331.535 1.12 1.12 0 0 1 1.92.532L6.698 5.31c.216.216.325.503.326.79.002.292-.108.578-.326.796L1.92 11.674a1.128 1.128 0 0 1-1.589-.002 1.12 1.12 0 0 1-.002-1.589l3.98-3.98z\" fill=\"%23DADDD6\" fill-rule=\"evenodd\"/></svg>'"

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = "'data:image/svg+xml;utf8,<svg width=\"12\" height=\"7\" viewBox=\"0 0 12 7\" xmlns=\"http://www.w3.org/2000/svg\"><title>arrow</title><path d=\"M9.877.329a1.128 1.128 0 0 1 1.588.002c.443.443.44 1.15.003 1.589L6.69 6.698a1.118 1.118 0 0 1-.79.326 1.104 1.104 0 0 1-.796-.326L.326 1.92A1.128 1.128 0 0 1 .328.331 1.12 1.12 0 0 1 1.917.33l3.98 3.98 3.98-3.98z\" fill=\"%23C3CDD7\" fill-rule=\"evenodd\"/></svg>'"

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = "'data:image/svg+xml;utf8,<svg width=\"8\" height=\"13\" viewBox=\"0 0 8 13\" xmlns=\"http://www.w3.org/2000/svg\"><title>Slice 1</title><path d=\"M4.695 6.49L.715 2.51A1.128 1.128 0 0 1 .718.92 1.12 1.12 0 0 1 2.306.92l4.778 4.778c.216.216.325.502.326.79.003.291-.107.577-.326.796L2.306 12.06a1.128 1.128 0 0 1-1.588-.003 1.12 1.12 0 0 1-.003-1.588l3.98-3.98z\" fill=\"%2349B7FF\" fill-rule=\"evenodd\"/></svg>'"

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = "'data:image/svg+xml;utf8,<svg width=\"13\" height=\"8\" viewBox=\"0 0 13 8\" xmlns=\"http://www.w3.org/2000/svg\"><title>Slice 1</title><path d=\"M6.51 4.695l3.98-3.98a1.128 1.128 0 0 1 1.589.003c.442.442.44 1.15.002 1.588L7.303 7.084a1.118 1.118 0 0 1-.79.326 1.104 1.104 0 0 1-.796-.326L.94 2.306A1.128 1.128 0 0 1 .942.718 1.12 1.12 0 0 1 2.53.715l3.98 3.98z\" fill=\"%2349B7FF\" fill-rule=\"evenodd\"/></svg>'"

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_98__;

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_99__;

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_100__;

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_101__;

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_102__;

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_103__;

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_104__;

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_105__;

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_106__;

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_107__;

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_108__;

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_109__;

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_110__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=attributes-kit-no-deps.js.map