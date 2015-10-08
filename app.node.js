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

  var _reactDom = __webpack_require__(39);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(7);

  var _libLocation = __webpack_require__(4);

  var _libLocation2 = _interopRequireDefault(_libLocation);

  var _componentsLayout = __webpack_require__(19);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(21);
    }, '/500': function _() {
      return __webpack_require__(22);
    }, '/about': function about() {
      return __webpack_require__(23);
    }, '/blog': function blog() {
      return __webpack_require__(24);
    }, '/blog/test-article-one': function blogTestArticleOne() {
      return __webpack_require__(25);
    }, '/blog/test-article-two': function blogTestArticleTwo() {
      return __webpack_require__(26);
    }, '/': function _() {
      return __webpack_require__(27);
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

  __webpack_require__(35);

  var _libLocation = __webpack_require__(4);

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

  var _fbjsLibExecutionEnvironment = __webpack_require__(7);

  var _historyLibCreateBrowserHistory = __webpack_require__(37);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibUseQueries = __webpack_require__(38);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = _fbjsLibExecutionEnvironment.canUseDOM ? (0, _historyLibUseQueries2['default'])(_historyLibCreateBrowserHistory2['default'])() : {};

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/* Colors */\n\n/* Uses */\n\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n/* Old Media Queries\n$iphone5-screen: 320px;\n$iphone6-screen: 375px;\n$tiny-screen: 500px;\n$extra-small-screen: 600px;\n$small-screen: 768px;\n$small-medium: 940px;\n$medium-screen: 1280px;\n$large-screen: 1440px;\n$x-large-screen: 1600px;\n*/\n\n/* React-starter-kit\n$screen-sm-min: 768px;\n$screen-md-min: 992px;\n$screen-lg-min: 1200px;\n*/\n\n/* Supported Size Ranges: */\n/* handhelds, except-handhelds */\n/* small-screens, except-small-screens, to-small-screens, above-small-screens */\n/* medium-screens, except-medium-screens, above-medium-screens */\n/* large-screens, except-large-screens */\n/* Use: */\n/* @include media(handhelds, large-screens) */\n/* @include media(above-small-screens) {\n     max-width: 960px\n   }\n*/\n\n/* Typesetting variables. Edit these! */ /* in pixels. This would result in 22px on desktop */ /* how large the line height is as a multiple of font size */ /* ADJUST THE FIRST IF YOU CHANGE $baselineHeight\n\n/* Rate of growth for headings */\n/* I actually like this to be slightly smaller then the leading. Makes for tight headings. */\n\n/* Setup */\nhtml {\n  /* Change default typefaces here */\n  font-family: 'ProximaNova-Regular', 'Open Sans', 'Helvetica', 'sans-serif';\n  font-size: calc(22 / 16 * 100%);\n  font-weight: normal;\n  font-style: normal;\n  color: #394453;\n\n  /* Make everything look a little nicer in webkit */\n  -webkit-font-smoothing: antialiased;\n}\n  /* -webkit-text-size-adjust: auto\n  // -moz-text-size-adjust: auto\n  // -ms-text-size-adjust: auto\n  // -o-text-size-adjust: auto\n  // text-size-adjust: auto */\n\n/* Copy & Lists */\np {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n}\nul, ol {\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\nul li, ol li {\n  line-height: calc(1.5 * 1rem);\n}\nul ul, ul ol, ol ul, ol ol {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nblockquote {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\n/* Headings */\nh1, h2, h3, h4, h5, h6 {\n  /* Change heading typefaces here */\n  font-family: 'Bariol', 'Archivo Narrow', 'Source Sans Pro', 'Alegreya', 'Playfair Display', 'Fira Sans', 'Vollkorn', 'ProximaNova-Semibold', 'Helvetica', 'sans-serif';\n  font-weight: bold;\n  font-style: normal;\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n  line-height: calc(1.5 * 1rem);\n}\nh1 {\n  font-size: calc(2.20 * 1.414 * 1rem);\n  font-weight: 700;\n  line-height: calc(2.35 * 1.5 * 1rem);\n  margin-top: calc(0.15 * 1.5 * 1rem);\n}\n\n@media only screen and (min-width: 680px){\n  h1{\n    font-size: calc(3 * 1.414 * 1rem);\n    line-height: calc(3 * 1.5 * 1rem);\n    //margin-top: calc(2 * calc(1.5 * 1rem));\n  }\n}\n\n\nh2 {\n  font-size: calc(2 * 1.414 * 1rem);\n  line-height: calc(2 * 1.5 * 1rem);\n  margin-top: calc(2 * 1.5 * 1rem);\n}\n\nh3 {\n  font-size: calc(1 * 1.414 * 1rem);\n}\nh4 {\n  font-size: calc(1.414 / 2 * 1rem);\n}\nh5 {\n  font-size: calc(1.414 / 3 * 1rem);\n}\nh6 {\n  font-size: calc(1.414 / 4 * 1rem);\n}\n\n/* Tables */\ntable {\n  margin-top: calc(1.5 * 1rem);\n  border-spacing: 0px;\n  border-collapse: collapse;\n}\ntable td, table th {\n  padding: 0;\n  line-height: calc(1.5 * 22 - 0px);\n}\n/* Code blocks */\ncode {\n  /* Forces text to constrain to the line-height. Not ideal, but works. */\n  vertical-align: bottom;\n}\n/* Leading paragraph text */\n.lead {\n  font-size: calc(1.414 * 1rem);\n}\n\n/* Hug a the block above you */\n.hug {\n  margin-top: 0;\n}\n\n\n.Feature-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  max-width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  -webkit-flex-flow: column nowrap;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  margin-bottom: 75px;\n}\n\n.Image-section {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n}\n\n.Image-section:nth-child(n){\n  margin-right: 30px;\n}\n\n.Image-section:last-child{\n  margin-right: 0;\n}\n\n.Image-section:nth-child(1n){\n  margin-right: 0;\n}\n\n.Content-section {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n}\n\n.Content-section:nth-child(n){\n  margin-right: 30px;\n}\n\n.Content-section:last-child{\n  margin-right: 0;\n}\n\n.Content-section:nth-child(1n){\n  margin-right: 0;\n}\n\n.featureImg {\n  width: 700px;\n  height: 350px;\n  margin-left: -20%;\n  //border-top-left-radius: 75px;\n}\n\n.Image-container {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n  height: 360px;\n  overflow: hidden;\n  border-top-right-radius: 75px;\n}\n\n.Image-container:nth-child(n){\n  margin-right: 30px;\n}\n\n.Image-container:last-child{\n  margin-right: 0;\n}\n\n.Image-container:nth-child(1n){\n  margin-right: 0;\n}\n\n.Image {\n  height: 100%;\n  width: auto;\n  -webkit-background-size: cover;\n          background-size: cover;\n  background: url('https://s3-us-west-1.amazonaws.com/phil-portfolio-images/Mmmystery-Image-1.jpg') no-repeat center center;\n}\n\n.Link {\n  position: relative;\n  display: block;\n  text-decoration: none;\n  color: #FFBF00;\n  margin-top: 15px;\n  font-family: 'ProximaNova-Semibold','Open Sans','Helvetica','sans-serif';\n  font-weight: 500;\n}\n\n.Link:after {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 4px;\n  height: 21px;\n  width: 36px;\n  background-color: #FFBF00;\n  -webkit-mask-image: url('data:image/svg+xml;charset=utf-8,<svg width=\"36\" height=\"21\" viewBox=\"0 0 36 21\" xmlns=\"http://www.w3.org/2000/svg\"><title>link</title><path d=\"M25.358 0l-1.45 1.418 8.19 8.078L0 9.12v2.008l32.097.376-8.19 8.078L25.358 21 36 10.5 25.358 0z\" fill=\"#FFD968\" fill-rule=\"evenodd\"/></svg>');\n  mask-image: url('data:image/svg+xml;charset=utf-8,<svg width=\"36\" height=\"21\" viewBox=\"0 0 36 21\" xmlns=\"http://www.w3.org/2000/svg\"><title>link</title><path d=\"M25.358 0l-1.45 1.418 8.19 8.078L0 9.12v2.008l32.097.376-8.19 8.078L25.358 21 36 10.5 25.358 0z\" fill=\"#FFD968\" fill-rule=\"evenodd\"/></svg>');\n}\n\n\n.Content-title h5, .Content-title .title-platform {\n  display: inline-block;\n  font-family: 'Bariol','Abril Fatface','Playfair Display','Fira Sans','Vollkorn','ProximaNova-Semibold','Helvetica','sans-serif';\n  font-size: calc(1 * 1.414 * 1rem);\n  line-height: calc(1.1 * 1.5 * 1rem);\n}\n\n\n.Content-title .title-platform {\n  color: #7F90A6;\n  margin-left: 15px;\n}\n\n\n.Content-title p {\n  margin-top: calc(1.5 * 1rem / 6);\n}\n\n.Content-summary {\n  margin-top: calc(1.5 * 1rem / 6);\n  position: relative;\n}\n\n.Content-summary:before {\n  content: '';\n  display: block;\n  position: absolute;\n  z-index: -1;\n  top: -10px;\n  left: -20px;\n  height: 58px;\n  width: 65px;\n  background-color: #FDEEBD;\n  -webkit-mask-image: url('data:image/svg+xml;charset=utf-8,<svg width=\"65\" height=\"58\" viewBox=\"0 0 65 58\" xmlns=\"http://www.w3.org/2000/svg\"><title>Quotation</title><path d=\"M47.326 29.435c0 2.108 1.244 3.227 3.73 3.36l3.93.196c2.617.133 4.94 1.384 6.97 3.755 2.03 2.37 3.044 5.07 3.044 8.1 0 3.687-1.31 6.782-3.927 9.284-2.62 2.502-5.892 3.753-9.82 3.753-4.58 0-8.345-1.81-11.29-5.433-2.946-3.622-4.42-8.264-4.42-13.927 0-10.536 4.125-21.336 12.372-32.4C50.927 2.042 53.545 0 55.77 0c2.488 0 3.732 1.317 3.732 3.95 0 1.055-.72 2.503-2.16 4.347-3.535 4.478-6.48 9.812-8.837 16.002-.786 2.106-1.18 3.818-1.18 5.135zm-35.74 0c0 2.108 1.244 3.227 3.73 3.36l3.93.196c2.748.133 5.137 1.384 7.166 3.755 2.03 2.37 3.044 5.07 3.044 8.1 0 3.687-1.31 6.782-3.927 9.284-2.62 2.502-5.893 3.753-9.82 3.753-4.582 0-8.346-1.81-11.292-5.433C1.473 48.828 0 44.186 0 38.523c0-10.536 4.124-21.336 12.372-32.4C15.382 2.042 18.002 0 20.227 0c2.487 0 3.73 1.317 3.73 3.95 0 1.055-.72 2.503-2.16 4.347-2.618 3.293-4.974 7.112-7.07 11.458-2.094 4.346-3.14 7.573-3.14 9.68z\" fill=\"#FDEEBD\" fill-rule=\"evenodd\"/></svg>');\n  mask-image: url('data:image/svg+xml;charset=utf-8,<svg width=\"65\" height=\"58\" viewBox=\"0 0 65 58\" xmlns=\"http://www.w3.org/2000/svg\"><title>Quotation</title><path d=\"M47.326 29.435c0 2.108 1.244 3.227 3.73 3.36l3.93.196c2.617.133 4.94 1.384 6.97 3.755 2.03 2.37 3.044 5.07 3.044 8.1 0 3.687-1.31 6.782-3.927 9.284-2.62 2.502-5.892 3.753-9.82 3.753-4.58 0-8.345-1.81-11.29-5.433-2.946-3.622-4.42-8.264-4.42-13.927 0-10.536 4.125-21.336 12.372-32.4C50.927 2.042 53.545 0 55.77 0c2.488 0 3.732 1.317 3.732 3.95 0 1.055-.72 2.503-2.16 4.347-3.535 4.478-6.48 9.812-8.837 16.002-.786 2.106-1.18 3.818-1.18 5.135zm-35.74 0c0 2.108 1.244 3.227 3.73 3.36l3.93.196c2.748.133 5.137 1.384 7.166 3.755 2.03 2.37 3.044 5.07 3.044 8.1 0 3.687-1.31 6.782-3.927 9.284-2.62 2.502-5.893 3.753-9.82 3.753-4.582 0-8.346-1.81-11.292-5.433C1.473 48.828 0 44.186 0 38.523c0-10.536 4.124-21.336 12.372-32.4C15.382 2.042 18.002 0 20.227 0c2.487 0 3.73 1.317 3.73 3.95 0 1.055-.72 2.503-2.16 4.347-2.618 3.293-4.974 7.112-7.07 11.458-2.094 4.346-3.14 7.573-3.14 9.68z\" fill=\"#FDEEBD\" fill-rule=\"evenodd\"/></svg>');\n}\n\n@media only screen and (max-width: 679px){\n  .Feature-container{\n    padding: 0 15px;\n  }\n  .Content-title{\n    margin-bottom: 25px;\n  }\n  .Content-title h5{\n    margin-top: calc(.75 * 1rem);\n    color: #FFBF00;\n    font-weight: normal;\n  }\n  .Content-title p{\n    margin-top: 5px;\n    font-size: 20px;\n    color: #5B6675;\n    font-weight: 400;\n  }\n  .Content-summary{\n    font-size: calc(.8 * 1.414 * 1rem);\n    line-height: calc(1.15 * 1.5 * 1rem);\n    font-weight: 300;\n  }\n  .Link:after{\n    right: 0px;\n  }\n}\n\n@media only screen and (min-width: 680px){\n  .Feature-container{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n  }\n  .Image-section{\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 1/2 - (30px - 30px * 1/2));\n  }\n  .Image-section:nth-child(n){\n    margin-right: 30px;\n  }\n  .Image-section:last-child{\n    margin-right: 0;\n  }\n  .Image-section:nth-child(2n){\n    margin-right: 0;\n  }\n  .Image-container{\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 9/10 - (30px - 30px * 9/10));\n  }\n  .Image-container:nth-child(n){\n    margin-right: 30px;\n  }\n  .Image-container:last-child{\n    margin-right: 0;\n  }\n  .Image-container:nth-child(10n){\n    margin-right: 0;\n  }\n  .Content-section{\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 1/2 - (30px - 30px * 1/2));\n  }\n  .Content-section:nth-child(n){\n    margin-right: 30px;\n  }\n  .Content-section:last-child{\n    margin-right: 0;\n  }\n  .Content-section:nth-child(2n){\n    margin-right: 0;\n  }\n  .Content-title{\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n    margin-bottom: 30px;\n  }\n  .Content-title:nth-child(n){\n    margin-right: 30px;\n  }\n  .Content-title:last-child{\n    margin-right: 0;\n  }\n  .Content-title:nth-child(1n){\n    margin-right: 0;\n  }\n  .Content-title h5, .Content-title .title-platform{\n    font-size: calc(1.25 * 1.414 * 1rem);\n    margin-top: 20px;\n  }\n  .Content-title p{\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 9/10 - (30px - 30px * 9/10));\n    font-size: 18px;\n    color: #7F90A6;\n    line-height: calc(1.25 * 1.5 * 1rem);\n    margin-top: 0;\n  }\n  .Content-title p:nth-child(n){\n    margin-right: 30px;\n  }\n  .Content-title p:last-child{\n    margin-right: 0;\n  }\n  .Content-title p:nth-child(10n){\n    margin-right: 0;\n  }\n  .Content-summary{\n    font-weight: 300;\n    font-family: 'ProximaNova-Light','Open Sans','Helvetica','sans-serif';\n    font-size: calc(.9 * 1.414 * 1rem);\n    line-height: calc(1.2 * 1.5 * 1rem);\n  }\n  .Content-section-inner{\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 4/5 - (30px - 30px * 4/5));\n  }\n  .Content-section-inner:nth-child(n){\n    margin-right: 30px;\n  }\n  .Content-section-inner:last-child{\n    margin-right: 0;\n  }\n  .Content-section-inner:nth-child(5n){\n    margin-right: 0;\n  }\n  .Link{\n    display: inline-block;\n    margin-top: 30px;\n  }\n  .Link:after{\n    right: -60px;\n  }\n}\n\n\n\n", ""]);

  // exports


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/* Colors */\n\n/* Uses */\n\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n/* Old Media Queries\n$iphone5-screen: 320px;\n$iphone6-screen: 375px;\n$tiny-screen: 500px;\n$extra-small-screen: 600px;\n$small-screen: 768px;\n$small-medium: 940px;\n$medium-screen: 1280px;\n$large-screen: 1440px;\n$x-large-screen: 1600px;\n*/\n\n/* React-starter-kit\n$screen-sm-min: 768px;\n$screen-md-min: 992px;\n$screen-lg-min: 1200px;\n*/\n\n/* Supported Size Ranges: */\n/* handhelds, except-handhelds */\n/* small-screens, except-small-screens, to-small-screens, above-small-screens */\n/* medium-screens, except-medium-screens, above-medium-screens */\n/* large-screens, except-large-screens */\n/* Use: */\n/* @include media(handhelds, large-screens) */\n/* @include media(above-small-screens) {\n     max-width: 960px\n   }\n*/\n/* Typesetting variables. Edit these! */ /* in pixels. This would result in 22px on desktop */ /* how large the line height is as a multiple of font size */ /* ADJUST THE FIRST IF YOU CHANGE $baselineHeight\n\n/* Rate of growth for headings */\n/* I actually like this to be slightly smaller then the leading. Makes for tight headings. */\n\n/* Setup */\nhtml {\n  /* Change default typefaces here */\n  font-family: 'ProximaNova-Regular', 'Open Sans', 'Helvetica', 'sans-serif';\n  font-size: calc(22 / 16 * 100%);\n  font-weight: normal;\n  font-style: normal;\n  color: #394453;\n\n  /* Make everything look a little nicer in webkit */\n  -webkit-font-smoothing: antialiased;\n}\n  /* -webkit-text-size-adjust: auto\n  // -moz-text-size-adjust: auto\n  // -ms-text-size-adjust: auto\n  // -o-text-size-adjust: auto\n  // text-size-adjust: auto */\n\n/* Copy & Lists */\np {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n}\nul, ol {\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\nul li, ol li {\n  line-height: calc(1.5 * 1rem);\n}\nul ul, ul ol, ol ul, ol ol {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nblockquote {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\n/* Headings */\nh1, h2, h3, h4, h5, h6 {\n  /* Change heading typefaces here */\n  font-family: 'Bariol', 'Archivo Narrow', 'Source Sans Pro', 'Alegreya', 'Playfair Display', 'Fira Sans', 'Vollkorn', 'ProximaNova-Semibold', 'Helvetica', 'sans-serif';\n  font-weight: bold;\n  font-style: normal;\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n  line-height: calc(1.5 * 1rem);\n}\nh1 {\n  font-size: calc(2.20 * 1.414 * 1rem);\n  font-weight: 700;\n  line-height: calc(2.35 * 1.5 * 1rem);\n  margin-top: calc(0.15 * 1.5 * 1rem);\n}\n\n@media only screen and (min-width: 680px){\n  h1{\n    font-size: calc(3 * 1.414 * 1rem);\n    line-height: calc(3 * 1.5 * 1rem);\n    //margin-top: calc(2 * calc(1.5 * 1rem));\n  }\n}\n\n\nh2 {\n  font-size: calc(2 * 1.414 * 1rem);\n  line-height: calc(2 * 1.5 * 1rem);\n  margin-top: calc(2 * 1.5 * 1rem);\n}\n\nh3 {\n  font-size: calc(1 * 1.414 * 1rem);\n}\nh4 {\n  font-size: calc(1.414 / 2 * 1rem);\n}\nh5 {\n  font-size: calc(1.414 / 3 * 1rem);\n}\nh6 {\n  font-size: calc(1.414 / 4 * 1rem);\n}\n\n/* Tables */\ntable {\n  margin-top: calc(1.5 * 1rem);\n  border-spacing: 0px;\n  border-collapse: collapse;\n}\ntable td, table th {\n  padding: 0;\n  line-height: calc(1.5 * 22 - 0px);\n}\n/* Code blocks */\ncode {\n  /* Forces text to constrain to the line-height. Not ideal, but works. */\n  vertical-align: bottom;\n}\n/* Leading paragraph text */\n.lead {\n  font-size: calc(1.414 * 1rem);\n}\n\n/* Hug a the block above you */\n.hug {\n  margin-top: 0;\n}\n\n.Hero {\n  position: relative;\n  overflow: visible;\n}\n\n@media only screen and (max-width: 679px){\n  .Hero{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0 15px;\n    //margin: 0 15px;\n  }\n}\n\n@media only screen and (min-width: 680px) and (max-width: 999px){\n  .Hero{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    margin: 0 30px;\n  }\n}\n\n@media only screen and (min-width: 1000px) and (max-width: 1259px){\n  .Hero{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 1000px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n@media only screen and (min-width: 1260px){\n  .Hero{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 1260px;\n    margin-left: auto;\n    margin-right: auto;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-top: 0;\n  }\n}\n\n.Hero-title {\n  margin-top: 40px;\n}\n\n.Hero-title span {\n  font-weight: 300;\n  font-family: 'ProximaNova-Light', 'Open Sans', 'Helvetica', 'sans-serif';\n  font-size: calc(.8 * 1.414 * 1rem);\n  color: #5B6675;\n}\n\n.Hero-title h1 {\n  color: #FFBF00;\n}\n\n@media only screen and (max-width: 679px){\n  .Hero-title{\n    margin-bottom: 10px;\n  }\n}\n\n@media only screen and (max-width: 679px){\n  .myImg{\n    display: none;\n    width: 192px;\n    height: 189px;\n    position: absolute;\n    top: 50px;\n    right: -45px;\n    z-index: -1;\n    opacity: .7;\n    -webkit-transition: 'opacity 300ms ease-in';\n         -o-transition: 'opacity 300ms ease-in';\n            transition: 'opacity 300ms ease-in';\n    border-top-left-radius: 25px;\n    border-bottom-left-radius: 7px;\n  }\n}\n\n@media only screen and (min-width: 680px){\n  .myImg{\n    width: 560px;\n    height: 553px;\n    position: absolute;\n    top: 75px;\n    right: 0;\n    z-index: -1;\n  }\n}\n\n@media only screen and (min-width: 680px){\n  .myImg{\n    right: -100px;\n    border-top-left-radius: 75px;\n    border-bottom-left-radius: 75px;\n  }\n}\n\n@media only screen and (min-width: 680px) and (max-width: 999px){\n  .myImg{\n    opacity: .6;\n  }\n}\n\n@media only screen and (min-width: 1000px){\n  .myImg{\n    right: -150px;\n  }\n}\n\n@media only screen and (min-width: 1260px){\n  .myImg{\n    border-bottom-right-radius: 75px;\n    right: 0;\n  }\n}\n\n@media only screen and (max-width: 679px){\n  .Hero-phrase p{\n    font-weight: 300;\n  }\n}\n\n.Hero-phrase {\n  position: relative;\n  padding-top: 20px;\n}\n\n.Hero-phrase p {\n  font-family: 'ProximaNova-Light', 'Open Sans', 'Helvetica', 'sans-serif';\n  font-size: calc(1.1 * 1.414 * 1rem);\n  line-height: calc(1.3 * 1.5 * 1rem);\n  margin-top: calc(0 * 1.5 * .5rem);\n  margin-left: 20px;\n}\n\n.Hero-phrase span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  display: block;\n  width: 103px;\n  height: 111px;\n  background-color: #ffe58d;\n  -webkit-mask-image: url('data:image/svg+xml;charset=utf-8,<svg width=\"103\" height=\"111\" viewBox=\"0 0 103 111\" xmlns=\"http://www.w3.org/2000/svg\"><title>ampersand</title><path d=\"M59.944 37.443c-8.22 0-8.8 5.117-.728 5.117 4.02 0 7.67-2.363 8.367-2.363.44 0 .886-.01 1.332-.023 4.084 1.464 6.747 5.223 6.747 10.604 0 8.196-8.445 13.827-18.875 13.827-5.97 0-17.346-3.386-17.346-14.538 0-12.217 14.813-21.1 26.154-21.1 7.114 0 13.58 2.005 18.636 5.796-5.463 2.075-11.186 3.197-17.932 3.197-1.383 0-3.885-.517-6.354-.517zm29.764-2.72C97.415 30.538 103 24.08 103 15.78 103 5.565 95.135 0 85.908 0c-6.028 0-11.24 2.386-11.24 6.81 0 3.6 3.52 5.82 8.578 5.82 8.074 0 17.22-8.006 17.22 3.148 0 7.576-5 13.568-12.63 17.405-5.646-4.29-12.777-6.787-21.088-6.787-15.876 0-31.413 10.89-31.413 25.09 0 13.452 11.707 20.31 21.562 20.31 16.542 0 23.624-12.058 23.624-19.904 0-5.114-1.955-9.956-7.804-11.988 4.616-.512 9.268-1.695 13.495-3.493 5.506 5.052 8.898 12.555 8.898 22.176 0 17.59-19.948 36.927-44.642 36.927C25.7 95.513 7.79 80.763 7.79 63.05c0-6.29 1.318-14.096 9.748-20.65 3.506.726 7.9.76 10.695-.39 2.103-.864 2.147-2.422 0-3.03-3.527-.994-7.387-.264-10.07.866l.077-.048c-.032.016-.06.034-.09.052-6.194-2.702-9.012-8.537-9.012-13.707 0-7.835 6.557-13.267 14.01-13.267 6.81 0 11.846 4.092 11.846 8.975 0 7.835-8.918 1.374-13.177 1.374-2.66 0-5.34 1.238-5.34 3.928 0 3.782 3.926 6.058 8.385 6.058 8.277 0 13.06-5.123 13.06-10.398 0-7.813-7.986-12.59-16.637-12.59-10.37 0-19.317 5.912-19.317 16.107 0 6.615 5.46 12.898 13.09 15.403C3.81 49.26 0 60.657 0 69.56 0 94.058 21.856 111 49.718 111c27.863 0 52.515-21.22 52.515-45.718 0-12.522-4.537-23.49-12.525-30.558z\" fill=\"#FFD968\" fill-rule=\"evenodd\"/></svg>');\n  mask-image: url('data:image/svg+xml;charset=utf-8,<svg width=\"103\" height=\"111\" viewBox=\"0 0 103 111\" xmlns=\"http://www.w3.org/2000/svg\"><title>ampersand</title><path d=\"M59.944 37.443c-8.22 0-8.8 5.117-.728 5.117 4.02 0 7.67-2.363 8.367-2.363.44 0 .886-.01 1.332-.023 4.084 1.464 6.747 5.223 6.747 10.604 0 8.196-8.445 13.827-18.875 13.827-5.97 0-17.346-3.386-17.346-14.538 0-12.217 14.813-21.1 26.154-21.1 7.114 0 13.58 2.005 18.636 5.796-5.463 2.075-11.186 3.197-17.932 3.197-1.383 0-3.885-.517-6.354-.517zm29.764-2.72C97.415 30.538 103 24.08 103 15.78 103 5.565 95.135 0 85.908 0c-6.028 0-11.24 2.386-11.24 6.81 0 3.6 3.52 5.82 8.578 5.82 8.074 0 17.22-8.006 17.22 3.148 0 7.576-5 13.568-12.63 17.405-5.646-4.29-12.777-6.787-21.088-6.787-15.876 0-31.413 10.89-31.413 25.09 0 13.452 11.707 20.31 21.562 20.31 16.542 0 23.624-12.058 23.624-19.904 0-5.114-1.955-9.956-7.804-11.988 4.616-.512 9.268-1.695 13.495-3.493 5.506 5.052 8.898 12.555 8.898 22.176 0 17.59-19.948 36.927-44.642 36.927C25.7 95.513 7.79 80.763 7.79 63.05c0-6.29 1.318-14.096 9.748-20.65 3.506.726 7.9.76 10.695-.39 2.103-.864 2.147-2.422 0-3.03-3.527-.994-7.387-.264-10.07.866l.077-.048c-.032.016-.06.034-.09.052-6.194-2.702-9.012-8.537-9.012-13.707 0-7.835 6.557-13.267 14.01-13.267 6.81 0 11.846 4.092 11.846 8.975 0 7.835-8.918 1.374-13.177 1.374-2.66 0-5.34 1.238-5.34 3.928 0 3.782 3.926 6.058 8.385 6.058 8.277 0 13.06-5.123 13.06-10.398 0-7.813-7.986-12.59-16.637-12.59-10.37 0-19.317 5.912-19.317 16.107 0 6.615 5.46 12.898 13.09 15.403C3.81 49.26 0 60.657 0 69.56 0 94.058 21.856 111 49.718 111c27.863 0 52.515-21.22 52.515-45.718 0-12.522-4.537-23.49-12.525-30.558z\" fill=\"#FFD968\" fill-rule=\"evenodd\"/></svg>');\n}\n\n@media only screen and (min-width: 680px){\n  .Hero-phrase{\n    padding-top: 15px;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 3/5 - (30px - 30px * 3/5));\n  }\n  .Hero-phrase:nth-child(n){\n    margin-right: 30px;\n  }\n  .Hero-phrase:last-child{\n    margin-right: 0;\n  }\n  .Hero-phrase:nth-child(5n){\n    margin-right: 0;\n  }\n  .Hero-phrase p{\n    color: #5B6675;\n    margin-left: 50px;\n    font-size: calc(1.25 * 1.414 * 1rem);\n    line-height: calc(1.5 * 1.5 * 1rem);\n    font-weight: 300;\n  }\n}\n\n", ""]);

  // exports


/***/ },
/* 7 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 8 */
/***/ function(module, exports) {

  module.exports = require("react-picture");

/***/ },
/* 9 */
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

  __webpack_require__(28);

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
                        { href: '/about', onClick: _Link2['default'].handleClick },
                        'About'
                      )
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        'a',
                        { href: '/about', onClick: _Link2['default'].handleClick },
                        'Work'
                      )
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        'a',
                        { href: '/about', onClick: _Link2['default'].handleClick },
                        'Collections'
                      )
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        'a',
                        { href: '/about', onClick: _Link2['default'].handleClick },
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
                'I used react-static to gain an understanding of React. Killing two birds with one stone eh? This site includes Webpack, PostCSS and Sass, Lost, SVG\'s and hosted it via Github Pages. Like all projects consider it a \'work in progress\'.'
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'Footer-bottom' },
            _react2['default'].createElement(
              'div',
              { className: 'Footer-bottom-contact' },
              'Say hello | See the best advice I\'ve ever received'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'Footer-bottom-roots' },
              _react2['default'].createElement(
                'span',
                { className: 'Roots-wisconsin' },
                'Raised in Wisconsin'
              ),
              _react2['default'].createElement(
                'span',
                { className: 'Roots-california' },
                'Growing in California'
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
/* 10 */
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

  __webpack_require__(5);

  __webpack_require__(29);

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
                { href: '/advantage', className: 'Link', onClick: _Link2['default'].handleClick },
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

  __webpack_require__(30);

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

  __webpack_require__(31);

  var _MmmysteryFeatureMmmystery = __webpack_require__(14);

  var _MmmysteryFeatureMmmystery2 = _interopRequireDefault(_MmmysteryFeatureMmmystery);

  var _AdvantageFeatureAdvantage = __webpack_require__(10);

  var _AdvantageFeatureAdvantage2 = _interopRequireDefault(_AdvantageFeatureAdvantage);

  var _FeaturesTitleTitle = __webpack_require__(11);

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

  var Img = __webpack_require__(8).Image;

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

  var _Image = __webpack_require__(13);

  var _Image2 = _interopRequireDefault(_Image);

  var _Link = __webpack_require__(3);

  var _Link2 = _interopRequireDefault(_Link);

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
                  'iOS app'
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
                'By trusting your gut instinct, experience new tastes around the neighborhood, in a simple and fun way'
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

  __webpack_require__(32);

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
                  { href: '/' },
                  'Twitter '
                ),
                ' •'
              ),
              _react2['default'].createElement(
                'li',
                null,
                _react2['default'].createElement(
                  'a',
                  { href: '/' },
                  ' Instagram '
                ),
                ' •'
              ),
              _react2['default'].createElement(
                'li',
                null,
                _react2['default'].createElement(
                  'a',
                  { href: '/' },
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

  __webpack_require__(6);

  var _Image = __webpack_require__(17);

  var _Image2 = _interopRequireDefault(_Image);

  var _HeroListHeroList = __webpack_require__(15);

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

  __webpack_require__(6);

  var Img = __webpack_require__(8).Image;

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

        var imgs = '//s3-us-west-1.amazonaws.com/phil-portfolio-images/profileImageCndsd4.jpg 245w, //s3-us-west-1.amazonaws.com/phil-portfolio-images/profileImage4.jpg 630w';
        console.log(imgs);
        return _react2['default'].createElement(Img, { alt: 'Your picture description', srcSet: imgs, extra: { className: 'myImg' } });
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

  __webpack_require__(33);

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
/* 19 */
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

  __webpack_require__(34);

  var _Navigation = __webpack_require__(20);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  var _Footer = __webpack_require__(9);

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
          { className: 'Layout' },
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

  __webpack_require__(36);

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
                  ' Santa Monica, CA'
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
                  { className: 'Navigation-link', href: '/about', onClick: _Link2['default'].handleClick },
                  'About'
                )
              ),
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
                  { className: 'Navigation-link', href: '/collections', onClick: _Link2['default'].handleClick },
                  'Collections'
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
                  { className: 'Navigation-link', href: '/hello', onClick: _Link2['default'].handleClick },
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
/* 21 */
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
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 26 */
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

  var _componentsIndexHeroHero = __webpack_require__(16);

  var _componentsIndexHeroHero2 = _interopRequireDefault(_componentsIndexHeroHero);

  var _componentsIndexUpUpUpUp = __webpack_require__(18);

  var _componentsIndexUpUpUpUp2 = _interopRequireDefault(_componentsIndexUpUpUpUp);

  var _componentsIndexFeaturesFeatures = __webpack_require__(12);

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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/* Colors */\n\n/* Uses */\n\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n/* Old Media Queries\n$iphone5-screen: 320px;\n$iphone6-screen: 375px;\n$tiny-screen: 500px;\n$extra-small-screen: 600px;\n$small-screen: 768px;\n$small-medium: 940px;\n$medium-screen: 1280px;\n$large-screen: 1440px;\n$x-large-screen: 1600px;\n*/\n\n/* React-starter-kit\n$screen-sm-min: 768px;\n$screen-md-min: 992px;\n$screen-lg-min: 1200px;\n*/\n\n/* Supported Size Ranges: */\n/* handhelds, except-handhelds */\n/* small-screens, except-small-screens, to-small-screens, above-small-screens */\n/* medium-screens, except-medium-screens, above-medium-screens */\n/* large-screens, except-large-screens */\n/* Use: */\n/* @include media(handhelds, large-screens) */\n/* @include media(above-small-screens) {\n     max-width: 960px\n   }\n*/\n/* Typesetting variables. Edit these! */ /* in pixels. This would result in 22px on desktop */ /* how large the line height is as a multiple of font size */ /* ADJUST THE FIRST IF YOU CHANGE $baselineHeight\n\n/* Rate of growth for headings */\n/* I actually like this to be slightly smaller then the leading. Makes for tight headings. */\n\n/* Setup */\nhtml {\n  /* Change default typefaces here */\n  font-family: 'ProximaNova-Regular', 'Open Sans', 'Helvetica', 'sans-serif';\n  font-size: calc(22 / 16 * 100%);\n  font-weight: normal;\n  font-style: normal;\n  color: #394453;\n\n  /* Make everything look a little nicer in webkit */\n  -webkit-font-smoothing: antialiased;\n}\n  /* -webkit-text-size-adjust: auto\n  // -moz-text-size-adjust: auto\n  // -ms-text-size-adjust: auto\n  // -o-text-size-adjust: auto\n  // text-size-adjust: auto */\n\n/* Copy & Lists */\np {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n}\nul, ol {\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\nul li, ol li {\n  line-height: calc(1.5 * 1rem);\n}\nul ul, ul ol, ol ul, ol ol {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nblockquote {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\n/* Headings */\nh1, h2, h3, h4, h5, h6 {\n  /* Change heading typefaces here */\n  font-family: 'Bariol', 'Archivo Narrow', 'Source Sans Pro', 'Alegreya', 'Playfair Display', 'Fira Sans', 'Vollkorn', 'ProximaNova-Semibold', 'Helvetica', 'sans-serif';\n  font-weight: bold;\n  font-style: normal;\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n  line-height: calc(1.5 * 1rem);\n}\nh1 {\n  font-size: calc(2.20 * 1.414 * 1rem);\n  font-weight: 700;\n  line-height: calc(2.35 * 1.5 * 1rem);\n  margin-top: calc(0.15 * 1.5 * 1rem);\n}\n\n@media only screen and (min-width: 680px){\n  h1{\n    font-size: calc(3 * 1.414 * 1rem);\n    line-height: calc(3 * 1.5 * 1rem);\n    //margin-top: calc(2 * calc(1.5 * 1rem));\n  }\n}\n\n\nh2 {\n  font-size: calc(2 * 1.414 * 1rem);\n  line-height: calc(2 * 1.5 * 1rem);\n  margin-top: calc(2 * 1.5 * 1rem);\n}\n\nh3 {\n  font-size: calc(1 * 1.414 * 1rem);\n}\nh4 {\n  font-size: calc(1.414 / 2 * 1rem);\n}\nh5 {\n  font-size: calc(1.414 / 3 * 1rem);\n}\nh6 {\n  font-size: calc(1.414 / 4 * 1rem);\n}\n\n/* Tables */\ntable {\n  margin-top: calc(1.5 * 1rem);\n  border-spacing: 0px;\n  border-collapse: collapse;\n}\ntable td, table th {\n  padding: 0;\n  line-height: calc(1.5 * 22 - 0px);\n}\n/* Code blocks */\ncode {\n  /* Forces text to constrain to the line-height. Not ideal, but works. */\n  vertical-align: bottom;\n}\n/* Leading paragraph text */\n.lead {\n  font-size: calc(1.414 * 1rem);\n}\n\n/* Hug a the block above you */\n.hug {\n  margin-top: 0;\n}\n\n.Footer {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  max-width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.Footer h6 {\n  font-family: 'Bariol','Abril Fatface','Playfair Display','Fira Sans','Vollkorn','ProximaNova-Semibold','Helvetica','sans-serif';\n  font-size: calc(.9 * 1.414 * 1rem);\n  line-height: calc(1.2 * 1.5 * 1rem);\n}\n\n.Footer-top {\n}\n\n.Footer-links {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n}\n\n.Footer-links ul {\n  list-style-type: none;\n  padding-left: 5px;\n}\n\n.Footer-links li {\n}\n\n.Footer-links a {\n  display: inline-block;\n  text-decoration: none;\n  color: #394453;\n  cursor: pointer;\n  border-bottom: 3px solid white;\n  -webkit-transition: all 1s;\n       -o-transition: all 1s;\n          transition: all 1s;\n}\n\n.Footer-links a:hover {\n  border-bottom: 3px solid #FFBF00;\n  color: #394453;\n}\n\n\n.Footer-about p {\n  font-size: calc(22 / 30 * 100%);\n  line-height: calc(.8 * 1.5 * 1rem);\n}\n\n.Links-connect, .Links-explore {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 1/2 - (30px - 30px * 1/2));\n}\n\n.Links-connect:nth-child(n), .Links-explore:nth-child(n){\n  margin-right: 30px;\n}\n\n.Links-connect:last-child, .Links-explore:last-child{\n  margin-right: 0;\n}\n\n.Links-connect:nth-child(2n), .Links-explore:nth-child(2n){\n  margin-right: 0;\n}\n\n.Footer-bottom {}\n\n.Footer-bottom-contact {}\n\n.Footer-bottom-roots {}\n\n.Roots-wisconsin {}\n\n.Roots-california {}\n\n\n@media only screen and (min-width: 680px){\n  .Footer{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n  }\n  .Footer h6{\n    font-weight: 700;\n  }\n  .Footer-top{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n  }\n  .Footer-links-container{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 3/5 - (30px - 30px * 3/5));\n  }\n  .Footer-links-container:nth-child(n){\n    margin-right: 30px;\n  }\n  .Footer-links-container:last-child{\n    margin-right: 0;\n  }\n  .Footer-links-container:nth-child(5n){\n    margin-right: 0;\n  }\n  .Footer-links{\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 4/7 - (30px - 30px * 4/7));\n  }\n  .Footer-links:nth-child(n){\n    margin-right: 30px;\n  }\n  .Footer-links:last-child{\n    margin-right: 0;\n  }\n  .Footer-links:nth-child(7n){\n    margin-right: 0;\n  }\n  .Footer-links a{\n    font-size: calc(22 / 30 * 100%);\n  }\n  .Footer-about{\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 3/7 - (30px - 30px * 3/7));\n  }\n  .Footer-about:nth-child(n){\n    margin-right: 30px;\n  }\n  .Footer-about:last-child{\n    margin-right: 0;\n  }\n  .Footer-about:nth-child(7n){\n    margin-right: 0;\n  }\n}\n\n@media only screen and (max-width: 679px){\n  .Footer-links-container{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n  }\n  .Footer-links-container:nth-child(n){\n    margin-right: 30px;\n  }\n  .Footer-links-container:last-child{\n    margin-right: 0;\n  }\n  .Footer-links-container:nth-child(1n){\n    margin-right: 0;\n  }\n  .Footer-top{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: column nowrap;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n  }\n  .Footer{\n    padding: 0 15px;\n  }\n  .Navigation{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0 15px;\n  }\n  .Footer-links, .Footer-about{\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n  }\n  .Footer-links:nth-child(n), .Footer-about:nth-child(n){\n    margin-right: 30px;\n  }\n  .Footer-links:last-child, .Footer-about:last-child{\n    margin-right: 0;\n  }\n  .Footer-links:nth-child(1n), .Footer-about:nth-child(1n){\n    margin-right: 0;\n  }\n  .Footer-links a{\n    font-size: calc(22 / 28 * 100%);\n  }\n}\n\n@media only screen and (min-width: 680px) and (max-width: 999px){\n  .Footer{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    margin: 0 30px;\n  }\n}\n\n@media only screen and (min-width: 1000px) and (max-width: 1259px){\n  .Footer{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 1000px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n@media only screen and (min-width: 1260px){\n  .Footer{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 1260px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}", ""]);

  // exports


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/* Colors */\n\n/* Uses */\n\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n/* Old Media Queries\n$iphone5-screen: 320px;\n$iphone6-screen: 375px;\n$tiny-screen: 500px;\n$extra-small-screen: 600px;\n$small-screen: 768px;\n$small-medium: 940px;\n$medium-screen: 1280px;\n$large-screen: 1440px;\n$x-large-screen: 1600px;\n*/\n\n/* React-starter-kit\n$screen-sm-min: 768px;\n$screen-md-min: 992px;\n$screen-lg-min: 1200px;\n*/\n\n/* Supported Size Ranges: */\n/* handhelds, except-handhelds */\n/* small-screens, except-small-screens, to-small-screens, above-small-screens */\n/* medium-screens, except-medium-screens, above-medium-screens */\n/* large-screens, except-large-screens */\n/* Use: */\n/* @include media(handhelds, large-screens) */\n/* @include media(above-small-screens) {\n     max-width: 960px\n   }\n*/\n\n/* Typesetting variables. Edit these! */ /* in pixels. This would result in 22px on desktop */ /* how large the line height is as a multiple of font size */ /* ADJUST THE FIRST IF YOU CHANGE $baselineHeight\n\n/* Rate of growth for headings */\n/* I actually like this to be slightly smaller then the leading. Makes for tight headings. */\n\n/* Setup */\nhtml {\n  /* Change default typefaces here */\n  font-family: 'ProximaNova-Regular', 'Open Sans', 'Helvetica', 'sans-serif';\n  font-size: calc(22 / 16 * 100%);\n  font-weight: normal;\n  font-style: normal;\n  color: #394453;\n\n  /* Make everything look a little nicer in webkit */\n  -webkit-font-smoothing: antialiased;\n}\n  /* -webkit-text-size-adjust: auto\n  // -moz-text-size-adjust: auto\n  // -ms-text-size-adjust: auto\n  // -o-text-size-adjust: auto\n  // text-size-adjust: auto */\n\n/* Copy & Lists */\np {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n}\nul, ol {\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\nul li, ol li {\n  line-height: calc(1.5 * 1rem);\n}\nul ul, ul ol, ol ul, ol ol {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nblockquote {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\n/* Headings */\nh1, h2, h3, h4, h5, h6 {\n  /* Change heading typefaces here */\n  font-family: 'Bariol', 'Archivo Narrow', 'Source Sans Pro', 'Alegreya', 'Playfair Display', 'Fira Sans', 'Vollkorn', 'ProximaNova-Semibold', 'Helvetica', 'sans-serif';\n  font-weight: bold;\n  font-style: normal;\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n  line-height: calc(1.5 * 1rem);\n}\nh1 {\n  font-size: calc(2.20 * 1.414 * 1rem);\n  font-weight: 700;\n  line-height: calc(2.35 * 1.5 * 1rem);\n  margin-top: calc(0.15 * 1.5 * 1rem);\n}\n\n@media only screen and (min-width: 680px) {\n  h1 {\n    font-size: calc(3 * 1.414 * 1rem);\n    line-height: calc(3 * 1.5 * 1rem);\n    //margin-top: calc(2 * calc(1.5 * 1rem));\n  }\n}\n\n\nh2 {\n  font-size: calc(2 * 1.414 * 1rem);\n  line-height: calc(2 * 1.5 * 1rem);\n  margin-top: calc(2 * 1.5 * 1rem);\n}\n\nh3 {\n  font-size: calc(1 * 1.414 * 1rem);\n}\nh4 {\n  font-size: calc(1.414 / 2 * 1rem);\n}\nh5 {\n  font-size: calc(1.414 / 3 * 1rem);\n}\nh6 {\n  font-size: calc(1.414 / 4 * 1rem);\n}\n\n/* Tables */\ntable {\n  margin-top: calc(1.5 * 1rem);\n  border-spacing: 0px;\n  border-collapse: collapse;\n}\ntable td, table th {\n  padding: 0;\n  line-height: calc(1.5 * 22 - 0px);\n}\n/* Code blocks */\ncode {\n  /* Forces text to constrain to the line-height. Not ideal, but works. */\n  vertical-align: bottom;\n}\n/* Leading paragraph text */\n.lead {\n  font-size: calc(1.414 * 1rem);\n}\n\n/* Hug a the block above you */\n.hug {\n  margin-top: 0;\n}\n\n.Image-advantage {\n  height: 100%;\n  width: auto;\n  -webkit-background-size: cover;\n          background-size: cover;\n  background: url('https://s3-us-west-1.amazonaws.com/phil-portfolio-images/hero.jpg') no-repeat center center;\n}\n\n.Image-container-advantage {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n  height: 360px;\n  overflow: hidden;\n}\n\n.Image-container-advantage:nth-child(n) {\n  margin-right: 30px;\n}\n\n.Image-container-advantage:last-child {\n  margin-right: 0;\n}\n\n.Image-container-advantage:nth-child(1n) {\n  margin-right: 0;\n}\n\n@media only screen and (max-width: 679px) {\n  .Image-container-advantage {\n    border-top-right-radius: 75px;\n  }\n}\n\n\n@media only screen and (min-width: 680px) {\n  .Image-container-advantage {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 9/10 - (30px - 30px * 9/10));\n    border-bottom-right-radius: 75px;\n  }\n  .Image-container-advantage:nth-child(n) {\n    margin-right: 30px;\n  }\n  .Image-container-advantage:last-child {\n    margin-right: 0;\n  }\n  .Image-container-advantage:nth-child(10n) {\n    margin-right: 0;\n  }\n}", ""]);

  // exports


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/* Colors */\n\n/* Uses */\n\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n/* Old Media Queries\n$iphone5-screen: 320px;\n$iphone6-screen: 375px;\n$tiny-screen: 500px;\n$extra-small-screen: 600px;\n$small-screen: 768px;\n$small-medium: 940px;\n$medium-screen: 1280px;\n$large-screen: 1440px;\n$x-large-screen: 1600px;\n*/\n\n/* React-starter-kit\n$screen-sm-min: 768px;\n$screen-md-min: 992px;\n$screen-lg-min: 1200px;\n*/\n\n/* Supported Size Ranges: */\n/* handhelds, except-handhelds */\n/* small-screens, except-small-screens, to-small-screens, above-small-screens */\n/* medium-screens, except-medium-screens, above-medium-screens */\n/* large-screens, except-large-screens */\n/* Use: */\n/* @include media(handhelds, large-screens) */\n/* @include media(above-small-screens) {\n     max-width: 960px\n   }\n*/\n\n/* Typesetting variables. Edit these! */ /* in pixels. This would result in 22px on desktop */ /* how large the line height is as a multiple of font size */ /* ADJUST THE FIRST IF YOU CHANGE $baselineHeight\n\n/* Rate of growth for headings */\n/* I actually like this to be slightly smaller then the leading. Makes for tight headings. */\n\n/* Setup */\nhtml {\n  /* Change default typefaces here */\n  font-family: 'ProximaNova-Regular', 'Open Sans', 'Helvetica', 'sans-serif';\n  font-size: calc(22 / 16 * 100%);\n  font-weight: normal;\n  font-style: normal;\n  color: #394453;\n\n  /* Make everything look a little nicer in webkit */\n  -webkit-font-smoothing: antialiased;\n}\n  /* -webkit-text-size-adjust: auto\n  // -moz-text-size-adjust: auto\n  // -ms-text-size-adjust: auto\n  // -o-text-size-adjust: auto\n  // text-size-adjust: auto */\n\n/* Copy & Lists */\np {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n}\nul, ol {\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\nul li, ol li {\n  line-height: calc(1.5 * 1rem);\n}\nul ul, ul ol, ol ul, ol ol {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nblockquote {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\n/* Headings */\nh1, h2, h3, h4, h5, h6 {\n  /* Change heading typefaces here */\n  font-family: 'Bariol', 'Archivo Narrow', 'Source Sans Pro', 'Alegreya', 'Playfair Display', 'Fira Sans', 'Vollkorn', 'ProximaNova-Semibold', 'Helvetica', 'sans-serif';\n  font-weight: bold;\n  font-style: normal;\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n  line-height: calc(1.5 * 1rem);\n}\nh1 {\n  font-size: calc(2.20 * 1.414 * 1rem);\n  font-weight: 700;\n  line-height: calc(2.35 * 1.5 * 1rem);\n  margin-top: calc(0.15 * 1.5 * 1rem);\n}\n\n@media only screen and (min-width: 680px) {\n  h1 {\n    font-size: calc(3 * 1.414 * 1rem);\n    line-height: calc(3 * 1.5 * 1rem);\n    //margin-top: calc(2 * calc(1.5 * 1rem));\n  }\n}\n\n\nh2 {\n  font-size: calc(2 * 1.414 * 1rem);\n  line-height: calc(2 * 1.5 * 1rem);\n  margin-top: calc(2 * 1.5 * 1rem);\n}\n\nh3 {\n  font-size: calc(1 * 1.414 * 1rem);\n}\nh4 {\n  font-size: calc(1.414 / 2 * 1rem);\n}\nh5 {\n  font-size: calc(1.414 / 3 * 1rem);\n}\nh6 {\n  font-size: calc(1.414 / 4 * 1rem);\n}\n\n/* Tables */\ntable {\n  margin-top: calc(1.5 * 1rem);\n  border-spacing: 0px;\n  border-collapse: collapse;\n}\ntable td, table th {\n  padding: 0;\n  line-height: calc(1.5 * 22 - 0px);\n}\n/* Code blocks */\ncode {\n  /* Forces text to constrain to the line-height. Not ideal, but works. */\n  vertical-align: bottom;\n}\n/* Leading paragraph text */\n.lead {\n  font-size: calc(1.414 * 1rem);\n}\n\n/* Hug a the block above you */\n.hug {\n  margin-top: 0;\n}\n\n.features-icon {\n  display: block;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n  background-color: #aebccf;\n  width: 60px;\n  height: 60px;\n  -webkit-mask-image: url('data:image/svg+xml;charset=utf-8,<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><title>Recent Work</title><path d=\"M37 36H3c-1.654 0-3 1.346-3 3v18c0 1.654 1.346 3 3 3h34c1.654 0 3-1.346 3-3V39c0-1.654-1.346-3-3-3zm1 21c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V39c0-.55.45-1 1-1h34c.55 0 1 .45 1 1v18zM7 34c1.654 0 3-1.346 3-3V5c0-.15-.04-.29-.1-.42-.003-.008 0-.018-.006-.027l-2-4c-.338-.678-1.45-.678-1.79 0l-2 4c-.003.01 0 .02-.005.028-.06.13-.1.27-.1.42v26c0 1.654 1.346 3 3 3zM6 6h2v22H6V6zm1 26c-.55 0-1-.45-1-1v-1h2v1c0 .55-.45 1-1 1zm.382-28h-.764L7 3.236 7.382 4zM57 0H19c-1.654 0-3 1.346-3 3v30c0 .552.448 1 1 1s1-.448 1-1V3c0-.55.45-1 1-1h38c.55 0 1 .45 1 1v34c0 .552.448 1 1 1s1-.448 1-1V3c0-1.654-1.346-3-3-3zM28 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM10 42c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm31-38h8c.552 0 1-.448 1-1s-.448-1-1-1h-8c-.552 0-1 .448-1 1s.448 1 1 1zm0 4h10c.552 0 1-.448 1-1s-.448-1-1-1H41c-.552 0-1 .448-1 1s.448 1 1 1zM25 24h8c.552 0 1-.448 1-1s-.448-1-1-1h-8c-.552 0-1 .448-1 1s.448 1 1 1zm0 6h14c.552 0 1-.448 1-1s-.448-1-1-1H25c-.552 0-1 .448-1 1s.448 1 1 1zm0 4h8c.552 0 1-.448 1-1s-.448-1-1-1h-8c-.552 0-1 .448-1 1s.448 1 1 1zm26-6h-8c-.552 0-1 .448-1 1s.448 1 1 1h8c.552 0 1-.448 1-1s-.448-1-1-1zm-15 5c0 .552.448 1 1 1h12c.552 0 1-.448 1-1s-.448-1-1-1H37c-.552 0-1 .448-1 1zM19 44h6c.552 0 1-.448 1-1s-.448-1-1-1h-6c-.552 0-1 .448-1 1s.448 1 1 1zm0 4h8c.552 0 1-.448 1-1s-.448-1-1-1h-8c-.552 0-1 .448-1 1s.448 1 1 1zm14 4H19c-.552 0-1 .448-1 1s.448 1 1 1h14c.552 0 1-.448 1-1s-.448-1-1-1zm24-12h-6c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h6c1.654 0 3-1.346 3-3V43c0-1.654-1.346-3-3-3zm1 17c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1V43c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v14zm-13 1h-2c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1zm6-22h-8c-.552 0-1 .448-1 1s.448 1 1 1h8c.552 0 1-.448 1-1s-.448-1-1-1zm-6 4h-2c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1zm0 4h-2c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1z\" fill=\"#AEBCCE\" fill-rule=\"evenodd\"/></svg>');\n  mask-image: url('data:image/svg+xml;charset=utf-8,<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><title>Recent Work</title><path d=\"M37 36H3c-1.654 0-3 1.346-3 3v18c0 1.654 1.346 3 3 3h34c1.654 0 3-1.346 3-3V39c0-1.654-1.346-3-3-3zm1 21c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V39c0-.55.45-1 1-1h34c.55 0 1 .45 1 1v18zM7 34c1.654 0 3-1.346 3-3V5c0-.15-.04-.29-.1-.42-.003-.008 0-.018-.006-.027l-2-4c-.338-.678-1.45-.678-1.79 0l-2 4c-.003.01 0 .02-.005.028-.06.13-.1.27-.1.42v26c0 1.654 1.346 3 3 3zM6 6h2v22H6V6zm1 26c-.55 0-1-.45-1-1v-1h2v1c0 .55-.45 1-1 1zm.382-28h-.764L7 3.236 7.382 4zM57 0H19c-1.654 0-3 1.346-3 3v30c0 .552.448 1 1 1s1-.448 1-1V3c0-.55.45-1 1-1h38c.55 0 1 .45 1 1v34c0 .552.448 1 1 1s1-.448 1-1V3c0-1.654-1.346-3-3-3zM28 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM10 42c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm31-38h8c.552 0 1-.448 1-1s-.448-1-1-1h-8c-.552 0-1 .448-1 1s.448 1 1 1zm0 4h10c.552 0 1-.448 1-1s-.448-1-1-1H41c-.552 0-1 .448-1 1s.448 1 1 1zM25 24h8c.552 0 1-.448 1-1s-.448-1-1-1h-8c-.552 0-1 .448-1 1s.448 1 1 1zm0 6h14c.552 0 1-.448 1-1s-.448-1-1-1H25c-.552 0-1 .448-1 1s.448 1 1 1zm0 4h8c.552 0 1-.448 1-1s-.448-1-1-1h-8c-.552 0-1 .448-1 1s.448 1 1 1zm26-6h-8c-.552 0-1 .448-1 1s.448 1 1 1h8c.552 0 1-.448 1-1s-.448-1-1-1zm-15 5c0 .552.448 1 1 1h12c.552 0 1-.448 1-1s-.448-1-1-1H37c-.552 0-1 .448-1 1zM19 44h6c.552 0 1-.448 1-1s-.448-1-1-1h-6c-.552 0-1 .448-1 1s.448 1 1 1zm0 4h8c.552 0 1-.448 1-1s-.448-1-1-1h-8c-.552 0-1 .448-1 1s.448 1 1 1zm14 4H19c-.552 0-1 .448-1 1s.448 1 1 1h14c.552 0 1-.448 1-1s-.448-1-1-1zm24-12h-6c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h6c1.654 0 3-1.346 3-3V43c0-1.654-1.346-3-3-3zm1 17c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1V43c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v14zm-13 1h-2c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1zm6-22h-8c-.552 0-1 .448-1 1s.448 1 1 1h8c.552 0 1-.448 1-1s-.448-1-1-1zm-6 4h-2c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1zm0 4h-2c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1z\" fill=\"#AEBCCE\" fill-rule=\"evenodd\"/></svg>');\n}\n\n.features-icon:nth-child(n) {\n  margin-right: 30px;\n}\n\n.features-icon:last-child {\n  margin-right: 0;\n}\n\n.features-icon:nth-child(1n) {\n  margin-right: 0;\n}\n\n.features-title {\n  font-family: 'Bariol','Abril Fatface','Playfair Display','Fira Sans','Vollkorn','ProximaNova-Semibold','Helvetica','sans-serif';\n  font-weight: 700;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n  font-size: calc(1.4 * 1.414 * 1rem);\n  line-height: calc(1.4 * 1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem / 2);\n}\n\n.features-title:nth-child(n) {\n  margin-right: 30px;\n}\n\n.features-title:last-child {\n  margin-right: 0;\n}\n\n.features-title:nth-child(1n) {\n  margin-right: 0;\n}\n\n.Title {\n  margin-bottom: 50px;\n}\n\n@media only screen and (max-width: 679px) {\n  .Title {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0 15px;\n  }\n}\n\n@media only screen and (min-width: 680px) and (max-width: 999px) {\n  .Title {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    margin: 0 30px;\n    display: flex;\n    -webkit-flex-flow: column nowrap;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n  }\n}\n\n@media only screen and (min-width: 1000px) and (max-width: 1259px) {\n  .Title {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 1000px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n@media only screen and (min-width: 1260px) {\n  .Title {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 1260px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}", ""]);

  // exports


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/* Colors */\n\n/* Uses */\n\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n/* Old Media Queries\n$iphone5-screen: 320px;\n$iphone6-screen: 375px;\n$tiny-screen: 500px;\n$extra-small-screen: 600px;\n$small-screen: 768px;\n$small-medium: 940px;\n$medium-screen: 1280px;\n$large-screen: 1440px;\n$x-large-screen: 1600px;\n*/\n\n/* React-starter-kit\n$screen-sm-min: 768px;\n$screen-md-min: 992px;\n$screen-lg-min: 1200px;\n*/\n\n/* Supported Size Ranges: */\n/* handhelds, except-handhelds */\n/* small-screens, except-small-screens, to-small-screens, above-small-screens */\n/* medium-screens, except-medium-screens, above-medium-screens */\n/* large-screens, except-large-screens */\n/* Use: */\n/* @include media(handhelds, large-screens) */\n/* @include media(above-small-screens) {\n     max-width: 960px\n   }\n*/\n\n/* Typesetting variables. Edit these! */ /* in pixels. This would result in 22px on desktop */ /* how large the line height is as a multiple of font size */ /* ADJUST THE FIRST IF YOU CHANGE $baselineHeight\n\n/* Rate of growth for headings */\n/* I actually like this to be slightly smaller then the leading. Makes for tight headings. */\n\n/* Setup */\nhtml {\n  /* Change default typefaces here */\n  font-family: 'ProximaNova-Regular', 'Open Sans', 'Helvetica', 'sans-serif';\n  font-size: calc(22 / 16 * 100%);\n  font-weight: normal;\n  font-style: normal;\n  color: #394453;\n\n  /* Make everything look a little nicer in webkit */\n  -webkit-font-smoothing: antialiased;\n}\n  /* -webkit-text-size-adjust: auto\n  // -moz-text-size-adjust: auto\n  // -ms-text-size-adjust: auto\n  // -o-text-size-adjust: auto\n  // text-size-adjust: auto */\n\n/* Copy & Lists */\np {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n}\nul, ol {\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\nul li, ol li {\n  line-height: calc(1.5 * 1rem);\n}\nul ul, ul ol, ol ul, ol ol {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nblockquote {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\n/* Headings */\nh1, h2, h3, h4, h5, h6 {\n  /* Change heading typefaces here */\n  font-family: 'Bariol', 'Archivo Narrow', 'Source Sans Pro', 'Alegreya', 'Playfair Display', 'Fira Sans', 'Vollkorn', 'ProximaNova-Semibold', 'Helvetica', 'sans-serif';\n  font-weight: bold;\n  font-style: normal;\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n  line-height: calc(1.5 * 1rem);\n}\nh1 {\n  font-size: calc(2.20 * 1.414 * 1rem);\n  font-weight: 700;\n  line-height: calc(2.35 * 1.5 * 1rem);\n  margin-top: calc(0.15 * 1.5 * 1rem);\n}\n\n@media only screen and (min-width: 680px) {\n  h1 {\n    font-size: calc(3 * 1.414 * 1rem);\n    line-height: calc(3 * 1.5 * 1rem);\n    //margin-top: calc(2 * calc(1.5 * 1rem));\n  }\n}\n\n\nh2 {\n  font-size: calc(2 * 1.414 * 1rem);\n  line-height: calc(2 * 1.5 * 1rem);\n  margin-top: calc(2 * 1.5 * 1rem);\n}\n\nh3 {\n  font-size: calc(1 * 1.414 * 1rem);\n}\nh4 {\n  font-size: calc(1.414 / 2 * 1rem);\n}\nh5 {\n  font-size: calc(1.414 / 3 * 1rem);\n}\nh6 {\n  font-size: calc(1.414 / 4 * 1rem);\n}\n\n/* Tables */\ntable {\n  margin-top: calc(1.5 * 1rem);\n  border-spacing: 0px;\n  border-collapse: collapse;\n}\ntable td, table th {\n  padding: 0;\n  line-height: calc(1.5 * 22 - 0px);\n}\n/* Code blocks */\ncode {\n  /* Forces text to constrain to the line-height. Not ideal, but works. */\n  vertical-align: bottom;\n}\n/* Leading paragraph text */\n.lead {\n  font-size: calc(1.414 * 1rem);\n}\n\n/* Hug a the block above you */\n.hug {\n  margin-top: 0;\n}\n\n.Features {\n  margin-top: 100px;\n}", ""]);

  // exports


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/* Colors */\n\n/* Uses */\n\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n/* Old Media Queries\n$iphone5-screen: 320px;\n$iphone6-screen: 375px;\n$tiny-screen: 500px;\n$extra-small-screen: 600px;\n$small-screen: 768px;\n$small-medium: 940px;\n$medium-screen: 1280px;\n$large-screen: 1440px;\n$x-large-screen: 1600px;\n*/\n\n/* React-starter-kit\n$screen-sm-min: 768px;\n$screen-md-min: 992px;\n$screen-lg-min: 1200px;\n*/\n\n/* Supported Size Ranges: */\n/* handhelds, except-handhelds */\n/* small-screens, except-small-screens, to-small-screens, above-small-screens */\n/* medium-screens, except-medium-screens, above-medium-screens */\n/* large-screens, except-large-screens */\n/* Use: */\n/* @include media(handhelds, large-screens) */\n/* @include media(above-small-screens) {\n     max-width: 960px\n   }\n*/\n/* Typesetting variables. Edit these! */ /* in pixels. This would result in 22px on desktop */ /* how large the line height is as a multiple of font size */ /* ADJUST THE FIRST IF YOU CHANGE $baselineHeight\n\n/* Rate of growth for headings */\n/* I actually like this to be slightly smaller then the leading. Makes for tight headings. */\n\n/* Setup */\nhtml {\n  /* Change default typefaces here */\n  font-family: 'ProximaNova-Regular', 'Open Sans', 'Helvetica', 'sans-serif';\n  font-size: calc(22 / 16 * 100%);\n  font-weight: normal;\n  font-style: normal;\n  color: #394453;\n\n  /* Make everything look a little nicer in webkit */\n  -webkit-font-smoothing: antialiased;\n}\n  /* -webkit-text-size-adjust: auto\n  // -moz-text-size-adjust: auto\n  // -ms-text-size-adjust: auto\n  // -o-text-size-adjust: auto\n  // text-size-adjust: auto */\n\n/* Copy & Lists */\np {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n}\nul, ol {\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\nul li, ol li {\n  line-height: calc(1.5 * 1rem);\n}\nul ul, ul ol, ol ul, ol ol {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nblockquote {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\n/* Headings */\nh1, h2, h3, h4, h5, h6 {\n  /* Change heading typefaces here */\n  font-family: 'Bariol', 'Archivo Narrow', 'Source Sans Pro', 'Alegreya', 'Playfair Display', 'Fira Sans', 'Vollkorn', 'ProximaNova-Semibold', 'Helvetica', 'sans-serif';\n  font-weight: bold;\n  font-style: normal;\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n  line-height: calc(1.5 * 1rem);\n}\nh1 {\n  font-size: calc(2.20 * 1.414 * 1rem);\n  font-weight: 700;\n  line-height: calc(2.35 * 1.5 * 1rem);\n  margin-top: calc(0.15 * 1.5 * 1rem);\n}\n\n@media only screen and (min-width: 680px) {\n  h1 {\n    font-size: calc(3 * 1.414 * 1rem);\n    line-height: calc(3 * 1.5 * 1rem);\n    //margin-top: calc(2 * calc(1.5 * 1rem));\n  }\n}\n\n\nh2 {\n  font-size: calc(2 * 1.414 * 1rem);\n  line-height: calc(2 * 1.5 * 1rem);\n  margin-top: calc(2 * 1.5 * 1rem);\n}\n\nh3 {\n  font-size: calc(1 * 1.414 * 1rem);\n}\nh4 {\n  font-size: calc(1.414 / 2 * 1rem);\n}\nh5 {\n  font-size: calc(1.414 / 3 * 1rem);\n}\nh6 {\n  font-size: calc(1.414 / 4 * 1rem);\n}\n\n/* Tables */\ntable {\n  margin-top: calc(1.5 * 1rem);\n  border-spacing: 0px;\n  border-collapse: collapse;\n}\ntable td, table th {\n  padding: 0;\n  line-height: calc(1.5 * 22 - 0px);\n}\n/* Code blocks */\ncode {\n  /* Forces text to constrain to the line-height. Not ideal, but works. */\n  vertical-align: bottom;\n}\n/* Leading paragraph text */\n.lead {\n  font-size: calc(1.414 * 1rem);\n}\n\n/* Hug a the block above you */\n.hug {\n  margin-top: 0;\n}\n\n.Hero-list {\n  margin-top: 75px;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n}\n\n.Hero-list:nth-child(n) {\n  margin-right: 30px;\n}\n\n.Hero-list:last-child {\n  margin-right: 0;\n}\n\n.Hero-list:nth-child(1n) {\n  margin-right: 0;\n}\n\n@media only screen and (min-width: 680px) {\n  .Hero-list {\n    margin-left: 60px;\n  }\n}\n\n@media only screen and (max-width: 679px) {\n  .Hero-list {\n    //background-color: #FDEEBD;\n  }\n}\n\n.List-item {\n  position: relative;\n}\n\n.List-item:before {\n  font-size: calc(22 / 34 * 100%);\n  font-style: italic;\n  color: #7F90A6;\n  position: absolute;\n  left: -55px;\n  top: 10px;\n}\n\n.List-item:nth-child(1):before {\n  content: 'Fig A';\n}\n\n.List-item:nth-child(2):before {\n  content: 'Fig B';\n}\n\n.List-item:nth-child(3):before {\n  content: 'Fig C';\n}\n\n.List-item:nth-child(4):before {\n  content: 'Fig D';\n}\n\n@media only screen and (max-width: 679px) {\n  .List-item {\n    margin-bottom: 20px;\n  }\n  .Item-header {\n    color: #394453;\n  }\n}\n\n@media only screen and (min-width: 680px) {\n  .List-item {\n    margin-bottom: 20px;\n  }\n  .Item-header {\n    color: #FFBF00;\n  }\n}\n\n.Item-header {\n  font-family: 'Bariol', 'Archivo Narrow', 'Source Sans Pro', 'Alegreya', 'Playfair Display', 'Fira Sans', 'Vollkorn', 'ProximaNova-Semibold', 'Helvetica', 'sans-serif';\n  font-size: calc(.75 * 1.414 * 1rem);\n  font-weight: bold;\n  line-height: calc(1 * 1.5 * 1rem);\n  margin-top: 0;\n}\n\n.Item-sub, .Item-sub-list {\n  font-size: calc(22 / 28 * 100%);\n  line-height: calc(.9 * 1.5 * 1rem);\n  color: #5B6675;\n}\n\n@media only screen and (min-width: 680px) {\n  .Item-sub, .Item-sub-list {\n    margin-top: calc(1.5 * 1rem / 24);\n  }\n}\n\n@media only screen and (max-width: 679px) {\n  .Item-header {\n    font-size: calc(.85 * 1.414 * 1rem);\n  }\n  .Item-sub, .Item-sub-list {\n    margin-top: calc(1.5 * 1rem / 12);\n  }\n  .Non-mobile {\n    display: none;\n  }\n}\n\n\n.Item-sub-list {\n  padding-left: 0;\n}\n\n\n.Item-sub-list li {\n  display: inline-block;\n  margin-right: 10px;\n  color: #7F90A6;\n}\n\n\n.Item-sub-list a {\n  border-bottom: 3px solid white;\n  color: #FFBF00;\n  cursor: pointer;\n  font-size: calc(22 / 22 * 100%);\n  font-weight: normal;\n  text-decoration: none;\n  -webkit-transition: all 1s;\n       -o-transition: all 1s;\n          transition: all 1s;\n}\n\n\n.Item-sub-list a:hover {\n  border-bottom: 3px solid #FFBF00;\n  color: #394453;\n}\n", ""]);

  // exports


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/* Colors */\n\n/* Uses */\n\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n/* Old Media Queries\n$iphone5-screen: 320px;\n$iphone6-screen: 375px;\n$tiny-screen: 500px;\n$extra-small-screen: 600px;\n$small-screen: 768px;\n$small-medium: 940px;\n$medium-screen: 1280px;\n$large-screen: 1440px;\n$x-large-screen: 1600px;\n*/\n\n/* React-starter-kit\n$screen-sm-min: 768px;\n$screen-md-min: 992px;\n$screen-lg-min: 1200px;\n*/\n\n/* Supported Size Ranges: */\n/* handhelds, except-handhelds */\n/* small-screens, except-small-screens, to-small-screens, above-small-screens */\n/* medium-screens, except-medium-screens, above-medium-screens */\n/* large-screens, except-large-screens */\n/* Use: */\n/* @include media(handhelds, large-screens) */\n/* @include media(above-small-screens) {\n     max-width: 960px\n   }\n*/\n\n/* Typesetting variables. Edit these! */ /* in pixels. This would result in 22px on desktop */ /* how large the line height is as a multiple of font size */ /* ADJUST THE FIRST IF YOU CHANGE $baselineHeight\n\n/* Rate of growth for headings */\n/* I actually like this to be slightly smaller then the leading. Makes for tight headings. */\n\n/* Setup */\nhtml {\n  /* Change default typefaces here */\n  font-family: 'ProximaNova-Regular', 'Open Sans', 'Helvetica', 'sans-serif';\n  font-size: calc(22 / 16 * 100%);\n  font-weight: normal;\n  font-style: normal;\n  color: #394453;\n\n  /* Make everything look a little nicer in webkit */\n  -webkit-font-smoothing: antialiased;\n}\n  /* -webkit-text-size-adjust: auto\n  // -moz-text-size-adjust: auto\n  // -ms-text-size-adjust: auto\n  // -o-text-size-adjust: auto\n  // text-size-adjust: auto */\n\n/* Copy & Lists */\np {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n}\nul, ol {\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\nul li, ol li {\n  line-height: calc(1.5 * 1rem);\n}\nul ul, ul ol, ol ul, ol ol {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nblockquote {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\n/* Headings */\nh1, h2, h3, h4, h5, h6 {\n  /* Change heading typefaces here */\n  font-family: 'Bariol', 'Archivo Narrow', 'Source Sans Pro', 'Alegreya', 'Playfair Display', 'Fira Sans', 'Vollkorn', 'ProximaNova-Semibold', 'Helvetica', 'sans-serif';\n  font-weight: bold;\n  font-style: normal;\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n  line-height: calc(1.5 * 1rem);\n}\nh1 {\n  font-size: calc(2.20 * 1.414 * 1rem);\n  font-weight: 700;\n  line-height: calc(2.35 * 1.5 * 1rem);\n  margin-top: calc(0.15 * 1.5 * 1rem);\n}\n\n@media only screen and (min-width: 680px){\n  h1{\n    font-size: calc(3 * 1.414 * 1rem);\n    line-height: calc(3 * 1.5 * 1rem);\n    //margin-top: calc(2 * calc(1.5 * 1rem));\n  }\n}\n\n\nh2 {\n  font-size: calc(2 * 1.414 * 1rem);\n  line-height: calc(2 * 1.5 * 1rem);\n  margin-top: calc(2 * 1.5 * 1rem);\n}\n\nh3 {\n  font-size: calc(1 * 1.414 * 1rem);\n}\nh4 {\n  font-size: calc(1.414 / 2 * 1rem);\n}\nh5 {\n  font-size: calc(1.414 / 3 * 1rem);\n}\nh6 {\n  font-size: calc(1.414 / 4 * 1rem);\n}\n\n/* Tables */\ntable {\n  margin-top: calc(1.5 * 1rem);\n  border-spacing: 0px;\n  border-collapse: collapse;\n}\ntable td, table th {\n  padding: 0;\n  line-height: calc(1.5 * 22 - 0px);\n}\n/* Code blocks */\ncode {\n  /* Forces text to constrain to the line-height. Not ideal, but works. */\n  vertical-align: bottom;\n}\n/* Leading paragraph text */\n.lead {\n  font-size: calc(1.414 * 1rem);\n}\n\n/* Hug a the block above you */\n.hug {\n  margin-top: 0;\n}\n\n\n.section-icon {\n  display: block;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n  background-color: #aebccf;\n  width: 60px;\n  height: 60px;\n  -webkit-mask-image: url('data:image/svg+xml;charset=utf-8,<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><title>The up and up</title><path d=\"M55 0H13c-2.71 0-5 2.29-5 5v48c0 .552.448 1 1 1s1-.448 1-1V5c0-1.598 1.402-3 3-3h42c1.654 0 3 1.346 3 3v34c0 .552.448 1 1 1s1-.448 1-1V5c0-2.757-2.243-5-5-5zM41 58H9c-4.45 0-7-2.55-7-7V13c0-1.654 1.346-3 3-3 .552 0 1-.448 1-1s-.448-1-1-1c-2.757 0-5 2.243-5 5v38c0 5.55 3.45 9 9 9h32c.552 0 1-.448 1-1s-.448-1-1-1zM19 38h10c.552 0 1-.448 1-1s-.448-1-1-1H19c-.552 0-1 .448-1 1s.448 1 1 1zm0-26h16c.552 0 1-.448 1-1s-.448-1-1-1H19c-.552 0-1 .448-1 1s.448 1 1 1zm30 0c.552 0 1-.448 1-1s-.448-1-1-1h-4c-.552 0-1 .448-1 1s.448 1 1 1h4zM19 44h6c.552 0 1-.448 1-1s-.448-1-1-1h-6c-.552 0-1 .448-1 1s.448 1 1 1zm0 6h6c.552 0 1-.448 1-1s-.448-1-1-1h-6c-.552 0-1 .448-1 1s.448 1 1 1zm-1-19c0 .552.448 1 1 1h6c.265 0 .52-.105.707-.293L32 25.414l2.293 2.293c.39.39 1.023.39 1.414 0L40 23.414l4.293 4.293c.39.39 1.023.39 1.414 0 .39-.39.39-1.023 0-1.414l-5-5c-.39-.39-1.023-.39-1.414 0L35 25.586l-2.293-2.293c-.39-.39-1.023-.39-1.414 0L24.586 30H20V18h28v12H31c-.552 0-1 .448-1 1s.448 1 1 1h18c.552 0 1-.448 1-1V17c0-.552-.448-1-1-1H19c-.552 0-1 .448-1 1v14zm4-9c0 1.103.897 2 2 2s2-.897 2-2-.897-2-2-2-2 .897-2 2zM5 14c-.552 0-1 .448-1 1v34c0 .552.448 1 1 1s1-.448 1-1V15c0-.552-.448-1-1-1zm44 20c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1s1-.448 1-1v-4c0-.552-.448-1-1-1zm-5 3v2c0 .553.448 1 1 1s1-.447 1-1v-2c0-.552-.448-1-1-1s-1 .448-1 1zm10 2v-2c0-.552-.448-1-1-1s-1 .448-1 1v2c0 .553.448 1 1 1s1-.447 1-1zm5 3H33c-.552 0-1 .448-1 1v4c0 2.897 2.103 5 5 5h1.764c1.605 4.09 5.583 7 10.236 7 6.065 0 11-4.935 11-11v-5c0-.552-.448-1-1-1zm-22 8c-1.794 0-3-1.206-3-3v-3h4v4c0 .684.07 1.35.19 2H37zm21-2c0 4.962-4.038 9-9 9s-9-4.038-9-9v-4h18v4z\" fill=\"#AEBCCE\" fill-rule=\"evenodd\"/></svg>');\n  mask-image: url('data:image/svg+xml;charset=utf-8,<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><title>The up and up</title><path d=\"M55 0H13c-2.71 0-5 2.29-5 5v48c0 .552.448 1 1 1s1-.448 1-1V5c0-1.598 1.402-3 3-3h42c1.654 0 3 1.346 3 3v34c0 .552.448 1 1 1s1-.448 1-1V5c0-2.757-2.243-5-5-5zM41 58H9c-4.45 0-7-2.55-7-7V13c0-1.654 1.346-3 3-3 .552 0 1-.448 1-1s-.448-1-1-1c-2.757 0-5 2.243-5 5v38c0 5.55 3.45 9 9 9h32c.552 0 1-.448 1-1s-.448-1-1-1zM19 38h10c.552 0 1-.448 1-1s-.448-1-1-1H19c-.552 0-1 .448-1 1s.448 1 1 1zm0-26h16c.552 0 1-.448 1-1s-.448-1-1-1H19c-.552 0-1 .448-1 1s.448 1 1 1zm30 0c.552 0 1-.448 1-1s-.448-1-1-1h-4c-.552 0-1 .448-1 1s.448 1 1 1h4zM19 44h6c.552 0 1-.448 1-1s-.448-1-1-1h-6c-.552 0-1 .448-1 1s.448 1 1 1zm0 6h6c.552 0 1-.448 1-1s-.448-1-1-1h-6c-.552 0-1 .448-1 1s.448 1 1 1zm-1-19c0 .552.448 1 1 1h6c.265 0 .52-.105.707-.293L32 25.414l2.293 2.293c.39.39 1.023.39 1.414 0L40 23.414l4.293 4.293c.39.39 1.023.39 1.414 0 .39-.39.39-1.023 0-1.414l-5-5c-.39-.39-1.023-.39-1.414 0L35 25.586l-2.293-2.293c-.39-.39-1.023-.39-1.414 0L24.586 30H20V18h28v12H31c-.552 0-1 .448-1 1s.448 1 1 1h18c.552 0 1-.448 1-1V17c0-.552-.448-1-1-1H19c-.552 0-1 .448-1 1v14zm4-9c0 1.103.897 2 2 2s2-.897 2-2-.897-2-2-2-2 .897-2 2zM5 14c-.552 0-1 .448-1 1v34c0 .552.448 1 1 1s1-.448 1-1V15c0-.552-.448-1-1-1zm44 20c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1s1-.448 1-1v-4c0-.552-.448-1-1-1zm-5 3v2c0 .553.448 1 1 1s1-.447 1-1v-2c0-.552-.448-1-1-1s-1 .448-1 1zm10 2v-2c0-.552-.448-1-1-1s-1 .448-1 1v2c0 .553.448 1 1 1s1-.447 1-1zm5 3H33c-.552 0-1 .448-1 1v4c0 2.897 2.103 5 5 5h1.764c1.605 4.09 5.583 7 10.236 7 6.065 0 11-4.935 11-11v-5c0-.552-.448-1-1-1zm-22 8c-1.794 0-3-1.206-3-3v-3h4v4c0 .684.07 1.35.19 2H37zm21-2c0 4.962-4.038 9-9 9s-9-4.038-9-9v-4h18v4z\" fill=\"#AEBCCE\" fill-rule=\"evenodd\"/></svg>');\n}\n\n\n.section-icon:nth-child(n){\n  margin-right: 30px;\n}\n\n\n.section-icon:last-child{\n  margin-right: 0;\n}\n\n\n.section-icon:nth-child(1n){\n  margin-right: 0;\n}\n\n.section-title {\n  font-family: 'Bariol','Abril Fatface','Playfair Display','Fira Sans','Vollkorn','ProximaNova-Semibold','Helvetica','sans-serif';\n  font-weight: 700;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n  font-size: calc(1.4 * 1.414 * 1rem);\n  line-height: calc(1.4 * 1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem / 2);\n}\n\n.section-title:nth-child(n){\n  margin-right: 30px;\n}\n\n.section-title:last-child{\n  margin-right: 0;\n}\n\n.section-title:nth-child(1n){\n  margin-right: 0;\n}\n\n.section-content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n}\n\n@media only screen and (max-width: 679px){\n  .Upup{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0 15px;\n    margin-top: 50px;\n  }\n}\n\n@media only screen and (min-width: 680px){\n  .section-title{\n    font-weight: 400;\n  }\n  .Upup{\n    margin-top: 75px;\n  }\n}\n\n@media only screen and (min-width: 680px) and (max-width: 999px){\n  .Upup{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    margin: 0 30px;\n    display: flex;\n    -webkit-flex-flow: column nowrap;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n  }\n}\n\n@media only screen and (min-width: 1000px) and (max-width: 1259px){\n  .Upup{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 1000px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n@media only screen and (min-width: 1260px){\n  .Upup{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 1260px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n.Upup-designer, .Upup-human {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n}\n\n.Upup-designer:nth-child(n), .Upup-human:nth-child(n){\n  margin-right: 30px;\n}\n\n.Upup-designer:last-child, .Upup-human:last-child{\n  margin-right: 0;\n}\n\n.Upup-designer:nth-child(1n), .Upup-human:nth-child(1n){\n  margin-right: 0;\n}\n\n.Upup-designer h4, .Upup-human h4 {\n  font-family: 'Bariol','Abril Fatface','Playfair Display','Fira Sans','Vollkorn','ProximaNova-Semibold','Helvetica','sans-serif';\n  font-size: calc(1 * 1.414 * 1rem);\n  line-height: calc(1.4 * 1.5 * 1rem);\n}\n\n.Upup-designer p, .Upup-human p {\n  margin-top: calc(1.5 * 1rem / 6);\n}\n\n@media only screen and (max-width: 679px){\n  .Upup-designer h4, .Upup-human h4{\n    color: #FFBF00;\n    font-weight: normal;\n  }\n  .Upup-designer p, .Upup-human p{\n    font-size: 20px;\n    color: #5B6675;\n    font-weight: 400;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 1/1 - (30px - 30px * 1/1));\n  }\n  .Upup-designer p:nth-child(n), .Upup-human p:nth-child(n){\n    margin-right: 30px;\n  }\n  .Upup-designer p:last-child, .Upup-human p:last-child{\n    margin-right: 0;\n  }\n  .Upup-designer p:nth-child(1n), .Upup-human p:nth-child(1n){\n    margin-right: 0;\n  }\n}\n\n@media only screen and (min-width: 680px){\n  .Upup-designer, .Upup-human{\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 1/2 - (30px - 30px * 1/2));\n  }\n  .Upup-designer:nth-child(n), .Upup-human:nth-child(n){\n    margin-right: 30px;\n  }\n  .Upup-designer:last-child, .Upup-human:last-child{\n    margin-right: 0;\n  }\n  .Upup-designer:nth-child(2n), .Upup-human:nth-child(2n){\n    margin-right: 0;\n  }\n  .Upup-designer h4, .Upup-human h4{\n    font-weight: 700;\n  }\n  .Upup-designer p, .Upup-human p{\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 9/10 - (30px - 30px * 9/10));\n    font-size: 22px;\n    color: #394453;\n    line-height: calc(1.10 * 1.5 * 1rem);\n    font-weight: 300;\n    font-family: 'ProximaNova-Light','Open Sans','Helvetica','sans-serif';\n  }\n  .Upup-designer p:nth-child(n), .Upup-human p:nth-child(n){\n    margin-right: 30px;\n  }\n  .Upup-designer p:last-child, .Upup-human p:last-child{\n    margin-right: 0;\n  }\n  .Upup-designer p:nth-child(10n), .Upup-human p:nth-child(10n){\n    margin-right: 0;\n  }\n}\n\n.Upup-icon-designer {}\n\n.Upup-icon-human {}\n\n\n\n", ""]);

  // exports


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/* Colors */\n\n/* Uses */\n\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n/* Old Media Queries\n$iphone5-screen: 320px;\n$iphone6-screen: 375px;\n$tiny-screen: 500px;\n$extra-small-screen: 600px;\n$small-screen: 768px;\n$small-medium: 940px;\n$medium-screen: 1280px;\n$large-screen: 1440px;\n$x-large-screen: 1600px;\n*/\n\n/* React-starter-kit\n$screen-sm-min: 768px;\n$screen-md-min: 992px;\n$screen-lg-min: 1200px;\n*/\n\n/* Supported Size Ranges: */\n/* handhelds, except-handhelds */\n/* small-screens, except-small-screens, to-small-screens, above-small-screens */\n/* medium-screens, except-medium-screens, above-medium-screens */\n/* large-screens, except-large-screens */\n/* Use: */\n/* @include media(handhelds, large-screens) */\n/* @include media(above-small-screens) {\n     max-width: 960px\n   }\n*/\n\n/* Typesetting variables. Edit these! */ /* in pixels. This would result in 22px on desktop */ /* how large the line height is as a multiple of font size */ /* ADJUST THE FIRST IF YOU CHANGE $baselineHeight\n\n/* Rate of growth for headings */\n/* I actually like this to be slightly smaller then the leading. Makes for tight headings. */\n\n/* Setup */\nhtml {\n  /* Change default typefaces here */\n  font-family: 'ProximaNova-Regular', 'Open Sans', 'Helvetica', 'sans-serif';\n  font-size: calc(22 / 16 * 100%);\n  font-weight: normal;\n  font-style: normal;\n  color: #394453;\n\n  /* Make everything look a little nicer in webkit */\n  -webkit-font-smoothing: antialiased;\n}\n  /* -webkit-text-size-adjust: auto\n  // -moz-text-size-adjust: auto\n  // -ms-text-size-adjust: auto\n  // -o-text-size-adjust: auto\n  // text-size-adjust: auto */\n\n/* Copy & Lists */\np {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n}\nul, ol {\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\nul li, ol li {\n  line-height: calc(1.5 * 1rem);\n}\nul ul, ul ol, ol ul, ol ol {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nblockquote {\n  line-height: calc(1.5 * 1rem);\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: calc(1.5 * 1rem);\n}\n/* Headings */\nh1, h2, h3, h4, h5, h6 {\n  /* Change heading typefaces here */\n  font-family: 'Bariol', 'Archivo Narrow', 'Source Sans Pro', 'Alegreya', 'Playfair Display', 'Fira Sans', 'Vollkorn', 'ProximaNova-Semibold', 'Helvetica', 'sans-serif';\n  font-weight: bold;\n  font-style: normal;\n  margin-top: calc(1.5 * 1rem);\n  margin-bottom: 0;\n  line-height: calc(1.5 * 1rem);\n}\nh1 {\n  font-size: calc(2.20 * 1.414 * 1rem);\n  font-weight: 700;\n  line-height: calc(2.35 * 1.5 * 1rem);\n  margin-top: calc(0.15 * 1.5 * 1rem);\n}\n\n@media only screen and (min-width: 680px) {\n  h1 {\n    font-size: calc(3 * 1.414 * 1rem);\n    line-height: calc(3 * 1.5 * 1rem);\n    //margin-top: calc(2 * calc(1.5 * 1rem));\n  }\n}\n\n\nh2 {\n  font-size: calc(2 * 1.414 * 1rem);\n  line-height: calc(2 * 1.5 * 1rem);\n  margin-top: calc(2 * 1.5 * 1rem);\n}\n\nh3 {\n  font-size: calc(1 * 1.414 * 1rem);\n}\nh4 {\n  font-size: calc(1.414 / 2 * 1rem);\n}\nh5 {\n  font-size: calc(1.414 / 3 * 1rem);\n}\nh6 {\n  font-size: calc(1.414 / 4 * 1rem);\n}\n\n/* Tables */\ntable {\n  margin-top: calc(1.5 * 1rem);\n  border-spacing: 0px;\n  border-collapse: collapse;\n}\ntable td, table th {\n  padding: 0;\n  line-height: calc(1.5 * 22 - 0px);\n}\n/* Code blocks */\ncode {\n  /* Forces text to constrain to the line-height. Not ideal, but works. */\n  vertical-align: bottom;\n}\n/* Leading paragraph text */\n.lead {\n  font-size: calc(1.414 * 1rem);\n}\n\n/* Hug a the block above you */\n.hug {\n  margin-top: 0;\n}\n\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n}\n\n.Layout {\n  margin: 0 auto;\n  overflow: hidden;\n  width: 100%;\n}\n\n\n@media only screen and (max-width: 679px) {\n  .Layout {\n    padding: 0;\n    overflow: hidden;\n  }\n}", ""]);

  // exports


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n.Link {\n\n}\n", ""]);

  // exports


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/* Colors */\n\n/* Uses */\n\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n/* Old Media Queries\n$iphone5-screen: 320px;\n$iphone6-screen: 375px;\n$tiny-screen: 500px;\n$extra-small-screen: 600px;\n$small-screen: 768px;\n$small-medium: 940px;\n$medium-screen: 1280px;\n$large-screen: 1440px;\n$x-large-screen: 1600px;\n*/\n\n/* React-starter-kit\n$screen-sm-min: 768px;\n$screen-md-min: 992px;\n$screen-lg-min: 1200px;\n*/\n\n/* Supported Size Ranges: */\n/* handhelds, except-handhelds */\n/* small-screens, except-small-screens, to-small-screens, above-small-screens */\n/* medium-screens, except-medium-screens, above-medium-screens */\n/* large-screens, except-large-screens */\n/* Use: */\n/* @include media(handhelds, large-screens) */\n/* @include media(above-small-screens) {\n     max-width: 960px\n   }\n*/\n\n@media only screen and (max-width: 679px){\n\n  .Navigation{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0 15px;\n  }\n}\n\n@media only screen and (min-width: 680px) and (max-width: 999px){\n\n  .Navigation{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    margin: 0 30px;\n  }\n}\n\n@media only screen and (min-width: 1000px) and (max-width: 1259px){\n\n  .Navigation{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 1000px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n@media only screen and (min-width: 1260px){\n\n  .Navigation{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 1260px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 0;\n  }\n}\n\n.Navigation-left {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 2/5 - (30px - 30px * 2/5));\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n}\n\n.Navigation-left:nth-child(n){\n  margin-right: 30px;\n}\n\n.Navigation-left:last-child{\n  margin-right: 0;\n}\n\n.Navigation-left:nth-child(5n){\n  margin-right: 0;\n}\n\n.logo {\n  display: inline-block;\n  width: 76px;\n  height: 92px;\n  background: url('data:image/svg+xml;charset=utf-8,<svg width=\"76\" height=\"92\" viewBox=\"0 0 76 92\" xmlns=\"http://www.w3.org/2000/svg\"><title>logo</title><g fill=\"#7F90A6\" fill-rule=\"evenodd\"><path d=\"M42.348 21.76c.67 0 1.213-.543 1.213-1.212 0-.67-.542-1.213-1.212-1.213-.67 0-1.212.543-1.212 1.213s.543 1.212 1.212 1.212M56.86 89.95c-.45 0-.817.365-.817.815 0 .452.366.817.817.817.45 0 .817-.365.817-.817 0-.45-.366-.816-.817-.816M1.47 89.972c-.448 0-.81.363-.81.812 0 .447.362.81.81.81.448 0 .81-.363.81-.81 0-.45-.362-.812-.81-.812M21.98 45.736H22c.447-.002.81-.365.807-.813l-.04-15.704c0-.25.106-.49.302-.644 1.52-1.187 3.51-1.864 5.55-1.87 3.055 0 5.44 1.51 6.38 4.047.28.737.39 1.34.392 2.154l.033 11.98c0 .45.365.81.813.81h.016c.448-.002.81-.366.808-.813l-.03-12.056c0-.95-.16-1.8-.503-2.67-1.188-3.19-4.127-5.09-7.892-5.09-1.62.005-3.265.388-4.714 1.078-.543.26-1.17-.118-1.17-.72L22.69.992c0-.446-.365-.81-.813-.808-.497.002-.83.38-.828.807l.118 43.943c0 .45.366.805.813.803M49.33 45.664c.45 0 .81-.364.81-.81V.99c0-.448-.363-.812-.813-.81-.49 0-.826.382-.826.81v43.86c0 .432.34.813.83.812M5.74 55.933c-.318-.325-.307-.845.024-1.154L17.32 43.997c.324-.302.343-.808.045-1.134l-.01-.013c-.304-.33-.82-.35-1.147-.044L3.523 54.68c-.514.48-1.355.117-1.358-.587l-.028-10.48v-.002l-.035-12.703c.5.03.962.054 1.464.054h.002c3.92-.01 7.212-.962 9.52-2.754 2.078-1.61 3.218-3.788 3.212-6.126-.012-4.267-4-8.858-12.782-8.858-.797 0-1.57.033-2.346.083-.426.028-.757.387-.756.814l.086 30.86.115 39.287c0 .422.327.807.838.804.444 0 .804-.363.803-.807l-.08-25.727c-.002-.225.09-.438.254-.59l.99-.925c.32-.298.82-.288 1.125.026l11.72 11.96c.29.296.778.34 1.13.02.34-.306.355-.833.035-1.16L5.74 55.934zM2.06 15.68c0-.447.36-.808.807-.813.233-.003.47-.003.714-.003 7.595 0 11.066 3.74 11.075 7.217.005 1.88-.962 3.634-2.724 4.942-2.014 1.495-4.91 2.29-8.395 2.3-.426 0-.936-.023-1.44-.053L2.06 15.68zM28.887 48.423c-2.046.005-4.22.862-5.813 2.295-1.464 1.314-3.207 3.8-3.194 8.166.015 4.972 3.993 10.324 12.69 10.324.644 0 1.294-.048 1.944-.108.417-.038.735-.392.734-.81 0-.516-.425-.858-.878-.823-.533.04-1.053.065-1.69.065-7.652 0-11.148-4.486-11.16-8.656 0-.216 0-.418.012-.614l15.274-.043c.342-.002.625-.29.61-.63-.25-6.012-3.91-9.167-8.53-9.167zm6.142 8.162l-12.55.034c-.393 0-.698-.37-.596-.747 1.016-3.762 4.066-5.808 7.027-5.808 4.096 0 6.265 3.17 6.716 5.796.064.377-.215.724-.597.725z\"/><path d=\"M56.872 85.146c.446 0 .806-.364.805-.81l-.105-34.812c0-.446-.364-.807-.81-.805-.494 0-.825.385-.823.808l.045 15.443c0 .235-.094.462-.27.616-1.782 1.562-4.246 2.486-6.712 2.493-3.21 0-5.773-2.293-5.785-6.126l-.032-14.487c0-.036-.015-.065-.02-.1L43.115 26.2c0-.442-.36-.8-.8-.8-.524.002-.84.384-.838.804l.078 22.676c0 .007.004.014.005.02l.027 12.984c.015 4.904 3.427 7.835 7.48 7.835 1.607-.006 3.842-.39 5.727-1.39.546-.29 1.2.08 1.202.695l.05 15.316c0 .428.337.807.826.806M68.704 58.012c-2.49-.42-5.456-1.387-5.46-3.59-.008-2.555 2.83-4.348 6.91-4.36.77 0 1.926.178 3.06.53.38.118.812-.055.993-.478.192-.45-.05-.967-.517-1.113-1.26-.393-2.6-.575-3.547-.575-4.957.015-8.55 2.538-8.54 6.002.008 2.644 2.448 4.497 6.868 5.216 2.488.42 5.454 1.384 5.462 3.59.006 2.552-2.833 4.344-6.92 4.357-.766 0-1.92-.178-3.052-.53-.38-.117-.813.057-.993.48-.192.446.044.965.508 1.11 1.274.4 2.612.58 3.54.58h.016c2.483-.007 4.623-.607 6.19-1.733 1.52-1.097 2.356-2.612 2.352-4.27-.007-2.646-2.447-4.5-6.868-5.215M56.86 86.257c-.45 0-.817.365-.817.817v.836c0 .45.366.816.817.816.45 0 .817-.365.817-.816v-.836c0-.452-.366-.817-.817-.817M1.468 86.296c-.452 0-.817.365-.817.817v.836c0 .45.366.816.818.816.45 0 .816-.366.816-.817v-.837c0-.452-.366-.817-.816-.817\"/></g></svg>');\n}\n\n.city-container {\n  display: none;\n}\n\n@media only screen and (min-width: 1000px){\n\n  .city-container{\n    display: inline-block;\n    position: relative;\n    margin-left: 30px;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 2/3 - (30px - 30px * 2/3));\n  }\n\n  .city-container:nth-child(n){\n    margin-right: 30px;\n  }\n\n  .city-container:last-child{\n    margin-right: 0;\n  }\n\n  .city-container:nth-child(3n){\n    margin-right: 0;\n  }\n\n  .city-container > *{\n    position: absolute;\n    top: 50%;\n    right: auto;\n    bottom: auto;\n    left: 0;\n    -webkit-transform: translate(0, -50%);\n        -ms-transform: translate(0, -50%);\n         -o-transform: translate(0, -50%);\n            transform: translate(0, -50%);\n  }\n\n  .city-in{\n    font-size: calc(22 / 30 * 100%);\n  }\n\n  .city{\n    font-family: 'ProximaNova-Semibold','Open Sans','Helvetica','sans-serif';\n    color: #FFBF00;\n  }\n}\n\n.Navigation-right {\n  display: none;\n}\n\n.Navigation-right--mobile {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 3/5 - (30px - 30px * 3/5));\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  position: relative;\n}\n\n.Navigation-right--mobile:nth-child(n){\n  margin-right: 30px;\n}\n\n.Navigation-right--mobile:last-child{\n  margin-right: 0;\n}\n\n.Navigation-right--mobile:nth-child(5n){\n  margin-right: 0;\n}\n\n.Navigation-right--mobile > *{\n  position: absolute;\n  top: 50%;\n  right: 0;\n  bottom: auto;\n  left: auto;\n  -webkit-transform: translate(0, -50%);\n      -ms-transform: translate(0, -50%);\n       -o-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n}\n.Navigation-right--mobile:nth-child(1n) {\n  margin-right: 0;\n}\n\n.mobile-menu {\n  font-size: calc(22 / 22 * 100%);\n  text-decoration: none;\n  color: #FFBF00;\n}\n\n@media only screen and (min-width: 680px){\n\n  .Navigation-right{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 3/5 - (30px - 30px * 3/5));\n    list-style: none;\n    position: relative;\n  }\n\n  .Navigation-right:nth-child(n){\n    margin-right: 30px;\n  }\n\n  .Navigation-right:last-child{\n    margin-right: 0;\n  }\n\n  .Navigation-right:nth-child(5n){\n    margin-right: 0;\n  }\n\n  .Navigation-right > *{\n    position: absolute;\n    top: 50%;\n    right: 0;\n    bottom: auto;\n    left: auto;\n    -webkit-transform: translate(0, -50%);\n        -ms-transform: translate(0, -50%);\n         -o-transform: translate(0, -50%);\n            transform: translate(0, -50%);\n  }\n\n  .Navigation-right > *{\n    top: 25%;\n  }\n\n  .Navigation-menu{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 5/5 - (30px - 30px * 5/5));\n    list-style: none;\n  }\n\n  .Navigation-menu:nth-child(n){\n    margin-right: 30px;\n  }\n\n  .Navigation-menu:last-child{\n    margin-right: 0;\n  }\n\n  .Navigation-menu:nth-child(5n){\n    margin-right: 0;\n  }\n\n  .Navigation-right--mobile{\n    display: none;\n  }\n}\n\n@media only screen and (min-width: 1000px){\n\n  .Navigation-menu{\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 4/5 - (30px - 30px * 4/5));\n  }\n\n  .Navigation-menu:nth-child(n){\n    margin-right: 30px;\n  }\n\n  .Navigation-menu:last-child{\n    margin-right: 0;\n  }\n\n  .Navigation-menu:nth-child(5n){\n    margin-right: 0;\n  }\n}\n\n.Navigation-item {\n  position: relative;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 1/5 - (30px - 30px * 1/5));\n}\n\n.Navigation-item:nth-child(n){\n  margin-right: 30px;\n}\n\n.Navigation-item:last-child{\n  margin-right: 0;\n}\n\n.Navigation-item:nth-child(5n){\n  margin-right: 0;\n}\n\n.Navigation-item > *{\n  position: absolute;\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n       -o-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.Navigation-link {\n  //padding: 0.5em 1em;\n  color: #394453;\n  text-decoration: none;\n  cursor: pointer;\n  font-size: calc(22 / 30 * 100%);\n  border-bottom: 3px solid white;\n  -webkit-transition: all 1s;\n       -o-transition: all 1s;\n          transition: all 1s;\n}\n\n.Navigation-link:hover {\n  border-bottom: 3px solid #FFBF00;\n  color: #394453;\n}\n", ""]);

  // exports


/***/ },
/* 37 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 38 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 39 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ }
/******/ ]);