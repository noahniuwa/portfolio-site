webpackHotUpdate("static/development/pages/index.js",{

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

    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("nav").style.top = "0";
        document.getElementById("nav").style.position = 'fixed';
      } else {
        document.getElementById("nav").style.position = 'relative';
      }
    };
  });
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1158217333", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1158217333", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Portfolio"), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1158217333", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("meta", {
    charSet: "utf-8",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1158217333", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Nunito:400,400i,700,700i&display=swap",
    rel: "stylesheet",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1158217333", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), __jsx("nav", {
    id: "nav",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1158217333", [menu]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1158217333", [menu]]]) + " " + 'logo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("img", {
    src: "/headshot.jpg",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1158217333", [menu]]]) + " " + 'headshot',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1158217333", [menu]]]) + " " + 'personal-info-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1158217333", [menu]]]) + " " + 'personal-info name',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1158217333", [menu]]]) + " " + 'name',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Noah Maizels"))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1158217333", [menu]]]) + " " + 'personal-info job-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Web Developer"))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1158217333", [menu]]]) + " " + 'nav-menu',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1158217333", [menu]]]) + " " + 'links',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1158217333", [menu]]]) + " " + 'link-wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Home")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1158217333", [menu]]]) + " " + 'link-wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Contact"))), __jsx("img", {
    id: "burger",
    src: "burger-bar.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1158217333", [menu]]]) + " " + 'burger',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1158217333", [menu]]]) + " " + "Content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1158217333",
    dynamic: [menu],
    __self: this
  }, "nav.__jsx-style-dynamic-selector{padding-left:50px;padding-right:50px;height:100px;-webkit-box-shadow:0px 6px 6px 0px rgba(173,173,173,0.67);-moz-box-shadow:0px 6px 6px 0px rgba(173,173,173,0.67);box-shadow:0px 6px 6px 0px rgba(173,173,173,0.67);}.nav-menu.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-width:50px;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}nav.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:30px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:white;width:100%;}.logo.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;min-width:200px;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}.headshot.__jsx-style-dynamic-selector{width:50px;border-radius:100%;-webkit-transition:all 200ms linear;transition:all 200ms linear;}.personal-info-container.__jsx-style-dynamic-selector{display:inline-block;margin-left:15px;}.personal-info.__jsx-style-dynamic-selector{line-height:1rem;}.name.__jsx-style-dynamic-selector{font-size:1rem;}.job-title.__jsx-style-dynamic-selector{margin-top:5px;color:#CCCCCC;font-size:1rem;-webkit-transition:all 200ms linear;transition:all 200ms linear;}.burger.__jsx-style-dynamic-selector{width:30px;height:30px;}@media(max-width:1000px){.links.__jsx-style-dynamic-selector{display:".concat(menu, ";position:absolute;-webkit-transform:translate(0px,120px);-ms-transform:translate(0px,120px);transform:translate(0px,120px);border:2px solid #984B48;width:160px;background-color:white;border-radius:5px;height:200px;}}@media(min-width:1000px){.link-wrapper.__jsx-style-dynamic-selector{margin-left:30px;}.links.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate(0px,0px);-ms-transform:translate(0px,0px);transform:translate(0px,0px);border:none;width:300px;background-color:none;border-radius:0px;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.burger.__jsx-style-dynamic-selector{display:none;}}@media(max-width:650px){.logo.__jsx-style-dynamic-selector{min-width:100px;}.personal-info.__jsx-style-dynamic-selector{line-height:.8rem;}.job-title.__jsx-style-dynamic-selector{margin-top:5px;color:#CCCCCC;font-size:.8rem;}.name.__jsx-style-dynamic-selector{font-size:.8rem;}.headshot.__jsx-style-dynamic-selector{width:35px;border-radius:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRWdCLEFBRzJCLEFBUUwsQUFPQSxBQVFBLEFBTUYsQUFLVSxBQUlKLEFBR0YsQUFHQSxBQU1KLEFBSzRCLEFBWXBCLEFBR0osQUFTQSxBQUtHLEFBR0UsQUFHSCxBQUtDLEFBR0wsV0FwRU0sQUFxQlAsQUFnRFMsRUFuQnJCLEVBdENGLEFBR2dCLEFBOENFLENBTmhCLEFBV0EsQ0F6REYsQUE2QkUsQ0FuRW1CLEFBdUZuQixHQXJEaUIsRUFpQm5CLE1BTmlCLEFBOENHLENBN0RVLEFBcUU1QixPQWxHYSxBQXNETyxDQXBCdEIsTUFXOEIsQ0E4QzVCLEtBMUYwRCxLQXNEeEIsbUJBaERuQixBQU9lLEFBUVQsQUErQ1csZUE3RFAsS0FzQjNCLGNBNUJ5RCxBQTRDekQsb0RBVTZCLEdBckR1QixVQW1FcEMsRUEvQ0UsVUFrQ0YsQUFjQSxDQTlESyxHQU1BLEVBU0YsTUFrQ1EsQUFjRCxXQXhETCxLQVpyQixNQXFFc0IsQ0FkQSxpQkFlTyxDQWRaLGFBQ2YsR0FwQ0YsQ0FmcUIsOENBT0ksdUJBQ1osVUF5RFgsQ0F4REYsYUFSQSIsImZpbGUiOiIvVXNlcnMvbm9haG1haXplbHMvRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgQWN0aXZlTGluayBmcm9tICcuL0FjdGl2ZUxpbmsnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFttZW51LCBzZXRNZW51XSA9IHVzZVN0YXRlKCdub25lJylcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ2J1cmdlcicpe1xuICAgICAgICBpZiAobWVudSA9PT0gJ25vbmUnKXtcbiAgICAgICAgICBzZXRNZW51KCcnKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNldE1lbnUoJ25vbmUnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc2V0TWVudSgnbm9uZScpXG4gICAgICB9XG4gICAgfVxuICAgIHdpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA+IDIwIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiAyMCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKS5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIikuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnXG4gICAgICB9IFxuICAgICAgZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJ1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Qb3J0Zm9saW88L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNDAwaSw3MDAsNzAwaSZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxuYXYgaWQ9J25hdic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dvJz5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naGVhZHNob3QnIHNyYz0nL2hlYWRzaG90LmpwZycgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGVyc29uYWwtaW5mby1jb250YWluZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BlcnNvbmFsLWluZm8gbmFtZSc+XG4gICAgICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSduYW1lJz5cbiAgICAgICAgICAgICAgICBOb2FoIE1haXplbHNcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGVyc29uYWwtaW5mbyBqb2ItdGl0bGUnPlxuICAgICAgICAgICAgICBXZWIgRGV2ZWxvcGVyXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXYtbWVudSc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmtzJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5rLXdyYXBwZXInPlxuICAgICAgICAgICAgICA8QWN0aXZlTGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgPC9BY3RpdmVMaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGluay13cmFwcGVyJz5cbiAgICAgICAgICAgICAgPEFjdGl2ZUxpbmsgaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgICAgICA8L0FjdGl2ZUxpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW1nIGlkPSdidXJnZXInIGNsYXNzTmFtZT0nYnVyZ2VyJyBzcmM9J2J1cmdlci1iYXIucG5nJy8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbnRlbnRcIj57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgbmF2IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA2cHggNnB4IDBweCByZ2JhKDE3MywxNzMsMTczLDAuNjcpO1xuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCA2cHggNnB4IDBweCByZ2JhKDE3MywxNzMsMTczLDAuNjcpO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNnB4IDZweCAwcHggcmdiYSgxNzMsMTczLDE3MywwLjY3KTtcbiAgICAgIH1cbiAgICAgIC5uYXYtbWVudSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1pbi13aWR0aDogNTBweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIG5hdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLmxvZ28ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgfVxuICAgICAgLmhlYWRzaG90IHtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBsaW5lYXI7XG4gICAgICB9XG4gICAgICAucGVyc29uYWwtaW5mby1jb250YWluZXJ7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICB9XG4gICAgICAucGVyc29uYWwtaW5mbyB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgfVxuICAgICAgLm5hbWUge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICB9XG4gICAgICAuam9iLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBjb2xvcjogI0NDQ0NDQztcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgbGluZWFyO1xuICAgICAgfVxuICAgICAgLmJ1cmdlciB7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICB9XG4gICAgICBAbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgICAgLmxpbmtzIHtcbiAgICAgICAgICBkaXNwbGF5OiAke21lbnV9O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDEyMHB4KTtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjOTg0QjQ4O1xuICAgICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhKG1pbi13aWR0aDogMTAwMHB4KSB7XG4gICAgICAgIC5saW5rLXdyYXBwZXIge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5saW5rcyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB9XG4gICAgICAgIC5idXJnZXIge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDY1MHB4KSB7XG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5wZXJzb25hbC1pbmZvIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogLjhyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmpvYi10aXRsZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgIGNvbG9yOiAjQ0NDQ0NDO1xuICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgIH1cbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRzaG90IHtcbiAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dCJdfQ== */\n/*@ sourceURL=/Users/noahmaizels/Desktop/portfolio/components/Layout.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.bd48a91d0ea6d1aecf01.hot-update.js.map