webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/ActiveLink.js":
/*!**********************************!*\
  !*** ./components/ActiveLink.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/noahmaizels/Desktop/portfolio/components/ActiveLink.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function ActiveLink(_ref) {
  var children = _ref.children,
      href = _ref.href;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  console.log(router.pathname);
  var style = {
    marginRight: 10,
    color: router.pathname === href ? 'red' : 'black'
  };

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push(href);
  };

  return __jsx("a", {
    href: href,
    onClick: handleClick,
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, children);
}

/* harmony default export */ __webpack_exports__["default"] = (ActiveLink);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ActiveLink */ "./components/ActiveLink.js");
var _jsxFileName = "/Users/noahmaizels/Desktop/portfolio/components/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Layout = function Layout(props) {
  return __jsx("div", {
    className: "jsx-3616882467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-3616882467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Portfolio"), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-3616882467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("meta", {
    charSet: "utf-8",
    className: "jsx-3616882467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Nunito:400,400i,700,700i&display=swap",
    rel: "stylesheet",
    className: "jsx-3616882467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), __jsx("nav", {
    className: "jsx-3616882467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3616882467" + " " + 'logo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("img", {
    src: "/headshot.jpg",
    className: "jsx-3616882467" + " " + 'headshot',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3616882467" + " " + 'personal-info-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3616882467" + " " + 'personal-info name',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3616882467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Noah Maizels"))), __jsx("div", {
    className: "jsx-3616882467" + " " + 'personal-info job-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Web Developer"))), __jsx("a", {
    className: "jsx-3616882467" + " " + 'logo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3616882467" + " " + 'links',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3616882467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3616882467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Projects")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3616882467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Contact")))), __jsx("div", {
    className: "jsx-3616882467" + " " + "Content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3616882467",
    __self: this
  }, ".links.jsx-3616882467{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-width:300px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}nav.jsx-3616882467{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:30px;}.logo.jsx-3616882467{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;min-width:200px;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}.headshot.jsx-3616882467{width:50px;border-radius:100%;}.personal-info-container.jsx-3616882467{display:inline-block;margin-left:15px;}.personal-info.jsx-3616882467{line-height:1rem;}.job-title.jsx-3616882467{margin-top:5px;color:#CCCCCC;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRGdCLEFBR3NCLEFBT0EsQUFLQSxBQU1GLEFBSVUsQUFLSixBQUdGLFdBWEksSUFZTCxFQUhoQixJQUxtQixRQVNuQixDQVpBLFFBS0Esb0NBeEJrQixBQU9jLEFBS1QsZ0JBWFEscUZBWWIsY0FMRyxFQU1GLGlCQUxuQixLQVBBLHlDQWFBIiwiZmlsZSI6Ii9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBBY3RpdmVMaW5rIGZyb20gJy4vQWN0aXZlTGluaydcblxuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Qb3J0Zm9saW88L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNDAwaSw3MDAsNzAwaSZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxuYXY+XG4gICAgICAgXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPSdsb2dvJz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdoZWFkc2hvdCcgc3JjPScvaGVhZHNob3QuanBnJyAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BlcnNvbmFsLWluZm8tY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BlcnNvbmFsLWluZm8gbmFtZSc+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgTm9haCBNYWl6ZWxzXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGVyc29uYWwtaW5mbyBqb2ItdGl0bGUnPlxuICAgICAgICAgICAgICAgIFdlYiBEZXZlbG9wZXJcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIFxuICAgICAgICA8YSBjbGFzc05hbWU9J2xvZ28nPlxuICAgICAgICAgIFxuICAgICAgICA8L2E+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5rcyc+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5cbiAgICAgICAgICAgIDxhPlByb2plY3RzPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICAgIDxhPkNvbnRhY3Q8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbnRlbnRcIj57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpbmtzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICB9XG4gICBcblxuICAgICAgbmF2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgfVxuICAgICAgLmxvZ28ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgfVxuICAgICAgLmhlYWRzaG90IHtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICB9XG4gICAgICAucGVyc29uYWwtaW5mby1jb250YWluZXJ7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgIFxuICAgICAgfVxuICAgICAgLnBlcnNvbmFsLWluZm8ge1xuICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICAgIH1cbiAgICAgIC5qb2ItdGl0bGUge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGNvbG9yOiAjQ0NDQ0NDO1xuICAgICAgfVxuICAgIFxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiXX0= */\n/*@ sourceURL=/Users/noahmaizels/Desktop/portfolio/components/Layout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=projects.js.47ea9370b92490adc97d.hot-update.js.map