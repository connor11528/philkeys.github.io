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

  var _reactDom = __webpack_require__(20);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(4);

  var _libLocation = __webpack_require__(3);

  var _libLocation2 = _interopRequireDefault(_libLocation);

  var _componentsLayout = __webpack_require__(5);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(8);
    }, '/500': function _() {
      return __webpack_require__(9);
    }, '/about': function about() {
      return __webpack_require__(10);
    }, '/blog': function blog() {
      return __webpack_require__(11);
    }, '/blog/test-article-one': function blogTestArticleOne() {
      return __webpack_require__(12);
    }, '/blog/test-article-two': function blogTestArticleTwo() {
      return __webpack_require__(13);
    }, '/': function _() {
      return __webpack_require__(14);
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

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(4);

  var _historyLibCreateBrowserHistory = __webpack_require__(18);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibUseQueries = __webpack_require__(19);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = _fbjsLibExecutionEnvironment.canUseDOM ? (0, _historyLibUseQueries2['default'])(_historyLibCreateBrowserHistory2['default'])() : {};

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 5 */
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

  __webpack_require__(15);

  var _Navigation = __webpack_require__(7);

  var _Navigation2 = _interopRequireDefault(_Navigation);

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
          this.props.children
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
/* 6 */
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

  __webpack_require__(16);

  var _libLocation = __webpack_require__(3);

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

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(17);

  var _Link = __webpack_require__(6);

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
            _react2['default'].createElement('span', { className: 'logo' }),
            _react2['default'].createElement(
              'div',
              { className: 'city-container' },
              _react2['default'].createElement(
                'span',
                { className: 'city' },
                'Currently in Santa Monica, CA'
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
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/* Colors */\n\n/* Uses */\n\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n/* Typesetting variables. Edit these! */ /* in pixels. This would result in 22px on desktop */ /* how large the line height is as a multiple of font size */\n\n/* Rate of growth for headings */\n/* I actually like this to be slightly smaller then the leading. Makes for tight headings. */\n\n/* Setup */\nhtml {\n  /* Change default typefaces here */\n  font-family: 'ProximaNova-Regular', 'Helvetica', 'sans-serif';\n  font-size: calc(22 / 16 * 100%);\n  font-weight: normal;\n  font-style: normal;\n  color: #394453;\n\n  /* Make everything look a little nicer in webkit */\n  -webkit-font-smoothing: antialiased;\n}\n  /* -webkit-text-size-adjust: auto\n  // -moz-text-size-adjust: auto\n  // -ms-text-size-adjust: auto\n  // -o-text-size-adjust: auto\n  // text-size-adjust: auto */\n\n/* Copy & Lists */\np {\n  line-height: 1.5 * 1rem;\n  margin-top: 1.5 * 1rem;\n  margin-bottom: 0;\n}\nul, ol {\n  margin-top: 1.5 * 1rem;\n  margin-bottom: 1.5 * 1rem;\n}\nul li, ol li {\n  line-height: 1.5 * 1rem;\n}\nul ul, ul ol, ol ul, ol ol {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nblockquote {\n  line-height: 1.5 * 1rem;\n  margin-top: 1.5 * 1rem;\n  margin-bottom: 1.5 * 1rem;\n}\n/* Headings */\nh1, h2, h3, h4, h5, h6 {\n  /* Change heading typefaces here */\n  font-family: 'Bariol', 'ProximaNova-Semibold', 'Helvetica', 'sans-serif';\n  font-weight: bold;\n  font-style: normal;\n  margin-top: 1.5 * 1rem;\n  margin-bottom: 0;\n  line-height: 1.5 * 1rem;\n}\nh1 {\n  font-size: calc(3 * 1.414 * 1rem);\n  line-height: calc(3 * 1.5 * 1rem);\n  margin-top: calc(2 * 1.5 * 1rem);\n}\n\nh2 {\n  font-size: calc(2 * 1.414 * 1rem);\n  line-height: calc(2 * 1.5 * 1rem);\n  margin-top: calc(2 * 1.5 * 1rem);\n}\n\nh3 {\n  font-size: calc(1 * 1.414 * 1rem);\n}\nh4 {\n  font-size: calc(1.414 / 2 * 1rem);\n}\nh5 {\n  font-size: calc(1.414 / 3 * 1rem);\n}\nh6 {\n  font-size: calc(1.414 / 4 * 1rem);\n}\n\n/* Tables */\ntable {\n  margin-top: 1.5 * 1rem;\n  border-spacing: 0px;\n  border-collapse: collapse;\n}\ntable td, table th {\n  padding: 0;\n  line-height: calc(1.5 * 22 - 0px);\n}\n/* Code blocks */\ncode {\n  /* Forces text to constrain to the line-height. Not ideal, but works. */\n  vertical-align: bottom;\n}\n/* Leading paragraph text */\n.lead {\n  font-size: calc(1.414 * 1rem);\n}\n\n/* Hug a the block above you */\n.hug {\n  margin-top: 0;\n}\n\n/* Old Media Queries\n$iphone5-screen: 320px;\n$iphone6-screen: 375px;\n$tiny-screen: 500px;\n$extra-small-screen: 600px;\n$small-screen: 768px;\n$small-medium: 940px;\n$medium-screen: 1280px;\n$large-screen: 1440px;\n$x-large-screen: 1600px;\n*/\n\n/* React-starter-kit\n$screen-sm-min: 768px;\n$screen-md-min: 992px;\n$screen-lg-min: 1200px;\n*/\n\n/* Supported Size Ranges: */\n/* handhelds, except-handhelds */\n/* small-screens, except-small-screens, to-small-screens, above-small-screens */\n/* medium-screens, except-medium-screens, above-medium-screens */\n/* large-screens, except-large-screens */\n/* Use: */\n/* @include media(handhelds, large-screens) */\n/* @include media(above-small-screens) {\n     max-width: 960px\n   }\n*/\n\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n}\n\n.Layout {\n  margin: 0 auto;\n}\n\n\n@media only screen and (max-width: 679px) {\n  .Layout {\n    padding: 0 15px;\n  }\n}", ""]);

  // exports


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n.Link {\n\n}\n", ""]);

  // exports


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/* Colors */\n\n/* Uses */\n\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n/* Old Media Queries\n$iphone5-screen: 320px;\n$iphone6-screen: 375px;\n$tiny-screen: 500px;\n$extra-small-screen: 600px;\n$small-screen: 768px;\n$small-medium: 940px;\n$medium-screen: 1280px;\n$large-screen: 1440px;\n$x-large-screen: 1600px;\n*/\n\n/* React-starter-kit\n$screen-sm-min: 768px;\n$screen-md-min: 992px;\n$screen-lg-min: 1200px;\n*/\n\n/* Supported Size Ranges: */\n/* handhelds, except-handhelds */\n/* small-screens, except-small-screens, to-small-screens, above-small-screens */\n/* medium-screens, except-medium-screens, above-medium-screens */\n/* large-screens, except-large-screens */\n/* Use: */\n/* @include media(handhelds, large-screens) */\n/* @include media(above-small-screens) {\n     max-width: 960px\n   }\n*/\n\n@media only screen and (max-width: 679px){\n\n  .Navigation{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    //margin: 0 15px;\n  }\n}\n\n@media only screen and (min-width: 680px) and (max-width: 999px){\n\n  .Navigation{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    margin: 0 30px;\n  }\n}\n\n@media only screen and (min-width: 1000px) and (max-width: 1259px){\n\n  .Navigation{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 1000px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n@media only screen and (min-width: 1260px){\n\n  .Navigation{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    max-width: 1260px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 0;\n  }\n}\n\n.Navigation-left {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 2/5 - (30px - 30px * 2/5));\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n}\n\n.Navigation-left:nth-child(n){\n  margin-right: 30px;\n}\n\n.Navigation-left:last-child{\n  margin-right: 0;\n}\n\n.Navigation-left:nth-child(5n){\n  margin-right: 0;\n}\n\n.logo {\n  display: inline-block;\n  width: 76px;\n  height: 92px;\n  background: url('data:image/svg+xml;charset=utf-8,<svg width=\"76\" height=\"92\" viewBox=\"0 0 76 92\" xmlns=\"http://www.w3.org/2000/svg\"><title>logo</title><g fill=\"#7F90A6\" fill-rule=\"evenodd\"><path d=\"M42.348 21.76c.67 0 1.213-.543 1.213-1.212 0-.67-.542-1.213-1.212-1.213-.67 0-1.212.543-1.212 1.213s.543 1.212 1.212 1.212M56.86 89.95c-.45 0-.817.365-.817.815 0 .452.366.817.817.817.45 0 .817-.365.817-.817 0-.45-.366-.816-.817-.816M1.47 89.972c-.448 0-.81.363-.81.812 0 .447.362.81.81.81.448 0 .81-.363.81-.81 0-.45-.362-.812-.81-.812M21.98 45.736H22c.447-.002.81-.365.807-.813l-.04-15.704c0-.25.106-.49.302-.644 1.52-1.187 3.51-1.864 5.55-1.87 3.055 0 5.44 1.51 6.38 4.047.28.737.39 1.34.392 2.154l.033 11.98c0 .45.365.81.813.81h.016c.448-.002.81-.366.808-.813l-.03-12.056c0-.95-.16-1.8-.503-2.67-1.188-3.19-4.127-5.09-7.892-5.09-1.62.005-3.265.388-4.714 1.078-.543.26-1.17-.118-1.17-.72L22.69.992c0-.446-.365-.81-.813-.808-.497.002-.83.38-.828.807l.118 43.943c0 .45.366.805.813.803M49.33 45.664c.45 0 .81-.364.81-.81V.99c0-.448-.363-.812-.813-.81-.49 0-.826.382-.826.81v43.86c0 .432.34.813.83.812M5.74 55.933c-.318-.325-.307-.845.024-1.154L17.32 43.997c.324-.302.343-.808.045-1.134l-.01-.013c-.304-.33-.82-.35-1.147-.044L3.523 54.68c-.514.48-1.355.117-1.358-.587l-.028-10.48v-.002l-.035-12.703c.5.03.962.054 1.464.054h.002c3.92-.01 7.212-.962 9.52-2.754 2.078-1.61 3.218-3.788 3.212-6.126-.012-4.267-4-8.858-12.782-8.858-.797 0-1.57.033-2.346.083-.426.028-.757.387-.756.814l.086 30.86.115 39.287c0 .422.327.807.838.804.444 0 .804-.363.803-.807l-.08-25.727c-.002-.225.09-.438.254-.59l.99-.925c.32-.298.82-.288 1.125.026l11.72 11.96c.29.296.778.34 1.13.02.34-.306.355-.833.035-1.16L5.74 55.934zM2.06 15.68c0-.447.36-.808.807-.813.233-.003.47-.003.714-.003 7.595 0 11.066 3.74 11.075 7.217.005 1.88-.962 3.634-2.724 4.942-2.014 1.495-4.91 2.29-8.395 2.3-.426 0-.936-.023-1.44-.053L2.06 15.68zM28.887 48.423c-2.046.005-4.22.862-5.813 2.295-1.464 1.314-3.207 3.8-3.194 8.166.015 4.972 3.993 10.324 12.69 10.324.644 0 1.294-.048 1.944-.108.417-.038.735-.392.734-.81 0-.516-.425-.858-.878-.823-.533.04-1.053.065-1.69.065-7.652 0-11.148-4.486-11.16-8.656 0-.216 0-.418.012-.614l15.274-.043c.342-.002.625-.29.61-.63-.25-6.012-3.91-9.167-8.53-9.167zm6.142 8.162l-12.55.034c-.393 0-.698-.37-.596-.747 1.016-3.762 4.066-5.808 7.027-5.808 4.096 0 6.265 3.17 6.716 5.796.064.377-.215.724-.597.725z\"/><path d=\"M56.872 85.146c.446 0 .806-.364.805-.81l-.105-34.812c0-.446-.364-.807-.81-.805-.494 0-.825.385-.823.808l.045 15.443c0 .235-.094.462-.27.616-1.782 1.562-4.246 2.486-6.712 2.493-3.21 0-5.773-2.293-5.785-6.126l-.032-14.487c0-.036-.015-.065-.02-.1L43.115 26.2c0-.442-.36-.8-.8-.8-.524.002-.84.384-.838.804l.078 22.676c0 .007.004.014.005.02l.027 12.984c.015 4.904 3.427 7.835 7.48 7.835 1.607-.006 3.842-.39 5.727-1.39.546-.29 1.2.08 1.202.695l.05 15.316c0 .428.337.807.826.806M68.704 58.012c-2.49-.42-5.456-1.387-5.46-3.59-.008-2.555 2.83-4.348 6.91-4.36.77 0 1.926.178 3.06.53.38.118.812-.055.993-.478.192-.45-.05-.967-.517-1.113-1.26-.393-2.6-.575-3.547-.575-4.957.015-8.55 2.538-8.54 6.002.008 2.644 2.448 4.497 6.868 5.216 2.488.42 5.454 1.384 5.462 3.59.006 2.552-2.833 4.344-6.92 4.357-.766 0-1.92-.178-3.052-.53-.38-.117-.813.057-.993.48-.192.446.044.965.508 1.11 1.274.4 2.612.58 3.54.58h.016c2.483-.007 4.623-.607 6.19-1.733 1.52-1.097 2.356-2.612 2.352-4.27-.007-2.646-2.447-4.5-6.868-5.215M56.86 86.257c-.45 0-.817.365-.817.817v.836c0 .45.366.816.817.816.45 0 .817-.365.817-.816v-.836c0-.452-.366-.817-.817-.817M1.468 86.296c-.452 0-.817.365-.817.817v.836c0 .45.366.816.818.816.45 0 .816-.366.816-.817v-.837c0-.452-.366-.817-.816-.817\"/></g></svg>');\n}\n\n\n\n.city-container {\n  display: none;\n}\n\n.city {\n    font-size: calc(22 / 30 * 100%);\n}\n\n@media only screen and (min-width: 1000px){\n\n  .city-container{\n    display: inline-block;\n    position: relative;\n    margin-left: 30px;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 2/3 - (30px - 30px * 2/3));\n  }\n\n  .city-container:nth-child(n){\n    margin-right: 30px;\n  }\n\n  .city-container:last-child{\n    margin-right: 0;\n  }\n\n  .city-container:nth-child(3n){\n    margin-right: 0;\n  }\n\n  .city-container > *{\n    position: absolute;\n    top: 50%;\n    right: auto;\n    bottom: auto;\n    left: 0;\n    -webkit-transform: translate(0, -50%);\n        -ms-transform: translate(0, -50%);\n         -o-transform: translate(0, -50%);\n            transform: translate(0, -50%);\n  }\n\n  .city{\n    font-size: calc(22 / 30 * 100%);\n  }\n}\n\n.Navigation-right {\n  display: none;\n}\n\n.Navigation-right--mobile {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 3/5 - (30px - 30px * 3/5));\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  position: relative;\n}\n\n.Navigation-right--mobile:nth-child(n){\n  margin-right: 30px;\n}\n\n.Navigation-right--mobile:last-child{\n  margin-right: 0;\n}\n\n.Navigation-right--mobile:nth-child(5n){\n  margin-right: 0;\n}\n\n.Navigation-right--mobile > *{\n  position: absolute;\n  top: 50%;\n  right: 0;\n  bottom: auto;\n  left: auto;\n  -webkit-transform: translate(0, -50%);\n      -ms-transform: translate(0, -50%);\n       -o-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n}\n.Navigation-right--mobile:nth-child(1n) {\n  margin-right: 0;\n}\n\n.mobile-menu {\n  font-size: calc(22 / 24 * 100%);\n  text-decoration: none;\n  color: #FFBF00;\n}\n\n@media only screen and (min-width: 680px){\n\n  .Navigation-right{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 3/5 - (30px - 30px * 3/5));\n    list-style: none;\n    position: relative;\n  }\n\n  .Navigation-right:nth-child(n){\n    margin-right: 30px;\n  }\n\n  .Navigation-right:last-child{\n    margin-right: 0;\n  }\n\n  .Navigation-right:nth-child(5n){\n    margin-right: 0;\n  }\n\n  .Navigation-right > *{\n    position: absolute;\n    top: 50%;\n    right: 0;\n    bottom: auto;\n    left: auto;\n    -webkit-transform: translate(0, -50%);\n        -ms-transform: translate(0, -50%);\n         -o-transform: translate(0, -50%);\n            transform: translate(0, -50%);\n  }\n\n  .Navigation-right > *{\n    top: 25%;\n  }\n\n  .Navigation-menu{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 5/5 - (30px - 30px * 5/5));\n    list-style: none;\n  }\n\n  .Navigation-menu:nth-child(n){\n    margin-right: 30px;\n  }\n\n  .Navigation-menu:last-child{\n    margin-right: 0;\n  }\n\n  .Navigation-menu:nth-child(5n){\n    margin-right: 0;\n  }\n\n  .Navigation-right--mobile{\n    display: none;\n  }\n}\n\n\n\n@media only screen and (min-width: 1000px){\n\n  .Navigation-menu{\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: calc(99.99% * 3/5 - (30px - 30px * 3/5));\n  }\n\n  .Navigation-menu:nth-child(n){\n    margin-right: 30px;\n  }\n\n  .Navigation-menu:last-child{\n    margin-right: 0;\n  }\n\n  .Navigation-menu:nth-child(5n){\n    margin-right: 0;\n  }\n}\n\n\n\n\n.Navigation-item {\n  position: relative;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: calc(99.99% * 1/5 - (30px - 30px * 1/5));\n}\n\n\n\n\n.Navigation-item:nth-child(n){\n  margin-right: 30px;\n}\n\n\n\n\n.Navigation-item:last-child{\n  margin-right: 0;\n}\n\n\n\n\n.Navigation-item:nth-child(5n){\n  margin-right: 0;\n}\n\n\n\n\n.Navigation-item > *{\n  position: absolute;\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n       -o-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n\n.Navigation-link {\n  //padding: 0.5em 1em;\n  color: #FFBF00;\n  text-decoration: none;\n  cursor: pointer;\n  font-size: calc(22 / 30 * 100%);\n  border-bottom: 3px solid white;\n  -webkit-transition: all 1s;\n       -o-transition: all 1s;\n          transition: all 1s;\n}\n\n\n.Navigation-link:hover {\n  border-bottom: 3px solid #FFBF00;\n  color: #394453;\n}\n", ""]);

  // exports


/***/ },
/* 18 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 19 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 20 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ }
/******/ ]);