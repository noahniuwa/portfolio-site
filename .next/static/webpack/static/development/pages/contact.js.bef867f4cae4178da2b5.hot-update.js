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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2825140703", [menu]]]) + " " + 'layout',
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2825140703", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Portfolio"), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2825140703", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("meta", {
    charSet: "utf-8",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2825140703", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Nunito:400,400i,700,700i&display=swap",
    rel: "stylesheet",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2825140703", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), __jsx("nav", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2825140703", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2825140703", [menu]]]) + " " + 'logo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("img", {
    src: "/headshot.jpg",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2825140703", [menu]]]) + " " + 'headshot',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2825140703", [menu]]]) + " " + 'personal-info-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2825140703", [menu]]]) + " " + 'personal-info name',
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2825140703", [menu]]]) + " " + 'name',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Noah Maizels"))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2825140703", [menu]]]) + " " + 'personal-info job-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Web Developer"))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2825140703", [menu]]]) + " " + 'nav-menu',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2825140703", [menu]]]) + " " + 'links',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2825140703", [menu]]]) + " " + 'link-wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Home")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2825140703", [menu]]]) + " " + 'link-wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Contact"))), __jsx("img", {
    id: "burger",
    src: "burger-bar.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2825140703", [menu]]]) + " " + 'burger',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2825140703", [menu]]]) + " " + "Content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2825140703",
    dynamic: [menu],
    __self: this
  }, ".nav-menu.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-width:50px;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}nav.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:30px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.logo.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;min-width:200px;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}.headshot.__jsx-style-dynamic-selector{width:50px;border-radius:100%;-webkit-transition:all 200ms linear;transition:all 200ms linear;}.personal-info-container.__jsx-style-dynamic-selector{display:inline-block;margin-left:15px;}.personal-info.__jsx-style-dynamic-selector{line-height:1rem;}.name.__jsx-style-dynamic-selector{font-size:1rem;}.job-title.__jsx-style-dynamic-selector{margin-top:5px;color:#CCCCCC;font-size:1rem;-webkit-transition:all 200ms linear;transition:all 200ms linear;}.burger.__jsx-style-dynamic-selector{width:30px;height:30px;}@media(max-width:1000px){.links.__jsx-style-dynamic-selector{display:".concat(menu, ";position:absolute;-webkit-transform:translate(0px,100px);-ms-transform:translate(0px,100px);transform:translate(0px,100px);border:2px solid #984B48;width:200px;background-color:white;border-radius:5px;}}@media(min-width:1000px){.link-wrapper.__jsx-style-dynamic-selector{margin-left:30px;}.links.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate(0px,0px);-ms-transform:translate(0px,0px);transform:translate(0px,0px);border:none;width:300px;background-color:none;border-radius:0px;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.burger.__jsx-style-dynamic-selector{display:none;}}@media(max-width:650px){.logo.__jsx-style-dynamic-selector{min-width:100px;}.personal-info.__jsx-style-dynamic-selector{line-height:.8rem;}.job-title.__jsx-style-dynamic-selector{margin-top:5px;color:#CCCCCC;font-size:.8rem;}.name.__jsx-style-dynamic-selector{font-size:.8rem;}.headshot.__jsx-style-dynamic-selector{width:35px;border-radius:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRWdCLEFBSXNCLEFBT0EsQUFNQSxBQU1GLEFBS1UsQUFJSixBQUdGLEFBR0EsQUFNSixBQUs0QixBQVdwQixBQUdKLEFBU0EsQUFLRyxBQUdFLEFBR0gsQUFLQyxBQUdMLFdBbkVNLEFBcUJQLEFBK0NTLEVBbkJyQixFQXJDRixBQUdnQixBQTZDRSxDQU5oQixBQVdBLENBeERGLEFBNEJFLENBb0JBLEdBcERpQixFQWlCbkIsTUFOaUIsQUE2Q0csQ0E1RFUsQUFvRTVCLE9BM0NvQixDQXBCdEIsTUFXOEIsQ0E2QzVCLFVBbkNrQyxtQkE5Q25CLEFBT2UsQUFNVCxBQThDVyxlQTFEUCxLQW9CM0IsY0FnQkEsb0RBVTZCLGFBYWIsRUE5Q0UsVUFrQ0YsQUFhQSxDQTNESyxHQU1BLEVBT0YsTUFrQ1EsQUFhRCxXQXJETCxXQXNEQyxDQWJBLGlCQWNPLENBYjNCLGdCQW5DRixDQWJxQiw4Q0FPckIsaUNBdURFLGNBN0RGIiwiZmlsZSI6Ii9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBBY3RpdmVMaW5rIGZyb20gJy4vQWN0aXZlTGluaydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW21lbnUsIHNldE1lbnVdID0gdXNlU3RhdGUoJ25vbmUnKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSAnYnVyZ2VyJyl7XG4gICAgICAgIGlmIChtZW51ID09PSAnbm9uZScpe1xuICAgICAgICAgIHNldE1lbnUoJycpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc2V0TWVudSgnbm9uZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzZXRNZW51KCdub25lJylcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2xheW91dCc+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlBvcnRmb2xpbzwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw0MDBpLDcwMCw3MDBpJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG5hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ28nPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdoZWFkc2hvdCcgc3JjPScvaGVhZHNob3QuanBnJyAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwZXJzb25hbC1pbmZvLWNvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGVyc29uYWwtaW5mbyBuYW1lJz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J25hbWUnPlxuICAgICAgICAgICAgICAgIE5vYWggTWFpemVsc1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwZXJzb25hbC1pbmZvIGpvYi10aXRsZSc+XG4gICAgICAgICAgICAgIFdlYiBEZXZlbG9wZXJcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdi1tZW51Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlua3MnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmstd3JhcHBlcic+XG4gICAgICAgICAgICAgIDxBY3RpdmVMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICA8L0FjdGl2ZUxpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5rLXdyYXBwZXInPlxuICAgICAgICAgICAgICA8QWN0aXZlTGluayBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICAgIDwvQWN0aXZlTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbWcgaWQ9J2J1cmdlcicgY2xhc3NOYW1lPSdidXJnZXInIHNyYz0nYnVyZ2VyLWJhci5wbmcnLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udGVudFwiPntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBcbiAgICAgIC5uYXYtbWVudSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1pbi13aWR0aDogNTBweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIG5hdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5sb2dvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgIH1cbiAgICAgIC5oZWFkc2hvdCB7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgbGluZWFyO1xuICAgICAgfVxuICAgICAgLnBlcnNvbmFsLWluZm8tY29udGFpbmVye1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgfVxuICAgICAgLnBlcnNvbmFsLWluZm8ge1xuICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICAgIH1cbiAgICAgIC5uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgfVxuICAgICAgLmpvYi10aXRsZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgY29sb3I6ICNDQ0NDQ0M7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGxpbmVhcjtcbiAgICAgIH1cbiAgICAgIC5idXJnZXIge1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgfVxuICAgICAgQG1lZGlhKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgICAgIC5saW5rcyB7XG4gICAgICAgICAgZGlzcGxheTogJHttZW51fTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAxMDBweCk7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzk4NEI0ODtcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgICAgLmxpbmstd3JhcHBlciB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmxpbmtzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1cmdlciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhKG1heC13aWR0aDogNjUwcHgpIHtcbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnBlcnNvbmFsLWluZm8ge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAuOHJlbTtcbiAgICAgICAgfVxuICAgICAgICAuam9iLXRpdGxlIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgY29sb3I6ICNDQ0NDQ0M7XG4gICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgfVxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZHNob3Qge1xuICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il19 */\n/*@ sourceURL=/Users/noahmaizels/Desktop/portfolio/components/Layout.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=contact.js.bef867f4cae4178da2b5.hot-update.js.map