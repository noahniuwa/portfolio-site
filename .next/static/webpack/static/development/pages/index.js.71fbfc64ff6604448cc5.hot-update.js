webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _config_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/projects */ "./config/projects.js");
/* harmony import */ var _components_ProjectTile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ProjectTile */ "./components/ProjectTile.js");

var _jsxFileName = "/Users/noahmaizels/Desktop/portfolio/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var Index = function Index(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      belowClickHandler = _useState[0],
      setHandler = _useState[1];

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2884341873" + " " + 'main',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2884341873" + " " + 'main-intro',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Hi I'm Noah, ", __jsx("br", {
    className: "jsx-2884341873",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), "I like building stuff online."), __jsx("div", {
    className: "jsx-2884341873" + " " + 'sub-intro',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Check out my projects ", __jsx("a", {
    href: "#my-work",
    id: "below",
    className: "jsx-2884341873",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "below"), ", ", __jsx("br", {
    className: "jsx-2884341873",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), "and feel free to ", __jsx("a", {
    href: "mailto:noahmaizels@protonmail.com",
    className: "jsx-2884341873",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "get in touch"), "."), __jsx("div", {
    id: "my-work",
    className: "jsx-2884341873" + " " + 'section-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "My Work"), __jsx("div", {
    className: "jsx-2884341873" + " " + 'projects-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2884341873" + " " + 'grid-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_config_projects__WEBPACK_IMPORTED_MODULE_4__["default"]).map(function (item, i) {
    return __jsx(_components_ProjectTile__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: i,
      project: _config_projects__WEBPACK_IMPORTED_MODULE_4__["default"][item],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    });
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2884341873",
    __self: this
  }, ".section-title.jsx-2884341873{padding-bottom:50px;text-align:center;font-size:3rem;}.projects-container.jsx-2884341873{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:1px solid rgba(173,173,173,0.37);-webkit-box-shadow:6px 6px 6px 0px rgba(173,173,173,0.67);-moz-box-shadow:6px 6px 6px 0px rgba(173,173,173,0.67);box-shadow:6px 6px 6px 0px rgba(173,173,173,0.67);padding:80px 0px;border-radius:10px;}.grid-container.jsx-2884341873{display:grid;grid-template-columns:300px 300px 300px;grid-column-gap:1rem;grid-row-gap:1rem;}.main-intro.jsx-2884341873{font-size:2.5rem;line-height:2.7rem;margin-bottom:15px;}a.jsx-2884341873{font-size:inherit;-webkit-text-decoration:underline;text-decoration:underline;}a.jsx-2884341873:hover{cursor:pointer;}.sub-intro.jsx-2884341873{font-size:1.5rem;max-width:400px;margin-bottom:100px;}.main.jsx-2884341873{margin-top:50px;}@media(max-width:1000px){.grid-container.jsx-2884341873{grid-template-columns:300px 300px;}}@media(max-width:650px){.grid-container.jsx-2884341873{grid-template-columns:300px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3BvcnRmb2xpby9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQmtCLEFBSTZCLEFBS1AsQUFVQSxBQU1JLEFBS0MsQUFJSCxBQUdFLEFBS0QsQUFJb0IsQUFNTixhQWhDVSxFQWUxQyxDQVFBLENBakJxQixBQVlILENBUFUsRUExQlIsUUFnRGxCLEtBZG9CLENBUXBCLEVBcEJtQixFQXJCSixlQUNqQixBQWN1QixBQW1CdkIsRUFaQSxtQkFsQnlCLEFBWUwsSUFVcEIsY0FUQSxpRkFaMEMsd0NBQ2tCLDBEQUNILHVEQUNMLGtEQUNqQyxpQkFDRSxtQkFDckIiLCJmaWxlIjoiL1VzZXJzL25vYWhtYWl6ZWxzL0Rlc2t0b3AvcG9ydGZvbGlvL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBwcm9qZWN0cyBmcm9tICcuLi9jb25maWcvcHJvamVjdHMnXG5pbXBvcnQgUHJvamVjdFRpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9qZWN0VGlsZSdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2JlbG93Q2xpY2tIYW5kbGVyLCBzZXRIYW5kbGVyXSA9IHVzZVN0YXRlKClcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluLWludHJvJz5cbiAgICAgICAgICBIaSBJJ20gTm9haCwgPGJyIC8+SSBsaWtlIGJ1aWxkaW5nIHN0dWZmIG9ubGluZS5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdWItaW50cm8nPlxuICAgICAgICAgIENoZWNrIG91dCBteSBwcm9qZWN0cyA8YSBocmVmPScjbXktd29yaycgaWQ9J2JlbG93Jz5iZWxvdzwvYT4sIDxiciAvPlxuICAgICAgICAgIGFuZCBmZWVsIGZyZWUgdG8gPGEgaHJlZj0nbWFpbHRvOm5vYWhtYWl6ZWxzQHByb3Rvbm1haWwuY29tJz5nZXQgaW4gdG91Y2g8L2E+LlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb24tdGl0bGUnIGlkPSdteS13b3JrJz5NeSBXb3JrPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0cy1jb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkLWNvbnRhaW5lcic+XG4gICAgICAgICAgICB7T2JqZWN0LmtleXMocHJvamVjdHMpLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPFByb2plY3RUaWxlIGtleT17aX0gcHJvamVjdD17cHJvamVjdHNbaXRlbV19Lz5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgIFxuICAgICAgLnNlY3Rpb24tdGl0bGUge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICB9XG4gICAgICAucHJvamVjdHMtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTczLDE3MywxNzMsMC4zNyk7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogNnB4IDZweCA2cHggMHB4IHJnYmEoMTczLDE3MywxNzMsMC42Nyk7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogNnB4IDZweCA2cHggMHB4IHJnYmEoMTczLDE3MywxNzMsMC42Nyk7XG4gICAgICAgIGJveC1zaGFkb3c6IDZweCA2cHggNnB4IDBweCByZ2JhKDE3MywxNzMsMTczLDAuNjcpO1xuICAgICAgICBwYWRkaW5nOiA4MHB4IDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIH1cbiAgICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMzAwcHggMzAwcHg7XG4gICAgICAgIGdyaWQtY29sdW1uLWdhcDogMXJlbTtcbiAgICAgICAgZ3JpZC1yb3ctZ2FwOiAxcmVtO1xuICAgICAgfVxuICAgICAgLm1haW4taW50cm8ge1xuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuN3JlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIH0gIFxuICAgICAgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgLnN1Yi1pbnRybyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICAgIH1cbiAgICAgIC5tYWluIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDEwMDBweCl7XG4gICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAzMDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEobWF4LXdpZHRoOiA2NTBweCl7XG4gICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il19 */\n/*@ sourceURL=/Users/noahmaizels/Desktop/portfolio/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.71fbfc64ff6604448cc5.hot-update.js.map