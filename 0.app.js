webpackJsonp([0],{136:function(e,t,r){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(12),i=r(321),a=e.exports=o.createClass({displayName:"exports",propTypes:{srcSet:o.PropTypes.string.isRequired,alt:o.PropTypes.string.isRequired,extra:o.PropTypes.object,nativeSupport:o.PropTypes.string},getDefaultProps:function(){return{extra:{},nativeSupport:"none"}},getInitialState:function(){return{w:i.getWidth(),x:i.getDensity()}},componentDidMount:function(){"full"!==this.props.nativeSupport&&window.addEventListener("resize",this.resizeThrottler,!1)},componentWillUnmount:function(){"full"!==!this.props.nativeSupport&&window.removeEventListener("resize",this.resizeThrottler,!1)},render:function(){if(!this.props.srcSet)return null;var e=a._buildCandidates(this.props.srcSet);return"full"===this.props.nativeSupport?this.renderNative(e):o.createElement("img",n({alt:this.props.alt,src:a._matchImage(e,i.getWidth(),i.getDensity())},this.props.extra))},renderNative:function(e){return o.createElement("img",n({alt:this.props.alt,src:e[0].url,srcSet:this.props.srcSet},this.props.extra))},resizing:!1,resizeThrottler:function(){this.resizing||(this.resizing=!0,window&&window.requestAnimationFrame?window.requestAnimationFrame(this.onResize):setTimeout(this.onResize,66))},onResize:function(){this.setState({w:i.getWidth(),x:i.getDensity()}),this.resizing=!1},statics:{_buildCandidates:function(e){return e.split(",").map(function(e){for(var t=e.trim().split(" "),r={url:t[0].trim(),w:0,x:1},n=1;n<t.length;n++){var o=t[n].trim();-1!==o.indexOf("w",o.length-1)?r.w=parseInt(o.substring(0,o.length-1)):-1!==o.indexOf("x",o.length-1)?r.x=parseFloat(o.substring(0,o.length-1)):console.warn("Invalid parameter passed to Image srcSet: ["+o+"] in "+e)}return r})},__compare:function(e,t,r,n){var o=n(e)-r,i=n(t)-r;return 0===o&&0!==i||0>i&&o>=0?e:0===i&&0!==o||0>o&&i>=0?t:Math.abs(o)<Math.abs(i)?e:Math.abs(i)<Math.abs(o)?t:e},_matchImage:function(e,t,r){if(!e||0===e.length)return null;var n=e.reduce(function(e,n){return e.x===n.x?e.w===n.w?e:a.__compare(e,n,t,function(e){return e.w}):a.__compare(e,n,r,function(e){return e.x})}).url;return n}}})},171:function(e,t,r){var n=r(300);"string"==typeof n&&(n=[[e.id,n,""]]);r(70)(n,{});n.locals&&(e.exports=n.locals)},286:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=function(e,t,r){for(var n=!0;n;){var o=e,i=t,a=r;l=p=u=void 0,n=!1,null===o&&(o=Function.prototype);var l=Object.getOwnPropertyDescriptor(o,i);if(void 0!==l){if("value"in l)return l.value;var u=l.get;return void 0===u?void 0:u.call(a)}var p=Object.getPrototypeOf(o);if(null===p)return void 0;e=p,t=i,r=a,n=!0}},u=r(12),p=n(u);r(171);var s=r(287),f=n(s),c=function(e){function t(){o(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return i(t,e),a(t,[{key:"render",value:function(){return p["default"].createElement("div",{className:"Hero"},p["default"].createElement(f["default"],null),p["default"].createElement("div",{className:"Hero-title"},p["default"].createElement("span",null,"Good day friend!"),p["default"].createElement("h1",null,"My name's Phillip")),p["default"].createElement("div",{className:"Hero-phrase"},p["default"].createElement("span",null),p["default"].createElement("p",null,"I craft experiences to help people achieve their goals")))}}]),t}(u.Component);t["default"]=c,e.exports=t["default"]},287:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=function(e,t,r){for(var n=!0;n;){var o=e,i=t,a=r;l=p=u=void 0,n=!1,null===o&&(o=Function.prototype);var l=Object.getOwnPropertyDescriptor(o,i);if(void 0!==l){if("value"in l)return l.value;var u=l.get;return void 0===u?void 0:u.call(a)}var p=Object.getPrototypeOf(o);if(null===p)return void 0;e=p,t=i,r=a,n=!0}},u=r(12),p=n(u);r(171);var s=r(320).Image,f=function(e){function t(e){o(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state={}}return i(t,e),a(t,[{key:"render",value:function(){var e="//s3-us-west-1.amazonaws.com/phil-portfolio-images/profileImageCndsd4.jpg 245w";return console.log(e),p["default"].createElement(s,{alt:"Your picture description",srcSet:e,extra:{className:"myImg"}})}}]),t}(u.Component);t["default"]=f,e.exports=t["default"]},293:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=function(e,t,r){for(var n=!0;n;){var o=e,i=t,a=r;l=p=u=void 0,n=!1,null===o&&(o=Function.prototype);var l=Object.getOwnPropertyDescriptor(o,i);if(void 0!==l){if("value"in l)return l.value;var u=l.get;return void 0===u?void 0:u.call(a)}var p=Object.getPrototypeOf(o);if(null===p)return void 0;e=p,t=i,r=a,n=!0}},u=r(12),p=n(u),s=function(e){function t(){o(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return i(t,e),a(t,[{key:"render",value:function(){return p["default"].createElement("div",null,p["default"].createElement("h1",null,"Welcome!"),p["default"].createElement("p",null,"Coming soon."))}}]),t}(u.Component);t["default"]=s,e.exports=t["default"]},294:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=function(e,t,r){for(var n=!0;n;){var o=e,i=t,a=r;l=p=u=void 0,n=!1,null===o&&(o=Function.prototype);var l=Object.getOwnPropertyDescriptor(o,i);if(void 0!==l){if("value"in l)return l.value;var u=l.get;return void 0===u?void 0:u.call(a)}var p=Object.getPrototypeOf(o);if(null===p)return void 0;e=p,t=i,r=a,n=!0}},u=r(12),p=n(u),s=function(e){function t(){o(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return i(t,e),a(t,[{key:"render",value:function(){return p["default"].createElement("div",null,p["default"].createElement("h1",null,"Blog"),p["default"].createElement("p",null,"Coming soon."))}}]),t}(u.Component);t["default"]=s,e.exports=t["default"]},295:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=function(e,t,r){for(var n=!0;n;){var o=e,i=t,a=r;l=p=u=void 0,n=!1,null===o&&(o=Function.prototype);var l=Object.getOwnPropertyDescriptor(o,i);if(void 0!==l){if("value"in l)return l.value;var u=l.get;return void 0===u?void 0:u.call(a)}var p=Object.getPrototypeOf(o);if(null===p)return void 0;e=p,t=i,r=a,n=!0}},u=r(12),p=n(u),s=function(e){function t(){o(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return i(t,e),a(t,[{key:"render",value:function(){return p["default"].createElement("div",null,p["default"].createElement("h1",null,"Test Article 1"),p["default"].createElement("p",null,"Coming soon."))}}]),t}(u.Component);t["default"]=s,e.exports=t["default"]},296:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=function(e,t,r){for(var n=!0;n;){var o=e,i=t,a=r;l=p=u=void 0,n=!1,null===o&&(o=Function.prototype);var l=Object.getOwnPropertyDescriptor(o,i);if(void 0!==l){if("value"in l)return l.value;var u=l.get;return void 0===u?void 0:u.call(a)}var p=Object.getPrototypeOf(o);if(null===p)return void 0;e=p,t=i,r=a,n=!0}},u=r(12),p=n(u),s=function(e){function t(){o(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return i(t,e),a(t,[{key:"render",value:function(){return p["default"].createElement("div",null,p["default"].createElement("h1",null,"Test Article 2"),p["default"].createElement("p",null,"Coming soon."))}}]),t}(u.Component);t["default"]=s,e.exports=t["default"]},297:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=function(e,t,r){for(var n=!0;n;){var o=e,i=t,a=r;l=p=u=void 0,n=!1,null===o&&(o=Function.prototype);var l=Object.getOwnPropertyDescriptor(o,i);if(void 0!==l){if("value"in l)return l.value;var u=l.get;return void 0===u?void 0:u.call(a)}var p=Object.getPrototypeOf(o);if(null===p)return void 0;e=p,t=i,r=a,n=!0}},u=r(12),p=n(u),s=r(286),f=n(s),c=function(e){function t(){o(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return i(t,e),a(t,[{key:"render",value:function(){return p["default"].createElement(f["default"],null)}}]),t}(u.Component);t["default"]=c,e.exports=t["default"]},300:function(e,t,r){t=e.exports=r(61)(),t.push([e.id,'html{font-family:ProximaNova-Regular,Open Sans,Helvetica,\'sans-serif\';font-size:137.5%;font-weight:400;font-style:normal;color:#394453;-webkit-font-smoothing:antialiased}p{line-height:1.5 * 1rem;margin-bottom:0}ol,p,ul{margin-top:1.5 * 1rem}ol,ul{margin-bottom:1.5 * 1rem}ol li,ul li{line-height:1.5 * 1rem}ol ol,ol ul,ul ol,ul ul{margin-top:0;margin-bottom:0}blockquote{margin-bottom:1.5 * 1rem}blockquote,h1,h2,h3,h4,h5,h6{line-height:1.5 * 1rem;margin-top:1.5 * 1rem}h1,h2,h3,h4,h5,h6{font-family:Bariol,Alegreya,Playfair Display,Fira Sans,Vollkorn,ProximaNova-Semibold,Helvetica,\'sans-serif\';font-weight:700;font-style:normal;margin-bottom:0}h1{font-size:2.87042rem;font-weight:700;line-height:3.15rem;margin-top:0.225rem}@media only screen and (min-width:680px){h1{font-size:4.242rem;line-height:4.5rem;//margin-top:3rem}}h2{font-size:2.828rem;line-height:3rem;margin-top:3rem}h3{font-size:1.414rem}h4{font-size:0.707rem}h5{font-size:0.47133rem}h6{font-size:0.3535rem}table{margin-top:1.5 * 1rem;border-spacing:0;border-collapse:collapse}table td,table th{padding:0;line-height:33px}code{vertical-align:bottom}.lead{font-size:1.414rem}.hug{margin-top:0}.Hero{position:relative}@media only screen and (max-width:679px){.Hero{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;max-width:100%;margin-left:auto;margin-right:auto;//margin:0 15px}}@media only screen and (min-width:680px) and (max-width:999px){.Hero{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;max-width:100%;margin-left:auto;margin-right:auto;margin:0 30px}}@media only screen and (min-width:1000px) and (max-width:1259px){.Hero{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;max-width:1000px;margin-left:auto;margin-right:auto}}@media only screen and (min-width:1260px){.Hero{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;max-width:1260px;margin-left:auto;margin-right:auto;margin-top:0}}.Hero-title{margin-top:40px}.Hero-title span{font-weight:300;font-family:ProximaNova-Light,Open Sans,Helvetica,\'sans-serif\';font-size:1.1312rem;color:#5b6675}.Hero-title h1{color:#ffbf00}@media only screen and (max-width:679px){.Hero-title{margin-bottom:10px}}@media only screen and (max-width:679px){.myImg{width:192px;height:189px;position:absolute;top:25px;right:-45px;z-index:-1;opacity:.6;-webkit-transition:\'opacity 300ms ease-in\';transition:\'opacity 300ms ease-in\';border-top-left-radius:25px;border-bottom-left-radius:7px}}@media only screen and (min-width:680px){.myImg{width:600px;height:550px;position:absolute;top:0;right:0;z-index:-1}}@media only screen and (max-width:679px){.Hero-phrase p{font-weight:300}}.Hero-phrase{position:relative;padding-top:30px}.Hero-phrase p{font-family:ProximaNova-Light,Open Sans,Helvetica,\'sans-serif\';font-size:1.5554rem;line-height:2.1rem;margin-top:0;margin-left:20px}.Hero-phrase span{position:absolute;top:0;left:0;z-index:-1;display:block;background-color:#ffe58d;width:103px;height:111px;-webkit-mask-image:url(\'data:image/svg+xml;charset=utf-8,<svg width="103" height="111" viewBox="0 0 103 111" xmlns="http://www.w3.org/2000/svg"><title>ampersand</title><path d="M59.944 37.443c-8.22 0-8.8 5.117-.728 5.117 4.02 0 7.67-2.363 8.367-2.363.44 0 .886-.01 1.332-.023 4.084 1.464 6.747 5.223 6.747 10.604 0 8.196-8.445 13.827-18.875 13.827-5.97 0-17.346-3.386-17.346-14.538 0-12.217 14.814-21.1 26.155-21.1 7.114 0 13.58 2.005 18.636 5.796-5.462 2.075-11.185 3.197-17.93 3.197-1.384 0-3.886-.517-6.355-.517zm29.764-2.72C97.415 30.538 103 24.08 103 15.78 103 5.565 95.135 0 85.908 0c-6.028 0-11.24 2.386-11.24 6.81 0 3.6 3.52 5.82 8.578 5.82 8.074 0 17.22-8.006 17.22 3.148 0 7.576-5 13.568-12.63 17.405-5.646-4.29-12.777-6.787-21.088-6.787-15.876 0-31.413 10.89-31.413 25.09 0 13.452 11.707 20.31 21.562 20.31 16.542 0 23.624-12.058 23.624-19.904 0-5.114-1.954-9.956-7.803-11.988 4.616-.512 9.268-1.695 13.495-3.493 5.506 5.053 8.898 12.556 8.898 22.177 0 17.59-19.948 36.927-44.642 36.927C25.7 95.514 7.79 80.764 7.79 63.05c0-6.29 1.318-14.096 9.748-20.65 3.506.726 7.9.76 10.695-.39 2.103-.864 2.147-2.422 0-3.03-3.527-.994-7.387-.264-10.07.866l.077-.048c-.032.016-.06.034-.09.052-6.194-2.702-9.012-8.537-9.012-13.707 0-7.835 6.557-13.267 14.01-13.267 6.81 0 11.846 4.092 11.846 8.975 0 7.836-8.918 1.375-13.177 1.375-2.66 0-5.34 1.238-5.34 3.928 0 3.782 3.926 6.058 8.385 6.058 8.277 0 13.06-5.122 13.06-10.397 0-7.813-7.986-12.59-16.637-12.59-10.37 0-19.317 5.912-19.317 16.107 0 6.615 5.46 12.898 13.09 15.403C3.81 49.26 0 60.657 0 69.56 0 94.058 21.856 111 49.718 111c27.863 0 52.515-21.22 52.515-45.718 0-12.522-4.537-23.49-12.525-30.558z" fill="#FFD968" fill-rule="evenodd"/></svg>\');mask-image:url(\'data:image/svg+xml;charset=utf-8,<svg width="103" height="111" viewBox="0 0 103 111" xmlns="http://www.w3.org/2000/svg"><title>ampersand</title><path d="M59.944 37.443c-8.22 0-8.8 5.117-.728 5.117 4.02 0 7.67-2.363 8.367-2.363.44 0 .886-.01 1.332-.023 4.084 1.464 6.747 5.223 6.747 10.604 0 8.196-8.445 13.827-18.875 13.827-5.97 0-17.346-3.386-17.346-14.538 0-12.217 14.814-21.1 26.155-21.1 7.114 0 13.58 2.005 18.636 5.796-5.462 2.075-11.185 3.197-17.93 3.197-1.384 0-3.886-.517-6.355-.517zm29.764-2.72C97.415 30.538 103 24.08 103 15.78 103 5.565 95.135 0 85.908 0c-6.028 0-11.24 2.386-11.24 6.81 0 3.6 3.52 5.82 8.578 5.82 8.074 0 17.22-8.006 17.22 3.148 0 7.576-5 13.568-12.63 17.405-5.646-4.29-12.777-6.787-21.088-6.787-15.876 0-31.413 10.89-31.413 25.09 0 13.452 11.707 20.31 21.562 20.31 16.542 0 23.624-12.058 23.624-19.904 0-5.114-1.954-9.956-7.803-11.988 4.616-.512 9.268-1.695 13.495-3.493 5.506 5.053 8.898 12.556 8.898 22.177 0 17.59-19.948 36.927-44.642 36.927C25.7 95.514 7.79 80.764 7.79 63.05c0-6.29 1.318-14.096 9.748-20.65 3.506.726 7.9.76 10.695-.39 2.103-.864 2.147-2.422 0-3.03-3.527-.994-7.387-.264-10.07.866l.077-.048c-.032.016-.06.034-.09.052-6.194-2.702-9.012-8.537-9.012-13.707 0-7.835 6.557-13.267 14.01-13.267 6.81 0 11.846 4.092 11.846 8.975 0 7.836-8.918 1.375-13.177 1.375-2.66 0-5.34 1.238-5.34 3.928 0 3.782 3.926 6.058 8.385 6.058 8.277 0 13.06-5.122 13.06-10.397 0-7.813-7.986-12.59-16.637-12.59-10.37 0-19.317 5.912-19.317 16.107 0 6.615 5.46 12.898 13.09 15.403C3.81 49.26 0 60.657 0 69.56 0 94.058 21.856 111 49.718 111c27.863 0 52.515-21.22 52.515-45.718 0-12.522-4.537-23.49-12.525-30.558z" fill="#FFD968" fill-rule="evenodd"/></svg>\')}@media only screen and (min-width:680px){.Hero-phrase{padding-top:15px;-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:calc(99.99% * 3/5 - 12px)}.Hero-phrase:nth-child(n){margin-right:30px}.Hero-phrase:last-child,.Hero-phrase:nth-child(5n){margin-right:0}.Hero-phrase p{color:#5b6675;margin-left:50px;font-size:1.7675rem;line-height:2.25rem;font-weight:300}}',""])},319:function(e,t,r){"use strict";var n=r(12),o=r(136);e.exports=n.createClass({displayName:"exports",propTypes:{srcSet:n.PropTypes.string.isRequired,alt:n.PropTypes.string.isRequired,extra:n.PropTypes.object,nativeSupport:n.PropTypes.string},getDefaultProps:function(){var e="full";if("undefined"!=typeof document){var t=document.createElement("img");e="srcset"in t?"partial":"none",e="partial"===e&&"sizes"in t?"full":"partial"}return{extra:{},nativeSupport:e}},render:function(){return n.createElement(o,this.props)}})},320:function(e,t,r){"use strict";e.exports.BaseImage=r(136),e.exports.Image=r(319)},321:function(e,t){"use strict";e.exports.getWidth=function(){return"undefined"!=typeof window?window.innerWidth||document.documentElement.clientWidth:0},e.exports.getDensity=function(){return"undefined"!=typeof window?window.devicePixelRatio||1:1}}});