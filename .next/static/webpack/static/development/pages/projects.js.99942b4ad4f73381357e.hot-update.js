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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      menu = _useState[0],
      setMenu = _useState[1];

  var onBurgerClick = function onBurgerClick(menu) {};

  return __jsx("div", {
    className: "jsx-1437892079",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1437892079",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Portfolio"), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-1437892079",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("meta", {
    charSet: "utf-8",
    className: "jsx-1437892079",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Nunito:400,400i,700,700i&display=swap",
    rel: "stylesheet",
    className: "jsx-1437892079",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx("nav", {
    className: "jsx-1437892079",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1437892079" + " " + 'logo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("img", {
    src: "/headshot.jpg",
    className: "jsx-1437892079" + " " + 'headshot',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1437892079" + " " + 'personal-info-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1437892079" + " " + 'personal-info name',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1437892079",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Noah Maizels"))), __jsx("div", {
    className: "jsx-1437892079" + " " + 'personal-info job-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Web Developer"))), __jsx("img", {
    onClick: onBurgerClick,
    src: "burger-bar.png",
    className: "jsx-1437892079" + " " + 'burger',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1437892079" + " " + 'links',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Home"), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Projects"), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Contact"))), __jsx("div", {
    className: "jsx-1437892079" + " " + "Content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1437892079",
    __self: this
  }, ".links.jsx-1437892079{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-width:300px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}nav.jsx-1437892079{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:30px;}.logo.jsx-1437892079{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;min-width:200px;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}.headshot.jsx-1437892079{width:50px;border-radius:100%;}.personal-info-container.jsx-1437892079{display:inline-block;margin-left:15px;}.personal-info.jsx-1437892079{line-height:1rem;}.job-title.jsx-1437892079{margin-top:5px;color:#CCCCCC;}.burger.jsx-1437892079{width:30px;height:30px;}@media(max-width:800px){.links.jsx-1437892079{display:none;}}@media(min-width:800px){.burger.jsx-1437892079{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRGdCLEFBR3NCLEFBS0EsQUFLQSxBQU1GLEFBSVUsQUFLSixBQUdGLEFBSUosQUFLSSxBQUtBLFdBekJJLEFBZ0JQLEVBS1osQUFLQSxFQWRjLEVBSGhCLElBTG1CLEVBYW5CLE1BSkEsQ0FaQSxRQUtBLG9DQXRCa0IsQUFLYyxBQUtULGdCQVRRLHFGQVViLGNBTEcsRUFNRixpQkFMbkIsS0FMQSx5Q0FXQSIsImZpbGUiOiIvVXNlcnMvbm9haG1haXplbHMvRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgQWN0aXZlTGluayBmcm9tICcuL0FjdGl2ZUxpbmsnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbbWVudSwgc2V0TWVudV0gPSB1c2VTdGF0ZSgwKVxuXG4gIGNvbnN0IG9uQnVyZ2VyQ2xpY2sgPSAobWVudSkgPT57XG5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UG9ydGZvbGlvPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDQwMGksNzAwLDcwMGkmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9nbyc+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9J2hlYWRzaG90JyBzcmM9Jy9oZWFkc2hvdC5qcGcnIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BlcnNvbmFsLWluZm8tY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwZXJzb25hbC1pbmZvIG5hbWUnPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIE5vYWggTWFpemVsc1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwZXJzb25hbC1pbmZvIGpvYi10aXRsZSc+XG4gICAgICAgICAgICAgIFdlYiBEZXZlbG9wZXJcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGltZyBvbkNsaWNrPXtvbkJ1cmdlckNsaWNrfSBjbGFzc05hbWU9J2J1cmdlcicgc3JjPSdidXJnZXItYmFyLnBuZycvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlua3MnPlxuICAgICAgICAgIDxBY3RpdmVMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICBIb21lXG4gICAgICAgICAgPC9BY3RpdmVMaW5rPlxuICAgICAgICAgIDxBY3RpdmVMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5cbiAgICAgICAgICAgIFByb2plY3RzXG4gICAgICAgICAgPC9BY3RpdmVMaW5rPlxuICAgICAgICAgIDxBY3RpdmVMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgIDwvQWN0aXZlTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb250ZW50XCI+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5saW5rcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgfVxuICAgICAgbmF2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgfVxuICAgICAgLmxvZ28ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgfVxuICAgICAgLmhlYWRzaG90IHtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICB9XG4gICAgICAucGVyc29uYWwtaW5mby1jb250YWluZXJ7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgIFxuICAgICAgfVxuICAgICAgLnBlcnNvbmFsLWluZm8ge1xuICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICAgIH1cbiAgICAgIC5qb2ItdGl0bGUge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGNvbG9yOiAjQ0NDQ0NDO1xuICAgICAgfVxuICAgICAgLmJ1cmdlciB7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICB9XG4gICAgICBAbWVkaWEobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgICAubGlua3Mge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYShtaW4td2lkdGg6IDgwMHB4KSB7XG4gICAgICAgIC5idXJnZXIge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBcbiAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il19 */\n/*@ sourceURL=/Users/noahmaizels/Desktop/portfolio/components/Layout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=projects.js.99942b4ad4f73381357e.hot-update.js.map