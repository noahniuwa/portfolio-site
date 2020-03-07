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
    className: "jsx-97437924",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "97437924",
    __self: this
  }, "a.jsx-97437924{-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 200ms linear;transition:all 200ms linear;color:#23323B;border-radius:2px;padding:5px;width:80%;}a.jsx-97437924:visited{color:#23323B;}a.jsx-97437924:hover{color:#984B48;background-color:#E9C87B;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0FjdGl2ZUxpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JrQixBQUc4QixBQVFQLEFBSUEsY0FIaEIsQUFJMkIseUJBQzNCLFdBYjhCLGdFQUNkLGNBQ0ksa0JBQ04sWUFDRixVQUNaIiwiZmlsZSI6Ii9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0FjdGl2ZUxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZnVuY3Rpb24gQWN0aXZlTGluayh7IGNoaWxkcmVuLCBocmVmIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc29sZS5sb2cocm91dGVyLnBhdGhuYW1lKVxuICBjb25zdCBzdHlsZSA9IHtcbiAgICBtYXJnaW5SaWdodDogMTAsXG4gICAgY29sb3I6IHJvdXRlci5wYXRobmFtZSA9PT0gaHJlZiA/ICcjOTg0QjQ4JyA6ICdibGFjaycsXG4gIH1cblxuICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHJvdXRlci5wdXNoKGhyZWYpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxhIGhyZWY9e2hyZWZ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBzdHlsZT17c3R5bGV9PlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGxpbmVhcjtcbiAgICAgICAgY29sb3I6ICMyMzMyM0I7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgfVxuICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgY29sb3I6ICMyMzMyM0I7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzk4NEI0ODtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U5Qzg3QjtcbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2E+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aXZlTGlua1xuIl19 */\n/*@ sourceURL=/Users/noahmaizels/Desktop/portfolio/components/ActiveLink.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ActiveLink);

/***/ })

})
//# sourceMappingURL=contact.js.289cc856d64fe7e1a0c0.hot-update.js.map