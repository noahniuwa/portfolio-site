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
    className: "jsx-3932260457",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3932260457",
    __self: this
  }, "a.jsx-3932260457{-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 200ms linear;transition:all 200ms linear;color:#23323B;border-radius:2px;padding:8px 20px;display:block;}a.jsx-3932260457:visited{color:#23323B;}a.jsx-3932260457:hover{color:#984B48;border:solid 1px #E9C87B;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0FjdGl2ZUxpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJrQixBQUc4QixBQVFQLEFBR0EsY0FGaEIsQUFHMkIseUJBQzNCLFdBWjhCLGdFQUNkLGNBQ0ksa0JBQ0QsaUJBQ0gsY0FDaEIiLCJmaWxlIjoiL1VzZXJzL25vYWhtYWl6ZWxzL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvQWN0aXZlTGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5mdW5jdGlvbiBBY3RpdmVMaW5rKHsgY2hpbGRyZW4sIGhyZWYgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zb2xlLmxvZyhyb3V0ZXIucGF0aG5hbWUpXG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGNvbG9yOiByb3V0ZXIucGF0aG5hbWUgPT09IGhyZWYgPyAnIzk4NEI0OCcgOiAnYmxhY2snLFxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICByb3V0ZXIucHVzaChocmVmKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YSBocmVmPXtocmVmfSBvbkNsaWNrPXtoYW5kbGVDbGlja30gc3R5bGU9e3N0eWxlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBsaW5lYXI7XG4gICAgICAgIGNvbG9yOiAjMjMzMjNCO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICAgIGE6dmlzaXRlZCB7XG4gICAgICAgIGNvbG9yOiAjMjMzMjNCO1xuICAgICAgfVxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjOTg0QjQ4O1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjRTlDODdCO1xuICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvYT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3RpdmVMaW5rXG4iXX0= */\n/*@ sourceURL=/Users/noahmaizels/Desktop/portfolio/components/ActiveLink.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ActiveLink);

/***/ })

})
//# sourceMappingURL=index.js.0f5fa5b4c4eecc732513.hot-update.js.map