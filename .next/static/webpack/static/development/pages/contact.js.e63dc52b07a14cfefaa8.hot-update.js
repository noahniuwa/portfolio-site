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
    className: "jsx-3209791580",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3209791580",
    __self: this
  }, "a.jsx-3209791580{-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 200ms linear;transition:all 200ms linear;color:#23323B;border-radius:3px;padding:8px 20px;display:block;border:solid 1px #E9C87B;}a.jsx-3209791580:visited{color:#23323B;}a.jsx-3209791580:hover{color:#984B48;border:solid 1px #E9C87B;border-radius:3px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0FjdGl2ZUxpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJrQixBQUc4QixBQVNQLEFBR0EsY0FGaEIsQUFHMkIseUJBQ1AsV0FiVSxPQWM5Qix5REFiZ0IsY0FDSSxrQkFDRCxpQkFDSCxjQUNXLHlCQUMzQiIsImZpbGUiOiIvVXNlcnMvbm9haG1haXplbHMvRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9BY3RpdmVMaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmZ1bmN0aW9uIEFjdGl2ZUxpbmsoeyBjaGlsZHJlbiwgaHJlZiB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnNvbGUubG9nKHJvdXRlci5wYXRobmFtZSlcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgY29sb3I6IHJvdXRlci5wYXRobmFtZSA9PT0gaHJlZiA/ICcjOTg0QjQ4JyA6ICdibGFjaycsXG4gIH1cblxuICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHJvdXRlci5wdXNoKGhyZWYpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxhIGhyZWY9e2hyZWZ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBzdHlsZT17c3R5bGV9PlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGxpbmVhcjtcbiAgICAgICAgY29sb3I6ICMyMzMyM0I7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjRTlDODdCO1xuICAgICAgfVxuICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgY29sb3I6ICMyMzMyM0I7XG4gICAgICB9XG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICM5ODRCNDg7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNFOUM4N0I7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2E+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aXZlTGlua1xuIl19 */\n/*@ sourceURL=/Users/noahmaizels/Desktop/portfolio/components/ActiveLink.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ActiveLink);

/***/ })

})
//# sourceMappingURL=contact.js.e63dc52b07a14cfefaa8.hot-update.js.map