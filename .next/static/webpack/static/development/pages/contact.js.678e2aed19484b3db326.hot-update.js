webpackHotUpdate("static/development/pages/contact.js",{

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

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.onclick = function (event) {
      if (event.target.id === 'burger') {
        if (menu === 'none') {
          setMenu('');
        } else {
          setMenu('none');
        }
      } else {
        setMenu('none');
      }
    };
  });
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2401949324", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2401949324", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Portfolio"), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2401949324", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("meta", {
    charSet: "utf-8",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2401949324", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Nunito:400,400i,700,700i&display=swap",
    rel: "stylesheet",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2401949324", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), __jsx("nav", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2401949324", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2401949324", [menu]]]) + " " + 'logo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("img", {
    src: "/headshot.jpg",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2401949324", [menu]]]) + " " + 'headshot',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2401949324", [menu]]]) + " " + 'personal-info-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2401949324", [menu]]]) + " " + 'personal-info name',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2401949324", [menu]]]) + " " + 'name',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Noah Maizels"))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2401949324", [menu]]]) + " " + 'personal-info job-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Web Developer"))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2401949324", [menu]]]) + " " + 'nav-menu',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2401949324", [menu]]]) + " " + 'links',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2401949324", [menu]]]) + " " + 'link-wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Contact")), __jsx("img", {
    id: "burger",
    src: "burger-bar.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2401949324", [menu]]]) + " " + 'burger',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2401949324", [menu]]]) + " " + "Content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2401949324",
    dynamic: [menu],
    __self: this
  }, ".nav-menu.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-width:50px;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}nav.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:30px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.logo.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;min-width:200px;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}.headshot.__jsx-style-dynamic-selector{width:50px;border-radius:100%;-webkit-transition:all 200ms linear;transition:all 200ms linear;}.personal-info-container.__jsx-style-dynamic-selector{display:inline-block;margin-left:15px;}.personal-info.__jsx-style-dynamic-selector{line-height:1rem;}.name.__jsx-style-dynamic-selector{font-size:1rem;}.job-title.__jsx-style-dynamic-selector{margin-top:5px;color:#CCCCCC;font-size:1rem;-webkit-transition:all 200ms linear;transition:all 200ms linear;}.burger.__jsx-style-dynamic-selector{width:30px;height:30px;}@media(max-width:1000px){.links.__jsx-style-dynamic-selector{display:".concat(menu, ";position:absolute;-webkit-transform:translate(0px,100px);-ms-transform:translate(0px,100px);transform:translate(0px,100px);border:2px solid #984B48;width:200px;background-color:white;border-radius:5px;}}@media(min-width:1000px){.links.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate(0px,0px);-ms-transform:translate(0px,0px);transform:translate(0px,0px);border:none;width:300px;background-color:none;border-radius:0px;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.burger.__jsx-style-dynamic-selector{display:none;}}@media(max-width:650px){.logo.__jsx-style-dynamic-selector{min-width:100px;}.personal-info.__jsx-style-dynamic-selector{line-height:.8rem;}.job-title.__jsx-style-dynamic-selector{margin-top:5px;color:#CCCCCC;font-size:.8rem;}.name.__jsx-style-dynamic-selector{font-size:.8rem;}.headshot.__jsx-style-dynamic-selector{width:35px;border-radius:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RGdCLEFBR3NCLEFBT0EsQUFNQSxBQU1GLEFBS1UsQUFJSixBQUdGLEFBR0EsQUFNSixBQUs0QixBQVd4QixBQVNBLEFBS0csQUFHRSxBQUdILEFBS0MsQUFHTCxXQWhFTSxBQXFCUCxBQTRDUyxFQW5CckIsRUFsQ0YsQUFHZ0IsQUEwQ0UsQ0FOaEIsQUFXQSxDQXJERixDQTZDRSxHQWpEaUIsRUFpQm5CLE1BTmlCLEFBMENHLENBekRVLEFBaUU1QixPQXhDb0IsQ0FwQnRCLE1BVzhCLENBMEM1QixVQWhDa0MsbUJBOUNuQixBQU9lLEFBTVQsQUEyQ1csZUF2RFAsS0FvQjNCLGNBZ0JBLG9EQVU2QixhQVViLEVBM0NFLFVBa0NGLEFBVUEsQ0F4REssR0FNQSxFQU9GLE1Ba0NRLEFBVUQsV0FsREwsV0FtREMsQ0FWQSxpQkFXTyxDQVYzQixnQkFuQ0YsQ0FicUIsOENBT3JCLGlDQW9ERSxjQTFERiIsImZpbGUiOiIvVXNlcnMvbm9haG1haXplbHMvRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgQWN0aXZlTGluayBmcm9tICcuL0FjdGl2ZUxpbmsnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFttZW51LCBzZXRNZW51XSA9IHVzZVN0YXRlKCdub25lJylcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ2J1cmdlcicpe1xuICAgICAgICBpZiAobWVudSA9PT0gJ25vbmUnKXtcbiAgICAgICAgICBzZXRNZW51KCcnKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNldE1lbnUoJ25vbmUnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc2V0TWVudSgnbm9uZScpXG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlBvcnRmb2xpbzwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw0MDBpLDcwMCw3MDBpJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG5hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ28nPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdoZWFkc2hvdCcgc3JjPScvaGVhZHNob3QuanBnJyAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwZXJzb25hbC1pbmZvLWNvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGVyc29uYWwtaW5mbyBuYW1lJz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J25hbWUnPlxuICAgICAgICAgICAgICAgIE5vYWggTWFpemVsc1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwZXJzb25hbC1pbmZvIGpvYi10aXRsZSc+XG4gICAgICAgICAgICAgIFdlYiBEZXZlbG9wZXJcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdi1tZW51Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlua3MnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmstd3JhcHBlcic+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8QWN0aXZlTGluayBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgICAgPC9BY3RpdmVMaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbWcgaWQ9J2J1cmdlcicgY2xhc3NOYW1lPSdidXJnZXInIHNyYz0nYnVyZ2VyLWJhci5wbmcnLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udGVudFwiPntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubmF2LW1lbnUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBuYXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAubG9nbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICB9XG4gICAgICAuaGVhZHNob3Qge1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGxpbmVhcjtcbiAgICAgIH1cbiAgICAgIC5wZXJzb25hbC1pbmZvLWNvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgIH1cbiAgICAgIC5wZXJzb25hbC1pbmZvIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICB9XG4gICAgICAubmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIH1cbiAgICAgIC5qb2ItdGl0bGUge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGNvbG9yOiAjQ0NDQ0NDO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBsaW5lYXI7XG4gICAgICB9XG4gICAgICAuYnVyZ2VyIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgICAgICAubGlua3Mge1xuICAgICAgICAgIGRpc3BsYXk6ICR7bWVudX07XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMTAwcHgpO1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM5ODRCNDg7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhKG1pbi13aWR0aDogMTAwMHB4KSB7XG4gICAgICAgIC5saW5rcyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB9XG4gICAgICAgIC5idXJnZXIge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDY1MHB4KSB7XG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5wZXJzb25hbC1pbmZvIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogLjhyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmpvYi10aXRsZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgIGNvbG9yOiAjQ0NDQ0NDO1xuICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgIH1cbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRzaG90IHtcbiAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dCJdfQ== */\n/*@ sourceURL=/Users/noahmaizels/Desktop/portfolio/components/Layout.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=contact.js.678e2aed19484b3db326.hot-update.js.map