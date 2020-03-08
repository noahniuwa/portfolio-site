webpackHotUpdate("static/development/pages/contact.js",{

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
    className: "jsx-3865170158",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3865170158",
    __self: this
  }, "a.jsx-3865170158{-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 200ms linear;transition:all 200ms linear;color:#23323B;border-radius:3px;padding:8px 20px;display:block;border:solid 1px rgba(0,0,0,);}a.jsx-3865170158:visited{color:#23323B;}a.jsx-3865170158:hover{color:#984B48;border:solid 1px #E9C87B;border-radius:3px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0FjdGl2ZUxpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJrQixBQUc4QixBQVNQLEFBR0EsY0FGaEIsQUFHMkIseUJBQ1AsV0FiVSxPQWM5Qix5REFiZ0IsY0FDSSxrQkFDRCxpQkFDSCxjQUNtQiw4QkFDbkMiLCJmaWxlIjoiL1VzZXJzL25vYWhtYWl6ZWxzL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvQWN0aXZlTGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5mdW5jdGlvbiBBY3RpdmVMaW5rKHsgY2hpbGRyZW4sIGhyZWYgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zb2xlLmxvZyhyb3V0ZXIucGF0aG5hbWUpXG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGNvbG9yOiByb3V0ZXIucGF0aG5hbWUgPT09IGhyZWYgPyAnIzk4NEI0OCcgOiAnYmxhY2snLFxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICByb3V0ZXIucHVzaChocmVmKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YSBocmVmPXtocmVmfSBvbkNsaWNrPXtoYW5kbGVDbGlja30gc3R5bGU9e3N0eWxlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBsaW5lYXI7XG4gICAgICAgIGNvbG9yOiAjMjMzMjNCO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCApO1xuICAgICAgfVxuICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgY29sb3I6ICMyMzMyM0I7XG4gICAgICB9XG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICM5ODRCNDg7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNFOUM4N0I7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2E+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aXZlTGlua1xuIl19 */\n/*@ sourceURL=/Users/noahmaizels/Desktop/portfolio/components/ActiveLink.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ActiveLink);

/***/ })

})
//# sourceMappingURL=contact.js.499ac5ab79483bab90ff.hot-update.js.map