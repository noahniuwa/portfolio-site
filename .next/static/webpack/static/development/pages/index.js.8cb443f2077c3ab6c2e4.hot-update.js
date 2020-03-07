webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ActiveLink.js":
/*!**********************************!*\
  !*** ./components/ActiveLink.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/noahmaizels/Desktop/portfolio/components/ActiveLink.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function ActiveLink(_ref) {
  var children = _ref.children,
      href = _ref.href;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  console.log(router.pathname);
  var style = {
    marginRight: 10,
    color: router.pathname === href ? '#984B48' : 'black'
  };

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push(href);
  };

  return __jsx("a", {
    href: href,
    onClick: handleClick,
    style: style,
    className: "jsx-928277893",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "928277893",
    __self: this
  }, "a.jsx-928277893{-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 200ms linear;transition:all 200ms linear;color:#23323B;}a.jsx-928277893:visited{color:#23323B;}a.jsx-928277893:hover{color:#984B48;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0FjdGl2ZUxpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JrQixBQUc4QixBQUtQLEFBSUEsY0FIaEIsQUFJQSxvQ0FUOEIsZ0VBQ2QsY0FDaEIiLCJmaWxlIjoiL1VzZXJzL25vYWhtYWl6ZWxzL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvQWN0aXZlTGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5mdW5jdGlvbiBBY3RpdmVMaW5rKHsgY2hpbGRyZW4sIGhyZWYgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zb2xlLmxvZyhyb3V0ZXIucGF0aG5hbWUpXG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgICBjb2xvcjogcm91dGVyLnBhdGhuYW1lID09PSBocmVmID8gJyM5ODRCNDgnIDogJ2JsYWNrJyxcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcm91dGVyLnB1c2goaHJlZilcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGEgaHJlZj17aHJlZn0gb25DbGljaz17aGFuZGxlQ2xpY2t9IHN0eWxlPXtzdHlsZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgbGluZWFyO1xuICAgICAgICBjb2xvcjogIzIzMzIzQjtcbiAgICAgIH1cbiAgICAgIGE6dmlzaXRlZCB7XG4gICAgICAgIGNvbG9yOiAjMjMzMjNCO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICM5ODRCNDg7XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9hPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGl2ZUxpbmtcbiJdfQ== */\n/*@ sourceURL=/Users/noahmaizels/Desktop/portfolio/components/ActiveLink.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ActiveLink);

/***/ })

})
//# sourceMappingURL=index.js.8cb443f2077c3ab6c2e4.hot-update.js.map