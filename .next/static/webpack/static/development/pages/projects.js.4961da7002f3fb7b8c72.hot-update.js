webpackHotUpdate("static/development/pages/projects.js",{

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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('none'),
      menu = _useState[0],
      setMenu = _useState[1];

  var onBurgerClick = function onBurgerClick(menu) {
    if (menu === 'none') {
      setMenu('inline-block');
    }
  };

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2080647756", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2080647756", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Portfolio"), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2080647756", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("meta", {
    charSet: "utf-8",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2080647756", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Nunito:400,400i,700,700i&display=swap",
    rel: "stylesheet",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2080647756", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), __jsx("nav", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2080647756", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2080647756", [menu]]]) + " " + 'logo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("img", {
    src: "/headshot.jpg",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2080647756", [menu]]]) + " " + 'headshot',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2080647756", [menu]]]) + " " + 'personal-info-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2080647756", [menu]]]) + " " + 'personal-info name',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2080647756", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Noah Maizels"))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2080647756", [menu]]]) + " " + 'personal-info job-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Web Developer"))), __jsx("img", {
    onClick: onBurgerClick,
    src: "burger-bar.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2080647756", [menu]]]) + " " + 'burger',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2080647756", [menu]]]) + " " + 'links',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Home"), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Projects"), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Contact"))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2080647756", [menu]]]) + " " + "Content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2080647756",
    dynamic: [menu],
    __self: this
  }, ".links.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-width:300px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}nav.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:30px;}.logo.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;min-width:200px;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}.headshot.__jsx-style-dynamic-selector{width:50px;border-radius:100%;}.personal-info-container.__jsx-style-dynamic-selector{display:inline-block;margin-left:15px;}.personal-info.__jsx-style-dynamic-selector{line-height:1rem;}.job-title.__jsx-style-dynamic-selector{margin-top:5px;color:#CCCCCC;}.burger.__jsx-style-dynamic-selector{width:30px;height:30px;}@media(max-width:800px){.links.__jsx-style-dynamic-selector{display:".concat(menu, ";-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}@media(min-width:800px){.burger.__jsx-style-dynamic-selector{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRGdCLEFBR3NCLEFBS0EsQUFLQSxBQU1GLEFBSVUsQUFLSixBQUdGLEFBSUosQUFLNEIsQUFNeEIsV0ExQkksQUFnQlAsRUFXWixFQWZjLEVBSGhCLElBTG1CLEVBYW5CLE1BSkEsQ0FaQSxPQW9CMEIsQ0FmMUIsb0NBdEJrQixBQUtjLEFBS1QsZ0JBVFEseUJBcUM3Qiw0REEzQmdCLGNBTEcsRUFNRixpQkFMbkIsS0FMQSx5Q0FXQSIsImZpbGUiOiIvVXNlcnMvbm9haG1haXplbHMvRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgQWN0aXZlTGluayBmcm9tICcuL0FjdGl2ZUxpbmsnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbbWVudSwgc2V0TWVudV0gPSB1c2VTdGF0ZSgnbm9uZScpXG5cbiAgY29uc3Qgb25CdXJnZXJDbGljayA9IChtZW51KSA9PntcbiAgICBpZiAobWVudSA9PT0gJ25vbmUnKXtcbiAgICAgIHNldE1lbnUoJ2lubGluZS1ibG9jaycpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Qb3J0Zm9saW88L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNDAwaSw3MDAsNzAwaSZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dvJz5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naGVhZHNob3QnIHNyYz0nL2hlYWRzaG90LmpwZycgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGVyc29uYWwtaW5mby1jb250YWluZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BlcnNvbmFsLWluZm8gbmFtZSc+XG4gICAgICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgTm9haCBNYWl6ZWxzXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BlcnNvbmFsLWluZm8gam9iLXRpdGxlJz5cbiAgICAgICAgICAgICAgV2ViIERldmVsb3BlclxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW1nIG9uQ2xpY2s9e29uQnVyZ2VyQ2xpY2t9IGNsYXNzTmFtZT0nYnVyZ2VyJyBzcmM9J2J1cmdlci1iYXIucG5nJy8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5rcyc+XG4gICAgICAgICAgPEFjdGl2ZUxpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICA8L0FjdGl2ZUxpbms+XG4gICAgICAgICAgPEFjdGl2ZUxpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxuICAgICAgICAgICAgUHJvamVjdHNcbiAgICAgICAgICA8L0FjdGl2ZUxpbms+XG4gICAgICAgICAgPEFjdGl2ZUxpbmsgaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgPC9BY3RpdmVMaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbnRlbnRcIj57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpbmtzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICB9XG4gICAgICBuYXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICB9XG4gICAgICAubG9nbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICB9XG4gICAgICAuaGVhZHNob3Qge1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5wZXJzb25hbC1pbmZvLWNvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgXG4gICAgICB9XG4gICAgICAucGVyc29uYWwtaW5mbyB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgfVxuICAgICAgLmpvYi10aXRsZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgY29sb3I6ICNDQ0NDQ0M7XG4gICAgICB9XG4gICAgICAuYnVyZ2VyIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAgIC5saW5rcyB7XG4gICAgICAgICAgZGlzcGxheTogJHttZW51fTtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEobWluLXdpZHRoOiA4MDBweCkge1xuICAgICAgICAuYnVyZ2VyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dCJdfQ== */\n/*@ sourceURL=/Users/noahmaizels/Desktop/portfolio/components/Layout.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=projects.js.4961da7002f3fb7b8c72.hot-update.js.map