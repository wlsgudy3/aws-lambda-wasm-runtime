_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||a&&c}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var l=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,c=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){c=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,s=l.length;u<s;u++){var f=l[u];if(a.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?o=!1:n.add(f);else{var d=a.props[f],p=r[f]||new Set;"name"===f&&c||!p.has(d)?(p.add(d),r[f]=p):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function b(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}b.rewind=function(){};var h=b;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||c()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n("nKUr"),a=n("q1tI"),o=n("g4pe"),c=n.n(o),i=n("vRNQ"),u=n.n(i);function s(){var e=Object(a.useState)(!1),t=e[0],n=e[1],o=Object(a.useState)(""),i=o[0],s=o[1],f=Object(a.useState)(""),d=f[0],l=f[1],p=Object(a.useState)(""),b=p[0],h=p[1],m=Object(a.useState)(-1),y=m[0],v=m[1],_=["32d1f25ab0debd0040cal87864251cebfe5e94c6f7491865e50e36da6d9a0f1f6","0a4be9b114663cd1cb65a7805838a1ef2665ccf5ff84a8cb3fb1b66f3b74d","21313107542c54523de02fdaf7c8013202723645710b90d74d9f75932e06a","fb05749853d464a0529bl1bfcecc16c596b7fbcb485384c7b72f9a66dd4a3862a","b4658cab11a4850957006036b92f90eaa9cd7f469a719dbf0d241bf97d828e6","286595610247d37f94aba5b5d1d79a0798e8d5261964e7e9ff07e883b3021c1","c906d033b0a12bb1d5809209e1a6540537b05cb39efbf7f99dcd7b4e76cd91b6bd","f5c2896e9e69457962a978e703a9f9d0ddcf67743c73cf56c449fb601224940a10","3554Ce732f79af38b2377e2b41995773caa9a929b0656791c2dada95f23ff5a3b3","ca4360f3c784797d41c494e5b0f8b04e16b135e4a61e6cfaa42cfc77151e5956b0","d53fa7ec11557769280eaddd5d36f08350d3dde328075fef040dd4b633d597156","a1f01491b01aead40744e05bcc8ffd819bddcd5624b0a9dd5c9a118e350117a532"];return Object(a.useEffect)((function(){var e;return y>=0&&y<_.length&&(e=setTimeout((function(){v(y+1)}),1e3)),function(){return clearTimeout(e)}}),[y]),Object(r.jsxs)("div",{className:u.a.container,children:[Object(r.jsxs)(c.a,{children:[Object(r.jsx)("title",{children:"AWS Lambda Wasm Runtime"}),Object(r.jsx)("link",{rel:"icon",type:"image/png",href:"/aws-lambda-wasm-runtime/favicon.png",sizes:"16x16"})]}),Object(r.jsxs)("main",{className:u.a.main,children:[Object(r.jsxs)("h1",{className:u.a.title,children:["Welcome to ",Object(r.jsx)("a",{href:"https://github.com/WasmEdge/WasmEdge",children:"WasmEdge!"})]}),Object(r.jsx)("div",{className:u.a.operating,children:Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"text",placeholder:"\ub0b4 wallet \uc8fc\uc18c",value:d,onChange:function(e){return l(e.target.value)}}),Object(r.jsx)("button",{id:"runBtn",onClick:function(){n(!0),h(d),v(0);var e=new XMLHttpRequest;e.open("POST","https://gymido29f2.execute-api.ap-northeast-1.amazonaws.com/default/wasmedge_manager",!0),e.onload=function(t){n(!1),e.status>=200&&e.status<300?s(e.responseText):console.error("Failed to fetch WebAssembly output")},e.send()},disabled:t,children:t?"Loading":"Run Wasm"}),Object(r.jsx)("div",{className:u.a.result,children:i&&Object(r.jsx)("p",{children:i})}),Object(r.jsx)("div",{className:u.a.walletDisplay,children:b&&Object(r.jsxs)("p",{children:["Wallet Address: ",b]})}),Object(r.jsx)("div",{className:u.a.hashResults,children:y>=0&&Object(r.jsxs)("p",{children:["hash_result: ",_[y]]})})]})})]}),Object(r.jsx)("footer",{className:u.a.footer,children:Object(r.jsx)("a",{href:"https://aws.amazon.com/lambda/",target:"_blank",rel:"noopener noreferrer",children:"Powered by AWS Lambda"})})]})}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),d=function(e){c(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=d},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vRNQ:function(e,t,n){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",logo:"Home_logo__1YbrH","visually-hidden":"Home_visually-hidden__2f7en",operating:"Home_operating__2UI4g",noselect:"Home_noselect__1AQeP",thumb:"Home_thumb__2D654"}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1]]]);