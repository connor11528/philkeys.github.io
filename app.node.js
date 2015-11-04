module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(62);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(10);

  var _libLocation = __webpack_require__(7);

  var _libLocation2 = _interopRequireDefault(_libLocation);

  var _componentsLayout = __webpack_require__(25);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(32);
    }, '/500': function _() {
      return __webpack_require__(33);
    }, '/about': function about() {
      return __webpack_require__(34);
    }, '/account': function account() {
      return __webpack_require__(35);
    }, '/adaptive': function adaptive() {
      return __webpack_require__(36);
    }, '/advantage': function advantage() {
      return __webpack_require__(37);
    }, '/blog': function blog() {
      return __webpack_require__(38);
    }, '/blog/test-article-one': function blogTestArticleOne() {
      return __webpack_require__(39);
    }, '/blog/test-article-two': function blogTestArticleTwo() {
      return __webpack_require__(40);
    }, '/': function _() {
      return __webpack_require__(41);
    }, '/mmmystery': function mmmystery() {
      return __webpack_require__(42);
    }, '/resume': function resume() {
      return __webpack_require__(43);
    }, '/work': function work() {
      return __webpack_require__(44);
    } }; // Auto-generated on build. See tools/lib/routes-loader.js

  var route = function route(path, callback) {
    var handler, component;
    return regeneratorRuntime.async(function route$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          console.log(routes);
          handler = routes[path] || routes['/404'];
          context$1$0.next = 4;
          return regeneratorRuntime.awrap(handler());

        case 4:
          component = context$1$0.sent;
          context$1$0.next = 7;
          return regeneratorRuntime.awrap(callback(_react2['default'].createElement(
            _componentsLayout2['default'],
            null,
            _react2['default'].createElement(component)
          )));

        case 7:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this);
  };

  function run() {
    var _this2 = this;

    var container = document.getElementById('app');
    _libLocation2['default'].listen(function (location) {
      route(location.pathname, function callee$2$0(component) {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              return context$3$0.abrupt('return', _reactDom2['default'].render(component, container, function () {
                // Track the page view event via Google Analytics
                window.ga('send', 'pageview');
              }));

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, _this2);
      });
    });
  }

  if (_fbjsLibExecutionEnvironment.canUseDOM) {
    // Run the application when both DOM is ready
    // and page content is loaded
    if (window.addEventListener) {
      window.addEventListener('DOMContentLoaded', run);
    } else {
      window.attachEvent('onload', run);
    }
  }

  exports['default'] = { route: route, routes: routes };
  module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(55);

  var _libLocation = __webpack_require__(7);

  var _libLocation2 = _interopRequireDefault(_libLocation);

  function isLeftClickEvent(event) {
    return event.button === 0;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var Link = (function (_Component) {
    _inherits(Link, _Component);

    function Link() {
      _classCallCheck(this, Link);

      _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var children = _props.children;

        var props = _objectWithoutProperties(_props, ['to', 'children']);

        return _react2['default'].createElement(
          'a',
          _extends({ onClick: Link.handleClick.bind(this) }, props),
          children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        to: _react.PropTypes.string.isRequired,
        children: _react.PropTypes.element.isRequired,
        state: _react.PropTypes.object,
        onClick: _react.PropTypes.func
      },
      enumerable: true
    }, {
      key: 'handleClick',
      value: function value(event) {
        var allowTransition = true;
        var clickResult = undefined;

        if (_this.props && _this.props.onClick) {
          clickResult = _this.props.onClick(event);
        }

        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }

        if (clickResult === false || event.defaultPrevented === true) {
          allowTransition = false;
        }

        event.preventDefault();

        if (allowTransition) {
          var link = event.currentTarget;
          _libLocation2['default'].pushState(_this.props && _this.props.state || null, _this.props && _this.props.to || link.pathname + link.search);
        }
      },
      enumerable: true
    }]);

    return Link;
  })(_react.Component);

  exports['default'] = Link;
  module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("react-picture");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/* Colors */\n\n/* Uses */\n\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n/* Old Media Queries\n$iphone5-screen: 320px;\n$iphone6-screen: 375px;\n$tiny-screen: 500px;\n$extra-small-screen: 600px;\n$small-screen: 768px;\n$small-medium: 940px;\n$medium-screen: 1280px;\n$large-screen: 1440px;\n$x-large-screen: 1600px;\n*/\n\n/* React-starter-kit\n$screen-sm-min: 768px;\n$screen-md-min: 992px;\n$screen-lg-min: 1200px;\n*/\n\n/* Supported Size Ranges: */\n/* handhelds, except-handhelds */\n/* small-screens, except-small-screens, to-small-screens, above-small-screens */\n/* medium-screens, except-medium-screens, above-medium-screens */\n/* large-screens, except-large-screens */\n/* Use: */\n/* @include media(handhelds, large-screens) */\n/* @include media(above-small-screens) {\n     max-width: 960px\n   }\n*/\n/* Typesetting variables. Edit these! */ /* in pixels. This would result in 22px on desktop */ /* how large the line height is as a multiple of font size */ /* ADJUST THE FIRST IF YOU CHANGE $baselineHeight\n\n/* Rate of growth for headings */\n/* I actually like this to be slightly smaller then the leading. Makes for tight headings. */\n\n/* Setup */\nhtml {\n  /* Change default typefaces here */\n  font-family: 'ProximaNova-Regular', 'Open Sans', 'Helvetica', 'sans-serif';\n  font-size: calc(22 / 16 * 100%);\n  font-weight: normal;\n  font-style: normal;\n  color: #394453;\n\n  /* Make everything look a little nicer in webkit */\n  -webkit-font-smoothing: antialiased;\n}\n  /* -webkit-text-size-adjust: auto\n  // -moz-text-size-adjust: auto\n  // -ms-text-size-adjust: auto\n  // -o-text-size-adjust: auto\n  // text-size-adjust: auto */\n\n/* Copy & Lists */\np {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n}\nul, ol {\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\nul li, ol li {\n  line-height: calc(1.5 * 1rem);\n}\nul ul, ul ol, ol ul, ol ol {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nblockquote {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\n/* Headings */\nh1, h2, h3, h4, h5, h6 {\n  /* Change heading typefaces here */\n  font-family: 'Bariol', 'Archivo Narrow', 'Source Sans Pro', 'Alegreya', 'Playfair Display', 'Fira Sans', 'Vollkorn', 'ProximaNova-Semibold', 'Helvetica', 'sans-serif';\n  font-weight: bold;\n  font-style: normal;\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n  line-height: calc(1.5 * 1rem);\n}\nh1 {\n  font-size: calc(2.20 * 1.414 * 1rem);\n  font-weight: 700;\n  line-height: calc(2.35 * 1.5 * 1rem);\n  margin-top: calc(0.15 * 1.5 * 1rem);\n}\n\n@media only screen and (min-width: 680px) {\n  h1 {\n    font-size: calc(3 * 1.414 * 1rem);\n    line-height: calc(3 * 1.5 * 1rem);\n    //margin-top: calc(2 * calc(1.5 * 1rem));\n  }\n}\n\n\nh2 {\n  font-size: calc(2 * 1.414 * 1rem);\n  line-height: calc(2 * 1.5 * 1rem);\n  margin-top: calc(2 * 1.5 * 1rem);\n}\n\nh3 {\n  font-size: calc(1 * 1.414 * 1rem);\n}\nh4 {\n  font-size: calc(1.414 / 2 * 1rem);\n}\nh5 {\n  font-size: calc(1.414 / 3 * 1rem);\n}\nh6 {\n  font-size: calc(1.414 / 4 * 1rem);\n}\n\n/* Tables */\ntable {\n  margin-top: calc(1.5 * 1rem);\n  border-spacing: 0px;\n  border-collapse: collapse;\n}\ntable td, table th {\n  padding: 0;\n  line-height: calc(1.5 * 22 - 0px);\n}\n/* Code blocks */\ncode {\n  /* Forces text to constrain to the line-height. Not ideal, but works. */\n  vertical-align: bottom;\n}\n/* Leading paragraph text */\n.lead {\n  font-size: calc(1.414 * 1rem);\n}\n\n/* Hug a the block above you */\n.hug {\n  margin-top: 0;\n}\n\n\n@media only screen and (min-width: 680px) {\n  .Blog-hero {\n    margin-top: 100px;\n    margin-bottom: 100px;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 700px;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    -webkit-flex-flow: column nowrap;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n  }\n  .Blog-hero-title {\n    font-size: calc(2.25 * 1.414 * 1rem);\n    color: #FFBF00;\n  }\n  .Blog-hero-platform {\n    font-weight: 300;\n    font-family: 'ProximaNova-Light', 'Open Sans', 'Helvetica', 'sans-serif';\n    font-size: calc(.8 * 1.414 * 1rem);\n    color: #7F90A6;\n  }\n  .Blog-hero-phrase {\n    font-family: 'ProximaNova-Light', 'Open Sans', 'Helvetica', 'sans-serif';\n    font-weight: 300;\n    font-size: calc(1.1 * 1.414 * 1rem);\n    line-height: calc(1.35 * 1.5 * 1rem);\n    margin-top: calc(0 * 1.5 * .5rem);\n  }\n}\n\n@media only screen and (max-width: 679px) {\n  .Blog-hero {\n    margin-top: 50px;\n    margin-bottom: 50px;\n  }\n  .Blog-hero-title {\n    font-size: calc(2 * 1.414 * 1rem);\n    line-height: calc(2.1 * 1.5 * 1rem);\n    color: #FFBF00;\n  }\n}", ""]);

  // exports


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/* Colors */\n\n/* Uses */\n\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n/* Old Media Queries\n$iphone5-screen: 320px;\n$iphone6-screen: 375px;\n$tiny-screen: 500px;\n$extra-small-screen: 600px;\n$small-screen: 768px;\n$small-medium: 940px;\n$medium-screen: 1280px;\n$large-screen: 1440px;\n$x-large-screen: 1600px;\n*/\n\n/* React-starter-kit\n$screen-sm-min: 768px;\n$screen-md-min: 992px;\n$screen-lg-min: 1200px;\n*/\n\n/* Supported Size Ranges: */\n/* handhelds, except-handhelds */\n/* small-screens, except-small-screens, to-small-screens, above-small-screens */\n/* medium-screens, except-medium-screens, above-medium-screens */\n/* large-screens, except-large-screens */\n/* Use: */\n/* @include media(handhelds, large-screens) */\n/* @include media(above-small-screens) {\n     max-width: 960px\n   }\n*/\n/* Typesetting variables. Edit these! */ /* in pixels. This would result in 22px on desktop */ /* how large the line height is as a multiple of font size */ /* ADJUST THE FIRST IF YOU CHANGE $baselineHeight\n\n/* Rate of growth for headings */\n/* I actually like this to be slightly smaller then the leading. Makes for tight headings. */\n\n/* Setup */\nhtml {\n  /* Change default typefaces here */\n  font-family: 'ProximaNova-Regular', 'Open Sans', 'Helvetica', 'sans-serif';\n  font-size: calc(22 / 16 * 100%);\n  font-weight: normal;\n  font-style: normal;\n  color: #394453;\n\n  /* Make everything look a little nicer in webkit */\n  -webkit-font-smoothing: antialiased;\n}\n  /* -webkit-text-size-adjust: auto\n  // -moz-text-size-adjust: auto\n  // -ms-text-size-adjust: auto\n  // -o-text-size-adjust: auto\n  // text-size-adjust: auto */\n\n/* Copy & Lists */\np {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n}\nul, ol {\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\nul li, ol li {\n  line-height: calc(1.5 * 1rem);\n}\nul ul, ul ol, ol ul, ol ol {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nblockquote {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\n/* Headings */\nh1, h2, h3, h4, h5, h6 {\n  /* Change heading typefaces here */\n  font-family: 'Bariol', 'Archivo Narrow', 'Source Sans Pro', 'Alegreya', 'Playfair Display', 'Fira Sans', 'Vollkorn', 'ProximaNova-Semibold', 'Helvetica', 'sans-serif';\n  font-weight: bold;\n  font-style: normal;\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n  line-height: calc(1.5 * 1rem);\n}\nh1 {\n  font-size: calc(2.20 * 1.414 * 1rem);\n  font-weight: 700;\n  line-height: calc(2.35 * 1.5 * 1rem);\n  margin-top: calc(0.15 * 1.5 * 1rem);\n}\n\n@media only screen and (min-width: 680px) {\n  h1 {\n    font-size: calc(3 * 1.414 * 1rem);\n    line-height: calc(3 * 1.5 * 1rem);\n    //margin-top: calc(2 * calc(1.5 * 1rem));\n  }\n}\n\n\nh2 {\n  font-size: calc(2 * 1.414 * 1rem);\n  line-height: calc(2 * 1.5 * 1rem);\n  margin-top: calc(2 * 1.5 * 1rem);\n}\n\nh3 {\n  font-size: calc(1 * 1.414 * 1rem);\n}\nh4 {\n  font-size: calc(1.414 / 2 * 1rem);\n}\nh5 {\n  font-size: calc(1.414 / 3 * 1rem);\n}\nh6 {\n  font-size: calc(1.414 / 4 * 1rem);\n}\n\n/* Tables */\ntable {\n  margin-top: calc(1.5 * 1rem);\n  border-spacing: 0px;\n  border-collapse: collapse;\n}\ntable td, table th {\n  padding: 0;\n  line-height: calc(1.5 * 22 - 0px);\n}\n/* Code blocks */\ncode {\n  /* Forces text to constrain to the line-height. Not ideal, but works. */\n  vertical-align: bottom;\n}\n/* Leading paragraph text */\n.lead {\n  font-size: calc(1.414 * 1rem);\n}\n\n/* Hug a the block above you */\n.hug {\n  margin-top: 0;\n}\n\n.Work-container {\n  margin-bottom: 50px;\n}\n\n.Blog-section {\n  margin-top: 30px;\n  display: -webkit-box !important;\n  display: -webkit-flex !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -webkit-flex-flow: column nowrap !important;\n      -ms-flex-flow: column nowrap !important;\n          flex-flow: column nowrap !important;\n\n}\n\n.Blog-section h4 {\n  margin-top: 0;\n  font-family: 'Bariol','Abril Fatface','Playfair Display','Fira Sans','Vollkorn','ProximaNova-Semibold','Helvetica','sans-serif';\n  font-size: calc(1.4 * 1.414 * 1rem);\n  line-height: calc(1.6 * 1.5 * 1rem);\n}\n\n.Blog-section p {\n  margin-top: calc(1.25 * 1rem);\n}\n\n.Blog-section p.Blog-section-first-p {\n  margin-top: calc(.9 * 1rem);\n}\n\n.Blog-section a {\n  color: #FFBF00;\n  text-decoration: none;\n  cursor: pointer;\n  border-bottom: 3px solid white;\n  -webkit-transition: all 1s;\n       -o-transition: all 1s;\n          transition: all 1s;\n}\n\n.Blog-section a:hover {\n  border-bottom: 3px solid #FFBF00;\n  color: #394453;\n}\n\n.Blog-section ol {\n  padding-left: 25px;\n  margin-left: 0;\n  padding-right: 0;\n  list-style-type: none;\n  margin-bottom: 0;\n}\n\n.Blog-section ol li {\n  counter-increment: step-counter;\n}\n\n.Blog-section ol li:before {\n  content: counter(step-counter);\n  position: absolute;\n  color: #FFBF00;\n  margin-left: -25px;\n  font-size: 80%;\n  font-weight: bold;\n}\n\n.Blog-section li {\n  margin-bottom: 15px;\n}\n\n.Blog-section ul {\n  list-style: none;\n  margin-left: 0;\n  padding-left: 0;\n}\n\n.Blog-section ul li {\n  padding-left: 1em;\n  text-indent: -1em;\n}\n\n.Blog-section ul li:before {\n  content: \"\\2022\";\n  padding-right: 12px;\n  color: #FFBF00;\n}\n\n@media only screen and (max-width: 679px) {\n  .Work-container {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0 15px;\n  }\n  .Blog-section {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .Blog-section:nth-child(n) {\n    margin-right: 30px;\n  }\n  .Blog-section:last-child {\n    margin-right: 0;\n  }\n  .Blog-section:nth-child(1n) {\n    margin-right: 0;\n  }\n  .Blog-section p, .Blog-section li {\n    font-size: calc(22 / 26 * 100%);\n    line-height: calc(.95 * 1.5 * 1rem);\n  }\n}\n\n@media only screen and (min-width: 680px) {\n  .Work-container {\n    margin-bottom: 100px;\n  }\n  .Blog-section {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 700px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .Blog-blockquote-major {\n    font-family: 'ProximaNova-Light', 'Open Sans', 'Helvetica', 'sans-serif';\n    font-size: calc(1.1 * 1.414 * 1rem);\n    line-height: calc(1.5 * 1.5 * 1rem);\n    margin-top: calc(0 * 1.5 * .5rem);\n  }\n  .Blog-blockquote-minor {\n    margin-top: 0;\n    margin-left: -20px;\n    border-left: 3px solid #5B6675;\n    padding-left: 20px;\n  }\n}\n.Blog-image-small, .Blog-image-small--filter {\n  display: block;\n  width: 100%;\n  max-width: 700px;\n  height: auto;\n  margin: 0 auto;\n}\n\n.Blog-image-medium {\n  display: block;\n  width: 100%;\n  max-width: 1050px;\n  height: auto;\n  margin: 0 auto;\n}\n\n.Blog-image-small--filter {\n  max-width: 366px;\n}\n\n.Blog-image-small-container {\n  margin: 30px auto 10px;\n}\n\n@media only screen and (min-width: 680px) {\n  .Blog-image-small-container {\n    margin: 30px auto;\n  }\n}\n\n.Blog-image-right-container {\n  margin: 60px 0 15px;\n}\n\n@media only screen and (max-width: 999px) {\n  .Blog-image-right {\n    margin: 0 auto;\n    width: 100%;\n  }\n}\n\n@media only screen and (min-width: 1000px) {\n  .Blog-image-right {\n    margin: 0 0 0 35%;\n  }\n}\n\np.Blog-sub-header {\n  margin-top: 0;\n}\n\n@media only screen and (max-width: 679px) {\n  .Video-section {\n    display: none;\n  }\n}\n", ""]);

  // exports


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(10);

  var _historyLibCreateBrowserHistory = __webpack_require__(60);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibUseQueries = __webpack_require__(61);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = _fbjsLibExecutionEnvironment.canUseDOM ? (0, _historyLibUseQueries2['default'])(_historyLibCreateBrowserHistory2['default'])() : {};

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/* Colors */\n\n/* Uses */\n\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n/* Old Media Queries\n$iphone5-screen: 320px;\n$iphone6-screen: 375px;\n$tiny-screen: 500px;\n$extra-small-screen: 600px;\n$small-screen: 768px;\n$small-medium: 940px;\n$medium-screen: 1280px;\n$large-screen: 1440px;\n$x-large-screen: 1600px;\n*/\n\n/* React-starter-kit\n$screen-sm-min: 768px;\n$screen-md-min: 992px;\n$screen-lg-min: 1200px;\n*/\n\n/* Supported Size Ranges: */\n/* handhelds, except-handhelds */\n/* small-screens, except-small-screens, to-small-screens, above-small-screens */\n/* medium-screens, except-medium-screens, above-medium-screens */\n/* large-screens, except-large-screens */\n/* Use: */\n/* @include media(handhelds, large-screens) */\n/* @include media(above-small-screens) {\n     max-width: 960px\n   }\n*/\n\n/* Typesetting variables. Edit these! */ /* in pixels. This would result in 22px on desktop */ /* how large the line height is as a multiple of font size */ /* ADJUST THE FIRST IF YOU CHANGE $baselineHeight\n\n/* Rate of growth for headings */\n/* I actually like this to be slightly smaller then the leading. Makes for tight headings. */\n\n/* Setup */\nhtml {\n  /* Change default typefaces here */\n  font-family: 'ProximaNova-Regular', 'Open Sans', 'Helvetica', 'sans-serif';\n  font-size: calc(22 / 16 * 100%);\n  font-weight: normal;\n  font-style: normal;\n  color: #394453;\n\n  /* Make everything look a little nicer in webkit */\n  -webkit-font-smoothing: antialiased;\n}\n  /* -webkit-text-size-adjust: auto\n  // -moz-text-size-adjust: auto\n  // -ms-text-size-adjust: auto\n  // -o-text-size-adjust: auto\n  // text-size-adjust: auto */\n\n/* Copy & Lists */\np {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n}\nul, ol {\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\nul li, ol li {\n  line-height: calc(1.5 * 1rem);\n}\nul ul, ul ol, ol ul, ol ol {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nblockquote {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\n/* Headings */\nh1, h2, h3, h4, h5, h6 {\n  /* Change heading typefaces here */\n  font-family: 'Bariol', 'Archivo Narrow', 'Source Sans Pro', 'Alegreya', 'Playfair Display', 'Fira Sans', 'Vollkorn', 'ProximaNova-Semibold', 'Helvetica', 'sans-serif';\n  font-weight: bold;\n  font-style: normal;\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n  line-height: calc(1.5 * 1rem);\n}\nh1 {\n  font-size: calc(2.20 * 1.414 * 1rem);\n  font-weight: 700;\n  line-height: calc(2.35 * 1.5 * 1rem);\n  margin-top: calc(0.15 * 1.5 * 1rem);\n}\n\n@media only screen and (min-width: 680px){\n  h1{\n    font-size: calc(3 * 1.414 * 1rem);\n    line-height: calc(3 * 1.5 * 1rem);\n    //margin-top: calc(2 * calc(1.5 * 1rem));\n  }\n}\n\n\nh2 {\n  font-size: calc(2 * 1.414 * 1rem);\n  line-height: calc(2 * 1.5 * 1rem);\n  margin-top: calc(2 * 1.5 * 1rem);\n}\n\nh3 {\n  font-size: calc(1 * 1.414 * 1rem);\n}\nh4 {\n  font-size: calc(1.414 / 2 * 1rem);\n}\nh5 {\n  font-size: calc(1.414 / 3 * 1rem);\n}\nh6 {\n  font-size: calc(1.414 / 4 * 1rem);\n}\n\n/* Tables */\ntable {\n  margin-top: calc(1.5 * 1rem);\n  border-spacing: 0px;\n  border-collapse: collapse;\n}\ntable td, table th {\n  padding: 0;\n  line-height: calc(1.5 * 22 - 0px);\n}\n/* Code blocks */\ncode {\n  /* Forces text to constrain to the line-height. Not ideal, but works. */\n  vertical-align: bottom;\n}\n/* Leading paragraph text */\n.lead {\n  font-size: calc(1.414 * 1rem);\n}\n\n/* Hug a the block above you */\n.hug {\n  margin-top: 0;\n}\n\n\n.Feature-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  max-width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  -webkit-flex-flow: column nowrap;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  margin-bottom: 75px;\n}\n\n.Image-section {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n}\n\n.Image-section:nth-child(n){\n  margin-right: 30px;\n}\n\n.Image-section:last-child{\n  margin-right: 0;\n}\n\n.Image-section:nth-child(1n){\n  margin-right: 0;\n}\n\n.Content-section {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n}\n\n.Content-section:nth-child(n){\n  margin-right: 30px;\n}\n\n.Content-section:last-child{\n  margin-right: 0;\n}\n\n.Content-section:nth-child(1n){\n  margin-right: 0;\n}\n\n.featureImg {\n  width: 700px;\n  height: 350px;\n  margin-left: -20%;\n  //border-top-left-radius: 75px;\n}\n\n.Image-container {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n  height: 360px;\n  overflow: hidden;\n  border-top-right-radius: 75px;\n}\n\n.Image-container:nth-child(n){\n  margin-right: 30px;\n}\n\n.Image-container:last-child{\n  margin-right: 0;\n}\n\n.Image-container:nth-child(1n){\n  margin-right: 0;\n}\n\n.Image {\n  height: 100%;\n  width: auto;\n  -webkit-background-size: cover;\n          background-size: cover;\n  background: url('https://s3-us-west-1.amazonaws.com/phil-portfolio-images/Mmmystery-Image-1.jpg') no-repeat center center;\n}\n\n.Link {\n  position: relative;\n  display: block;\n  text-decoration: none;\n  color: #FFBF00;\n  margin-top: 15px;\n  font-family: 'ProximaNova-Semibold','Open Sans','Helvetica','sans-serif';\n  font-weight: 500;\n}\n\n.Link:after {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 4px;\n  height: 21px;\n  width: 36px;\n  //background-color: #FFBF00;\n  background-image:  url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2236%22%20height%3D%2221%22%20viewBox%3D%220%200%2036%2021%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Elink%3C%2Ftitle%3E%3Cpath%20d%3D%22M25.358%200l-1.45%201.418%208.19%208.078L0%209.12v2.008l32.097.376-8.19%208.078L25.358%2021%2036%2010.5%2025.358%200z%22%20fill%3D%22%23FFD968%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E');\n  //-webkit-mask-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2236%22%20height%3D%2221%22%20viewBox%3D%220%200%2036%2021%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Elink%3C%2Ftitle%3E%3Cpath%20d%3D%22M25.358%200l-1.45%201.418%208.19%208.078L0%209.12v2.008l32.097.376-8.19%208.078L25.358%2021%2036%2010.5%2025.358%200z%22%20fill%3D%22%23FFD968%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E');\n  //mask-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2236%22%20height%3D%2221%22%20viewBox%3D%220%200%2036%2021%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Elink%3C%2Ftitle%3E%3Cpath%20d%3D%22M25.358%200l-1.45%201.418%208.19%208.078L0%209.12v2.008l32.097.376-8.19%208.078L25.358%2021%2036%2010.5%2025.358%200z%22%20fill%3D%22%23FFD968%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E');\n}\n\n\n.Content-title h5, .Content-title .title-platform {\n  display: inline-block;\n  font-family: 'Bariol','Abril Fatface','Playfair Display','Fira Sans','Vollkorn','ProximaNova-Semibold','Helvetica','sans-serif';\n  font-size: calc(1 * 1.414 * 1rem);\n  line-height: calc(1.1 * 1.5 * 1rem);\n}\n\n\n.Content-title .title-platform {\n  color: #7F90A6;\n  margin-left: 15px;\n}\n\n\n.Content-title p {\n  margin-top: calc(1.5 * 1rem / 6);\n}\n\n.Content-summary {\n  margin-top: calc(1.5 * 1rem / 6);\n  position: relative;\n}\n\n.Content-summary:before {\n  content: '';\n  display: block;\n  position: absolute;\n  z-index: -1;\n  top: -10px;\n  left: -20px;\n  height: 58px;\n  width: 65px;\n  //background-color: #FDEEBD;\n  background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2265%22%20height%3D%2258%22%20viewBox%3D%220%200%2065%2058%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EQuotation%3C%2Ftitle%3E%3Cpath%20d%3D%22M47.326%2029.435c0%202.108%201.244%203.227%203.73%203.36l3.93.196c2.617.133%204.94%201.384%206.97%203.755%202.03%202.37%203.044%205.07%203.044%208.1%200%203.687-1.31%206.782-3.927%209.284-2.62%202.502-5.892%203.753-9.82%203.753-4.58%200-8.345-1.81-11.29-5.433-2.946-3.622-4.42-8.264-4.42-13.927%200-10.536%204.125-21.336%2012.372-32.4C50.927%202.042%2053.545%200%2055.77%200c2.488%200%203.732%201.317%203.732%203.95%200%201.055-.72%202.503-2.16%204.347-3.535%204.478-6.48%209.812-8.837%2016.002-.786%202.106-1.18%203.818-1.18%205.135zm-35.74%200c0%202.108%201.244%203.227%203.73%203.36l3.93.196c2.748.133%205.137%201.384%207.166%203.755%202.03%202.37%203.044%205.07%203.044%208.1%200%203.687-1.31%206.782-3.927%209.284-2.62%202.502-5.893%203.753-9.82%203.753-4.582%200-8.346-1.81-11.292-5.433C1.473%2048.828%200%2044.186%200%2038.523c0-10.536%204.124-21.336%2012.372-32.4C15.382%202.042%2018.002%200%2020.227%200c2.487%200%203.73%201.317%203.73%203.95%200%201.055-.72%202.503-2.16%204.347-2.618%203.293-4.974%207.112-7.07%2011.458-2.094%204.346-3.14%207.573-3.14%209.68z%22%20fill%3D%22%23FDEEBD%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E');\n  //-webkit-mask-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2265%22%20height%3D%2258%22%20viewBox%3D%220%200%2065%2058%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EQuotation%3C%2Ftitle%3E%3Cpath%20d%3D%22M47.326%2029.435c0%202.108%201.244%203.227%203.73%203.36l3.93.196c2.617.133%204.94%201.384%206.97%203.755%202.03%202.37%203.044%205.07%203.044%208.1%200%203.687-1.31%206.782-3.927%209.284-2.62%202.502-5.892%203.753-9.82%203.753-4.58%200-8.345-1.81-11.29-5.433-2.946-3.622-4.42-8.264-4.42-13.927%200-10.536%204.125-21.336%2012.372-32.4C50.927%202.042%2053.545%200%2055.77%200c2.488%200%203.732%201.317%203.732%203.95%200%201.055-.72%202.503-2.16%204.347-3.535%204.478-6.48%209.812-8.837%2016.002-.786%202.106-1.18%203.818-1.18%205.135zm-35.74%200c0%202.108%201.244%203.227%203.73%203.36l3.93.196c2.748.133%205.137%201.384%207.166%203.755%202.03%202.37%203.044%205.07%203.044%208.1%200%203.687-1.31%206.782-3.927%209.284-2.62%202.502-5.893%203.753-9.82%203.753-4.582%200-8.346-1.81-11.292-5.433C1.473%2048.828%200%2044.186%200%2038.523c0-10.536%204.124-21.336%2012.372-32.4C15.382%202.042%2018.002%200%2020.227%200c2.487%200%203.73%201.317%203.73%203.95%200%201.055-.72%202.503-2.16%204.347-2.618%203.293-4.974%207.112-7.07%2011.458-2.094%204.346-3.14%207.573-3.14%209.68z%22%20fill%3D%22%23FDEEBD%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E');\n  //mask-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2265%22%20height%3D%2258%22%20viewBox%3D%220%200%2065%2058%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EQuotation%3C%2Ftitle%3E%3Cpath%20d%3D%22M47.326%2029.435c0%202.108%201.244%203.227%203.73%203.36l3.93.196c2.617.133%204.94%201.384%206.97%203.755%202.03%202.37%203.044%205.07%203.044%208.1%200%203.687-1.31%206.782-3.927%209.284-2.62%202.502-5.892%203.753-9.82%203.753-4.58%200-8.345-1.81-11.29-5.433-2.946-3.622-4.42-8.264-4.42-13.927%200-10.536%204.125-21.336%2012.372-32.4C50.927%202.042%2053.545%200%2055.77%200c2.488%200%203.732%201.317%203.732%203.95%200%201.055-.72%202.503-2.16%204.347-3.535%204.478-6.48%209.812-8.837%2016.002-.786%202.106-1.18%203.818-1.18%205.135zm-35.74%200c0%202.108%201.244%203.227%203.73%203.36l3.93.196c2.748.133%205.137%201.384%207.166%203.755%202.03%202.37%203.044%205.07%203.044%208.1%200%203.687-1.31%206.782-3.927%209.284-2.62%202.502-5.893%203.753-9.82%203.753-4.582%200-8.346-1.81-11.292-5.433C1.473%2048.828%200%2044.186%200%2038.523c0-10.536%204.124-21.336%2012.372-32.4C15.382%202.042%2018.002%200%2020.227%200c2.487%200%203.73%201.317%203.73%203.95%200%201.055-.72%202.503-2.16%204.347-2.618%203.293-4.974%207.112-7.07%2011.458-2.094%204.346-3.14%207.573-3.14%209.68z%22%20fill%3D%22%23FDEEBD%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E');\n}\n\n@media only screen and (max-width: 679px){\n  .Feature-container{\n    padding: 0 15px;\n  }\n  .Content-title{\n    margin-bottom: 25px;\n  }\n  .Content-title h5{\n    margin-top: calc(.75 * 1rem);\n    color: #FFBF00;\n    font-weight: normal;\n  }\n  .Content-title p{\n    margin-top: 5px;\n    font-size: 20px;\n    color: #5B6675;\n    font-weight: 400;\n  }\n  .Content-summary{\n    font-size: calc(.8 * 1.414 * 1rem);\n    line-height: calc(1.15 * 1.5 * 1rem);\n    font-weight: 300;\n  }\n  .Link:after{\n    right: 0px;\n  }\n}\n\n@media only screen and (min-width: 680px){\n  .Feature-container{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n  }\n  .Image-section{\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 1/2 - (30px - 30px * 1/2));\n  }\n  .Image-section:nth-child(n){\n    margin-right: 30px;\n  }\n  .Image-section:last-child{\n    margin-right: 0;\n  }\n  .Image-section:nth-child(2n){\n    margin-right: 0;\n  }\n  .Image-container{\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 9/10 - (30px - 30px * 9/10));\n  }\n  .Image-container:nth-child(n){\n    margin-right: 30px;\n  }\n  .Image-container:last-child{\n    margin-right: 0;\n  }\n  .Image-container:nth-child(10n){\n    margin-right: 0;\n  }\n  .Content-section{\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 1/2 - (30px - 30px * 1/2));\n  }\n  .Content-section:nth-child(n){\n    margin-right: 30px;\n  }\n  .Content-section:last-child{\n    margin-right: 0;\n  }\n  .Content-section:nth-child(2n){\n    margin-right: 0;\n  }\n  .Content-title{\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n    margin-bottom: 30px;\n  }\n  .Content-title:nth-child(n){\n    margin-right: 30px;\n  }\n  .Content-title:last-child{\n    margin-right: 0;\n  }\n  .Content-title:nth-child(1n){\n    margin-right: 0;\n  }\n  .Content-title h5, .Content-title .title-platform{\n    font-size: calc(1.25 * 1.414 * 1rem);\n    margin-top: 20px;\n  }\n  .Content-title p{\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 9/10 - (30px - 30px * 9/10));\n    font-size: 18px;\n    color: #7F90A6;\n    line-height: calc(1.25 * 1.5 * 1rem);\n    margin-top: 0;\n  }\n  .Content-title p:nth-child(n){\n    margin-right: 30px;\n  }\n  .Content-title p:last-child{\n    margin-right: 0;\n  }\n  .Content-title p:nth-child(10n){\n    margin-right: 0;\n  }\n  .Content-summary{\n    font-weight: 300;\n    font-family: 'ProximaNova-Light','Open Sans','Helvetica','sans-serif';\n    font-size: calc(.9 * 1.414 * 1rem);\n    line-height: calc(1.2 * 1.5 * 1rem);\n  }\n  .Content-section-inner{\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 4/5 - (30px - 30px * 4/5));\n  }\n  .Content-section-inner:nth-child(n){\n    margin-right: 30px;\n  }\n  .Content-section-inner:last-child{\n    margin-right: 0;\n  }\n  .Content-section-inner:nth-child(5n){\n    margin-right: 0;\n  }\n  .Link{\n    display: inline-block;\n    margin-top: 30px;\n  }\n  .Link:after{\n    right: -60px;\n  }\n}\n\n\n\n", ""]);

  // exports


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/* Colors */\n\n/* Uses */\n\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n/* Old Media Queries\n$iphone5-screen: 320px;\n$iphone6-screen: 375px;\n$tiny-screen: 500px;\n$extra-small-screen: 600px;\n$small-screen: 768px;\n$small-medium: 940px;\n$medium-screen: 1280px;\n$large-screen: 1440px;\n$x-large-screen: 1600px;\n*/\n\n/* React-starter-kit\n$screen-sm-min: 768px;\n$screen-md-min: 992px;\n$screen-lg-min: 1200px;\n*/\n\n/* Supported Size Ranges: */\n/* handhelds, except-handhelds */\n/* small-screens, except-small-screens, to-small-screens, above-small-screens */\n/* medium-screens, except-medium-screens, above-medium-screens */\n/* large-screens, except-large-screens */\n/* Use: */\n/* @include media(handhelds, large-screens) */\n/* @include media(above-small-screens) {\n     max-width: 960px\n   }\n*/\n/* Typesetting variables. Edit these! */ /* in pixels. This would result in 22px on desktop */ /* how large the line height is as a multiple of font size */ /* ADJUST THE FIRST IF YOU CHANGE $baselineHeight\n\n/* Rate of growth for headings */\n/* I actually like this to be slightly smaller then the leading. Makes for tight headings. */\n\n/* Setup */\nhtml {\n  /* Change default typefaces here */\n  font-family: 'ProximaNova-Regular', 'Open Sans', 'Helvetica', 'sans-serif';\n  font-size: calc(22 / 16 * 100%);\n  font-weight: normal;\n  font-style: normal;\n  color: #394453;\n\n  /* Make everything look a little nicer in webkit */\n  -webkit-font-smoothing: antialiased;\n}\n  /* -webkit-text-size-adjust: auto\n  // -moz-text-size-adjust: auto\n  // -ms-text-size-adjust: auto\n  // -o-text-size-adjust: auto\n  // text-size-adjust: auto */\n\n/* Copy & Lists */\np {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n}\nul, ol {\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\nul li, ol li {\n  line-height: calc(1.5 * 1rem);\n}\nul ul, ul ol, ol ul, ol ol {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nblockquote {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\n/* Headings */\nh1, h2, h3, h4, h5, h6 {\n  /* Change heading typefaces here */\n  font-family: 'Bariol', 'Archivo Narrow', 'Source Sans Pro', 'Alegreya', 'Playfair Display', 'Fira Sans', 'Vollkorn', 'ProximaNova-Semibold', 'Helvetica', 'sans-serif';\n  font-weight: bold;\n  font-style: normal;\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n  line-height: calc(1.5 * 1rem);\n}\nh1 {\n  font-size: calc(2.20 * 1.414 * 1rem);\n  font-weight: 700;\n  line-height: calc(2.35 * 1.5 * 1rem);\n  margin-top: calc(0.15 * 1.5 * 1rem);\n}\n\n@media only screen and (min-width: 680px){\n  h1{\n    font-size: calc(3 * 1.414 * 1rem);\n    line-height: calc(3 * 1.5 * 1rem);\n    //margin-top: calc(2 * calc(1.5 * 1rem));\n  }\n}\n\n\nh2 {\n  font-size: calc(2 * 1.414 * 1rem);\n  line-height: calc(2 * 1.5 * 1rem);\n  margin-top: calc(2 * 1.5 * 1rem);\n}\n\nh3 {\n  font-size: calc(1 * 1.414 * 1rem);\n}\nh4 {\n  font-size: calc(1.414 / 2 * 1rem);\n}\nh5 {\n  font-size: calc(1.414 / 3 * 1rem);\n}\nh6 {\n  font-size: calc(1.414 / 4 * 1rem);\n}\n\n/* Tables */\ntable {\n  margin-top: calc(1.5 * 1rem);\n  border-spacing: 0px;\n  border-collapse: collapse;\n}\ntable td, table th {\n  padding: 0;\n  line-height: calc(1.5 * 22 - 0px);\n}\n/* Code blocks */\ncode {\n  /* Forces text to constrain to the line-height. Not ideal, but works. */\n  vertical-align: bottom;\n}\n/* Leading paragraph text */\n.lead {\n  font-size: calc(1.414 * 1rem);\n}\n\n/* Hug a the block above you */\n.hug {\n  margin-top: 0;\n}\n\n.Hero {\n  position: relative;\n  overflow: visible;\n}\n\n@media only screen and (max-width: 679px){\n  .Hero{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0 15px;\n    //margin: 0 15px;\n  }\n}\n\n@media only screen and (min-width: 680px) and (max-width: 999px){\n  .Hero{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    margin: 0 30px;\n  }\n}\n\n@media only screen and (min-width: 1000px) and (max-width: 1259px){\n  .Hero{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 1000px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n@media only screen and (min-width: 1260px){\n  .Hero{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 1260px;\n    margin-left: auto;\n    margin-right: auto;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-top: 0;\n  }\n}\n\n.Hero-title {\n  margin-top: 40px;\n}\n\n.Hero-title span {\n  font-weight: 300;\n  font-family: 'ProximaNova-Light', 'Open Sans', 'Helvetica', 'sans-serif';\n  font-size: calc(.8 * 1.414 * 1rem);\n  color: #5B6675;\n}\n\n.Hero-title h1 {\n  color: #FFBF00;\n}\n\n@media only screen and (max-width: 679px){\n  .Hero-title{\n    margin-bottom: 10px;\n  }\n}\n\n@media only screen and (max-width: 679px){\n  .myImg{\n    display: none;\n    width: 192px;\n    height: 189px;\n    position: absolute;\n    top: 50px;\n    right: -45px;\n    z-index: -1;\n    opacity: .7;\n    -webkit-transition: 'opacity 300ms ease-in';\n         -o-transition: 'opacity 300ms ease-in';\n            transition: 'opacity 300ms ease-in';\n    border-top-left-radius: 25px;\n    border-bottom-left-radius: 7px;\n  }\n}\n\n@media only screen and (min-width: 680px){\n  .myImg{\n    width: 600px;\n    height: 427px;\n    position: absolute;\n    top: 75px;\n    right: 0;\n    z-index: -1;\n  }\n}\n\n@media only screen and (min-width: 680px){\n  .myImg{\n    //opacity: .6;\n    top: 200px;\n    right: -250px;\n    border-top-left-radius: 25px;\n    border-bottom-left-radius: 125px;\n  }\n}\n\n@media only screen and (min-width: 1000px){\n  .myImg{\n    top: 225px;\n    right: -185px;\n  }\n}\n\n@media only screen and (min-width: 1260px){\n  .myImg{\n    top: 125px;\n    width: 675px;\n    height: 479px;\n    right: -105px;\n    //border-bottom-right-radius: 75px;\n    //border-top-left-radius: 125px;\n  }\n}\n\n@media only screen and (max-width: 679px){\n  .Hero-phrase p{\n    font-weight: 300;\n  }\n}\n\n.Hero-phrase {\n  position: relative;\n  padding-top: 20px;\n}\n\n.Hero-phrase p {\n  font-family: 'ProximaNova-Light', 'Open Sans', 'Helvetica', 'sans-serif';\n  font-size: calc(1.1 * 1.414 * 1rem);\n  line-height: calc(1.3 * 1.5 * 1rem);\n  margin-top: calc(0 * 1.5 * .5rem);\n  margin-left: 20px;\n}\n\n.Hero-phrase span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  display: block;\n  width: 103px;\n  height: 111px;\n  //background-color: #ffe58d;\n  background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22103%22%20height%3D%22111%22%20viewBox%3D%220%200%20103%20111%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Eampersand%3C%2Ftitle%3E%3Cpath%20d%3D%22M59.944%2037.443c-8.22%200-8.8%205.117-.728%205.117%204.02%200%207.67-2.363%208.367-2.363.44%200%20.886-.01%201.332-.023%204.084%201.464%206.747%205.223%206.747%2010.604%200%208.196-8.445%2013.827-18.875%2013.827-5.97%200-17.346-3.386-17.346-14.538%200-12.217%2014.813-21.1%2026.154-21.1%207.114%200%2013.58%202.005%2018.636%205.796-5.463%202.075-11.186%203.197-17.932%203.197-1.383%200-3.885-.517-6.354-.517zm29.764-2.72C97.415%2030.538%20103%2024.08%20103%2015.78%20103%205.565%2095.135%200%2085.908%200c-6.028%200-11.24%202.386-11.24%206.81%200%203.6%203.52%205.82%208.578%205.82%208.074%200%2017.22-8.006%2017.22%203.148%200%207.576-5%2013.568-12.63%2017.405-5.646-4.29-12.777-6.787-21.088-6.787-15.876%200-31.413%2010.89-31.413%2025.09%200%2013.452%2011.707%2020.31%2021.562%2020.31%2016.542%200%2023.624-12.058%2023.624-19.904%200-5.114-1.955-9.956-7.804-11.988%204.616-.512%209.268-1.695%2013.495-3.493%205.506%205.052%208.898%2012.555%208.898%2022.176%200%2017.59-19.948%2036.927-44.642%2036.927C25.7%2095.513%207.79%2080.763%207.79%2063.05c0-6.29%201.318-14.096%209.748-20.65%203.506.726%207.9.76%2010.695-.39%202.103-.864%202.147-2.422%200-3.03-3.527-.994-7.387-.264-10.07.866l.077-.048c-.032.016-.06.034-.09.052-6.194-2.702-9.012-8.537-9.012-13.707%200-7.835%206.557-13.267%2014.01-13.267%206.81%200%2011.846%204.092%2011.846%208.975%200%207.835-8.918%201.374-13.177%201.374-2.66%200-5.34%201.238-5.34%203.928%200%203.782%203.926%206.058%208.385%206.058%208.277%200%2013.06-5.123%2013.06-10.398%200-7.813-7.986-12.59-16.637-12.59-10.37%200-19.317%205.912-19.317%2016.107%200%206.615%205.46%2012.898%2013.09%2015.403C3.81%2049.26%200%2060.657%200%2069.56%200%2094.058%2021.856%20111%2049.718%20111c27.863%200%2052.515-21.22%2052.515-45.718%200-12.522-4.537-23.49-12.525-30.558z%22%20fill%3D%22%23FFD968%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E');\n  //-webkit-mask-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22103%22%20height%3D%22111%22%20viewBox%3D%220%200%20103%20111%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Eampersand%3C%2Ftitle%3E%3Cpath%20d%3D%22M59.944%2037.443c-8.22%200-8.8%205.117-.728%205.117%204.02%200%207.67-2.363%208.367-2.363.44%200%20.886-.01%201.332-.023%204.084%201.464%206.747%205.223%206.747%2010.604%200%208.196-8.445%2013.827-18.875%2013.827-5.97%200-17.346-3.386-17.346-14.538%200-12.217%2014.813-21.1%2026.154-21.1%207.114%200%2013.58%202.005%2018.636%205.796-5.463%202.075-11.186%203.197-17.932%203.197-1.383%200-3.885-.517-6.354-.517zm29.764-2.72C97.415%2030.538%20103%2024.08%20103%2015.78%20103%205.565%2095.135%200%2085.908%200c-6.028%200-11.24%202.386-11.24%206.81%200%203.6%203.52%205.82%208.578%205.82%208.074%200%2017.22-8.006%2017.22%203.148%200%207.576-5%2013.568-12.63%2017.405-5.646-4.29-12.777-6.787-21.088-6.787-15.876%200-31.413%2010.89-31.413%2025.09%200%2013.452%2011.707%2020.31%2021.562%2020.31%2016.542%200%2023.624-12.058%2023.624-19.904%200-5.114-1.955-9.956-7.804-11.988%204.616-.512%209.268-1.695%2013.495-3.493%205.506%205.052%208.898%2012.555%208.898%2022.176%200%2017.59-19.948%2036.927-44.642%2036.927C25.7%2095.513%207.79%2080.763%207.79%2063.05c0-6.29%201.318-14.096%209.748-20.65%203.506.726%207.9.76%2010.695-.39%202.103-.864%202.147-2.422%200-3.03-3.527-.994-7.387-.264-10.07.866l.077-.048c-.032.016-.06.034-.09.052-6.194-2.702-9.012-8.537-9.012-13.707%200-7.835%206.557-13.267%2014.01-13.267%206.81%200%2011.846%204.092%2011.846%208.975%200%207.835-8.918%201.374-13.177%201.374-2.66%200-5.34%201.238-5.34%203.928%200%203.782%203.926%206.058%208.385%206.058%208.277%200%2013.06-5.123%2013.06-10.398%200-7.813-7.986-12.59-16.637-12.59-10.37%200-19.317%205.912-19.317%2016.107%200%206.615%205.46%2012.898%2013.09%2015.403C3.81%2049.26%200%2060.657%200%2069.56%200%2094.058%2021.856%20111%2049.718%20111c27.863%200%2052.515-21.22%2052.515-45.718%200-12.522-4.537-23.49-12.525-30.558z%22%20fill%3D%22%23FFD968%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E');\n  //mask-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22103%22%20height%3D%22111%22%20viewBox%3D%220%200%20103%20111%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Eampersand%3C%2Ftitle%3E%3Cpath%20d%3D%22M59.944%2037.443c-8.22%200-8.8%205.117-.728%205.117%204.02%200%207.67-2.363%208.367-2.363.44%200%20.886-.01%201.332-.023%204.084%201.464%206.747%205.223%206.747%2010.604%200%208.196-8.445%2013.827-18.875%2013.827-5.97%200-17.346-3.386-17.346-14.538%200-12.217%2014.813-21.1%2026.154-21.1%207.114%200%2013.58%202.005%2018.636%205.796-5.463%202.075-11.186%203.197-17.932%203.197-1.383%200-3.885-.517-6.354-.517zm29.764-2.72C97.415%2030.538%20103%2024.08%20103%2015.78%20103%205.565%2095.135%200%2085.908%200c-6.028%200-11.24%202.386-11.24%206.81%200%203.6%203.52%205.82%208.578%205.82%208.074%200%2017.22-8.006%2017.22%203.148%200%207.576-5%2013.568-12.63%2017.405-5.646-4.29-12.777-6.787-21.088-6.787-15.876%200-31.413%2010.89-31.413%2025.09%200%2013.452%2011.707%2020.31%2021.562%2020.31%2016.542%200%2023.624-12.058%2023.624-19.904%200-5.114-1.955-9.956-7.804-11.988%204.616-.512%209.268-1.695%2013.495-3.493%205.506%205.052%208.898%2012.555%208.898%2022.176%200%2017.59-19.948%2036.927-44.642%2036.927C25.7%2095.513%207.79%2080.763%207.79%2063.05c0-6.29%201.318-14.096%209.748-20.65%203.506.726%207.9.76%2010.695-.39%202.103-.864%202.147-2.422%200-3.03-3.527-.994-7.387-.264-10.07.866l.077-.048c-.032.016-.06.034-.09.052-6.194-2.702-9.012-8.537-9.012-13.707%200-7.835%206.557-13.267%2014.01-13.267%206.81%200%2011.846%204.092%2011.846%208.975%200%207.835-8.918%201.374-13.177%201.374-2.66%200-5.34%201.238-5.34%203.928%200%203.782%203.926%206.058%208.385%206.058%208.277%200%2013.06-5.123%2013.06-10.398%200-7.813-7.986-12.59-16.637-12.59-10.37%200-19.317%205.912-19.317%2016.107%200%206.615%205.46%2012.898%2013.09%2015.403C3.81%2049.26%200%2060.657%200%2069.56%200%2094.058%2021.856%20111%2049.718%20111c27.863%200%2052.515-21.22%2052.515-45.718%200-12.522-4.537-23.49-12.525-30.558z%22%20fill%3D%22%23FFD968%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E');\n}\n\n@media only screen and (min-width: 680px){\n  .Hero-phrase{\n    padding-top: 15px;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 3/5 - (30px - 30px * 3/5));\n  }\n  .Hero-phrase:nth-child(n){\n    margin-right: 30px;\n  }\n  .Hero-phrase:last-child{\n    margin-right: 0;\n  }\n  .Hero-phrase:nth-child(5n){\n    margin-right: 0;\n  }\n  .Hero-phrase p{\n    color: #5B6675;\n    margin-left: 50px;\n    font-size: calc(1.25 * 1.414 * 1rem);\n    line-height: calc(1.5 * 1.5 * 1rem);\n    font-weight: 300;\n  }\n}\n\n", ""]);

  // exports


/***/ },
/* 10 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _HeroHero = __webpack_require__(12);

  var _HeroHero2 = _interopRequireDefault(_HeroHero);

  __webpack_require__(45);

  __webpack_require__(6);

  var _reactPicture = __webpack_require__(4);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        var accountSettings = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/accountSettings/accountSettings320.png 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/accountSettings/accountSettings750.png 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/accountSettings/accountSettings1334.png 1334w';
        var activity = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/activity/activity320.png 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/activity/activity750.png 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/activity/activity1334.png 1334w';
        var cancel = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/cancel/cancel320.png 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/cancel/cancel750.png 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/cancel/cancel1334.png 1334w';
        var details = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/details/details320.png 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/details/details750.png 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/details/details1334.png 1334w';
        var issue = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/issue/issue320.png 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/issue/issue750.png 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/issue/issue1334.png 1334w';
        var perks = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/perks/perks320.png 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/perks/perks750.png 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/perks/perks1334.png 1334w';
        var perksDetail = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/perksDetail/perksDetail320.png 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/perksDetail/perksDetail750.png 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/perksDetail/perksDetail1334.png 1334w';
        var plans = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/plans/plans320.png 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/plans/plans750.png 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/plans/plans1334.png 1334w';
        var support = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/support/support320.png 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/support/support750.png 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/support/support1334.png 1334w';
        var whiteboarding = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/whiteboard/whiteboard320.jpg 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/whiteboard/whiteboard620.jpg 640w';
        var select = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/select/select320.png 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/select/select750.png 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/select/select1340.png 1340w';
        var macro = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/macro/macro320.png 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/macro/macro750.png 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/macro/macro1334.png 1334w';
        return _react2['default'].createElement(
          'div',
          { className: 'Work-container' },
          _react2['default'].createElement(_HeroHero2['default'], null),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              'So what is this dashboard?'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'The iCracked Customer Dashboard is an all-in-one solution for you to keep track of your repair & trade-in requests. It also keeps you up to date on the devices you own, the Advantage memberships you have, as well as any past requests and general account information.'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'It makes requesting service a one-click process, allows you to receive notifications from your concierge team on updates with your devices or accounts, and helps enterprise systems keep track of their devices.'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              'How did this come to be, and why?'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'This dashboard had been in the plans at iCracked for over a year, though it was continually pushed back. It wasn’t until we moved forward with our Advantage Membership program, which would require a similar system, that we were able to build this.'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'I’ll provide the most important reasons below, though there are many more when you take into account the multiple product lines this needed to cater to.'
            ),
            _react2['default'].createElement(
              'ol',
              null,
              _react2['default'].createElement(
                'li',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  'Transparency'
                ),
                ' When requesting service from iCracked, you would receive a message and an email letting you know what is going to happen. If you accept the quote offered by an iTech and a repair is scheduled, many more communications like this would proceed. ',
                _react2['default'].createElement('br', null),
                ' This works alright, but there are multiple pain points. If the customer’s phone is completely broken, if the email goes into the junk folder, if someone denies our ability to send them a message; these can all make the smooth process we had tried to set up, fall apart.'
              ),
              _react2['default'].createElement(
                'li',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  'Repeat Customers'
                ),
                ' Early on, the majority of the client base was one-time service. However, as the years went by we noticed more and more two, three, four time repairs happening. The only way for us to know we had a repeat customer, and the only way for them to get their history, was for our customer support team to do in depth searches in the database to pull the information.'
              ),
              _react2['default'].createElement(
                'li',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  'Advantage'
                ),
                ' To be an insurance provider, you need to allow customers to view their information and request help.'
              ),
              _react2['default'].createElement(
                'li',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  'Referral System'
                ),
                ' We had over a 98% satisfaction rating after a repair was completed. We’d often hear our customers tell their local iTechs that they would spread the word. Unfortunately, we hadn’t built a system to spread the news any other way than just word of mouth.'
              ),
              _react2['default'].createElement(
                'li',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  'Mail-In Repairs and Trade-Ins'
                ),
                ' Unlike our on-demand service,  mail-in can take anywhere from a few days to a couple of weeks depending on what needs to be done. The only way for a customer to find out the current status of their device was to call into our repair hotline, which would not only be a pain for them but it halted our repair team from staying focused.'
              ),
              _react2['default'].createElement(
                'li',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  'Lifetime warranty'
                ),
                ' iCracked offers a lifetime warranty on the parts used for the repairs the iTechs perform. Upon completion of the repair, it is sent via email to the customer. More often than not, when a problem would occur, the customer was unable to find said email, which resulted in their frustration and our support team scrambling around trying to keep our relationship with them alive.'
              ),
              _react2['default'].createElement(
                'li',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  'Enterprise'
                ),
                ' There wasn’t an interface for enterprise accounts to log the devices they had under an iCracked plan, nor a way to see which devices were being repaired or had been repaired.'
              )
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              'What was the plan'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'The iCracked dashboard was a complex product that needed to be robust, yet simple for customers to navigate. Taking the previous pain points into consideration, we wanted to provide a dashboard with the following capabilities:'
            ),
            _react2['default'].createElement(
              'ol',
              null,
              _react2['default'].createElement(
                'li',
                null,
                'Be able to view your Advantage plans, perks, history, and account information'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'View existing or past repair or trade-in requests – see all relevant data'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Update Billing and account information'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Request new service quickly'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Accessible support system (concierge) if one needs help'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Enroll or cancel devices in Advantage program'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Add or remove devices (non-member) from your account'
              )
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'div',
              { className: 'Blog-image-small-container' },
              _react2['default'].createElement(_reactPicture.Image, { alt: 'early whiteboarding session', srcSet: whiteboarding, extra: {
                  className: 'Blog-image-small',
                  sizes: '(min-width: 640px) 640px, 100vw'
                } })
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              'How was this achieved?'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'Since the product was starting from scratch, there was little data we could pull together to bring in user input or research. The project would have to be released early, tested, and continuous modified.'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'The team consisted of two Product Designers and one Full-Stack Developer. Working with the team, we used post-it notes to map out how we thought the different views and flows should be linked together. Quick whiteboard sessions and online discovery occurred to get ideas flowing. We also took an in-depth look at existing setups from both the competitors and outside of the industry.'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'Mockups and prototyping was done on whiteboard, Sketch, and Invision. Once we felt comfortable with the direction we were heading, we began implementing the dashboard using Angular on the front-end.'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              'Phase 1'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'The first sprint would focus on the Advantage membership we were already building. Once this was completed, we would then begin implementation of non-membership features as well as catering to the Enterprise accounts.'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'Below are some of the screens involved in the completed dashboard of phase 1. It is live, however you’d need an Advantage account to access this portion of iCracked.'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Advantage Plans'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'It made sense to highlight the plans a member has as the main view of the dashboard, since phase 1 was geared for Advantage. Plans are broken into single, 5-pack, and 10-pack. We broken up each plan and then added \'add device\' buttons underneath any that still had spots remaining to add devices.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'mmmystery map', srcSet: plans, extra: {
                className: 'Blog-image-medium',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Plan Details'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'If you click on a plan, you\'ll be taken to the detail page. Here you can view all of the necessary account information, make edits, and see the current devices under the plan.'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'A member could have two black iPhone 5 devices, so we included a \'nickname\' for a member to specify for each device. That way they can easily distinguish when requesting service.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'mmmystery map', srcSet: details, extra: {
                className: 'Blog-image-medium',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Activity'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'Transparency was one of the biggest goals for this dashboard. Allowing a customer to view their open requests as well as their history (and details of that transaction) helps push us in the right direction.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'mmmystery map', srcSet: activity, extra: {
                className: 'Blog-image-medium',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Account Settings'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'While we allow anyone to cancel their membership freely, each plan is still under a 2-year contract. The account views allow someone to update their billing information (plans are monthly or yearly) as well as see previous bills. You can also update your personal information and password.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'mmmystery map', srcSet: accountSettings, extra: {
                className: 'Blog-image-medium',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Support'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'To make sure a member receives all the help they need, we offer many different ways to get into contact with the team, which can be easily viewed here.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'mmmystery map', srcSet: support, extra: {
                className: 'Blog-image-medium',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Perks'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'The Advantage membership offers benefits outside of protection. One of these is perks, a wide array of discounts a member can use whenever they\'d like. This view showcases all of those.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'mmmystery map', srcSet: perks, extra: {
                className: 'Blog-image-medium',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Perks Details'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'If a perk catches your eye, by clicking on it you\'re taken to this view, which provides more information as well as a way to use it.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'mmmystery map', srcSet: perksDetail, extra: {
                className: 'Blog-image-medium',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Cancelling Advantage'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'To allow for easy cancellation of an Advantage membership, this view was added. Additional context was included so that iCracked may glean the reasons why someone is cancelling to improve the service for the rest of the members.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'mmmystery map', srcSet: cancel, extra: {
                className: 'Blog-image-medium',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Requesting Service'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'With an account, requesting service is simple. All of the devices within your account will be shown, and all you must do is select the one you need help with.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'mmmystery map', srcSet: select, extra: {
                className: 'Blog-image-medium',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Requesting Service'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'The only step that\'s needed in requesting service, is to select the issue with the device. Easy as pie!'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'mmmystery map', srcSet: issue, extra: {
                className: 'Blog-image-medium',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Dashboard Layout'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'Below is an image showing the various screens for phase 1 of the dashboard.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'mmmystery map', srcSet: macro, extra: {
                className: 'Blog-image-medium',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              'Next steps?'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'Now that Advantage members are provided with all they need, attention turns to the non-membership accounts as well as Enterprise systems. Since enterprise systems fall under Advantage as well, with a few modifications that aspect will be ready to go.'
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(5);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'section',
          { className: 'Blog-hero' },
          _react2['default'].createElement(
            'span',
            { className: 'Blog-hero-platform' },
            'Web Application'
          ),
          _react2['default'].createElement(
            'h1',
            { className: 'Blog-hero-title' },
            'iCracked Dashboards'
          ),
          _react2['default'].createElement(
            'p',
            { className: 'Blog-hero-phrase' },
            'A project to create more transparency between a customer and the services being performed by iCracked'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(46);

  __webpack_require__(5);

  __webpack_require__(6);

  var _reactPicture = __webpack_require__(4);

  var _Link = __webpack_require__(3);

  var _Link2 = _interopRequireDefault(_Link);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        var darwinImage = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/AWD/Darwin/darwinInspiration320.png 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/AWD/Darwin/darwinInspiration700.png 700w';
        var darwinPencil = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/AWD/Darwin/darwinPencil320.jpg 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/AWD/Darwin/darwinPencil750.jpg 750w';
        var darwinInk = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/AWD/Darwin/darwinInk320.png 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/AWD/Darwin/darwinInk700.png 700w';
        var darwinColor = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/AWD/Darwin/darwin320.png 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/AWD/Darwin/darwin700.png 700w';

        var butterflyImage = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/AWD/Butterfly/butterflyInspiration320.jpg 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/AWD/Butterfly/butterflyInspiration700.jpg 700w';
        var butterflyInk = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/AWD/Butterfly/butterflyInk320.png 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/AWD/Butterfly/butterflyInk750.png 750w';
        var butterflyColor = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/AWD/Butterfly/butterfly320.png 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/AWD/Butterfly/butterfly750.png 750w';
        return _react2['default'].createElement(
          'div',
          { className: 'Work-container' },
          _react2['default'].createElement(
            'section',
            { className: 'Blog-hero' },
            _react2['default'].createElement(
              'span',
              { className: 'Blog-hero-platform' },
              'Graphic Design / Illustration'
            ),
            _react2['default'].createElement(
              'h1',
              { className: 'Blog-hero-title' },
              'AWD Posters'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-hero-phrase' },
              'Posters highlighting the meaning behind Adaptive Web Design'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              'Summary'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'Aaron Gustafson was releasing his book \'Adaptive Web Design\' and held a contest for people to portray what \'adaptive\' really meant. Wanting to work on my illustration skills I decided to create two posters.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              '#1 — The Finches'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'The first poster revolved around the Galapagos Islands and Charles Darwin. I couldn\'t think of a better example of adaptation. In all, there are about 15 different species of finch spread throughout the islands. Varying in size, color, beak size & strength.'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'div',
              { className: 'Blog-image-small-container' },
              _react2['default'].createElement(_reactPicture.Image, { alt: 'landing page', srcSet: darwinImage, extra: {
                  className: 'Blog-image-small',
                  sizes: '(min-width: 700px) 700px, 100vw'
                } })
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              'The Layout'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'I wanted to fit as many of the finches within the poster as I could, yet still have them be distinguishable. The final size would be 18 inches by 24 inches. As you can see below, after doing some rough sketches I was confident I could fit 13 within my design.'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'div',
              { className: 'Blog-image-small-container' },
              _react2['default'].createElement(_reactPicture.Image, { alt: 'landing page', srcSet: darwinPencil, extra: {
                  className: 'Blog-image-small',
                  sizes: '(min-width: 700px) 700px, 100vw'
                } })
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              'Sketch and Ink'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'I decided that I would draw out the birds and the background, and then bring that into photoshop, where I would touch up the ink lines and the overall coloring of the poster. You cannot see in the image below, but I first created the design all in pencil. Once confident, I then grabbed a new piece of paper and used ink to creat the foundation.'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'div',
              { className: 'Blog-image-small-container' },
              _react2['default'].createElement(_reactPicture.Image, { alt: 'landing page', srcSet: darwinInk, extra: {
                  className: 'Blog-image-small',
                  sizes: '(min-width: 700px) 700px, 100vw'
                } })
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              'Coloring and Touch-ups'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'I then scanned in the inked version. After removing any minor smudges and stray lines, I removed any of the drawing but the darkest of ink. Then, using multiple layers behind that, I colored and textured the poster. The end result can be seen below.'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'div',
              { className: 'Blog-image-small-container' },
              _react2['default'].createElement(_reactPicture.Image, { alt: 'landing page', srcSet: darwinColor, extra: {
                  className: 'Blog-image-small',
                  sizes: '(min-width: 700px) 700px, 100vw'
                } })
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'div',
              { className: 'Video-section' },
              _react2['default'].createElement(
                'h4',
                null,
                'The Layers'
              ),
              _react2['default'].createElement(
                'p',
                { className: 'Blog-section-first-p' },
                'Check out the video to see the different layers used to color the poster.'
              )
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'div',
              { className: 'Blog-image-small-container' },
              _react2['default'].createElement(
                'video',
                { style: { height: '600px', marginTop: '25px' }, src: 'https://s3-us-west-1.amazonaws.com/phil-portfolio-images/AWD/Darwin/darwin-video.mov', controls: true },
                'Your browser does not support the ',
                _react2['default'].createElement(
                  'code',
                  null,
                  'video'
                ),
                ' element.'
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              '#2 — Butterflies'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'Sticking with the natural theme of adaptation, I wanted to highlight the diversity of butterflies. In terms of survival, butterflies are marvels of adaptation. They\'ve been around for at least 56 million years! Rough estimates put butterfly species at around 18,500. Obviously I wouldn\'t be able to fit them all on this poster, but I could show a great variety.'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'div',
              { className: 'Blog-image-small-container' },
              _react2['default'].createElement(_reactPicture.Image, { alt: 'landing page', srcSet: butterflyImage, extra: {
                  className: 'Blog-image-small',
                  sizes: '(min-width: 700px) 700px, 100vw'
                } })
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              'Sketch and Ink'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'After trying a few layouts through quick sketching, I wanted to have an overlapping effect. I still recall my younger years when I\'d run through a nearby prairie and hundreds of butterflies to magically come out of the smallest areas and just overwhelm your vision.'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'div',
              { className: 'Blog-image-small-container' },
              _react2['default'].createElement(_reactPicture.Image, { alt: 'landing page', srcSet: butterflyInk, extra: {
                  className: 'Blog-image-small',
                  sizes: '(min-width: 700px) 700px, 100vw'
                } })
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              'Coloring and Touch-ups'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'Once I scanned the inked version into photoshop, I was able to make use of the wide variety of colors from the butterflies I had chosen to create a rainbow like feeling throughout the poster.'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'div',
              { className: 'Blog-image-small-container' },
              _react2['default'].createElement(_reactPicture.Image, { alt: 'landing page', srcSet: butterflyColor, extra: {
                  className: 'Blog-image-small',
                  sizes: '(min-width: 700px) 700px, 100vw'
                } })
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(47);

  __webpack_require__(5);

  __webpack_require__(6);

  var _reactPicture = __webpack_require__(4);

  var _Link = __webpack_require__(3);

  var _Link2 = _interopRequireDefault(_Link);

  /*

  <div className="Blog-section">
    <h4>What was the existing process?</h4>
    <p className="Blog-section-first-p">
      We mapped out the various routes a customer would go through when their device was damaged with the current providers. Here was the common:
    </p>
    <ol>
      <li>On a perfectly fine morning, a trip on the curb sends your device crashing to the cement.</li>
      <li>You pick up the phone, only to discover the screen is shattered.</li>
      <li>You're running late, and you never learned the process to file a claim, so, in your frustrated state, move on with the day.</li>
      <li>Hours later you head to the provider website and find a support number. You don't recall having an online account, nor do you recall being given a confirmation number when you purchased the plan. Well, here goes nothing, Beep, bop, boop, ring, ring...</li>
      <li>You wait.</li>
      <li>and wait...</li>
      <li>Finally, someone answers and after a quick back and forth of introduction, they ask for the code from the receipt you were been given at time of purchase. You don't recall it, so the support specialist has you read the number on the back of the device. It's too small so you have your son, Peter, read it aloud.</li>
      <li>They thank you and begin the look up process.</li>
      <li>and you wait...</li>
      <li>Luckily, the specialist has located your account.</li>
      <li>Before sending you an email with a packaging slip, you need to pay the deductible, which now seems way higher than anything you would have ever agreed to.</li>
      <li>Ca-ching. Now that it's paid for, you give the support specialist your email, however you don't have a printer. Oh well, you'll figure that out later. Progress!</li>
      <li>They tell you that it should take a few days to repair at a minimum. Once it's received, depending on the extent of the damage, it may take longer.</li>
      <li>You let them know it'll just be a screen repair. However, they say, until it's in the hands of a specialist it cannot be confirmed.</li>
      <li>You ask for a replacement and it seems their system is not working for that and you'll just need to wait. You're advised to back up your data, though how to do that is a mystery.</li>
      <li>Between working, picking up the kids from soccer, and handling dinner tonight, you must somehow packge your previously perfect, life saving device up and send it on it's way.</li>
      <li>And you must wait.</li>
      <li>and wait...</li>
    </ol>
  </div>

  */

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        var landingPage = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Advantage/landingPage/landing320.jpg 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Advantage/landingPage/landing700.jpg 750w';
        var signUpFirst = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Advantage/signUp/firstPage320.png 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Advantage/signUp/firstPage750.png 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Advantage/signUp/firstPage1100.png 1100w';
        var signUpInfo = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Advantage/signUp/initialInfo320.png 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Advantage/signUp/initialInfo750.png 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Advantage/signUp/initialInfo1340.png 1340w';
        var signUpPayment = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Advantage/signUp/payment320.png 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Advantage/signUp/payment750.png 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Advantage/signUp/payment1340.png 1340w';
        var signUpSuccess = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Advantage/signUp/success320.png 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Advantage/signUp/success750.png 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Advantage/signUp/success1340.png 1340w';
        var addDeviceMain = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Advantage/addDevice/main320.png 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Advantage/addDevice/main750.png 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Advantage/addDevice/main1340.png 1340w';
        var addDeviceCam = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Advantage/addDevice/webcam320.png 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Advantage/addDevice/webcam750.png 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Advantage/addDevice/webcam1340.png 1340w';
        var plans = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/plans/plans320.png 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/plans/plans750.png 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/plans/plans1334.png 1334w';
        var perks = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/perks/perks320.png 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/perks/perks750.png 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/perks/perks1334.png 1334w';
        var activity = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/activity/activity320.png 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/activity/activity750.png 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Account/activity/activity1334.png 1334w';

        return _react2['default'].createElement(
          'div',
          { className: 'Work-container' },
          _react2['default'].createElement(
            'section',
            { className: 'Blog-hero' },
            _react2['default'].createElement(
              'span',
              { className: 'Blog-hero-platform' },
              'Multi-platform project'
            ),
            _react2['default'].createElement(
              'h1',
              { className: 'Blog-hero-title' },
              'iCracked Advantage'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-hero-phrase' },
              'A membership that allows you to pay less and earn more, anytime and anywhere.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              'So, what is it really?'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'An insurance plan that caters to single device and family-style bundles. It uses iCracked\'s same on-demand service to make repairs quickly. Additionally, a member earns more when selling and has access to a wide variety of discounts on products and services. Advantage is paid monthly or yearly with a no-risk cancellation policy.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              'Why build it?'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'There were many reasons why building Advantage made sense. For one, the market did not have a provider offering the level of service and care we were going to offer. Another was that the insurance industry is massive, both in number of devices under protection and the amount of revenue being made from customers. For iCracked to continue it\'s growth, this was the logical next step.'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'Finally, an insurance program had been in the plans from the beginning of iCracked. Now that the team of iTechs covered the entire US, it was the right time to build.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              'Pain points of the current options?'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'One of the first steps taken with Advantage, was an in-depth look into current options for customers. From their sign up process, how they attracted customer, what there prices were and why, and how the service worked. We also took a look at customer\'s general attitude with insurance plans.'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'We then came up with a list of significant pain points:'
            ),
            _react2['default'].createElement(
              'ul',
              null,
              _react2['default'].createElement(
                'li',
                null,
                'Expensive for what they received'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'The repair and replacement times'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Cancellation policies'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Lack of extra incentives'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Services weren\'t local – felt very corporate'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'High deductibles'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Confusing and slow process when help was needed'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Poor customer support'
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              'So, iCracked\'s solution was...?'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'After providing the research to the team and stakeholders, we discussed what Advantage should comprise. Working with the team\'s domain experts in the insurance industry, the executive staff, and fellow designers and engineers we made a list of capabilities for the initial phase.'
            ),
            _react2['default'].createElement(
              'ul',
              null,
              _react2['default'].createElement(
                'li',
                null,
                'Same, great, on-demand repair service from local iTechs'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Advantage sign-ups both on-site with iTechs and online'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'No-risk cancellation policy'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Customer dashboard for requesting service, editing payment options, adding and removing devices, creating plans, etc.'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Multiple plan and payment options'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Personal support team for Advantage members'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Perks system offering discounts on external services'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Configuration to earn more when selling devices on active plans'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Lower overall cost and larger issue coverage than competitors'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Ability to cover new and old devices alike'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Online payment system'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Suite of emails for sign ups, billing, notifications, etc'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Free trial program'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Internal dashboard to accept devices submitted by members for their plans'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Replacement coverge for water damage'
              )
            ),
            _react2['default'].createElement(
              'p',
              null,
              'As for who Advantage was targeted for:'
            ),
            _react2['default'].createElement(
              'ul',
              null,
              _react2['default'].createElement(
                'li',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  'Audience'
                ),
                ' The initial phase was geared for individuals, families, and friends who wanted to purchase the bundle option. Once this was completed the project would work on capturing the Enterprise market with specific plans catered to them.'
              ),
              _react2['default'].createElement(
                'li',
                null,
                _react2['default'].createElement(
                  'strong',
                  null,
                  'Market Reach'
                ),
                ' California was our test market to begin. We would then move state to state until the US was covered.'
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              'How was this accomplished?'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'I\'m not going to hit on all of the financial and legal pieces of Advantage and it\'s making. Those were outside the scope of what our team worked on. Our team included two product designers, a product manager, a project manager, and three engineers. We would be working on both the iOS application and our web platform.'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'Right around this project, we implemented a scrum process. This project used a sequence of two week sprints and daily stand ups to make sure we progressed. While we already had repair experience, entering a new market always has surprises. While moving forward, we continuously adjusted project scope and duration to meet this. This also happened when the company was expanding globally. Resources were occasionally shared between the two projects. '
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              'Phase 1'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'Below you\'ll see various screens from the first phase of Advantage. These include the customer dashboard, the online and in-person sign up flows, the landing page, and the internal teams dashboard.'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Landing Page'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'There was a good chance this was the first time a customer would learn about the Advantage membership. The goals were to provide enough information about the service that they\'d be willing to look at the available plans on the following page.'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'After a few glances one could tell that iCracked was offering an insurance plan, so the focus was more on what it could do for you as a person more than what it could do for the device. Knowing customer testimonials can have a lot of sway, we added one to supplemant the information. We also included a comparison chart since we were very confident in Advantage outperforming the competitors.'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'div',
              { className: 'Blog-image-small-container' },
              _react2['default'].createElement(_reactPicture.Image, { alt: 'landing page', srcSet: landingPage, extra: {
                  className: 'Blog-image-small',
                  sizes: '(min-width: 700px) 700px, 100vw'
                } })
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Sign Up Flow'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'The first page in the sign up flow highlighted not only the plans being offered, but also reiterated all of the benefits Advantage had. This content might be viewed as unnecessary, as it was covered on the landing page, but with our advertising efforts, some customers would be directed to this page first.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'sign up flow plan details page', srcSet: signUpFirst, extra: {
                className: 'Blog-image-medium',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Details'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'Once a customer decides on which plan to move forward with, we ask just enough information to create an account. We ask for a home location to reduce the friction when requesting service, and make sure iTechs are in that region.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'sign up customer information page', srcSet: signUpInfo, extra: {
                className: 'Blog-image-medium',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Payment'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'The team decided to use Stripe for all online-payment methods, and we wanted this step to be just as painless as the details view. We added some extra details to comfort a consumer, as anytime payment details are asked for, there\'s a moment of pause.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'sign up payment page', srcSet: signUpPayment, extra: {
                className: 'Blog-image-medium',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Adding a device'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'Now that they have an account, the next logical step is to add the device so that the protection services can start. Phase 1 of Advantage had a few limitations when adding devices, so we were very explicit as the what needs to be done in order to add a device.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'sign up success page', srcSet: signUpSuccess, extra: {
                className: 'Blog-image-medium',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Add a device flow'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'I havent included all of the steps in the process, just a few so that you can get the drift. The process is quite simple, as each screen asks for only one action. This allows the process to not feel overwhelming and that you are accomplishing the task successfully.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'Adding a device flow', srcSet: addDeviceMain, extra: {
                className: 'Blog-image-medium',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Adding an image'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'For our Advantage team to confirm fully-functional devices, we need an image of the device\'s screen. The team discussed and tried many options. In the end, to complete phase 1, we made use of a customers webcam. Since the majority of customer\'s have laptops or iPads, this was a short-term solution. If they didn\'t have a camera, the Advantage team would locate a nearby iTech and have them go to the customer\'s location to confirm the device.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'Adding a device image', srcSet: addDeviceCam, extra: {
                className: 'Blog-image-medium',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Customer Dashboard'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'The dashboard was a homebase for customers regarding their Advantage membership. They could check check the status of their devices, repair requests, or plans in general. They could also edit their info, add new plans, access the membership perks and more. Get my information on the dashboard ',
              _react2['default'].createElement(
                'a',
                { href: '/account', onClick: _Link2['default'].handleClick },
                'from this post'
              ),
              '.'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Customer Plans'
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'plans view on the dashboard', srcSet: plans, extra: {
                className: 'Blog-image-medium',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Service Activity'
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'Activity screen on the dashboard page', srcSet: activity, extra: {
                className: 'Blog-image-medium',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Advantage Member Perks'
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'perks on the dashboard', srcSet: perks, extra: {
                className: 'Blog-image-medium',
                sizes: '100vw'
              } })
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(48);

  var _Link = __webpack_require__(3);

  var _Link2 = _interopRequireDefault(_Link);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Footer' },
          _react2['default'].createElement(
            'div',
            { className: 'Footer-top' },
            _react2['default'].createElement(
              'div',
              { className: 'Footer-links' },
              _react2['default'].createElement(
                'div',
                { className: 'Footer-links-container' },
                _react2['default'].createElement(
                  'div',
                  { className: 'Links-explore' },
                  _react2['default'].createElement(
                    'h6',
                    null,
                    'Explore'
                  ),
                  _react2['default'].createElement(
                    'ul',
                    null,
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        'a',
                        { href: '/work', onClick: _Link2['default'].handleClick },
                        'Work'
                      )
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        'a',
                        { href: '/resume', onClick: _Link2['default'].handleClick },
                        'Resume'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'Links-connect' },
                  _react2['default'].createElement(
                    'h6',
                    null,
                    'Connect'
                  ),
                  _react2['default'].createElement(
                    'ul',
                    null,
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        'a',
                        { href: 'https://twitter.com/Philly_Keys' },
                        'Twitter'
                      )
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        'a',
                        { href: 'https://instagram.com/philly_keys/' },
                        'Instagram'
                      )
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        'a',
                        { href: 'https://www.linkedin.com/in/keysphil' },
                        'LinkedIn'
                      )
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        'a',
                        { href: 'https://github.com/philkeys' },
                        'Github'
                      )
                    )
                  )
                )
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'Footer-about' },
              _react2['default'].createElement(
                'h6',
                null,
                'About this site'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'I used ',
                _react2['default'].createElement(
                  'a',
                  { href: 'https://github.com/koistya/react-static-boilerplate' },
                  'react-static'
                ),
                ' to gain an understanding of React. Killing two birds with one stone eh? This site comes with all the bells and whistles folks: Webpack, PostCSS with Sass, Lost, SVG\'s and it\'s hosted via Github Pages! Like all projects consider it a \'work in progress\'.'
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Footer-bottom' },
            _react2['default'].createElement(
              'div',
              { className: 'Footer-bottom-contact' },
              _react2['default'].createElement(
                'p',
                null,
                'Say hello at ',
                _react2['default'].createElement(
                  'a',
                  { href: 'mailto:phil@phillipkeys.com' },
                  'phil@phillipkeys.com'
                )
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'Footer-bottom-roots' },
              _react2['default'].createElement(
                'span',
                { className: 'Roots-california' },
                '  Growing in California'
              ),
              _react2['default'].createElement(
                'span',
                { className: 'Roots-state-separator' },
                '•'
              ),
              _react2['default'].createElement(
                'span',
                { className: 'Roots-wisconsin' },
                'Raised in Wisconsin'
              )
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _Link = __webpack_require__(3);

  var _Link2 = _interopRequireDefault(_Link);

  __webpack_require__(8);

  __webpack_require__(49);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Feature-container' },
          _react2['default'].createElement(
            'div',
            { className: 'Image-section' },
            _react2['default'].createElement(
              'div',
              { className: 'Image-container-advantage' },
              _react2['default'].createElement('div', { className: 'Image-advantage' })
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Content-section' },
            _react2['default'].createElement(
              'div',
              { className: 'Content-section-inner' },
              _react2['default'].createElement(
                'div',
                { className: 'Content-title' },
                _react2['default'].createElement(
                  'h5',
                  null,
                  'Advantage'
                ),
                _react2['default'].createElement(
                  'span',
                  { className: 'title-platform' },
                  'Web'
                ),
                _react2['default'].createElement(
                  'p',
                  null,
                  'Prototyping • Design'
                )
              ),
              _react2['default'].createElement(
                'p',
                { className: 'Content-summary' },
                'Get back to life fast with a membership built for you and your device'
              ),
              _react2['default'].createElement(
                'a',
                { href: '/account', className: 'Link', onClick: _Link2['default'].handleClick },
                'Take a look'
              )
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(50);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Title' },
          _react2['default'].createElement('span', { className: 'features-icon' }),
          _react2['default'].createElement(
            'h3',
            { className: 'features-title' },
            'Recent Work'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(51);

  var _MmmysteryFeatureMmmystery = __webpack_require__(20);

  var _MmmysteryFeatureMmmystery2 = _interopRequireDefault(_MmmysteryFeatureMmmystery);

  var _AdvantageFeatureAdvantage = __webpack_require__(16);

  var _AdvantageFeatureAdvantage2 = _interopRequireDefault(_AdvantageFeatureAdvantage);

  var _FeaturesTitleTitle = __webpack_require__(17);

  var _FeaturesTitleTitle2 = _interopRequireDefault(_FeaturesTitleTitle);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Features' },
          _react2['default'].createElement(_FeaturesTitleTitle2['default'], null),
          _react2['default'].createElement(_MmmysteryFeatureMmmystery2['default'], null),
          _react2['default'].createElement(_AdvantageFeatureAdvantage2['default'], null)
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var Img = __webpack_require__(4).Image;

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default(props) {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).call(this, props);
      this.state = {};
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {

        var imgs = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Mmmystery-Image-1.jpg 275w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Mmmystery-Image-1.jpg 700w';
        return _react2['default'].createElement(Img, { alt: 'Your picture description', srcSet: imgs, extra: { className: 'featureImg' } });
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _Image = __webpack_require__(19);

  var _Image2 = _interopRequireDefault(_Image);

  var _Link = __webpack_require__(3);

  var _Link2 = _interopRequireDefault(_Link);

  __webpack_require__(8);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Feature-container' },
          _react2['default'].createElement(
            'div',
            { className: 'Image-section' },
            _react2['default'].createElement(
              'div',
              { className: 'Image-container' },
              _react2['default'].createElement('div', { className: 'Image' })
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Content-section' },
            _react2['default'].createElement(
              'div',
              { className: 'Content-section-inner' },
              _react2['default'].createElement(
                'div',
                { className: 'Content-title' },
                _react2['default'].createElement(
                  'h5',
                  null,
                  'Mmmystery '
                ),
                _react2['default'].createElement(
                  'span',
                  { className: 'title-platform' },
                  'App'
                ),
                _react2['default'].createElement(
                  'p',
                  null,
                  'Planning • Design • Development'
                )
              ),
              _react2['default'].createElement(
                'p',
                { className: 'Content-summary' },
                'Trust your gut instinct & experience new tastes around the neighborhood, in a simple and fun way'
              ),
              _react2['default'].createElement(
                'a',
                { href: '/mmmystery', className: 'Link', onClick: _Link2['default'].handleClick },
                'Take a look'
              )
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(52);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Hero-list' },
          _react2['default'].createElement(
            'div',
            { className: 'List-item' },
            _react2['default'].createElement(
              'p',
              { className: 'Item-header' },
              'Recent grad',
              _react2['default'].createElement(
                'span',
                { className: 'Non-mobile' },
                'uate'
              ),
              ' of Makersquare'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Item-sub' },
              '12–week JavaScript immersive'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'List-item' },
            _react2['default'].createElement(
              'p',
              { className: 'Item-header' },
              'Previously ',
              _react2['default'].createElement(
                'span',
                { className: 'Non-mobile' },
                'design'
              ),
              ' at iCracked'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Item-sub' },
              '144–week adventure helping people get back to life, fast'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'List-item' },
            _react2['default'].createElement(
              'p',
              { className: 'Item-header' },
              'Focusing on design & dev',
              _react2['default'].createElement(
                'span',
                { className: 'Non-mobile' },
                'elopment'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Item-sub' },
              'With a love of great copy & forward-thinking teammates'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'List-item' },
            _react2['default'].createElement(
              'p',
              { className: 'Item-header' },
              'Active on ',
              _react2['default'].createElement(
                'span',
                { className: 'Non-mobile' },
                'the'
              ),
              ' social ',
              _react2['default'].createElement(
                'span',
                { className: 'Non-mobile' },
                'radar'
              )
            ),
            _react2['default'].createElement(
              'ul',
              { className: 'Item-sub-list' },
              _react2['default'].createElement(
                'li',
                null,
                _react2['default'].createElement(
                  'a',
                  { href: 'https://twitter.com/Philly_Keys' },
                  'Twitter '
                ),
                ' •'
              ),
              _react2['default'].createElement(
                'li',
                null,
                _react2['default'].createElement(
                  'a',
                  { href: 'https://instagram.com/philly_keys/' },
                  ' Instagram '
                ),
                ' •'
              ),
              _react2['default'].createElement(
                'li',
                null,
                _react2['default'].createElement(
                  'a',
                  { href: 'https://github.com/philkeys' },
                  ' Github'
                )
              )
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(9);

  var _Image = __webpack_require__(23);

  var _Image2 = _interopRequireDefault(_Image);

  var _HeroListHeroList = __webpack_require__(21);

  var _HeroListHeroList2 = _interopRequireDefault(_HeroListHeroList);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Hero' },
          _react2['default'].createElement(_Image2['default'], null),
          _react2['default'].createElement(
            'div',
            { className: 'Hero-title' },
            _react2['default'].createElement(
              'span',
              null,
              'Good day friend!'
            ),
            _react2['default'].createElement(
              'h1',
              null,
              'My name\'s Phillip'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Hero-phrase' },
            _react2['default'].createElement('span', null),
            _react2['default'].createElement(
              'p',
              null,
              'I craft experiences to help people achieve their goals'
            )
          ),
          _react2['default'].createElement(_HeroListHeroList2['default'], null)
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(9);

  var Img = __webpack_require__(4).Image;

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default(props) {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).call(this, props);
      this.state = {};
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {

        var imgs = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/profile.jpg 245w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/profile.jpg 630w';
        console.log(imgs);
        return _react2['default'].createElement(Img, { alt: 'Your picture description', srcSet: imgs, extra: { className: 'myImg' } });
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(53);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Upup' },
          _react2['default'].createElement('span', { className: 'section-icon' }),
          _react2['default'].createElement(
            'h3',
            { className: 'section-title' },
            'The up & up'
          ),
          _react2['default'].createElement(
            'div',
            { className: 'section-content' },
            _react2['default'].createElement(
              'div',
              { className: 'Upup-designer' },
              _react2['default'].createElement('span', { className: 'Upup-icon-designer' }),
              _react2['default'].createElement(
                'h4',
                null,
                'As a designer'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'My skills include research, prototyping, UX, and front-end development. I wore many hats at iCracked, which has given me experience with product vision, cross-team collaboration, and having a fluid process.'
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'Upup-human' },
              _react2['default'].createElement('span', { className: 'Upup-icon-human' }),
              _react2['default'].createElement(
                'h4',
                null,
                'As a human'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Growing up in Wisconsin earned me the characteristics of working hard, being candid as well as kind, and withstanding the frigid temps of the bay for a casual swim ;). California has given me independence and  opportunity.'
              )
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(54);

  var _Navigation = __webpack_require__(28);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  var _Footer = __webpack_require__(15);

  var _Footer2 = _interopRequireDefault(_Footer);

  var Layout = (function (_Component) {
    _inherits(Layout, _Component);

    function Layout() {
      _classCallCheck(this, Layout);

      _get(Object.getPrototypeOf(Layout.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Layout, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { id: 'Layout', className: 'Layout' },
          _react2['default'].createElement(_Navigation2['default'], null),
          this.props.children,
          _react2['default'].createElement(_Footer2['default'], null)
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        children: _react.PropTypes.element.isRequired
      },
      enumerable: true
    }]);

    return Layout;
  })(_react.Component);

  exports['default'] = Layout;
  module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(5);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'section',
          { className: 'Blog-hero' },
          _react2['default'].createElement(
            'span',
            { className: 'Blog-hero-platform' },
            'Native Application'
          ),
          _react2['default'].createElement(
            'h1',
            { className: 'Blog-hero-title' },
            'Building Mmmystery'
          ),
          _react2['default'].createElement(
            'p',
            { className: 'Blog-hero-phrase' },
            'A three-week project to help you experience new tastes around your area, in a simple & fun way.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _HeroHero = __webpack_require__(26);

  var _HeroHero2 = _interopRequireDefault(_HeroHero);

  __webpack_require__(6);

  var _reactPicture = __webpack_require__(4);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        var whiteboardImg = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/whiteboarding/whiteboarding375.jpg 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/whiteboarding/whiteboarding750.jpg 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/whiteboarding/whiteboarding1334.jpg 1334w';
        var cards = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/cards/cardSlim375.jpg 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/cards/cardSlim750.jpg 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/cards/card1049.jpg 1049w';
        var images = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/images/image375.jpg 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/images/image750.jpg 750w';
        var filter = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/filter/filter375.jpg 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/filter/filter750.jpg 750w';
        var map = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/map/map375.jpg 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/map/map750.jpg 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/map/map1079.jpg 1050w';
        var capture = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/capture/capture320.jpg 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/capture/catpure750.jpg 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/capture/capture1250.jpg 1250w';
        var addMeal = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/addMeal/addMeal320.jpg 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/addMeal/addMeal750.jpg 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/addMeal/addMeal1250.jpg 1250w';
        var profile = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/profile/profile320.jpg 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/profile/profile750.jpg 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/profile/profile1250.jpg 1250w';
        var feelings = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/feelings/feelings320.jpg 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/feelings/feelings750.jpg 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/feelings/feelings1250.jpg 1250w';
        var walkthrough = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/walkthrough/walkthrough320.jpg 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/walkthrough/walkthrough750.jpg 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/walkthrough/walkthrough1250.jpg 1250w';
        var loading = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/loading/loading320.jpg 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/loading/loading750.jpg 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/loading/loading1250.jpg 1250w';
        var extras = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/extras/extras320.jpg 320w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/extras/extras750.jpg 750w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/extras/extras1250.jpg 1250w';
        return _react2['default'].createElement(
          'div',
          { className: 'Work-container' },
          _react2['default'].createElement(_HeroHero2['default'], null),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              'What\'s Mmmystery?'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'Deciding what to eat can be the hardest question of the day, let alone the follow up of where to eat. I bet you’ve experienced this question recently and can recall many a time where you throw your hands up and proclaim, “I don’t care, let’s just go!”.'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'We wanted to take a step back. Away from lists of restaurants, pages of reviews and star ratings. To throw out people’s opinions and the notion that a shabby looking restaurant serves bad food. Our goal was to showcase the food itself, and let you trust your gut on whether you wanted to give it a try. To try something new, yet nearby.'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'div',
              { className: 'Blog-image-small-container' },
              _react2['default'].createElement('img', { src: 'https://s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/makersquare-logo.png', width: '320', height: '46' })
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              'The beginnings'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'This was our team’s thesis project at Makersquare. If you haven’t heard of Makersquare, it’s a 12-week accelerator for software engineering. There, you learn the fundamentals of Computer Science and JavaScript to build production-ready applications.'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'The thesis is the culmination of the program. The instructors put together team’s of 4 and those team’s must decide what to build and the software to use.'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'div',
              { className: 'Blog-image-small-container' },
              _react2['default'].createElement('img', { className: 'Blog-image-small', src: 'https://s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/team.png', width: '675', height: '175' })
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'The first two days were set aside for coming up with an idea. We met a few times throughout those days, tossing around possibilities and giving input. In the end, the topic that stirred the most excitement was in the food industry.'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'Los Angeles has so many great places to eat, both physical and on wheels, and it felt like a great opportunity to cater to that. While this direction was on the ambiguous side, it provided a starting point for us to throw around ideas. We eventually keyed in on:'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'blockquote',
              { className: 'Blog-blockquote-major' },
              'The everyday problem of deciding ',
              _react2['default'].createElement('br', null),
              'what and where to eat'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              'The Why'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'So we had a problem to solve. Since we had only three weeks, we used our own experiences to come up with a list of the current paint points associated with this.'
            ),
            _react2['default'].createElement(
              'ol',
              null,
              _react2['default'].createElement(
                'li',
                null,
                'Emphasis put on the wrong data. Precedence on star ratings and reviews from people you don’t know. This is expecially dangerous for food, as each person has different tastes'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'A reliance on the consumer knowing exactly what they want to eat, whether dish or category (Italian, Mexican, etc)'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Too many options displayed at once. Whether that’s all of the restaurants within a 20 mile radius or the names of various dishes to choose from'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Bias against restaurants due to either their location, name, or the look of the building'
              )
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'blockquote',
              { className: 'Blog-blockquote-minor' },
              'Case in point – A friend explained that when she wants something to eat, she’ll log into Yelp. She’ll find her ‘favorite’ spot; usually the one that’s highest-rated and order one of her ‘usuals’. Rarely does she use Yelp to actually find new places or new food.'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              'The What'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'Using these pain points, we came up with a set of principles that would create a better experience for the food lover’s out there.'
            ),
            _react2['default'].createElement(
              'ol',
              null,
              _react2['default'].createElement(
                'li',
                null,
                'Show the most relevant data first; being images of the actual food'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Reduce the number of options presented to one at a time'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Remove all social information presented (reviews, stars, etc)'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Cater to the walking crowd by sourcing just nearby restaurants'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Remove all information about the restaurant (name, location, details)'
              )
            ),
            _react2['default'].createElement(
              'p',
              null,
              'A solution worth building:'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'blockquote',
              { className: 'Blog-blockquote-major' },
              'Trust your gut instinct and experience new tastest around the neighborhood, in a simple and fun way'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'div',
              { className: 'Blog-image-small-container' },
              _react2['default'].createElement(_reactPicture.Image, { alt: 'early whiteboarding session', src: '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/whiteboarding/whiteboarding375.jpg', srcSet: whiteboardImg, extra: {
                  className: 'Blog-image-small',
                  sizes: '(min-width: 700px) 750px, 100vw'
                } })
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              'The How'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'We then needed to turn those points into an interface that was both easy to use and enjoyable. To do that we had to create some rules so that we didn’t get too carried away given the time constraints.'
            ),
            _react2['default'].createElement(
              'ul',
              null,
              _react2['default'].createElement(
                'li',
                null,
                'Target Audience — Individuals and groups of all ages in cities that have restaurants within walking distance'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Scope — Focus just on the Santa Monica area to start. Depending on how easy collecting the data was, a possibility of expansion'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Stages – Break Mmmystery into 3 components: personal, social, and commercial. We’d have just enough time for personal.'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Authentication — Use Facebook’s authentication system to quickly create user accounts'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'UI — Use Sketch to create mockups for all of the needed screens, including ones for Phase 2 and 3'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Feature Freeze — Five days before the presentation. This didn’t mean we would stop working, just that we wouldn’t do anything new.'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Platform — This application will be used while on the move. Because of that the newly released React Native for iOS was chosen. The Android version had not been released at the time of this project.'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Roles — Quinton took the role of Product owner and Steve took the role of Scrum Master. We all took hold of engineering and I would lead the design.'
              )
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              'Phase 1'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'Our minimum viable product would allow people to log in, select a meal they wanted, use the step by step map to arrive at the location, and the built in photo feature to take a picture.'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'Let’s walk through each part of this experience'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-right-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'early whiteboarding session', src: '//s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/cards/cardSlim375.jpg', srcSet: cards, extra: {
                className: 'Blog-image-right',
                sizes: '(min-width: 900px) 1049px, 100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Cards'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'This view is the heart of the application.'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'We found cards, å la Tinder, to be the best layout for deciding on a meal. It emphasizes the photo while displaying just one choice at a time so one stays focused. Perfecto! '
            ),
            _react2['default'].createElement(
              'p',
              null,
              'Cards have many benefits. They allowed us to place some extra information about the meal at the bottom of each one. There was also enough room in the view to put some macro level information above and below the card.'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'The information added, both on the card and above and below it, are there for context awareness and reassurance. Obviously we don’t want to give away too much, but if we held back everything people would be afraid to use the application.'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'So, we included the average price of the restaurant as well as distance away. We chose to show minutes and not distance in miles because minutes is less intimidating.'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'For macro information, a user’s current location is provided at the bottom of the screen. While this is a mystery and all, we don’t want people wondering if the app knows the correct location.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'food image examples', srcSet: images, extra: {
                className: 'Blog-image-small',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Images'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'The long term goal is to use only member-generated photos. However, with this cannot be done with a small user base. For phase 1, we gathered a large number of photos from the Santa Monica restaurants using third party services. This allowed us to instantly have a great source of cards to flip through.'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'One of the issues we ran into was the images sourced were of all different sizes. Originally, the cards had been built to work with a certain dimension ratio. A quick fix for us was to create a more ‘Polaroid’ feeling to the cards. This way, if the image is either skinnier or wider, the extra white space around them doesn’t not seem like an error.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'Mmmystery filter screen', srcSet: filter, extra: {
                className: 'Blog-image-small--filter',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Filtering'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'The cards presented on Mmmystery are random, which provides an adventure in itself. There are times yet when you crave something in particular, which is why we needed to include a filters screen.'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'After pulling all of the categories of the Santa Monica restaurants (there were hundreds) we narrowed it down to 9 and combined certain ones. With more time we’d test this to see if more or less are needed, but it works for now.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'mmmystery map', srcSet: map, extra: {
                className: 'Blog-image-medium',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'The Map'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'This is where the adventure begins. We provide only one step at a time for the directions process. When you get close to each waypoint, the map will update and show you the next one. This way we keep the restaurant and location hidden until the very last waypoint.'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'We configured the waypoint icons to be the category of your meal. If you select something healthy, you’ll see carrot icons. If you choose a hamburger, you’ll see a hamburger!'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              'Phase 2'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'Finding your next meal was our initial goal. Yet, the longer we worked on Mmmystery, the more we saw it being a great place for food lovers to connect and share.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'mmmystery map', srcSet: capture, extra: {
                className: 'Blog-image-medium',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Capturing Images'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'This was implemented in phase 1, but would be used more when phase 2 was complete. There two options, to grab from the camera roll or to take a picture in the flow. This is followed by the ability to crop and then you move on to choosing the restaurant and meal associated with the image.'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'The flow of arriving, taking an image when your food arrives, and then remember to upload it later will be tricky to solve. One incentive that may help people return to the app once their meal is over, is by included a feature for emotion.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'mmmystery map', srcSet: addMeal, extra: {
                className: 'Blog-image-medium',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Meal and Restaurant Selection'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'A profile allows a member, and others in the app, to view their history on Mmmystery. This includes Mmmysteries taken as well as photos shared. In general, it has the aspects you tend to find on platforms like Instagram, Facebook, and Twitter.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'mmmystery map', srcSet: profile, extra: {
                className: 'Blog-image-medium',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Profile'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'A profile allows a member, and others in the app, to view their history on Mmmystery. This includes Mmmysteries taken as well as photos shared. In general, it has the aspects you tend to find on platforms like Instagram, Facebook, and Twitter.'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'News Feed'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'We love the idea of a news feed displaying recent adventures taken and the photos you and your friends take. The information shared will be just as limited as the cards you swipe through. This will allow for conversations outside of the application, you know, like the way it used to be?'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'mmmystery map', srcSet: feelings, extra: {
                className: 'Blog-image-medium',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Feelings'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'Food is full of emotion, and with Mmmystery we want to be able to show that off! So, let’s say you’ve finished your meal and are waiting for the check to arrive. Now’s the perfect time to finish the adventure, by uploading that image you took and choosing an emotion from the list provided.'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'Are you so full you’re going to burst? Or just really sleepy? By attaching a feeling to each adventure, you can key your friends in on how that meal was. It can also stir memories down the road as you reminisce through your Mmmystery photos and land upon that lovely Filet Mignon.'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              'Phase 3'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'While this is long-term planning, it was in our process to figure out how to create some revenue for Mmmystery. While we couldn’t come up with any innovative solutions with the time given, there were a couple ways that seemed possible.'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Ads'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'This could take the form of sponsored cards. By detecting your location, the app could randomly serve up sponsored meals that are nearby you.'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Discounts'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'On the main screen, where the current location is displayed near the bottom, it could be replaced with daily deals. These would be great deals from around the area you could score big on.'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              'Extras'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'Here are a few of the extra views that weren\'t discussed above.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'mmmystery map', srcSet: walkthrough, extra: {
                className: 'Blog-image-medium',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Walkthrough'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'This could take the form of sponsored cards. By detecting your location, the app could randomly serve up sponsored meals that are nearby you.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'mmmystery map', srcSet: loading, extra: {
                className: 'Blog-image-medium',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Loading'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'This was great practice working with the animation features of React Native. While the end result wasn’t as smooth as we would’ve liked, it still had a nice effect.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Blog-image-small-container' },
            _react2['default'].createElement(_reactPicture.Image, { alt: 'mmmystery map', srcSet: extras, extra: {
                className: 'Blog-image-medium',
                sizes: '100vw'
              } })
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Authentication'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'We utilized the facebook authentication via GraphQL. This made it relatively easy for us to create users for Mmmystery early on in the process.'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Menu'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'Completed during phase 1, the menu provides easy access to your account as well as helpful information about the app and the ability to contact the team at Mmmystery.'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'h4',
              null,
              'Final Thoughts'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Blog-section-first-p' },
              'In the end our team accomplished exactly what we set out to do. We wanted to provide a fully working application that allowed you to select a meal and then be directed step by step the the restaurant. We were even able to add the ability to take photos, crop them, create profiles, and a working menu.'
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section', style: { width: '100%' } },
            _react2['default'].createElement(
              'p',
              { className: 'Blog-sub-header' },
              _react2['default'].createElement(
                'strong',
                null,
                'Tech Stack'
              )
            ),
            _react2['default'].createElement(
              'ul',
              null,
              _react2['default'].createElement(
                'li',
                null,
                'React Native'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'ES6 / Babel'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Yelp API'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Mapbox API'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Facebook Auth'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Amazon S3'
              ),
              _react2['default'].createElement(
                'li',
                null,
                'Node / Express / Heroku'
              )
            ),
            _react2['default'].createElement(
              'p',
              null,
              'You can view all of the code for Mmmystery ',
              _react2['default'].createElement(
                'a',
                { href: 'https://github.com/philkeys/mmmystery' },
                'on Github'
              )
            )
          ),
          _react2['default'].createElement(
            'section',
            { className: 'Blog-section' },
            _react2['default'].createElement(
              'div',
              { className: 'Video-section' },
              _react2['default'].createElement(
                'h4',
                null,
                'Videos'
              ),
              _react2['default'].createElement(
                'video',
                { style: { height: '390px', marginTop: '25px' }, src: 'https://s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/videos/Mmmystery-Initial-Loading.mp4', controls: true },
                'Your browser does not support the ',
                _react2['default'].createElement(
                  'code',
                  null,
                  'video'
                ),
                ' element.'
              ),
              _react2['default'].createElement(
                'video',
                { style: { height: '390px', marginTop: '25px' }, src: 'https://s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/videos/Mmmystery-Plates-Dashboard.mp4', controls: true },
                'Your browser does not support the ',
                _react2['default'].createElement(
                  'code',
                  null,
                  'video'
                ),
                ' element.'
              ),
              _react2['default'].createElement(
                'video',
                { style: { height: '390px', marginTop: '25px' }, src: 'https://s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/videos/Mmmystery-Map.mp4', controls: true },
                'Your browser does not support the ',
                _react2['default'].createElement(
                  'code',
                  null,
                  'video'
                ),
                ' element.'
              ),
              _react2['default'].createElement(
                'video',
                { style: { height: '390px', marginTop: '25px' }, src: 'https://s3-us-west-1.amazonaws.com/phil-portfolio-images/Work-Mmmystery/videos/Mmmystery-Image-Uploads.mp4', controls: true },
                'Your browser does not support the ',
                _react2['default'].createElement(
                  'code',
                  null,
                  'video'
                ),
                ' element.'
              )
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(56);

  var _Link = __webpack_require__(3);

  var _Link2 = _interopRequireDefault(_Link);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Navigation' },
          _react2['default'].createElement(
            'div',
            { className: 'Navigation-left' },
            _react2['default'].createElement(
              'a',
              { href: '/', onClick: _Link2['default'].handleClick },
              _react2['default'].createElement('span', { className: 'logo' })
            ),
            _react2['default'].createElement(
              'div',
              { className: 'city-container' },
              _react2['default'].createElement(
                'span',
                { className: 'city-in' },
                'Currently in',
                _react2['default'].createElement(
                  'span',
                  { className: 'city' },
                  ' San Francisco, CA'
                )
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Navigation-right--mobile' },
            _react2['default'].createElement(
              'a',
              { className: 'mobile-menu', href: '/', onClick: _Link2['default'].handleClick },
              'Menu'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Navigation-right' },
            _react2['default'].createElement(
              'ul',
              { role: 'menu', className: 'Navigation-menu' },
              _react2['default'].createElement(
                'li',
                { className: 'Navigation-item' },
                _react2['default'].createElement(
                  'a',
                  { className: 'Navigation-link', href: '/work', onClick: _Link2['default'].handleClick },
                  'Work'
                )
              ),
              _react2['default'].createElement(
                'li',
                { className: 'Navigation-item' },
                _react2['default'].createElement(
                  'a',
                  { className: 'Navigation-link', href: '/resume', onClick: _Link2['default'].handleClick },
                  'Resume'
                )
              ),
              _react2['default'].createElement(
                'li',
                { className: 'Navigation-item' },
                _react2['default'].createElement(
                  'a',
                  { className: 'Navigation-link', href: 'mailto:phil@phillipkeys.com' },
                  'Contact'
                )
              )
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(57);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Resume-container' },
          _react2['default'].createElement(
            'div',
            { className: 'Resume-header-container' },
            _react2['default'].createElement(
              'p',
              null,
              _react2['default'].createElement(
                'strong',
                null,
                'Product designer'
              ),
              ' looking for an opportunity in San Francisco, New York, or London'
            ),
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                'a',
                { href: 'https://s3-us-west-1.amazonaws.com/phil-portfolio-images/philkeys-resume.pdf', className: 'Resume-header-pdf' },
                'PDF Version'
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Resume-technical-container' },
            _react2['default'].createElement(
              'h3',
              null,
              'Technical Skills'
            ),
            _react2['default'].createElement(
              'p',
              null,
              _react2['default'].createElement(
                'strong',
                null,
                'Strong'
              ),
              ' — JavaScript, Interface Design & Experience, HTML5, CSS3, Git, Github'
            ),
            _react2['default'].createElement(
              'p',
              null,
              _react2['default'].createElement(
                'strong',
                null,
                'Experience'
              ),
              ' — React, Angular, Grunt, Webpack, Node, Express, Heroku, ES6, Copywriting'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Resume-recent-container' },
            _react2['default'].createElement(
              'h3',
              null,
              'Recent Projects'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'Resume-recent-specific-container' },
              _react2['default'].createElement(
                'div',
                { className: 'Resume-recent-specific-headline' },
                _react2['default'].createElement(
                  'p',
                  null,
                  _react2['default'].createElement(
                    'strong',
                    null,
                    'Mmmystery'
                  ),
                  ' — Front-end & Design'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    'a',
                    { href: '/mmmystery' },
                    'More info'
                  )
                )
              ),
              _react2['default'].createElement(
                'p',
                { className: 'Resume-recent-specific-sub' },
                'Native iOS Application allowing you to experience new tastes in the area'
              ),
              _react2['default'].createElement(
                'ul',
                null,
                _react2['default'].createElement(
                  'li',
                  null,
                  'Configured camera functionality for taking live picture, camera roll access, cropping'
                ),
                _react2['default'].createElement(
                  'li',
                  null,
                  'Implemented many components in app using JSX and inline style system'
                ),
                _react2['default'].createElement(
                  'li',
                  null,
                  'Developed overall design and animations throughout project'
                )
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'Resume-recent-specific-container' },
              _react2['default'].createElement(
                'div',
                { className: 'Resume-recent-specific-headline' },
                _react2['default'].createElement(
                  'p',
                  null,
                  _react2['default'].createElement(
                    'strong',
                    null,
                    'Advantage Membership'
                  ),
                  ' — Front-end & Design'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    'a',
                    { href: '/mmmystery' },
                    'More info'
                  )
                )
              ),
              _react2['default'].createElement(
                'p',
                { className: 'Resume-recent-specific-sub' },
                'iCracked insurance program for consumer and enterpise accounts'
              ),
              _react2['default'].createElement(
                'ul',
                null,
                _react2['default'].createElement(
                  'li',
                  null,
                  'Researched / Prototyped solutions off existing systems & team\'s product vision'
                ),
                _react2['default'].createElement(
                  'li',
                  null,
                  'Designed and developed sign up flow for memberships and landing pages'
                ),
                _react2['default'].createElement(
                  'li',
                  null,
                  'Designed dashboards for both customer-facing application and internal teams'
                )
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Resume-experience-container' },
            _react2['default'].createElement(
              'h3',
              null,
              'Experience'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'Resume-experience-specific-container' },
              _react2['default'].createElement(
                'div',
                { className: 'Resume-experience-specific-headline' },
                _react2['default'].createElement(
                  'p',
                  null,
                  _react2['default'].createElement(
                    'strong',
                    null,
                    'iCracked'
                  ),
                  ' — Product Designer | Redwood City, CA 2012 — 2015'
                )
              ),
              _react2['default'].createElement(
                'p',
                { className: 'Resume-experience-specific-sub' },
                'On-demand repair, trade-in & insurance service for iOS and Android deices'
              ),
              _react2['default'].createElement(
                'ul',
                null,
                _react2['default'].createElement(
                  'li',
                  null,
                  'Led design / direction on iOS apps, website, two e-commerce site, transactional emails, support system, and team wide tools and dashboards'
                ),
                _react2['default'].createElement(
                  'li',
                  null,
                  'Helped launch protection suite (Advantage) including consumer & internal systems'
                ),
                _react2['default'].createElement(
                  'li',
                  null,
                  'Increased customer conversion for repair requests from 18% to 45% in Q1 of 2015 '
                ),
                _react2['default'].createElement(
                  'li',
                  null,
                  'Helped grow HQ team from 6 to 135, increase of revenue from 1.5m per year to 17.5m'
                )
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'Resume-experience-specific-container' },
              _react2['default'].createElement(
                'div',
                { className: 'Resume-experience-specific-headline' },
                _react2['default'].createElement(
                  'p',
                  null,
                  _react2['default'].createElement(
                    'strong',
                    null,
                    'Providence Academy'
                  ),
                  ' — Graphic Designer | La Crosse, WI 2011 — 2012'
                )
              ),
              _react2['default'].createElement(
                'p',
                { className: 'Resume-experience-specific-sub' },
                'Private school system in the Coulee Region of Wisconsin'
              ),
              _react2['default'].createElement(
                'ul',
                null,
                _react2['default'].createElement(
                  'li',
                  null,
                  'Developed branding and marketing for website, brochures, billboards, and emails'
                ),
                _react2['default'].createElement(
                  'li',
                  null,
                  'Video production for events and commercial work'
                )
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Resume-education-container' },
            _react2['default'].createElement(
              'h3',
              null,
              'Education'
            ),
            _react2['default'].createElement(
              'p',
              null,
              _react2['default'].createElement(
                'strong',
                null,
                'Makersquare'
              ),
              ' – Advanced Engineering Immersive | California 2015'
            ),
            _react2['default'].createElement(
              'p',
              null,
              _react2['default'].createElement(
                'strong',
                null,
                'Western Technical'
              ),
              ' – Graphic design & marketing | Wisconsin 2009 — 2011'
            ),
            _react2['default'].createElement(
              'p',
              null,
              _react2['default'].createElement(
                'strong',
                null,
                'Univ. of Wisconsin - La Crosse'
              ),
              ' – Marketing | Wisconsin 2006 — 2008'
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(58);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'section',
          { className: 'Work-hero' },
          _react2['default'].createElement(
            'span',
            { className: 'Work-hero-platform' },
            'Progress over Perfection'
          ),
          _react2['default'].createElement(
            'h1',
            { className: 'Work-hero-title' },
            'Recent Work'
          ),
          _react2['default'].createElement(
            'p',
            { className: 'Work-hero-phrase', style: { maxWidth: '700px' } },
            'A few of the projects I\'ve taken part in. In each, I provide reasoning to contextual the designs shown.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _Link = __webpack_require__(3);

  var _Link2 = _interopRequireDefault(_Link);

  var _HeroHero = __webpack_require__(30);

  var _HeroHero2 = _interopRequireDefault(_HeroHero);

  __webpack_require__(59);

  /*
  <a href="/work" onClick={Link.handleClick}>
    <div className="Work-specific-container-illustrations">
      <h4 className="Work-title">Illustrations</h4>
      <p className="Work-phrase">Misc. work from the past few years</p>
    </div>
  </a>
   */

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_HeroHero2['default'], null),
          _react2['default'].createElement(
            'div',
            { className: 'Work-list-container' },
            _react2['default'].createElement(
              'a',
              { href: '/mmmystery', onClick: _Link2['default'].handleClick },
              _react2['default'].createElement(
                'div',
                { className: 'Work-specific-container-mmmystery' },
                _react2['default'].createElement(
                  'h4',
                  { className: 'Work-title' },
                  'Mmmystery'
                ),
                _react2['default'].createElement(
                  'p',
                  { className: 'Work-phrase' },
                  'iOS App using React-Native'
                )
              )
            ),
            _react2['default'].createElement(
              'a',
              { href: '/advantage', onClick: _Link2['default'].handleClick },
              _react2['default'].createElement(
                'div',
                { className: 'Work-specific-container-advantage' },
                _react2['default'].createElement(
                  'h4',
                  { className: 'Work-title' },
                  'iCracked Advantage'
                ),
                _react2['default'].createElement(
                  'p',
                  { className: 'Work-phrase' },
                  'Landing page & sign-up flow'
                )
              )
            ),
            _react2['default'].createElement(
              'a',
              { href: '/account', onClick: _Link2['default'].handleClick },
              _react2['default'].createElement(
                'div',
                { className: 'Work-specific-container-dashboard' },
                _react2['default'].createElement(
                  'h4',
                  { className: 'Work-title' },
                  'iCracked Dashboard'
                ),
                _react2['default'].createElement(
                  'p',
                  { className: 'Work-phrase' },
                  'Personal dashboards'
                )
              )
            ),
            _react2['default'].createElement(
              'a',
              { href: '/adaptive', onClick: _Link2['default'].handleClick },
              _react2['default'].createElement(
                'div',
                { className: 'Work-specific-container-illustrations' },
                _react2['default'].createElement(
                  'h4',
                  { className: 'Work-title' },
                  'Adaptive Web Design Posters'
                ),
                _react2['default'].createElement(
                  'p',
                  { className: 'Work-phrase' },
                  'Illustration work'
                )
              )
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Not Found'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'The page you\'re looking for was not found.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Error'
          ),
          _react2['default'].createElement(
            'pre',
            null,
            this.props.error ? this.props.error.message + '\n\n' + this.props.error.stack : 'An critical error occurred.'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        error: _react.PropTypes.instanceOf(Error)
      },
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Welcome!'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsAccountAccount = __webpack_require__(11);

  var _componentsAccountAccount2 = _interopRequireDefault(_componentsAccountAccount);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_componentsAccountAccount2['default'], null)
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsAdaptiveAdaptive = __webpack_require__(13);

  var _componentsAdaptiveAdaptive2 = _interopRequireDefault(_componentsAdaptiveAdaptive);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_componentsAdaptiveAdaptive2['default'], null)
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsAdvantageAdvantage = __webpack_require__(14);

  var _componentsAdvantageAdvantage2 = _interopRequireDefault(_componentsAdvantageAdvantage);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_componentsAdvantageAdvantage2['default'], null)
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Blog'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 1'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 2'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsIndexHeroHero = __webpack_require__(22);

  var _componentsIndexHeroHero2 = _interopRequireDefault(_componentsIndexHeroHero);

  var _componentsIndexUpUpUpUp = __webpack_require__(24);

  var _componentsIndexUpUpUpUp2 = _interopRequireDefault(_componentsIndexUpUpUpUp);

  var _componentsIndexFeaturesFeatures = __webpack_require__(18);

  var _componentsIndexFeaturesFeatures2 = _interopRequireDefault(_componentsIndexFeaturesFeatures);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { style: { paddingBottom: '50px' } },
          _react2['default'].createElement(_componentsIndexHeroHero2['default'], null),
          _react2['default'].createElement(_componentsIndexUpUpUpUp2['default'], null),
          _react2['default'].createElement(_componentsIndexFeaturesFeatures2['default'], null)
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsMmmysteryMmmystery = __webpack_require__(27);

  var _componentsMmmysteryMmmystery2 = _interopRequireDefault(_componentsMmmysteryMmmystery);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_componentsMmmysteryMmmystery2['default'], null)
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsResumeResume = __webpack_require__(29);

  var _componentsResumeResume2 = _interopRequireDefault(_componentsResumeResume);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_componentsResumeResume2['default'], null)
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsWorkWork = __webpack_require__(31);

  var _componentsWorkWork2 = _interopRequireDefault(_componentsWorkWork);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_componentsWorkWork2['default'], null)
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "", ""]);

  // exports


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "", ""]);

  // exports


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "", ""]);

  // exports


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/* Colors */\n\n/* Uses */\n\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n/* Old Media Queries\n$iphone5-screen: 320px;\n$iphone6-screen: 375px;\n$tiny-screen: 500px;\n$extra-small-screen: 600px;\n$small-screen: 768px;\n$small-medium: 940px;\n$medium-screen: 1280px;\n$large-screen: 1440px;\n$x-large-screen: 1600px;\n*/\n\n/* React-starter-kit\n$screen-sm-min: 768px;\n$screen-md-min: 992px;\n$screen-lg-min: 1200px;\n*/\n\n/* Supported Size Ranges: */\n/* handhelds, except-handhelds */\n/* small-screens, except-small-screens, to-small-screens, above-small-screens */\n/* medium-screens, except-medium-screens, above-medium-screens */\n/* large-screens, except-large-screens */\n/* Use: */\n/* @include media(handhelds, large-screens) */\n/* @include media(above-small-screens) {\n     max-width: 960px\n   }\n*/\n/* Typesetting variables. Edit these! */ /* in pixels. This would result in 22px on desktop */ /* how large the line height is as a multiple of font size */ /* ADJUST THE FIRST IF YOU CHANGE $baselineHeight\n\n/* Rate of growth for headings */\n/* I actually like this to be slightly smaller then the leading. Makes for tight headings. */\n\n/* Setup */\nhtml {\n  /* Change default typefaces here */\n  font-family: 'ProximaNova-Regular', 'Open Sans', 'Helvetica', 'sans-serif';\n  font-size: calc(22 / 16 * 100%);\n  font-weight: normal;\n  font-style: normal;\n  color: #394453;\n\n  /* Make everything look a little nicer in webkit */\n  -webkit-font-smoothing: antialiased;\n}\n  /* -webkit-text-size-adjust: auto\n  // -moz-text-size-adjust: auto\n  // -ms-text-size-adjust: auto\n  // -o-text-size-adjust: auto\n  // text-size-adjust: auto */\n\n/* Copy & Lists */\np {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n}\nul, ol {\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\nul li, ol li {\n  line-height: calc(1.5 * 1rem);\n}\nul ul, ul ol, ol ul, ol ol {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nblockquote {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\n/* Headings */\nh1, h2, h3, h4, h5, h6 {\n  /* Change heading typefaces here */\n  font-family: 'Bariol', 'Archivo Narrow', 'Source Sans Pro', 'Alegreya', 'Playfair Display', 'Fira Sans', 'Vollkorn', 'ProximaNova-Semibold', 'Helvetica', 'sans-serif';\n  font-weight: bold;\n  font-style: normal;\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n  line-height: calc(1.5 * 1rem);\n}\nh1 {\n  font-size: calc(2.20 * 1.414 * 1rem);\n  font-weight: 700;\n  line-height: calc(2.35 * 1.5 * 1rem);\n  margin-top: calc(0.15 * 1.5 * 1rem);\n}\n\n@media only screen and (min-width: 680px){\n  h1{\n    font-size: calc(3 * 1.414 * 1rem);\n    line-height: calc(3 * 1.5 * 1rem);\n    //margin-top: calc(2 * calc(1.5 * 1rem));\n  }\n}\n\n\nh2 {\n  font-size: calc(2 * 1.414 * 1rem);\n  line-height: calc(2 * 1.5 * 1rem);\n  margin-top: calc(2 * 1.5 * 1rem);\n}\n\nh3 {\n  font-size: calc(1 * 1.414 * 1rem);\n}\nh4 {\n  font-size: calc(1.414 / 2 * 1rem);\n}\nh5 {\n  font-size: calc(1.414 / 3 * 1rem);\n}\nh6 {\n  font-size: calc(1.414 / 4 * 1rem);\n}\n\n/* Tables */\ntable {\n  margin-top: calc(1.5 * 1rem);\n  border-spacing: 0px;\n  border-collapse: collapse;\n}\ntable td, table th {\n  padding: 0;\n  line-height: calc(1.5 * 22 - 0px);\n}\n/* Code blocks */\ncode {\n  /* Forces text to constrain to the line-height. Not ideal, but works. */\n  vertical-align: bottom;\n}\n/* Leading paragraph text */\n.lead {\n  font-size: calc(1.414 * 1rem);\n}\n\n/* Hug a the block above you */\n.hug {\n  margin-top: 0;\n}\n\n.Footer {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  max-width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 15px;\n}\n\n.Footer h6 {\n  font-family: 'Bariol','Abril Fatface','Playfair Display','Fira Sans','Vollkorn','ProximaNova-Semibold','Helvetica','sans-serif';\n  font-size: calc(.9 * 1.414 * 1rem);\n  line-height: calc(1.2 * 1.5 * 1rem);\n}\n\n.Footer p, .Footer ul {\n  margin-top: calc(1 * 1rem);\n}\n\n.Footer-top {\n  margin-bottom: 15px;\n}\n\n.Footer-links {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n}\n\n.Footer-links ul {\n  list-style-type: none;\n  padding-left: 5px;\n  margin-bottom: 0;\n}\n\n.Footer-links a, .Footer-bottom a, .Footer-about a {\n  display: inline-block;\n  text-decoration: none;\n  font-family: 'ProximaNova-Semibold','Open Sans','Helvetica','sans-serif';\n  color: #FFBF00;\n  font-weight: 700;\n  cursor: pointer;\n  border-bottom: 3px solid white;\n  -webkit-transition: all 1s;\n       -o-transition: all 1s;\n          transition: all 1s;\n}\n\n.Footer-links a:hover, .Footer-bottom a:hover, .Footer-about a:hover {\n  border-bottom: 3px solid #FFBF00;\n  color: #394453;\n}\n\n.Roots-state-separator {\n  margin: 0 5px;\n  display: inline-block;\n}\n\n.Footer-bottom a {\n  font-family: 'ProximaNova-Semibold','Open Sans','Helvetica','sans-serif';\n}\n\n.Links-connect, .Links-explore {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 1/2 - (30px - 30px * 1/2));\n}\n\n.Links-connect:nth-child(n), .Links-explore:nth-child(n){\n  margin-right: 30px;\n}\n\n.Links-connect:last-child, .Links-explore:last-child{\n  margin-right: 0;\n}\n\n.Links-connect:nth-child(2n), .Links-explore:nth-child(2n){\n  margin-right: 0;\n}\n\n.Footer-bottom {}\n\n.Footer-bottom-contact {}\n\n.Footer-bottom-roots {}\n\n.Roots-wisconsin {}\n\n.Roots-california {}\n\n\n@media only screen and (min-width: 680px){\n  .Footer{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n  }\n  .Footer h6{\n    font-weight: 700;\n  }\n  .Footer-top, .Footer-bottom{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n  }\n  .Footer-top:nth-child(n), .Footer-bottom:nth-child(n){\n    margin-right: 30px;\n  }\n  .Footer-top:last-child, .Footer-bottom:last-child{\n    margin-right: 0;\n  }\n  .Footer-top:nth-child(1n), .Footer-bottom:nth-child(1n){\n    margin-right: 0;\n  }\n  .Footer-bottom p{\n    margin-top: 0;\n  }\n  .Footer-links-container{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 3/5 - (30px - 30px * 3/5));\n  }\n  .Footer-links-container:nth-child(n){\n    margin-right: 30px;\n  }\n  .Footer-links-container:last-child{\n    margin-right: 0;\n  }\n  .Footer-links-container:nth-child(5n){\n    margin-right: 0;\n  }\n  .Footer-bottom-contact, .Footer-bottom-roots{\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 1/2 - (30px - 30px * 1/2));\n  }\n  .Footer-bottom-contact:nth-child(n), .Footer-bottom-roots:nth-child(n){\n    margin-right: 30px;\n  }\n  .Footer-bottom-contact:last-child, .Footer-bottom-roots:last-child{\n    margin-right: 0;\n  }\n  .Footer-bottom-contact:nth-child(2n), .Footer-bottom-roots:nth-child(2n){\n    margin-right: 0;\n  }\n  .Footer-bottom-contact a, .Footer-bottom-contact span, .Footer-bottom-roots a, .Footer-bottom-roots span{\n    font-size: calc(22 / 30 * 100%);\n  }\n  .Roots-wisconsin, .Roots-california, .Roots-state-separator{\n    float: right;\n    line-height: calc(1.5 * 1rem);\n  }\n  .Footer-links{\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 4/7 - (30px - 30px * 4/7));\n  }\n  .Footer-links:nth-child(n){\n    margin-right: 30px;\n  }\n  .Footer-links:last-child{\n    margin-right: 0;\n  }\n  .Footer-links:nth-child(7n){\n    margin-right: 0;\n  }\n  .Footer-links a{\n    font-size: calc(22 / 30 * 100%);\n  }\n  .Footer-about{\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 3/7 - (30px - 30px * 3/7));\n  }\n  .Footer-about:nth-child(n){\n    margin-right: 30px;\n  }\n  .Footer-about:last-child{\n    margin-right: 0;\n  }\n  .Footer-about:nth-child(7n){\n    margin-right: 0;\n  }\n  .Footer-about p{\n    font-size: calc(22 / 30 * 100%);\n    line-height: calc(.8 * 1.5 * 1rem);\n  }\n}\n\n@media only screen and (max-width: 679px){\n  .Footer-links-container{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n  }\n  .Footer-links-container:nth-child(n){\n    margin-right: 30px;\n  }\n  .Footer-links-container:last-child{\n    margin-right: 0;\n  }\n  .Footer-links-container:nth-child(1n){\n    margin-right: 0;\n  }\n  .Footer-top{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: column nowrap;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n  }\n  .Footer{\n    padding: 0 15px;\n  }\n  .Navigation{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0 15px;\n  }\n  .Footer-links, .Footer-about{\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n  }\n  .Footer-links:nth-child(n), .Footer-about:nth-child(n){\n    margin-right: 30px;\n  }\n  .Footer-links:last-child, .Footer-about:last-child{\n    margin-right: 0;\n  }\n  .Footer-links:nth-child(1n), .Footer-about:nth-child(1n){\n    margin-right: 0;\n  }\n  .Footer-links a{\n    font-size: calc(22 / 28 * 100%);\n    color: #5B6675;\n  }\n  .Footer-bottom-contact a, .Footer-bottom-contact span, .Footer-bottom-roots a, .Footer-bottom-roots span{\n    font-size: calc(22 / 28 * 100%);\n  }\n  .Footer-bottom-contact{\n    margin-bottom: 10px;\n  }\n  .Footer-about{\n    margin-bottom: 15px;\n  }\n  .Footer-about p{\n    font-size: calc(22 / 28 * 100%);\n    line-height: calc(.9 * 1.5 * 1rem);\n  }\n}\n\n@media only screen and (min-width: 680px) and (max-width: 999px){\n  .Footer{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    margin: 0 30px;\n  }\n}\n\n@media only screen and (min-width: 1000px) and (max-width: 1259px){\n  .Footer{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 1000px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n@media only screen and (min-width: 1260px){\n  .Footer{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 1260px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}", ""]);

  // exports


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/* Colors */\n\n/* Uses */\n\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n/* Old Media Queries\n$iphone5-screen: 320px;\n$iphone6-screen: 375px;\n$tiny-screen: 500px;\n$extra-small-screen: 600px;\n$small-screen: 768px;\n$small-medium: 940px;\n$medium-screen: 1280px;\n$large-screen: 1440px;\n$x-large-screen: 1600px;\n*/\n\n/* React-starter-kit\n$screen-sm-min: 768px;\n$screen-md-min: 992px;\n$screen-lg-min: 1200px;\n*/\n\n/* Supported Size Ranges: */\n/* handhelds, except-handhelds */\n/* small-screens, except-small-screens, to-small-screens, above-small-screens */\n/* medium-screens, except-medium-screens, above-medium-screens */\n/* large-screens, except-large-screens */\n/* Use: */\n/* @include media(handhelds, large-screens) */\n/* @include media(above-small-screens) {\n     max-width: 960px\n   }\n*/\n\n/* Typesetting variables. Edit these! */ /* in pixels. This would result in 22px on desktop */ /* how large the line height is as a multiple of font size */ /* ADJUST THE FIRST IF YOU CHANGE $baselineHeight\n\n/* Rate of growth for headings */\n/* I actually like this to be slightly smaller then the leading. Makes for tight headings. */\n\n/* Setup */\nhtml {\n  /* Change default typefaces here */\n  font-family: 'ProximaNova-Regular', 'Open Sans', 'Helvetica', 'sans-serif';\n  font-size: calc(22 / 16 * 100%);\n  font-weight: normal;\n  font-style: normal;\n  color: #394453;\n\n  /* Make everything look a little nicer in webkit */\n  -webkit-font-smoothing: antialiased;\n}\n  /* -webkit-text-size-adjust: auto\n  // -moz-text-size-adjust: auto\n  // -ms-text-size-adjust: auto\n  // -o-text-size-adjust: auto\n  // text-size-adjust: auto */\n\n/* Copy & Lists */\np {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n}\nul, ol {\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\nul li, ol li {\n  line-height: calc(1.5 * 1rem);\n}\nul ul, ul ol, ol ul, ol ol {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nblockquote {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\n/* Headings */\nh1, h2, h3, h4, h5, h6 {\n  /* Change heading typefaces here */\n  font-family: 'Bariol', 'Archivo Narrow', 'Source Sans Pro', 'Alegreya', 'Playfair Display', 'Fira Sans', 'Vollkorn', 'ProximaNova-Semibold', 'Helvetica', 'sans-serif';\n  font-weight: bold;\n  font-style: normal;\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n  line-height: calc(1.5 * 1rem);\n}\nh1 {\n  font-size: calc(2.20 * 1.414 * 1rem);\n  font-weight: 700;\n  line-height: calc(2.35 * 1.5 * 1rem);\n  margin-top: calc(0.15 * 1.5 * 1rem);\n}\n\n@media only screen and (min-width: 680px) {\n  h1 {\n    font-size: calc(3 * 1.414 * 1rem);\n    line-height: calc(3 * 1.5 * 1rem);\n    //margin-top: calc(2 * calc(1.5 * 1rem));\n  }\n}\n\n\nh2 {\n  font-size: calc(2 * 1.414 * 1rem);\n  line-height: calc(2 * 1.5 * 1rem);\n  margin-top: calc(2 * 1.5 * 1rem);\n}\n\nh3 {\n  font-size: calc(1 * 1.414 * 1rem);\n}\nh4 {\n  font-size: calc(1.414 / 2 * 1rem);\n}\nh5 {\n  font-size: calc(1.414 / 3 * 1rem);\n}\nh6 {\n  font-size: calc(1.414 / 4 * 1rem);\n}\n\n/* Tables */\ntable {\n  margin-top: calc(1.5 * 1rem);\n  border-spacing: 0px;\n  border-collapse: collapse;\n}\ntable td, table th {\n  padding: 0;\n  line-height: calc(1.5 * 22 - 0px);\n}\n/* Code blocks */\ncode {\n  /* Forces text to constrain to the line-height. Not ideal, but works. */\n  vertical-align: bottom;\n}\n/* Leading paragraph text */\n.lead {\n  font-size: calc(1.414 * 1rem);\n}\n\n/* Hug a the block above you */\n.hug {\n  margin-top: 0;\n}\n\n.Image-advantage {\n  height: 100%;\n  width: auto;\n  -webkit-background-size: cover;\n          background-size: cover;\n  background: url('https://s3-us-west-1.amazonaws.com/phil-portfolio-images/hero.jpg') no-repeat center center;\n}\n\n.Image-container-advantage {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n  height: 360px;\n  overflow: hidden;\n}\n\n.Image-container-advantage:nth-child(n) {\n  margin-right: 30px;\n}\n\n.Image-container-advantage:last-child {\n  margin-right: 0;\n}\n\n.Image-container-advantage:nth-child(1n) {\n  margin-right: 0;\n}\n\n@media only screen and (max-width: 679px) {\n  .Image-container-advantage {\n    border-top-right-radius: 75px;\n  }\n}\n\n\n@media only screen and (min-width: 680px) {\n  .Image-container-advantage {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 9/10 - (30px - 30px * 9/10));\n    border-bottom-right-radius: 75px;\n  }\n  .Image-container-advantage:nth-child(n) {\n    margin-right: 30px;\n  }\n  .Image-container-advantage:last-child {\n    margin-right: 0;\n  }\n  .Image-container-advantage:nth-child(10n) {\n    margin-right: 0;\n  }\n}", ""]);

  // exports


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/* Colors */\n\n/* Uses */\n\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n/* Old Media Queries\n$iphone5-screen: 320px;\n$iphone6-screen: 375px;\n$tiny-screen: 500px;\n$extra-small-screen: 600px;\n$small-screen: 768px;\n$small-medium: 940px;\n$medium-screen: 1280px;\n$large-screen: 1440px;\n$x-large-screen: 1600px;\n*/\n\n/* React-starter-kit\n$screen-sm-min: 768px;\n$screen-md-min: 992px;\n$screen-lg-min: 1200px;\n*/\n\n/* Supported Size Ranges: */\n/* handhelds, except-handhelds */\n/* small-screens, except-small-screens, to-small-screens, above-small-screens */\n/* medium-screens, except-medium-screens, above-medium-screens */\n/* large-screens, except-large-screens */\n/* Use: */\n/* @include media(handhelds, large-screens) */\n/* @include media(above-small-screens) {\n     max-width: 960px\n   }\n*/\n\n/* Typesetting variables. Edit these! */ /* in pixels. This would result in 22px on desktop */ /* how large the line height is as a multiple of font size */ /* ADJUST THE FIRST IF YOU CHANGE $baselineHeight\n\n/* Rate of growth for headings */\n/* I actually like this to be slightly smaller then the leading. Makes for tight headings. */\n\n/* Setup */\nhtml {\n  /* Change default typefaces here */\n  font-family: 'ProximaNova-Regular', 'Open Sans', 'Helvetica', 'sans-serif';\n  font-size: calc(22 / 16 * 100%);\n  font-weight: normal;\n  font-style: normal;\n  color: #394453;\n\n  /* Make everything look a little nicer in webkit */\n  -webkit-font-smoothing: antialiased;\n}\n  /* -webkit-text-size-adjust: auto\n  // -moz-text-size-adjust: auto\n  // -ms-text-size-adjust: auto\n  // -o-text-size-adjust: auto\n  // text-size-adjust: auto */\n\n/* Copy & Lists */\np {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n}\nul, ol {\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\nul li, ol li {\n  line-height: calc(1.5 * 1rem);\n}\nul ul, ul ol, ol ul, ol ol {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nblockquote {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\n/* Headings */\nh1, h2, h3, h4, h5, h6 {\n  /* Change heading typefaces here */\n  font-family: 'Bariol', 'Archivo Narrow', 'Source Sans Pro', 'Alegreya', 'Playfair Display', 'Fira Sans', 'Vollkorn', 'ProximaNova-Semibold', 'Helvetica', 'sans-serif';\n  font-weight: bold;\n  font-style: normal;\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n  line-height: calc(1.5 * 1rem);\n}\nh1 {\n  font-size: calc(2.20 * 1.414 * 1rem);\n  font-weight: 700;\n  line-height: calc(2.35 * 1.5 * 1rem);\n  margin-top: calc(0.15 * 1.5 * 1rem);\n}\n\n@media only screen and (min-width: 680px) {\n  h1 {\n    font-size: calc(3 * 1.414 * 1rem);\n    line-height: calc(3 * 1.5 * 1rem);\n    //margin-top: calc(2 * calc(1.5 * 1rem));\n  }\n}\n\n\nh2 {\n  font-size: calc(2 * 1.414 * 1rem);\n  line-height: calc(2 * 1.5 * 1rem);\n  margin-top: calc(2 * 1.5 * 1rem);\n}\n\nh3 {\n  font-size: calc(1 * 1.414 * 1rem);\n}\nh4 {\n  font-size: calc(1.414 / 2 * 1rem);\n}\nh5 {\n  font-size: calc(1.414 / 3 * 1rem);\n}\nh6 {\n  font-size: calc(1.414 / 4 * 1rem);\n}\n\n/* Tables */\ntable {\n  margin-top: calc(1.5 * 1rem);\n  border-spacing: 0px;\n  border-collapse: collapse;\n}\ntable td, table th {\n  padding: 0;\n  line-height: calc(1.5 * 22 - 0px);\n}\n/* Code blocks */\ncode {\n  /* Forces text to constrain to the line-height. Not ideal, but works. */\n  vertical-align: bottom;\n}\n/* Leading paragraph text */\n.lead {\n  font-size: calc(1.414 * 1rem);\n}\n\n/* Hug a the block above you */\n.hug {\n  margin-top: 0;\n}\n\n.features-icon {\n  display: block;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n  //background-color: #aebccf;\n  width: 60px;\n  height: 60px;\n  background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3ERecent%20Work%3C%2Ftitle%3E%3Cpath%20d%3D%22M37%2036H3c-1.654%200-3%201.346-3%203v18c0%201.654%201.346%203%203%203h34c1.654%200%203-1.346%203-3V39c0-1.654-1.346-3-3-3zm1%2021c0%20.55-.45%201-1%201H3c-.55%200-1-.45-1-1V39c0-.55.45-1%201-1h34c.55%200%201%20.45%201%201v18zM7%2034c1.654%200%203-1.346%203-3V5c0-.15-.04-.29-.1-.42-.003-.008%200-.018-.006-.027l-2-4c-.338-.678-1.45-.678-1.79%200l-2%204c-.003.01%200%20.02-.005.028-.06.13-.1.27-.1.42v26c0%201.654%201.346%203%203%203zM6%206h2v22H6V6zm1%2026c-.55%200-1-.45-1-1v-1h2v1c0%20.55-.45%201-1%201zm.382-28h-.764L7%203.236%207.382%204zM57%200H19c-1.654%200-3%201.346-3%203v30c0%20.552.448%201%201%201s1-.448%201-1V3c0-.55.45-1%201-1h38c.55%200%201%20.45%201%201v34c0%20.552.448%201%201%201s1-.448%201-1V3c0-1.654-1.346-3-3-3zM28%2016c2.206%200%204-1.794%204-4s-1.794-4-4-4-4%201.794-4%204%201.794%204%204%204zm0-6c1.103%200%202%20.897%202%202s-.897%202-2%202-2-.897-2-2%20.897-2%202-2zM10%2042c-2.206%200-4%201.794-4%204s1.794%204%204%204%204-1.794%204-4-1.794-4-4-4zm0%206c-1.103%200-2-.897-2-2s.897-2%202-2%202%20.897%202%202-.897%202-2%202zm31-38h8c.552%200%201-.448%201-1s-.448-1-1-1h-8c-.552%200-1%20.448-1%201s.448%201%201%201zm0%204h10c.552%200%201-.448%201-1s-.448-1-1-1H41c-.552%200-1%20.448-1%201s.448%201%201%201zM25%2024h8c.552%200%201-.448%201-1s-.448-1-1-1h-8c-.552%200-1%20.448-1%201s.448%201%201%201zm0%206h14c.552%200%201-.448%201-1s-.448-1-1-1H25c-.552%200-1%20.448-1%201s.448%201%201%201zm0%204h8c.552%200%201-.448%201-1s-.448-1-1-1h-8c-.552%200-1%20.448-1%201s.448%201%201%201zm26-6h-8c-.552%200-1%20.448-1%201s.448%201%201%201h8c.552%200%201-.448%201-1s-.448-1-1-1zm-15%205c0%20.552.448%201%201%201h12c.552%200%201-.448%201-1s-.448-1-1-1H37c-.552%200-1%20.448-1%201zM19%2044h6c.552%200%201-.448%201-1s-.448-1-1-1h-6c-.552%200-1%20.448-1%201s.448%201%201%201zm0%204h8c.552%200%201-.448%201-1s-.448-1-1-1h-8c-.552%200-1%20.448-1%201s.448%201%201%201zm14%204H19c-.552%200-1%20.448-1%201s.448%201%201%201h14c.552%200%201-.448%201-1s-.448-1-1-1zm24-12h-6c-1.654%200-3%201.346-3%203v14c0%201.654%201.346%203%203%203h6c1.654%200%203-1.346%203-3V43c0-1.654-1.346-3-3-3zm1%2017c0%20.55-.45%201-1%201h-6c-.55%200-1-.45-1-1V43c0-.55.45-1%201-1h6c.55%200%201%20.45%201%201v14zm-13%201h-2c-.552%200-1%20.448-1%201s.448%201%201%201h2c.552%200%201-.448%201-1s-.448-1-1-1zm6-22h-8c-.552%200-1%20.448-1%201s.448%201%201%201h8c.552%200%201-.448%201-1s-.448-1-1-1zm-6%204h-2c-.552%200-1%20.448-1%201s.448%201%201%201h2c.552%200%201-.448%201-1s-.448-1-1-1zm0%204h-2c-.552%200-1%20.448-1%201s.448%201%201%201h2c.552%200%201-.448%201-1s-.448-1-1-1z%22%20fill%3D%22%23AEBCCE%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E');\n  //-webkit-mask-image: url('data:image/svg+xml;charset=utf-8,<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><title>Recent Work</title><path d=\"M37 36H3c-1.654 0-3 1.346-3 3v18c0 1.654 1.346 3 3 3h34c1.654 0 3-1.346 3-3V39c0-1.654-1.346-3-3-3zm1 21c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V39c0-.55.45-1 1-1h34c.55 0 1 .45 1 1v18zM7 34c1.654 0 3-1.346 3-3V5c0-.15-.04-.29-.1-.42-.003-.008 0-.018-.006-.027l-2-4c-.338-.678-1.45-.678-1.79 0l-2 4c-.003.01 0 .02-.005.028-.06.13-.1.27-.1.42v26c0 1.654 1.346 3 3 3zM6 6h2v22H6V6zm1 26c-.55 0-1-.45-1-1v-1h2v1c0 .55-.45 1-1 1zm.382-28h-.764L7 3.236 7.382 4zM57 0H19c-1.654 0-3 1.346-3 3v30c0 .552.448 1 1 1s1-.448 1-1V3c0-.55.45-1 1-1h38c.55 0 1 .45 1 1v34c0 .552.448 1 1 1s1-.448 1-1V3c0-1.654-1.346-3-3-3zM28 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM10 42c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm31-38h8c.552 0 1-.448 1-1s-.448-1-1-1h-8c-.552 0-1 .448-1 1s.448 1 1 1zm0 4h10c.552 0 1-.448 1-1s-.448-1-1-1H41c-.552 0-1 .448-1 1s.448 1 1 1zM25 24h8c.552 0 1-.448 1-1s-.448-1-1-1h-8c-.552 0-1 .448-1 1s.448 1 1 1zm0 6h14c.552 0 1-.448 1-1s-.448-1-1-1H25c-.552 0-1 .448-1 1s.448 1 1 1zm0 4h8c.552 0 1-.448 1-1s-.448-1-1-1h-8c-.552 0-1 .448-1 1s.448 1 1 1zm26-6h-8c-.552 0-1 .448-1 1s.448 1 1 1h8c.552 0 1-.448 1-1s-.448-1-1-1zm-15 5c0 .552.448 1 1 1h12c.552 0 1-.448 1-1s-.448-1-1-1H37c-.552 0-1 .448-1 1zM19 44h6c.552 0 1-.448 1-1s-.448-1-1-1h-6c-.552 0-1 .448-1 1s.448 1 1 1zm0 4h8c.552 0 1-.448 1-1s-.448-1-1-1h-8c-.552 0-1 .448-1 1s.448 1 1 1zm14 4H19c-.552 0-1 .448-1 1s.448 1 1 1h14c.552 0 1-.448 1-1s-.448-1-1-1zm24-12h-6c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h6c1.654 0 3-1.346 3-3V43c0-1.654-1.346-3-3-3zm1 17c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1V43c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v14zm-13 1h-2c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1zm6-22h-8c-.552 0-1 .448-1 1s.448 1 1 1h8c.552 0 1-.448 1-1s-.448-1-1-1zm-6 4h-2c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1zm0 4h-2c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1z\" fill=\"#AEBCCE\" fill-rule=\"evenodd\"/></svg>');\n  //mask-image: url('data:image/svg+xml;charset=utf-8,<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><title>Recent Work</title><path d=\"M37 36H3c-1.654 0-3 1.346-3 3v18c0 1.654 1.346 3 3 3h34c1.654 0 3-1.346 3-3V39c0-1.654-1.346-3-3-3zm1 21c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V39c0-.55.45-1 1-1h34c.55 0 1 .45 1 1v18zM7 34c1.654 0 3-1.346 3-3V5c0-.15-.04-.29-.1-.42-.003-.008 0-.018-.006-.027l-2-4c-.338-.678-1.45-.678-1.79 0l-2 4c-.003.01 0 .02-.005.028-.06.13-.1.27-.1.42v26c0 1.654 1.346 3 3 3zM6 6h2v22H6V6zm1 26c-.55 0-1-.45-1-1v-1h2v1c0 .55-.45 1-1 1zm.382-28h-.764L7 3.236 7.382 4zM57 0H19c-1.654 0-3 1.346-3 3v30c0 .552.448 1 1 1s1-.448 1-1V3c0-.55.45-1 1-1h38c.55 0 1 .45 1 1v34c0 .552.448 1 1 1s1-.448 1-1V3c0-1.654-1.346-3-3-3zM28 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM10 42c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm31-38h8c.552 0 1-.448 1-1s-.448-1-1-1h-8c-.552 0-1 .448-1 1s.448 1 1 1zm0 4h10c.552 0 1-.448 1-1s-.448-1-1-1H41c-.552 0-1 .448-1 1s.448 1 1 1zM25 24h8c.552 0 1-.448 1-1s-.448-1-1-1h-8c-.552 0-1 .448-1 1s.448 1 1 1zm0 6h14c.552 0 1-.448 1-1s-.448-1-1-1H25c-.552 0-1 .448-1 1s.448 1 1 1zm0 4h8c.552 0 1-.448 1-1s-.448-1-1-1h-8c-.552 0-1 .448-1 1s.448 1 1 1zm26-6h-8c-.552 0-1 .448-1 1s.448 1 1 1h8c.552 0 1-.448 1-1s-.448-1-1-1zm-15 5c0 .552.448 1 1 1h12c.552 0 1-.448 1-1s-.448-1-1-1H37c-.552 0-1 .448-1 1zM19 44h6c.552 0 1-.448 1-1s-.448-1-1-1h-6c-.552 0-1 .448-1 1s.448 1 1 1zm0 4h8c.552 0 1-.448 1-1s-.448-1-1-1h-8c-.552 0-1 .448-1 1s.448 1 1 1zm14 4H19c-.552 0-1 .448-1 1s.448 1 1 1h14c.552 0 1-.448 1-1s-.448-1-1-1zm24-12h-6c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h6c1.654 0 3-1.346 3-3V43c0-1.654-1.346-3-3-3zm1 17c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1V43c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v14zm-13 1h-2c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1zm6-22h-8c-.552 0-1 .448-1 1s.448 1 1 1h8c.552 0 1-.448 1-1s-.448-1-1-1zm-6 4h-2c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1zm0 4h-2c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1z\" fill=\"#AEBCCE\" fill-rule=\"evenodd\"/></svg>');\n}\n\n.features-icon:nth-child(n) {\n  margin-right: 30px;\n}\n\n.features-icon:last-child {\n  margin-right: 0;\n}\n\n.features-icon:nth-child(1n) {\n  margin-right: 0;\n}\n\n.features-title {\n  font-family: 'Bariol','Abril Fatface','Playfair Display','Fira Sans','Vollkorn','ProximaNova-Semibold','Helvetica','sans-serif';\n  font-weight: 700;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n  font-size: calc(1.4 * 1.414 * 1rem);\n  line-height: calc(1.4 * 1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem / 2);\n}\n\n.features-title:nth-child(n) {\n  margin-right: 30px;\n}\n\n.features-title:last-child {\n  margin-right: 0;\n}\n\n.features-title:nth-child(1n) {\n  margin-right: 0;\n}\n\n.Title {\n  margin-bottom: 50px;\n}\n\n@media only screen and (max-width: 679px) {\n  .Title {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0 15px;\n  }\n}\n\n@media only screen and (min-width: 680px) and (max-width: 999px) {\n  .Title {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    margin: 0 30px;\n    display: flex;\n    -webkit-flex-flow: column nowrap;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n  }\n}\n\n@media only screen and (min-width: 1000px) and (max-width: 1259px) {\n  .Title {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 1000px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n@media only screen and (min-width: 1260px) {\n  .Title {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 1260px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}", ""]);

  // exports


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/* Colors */\n\n/* Uses */\n\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n/* Old Media Queries\n$iphone5-screen: 320px;\n$iphone6-screen: 375px;\n$tiny-screen: 500px;\n$extra-small-screen: 600px;\n$small-screen: 768px;\n$small-medium: 940px;\n$medium-screen: 1280px;\n$large-screen: 1440px;\n$x-large-screen: 1600px;\n*/\n\n/* React-starter-kit\n$screen-sm-min: 768px;\n$screen-md-min: 992px;\n$screen-lg-min: 1200px;\n*/\n\n/* Supported Size Ranges: */\n/* handhelds, except-handhelds */\n/* small-screens, except-small-screens, to-small-screens, above-small-screens */\n/* medium-screens, except-medium-screens, above-medium-screens */\n/* large-screens, except-large-screens */\n/* Use: */\n/* @include media(handhelds, large-screens) */\n/* @include media(above-small-screens) {\n     max-width: 960px\n   }\n*/\n\n/* Typesetting variables. Edit these! */ /* in pixels. This would result in 22px on desktop */ /* how large the line height is as a multiple of font size */ /* ADJUST THE FIRST IF YOU CHANGE $baselineHeight\n\n/* Rate of growth for headings */\n/* I actually like this to be slightly smaller then the leading. Makes for tight headings. */\n\n/* Setup */\nhtml {\n  /* Change default typefaces here */\n  font-family: 'ProximaNova-Regular', 'Open Sans', 'Helvetica', 'sans-serif';\n  font-size: calc(22 / 16 * 100%);\n  font-weight: normal;\n  font-style: normal;\n  color: #394453;\n\n  /* Make everything look a little nicer in webkit */\n  -webkit-font-smoothing: antialiased;\n}\n  /* -webkit-text-size-adjust: auto\n  // -moz-text-size-adjust: auto\n  // -ms-text-size-adjust: auto\n  // -o-text-size-adjust: auto\n  // text-size-adjust: auto */\n\n/* Copy & Lists */\np {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n}\nul, ol {\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\nul li, ol li {\n  line-height: calc(1.5 * 1rem);\n}\nul ul, ul ol, ol ul, ol ol {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nblockquote {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\n/* Headings */\nh1, h2, h3, h4, h5, h6 {\n  /* Change heading typefaces here */\n  font-family: 'Bariol', 'Archivo Narrow', 'Source Sans Pro', 'Alegreya', 'Playfair Display', 'Fira Sans', 'Vollkorn', 'ProximaNova-Semibold', 'Helvetica', 'sans-serif';\n  font-weight: bold;\n  font-style: normal;\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n  line-height: calc(1.5 * 1rem);\n}\nh1 {\n  font-size: calc(2.20 * 1.414 * 1rem);\n  font-weight: 700;\n  line-height: calc(2.35 * 1.5 * 1rem);\n  margin-top: calc(0.15 * 1.5 * 1rem);\n}\n\n@media only screen and (min-width: 680px) {\n  h1 {\n    font-size: calc(3 * 1.414 * 1rem);\n    line-height: calc(3 * 1.5 * 1rem);\n    //margin-top: calc(2 * calc(1.5 * 1rem));\n  }\n}\n\n\nh2 {\n  font-size: calc(2 * 1.414 * 1rem);\n  line-height: calc(2 * 1.5 * 1rem);\n  margin-top: calc(2 * 1.5 * 1rem);\n}\n\nh3 {\n  font-size: calc(1 * 1.414 * 1rem);\n}\nh4 {\n  font-size: calc(1.414 / 2 * 1rem);\n}\nh5 {\n  font-size: calc(1.414 / 3 * 1rem);\n}\nh6 {\n  font-size: calc(1.414 / 4 * 1rem);\n}\n\n/* Tables */\ntable {\n  margin-top: calc(1.5 * 1rem);\n  border-spacing: 0px;\n  border-collapse: collapse;\n}\ntable td, table th {\n  padding: 0;\n  line-height: calc(1.5 * 22 - 0px);\n}\n/* Code blocks */\ncode {\n  /* Forces text to constrain to the line-height. Not ideal, but works. */\n  vertical-align: bottom;\n}\n/* Leading paragraph text */\n.lead {\n  font-size: calc(1.414 * 1rem);\n}\n\n/* Hug a the block above you */\n.hug {\n  margin-top: 0;\n}\n\n.Features {\n  margin-top: 100px;\n}", ""]);

  // exports


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/* Colors */\n\n/* Uses */\n\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n/* Old Media Queries\n$iphone5-screen: 320px;\n$iphone6-screen: 375px;\n$tiny-screen: 500px;\n$extra-small-screen: 600px;\n$small-screen: 768px;\n$small-medium: 940px;\n$medium-screen: 1280px;\n$large-screen: 1440px;\n$x-large-screen: 1600px;\n*/\n\n/* React-starter-kit\n$screen-sm-min: 768px;\n$screen-md-min: 992px;\n$screen-lg-min: 1200px;\n*/\n\n/* Supported Size Ranges: */\n/* handhelds, except-handhelds */\n/* small-screens, except-small-screens, to-small-screens, above-small-screens */\n/* medium-screens, except-medium-screens, above-medium-screens */\n/* large-screens, except-large-screens */\n/* Use: */\n/* @include media(handhelds, large-screens) */\n/* @include media(above-small-screens) {\n     max-width: 960px\n   }\n*/\n/* Typesetting variables. Edit these! */ /* in pixels. This would result in 22px on desktop */ /* how large the line height is as a multiple of font size */ /* ADJUST THE FIRST IF YOU CHANGE $baselineHeight\n\n/* Rate of growth for headings */\n/* I actually like this to be slightly smaller then the leading. Makes for tight headings. */\n\n/* Setup */\nhtml {\n  /* Change default typefaces here */\n  font-family: 'ProximaNova-Regular', 'Open Sans', 'Helvetica', 'sans-serif';\n  font-size: calc(22 / 16 * 100%);\n  font-weight: normal;\n  font-style: normal;\n  color: #394453;\n\n  /* Make everything look a little nicer in webkit */\n  -webkit-font-smoothing: antialiased;\n}\n  /* -webkit-text-size-adjust: auto\n  // -moz-text-size-adjust: auto\n  // -ms-text-size-adjust: auto\n  // -o-text-size-adjust: auto\n  // text-size-adjust: auto */\n\n/* Copy & Lists */\np {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n}\nul, ol {\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\nul li, ol li {\n  line-height: calc(1.5 * 1rem);\n}\nul ul, ul ol, ol ul, ol ol {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nblockquote {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\n/* Headings */\nh1, h2, h3, h4, h5, h6 {\n  /* Change heading typefaces here */\n  font-family: 'Bariol', 'Archivo Narrow', 'Source Sans Pro', 'Alegreya', 'Playfair Display', 'Fira Sans', 'Vollkorn', 'ProximaNova-Semibold', 'Helvetica', 'sans-serif';\n  font-weight: bold;\n  font-style: normal;\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n  line-height: calc(1.5 * 1rem);\n}\nh1 {\n  font-size: calc(2.20 * 1.414 * 1rem);\n  font-weight: 700;\n  line-height: calc(2.35 * 1.5 * 1rem);\n  margin-top: calc(0.15 * 1.5 * 1rem);\n}\n\n@media only screen and (min-width: 680px) {\n  h1 {\n    font-size: calc(3 * 1.414 * 1rem);\n    line-height: calc(3 * 1.5 * 1rem);\n    //margin-top: calc(2 * calc(1.5 * 1rem));\n  }\n}\n\n\nh2 {\n  font-size: calc(2 * 1.414 * 1rem);\n  line-height: calc(2 * 1.5 * 1rem);\n  margin-top: calc(2 * 1.5 * 1rem);\n}\n\nh3 {\n  font-size: calc(1 * 1.414 * 1rem);\n}\nh4 {\n  font-size: calc(1.414 / 2 * 1rem);\n}\nh5 {\n  font-size: calc(1.414 / 3 * 1rem);\n}\nh6 {\n  font-size: calc(1.414 / 4 * 1rem);\n}\n\n/* Tables */\ntable {\n  margin-top: calc(1.5 * 1rem);\n  border-spacing: 0px;\n  border-collapse: collapse;\n}\ntable td, table th {\n  padding: 0;\n  line-height: calc(1.5 * 22 - 0px);\n}\n/* Code blocks */\ncode {\n  /* Forces text to constrain to the line-height. Not ideal, but works. */\n  vertical-align: bottom;\n}\n/* Leading paragraph text */\n.lead {\n  font-size: calc(1.414 * 1rem);\n}\n\n/* Hug a the block above you */\n.hug {\n  margin-top: 0;\n}\n\n.Hero-list {\n  margin-top: 75px;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n}\n\n.Hero-list:nth-child(n) {\n  margin-right: 30px;\n}\n\n.Hero-list:last-child {\n  margin-right: 0;\n}\n\n.Hero-list:nth-child(1n) {\n  margin-right: 0;\n}\n\n@media only screen and (min-width: 680px) {\n  .Hero-list {\n    margin-left: 60px;\n  }\n}\n\n@media only screen and (max-width: 679px) {\n  .Hero-list {\n    //background-color: #FDEEBD;\n  }\n}\n\n.List-item {\n  position: relative;\n}\n\n.List-item:before {\n  font-size: calc(22 / 34 * 100%);\n  font-style: italic;\n  color: #7F90A6;\n  position: absolute;\n  left: -55px;\n  top: 10px;\n}\n\n.List-item:nth-child(1):before {\n  content: 'Fig A';\n}\n\n.List-item:nth-child(2):before {\n  content: 'Fig B';\n}\n\n.List-item:nth-child(3):before {\n  content: 'Fig C';\n}\n\n.List-item:nth-child(4):before {\n  content: 'Fig D';\n}\n\n@media only screen and (max-width: 679px) {\n  .List-item {\n    margin-bottom: 20px;\n  }\n  .Item-header {\n    color: #394453;\n  }\n}\n\n@media only screen and (min-width: 680px) {\n  .List-item {\n    margin-bottom: 25px;\n  }\n  .Item-header {\n    color: #FFBF00;\n  }\n}\n\n.Item-header {\n  font-family: 'Bariol', 'Archivo Narrow', 'Source Sans Pro', 'Alegreya', 'Playfair Display', 'Fira Sans', 'Vollkorn', 'ProximaNova-Semibold', 'Helvetica', 'sans-serif';\n  font-size: calc(.75 * 1.414 * 1rem);\n  font-weight: bold;\n  line-height: calc(1 * 1.5 * 1rem);\n  margin-top: 0;\n}\n\n.Item-sub, .Item-sub-list {\n  font-size: calc(22 / 28 * 100%);\n  line-height: calc(.9 * 1.5 * 1rem);\n  color: #5B6675;\n}\n\n@media only screen and (min-width: 680px) {\n  .Item-sub, .Item-sub-list {\n    margin-top: calc(1.5 * 1rem / 24);\n  }\n}\n\n@media only screen and (max-width: 679px) {\n  .Item-header {\n    font-size: calc(.85 * 1.414 * 1rem);\n  }\n  .Item-sub, .Item-sub-list {\n    margin-top: calc(1.5 * 1rem / 12);\n  }\n  .Non-mobile {\n    display: none;\n  }\n}\n\n\n.Item-sub-list {\n  padding-left: 0;\n}\n\n\n.Item-sub-list li {\n  display: inline-block;\n  margin-right: 10px;\n  color: #7F90A6;\n}\n\n\n.Item-sub-list a {\n  border-bottom: 3px solid white;\n  color: #FFBF00;\n  cursor: pointer;\n  font-size: calc(22 / 22 * 100%);\n  font-weight: normal;\n  text-decoration: none;\n  -webkit-transition: all 1s;\n       -o-transition: all 1s;\n          transition: all 1s;\n}\n\n\n.Item-sub-list a:hover {\n  border-bottom: 3px solid #FFBF00;\n  color: #394453;\n}\n", ""]);

  // exports


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/* Colors */\n\n/* Uses */\n\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n/* Old Media Queries\n$iphone5-screen: 320px;\n$iphone6-screen: 375px;\n$tiny-screen: 500px;\n$extra-small-screen: 600px;\n$small-screen: 768px;\n$small-medium: 940px;\n$medium-screen: 1280px;\n$large-screen: 1440px;\n$x-large-screen: 1600px;\n*/\n\n/* React-starter-kit\n$screen-sm-min: 768px;\n$screen-md-min: 992px;\n$screen-lg-min: 1200px;\n*/\n\n/* Supported Size Ranges: */\n/* handhelds, except-handhelds */\n/* small-screens, except-small-screens, to-small-screens, above-small-screens */\n/* medium-screens, except-medium-screens, above-medium-screens */\n/* large-screens, except-large-screens */\n/* Use: */\n/* @include media(handhelds, large-screens) */\n/* @include media(above-small-screens) {\n     max-width: 960px\n   }\n*/\n\n/* Typesetting variables. Edit these! */ /* in pixels. This would result in 22px on desktop */ /* how large the line height is as a multiple of font size */ /* ADJUST THE FIRST IF YOU CHANGE $baselineHeight\n\n/* Rate of growth for headings */\n/* I actually like this to be slightly smaller then the leading. Makes for tight headings. */\n\n/* Setup */\nhtml {\n  /* Change default typefaces here */\n  font-family: 'ProximaNova-Regular', 'Open Sans', 'Helvetica', 'sans-serif';\n  font-size: calc(22 / 16 * 100%);\n  font-weight: normal;\n  font-style: normal;\n  color: #394453;\n\n  /* Make everything look a little nicer in webkit */\n  -webkit-font-smoothing: antialiased;\n}\n  /* -webkit-text-size-adjust: auto\n  // -moz-text-size-adjust: auto\n  // -ms-text-size-adjust: auto\n  // -o-text-size-adjust: auto\n  // text-size-adjust: auto */\n\n/* Copy & Lists */\np {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n}\nul, ol {\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\nul li, ol li {\n  line-height: calc(1.5 * 1rem);\n}\nul ul, ul ol, ol ul, ol ol {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nblockquote {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\n/* Headings */\nh1, h2, h3, h4, h5, h6 {\n  /* Change heading typefaces here */\n  font-family: 'Bariol', 'Archivo Narrow', 'Source Sans Pro', 'Alegreya', 'Playfair Display', 'Fira Sans', 'Vollkorn', 'ProximaNova-Semibold', 'Helvetica', 'sans-serif';\n  font-weight: bold;\n  font-style: normal;\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n  line-height: calc(1.5 * 1rem);\n}\nh1 {\n  font-size: calc(2.20 * 1.414 * 1rem);\n  font-weight: 700;\n  line-height: calc(2.35 * 1.5 * 1rem);\n  margin-top: calc(0.15 * 1.5 * 1rem);\n}\n\n@media only screen and (min-width: 680px){\n  h1{\n    font-size: calc(3 * 1.414 * 1rem);\n    line-height: calc(3 * 1.5 * 1rem);\n    //margin-top: calc(2 * calc(1.5 * 1rem));\n  }\n}\n\n\nh2 {\n  font-size: calc(2 * 1.414 * 1rem);\n  line-height: calc(2 * 1.5 * 1rem);\n  margin-top: calc(2 * 1.5 * 1rem);\n}\n\nh3 {\n  font-size: calc(1 * 1.414 * 1rem);\n}\nh4 {\n  font-size: calc(1.414 / 2 * 1rem);\n}\nh5 {\n  font-size: calc(1.414 / 3 * 1rem);\n}\nh6 {\n  font-size: calc(1.414 / 4 * 1rem);\n}\n\n/* Tables */\ntable {\n  margin-top: calc(1.5 * 1rem);\n  border-spacing: 0px;\n  border-collapse: collapse;\n}\ntable td, table th {\n  padding: 0;\n  line-height: calc(1.5 * 22 - 0px);\n}\n/* Code blocks */\ncode {\n  /* Forces text to constrain to the line-height. Not ideal, but works. */\n  vertical-align: bottom;\n}\n/* Leading paragraph text */\n.lead {\n  font-size: calc(1.414 * 1rem);\n}\n\n/* Hug a the block above you */\n.hug {\n  margin-top: 0;\n}\n\n\n.section-icon {\n  display: block;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n  //background-color: #aebccf;\n  width: 60px;\n  height: 60px;\n  background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EThe%20up%20and%20up%3C%2Ftitle%3E%3Cpath%20d%3D%22M55%200H13c-2.71%200-5%202.29-5%205v48c0%20.552.448%201%201%201s1-.448%201-1V5c0-1.598%201.402-3%203-3h42c1.654%200%203%201.346%203%203v34c0%20.552.448%201%201%201s1-.448%201-1V5c0-2.757-2.243-5-5-5zM41%2058H9c-4.45%200-7-2.55-7-7V13c0-1.654%201.346-3%203-3%20.552%200%201-.448%201-1s-.448-1-1-1c-2.757%200-5%202.243-5%205v38c0%205.55%203.45%209%209%209h32c.552%200%201-.448%201-1s-.448-1-1-1zM19%2038h10c.552%200%201-.448%201-1s-.448-1-1-1H19c-.552%200-1%20.448-1%201s.448%201%201%201zm0-26h16c.552%200%201-.448%201-1s-.448-1-1-1H19c-.552%200-1%20.448-1%201s.448%201%201%201zm30%200c.552%200%201-.448%201-1s-.448-1-1-1h-4c-.552%200-1%20.448-1%201s.448%201%201%201h4zM19%2044h6c.552%200%201-.448%201-1s-.448-1-1-1h-6c-.552%200-1%20.448-1%201s.448%201%201%201zm0%206h6c.552%200%201-.448%201-1s-.448-1-1-1h-6c-.552%200-1%20.448-1%201s.448%201%201%201zm-1-19c0%20.552.448%201%201%201h6c.265%200%20.52-.105.707-.293L32%2025.414l2.293%202.293c.39.39%201.023.39%201.414%200L40%2023.414l4.293%204.293c.39.39%201.023.39%201.414%200%20.39-.39.39-1.023%200-1.414l-5-5c-.39-.39-1.023-.39-1.414%200L35%2025.586l-2.293-2.293c-.39-.39-1.023-.39-1.414%200L24.586%2030H20V18h28v12H31c-.552%200-1%20.448-1%201s.448%201%201%201h18c.552%200%201-.448%201-1V17c0-.552-.448-1-1-1H19c-.552%200-1%20.448-1%201v14zm4-9c0%201.103.897%202%202%202s2-.897%202-2-.897-2-2-2-2%20.897-2%202zM5%2014c-.552%200-1%20.448-1%201v34c0%20.552.448%201%201%201s1-.448%201-1V15c0-.552-.448-1-1-1zm44%2020c-.552%200-1%20.448-1%201v4c0%20.552.448%201%201%201s1-.448%201-1v-4c0-.552-.448-1-1-1zm-5%203v2c0%20.553.448%201%201%201s1-.447%201-1v-2c0-.552-.448-1-1-1s-1%20.448-1%201zm10%202v-2c0-.552-.448-1-1-1s-1%20.448-1%201v2c0%20.553.448%201%201%201s1-.447%201-1zm5%203H33c-.552%200-1%20.448-1%201v4c0%202.897%202.103%205%205%205h1.764c1.605%204.09%205.583%207%2010.236%207%206.065%200%2011-4.935%2011-11v-5c0-.552-.448-1-1-1zm-22%208c-1.794%200-3-1.206-3-3v-3h4v4c0%20.684.07%201.35.19%202H37zm21-2c0%204.962-4.038%209-9%209s-9-4.038-9-9v-4h18v4z%22%20fill%3D%22%23AEBCCE%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E');\n  //-webkit-mask-image: url('data:image/svg+xml;charset=utf-8,<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><title>The up and up</title><path d=\"M55 0H13c-2.71 0-5 2.29-5 5v48c0 .552.448 1 1 1s1-.448 1-1V5c0-1.598 1.402-3 3-3h42c1.654 0 3 1.346 3 3v34c0 .552.448 1 1 1s1-.448 1-1V5c0-2.757-2.243-5-5-5zM41 58H9c-4.45 0-7-2.55-7-7V13c0-1.654 1.346-3 3-3 .552 0 1-.448 1-1s-.448-1-1-1c-2.757 0-5 2.243-5 5v38c0 5.55 3.45 9 9 9h32c.552 0 1-.448 1-1s-.448-1-1-1zM19 38h10c.552 0 1-.448 1-1s-.448-1-1-1H19c-.552 0-1 .448-1 1s.448 1 1 1zm0-26h16c.552 0 1-.448 1-1s-.448-1-1-1H19c-.552 0-1 .448-1 1s.448 1 1 1zm30 0c.552 0 1-.448 1-1s-.448-1-1-1h-4c-.552 0-1 .448-1 1s.448 1 1 1h4zM19 44h6c.552 0 1-.448 1-1s-.448-1-1-1h-6c-.552 0-1 .448-1 1s.448 1 1 1zm0 6h6c.552 0 1-.448 1-1s-.448-1-1-1h-6c-.552 0-1 .448-1 1s.448 1 1 1zm-1-19c0 .552.448 1 1 1h6c.265 0 .52-.105.707-.293L32 25.414l2.293 2.293c.39.39 1.023.39 1.414 0L40 23.414l4.293 4.293c.39.39 1.023.39 1.414 0 .39-.39.39-1.023 0-1.414l-5-5c-.39-.39-1.023-.39-1.414 0L35 25.586l-2.293-2.293c-.39-.39-1.023-.39-1.414 0L24.586 30H20V18h28v12H31c-.552 0-1 .448-1 1s.448 1 1 1h18c.552 0 1-.448 1-1V17c0-.552-.448-1-1-1H19c-.552 0-1 .448-1 1v14zm4-9c0 1.103.897 2 2 2s2-.897 2-2-.897-2-2-2-2 .897-2 2zM5 14c-.552 0-1 .448-1 1v34c0 .552.448 1 1 1s1-.448 1-1V15c0-.552-.448-1-1-1zm44 20c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1s1-.448 1-1v-4c0-.552-.448-1-1-1zm-5 3v2c0 .553.448 1 1 1s1-.447 1-1v-2c0-.552-.448-1-1-1s-1 .448-1 1zm10 2v-2c0-.552-.448-1-1-1s-1 .448-1 1v2c0 .553.448 1 1 1s1-.447 1-1zm5 3H33c-.552 0-1 .448-1 1v4c0 2.897 2.103 5 5 5h1.764c1.605 4.09 5.583 7 10.236 7 6.065 0 11-4.935 11-11v-5c0-.552-.448-1-1-1zm-22 8c-1.794 0-3-1.206-3-3v-3h4v4c0 .684.07 1.35.19 2H37zm21-2c0 4.962-4.038 9-9 9s-9-4.038-9-9v-4h18v4z\" fill=\"#AEBCCE\" fill-rule=\"evenodd\"/></svg>');\n  //mask-image: url('data:image/svg+xml;charset=utf-8,<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><title>The up and up</title><path d=\"M55 0H13c-2.71 0-5 2.29-5 5v48c0 .552.448 1 1 1s1-.448 1-1V5c0-1.598 1.402-3 3-3h42c1.654 0 3 1.346 3 3v34c0 .552.448 1 1 1s1-.448 1-1V5c0-2.757-2.243-5-5-5zM41 58H9c-4.45 0-7-2.55-7-7V13c0-1.654 1.346-3 3-3 .552 0 1-.448 1-1s-.448-1-1-1c-2.757 0-5 2.243-5 5v38c0 5.55 3.45 9 9 9h32c.552 0 1-.448 1-1s-.448-1-1-1zM19 38h10c.552 0 1-.448 1-1s-.448-1-1-1H19c-.552 0-1 .448-1 1s.448 1 1 1zm0-26h16c.552 0 1-.448 1-1s-.448-1-1-1H19c-.552 0-1 .448-1 1s.448 1 1 1zm30 0c.552 0 1-.448 1-1s-.448-1-1-1h-4c-.552 0-1 .448-1 1s.448 1 1 1h4zM19 44h6c.552 0 1-.448 1-1s-.448-1-1-1h-6c-.552 0-1 .448-1 1s.448 1 1 1zm0 6h6c.552 0 1-.448 1-1s-.448-1-1-1h-6c-.552 0-1 .448-1 1s.448 1 1 1zm-1-19c0 .552.448 1 1 1h6c.265 0 .52-.105.707-.293L32 25.414l2.293 2.293c.39.39 1.023.39 1.414 0L40 23.414l4.293 4.293c.39.39 1.023.39 1.414 0 .39-.39.39-1.023 0-1.414l-5-5c-.39-.39-1.023-.39-1.414 0L35 25.586l-2.293-2.293c-.39-.39-1.023-.39-1.414 0L24.586 30H20V18h28v12H31c-.552 0-1 .448-1 1s.448 1 1 1h18c.552 0 1-.448 1-1V17c0-.552-.448-1-1-1H19c-.552 0-1 .448-1 1v14zm4-9c0 1.103.897 2 2 2s2-.897 2-2-.897-2-2-2-2 .897-2 2zM5 14c-.552 0-1 .448-1 1v34c0 .552.448 1 1 1s1-.448 1-1V15c0-.552-.448-1-1-1zm44 20c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1s1-.448 1-1v-4c0-.552-.448-1-1-1zm-5 3v2c0 .553.448 1 1 1s1-.447 1-1v-2c0-.552-.448-1-1-1s-1 .448-1 1zm10 2v-2c0-.552-.448-1-1-1s-1 .448-1 1v2c0 .553.448 1 1 1s1-.447 1-1zm5 3H33c-.552 0-1 .448-1 1v4c0 2.897 2.103 5 5 5h1.764c1.605 4.09 5.583 7 10.236 7 6.065 0 11-4.935 11-11v-5c0-.552-.448-1-1-1zm-22 8c-1.794 0-3-1.206-3-3v-3h4v4c0 .684.07 1.35.19 2H37zm21-2c0 4.962-4.038 9-9 9s-9-4.038-9-9v-4h18v4z\" fill=\"#AEBCCE\" fill-rule=\"evenodd\"/></svg>');\n}\n\n\n.section-icon:nth-child(n){\n  margin-right: 30px;\n}\n\n\n.section-icon:last-child{\n  margin-right: 0;\n}\n\n\n.section-icon:nth-child(1n){\n  margin-right: 0;\n}\n\n.section-title {\n  font-family: 'Bariol','Abril Fatface','Playfair Display','Fira Sans','Vollkorn','ProximaNova-Semibold','Helvetica','sans-serif';\n  font-weight: 700;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n  font-size: calc(1.4 * 1.414 * 1rem);\n  line-height: calc(1.4 * 1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem / 2);\n}\n\n.section-title:nth-child(n){\n  margin-right: 30px;\n}\n\n.section-title:last-child{\n  margin-right: 0;\n}\n\n.section-title:nth-child(1n){\n  margin-right: 0;\n}\n\n.section-content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n}\n\n@media only screen and (max-width: 679px){\n  .Upup{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0 15px;\n    margin-top: 50px;\n  }\n}\n\n@media only screen and (min-width: 680px){\n  .section-title{\n    font-weight: 400;\n  }\n  .Upup{\n    margin-top: 75px;\n  }\n}\n\n@media only screen and (min-width: 680px) and (max-width: 999px){\n  .Upup{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    margin: 0 30px;\n    display: flex;\n    -webkit-flex-flow: column nowrap;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n  }\n}\n\n@media only screen and (min-width: 1000px) and (max-width: 1259px){\n  .Upup{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 1000px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n@media only screen and (min-width: 1260px){\n  .Upup{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 1260px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n.Upup-designer, .Upup-human {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n}\n\n.Upup-designer:nth-child(n), .Upup-human:nth-child(n){\n  margin-right: 30px;\n}\n\n.Upup-designer:last-child, .Upup-human:last-child{\n  margin-right: 0;\n}\n\n.Upup-designer:nth-child(1n), .Upup-human:nth-child(1n){\n  margin-right: 0;\n}\n\n.Upup-designer h4, .Upup-human h4 {\n  font-family: 'Bariol','Abril Fatface','Playfair Display','Fira Sans','Vollkorn','ProximaNova-Semibold','Helvetica','sans-serif';\n  font-size: calc(1 * 1.414 * 1rem);\n  line-height: calc(1.4 * 1.5 * 1rem);\n}\n\n.Upup-designer p, .Upup-human p {\n  margin-top: calc(1.5 * 1rem / 6);\n}\n\n@media only screen and (max-width: 679px){\n  .Upup-designer h4, .Upup-human h4{\n    color: #FFBF00;\n    font-weight: normal;\n  }\n  .Upup-designer p, .Upup-human p{\n    font-size: 20px;\n    color: #5B6675;\n    font-weight: 400;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n  }\n  .Upup-designer p:nth-child(n), .Upup-human p:nth-child(n){\n    margin-right: 30px;\n  }\n  .Upup-designer p:last-child, .Upup-human p:last-child{\n    margin-right: 0;\n  }\n  .Upup-designer p:nth-child(1n), .Upup-human p:nth-child(1n){\n    margin-right: 0;\n  }\n}\n\n@media only screen and (min-width: 680px){\n  .Upup-designer, .Upup-human{\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 1/2 - (30px - 30px * 1/2));\n  }\n  .Upup-designer:nth-child(n), .Upup-human:nth-child(n){\n    margin-right: 30px;\n  }\n  .Upup-designer:last-child, .Upup-human:last-child{\n    margin-right: 0;\n  }\n  .Upup-designer:nth-child(2n), .Upup-human:nth-child(2n){\n    margin-right: 0;\n  }\n  .Upup-designer h4, .Upup-human h4{\n    font-weight: 700;\n  }\n  .Upup-designer p, .Upup-human p{\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 9/10 - (30px - 30px * 9/10));\n    font-size: 22px;\n    color: #394453;\n    line-height: calc(1.10 * 1.5 * 1rem);\n    font-weight: 300;\n    font-family: 'ProximaNova-Light','Open Sans','Helvetica','sans-serif';\n  }\n  .Upup-designer p:nth-child(n), .Upup-human p:nth-child(n){\n    margin-right: 30px;\n  }\n  .Upup-designer p:last-child, .Upup-human p:last-child{\n    margin-right: 0;\n  }\n  .Upup-designer p:nth-child(10n), .Upup-human p:nth-child(10n){\n    margin-right: 0;\n  }\n}\n\n.Upup-icon-designer {}\n\n.Upup-icon-human {}\n\n\n\n", ""]);

  // exports


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/* Colors */\n\n/* Uses */\n\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n/* Old Media Queries\n$iphone5-screen: 320px;\n$iphone6-screen: 375px;\n$tiny-screen: 500px;\n$extra-small-screen: 600px;\n$small-screen: 768px;\n$small-medium: 940px;\n$medium-screen: 1280px;\n$large-screen: 1440px;\n$x-large-screen: 1600px;\n*/\n\n/* React-starter-kit\n$screen-sm-min: 768px;\n$screen-md-min: 992px;\n$screen-lg-min: 1200px;\n*/\n\n/* Supported Size Ranges: */\n/* handhelds, except-handhelds */\n/* small-screens, except-small-screens, to-small-screens, above-small-screens */\n/* medium-screens, except-medium-screens, above-medium-screens */\n/* large-screens, except-large-screens */\n/* Use: */\n/* @include media(handhelds, large-screens) */\n/* @include media(above-small-screens) {\n     max-width: 960px\n   }\n*/\n\n/* Typesetting variables. Edit these! */ /* in pixels. This would result in 22px on desktop */ /* how large the line height is as a multiple of font size */ /* ADJUST THE FIRST IF YOU CHANGE $baselineHeight\n\n/* Rate of growth for headings */\n/* I actually like this to be slightly smaller then the leading. Makes for tight headings. */\n\n/* Setup */\nhtml {\n  /* Change default typefaces here */\n  font-family: 'ProximaNova-Regular', 'Open Sans', 'Helvetica', 'sans-serif';\n  font-size: calc(22 / 16 * 100%);\n  font-weight: normal;\n  font-style: normal;\n  color: #394453;\n\n  /* Make everything look a little nicer in webkit */\n  -webkit-font-smoothing: antialiased;\n}\n  /* -webkit-text-size-adjust: auto\n  // -moz-text-size-adjust: auto\n  // -ms-text-size-adjust: auto\n  // -o-text-size-adjust: auto\n  // text-size-adjust: auto */\n\n/* Copy & Lists */\np {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n}\nul, ol {\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\nul li, ol li {\n  line-height: calc(1.5 * 1rem);\n}\nul ul, ul ol, ol ul, ol ol {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nblockquote {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\n/* Headings */\nh1, h2, h3, h4, h5, h6 {\n  /* Change heading typefaces here */\n  font-family: 'Bariol', 'Archivo Narrow', 'Source Sans Pro', 'Alegreya', 'Playfair Display', 'Fira Sans', 'Vollkorn', 'ProximaNova-Semibold', 'Helvetica', 'sans-serif';\n  font-weight: bold;\n  font-style: normal;\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n  line-height: calc(1.5 * 1rem);\n}\nh1 {\n  font-size: calc(2.20 * 1.414 * 1rem);\n  font-weight: 700;\n  line-height: calc(2.35 * 1.5 * 1rem);\n  margin-top: calc(0.15 * 1.5 * 1rem);\n}\n\n@media only screen and (min-width: 680px) {\n  h1 {\n    font-size: calc(3 * 1.414 * 1rem);\n    line-height: calc(3 * 1.5 * 1rem);\n    //margin-top: calc(2 * calc(1.5 * 1rem));\n  }\n}\n\n\nh2 {\n  font-size: calc(2 * 1.414 * 1rem);\n  line-height: calc(2 * 1.5 * 1rem);\n  margin-top: calc(2 * 1.5 * 1rem);\n}\n\nh3 {\n  font-size: calc(1 * 1.414 * 1rem);\n}\nh4 {\n  font-size: calc(1.414 / 2 * 1rem);\n}\nh5 {\n  font-size: calc(1.414 / 3 * 1rem);\n}\nh6 {\n  font-size: calc(1.414 / 4 * 1rem);\n}\n\n/* Tables */\ntable {\n  margin-top: calc(1.5 * 1rem);\n  border-spacing: 0px;\n  border-collapse: collapse;\n}\ntable td, table th {\n  padding: 0;\n  line-height: calc(1.5 * 22 - 0px);\n}\n/* Code blocks */\ncode {\n  /* Forces text to constrain to the line-height. Not ideal, but works. */\n  vertical-align: bottom;\n}\n/* Leading paragraph text */\n.lead {\n  font-size: calc(1.414 * 1rem);\n}\n\n/* Hug a the block above you */\n.hug {\n  margin-top: 0;\n}\n\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n}\n\n.Layout {\n  margin: 0 auto;\n  overflow: hidden;\n  width: 100%;\n}\n\n\n@media only screen and (max-width: 679px) {\n  .Layout {\n    padding: 0;\n    overflow: hidden;\n  }\n}", ""]);

  // exports


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n.Link {\n\n}\n", ""]);

  // exports


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/* Colors */\n\n/* Uses */\n\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n/* Old Media Queries\n$iphone5-screen: 320px;\n$iphone6-screen: 375px;\n$tiny-screen: 500px;\n$extra-small-screen: 600px;\n$small-screen: 768px;\n$small-medium: 940px;\n$medium-screen: 1280px;\n$large-screen: 1440px;\n$x-large-screen: 1600px;\n*/\n\n/* React-starter-kit\n$screen-sm-min: 768px;\n$screen-md-min: 992px;\n$screen-lg-min: 1200px;\n*/\n\n/* Supported Size Ranges: */\n/* handhelds, except-handhelds */\n/* small-screens, except-small-screens, to-small-screens, above-small-screens */\n/* medium-screens, except-medium-screens, above-medium-screens */\n/* large-screens, except-large-screens */\n/* Use: */\n/* @include media(handhelds, large-screens) */\n/* @include media(above-small-screens) {\n     max-width: 960px\n   }\n*/\n\n@media only screen and (max-width: 679px){\n\n  .Navigation{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0 15px;\n  }\n}\n\n@media only screen and (min-width: 680px) and (max-width: 999px){\n\n  .Navigation{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    margin: 0 30px;\n  }\n}\n\n@media only screen and (min-width: 1000px) and (max-width: 1259px){\n\n  .Navigation{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 1000px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n@media only screen and (min-width: 1260px){\n\n  .Navigation{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 1260px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 0;\n  }\n}\n\n.Navigation-left {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 2/5 - (30px - 30px * 2/5));\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n}\n\n.Navigation-left:nth-child(n){\n  margin-right: 30px;\n}\n\n.Navigation-left:last-child{\n  margin-right: 0;\n}\n\n.Navigation-left:nth-child(5n){\n  margin-right: 0;\n}\n\n.logo {\n  display: inline-block;\n  width: 76px;\n  height: 92px;\n  background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2276%22%20height%3D%2292%22%20viewBox%3D%220%200%2076%2092%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Elogo%3C%2Ftitle%3E%3Cg%20fill%3D%22%237F90A6%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M42.348%2021.76c.67%200%201.213-.543%201.213-1.212%200-.67-.542-1.213-1.212-1.213-.67%200-1.212.543-1.212%201.213s.543%201.212%201.212%201.212M56.86%2089.95c-.45%200-.817.365-.817.815%200%20.452.366.817.817.817.45%200%20.817-.365.817-.817%200-.45-.366-.816-.817-.816M1.47%2089.972c-.448%200-.81.363-.81.812%200%20.447.362.81.81.81.448%200%20.81-.363.81-.81%200-.45-.362-.812-.81-.812M21.98%2045.736H22c.447-.002.81-.365.807-.813l-.04-15.704c0-.25.106-.49.302-.644%201.52-1.187%203.51-1.864%205.55-1.87%203.055%200%205.44%201.51%206.38%204.047.28.737.39%201.34.392%202.154l.033%2011.98c0%20.45.365.81.813.81h.016c.448-.002.81-.366.808-.813l-.03-12.056c0-.95-.16-1.8-.503-2.67-1.188-3.19-4.127-5.09-7.892-5.09-1.62.005-3.265.388-4.714%201.078-.543.26-1.17-.118-1.17-.72L22.69.992c0-.446-.365-.81-.813-.808-.497.002-.83.38-.828.807l.118%2043.943c0%20.45.366.805.813.803M49.33%2045.664c.45%200%20.81-.364.81-.81V.99c0-.448-.363-.812-.813-.81-.49%200-.826.382-.826.81v43.86c0%20.432.34.813.83.812M5.74%2055.933c-.318-.325-.307-.845.024-1.154L17.32%2043.997c.324-.302.343-.808.045-1.134l-.01-.013c-.304-.33-.82-.35-1.147-.044L3.523%2054.68c-.514.48-1.355.117-1.358-.587l-.028-10.48v-.002l-.035-12.703c.5.03.962.054%201.464.054h.002c3.92-.01%207.212-.962%209.52-2.754%202.078-1.61%203.218-3.788%203.212-6.126-.012-4.267-4-8.858-12.782-8.858-.797%200-1.57.033-2.346.083-.426.028-.757.387-.756.814l.086%2030.86.115%2039.287c0%20.422.327.807.838.804.444%200%20.804-.363.803-.807l-.08-25.727c-.002-.225.09-.438.254-.59l.99-.925c.32-.298.82-.288%201.125.026l11.72%2011.96c.29.296.778.34%201.13.02.34-.306.355-.833.035-1.16L5.74%2055.934zM2.06%2015.68c0-.447.36-.808.807-.813.233-.003.47-.003.714-.003%207.595%200%2011.066%203.74%2011.075%207.217.005%201.88-.962%203.634-2.724%204.942-2.014%201.495-4.91%202.29-8.395%202.3-.426%200-.936-.023-1.44-.053L2.06%2015.68zM28.887%2048.423c-2.046.005-4.22.862-5.813%202.295-1.464%201.314-3.207%203.8-3.194%208.166.015%204.972%203.993%2010.324%2012.69%2010.324.644%200%201.294-.048%201.944-.108.417-.038.735-.392.734-.81%200-.516-.425-.858-.878-.823-.533.04-1.053.065-1.69.065-7.652%200-11.148-4.486-11.16-8.656%200-.216%200-.418.012-.614l15.274-.043c.342-.002.625-.29.61-.63-.25-6.012-3.91-9.167-8.53-9.167zm6.142%208.162l-12.55.034c-.393%200-.698-.37-.596-.747%201.016-3.762%204.066-5.808%207.027-5.808%204.096%200%206.265%203.17%206.716%205.796.064.377-.215.724-.597.725z%22%2F%3E%3Cpath%20d%3D%22M56.872%2085.146c.446%200%20.806-.364.805-.81l-.105-34.812c0-.446-.364-.807-.81-.805-.494%200-.825.385-.823.808l.045%2015.443c0%20.235-.094.462-.27.616-1.782%201.562-4.246%202.486-6.712%202.493-3.21%200-5.773-2.293-5.785-6.126l-.032-14.487c0-.036-.015-.065-.02-.1L43.115%2026.2c0-.442-.36-.8-.8-.8-.524.002-.84.384-.838.804l.078%2022.676c0%20.007.004.014.005.02l.027%2012.984c.015%204.904%203.427%207.835%207.48%207.835%201.607-.006%203.842-.39%205.727-1.39.546-.29%201.2.08%201.202.695l.05%2015.316c0%20.428.337.807.826.806M68.704%2058.012c-2.49-.42-5.456-1.387-5.46-3.59-.008-2.555%202.83-4.348%206.91-4.36.77%200%201.926.178%203.06.53.38.118.812-.055.993-.478.192-.45-.05-.967-.517-1.113-1.26-.393-2.6-.575-3.547-.575-4.957.015-8.55%202.538-8.54%206.002.008%202.644%202.448%204.497%206.868%205.216%202.488.42%205.454%201.384%205.462%203.59.006%202.552-2.833%204.344-6.92%204.357-.766%200-1.92-.178-3.052-.53-.38-.117-.813.057-.993.48-.192.446.044.965.508%201.11%201.274.4%202.612.58%203.54.58h.016c2.483-.007%204.623-.607%206.19-1.733%201.52-1.097%202.356-2.612%202.352-4.27-.007-2.646-2.447-4.5-6.868-5.215M56.86%2086.257c-.45%200-.817.365-.817.817v.836c0%20.45.366.816.817.816.45%200%20.817-.365.817-.816v-.836c0-.452-.366-.817-.817-.817M1.468%2086.296c-.452%200-.817.365-.817.817v.836c0%20.45.366.816.818.816.45%200%20.816-.366.816-.817v-.837c0-.452-.366-.817-.816-.817%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');\n}\n\n.city-container {\n  display: none;\n}\n\n@media only screen and (min-width: 1000px){\n\n  .city-container{\n    display: inline-block;\n    position: relative;\n    margin-left: 30px;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 2/3 - (30px - 30px * 2/3));\n  }\n\n  .city-container:nth-child(n){\n    margin-right: 30px;\n  }\n\n  .city-container:last-child{\n    margin-right: 0;\n  }\n\n  .city-container:nth-child(3n){\n    margin-right: 0;\n  }\n\n  .city-container > *{\n    position: absolute;\n    top: 50%;\n    right: auto;\n    bottom: auto;\n    left: 0;\n    -webkit-transform: translate(0, -50%);\n        -ms-transform: translate(0, -50%);\n         -o-transform: translate(0, -50%);\n            transform: translate(0, -50%);\n  }\n\n  .city-in{\n    font-size: calc(22 / 30 * 100%);\n  }\n\n  .city{\n    font-family: 'ProximaNova-Semibold','Open Sans','Helvetica','sans-serif';\n    color: #FFBF00;\n  }\n}\n\n.Navigation-right {\n  display: none;\n}\n\n.Navigation-right--mobile {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 3/5 - (30px - 30px * 3/5));\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  position: relative;\n}\n\n.Navigation-right--mobile:nth-child(n){\n  margin-right: 30px;\n}\n\n.Navigation-right--mobile:last-child{\n  margin-right: 0;\n}\n\n.Navigation-right--mobile:nth-child(5n){\n  margin-right: 0;\n}\n\n.Navigation-right--mobile > *{\n  position: absolute;\n  top: 50%;\n  right: 0;\n  bottom: auto;\n  left: auto;\n  -webkit-transform: translate(0, -50%);\n      -ms-transform: translate(0, -50%);\n       -o-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n}\n.Navigation-right--mobile:nth-child(1n) {\n  margin-right: 0;\n}\n\n.mobile-menu {\n  font-size: calc(22 / 22 * 100%);\n  text-decoration: none;\n  color: #FFBF00;\n}\n\n@media only screen and (min-width: 680px){\n\n  .Navigation-right{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 3/5 - (30px - 30px * 3/5));\n    list-style: none;\n    position: relative;\n  }\n\n  .Navigation-right:nth-child(n){\n    margin-right: 30px;\n  }\n\n  .Navigation-right:last-child{\n    margin-right: 0;\n  }\n\n  .Navigation-right:nth-child(5n){\n    margin-right: 0;\n  }\n\n  .Navigation-right > *{\n    position: absolute;\n    top: 50%;\n    right: 0;\n    bottom: auto;\n    left: auto;\n    -webkit-transform: translate(0, -50%);\n        -ms-transform: translate(0, -50%);\n         -o-transform: translate(0, -50%);\n            transform: translate(0, -50%);\n  }\n\n  .Navigation-right > *{\n    top: 25%;\n  }\n\n  .Navigation-menu{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    -webkit-box-pack: end;\n    -webkit-justify-content: flex-end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 5/5 - (30px - 30px * 5/5));\n    list-style: none;\n  }\n\n  .Navigation-menu:nth-child(n){\n    margin-right: 30px;\n  }\n\n  .Navigation-menu:last-child{\n    margin-right: 0;\n  }\n\n  .Navigation-menu:nth-child(5n){\n    margin-right: 0;\n  }\n\n  .Navigation-right--mobile{\n    display: none;\n  }\n}\n\n@media only screen and (min-width: 1000px){\n\n  .Navigation-menu{\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 4/5 - (30px - 30px * 4/5));\n  }\n\n  .Navigation-menu:nth-child(n){\n    margin-right: 30px;\n  }\n\n  .Navigation-menu:last-child{\n    margin-right: 0;\n  }\n\n  .Navigation-menu:nth-child(5n){\n    margin-right: 0;\n  }\n}\n\n.Navigation-item {\n  position: relative;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 1/5 - (30px - 30px * 1/5));\n}\n\n.Navigation-item:nth-child(n){\n  margin-right: 30px;\n}\n\n.Navigation-item:last-child{\n  margin-right: 0;\n}\n\n.Navigation-item:nth-child(5n){\n  margin-right: 0;\n}\n\n.Navigation-item > *{\n  position: absolute;\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n       -o-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.Navigation-link {\n  //padding: 0.5em 1em;\n  color: #394453;\n  text-decoration: none;\n  cursor: pointer;\n  font-size: calc(22 / 30 * 100%);\n  border-bottom: 3px solid white;\n  -webkit-transition: all 1s;\n       -o-transition: all 1s;\n          transition: all 1s;\n}\n\n.Navigation-link:hover {\n  border-bottom: 3px solid #FFBF00;\n  color: #394453;\n}\n", ""]);

  // exports


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/* Colors */\n\n/* Uses */\n\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n/* Old Media Queries\n$iphone5-screen: 320px;\n$iphone6-screen: 375px;\n$tiny-screen: 500px;\n$extra-small-screen: 600px;\n$small-screen: 768px;\n$small-medium: 940px;\n$medium-screen: 1280px;\n$large-screen: 1440px;\n$x-large-screen: 1600px;\n*/\n\n/* React-starter-kit\n$screen-sm-min: 768px;\n$screen-md-min: 992px;\n$screen-lg-min: 1200px;\n*/\n\n/* Supported Size Ranges: */\n/* handhelds, except-handhelds */\n/* small-screens, except-small-screens, to-small-screens, above-small-screens */\n/* medium-screens, except-medium-screens, above-medium-screens */\n/* large-screens, except-large-screens */\n/* Use: */\n/* @include media(handhelds, large-screens) */\n/* @include media(above-small-screens) {\n     max-width: 960px\n   }\n*/\n/* Typesetting variables. Edit these! */ /* in pixels. This would result in 22px on desktop */ /* how large the line height is as a multiple of font size */ /* ADJUST THE FIRST IF YOU CHANGE $baselineHeight\n\n/* Rate of growth for headings */\n/* I actually like this to be slightly smaller then the leading. Makes for tight headings. */\n\n/* Setup */\nhtml {\n  /* Change default typefaces here */\n  font-family: 'ProximaNova-Regular', 'Open Sans', 'Helvetica', 'sans-serif';\n  font-size: calc(22 / 16 * 100%);\n  font-weight: normal;\n  font-style: normal;\n  color: #394453;\n\n  /* Make everything look a little nicer in webkit */\n  -webkit-font-smoothing: antialiased;\n}\n  /* -webkit-text-size-adjust: auto\n  // -moz-text-size-adjust: auto\n  // -ms-text-size-adjust: auto\n  // -o-text-size-adjust: auto\n  // text-size-adjust: auto */\n\n/* Copy & Lists */\np {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n}\nul, ol {\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\nul li, ol li {\n  line-height: calc(1.5 * 1rem);\n}\nul ul, ul ol, ol ul, ol ol {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nblockquote {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\n/* Headings */\nh1, h2, h3, h4, h5, h6 {\n  /* Change heading typefaces here */\n  font-family: 'Bariol', 'Archivo Narrow', 'Source Sans Pro', 'Alegreya', 'Playfair Display', 'Fira Sans', 'Vollkorn', 'ProximaNova-Semibold', 'Helvetica', 'sans-serif';\n  font-weight: bold;\n  font-style: normal;\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n  line-height: calc(1.5 * 1rem);\n}\nh1 {\n  font-size: calc(2.20 * 1.414 * 1rem);\n  font-weight: 700;\n  line-height: calc(2.35 * 1.5 * 1rem);\n  margin-top: calc(0.15 * 1.5 * 1rem);\n}\n\n@media only screen and (min-width: 680px) {\n  h1 {\n    font-size: calc(3 * 1.414 * 1rem);\n    line-height: calc(3 * 1.5 * 1rem);\n    //margin-top: calc(2 * calc(1.5 * 1rem));\n  }\n}\n\n\nh2 {\n  font-size: calc(2 * 1.414 * 1rem);\n  line-height: calc(2 * 1.5 * 1rem);\n  margin-top: calc(2 * 1.5 * 1rem);\n}\n\nh3 {\n  font-size: calc(1 * 1.414 * 1rem);\n}\nh4 {\n  font-size: calc(1.414 / 2 * 1rem);\n}\nh5 {\n  font-size: calc(1.414 / 3 * 1rem);\n}\nh6 {\n  font-size: calc(1.414 / 4 * 1rem);\n}\n\n/* Tables */\ntable {\n  margin-top: calc(1.5 * 1rem);\n  border-spacing: 0px;\n  border-collapse: collapse;\n}\ntable td, table th {\n  padding: 0;\n  line-height: calc(1.5 * 22 - 0px);\n}\n/* Code blocks */\ncode {\n  /* Forces text to constrain to the line-height. Not ideal, but works. */\n  vertical-align: bottom;\n}\n/* Leading paragraph text */\n.lead {\n  font-size: calc(1.414 * 1rem);\n}\n\n/* Hug a the block above you */\n.hug {\n  margin-top: 0;\n}\n\n.Resume-container {\n  margin-top: 50px;\n  margin-bottom: 100px;\n}\n\n.Resume-container p, .Resume-container li, .Resume-container a {\n  font-size: calc(22 / 28 * 100%);\n  line-height: calc(1.2 * 1rem);\n}\n\n@media only screen and (min-width: 680px) {\n  .Resume-container {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 700px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n.Resume-recent-container h3, .Resume-experience-container h3, .Resume-technical-container h3, .Resume-education-container h3 {\n  margin-bottom: 20px;\n  color: #FFBF00;\n}\n\n\n.Resume-technical-container p {\n  margin-top: calc(.5 * 1rem);\n}\n\n\n.Resume-recent-specific-headline, .Resume-header-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  max-width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  margin-left: 0;\n  margin-right: 0;\n}\n\n\n.Resume-recent-specific-headline a, .Resume-header-container a {\n  font-weight: 700;\n  font-family: 'ProximaNova-Semibold','Open Sans','Helvetica','sans-serif';\n  text-decoration: none;\n  color: #FFBF00;\n}\n\n\n.Resume-recent-specific-headline p, .Resume-header-container p {\n  margin-top: 0;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 3/5 - (30px - 30px * 3/5));\n}\n\n\n.Resume-recent-specific-headline p:nth-child(n), .Resume-header-container p:nth-child(n) {\n  margin-right: 30px;\n}\n\n\n.Resume-recent-specific-headline p:last-child, .Resume-header-container p:last-child {\n  margin-right: 0;\n}\n\n\n.Resume-recent-specific-headline p:nth-child(5n), .Resume-header-container p:nth-child(5n) {\n  margin-right: 0;\n}\n\n\n.Resume-recent-specific-headline div, .Resume-header-container div {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 2/5 - (30px - 30px * 2/5));\n  position: relative;\n}\n\n\n.Resume-recent-specific-headline div:nth-child(n), .Resume-header-container div:nth-child(n) {\n  margin-right: 30px;\n}\n\n\n.Resume-recent-specific-headline div:last-child, .Resume-header-container div:last-child {\n  margin-right: 0;\n}\n\n\n.Resume-recent-specific-headline div:nth-child(5n), .Resume-header-container div:nth-child(5n) {\n  margin-right: 0;\n}\n\n\n.Resume-recent-specific-headline div > *, .Resume-header-container div > * {\n  position: absolute;\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n       -o-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.Resume-header-pdf {\n  position: relative;\n}\n\n.Resume-header-pdf:before {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 1px;\n  left: -28px;\n  //background-color: #FFBF00;\n  width: 21px;\n  height: 22px;\n  background: url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2222%22%20height%3D%2222%22%20viewBox%3D%220%200%2022%2022%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EPDF%20Icon%3C%2Ftitle%3E%3Cg%20stroke%3D%22%23FFBF00%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M9.75%2018.915H1.417v-17.5h9.166l4.167%204.168v3.332%22%20stroke-linejoin%3D%22round%22%2F%3E%3Cpath%20d%3D%22M10.583%201.415v4.167h4.167%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3Cpath%20d%3D%22M20.583%2015.582c0%202.762-2.24%205-5%205s-5-2.238-5-5%202.24-5%205-5%205%202.238%205%205z%22%2F%3E%3Cpath%20d%3D%22M15.583%2017.853v-4.545M13.765%2016.036l1.82%201.82%201.817-1.82%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E') no-repeat;\n  //mask-repeat: no-repeat;\n  //-webkit-mask-image: url('data:image/svg+xml;charset=utf-8,<svg width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" xmlns=\"http://www.w3.org/2000/svg\"><title>PDF Icon</title><g stroke=\"#FFBF00\" fill=\"none\" fill-rule=\"evenodd\"><path d=\"M9.75 18.915H1.417v-17.5h9.166l4.167 4.168v3.332\" stroke-linejoin=\"round\"/><path d=\"M10.583 1.415v4.167h4.167\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M20.583 15.582c0 2.762-2.24 5-5 5s-5-2.238-5-5 2.24-5 5-5 5 2.238 5 5z\"/><path d=\"M15.583 17.853v-4.545M13.765 16.036l1.82 1.82 1.817-1.82\" stroke-linecap=\"round\"/></g></svg>');\n  //mask-image: url('data:image/svg+xml;charset=utf-8,<svg width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" xmlns=\"http://www.w3.org/2000/svg\"><title>PDF Icon</title><g stroke=\"#FFBF00\" fill=\"none\" fill-rule=\"evenodd\"><path d=\"M9.75 18.915H1.417v-17.5h9.166l4.167 4.168v3.332\" stroke-linejoin=\"round\"/><path d=\"M10.583 1.415v4.167h4.167\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M20.583 15.582c0 2.762-2.24 5-5 5s-5-2.238-5-5 2.24-5 5-5 5 2.238 5 5z\"/><path d=\"M15.583 17.853v-4.545M13.765 16.036l1.82 1.82 1.817-1.82\" stroke-linecap=\"round\"/></g></svg>');\n}\n\n.Resume-experience-specific-headline p {\n  margin-top: 0;\n}\n\np.Resume-recent-specific-sub, p.Resume-experience-specific-sub {\n  margin-top: calc(.25 * 1rem);\n  color: #7F90A6;\n  font-size: calc(22 / 30 * 100%);\n\n}\n\n.Resume-experience-specific-container, .Resume-recent-specific-container {\n  margin-bottom: 40px;\n}\n\n.Resume-experience-specific-container ul, .Resume-recent-specific-container ul {\n  list-style: none;\n  margin-left: 0;\n  padding-left: 0;\n  margin-top: calc(.7 * 1rem);\n  margin-bottom: 0;\n}\n\n.Resume-experience-specific-container ul li, .Resume-recent-specific-container ul li {\n  padding-left: 1em;\n  text-indent: -1em;\n  margin-bottom: 10px;\n}\n\n.Resume-experience-specific-container ul li:before, .Resume-recent-specific-container ul li:before {\n  content: \"\\2022\";\n  padding-right: 12px;\n  color: #FFBF00;\n}\n\n.Resume-experience-specific-container:last-child, .Resume-recent-specific-container:last-child {\n  margin-bottom: 0;\n}\n\n.Resume-education-container p {\n  margin-top: calc(.5 * 1rem);\n}", ""]);

  // exports


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/* Colors */\n\n/* Uses */\n\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n/* Old Media Queries\n$iphone5-screen: 320px;\n$iphone6-screen: 375px;\n$tiny-screen: 500px;\n$extra-small-screen: 600px;\n$small-screen: 768px;\n$small-medium: 940px;\n$medium-screen: 1280px;\n$large-screen: 1440px;\n$x-large-screen: 1600px;\n*/\n\n/* React-starter-kit\n$screen-sm-min: 768px;\n$screen-md-min: 992px;\n$screen-lg-min: 1200px;\n*/\n\n/* Supported Size Ranges: */\n/* handhelds, except-handhelds */\n/* small-screens, except-small-screens, to-small-screens, above-small-screens */\n/* medium-screens, except-medium-screens, above-medium-screens */\n/* large-screens, except-large-screens */\n/* Use: */\n/* @include media(handhelds, large-screens) */\n/* @include media(above-small-screens) {\n     max-width: 960px\n   }\n*/\n/* Typesetting variables. Edit these! */ /* in pixels. This would result in 22px on desktop */ /* how large the line height is as a multiple of font size */ /* ADJUST THE FIRST IF YOU CHANGE $baselineHeight\n\n/* Rate of growth for headings */\n/* I actually like this to be slightly smaller then the leading. Makes for tight headings. */\n\n/* Setup */\nhtml {\n  /* Change default typefaces here */\n  font-family: 'ProximaNova-Regular', 'Open Sans', 'Helvetica', 'sans-serif';\n  font-size: calc(22 / 16 * 100%);\n  font-weight: normal;\n  font-style: normal;\n  color: #394453;\n\n  /* Make everything look a little nicer in webkit */\n  -webkit-font-smoothing: antialiased;\n}\n  /* -webkit-text-size-adjust: auto\n  // -moz-text-size-adjust: auto\n  // -ms-text-size-adjust: auto\n  // -o-text-size-adjust: auto\n  // text-size-adjust: auto */\n\n/* Copy & Lists */\np {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n}\nul, ol {\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\nul li, ol li {\n  line-height: calc(1.5 * 1rem);\n}\nul ul, ul ol, ol ul, ol ol {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nblockquote {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\n/* Headings */\nh1, h2, h3, h4, h5, h6 {\n  /* Change heading typefaces here */\n  font-family: 'Bariol', 'Archivo Narrow', 'Source Sans Pro', 'Alegreya', 'Playfair Display', 'Fira Sans', 'Vollkorn', 'ProximaNova-Semibold', 'Helvetica', 'sans-serif';\n  font-weight: bold;\n  font-style: normal;\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n  line-height: calc(1.5 * 1rem);\n}\nh1 {\n  font-size: calc(2.20 * 1.414 * 1rem);\n  font-weight: 700;\n  line-height: calc(2.35 * 1.5 * 1rem);\n  margin-top: calc(0.15 * 1.5 * 1rem);\n}\n\n@media only screen and (min-width: 680px) {\n  h1 {\n    font-size: calc(3 * 1.414 * 1rem);\n    line-height: calc(3 * 1.5 * 1rem);\n    //margin-top: calc(2 * calc(1.5 * 1rem));\n  }\n}\n\n\nh2 {\n  font-size: calc(2 * 1.414 * 1rem);\n  line-height: calc(2 * 1.5 * 1rem);\n  margin-top: calc(2 * 1.5 * 1rem);\n}\n\nh3 {\n  font-size: calc(1 * 1.414 * 1rem);\n}\nh4 {\n  font-size: calc(1.414 / 2 * 1rem);\n}\nh5 {\n  font-size: calc(1.414 / 3 * 1rem);\n}\nh6 {\n  font-size: calc(1.414 / 4 * 1rem);\n}\n\n/* Tables */\ntable {\n  margin-top: calc(1.5 * 1rem);\n  border-spacing: 0px;\n  border-collapse: collapse;\n}\ntable td, table th {\n  padding: 0;\n  line-height: calc(1.5 * 22 - 0px);\n}\n/* Code blocks */\ncode {\n  /* Forces text to constrain to the line-height. Not ideal, but works. */\n  vertical-align: bottom;\n}\n/* Leading paragraph text */\n.lead {\n  font-size: calc(1.414 * 1rem);\n}\n\n/* Hug a the block above you */\n.hug {\n  margin-top: 0;\n}\n\n\n\n@media only screen and (max-width: 679px) {\n  .Work-hero {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0 15px;\n    margin-top: 50px;\n    margin-bottom: 50px;\n    //margin: 0 15px;\n  }\n  .Work-hero-title {\n    font-size: calc(2 * 1.414 * 1rem);\n    line-height: calc(2.1 * 1.5 * 1rem);\n    color: #FFBF00;\n  }\n}\n\n@media only screen and (min-width: 680px) {\n  .Work-hero {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 700px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 50px;\n    margin-bottom: 50px;\n    display: flex !important;\n    -webkit-flex-flow: column nowrap !important;\n        -ms-flex-flow: column nowrap !important;\n            flex-flow: column nowrap !important;\n  }\n  .Work-hero-title {\n    font-size: calc(2.75 * 1.414 * 1rem);\n    color: #FFBF00;\n  }\n  .Work-hero-platform {\n    font-weight: 300;\n    font-family: 'ProximaNova-Light', 'Open Sans', 'Helvetica', 'sans-serif';\n    font-size: calc(.8 * 1.414 * 1rem);\n    color: #7F90A6;\n  }\n  .Work-hero-phrase {\n    font-family: 'ProximaNova-Light', 'Open Sans', 'Helvetica', 'sans-serif';\n    font-weight: 300;\n    font-size: calc(1.1 * 1.414 * 1rem);\n    line-height: calc(1.35 * 1.5 * 1rem);\n    margin-top: calc(0 * 1.5 * .5rem);\n  }\n}\n\n@media only screen and (min-width: 680px) and (max-width: 999px) {\n  .Work-hero {\n    margin-left: 30px;\n    margin-right: 30px;\n  }\n}\n\n@media only screen and (min-width: 1000px) {\n  .Work-hero {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 1000px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n@media only screen and (min-width: 1260px) {\n  .Work-hero {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n}", ""]);

  // exports


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/* Colors */\n\n/* Uses */\n\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n/* Old Media Queries\n$iphone5-screen: 320px;\n$iphone6-screen: 375px;\n$tiny-screen: 500px;\n$extra-small-screen: 600px;\n$small-screen: 768px;\n$small-medium: 940px;\n$medium-screen: 1280px;\n$large-screen: 1440px;\n$x-large-screen: 1600px;\n*/\n\n/* React-starter-kit\n$screen-sm-min: 768px;\n$screen-md-min: 992px;\n$screen-lg-min: 1200px;\n*/\n\n/* Supported Size Ranges: */\n/* handhelds, except-handhelds */\n/* small-screens, except-small-screens, to-small-screens, above-small-screens */\n/* medium-screens, except-medium-screens, above-medium-screens */\n/* large-screens, except-large-screens */\n/* Use: */\n/* @include media(handhelds, large-screens) */\n/* @include media(above-small-screens) {\n     max-width: 960px\n   }\n*/\n/* Typesetting variables. Edit these! */ /* in pixels. This would result in 22px on desktop */ /* how large the line height is as a multiple of font size */ /* ADJUST THE FIRST IF YOU CHANGE $baselineHeight\n\n/* Rate of growth for headings */\n/* I actually like this to be slightly smaller then the leading. Makes for tight headings. */\n\n/* Setup */\nhtml {\n  /* Change default typefaces here */\n  font-family: 'ProximaNova-Regular', 'Open Sans', 'Helvetica', 'sans-serif';\n  font-size: calc(22 / 16 * 100%);\n  font-weight: normal;\n  font-style: normal;\n  color: #394453;\n\n  /* Make everything look a little nicer in webkit */\n  -webkit-font-smoothing: antialiased;\n}\n  /* -webkit-text-size-adjust: auto\n  // -moz-text-size-adjust: auto\n  // -ms-text-size-adjust: auto\n  // -o-text-size-adjust: auto\n  // text-size-adjust: auto */\n\n/* Copy & Lists */\np {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n}\nul, ol {\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\nul li, ol li {\n  line-height: calc(1.5 * 1rem);\n}\nul ul, ul ol, ol ul, ol ol {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nblockquote {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\n/* Headings */\nh1, h2, h3, h4, h5, h6 {\n  /* Change heading typefaces here */\n  font-family: 'Bariol', 'Archivo Narrow', 'Source Sans Pro', 'Alegreya', 'Playfair Display', 'Fira Sans', 'Vollkorn', 'ProximaNova-Semibold', 'Helvetica', 'sans-serif';\n  font-weight: bold;\n  font-style: normal;\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n  line-height: calc(1.5 * 1rem);\n}\nh1 {\n  font-size: calc(2.20 * 1.414 * 1rem);\n  font-weight: 700;\n  line-height: calc(2.35 * 1.5 * 1rem);\n  margin-top: calc(0.15 * 1.5 * 1rem);\n}\n\n@media only screen and (min-width: 680px){\n  h1{\n    font-size: calc(3 * 1.414 * 1rem);\n    line-height: calc(3 * 1.5 * 1rem);\n    //margin-top: calc(2 * calc(1.5 * 1rem));\n  }\n}\n\n\nh2 {\n  font-size: calc(2 * 1.414 * 1rem);\n  line-height: calc(2 * 1.5 * 1rem);\n  margin-top: calc(2 * 1.5 * 1rem);\n}\n\nh3 {\n  font-size: calc(1 * 1.414 * 1rem);\n}\nh4 {\n  font-size: calc(1.414 / 2 * 1rem);\n}\nh5 {\n  font-size: calc(1.414 / 3 * 1rem);\n}\nh6 {\n  font-size: calc(1.414 / 4 * 1rem);\n}\n\n/* Tables */\ntable {\n  margin-top: calc(1.5 * 1rem);\n  border-spacing: 0px;\n  border-collapse: collapse;\n}\ntable td, table th {\n  padding: 0;\n  line-height: calc(1.5 * 22 - 0px);\n}\n/* Code blocks */\ncode {\n  /* Forces text to constrain to the line-height. Not ideal, but works. */\n  vertical-align: bottom;\n}\n/* Leading paragraph text */\n.lead {\n  font-size: calc(1.414 * 1rem);\n}\n\n/* Hug a the block above you */\n.hug {\n  margin-top: 0;\n}\n\n.Work-list-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  max-width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 100px;\n}\n\n.Work-list-container a {\n  text-decoration: none;\n  color: #394453;\n}\n\n.Work-list-container a:hover h4 {\n  color: #FFBF00;\n}\n\n.Work-list-container a:hover p {\n  color: #FDEEBD;\n}\n\n.Work-list-container a:hover .Work-specific-container-illustrations:before, .Work-list-container a:hover .Work-specific-container-dashboard:before, .Work-list-container a:hover .Work-specific-container-advantage:before, .Work-list-container a:hover .Work-specific-container-mmmystery:before {\n  //background-color: #FFBF00;\n}\n\n.Work-list-container a:hover .Work-specific-container-illustrations:after, .Work-list-container a:hover .Work-specific-container-dashboard:after, .Work-list-container a:hover .Work-specific-container-advantage:after, .Work-list-container a:hover .Work-specific-container-mmmystery:after {\n  //background-color: #FFBF00;\n  opacity: 1;\n  right: 50px;\n}\n\n.Work-list-container h4 {\n  -webkit-transition: color .25s;\n       -o-transition: color .25s;\n          transition: color .25s;\n  font-family: 'Bariol','Abril Fatface','Playfair Display','Fira Sans','Vollkorn','ProximaNova-Semibold','Helvetica','sans-serif';\n  font-weight: 700;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n  font-size: calc(1.75 * 1.414 * 1rem);\n  line-height: calc(1.4 * 1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem / 2);\n}\n\n.Work-list-container h4:nth-child(n){\n  margin-right: 30px;\n}\n\n.Work-list-container h4:last-child{\n  margin-right: 0;\n}\n\n.Work-list-container h4:nth-child(1n){\n  margin-right: 0;\n}\n\n.Work-list-container p {\n  margin-top: calc(.4 * 1rem);\n  color: #5B6675;\n  -webkit-transition: color .25s;\n       -o-transition: color .25s;\n          transition: color .25s;\n}\n\n.Work-specific-container-illustrations, .Work-specific-container-dashboard, .Work-specific-container-advantage, .Work-specific-container-mmmystery {\n  margin-bottom: 10px;\n  padding: 10px 0;\n}\n\n@media only screen and (max-width: 679px){\n  .Work-list-container{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n@media only screen and (min-width: 680px){\n  .Work-list-container{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 700px;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex !important;\n    -webkit-flex-flow: column nowrap !important;\n        -ms-flex-flow: column nowrap !important;\n            flex-flow: column nowrap !important;\n  }\n  .Work-specific-container-illustrations, .Work-specific-container-dashboard, .Work-specific-container-advantage, .Work-specific-container-mmmystery{\n    position: relative;\n    padding-left: 65px;\n  }\n  .Work-specific-container-illustrations:before, .Work-specific-container-dashboard:before, .Work-specific-container-advantage:before, .Work-specific-container-mmmystery:before{\n    -webkit-transition: background-color .25s;\n         -o-transition: background-color .25s;\n            transition: background-color .25s;\n    content: '';\n    display: block;\n    position: absolute;\n    top: 35px;\n    left: -0px;\n    width: 60px;\n    height: 60px;\n    //mask-repeat: no-repeat;\n  }\n  .Work-specific-container-illustrations:after, .Work-specific-container-dashboard:after, .Work-specific-container-advantage:after, .Work-specific-container-mmmystery:after{\n    -webkit-transition: all .25s;\n         -o-transition: all .25s;\n            transition: all .25s;\n    content: '';\n    display: block;\n    position: absolute;\n    top: 35px;\n    right: 75px;\n    width: 37px;\n    height: 22px;\n    fill: #aebccf;\n    //mask-repeat: no-repeat;\n    opacity: 0;\n    background: url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2237%22%20height%3D%2222%22%20viewBox%3D%220%200%2037%2022%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Eright%20arrow%3C%2Ftitle%3E%3Cpath%20d%3D%22M26.062%200l-1.49%201.485%208.416%208.464L0%209.555v2.102l32.988.393-8.416%208.465L26.062%2022%2037%2011%2026.062%200z%22%20fill%3D%22%23FFD968%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E') no-repeat;\n    //-webkit-mask-image: url('data:image/svg+xml;charset=utf-8,<svg width=\"37\" height=\"22\" viewBox=\"0 0 37 22\" xmlns=\"http://www.w3.org/2000/svg\"><title>right arrow</title><path d=\"M26.062 0l-1.49 1.485 8.416 8.464L0 9.555v2.102l32.988.393-8.416 8.465L26.062 22 37 11 26.062 0z\" fill=\"#FFD968\" fill-rule=\"evenodd\"/></svg>');\n    //mask-image: url('data:image/svg+xml;charset=utf-8,<svg width=\"37\" height=\"22\" viewBox=\"0 0 37 22\" xmlns=\"http://www.w3.org/2000/svg\"><title>right arrow</title><path d=\"M26.062 0l-1.49 1.485 8.416 8.464L0 9.555v2.102l32.988.393-8.416 8.465L26.062 22 37 11 26.062 0z\" fill=\"#FFD968\" fill-rule=\"evenodd\"/></svg>');\n  }\n  .Work-specific-container-mmmystery:before{\n    background: url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2222%22%20height%3D%2241%22%20viewBox%3D%220%200%2022%2041%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EMmmystery%3C%2Ftitle%3E%3Cpath%20d%3D%22M.67%2030.76c.368%200%20.667-.3.667-.67V3.343c0-.975%201.03-2.006%202.006-2.006h14.71c.976%200%202.007%201.03%202.007%202.006%200%20.37.3.67.67.67.368%200%20.667-.3.667-.67C21.397%201.625%2019.772%200%2018.054%200H3.344C1.623%200%200%201.625%200%203.343V30.09c0%20.37.3.67.67.67zM20.73%205.35H3.342c-.37%200-.668.3-.668.668%200%20.37.3.67.668.67H20.06v30.09c0%20.974-1.03%202.005-2.006%202.005H3.344c-.976%200-2.007-1.03-2.007-2.006v-3.344h16.717c.37%200%20.67-.3.67-.668%200-.37-.3-.67-.67-.67H.67c-.37%200-.67.3-.67.67v4.012c0%201.718%201.625%203.343%203.343%203.343h14.71c1.72%200%203.344-1.625%203.344-3.343V6.017c0-.368-.3-.668-.668-.668zM9.36%2036.107c0%20.738.6%201.337%201.34%201.337.736%200%201.336-.6%201.336-1.337%200-.738-.6-1.337-1.337-1.337-.74%200-1.34.6-1.34%201.338zM8.707%202.675c-.37%200-.665.3-.665.668%200%20.37.303.67.673.67.37%200%20.668-.3.668-.67%200-.37-.298-.668-.667-.668h-.007zm2.66%200c-.368%200-.667.3-.667.668%200%20.37.298.67.667.67h2.675c.37%200%20.67-.3.67-.67%200-.37-.3-.668-.67-.668h-2.675zm5.35%209.36c.172%200%20.343-.065.473-.195.26-.26.26-.684%200-.945L15.85%209.557c-.26-.26-.684-.26-.945%200-.262.262-.262.684%200%20.946l1.337%201.337c.13.13.3.196.473.196zm-5.82-2.478c-.263.262-.263.684%200%20.946l5.348%205.35c.13.13.3.195.473.195.17%200%20.342-.066.472-.196.26-.26.26-.684%200-.945l-5.35-5.35c-.26-.26-.684-.26-.945%200z%22%20fill%3D%22%23FFCE00%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E') no-repeat;\n    //-webkit-mask-image: url('data:image/svg+xml;charset=utf-8,<svg width=\"22\" height=\"41\" viewBox=\"0 0 22 41\" xmlns=\"http://www.w3.org/2000/svg\"><title>Mmmystery</title><path d=\"M.67 30.76c.368 0 .667-.3.667-.67V3.343c0-.975 1.03-2.006 2.006-2.006h14.71c.976 0 2.007 1.03 2.007 2.006 0 .37.3.67.67.67.368 0 .667-.3.667-.67C21.397 1.625 19.772 0 18.054 0H3.344C1.623 0 0 1.625 0 3.343V30.09c0 .37.3.67.67.67zM20.73 5.35H3.342c-.37 0-.668.3-.668.668 0 .37.3.67.668.67H20.06v30.09c0 .974-1.03 2.005-2.006 2.005H3.344c-.976 0-2.007-1.03-2.007-2.006v-3.344h16.717c.37 0 .67-.3.67-.668 0-.37-.3-.67-.67-.67H.67c-.37 0-.67.3-.67.67v4.012c0 1.718 1.625 3.343 3.343 3.343h14.71c1.72 0 3.344-1.625 3.344-3.343V6.017c0-.368-.3-.668-.668-.668zM9.36 36.107c0 .738.6 1.337 1.34 1.337.736 0 1.336-.6 1.336-1.337 0-.738-.6-1.337-1.337-1.337-.74 0-1.34.6-1.34 1.338zM8.707 2.675c-.37 0-.665.3-.665.668 0 .37.303.67.673.67.37 0 .668-.3.668-.67 0-.37-.298-.668-.667-.668h-.007zm2.66 0c-.368 0-.667.3-.667.668 0 .37.298.67.667.67h2.675c.37 0 .67-.3.67-.67 0-.37-.3-.668-.67-.668h-2.675zm5.35 9.36c.172 0 .343-.065.473-.195.26-.26.26-.684 0-.945L15.85 9.557c-.26-.26-.684-.26-.945 0-.262.262-.262.684 0 .946l1.337 1.337c.13.13.3.196.473.196zm-5.82-2.478c-.263.262-.263.684 0 .946l5.348 5.35c.13.13.3.195.473.195.17 0 .342-.066.472-.196.26-.26.26-.684 0-.945l-5.35-5.35c-.26-.26-.684-.26-.945 0z\" fill=\"#FFCE00\" fill-rule=\"evenodd\"/></svg>');\n    //mask-image: url('data:image/svg+xml;charset=utf-8,<svg width=\"22\" height=\"41\" viewBox=\"0 0 22 41\" xmlns=\"http://www.w3.org/2000/svg\"><title>Mmmystery</title><path d=\"M.67 30.76c.368 0 .667-.3.667-.67V3.343c0-.975 1.03-2.006 2.006-2.006h14.71c.976 0 2.007 1.03 2.007 2.006 0 .37.3.67.67.67.368 0 .667-.3.667-.67C21.397 1.625 19.772 0 18.054 0H3.344C1.623 0 0 1.625 0 3.343V30.09c0 .37.3.67.67.67zM20.73 5.35H3.342c-.37 0-.668.3-.668.668 0 .37.3.67.668.67H20.06v30.09c0 .974-1.03 2.005-2.006 2.005H3.344c-.976 0-2.007-1.03-2.007-2.006v-3.344h16.717c.37 0 .67-.3.67-.668 0-.37-.3-.67-.67-.67H.67c-.37 0-.67.3-.67.67v4.012c0 1.718 1.625 3.343 3.343 3.343h14.71c1.72 0 3.344-1.625 3.344-3.343V6.017c0-.368-.3-.668-.668-.668zM9.36 36.107c0 .738.6 1.337 1.34 1.337.736 0 1.336-.6 1.336-1.337 0-.738-.6-1.337-1.337-1.337-.74 0-1.34.6-1.34 1.338zM8.707 2.675c-.37 0-.665.3-.665.668 0 .37.303.67.673.67.37 0 .668-.3.668-.67 0-.37-.298-.668-.667-.668h-.007zm2.66 0c-.368 0-.667.3-.667.668 0 .37.298.67.667.67h2.675c.37 0 .67-.3.67-.67 0-.37-.3-.668-.67-.668h-2.675zm5.35 9.36c.172 0 .343-.065.473-.195.26-.26.26-.684 0-.945L15.85 9.557c-.26-.26-.684-.26-.945 0-.262.262-.262.684 0 .946l1.337 1.337c.13.13.3.196.473.196zm-5.82-2.478c-.263.262-.263.684 0 .946l5.348 5.35c.13.13.3.195.473.195.17 0 .342-.066.472-.196.26-.26.26-.684 0-.945l-5.35-5.35c-.26-.26-.684-.26-.945 0z\" fill=\"#FFCE00\" fill-rule=\"evenodd\"/></svg>');\n  }\n  .Work-specific-container-advantage:before{\n    background: url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EAdvantage%20Icon%3C%2Ftitle%3E%3Cg%20fill%3D%22%23FFCE00%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M36.667%200H3.333C1.495%200%200%201.495%200%203.333v12C0%2015.7.298%2016%20.667%2016c.368%200%20.666-.3.666-.667v-12c0-1.102.898-2%202-2h33.334c1.102%200%202%20.898%202%202v17.334c0%20.368.298.666.666.666.37%200%20.667-.298.667-.666V3.333C40%201.495%2038.505%200%2036.667%200zm-8%2022.667h-9.334c-.368%200-.666.298-.666.666%200%20.368.298.667.666.667h9.334c.368%200%20.666-.3.666-.667%200-.368-.298-.666-.666-.666zm0%206.666h-9.334c-.368%200-.666.3-.666.667%200%20.368.298.667.666.667h9.334c.368%200%20.666-.3.666-.667%200-.368-.298-.667-.666-.667zM20%2028c.735%200%201.333-.598%201.333-1.333%200-.736-.598-1.334-1.333-1.334s-1.333.598-1.333%201.334c0%20.735.598%201.333%201.333%201.333zm15.353%208h-.007c-.367%200-.663.3-.663.667%200%20.368.302.666.67.666.368%200%20.667-.298.667-.666%200-.368-.3-.667-.667-.667zM8.687%2036H8.68c-.368%200-.663.3-.663.667%200%20.368.3.666.67.666.368%200%20.666-.298.666-.666%200-.368-.298-.667-.666-.667zM26%2036h-2v-3.333c0-.368-.298-.667-.667-.667-.368%200-.666.3-.666.667v4c0%20.368.298.666.666.666H26c1.254%200%201.723.74%201.898%201.334h-8.565c-.368%200-.666.298-.666.666%200%20.368.298.667.666.667h9.334c.368%200%20.666-.3.666-.667C29.333%2038.18%2028.637%2036%2026%2036zm-6.667%201.333h1.334c.368%200%20.666-.298.666-.666%200-.368-.298-.667-.666-.667h-1.334c-.368%200-.666.3-.666.667%200%20.368.298.666.666.666zm16-30.666c.17%200%20.342-.066.472-.196.26-.26.26-.68%200-.94L34.47%204.194c-.26-.26-.68-.26-.94%200-.262.26-.262.682%200%20.943L34.86%206.47c.13.13.3.197.47.197zm0%204c.17%200%20.342-.066.472-.196.26-.26.26-.68%200-.94L30.47%204.194c-.26-.26-.68-.26-.94%200-.262.26-.262.682%200%20.943l5.332%205.333c.13.13.3.197.47.197z%22%2F%3E%3Cpath%20d%3D%22M15.333%2017.333H2c-1.103%200-2%20.898-2%202V38c0%201.103.897%202%202%202h13.333c1.103%200%202-.897%202-2V19.333c0-1.102-.897-2-2-2zM16%2038c0%20.367-.3.667-.667.667H2c-.368%200-.667-.3-.667-.667V19.333c0-.367.3-.666.667-.666h13.333c.368%200%20.667.3.667.666V38zM38%2022.667h-5.333c-1.103%200-2%20.897-2%202V38c0%201.103.897%202%202%202H38c1.103%200%202-.897%202-2V24.667c0-1.103-.897-2-2-2zM38.667%2038c0%20.367-.3.667-.667.667h-5.333c-.368%200-.667-.3-.667-.667V24.667c0-.368.3-.667.667-.667H38c.368%200%20.667.3.667.667V38z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E') no-repeat;\n    //-webkit-mask-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EAdvantage%20Icon%3C%2Ftitle%3E%3Cg%20fill%3D%22%23FFCE00%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M36.667%200H3.333C1.495%200%200%201.495%200%203.333v12C0%2015.7.298%2016%20.667%2016c.368%200%20.666-.3.666-.667v-12c0-1.102.898-2%202-2h33.334c1.102%200%202%20.898%202%202v17.334c0%20.368.298.666.666.666.37%200%20.667-.298.667-.666V3.333C40%201.495%2038.505%200%2036.667%200zm-8%2022.667h-9.334c-.368%200-.666.298-.666.666%200%20.368.298.667.666.667h9.334c.368%200%20.666-.3.666-.667%200-.368-.298-.666-.666-.666zm0%206.666h-9.334c-.368%200-.666.3-.666.667%200%20.368.298.667.666.667h9.334c.368%200%20.666-.3.666-.667%200-.368-.298-.667-.666-.667zM20%2028c.735%200%201.333-.598%201.333-1.333%200-.736-.598-1.334-1.333-1.334s-1.333.598-1.333%201.334c0%20.735.598%201.333%201.333%201.333zm15.353%208h-.007c-.367%200-.663.3-.663.667%200%20.368.302.666.67.666.368%200%20.667-.298.667-.666%200-.368-.3-.667-.667-.667zM8.687%2036H8.68c-.368%200-.663.3-.663.667%200%20.368.3.666.67.666.368%200%20.666-.298.666-.666%200-.368-.298-.667-.666-.667zM26%2036h-2v-3.333c0-.368-.298-.667-.667-.667-.368%200-.666.3-.666.667v4c0%20.368.298.666.666.666H26c1.254%200%201.723.74%201.898%201.334h-8.565c-.368%200-.666.298-.666.666%200%20.368.298.667.666.667h9.334c.368%200%20.666-.3.666-.667C29.333%2038.18%2028.637%2036%2026%2036zm-6.667%201.333h1.334c.368%200%20.666-.298.666-.666%200-.368-.298-.667-.666-.667h-1.334c-.368%200-.666.3-.666.667%200%20.368.298.666.666.666zm16-30.666c.17%200%20.342-.066.472-.196.26-.26.26-.68%200-.94L34.47%204.194c-.26-.26-.68-.26-.94%200-.262.26-.262.682%200%20.943L34.86%206.47c.13.13.3.197.47.197zm0%204c.17%200%20.342-.066.472-.196.26-.26.26-.68%200-.94L30.47%204.194c-.26-.26-.68-.26-.94%200-.262.26-.262.682%200%20.943l5.332%205.333c.13.13.3.197.47.197z%22%2F%3E%3Cpath%20d%3D%22M15.333%2017.333H2c-1.103%200-2%20.898-2%202V38c0%201.103.897%202%202%202h13.333c1.103%200%202-.897%202-2V19.333c0-1.102-.897-2-2-2zM16%2038c0%20.367-.3.667-.667.667H2c-.368%200-.667-.3-.667-.667V19.333c0-.367.3-.666.667-.666h13.333c.368%200%20.667.3.667.666V38zM38%2022.667h-5.333c-1.103%200-2%20.897-2%202V38c0%201.103.897%202%202%202H38c1.103%200%202-.897%202-2V24.667c0-1.103-.897-2-2-2zM38.667%2038c0%20.367-.3.667-.667.667h-5.333c-.368%200-.667-.3-.667-.667V24.667c0-.368.3-.667.667-.667H38c.368%200%20.667.3.667.667V38z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');\n    //mask-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EAdvantage%20Icon%3C%2Ftitle%3E%3Cg%20fill%3D%22%23FFCE00%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M36.667%200H3.333C1.495%200%200%201.495%200%203.333v12C0%2015.7.298%2016%20.667%2016c.368%200%20.666-.3.666-.667v-12c0-1.102.898-2%202-2h33.334c1.102%200%202%20.898%202%202v17.334c0%20.368.298.666.666.666.37%200%20.667-.298.667-.666V3.333C40%201.495%2038.505%200%2036.667%200zm-8%2022.667h-9.334c-.368%200-.666.298-.666.666%200%20.368.298.667.666.667h9.334c.368%200%20.666-.3.666-.667%200-.368-.298-.666-.666-.666zm0%206.666h-9.334c-.368%200-.666.3-.666.667%200%20.368.298.667.666.667h9.334c.368%200%20.666-.3.666-.667%200-.368-.298-.667-.666-.667zM20%2028c.735%200%201.333-.598%201.333-1.333%200-.736-.598-1.334-1.333-1.334s-1.333.598-1.333%201.334c0%20.735.598%201.333%201.333%201.333zm15.353%208h-.007c-.367%200-.663.3-.663.667%200%20.368.302.666.67.666.368%200%20.667-.298.667-.666%200-.368-.3-.667-.667-.667zM8.687%2036H8.68c-.368%200-.663.3-.663.667%200%20.368.3.666.67.666.368%200%20.666-.298.666-.666%200-.368-.298-.667-.666-.667zM26%2036h-2v-3.333c0-.368-.298-.667-.667-.667-.368%200-.666.3-.666.667v4c0%20.368.298.666.666.666H26c1.254%200%201.723.74%201.898%201.334h-8.565c-.368%200-.666.298-.666.666%200%20.368.298.667.666.667h9.334c.368%200%20.666-.3.666-.667C29.333%2038.18%2028.637%2036%2026%2036zm-6.667%201.333h1.334c.368%200%20.666-.298.666-.666%200-.368-.298-.667-.666-.667h-1.334c-.368%200-.666.3-.666.667%200%20.368.298.666.666.666zm16-30.666c.17%200%20.342-.066.472-.196.26-.26.26-.68%200-.94L34.47%204.194c-.26-.26-.68-.26-.94%200-.262.26-.262.682%200%20.943L34.86%206.47c.13.13.3.197.47.197zm0%204c.17%200%20.342-.066.472-.196.26-.26.26-.68%200-.94L30.47%204.194c-.26-.26-.68-.26-.94%200-.262.26-.262.682%200%20.943l5.332%205.333c.13.13.3.197.47.197z%22%2F%3E%3Cpath%20d%3D%22M15.333%2017.333H2c-1.103%200-2%20.898-2%202V38c0%201.103.897%202%202%202h13.333c1.103%200%202-.897%202-2V19.333c0-1.102-.897-2-2-2zM16%2038c0%20.367-.3.667-.667.667H2c-.368%200-.667-.3-.667-.667V19.333c0-.367.3-.666.667-.666h13.333c.368%200%20.667.3.667.666V38zM38%2022.667h-5.333c-1.103%200-2%20.897-2%202V38c0%201.103.897%202%202%202H38c1.103%200%202-.897%202-2V24.667c0-1.103-.897-2-2-2zM38.667%2038c0%20.367-.3.667-.667.667h-5.333c-.368%200-.667-.3-.667-.667V24.667c0-.368.3-.667.667-.667H38c.368%200%20.667.3.667.667V38z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');\n  }\n  .Work-specific-container-dashboard:before{\n    background: url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EDashboard%20Icon%3C%2Ftitle%3E%3Cg%20fill%3D%22%23FFCE00%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M36.667%200H3.333C1.495%200%200%201.495%200%203.333v12C0%2015.7.298%2016%20.667%2016c.368%200%20.666-.3.666-.667v-12c0-1.102.898-2%202-2h33.334c1.102%200%202%20.898%202%202v23.334c0%201.175-.942%202.666-2%202.666H19.333c-.368%200-.666.3-.666.667%200%20.368.298.667.666.667h17.334c1.876%200%203.333-2.15%203.333-4V3.333C40%201.495%2038.505%200%2036.667%200zm-18%2023.333c0%20.368.298.667.666.667h17.334c.368%200%20.666-.3.666-.667%200-.368-.298-.666-.666-.666H19.333c-.368%200-.666.298-.666.666zM20%2028c.735%200%201.333-.598%201.333-1.333%200-.736-.598-1.334-1.333-1.334s-1.333.598-1.333%201.334c0%20.735.598%201.333%201.333%201.333zM8.687%2036H8.68c-.368%200-.663.3-.663.667%200%20.368.3.666.67.666.368%200%20.666-.298.666-.666%200-.368-.298-.667-.666-.667zM26%2036h-2v-3.333c0-.368-.298-.667-.667-.667-.368%200-.666.3-.666.667v4c0%20.368.298.666.666.666H26c1.254%200%201.723.74%201.898%201.334h-8.565c-.368%200-.666.298-.666.666%200%20.368.298.667.666.667h9.334c.368%200%20.666-.3.666-.667C29.333%2038.18%2028.637%2036%2026%2036zm-6.667%201.333h1.334c.368%200%20.666-.298.666-.666%200-.368-.298-.667-.666-.667h-1.334c-.368%200-.666.3-.666.667%200%20.368.298.666.666.666zm16-30.666c.17%200%20.342-.066.472-.196.26-.26.26-.68%200-.94L34.47%204.194c-.26-.26-.68-.26-.94%200-.262.26-.262.682%200%20.943L34.86%206.47c.13.13.3.197.47.197zM29.53%204.195c-.262.26-.262.682%200%20.943l5.332%205.333c.13.13.3.197.47.197.172%200%20.343-.066.473-.196.26-.26.26-.68%200-.94L30.47%204.194c-.26-.26-.68-.26-.94%200z%22%2F%3E%3Cpath%20d%3D%22M15.333%2017.333H2c-1.103%200-2%20.898-2%202V38c0%201.103.897%202%202%202h13.333c1.103%200%202-.897%202-2V19.333c0-1.102-.897-2-2-2zM16%2038c0%20.367-.3.667-.667.667H2c-.368%200-.667-.3-.667-.667V19.333c0-.367.3-.666.667-.666h13.333c.368%200%20.667.3.667.666V38z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E') no-repeat;\n    //-webkit-mask-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EDashboard%20Icon%3C%2Ftitle%3E%3Cg%20fill%3D%22%23FFCE00%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M36.667%200H3.333C1.495%200%200%201.495%200%203.333v12C0%2015.7.298%2016%20.667%2016c.368%200%20.666-.3.666-.667v-12c0-1.102.898-2%202-2h33.334c1.102%200%202%20.898%202%202v23.334c0%201.175-.942%202.666-2%202.666H19.333c-.368%200-.666.3-.666.667%200%20.368.298.667.666.667h17.334c1.876%200%203.333-2.15%203.333-4V3.333C40%201.495%2038.505%200%2036.667%200zm-18%2023.333c0%20.368.298.667.666.667h17.334c.368%200%20.666-.3.666-.667%200-.368-.298-.666-.666-.666H19.333c-.368%200-.666.298-.666.666zM20%2028c.735%200%201.333-.598%201.333-1.333%200-.736-.598-1.334-1.333-1.334s-1.333.598-1.333%201.334c0%20.735.598%201.333%201.333%201.333zM8.687%2036H8.68c-.368%200-.663.3-.663.667%200%20.368.3.666.67.666.368%200%20.666-.298.666-.666%200-.368-.298-.667-.666-.667zM26%2036h-2v-3.333c0-.368-.298-.667-.667-.667-.368%200-.666.3-.666.667v4c0%20.368.298.666.666.666H26c1.254%200%201.723.74%201.898%201.334h-8.565c-.368%200-.666.298-.666.666%200%20.368.298.667.666.667h9.334c.368%200%20.666-.3.666-.667C29.333%2038.18%2028.637%2036%2026%2036zm-6.667%201.333h1.334c.368%200%20.666-.298.666-.666%200-.368-.298-.667-.666-.667h-1.334c-.368%200-.666.3-.666.667%200%20.368.298.666.666.666zm16-30.666c.17%200%20.342-.066.472-.196.26-.26.26-.68%200-.94L34.47%204.194c-.26-.26-.68-.26-.94%200-.262.26-.262.682%200%20.943L34.86%206.47c.13.13.3.197.47.197zM29.53%204.195c-.262.26-.262.682%200%20.943l5.332%205.333c.13.13.3.197.47.197.172%200%20.343-.066.473-.196.26-.26.26-.68%200-.94L30.47%204.194c-.26-.26-.68-.26-.94%200z%22%2F%3E%3Cpath%20d%3D%22M15.333%2017.333H2c-1.103%200-2%20.898-2%202V38c0%201.103.897%202%202%202h13.333c1.103%200%202-.897%202-2V19.333c0-1.102-.897-2-2-2zM16%2038c0%20.367-.3.667-.667.667H2c-.368%200-.667-.3-.667-.667V19.333c0-.367.3-.666.667-.666h13.333c.368%200%20.667.3.667.666V38z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');\n    //mask-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EDashboard%20Icon%3C%2Ftitle%3E%3Cg%20fill%3D%22%23FFCE00%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M36.667%200H3.333C1.495%200%200%201.495%200%203.333v12C0%2015.7.298%2016%20.667%2016c.368%200%20.666-.3.666-.667v-12c0-1.102.898-2%202-2h33.334c1.102%200%202%20.898%202%202v23.334c0%201.175-.942%202.666-2%202.666H19.333c-.368%200-.666.3-.666.667%200%20.368.298.667.666.667h17.334c1.876%200%203.333-2.15%203.333-4V3.333C40%201.495%2038.505%200%2036.667%200zm-18%2023.333c0%20.368.298.667.666.667h17.334c.368%200%20.666-.3.666-.667%200-.368-.298-.666-.666-.666H19.333c-.368%200-.666.298-.666.666zM20%2028c.735%200%201.333-.598%201.333-1.333%200-.736-.598-1.334-1.333-1.334s-1.333.598-1.333%201.334c0%20.735.598%201.333%201.333%201.333zM8.687%2036H8.68c-.368%200-.663.3-.663.667%200%20.368.3.666.67.666.368%200%20.666-.298.666-.666%200-.368-.298-.667-.666-.667zM26%2036h-2v-3.333c0-.368-.298-.667-.667-.667-.368%200-.666.3-.666.667v4c0%20.368.298.666.666.666H26c1.254%200%201.723.74%201.898%201.334h-8.565c-.368%200-.666.298-.666.666%200%20.368.298.667.666.667h9.334c.368%200%20.666-.3.666-.667C29.333%2038.18%2028.637%2036%2026%2036zm-6.667%201.333h1.334c.368%200%20.666-.298.666-.666%200-.368-.298-.667-.666-.667h-1.334c-.368%200-.666.3-.666.667%200%20.368.298.666.666.666zm16-30.666c.17%200%20.342-.066.472-.196.26-.26.26-.68%200-.94L34.47%204.194c-.26-.26-.68-.26-.94%200-.262.26-.262.682%200%20.943L34.86%206.47c.13.13.3.197.47.197zM29.53%204.195c-.262.26-.262.682%200%20.943l5.332%205.333c.13.13.3.197.47.197.172%200%20.343-.066.473-.196.26-.26.26-.68%200-.94L30.47%204.194c-.26-.26-.68-.26-.94%200z%22%2F%3E%3Cpath%20d%3D%22M15.333%2017.333H2c-1.103%200-2%20.898-2%202V38c0%201.103.897%202%202%202h13.333c1.103%200%202-.897%202-2V19.333c0-1.102-.897-2-2-2zM16%2038c0%20.367-.3.667-.667.667H2c-.368%200-.667-.3-.667-.667V19.333c0-.367.3-.666.667-.666h13.333c.368%200%20.667.3.667.666V38z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');\n  }\n  .Work-specific-container-illustrations:before{\n    background: url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EIllustration%20Icon%3C%2Ftitle%3E%3Cg%20fill%3D%22%23FFCE00%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M24.667%2024H2c-1.103%200-2%20.897-2%202v12c0%201.103.897%202%202%202h22.667c1.102%200%202-.897%202-2V26c0-1.103-.898-2-2-2zm.666%2014c0%20.367-.3.667-.666.667H2c-.367%200-.667-.3-.667-.667V26c0-.367.3-.667.667-.667h22.667c.367%200%20.666.3.666.667v12zM4.667%2022.667c1.102%200%202-.898%202-2V3.333c0-.1-.026-.194-.066-.28-.002-.005%200-.012-.004-.018L5.263.37c-.226-.453-.967-.453-1.193%200L2.737%203.034c-.003.006-.002.013-.004.02-.04.084-.066.178-.066.278v17.334c0%201.102.897%202%202%202zM4%204h1.333v14.667H4V4zm.667%2017.333c-.368%200-.667-.3-.667-.666V20h1.333v.667c0%20.367-.3.666-.666.666zM4.92%202.667h-.508l.255-.51.254.51z%22%2F%3E%3Cpath%20d%3D%22M38%200H12.667c-1.103%200-2%20.897-2%202v20c0%20.368.298.667.666.667.368%200%20.667-.3.667-.667V2c0-.367.3-.667.667-.667H38c.367%200%20.667.3.667.667v22.667c0%20.368.298.666.666.666.368%200%20.667-.298.667-.666V2c0-1.103-.897-2-2-2zM27.333%206.667h5.334c.368%200%20.666-.3.666-.667%200-.368-.298-.667-.666-.667h-5.334c-.368%200-.666.3-.666.667%200%20.368.298.667.666.667zm0%202.666H34c.368%200%20.667-.298.667-.666%200-.368-.3-.667-.667-.667h-6.667c-.368%200-.666.3-.666.667%200%20.368.298.666.666.666zM16.667%2016H22c.368%200%20.667-.3.667-.667%200-.368-.3-.666-.667-.666h-5.333c-.368%200-.667.298-.667.666%200%20.368.3.667.667.667zm0%204H26c.368%200%20.667-.3.667-.667%200-.368-.3-.666-.667-.666h-9.333c-.368%200-.667.298-.667.666%200%20.368.3.667.667.667zm0%202.667H22c.368%200%20.667-.3.667-.667%200-.368-.3-.667-.667-.667h-5.333c-.368%200-.667.3-.667.667%200%20.368.3.667.667.667zm17.333-4h-5.333c-.368%200-.667.298-.667.666%200%20.368.3.667.667.667H34c.368%200%20.667-.3.667-.667%200-.368-.3-.666-.667-.666zM24%2022c0%20.368.3.667.667.667h8c.368%200%20.666-.3.666-.667%200-.368-.298-.667-.666-.667h-8c-.368%200-.667.3-.667.667zm-11.333%207.333h4c.368%200%20.666-.298.666-.666%200-.368-.298-.667-.666-.667h-4c-.368%200-.667.3-.667.667%200%20.368.3.666.667.666zm0%202.667H18c.368%200%20.667-.3.667-.667%200-.368-.3-.666-.667-.666h-5.333c-.368%200-.667.298-.667.666%200%20.368.3.667.667.667zM22%2034.667h-9.333c-.368%200-.667.298-.667.666%200%20.368.3.667.667.667H22c.368%200%20.667-.3.667-.667%200-.368-.3-.666-.667-.666zm8%204h-1.333c-.368%200-.667.298-.667.666%200%20.368.3.667.667.667H30c.368%200%20.667-.3.667-.667%200-.368-.3-.666-.667-.666zM34%2024h-5.333c-.368%200-.667.3-.667.667%200%20.368.3.666.667.666H34c.368%200%20.667-.298.667-.666%200-.368-.3-.667-.667-.667zm-4%202.667h-1.333c-.368%200-.667.298-.667.666%200%20.368.3.667.667.667H30c.368%200%20.667-.3.667-.667%200-.368-.3-.666-.667-.666zm0%202.666h-1.333c-.368%200-.667.3-.667.667%200%20.368.3.667.667.667H30c.368%200%20.667-.3.667-.667%200-.368-.3-.667-.667-.667zM36%2032c-.735%200-1.333.598-1.333%201.333%200%20.736.598%201.334%201.333%201.334s1.333-.598%201.333-1.334c0-.735-.598-1.333-1.333-1.333z%22%2F%3E%3Cpath%20d%3D%22M18.667%2010.667c1.47%200%202.666-1.196%202.666-2.667%200-1.47-1.196-2.667-2.666-2.667S16%206.53%2016%208c0%201.47%201.196%202.667%202.667%202.667zm0-4C19.402%206.667%2020%207.265%2020%208s-.598%201.333-1.333%201.333c-.736%200-1.334-.598-1.334-1.333s.598-1.333%201.334-1.333zM6.667%2028C5.197%2028%204%2029.196%204%2030.667c0%201.47%201.196%202.666%202.667%202.666%201.47%200%202.666-1.196%202.666-2.666S8.137%2028%206.667%2028zm0%204c-.736%200-1.334-.598-1.334-1.333%200-.736.598-1.334%201.334-1.334.735%200%201.333.598%201.333%201.334C8%2031.402%207.402%2032%206.667%2032zM38%2026.667h-4c-1.103%200-2%20.897-2%202V38c0%201.103.897%202%202%202h4c1.103%200%202-.897%202-2v-9.333c0-1.103-.897-2-2-2zM38.667%2038c0%20.367-.3.667-.667.667h-4c-.367%200-.667-.3-.667-.667v-9.333c0-.368.3-.667.667-.667h4c.367%200%20.667.3.667.667V38z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E') no-repeat;\n    //-webkit-mask-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EIllustration%20Icon%3C%2Ftitle%3E%3Cg%20fill%3D%22%23FFCE00%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M24.667%2024H2c-1.103%200-2%20.897-2%202v12c0%201.103.897%202%202%202h22.667c1.102%200%202-.897%202-2V26c0-1.103-.898-2-2-2zm.666%2014c0%20.367-.3.667-.666.667H2c-.367%200-.667-.3-.667-.667V26c0-.367.3-.667.667-.667h22.667c.367%200%20.666.3.666.667v12zM4.667%2022.667c1.102%200%202-.898%202-2V3.333c0-.1-.026-.194-.066-.28-.002-.005%200-.012-.004-.018L5.263.37c-.226-.453-.967-.453-1.193%200L2.737%203.034c-.003.006-.002.013-.004.02-.04.084-.066.178-.066.278v17.334c0%201.102.897%202%202%202zM4%204h1.333v14.667H4V4zm.667%2017.333c-.368%200-.667-.3-.667-.666V20h1.333v.667c0%20.367-.3.666-.666.666zM4.92%202.667h-.508l.255-.51.254.51z%22%2F%3E%3Cpath%20d%3D%22M38%200H12.667c-1.103%200-2%20.897-2%202v20c0%20.368.298.667.666.667.368%200%20.667-.3.667-.667V2c0-.367.3-.667.667-.667H38c.367%200%20.667.3.667.667v22.667c0%20.368.298.666.666.666.368%200%20.667-.298.667-.666V2c0-1.103-.897-2-2-2zM27.333%206.667h5.334c.368%200%20.666-.3.666-.667%200-.368-.298-.667-.666-.667h-5.334c-.368%200-.666.3-.666.667%200%20.368.298.667.666.667zm0%202.666H34c.368%200%20.667-.298.667-.666%200-.368-.3-.667-.667-.667h-6.667c-.368%200-.666.3-.666.667%200%20.368.298.666.666.666zM16.667%2016H22c.368%200%20.667-.3.667-.667%200-.368-.3-.666-.667-.666h-5.333c-.368%200-.667.298-.667.666%200%20.368.3.667.667.667zm0%204H26c.368%200%20.667-.3.667-.667%200-.368-.3-.666-.667-.666h-9.333c-.368%200-.667.298-.667.666%200%20.368.3.667.667.667zm0%202.667H22c.368%200%20.667-.3.667-.667%200-.368-.3-.667-.667-.667h-5.333c-.368%200-.667.3-.667.667%200%20.368.3.667.667.667zm17.333-4h-5.333c-.368%200-.667.298-.667.666%200%20.368.3.667.667.667H34c.368%200%20.667-.3.667-.667%200-.368-.3-.666-.667-.666zM24%2022c0%20.368.3.667.667.667h8c.368%200%20.666-.3.666-.667%200-.368-.298-.667-.666-.667h-8c-.368%200-.667.3-.667.667zm-11.333%207.333h4c.368%200%20.666-.298.666-.666%200-.368-.298-.667-.666-.667h-4c-.368%200-.667.3-.667.667%200%20.368.3.666.667.666zm0%202.667H18c.368%200%20.667-.3.667-.667%200-.368-.3-.666-.667-.666h-5.333c-.368%200-.667.298-.667.666%200%20.368.3.667.667.667zM22%2034.667h-9.333c-.368%200-.667.298-.667.666%200%20.368.3.667.667.667H22c.368%200%20.667-.3.667-.667%200-.368-.3-.666-.667-.666zm8%204h-1.333c-.368%200-.667.298-.667.666%200%20.368.3.667.667.667H30c.368%200%20.667-.3.667-.667%200-.368-.3-.666-.667-.666zM34%2024h-5.333c-.368%200-.667.3-.667.667%200%20.368.3.666.667.666H34c.368%200%20.667-.298.667-.666%200-.368-.3-.667-.667-.667zm-4%202.667h-1.333c-.368%200-.667.298-.667.666%200%20.368.3.667.667.667H30c.368%200%20.667-.3.667-.667%200-.368-.3-.666-.667-.666zm0%202.666h-1.333c-.368%200-.667.3-.667.667%200%20.368.3.667.667.667H30c.368%200%20.667-.3.667-.667%200-.368-.3-.667-.667-.667zM36%2032c-.735%200-1.333.598-1.333%201.333%200%20.736.598%201.334%201.333%201.334s1.333-.598%201.333-1.334c0-.735-.598-1.333-1.333-1.333z%22%2F%3E%3Cpath%20d%3D%22M18.667%2010.667c1.47%200%202.666-1.196%202.666-2.667%200-1.47-1.196-2.667-2.666-2.667S16%206.53%2016%208c0%201.47%201.196%202.667%202.667%202.667zm0-4C19.402%206.667%2020%207.265%2020%208s-.598%201.333-1.333%201.333c-.736%200-1.334-.598-1.334-1.333s.598-1.333%201.334-1.333zM6.667%2028C5.197%2028%204%2029.196%204%2030.667c0%201.47%201.196%202.666%202.667%202.666%201.47%200%202.666-1.196%202.666-2.666S8.137%2028%206.667%2028zm0%204c-.736%200-1.334-.598-1.334-1.333%200-.736.598-1.334%201.334-1.334.735%200%201.333.598%201.333%201.334C8%2031.402%207.402%2032%206.667%2032zM38%2026.667h-4c-1.103%200-2%20.897-2%202V38c0%201.103.897%202%202%202h4c1.103%200%202-.897%202-2v-9.333c0-1.103-.897-2-2-2zM38.667%2038c0%20.367-.3.667-.667.667h-4c-.367%200-.667-.3-.667-.667v-9.333c0-.368.3-.667.667-.667h4c.367%200%20.667.3.667.667V38z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');\n    //mask-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EIllustration%20Icon%3C%2Ftitle%3E%3Cg%20fill%3D%22%23FFCE00%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M24.667%2024H2c-1.103%200-2%20.897-2%202v12c0%201.103.897%202%202%202h22.667c1.102%200%202-.897%202-2V26c0-1.103-.898-2-2-2zm.666%2014c0%20.367-.3.667-.666.667H2c-.367%200-.667-.3-.667-.667V26c0-.367.3-.667.667-.667h22.667c.367%200%20.666.3.666.667v12zM4.667%2022.667c1.102%200%202-.898%202-2V3.333c0-.1-.026-.194-.066-.28-.002-.005%200-.012-.004-.018L5.263.37c-.226-.453-.967-.453-1.193%200L2.737%203.034c-.003.006-.002.013-.004.02-.04.084-.066.178-.066.278v17.334c0%201.102.897%202%202%202zM4%204h1.333v14.667H4V4zm.667%2017.333c-.368%200-.667-.3-.667-.666V20h1.333v.667c0%20.367-.3.666-.666.666zM4.92%202.667h-.508l.255-.51.254.51z%22%2F%3E%3Cpath%20d%3D%22M38%200H12.667c-1.103%200-2%20.897-2%202v20c0%20.368.298.667.666.667.368%200%20.667-.3.667-.667V2c0-.367.3-.667.667-.667H38c.367%200%20.667.3.667.667v22.667c0%20.368.298.666.666.666.368%200%20.667-.298.667-.666V2c0-1.103-.897-2-2-2zM27.333%206.667h5.334c.368%200%20.666-.3.666-.667%200-.368-.298-.667-.666-.667h-5.334c-.368%200-.666.3-.666.667%200%20.368.298.667.666.667zm0%202.666H34c.368%200%20.667-.298.667-.666%200-.368-.3-.667-.667-.667h-6.667c-.368%200-.666.3-.666.667%200%20.368.298.666.666.666zM16.667%2016H22c.368%200%20.667-.3.667-.667%200-.368-.3-.666-.667-.666h-5.333c-.368%200-.667.298-.667.666%200%20.368.3.667.667.667zm0%204H26c.368%200%20.667-.3.667-.667%200-.368-.3-.666-.667-.666h-9.333c-.368%200-.667.298-.667.666%200%20.368.3.667.667.667zm0%202.667H22c.368%200%20.667-.3.667-.667%200-.368-.3-.667-.667-.667h-5.333c-.368%200-.667.3-.667.667%200%20.368.3.667.667.667zm17.333-4h-5.333c-.368%200-.667.298-.667.666%200%20.368.3.667.667.667H34c.368%200%20.667-.3.667-.667%200-.368-.3-.666-.667-.666zM24%2022c0%20.368.3.667.667.667h8c.368%200%20.666-.3.666-.667%200-.368-.298-.667-.666-.667h-8c-.368%200-.667.3-.667.667zm-11.333%207.333h4c.368%200%20.666-.298.666-.666%200-.368-.298-.667-.666-.667h-4c-.368%200-.667.3-.667.667%200%20.368.3.666.667.666zm0%202.667H18c.368%200%20.667-.3.667-.667%200-.368-.3-.666-.667-.666h-5.333c-.368%200-.667.298-.667.666%200%20.368.3.667.667.667zM22%2034.667h-9.333c-.368%200-.667.298-.667.666%200%20.368.3.667.667.667H22c.368%200%20.667-.3.667-.667%200-.368-.3-.666-.667-.666zm8%204h-1.333c-.368%200-.667.298-.667.666%200%20.368.3.667.667.667H30c.368%200%20.667-.3.667-.667%200-.368-.3-.666-.667-.666zM34%2024h-5.333c-.368%200-.667.3-.667.667%200%20.368.3.666.667.666H34c.368%200%20.667-.298.667-.666%200-.368-.3-.667-.667-.667zm-4%202.667h-1.333c-.368%200-.667.298-.667.666%200%20.368.3.667.667.667H30c.368%200%20.667-.3.667-.667%200-.368-.3-.666-.667-.666zm0%202.666h-1.333c-.368%200-.667.3-.667.667%200%20.368.3.667.667.667H30c.368%200%20.667-.3.667-.667%200-.368-.3-.667-.667-.667zM36%2032c-.735%200-1.333.598-1.333%201.333%200%20.736.598%201.334%201.333%201.334s1.333-.598%201.333-1.334c0-.735-.598-1.333-1.333-1.333z%22%2F%3E%3Cpath%20d%3D%22M18.667%2010.667c1.47%200%202.666-1.196%202.666-2.667%200-1.47-1.196-2.667-2.666-2.667S16%206.53%2016%208c0%201.47%201.196%202.667%202.667%202.667zm0-4C19.402%206.667%2020%207.265%2020%208s-.598%201.333-1.333%201.333c-.736%200-1.334-.598-1.334-1.333s.598-1.333%201.334-1.333zM6.667%2028C5.197%2028%204%2029.196%204%2030.667c0%201.47%201.196%202.666%202.667%202.666%201.47%200%202.666-1.196%202.666-2.666S8.137%2028%206.667%2028zm0%204c-.736%200-1.334-.598-1.334-1.333%200-.736.598-1.334%201.334-1.334.735%200%201.333.598%201.333%201.334C8%2031.402%207.402%2032%206.667%2032zM38%2026.667h-4c-1.103%200-2%20.897-2%202V38c0%201.103.897%202%202%202h4c1.103%200%202-.897%202-2v-9.333c0-1.103-.897-2-2-2zM38.667%2038c0%20.367-.3.667-.667.667h-4c-.367%200-.667-.3-.667-.667v-9.333c0-.368.3-.667.667-.667h4c.367%200%20.667.3.667.667V38z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');\n  }\n}\n\n@media only screen and (min-width: 680px) and (max-width: 999px){\n  .Work-list-container{\n    margin: 0 30px;\n  }\n}\n\n@media only screen and (min-width: 1000px){\n  .Work-list-container{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 1000px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n", ""]);

  // exports


/***/ },
/* 60 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 61 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 62 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ }
/******/ ]);