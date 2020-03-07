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
  var color = router.pathname === href ? '#984B48' : 'black';

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push(href);
  };

  return __jsx("a", {
    href: href,
    onClick: handleClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2914574497", [color]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2914574497",
    dynamic: [color],
    __self: this
  }, "a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 200ms linear;transition:all 200ms linear;color:".concat(color, ";border-radius:2px;padding:8px 5px;display:block;}a.__jsx-style-dynamic-selector:visited{color:#23323B;}a.__jsx-style-dynamic-selector:hover{color:#984B48;background-color:#E9C87B;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0FjdGl2ZUxpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWtCLEFBRzhCLEFBUVAsQUFHQSxjQUZoQixBQUcyQix5QkFDM0IsV0FaOEIsZ0VBQ08sbUNBQ2pCLGtCQUNGLGdCQUNGLGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0FjdGl2ZUxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZnVuY3Rpb24gQWN0aXZlTGluayh7IGNoaWxkcmVuLCBocmVmIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc29sZS5sb2cocm91dGVyLnBhdGhuYW1lKVxuICBjb25zdCBjb2xvciA9IHJvdXRlci5wYXRobmFtZSA9PT0gaHJlZiA/ICcjOTg0QjQ4JyA6ICdibGFjaydcblxuICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHJvdXRlci5wdXNoKGhyZWYpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxhIGhyZWY9e2hyZWZ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBsaW5lYXI7XG4gICAgICAgIGNvbG9yOiAke2NvbG9yfTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggNXB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICAgIGE6dmlzaXRlZCB7XG4gICAgICAgIGNvbG9yOiAjMjMzMjNCO1xuICAgICAgfVxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjOTg0QjQ4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlDODdCO1xuICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvYT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3RpdmVMaW5rXG4iXX0= */\n/*@ sourceURL=/Users/noahmaizels/Desktop/portfolio/components/ActiveLink.js */")));
}

/* harmony default export */ __webpack_exports__["default"] = (ActiveLink);

/***/ })

})
//# sourceMappingURL=index.js.4360cb81d2384f5f4b70.hot-update.js.map