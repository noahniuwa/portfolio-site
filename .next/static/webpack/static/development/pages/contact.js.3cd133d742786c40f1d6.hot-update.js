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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      navStyle = _useState2[0],
      setNavStyle = _useState2[1];

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

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      setNavStyle({
        boxShadow: '0px 3px 3px 0px rgba(173,173,173,0.67)',
        backgroundColor: '#F2F2F2'
      });
    } else {
      setNavStyle({
        boxShadow: 'none',
        color: 'white'
      });
    }
  });
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3433271783", [navStyle.boxShadow, navStyle.boxShadow, navStyle.boxShadow, menu]]]) + " " + 'layout',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3433271783", [navStyle.boxShadow, navStyle.boxShadow, navStyle.boxShadow, menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Portfolio"), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3433271783", [navStyle.boxShadow, navStyle.boxShadow, navStyle.boxShadow, menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("meta", {
    charSet: "utf-8",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3433271783", [navStyle.boxShadow, navStyle.boxShadow, navStyle.boxShadow, menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Nunito:400,400i,700,700i&display=swap",
    rel: "stylesheet",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3433271783", [navStyle.boxShadow, navStyle.boxShadow, navStyle.boxShadow, menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), __jsx("nav", {
    id: "nav",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3433271783", [navStyle.boxShadow, navStyle.boxShadow, navStyle.boxShadow, menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3433271783", [navStyle.boxShadow, navStyle.boxShadow, navStyle.boxShadow, menu]]]) + " " + 'logo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("img", {
    src: "/headshot.jpg",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3433271783", [navStyle.boxShadow, navStyle.boxShadow, navStyle.boxShadow, menu]]]) + " " + 'headshot',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3433271783", [navStyle.boxShadow, navStyle.boxShadow, navStyle.boxShadow, menu]]]) + " " + 'personal-info-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3433271783", [navStyle.boxShadow, navStyle.boxShadow, navStyle.boxShadow, menu]]]) + " " + 'personal-info name',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3433271783", [navStyle.boxShadow, navStyle.boxShadow, navStyle.boxShadow, menu]]]) + " " + 'name',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Noah Maizels"))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3433271783", [navStyle.boxShadow, navStyle.boxShadow, navStyle.boxShadow, menu]]]) + " " + 'personal-info job-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Web Developer"))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3433271783", [navStyle.boxShadow, navStyle.boxShadow, navStyle.boxShadow, menu]]]) + " " + 'nav-menu',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3433271783", [navStyle.boxShadow, navStyle.boxShadow, navStyle.boxShadow, menu]]]) + " " + 'links',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3433271783", [navStyle.boxShadow, navStyle.boxShadow, navStyle.boxShadow, menu]]]) + " " + 'link-wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Home")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3433271783", [navStyle.boxShadow, navStyle.boxShadow, navStyle.boxShadow, menu]]]) + " " + 'link-wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Contact"))), __jsx("img", {
    id: "burger",
    src: "burger-bar.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3433271783", [navStyle.boxShadow, navStyle.boxShadow, navStyle.boxShadow, menu]]]) + " " + 'burger',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }))), __jsx("div", {
    id: "content",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3433271783", [navStyle.boxShadow, navStyle.boxShadow, navStyle.boxShadow, menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3433271783",
    dynamic: [navStyle.boxShadow, navStyle.boxShadow, navStyle.boxShadow, menu],
    __self: this
  }, ".layout.__jsx-style-dynamic-selector{padding-bottom:100px;}#content.__jsx-style-dynamic-selector{margin-top:140px;}nav.__jsx-style-dynamic-selector{left:0px;top:0px;position:fixed;padding-left:50px;padding-right:50px;height:80px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:30px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:white;width:100%;-webkit-box-shadow:".concat(navStyle.boxShadow, ";-moz-box-shadow:").concat(navStyle.boxShadow, ";box-shadow:").concat(navStyle.boxShadow, ";z-index:99;-webkit-transition:all 300ms linear;transition:all 300ms linear;}.nav-menu.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-width:50px;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.logo.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;min-width:200px;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;background-color:white;}.headshot.__jsx-style-dynamic-selector{width:50px;border-radius:100%;-webkit-transition:all 200ms linear;transition:all 200ms linear;}.personal-info-container.__jsx-style-dynamic-selector{display:inline-block;margin-left:15px;}.personal-info.__jsx-style-dynamic-selector{line-height:1rem;}.name.__jsx-style-dynamic-selector{font-size:1rem;}.job-title.__jsx-style-dynamic-selector{margin-top:5px;color:#CCCCCC;font-size:1rem;-webkit-transition:all 200ms linear;transition:all 200ms linear;}.burger.__jsx-style-dynamic-selector{width:30px;height:30px;}@media(max-width:1000px){.links.__jsx-style-dynamic-selector{display:").concat(menu, ";position:absolute;-webkit-transform:translate(0px,120px);-ms-transform:translate(0px,120px);transform:translate(0px,120px);border:2px solid #984B48;width:160px;background-color:white;border-radius:5px;height:200px;}}@media(min-width:1000px){.link-wrapper.__jsx-style-dynamic-selector{margin-left:30px;}.links.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate(0px,0px);-ms-transform:translate(0px,0px);transform:translate(0px,0px);border:none;width:300px;background-color:none;border-radius:0px;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.burger.__jsx-style-dynamic-selector{display:none;}}@media(max-width:650px){.logo.__jsx-style-dynamic-selector{min-width:100px;}.personal-info.__jsx-style-dynamic-selector{line-height:.8rem;}.job-title.__jsx-style-dynamic-selector{margin-top:5px;color:#CCCCCC;font-size:.8rem;}.name.__jsx-style-dynamic-selector{font-size:.8rem;}.headshot.__jsx-style-dynamic-selector{width:35px;border-radius:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RWdCLEFBRzhCLEFBR0osQUFHUixBQW9CSSxBQVFBLEFBT0YsQUFLVSxBQUlKLEFBR0YsQUFHQSxBQU1KLEFBSzRCLEFBWXBCLEFBR0osQUFTQSxBQUtHLEFBR0UsQUFHSCxBQUtDLEFBR0wsU0F2R0wsRUFtQ1csQUFxQlAsQUFnRFMsRUFuQnJCLEVBdENGLEFBR2dCLEFBOENFLENBTmhCLEFBV0EsQ0F4R0YsQUFJaUIsQUEyQ2pCLEFBNkJFLENBb0JBLEdBbkdGLEFBOENtQixFQWlCbkIsTUFOaUIsQUE4Q0csQ0E3RFUsQUFxRTVCLEVBdkdrQixLQTJERSxDQXBCdEIsTUFXOEIsQ0E4QzVCLEtBL0ZtQixLQTJEZSxjQTFEdEIsS0FnQkcsQUFRTSxBQWdEVyxPQXZFbkIsUUFnQlksS0FnQjNCLGNBZ0JBLCtDQS9DZ0MsS0F5REgsYUFjYixFQWhERSxVQW1DRixBQWNBLENBeERLLEtBUUYsTUFtQ1EsQUFjRCxzQkFDSixDQWRBLGlCQWVPLENBZFosYUFDZixHQXJDdUIsQ0FSSixlQWhCQSxPQXlCckIsWUF4QnFCLDZDQTBFbkIsY0ExREYsa0NBZnlCLHVCQUNaLFdBQ3FDLGdEQUNILDZDQUNMLHdDQUM3QixXQUNpQixnRUFDOUIiLCJmaWxlIjoiL1VzZXJzL25vYWhtYWl6ZWxzL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEFjdGl2ZUxpbmsgZnJvbSAnLi9BY3RpdmVMaW5rJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbbWVudSwgc2V0TWVudV0gPSB1c2VTdGF0ZSgnbm9uZScpXG4gIGNvbnN0IFtuYXZTdHlsZSwgc2V0TmF2U3R5bGVdID0gdXNlU3RhdGUoe30pXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdidXJnZXInKXtcbiAgICAgICAgaWYgKG1lbnUgPT09ICdub25lJyl7XG4gICAgICAgICAgc2V0TWVudSgnJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzZXRNZW51KCdub25lJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHNldE1lbnUoJ25vbmUnKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPiAxMDAgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDEwMCkge1xuICAgICAgIHNldE5hdlN0eWxlKHtcbiAgICAgICAgIGJveFNoYWRvdzogJzBweCAzcHggM3B4IDBweCByZ2JhKDE3MywxNzMsMTczLDAuNjcpJyxcbiAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGMkYyRjInXG4gICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TmF2U3R5bGUoe1xuICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICAgY29sb3I6ICd3aGl0ZSdcbiAgICAgIH0pXG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdsYXlvdXQnPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Qb3J0Zm9saW88L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNDAwaSw3MDAsNzAwaSZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIFxuICAgICAgPG5hdiBpZD0nbmF2Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ28nPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdoZWFkc2hvdCcgc3JjPScvaGVhZHNob3QuanBnJyAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwZXJzb25hbC1pbmZvLWNvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGVyc29uYWwtaW5mbyBuYW1lJz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J25hbWUnPlxuICAgICAgICAgICAgICAgIE5vYWggTWFpemVsc1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwZXJzb25hbC1pbmZvIGpvYi10aXRsZSc+XG4gICAgICAgICAgICAgIFdlYiBEZXZlbG9wZXJcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdi1tZW51Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlua3MnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmstd3JhcHBlcic+XG4gICAgICAgICAgICAgIDxBY3RpdmVMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICA8L0FjdGl2ZUxpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5rLXdyYXBwZXInPlxuICAgICAgICAgICAgICA8QWN0aXZlTGluayBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICAgIDwvQWN0aXZlTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbWcgaWQ9J2J1cmdlcicgY2xhc3NOYW1lPSdidXJnZXInIHNyYz0nYnVyZ2VyLWJhci5wbmcnLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5sYXlvdXQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gICAgICB9XG4gICAgICAjY29udGVudCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE0MHB4O1xuICAgICAgfVxuICAgICAgbmF2IHtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogJHtuYXZTdHlsZS5ib3hTaGFkb3d9O1xuICAgICAgICAtbW96LWJveC1zaGFkb3c6ICR7bmF2U3R5bGUuYm94U2hhZG93fTtcbiAgICAgICAgYm94LXNoYWRvdzogJHtuYXZTdHlsZS5ib3hTaGFkb3d9O1xuICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLm5hdi1tZW51IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICBcbiAgICAgIC5sb2dvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICAuaGVhZHNob3Qge1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGxpbmVhcjtcbiAgICAgIH1cbiAgICAgIC5wZXJzb25hbC1pbmZvLWNvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgIH1cbiAgICAgIC5wZXJzb25hbC1pbmZvIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICB9XG4gICAgICAubmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIH1cbiAgICAgIC5qb2ItdGl0bGUge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGNvbG9yOiAjQ0NDQ0NDO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBsaW5lYXI7XG4gICAgICB9XG4gICAgICAuYnVyZ2VyIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgICAgICAubGlua3Mge1xuICAgICAgICAgIGRpc3BsYXk6ICR7bWVudX07XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMTIwcHgpO1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM5ODRCNDg7XG4gICAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgICAgLmxpbmstd3JhcHBlciB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmxpbmtzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1cmdlciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhKG1heC13aWR0aDogNjUwcHgpIHtcbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnBlcnNvbmFsLWluZm8ge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAuOHJlbTtcbiAgICAgICAgfVxuICAgICAgICAuam9iLXRpdGxlIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgY29sb3I6ICNDQ0NDQ0M7XG4gICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgfVxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZHNob3Qge1xuICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il19 */\n/*@ sourceURL=/Users/noahmaizels/Desktop/portfolio/components/Layout.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=contact.js.3cd133d742786c40f1d6.hot-update.js.map