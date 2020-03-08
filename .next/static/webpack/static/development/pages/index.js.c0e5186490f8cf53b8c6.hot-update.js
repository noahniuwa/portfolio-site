webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArrayLimit(arr, i) {
  if (!(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(arr)) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _config_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/projects */ "./config/projects.js");
/* harmony import */ var _components_ProjectTile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ProjectTile */ "./components/ProjectTile.js");


var _jsxFileName = "/Users/noahmaizels/Desktop/portfolio/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var Index = function Index(props) {
  var _useEffect = Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var myWork = document.getElementById('my-work');
    var belowClick = myWork.scrollIntoView();
  });

  var _useEffect2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useEffect, 2);

  belowClickHandler = _useEffect2[0];
  setHandler = _useEffect2[1];
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4028915131" + " " + 'main',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4028915131" + " " + 'main-intro',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Hi I'm Noah, ", __jsx("br", {
    className: "jsx-4028915131",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), "I like building stuff online."), __jsx("div", {
    className: "jsx-4028915131" + " " + 'sub-intro',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Check out my projects ", __jsx("a", {
    onClick: belowClick,
    id: "below",
    className: "jsx-4028915131",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "below"), ", ", __jsx("br", {
    className: "jsx-4028915131",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), "and feel free to ", __jsx("a", {
    href: "mailto:noahmaizels@protonmail.com",
    className: "jsx-4028915131",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "get in touch"), "."), __jsx("div", {
    id: "my-work",
    className: "jsx-4028915131" + " " + 'section-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "My Work"), __jsx("div", {
    className: "jsx-4028915131" + " " + 'projects-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4028915131" + " " + 'grid-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_config_projects__WEBPACK_IMPORTED_MODULE_5__["default"]).map(function (item, i) {
    return __jsx(_components_ProjectTile__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: i,
      project: _config_projects__WEBPACK_IMPORTED_MODULE_5__["default"][item],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    });
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "4028915131",
    __self: this
  }, ".section-title.jsx-4028915131{padding-top:100px;padding-bottom:50px;text-align:center;font-size:3rem;}.projects-container.jsx-4028915131{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.grid-container.jsx-4028915131{display:grid;grid-template-columns:300px 300px 300px;grid-column-gap:1rem;grid-row-gap:1rem;}.main-intro.jsx-4028915131{font-size:2.5rem;line-height:2.7rem;margin-bottom:15px;}a.jsx-4028915131{font-size:inherit;-webkit-text-decoration:underline;text-decoration:underline;}a.jsx-4028915131:hover{cursor:pointer;}.sub-intro.jsx-4028915131{font-size:1.5rem;max-width:400px;}.main.jsx-4028915131{margin-top:50px;}@media(max-width:1000px){.grid-container.jsx-4028915131{grid-template-columns:300px 300px;}}@media(max-width:650px){.grid-container.jsx-4028915131{grid-template-columns:300px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FobWFpemVscy9EZXNrdG9wL3BvcnRmb2xpby9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQmtCLEFBSTJCLEFBTUwsQUFJQSxBQU1JLEFBS0MsQUFJSCxBQUdFLEFBSUQsQUFJb0IsQUFNTixhQS9CVSxFQWUxQyxDQU9BLENBaEJxQixBQVlILENBNUJJLEFBcUJNLFVBcUIxQixLQWJGLENBT0UsRUFuQm1CLEVBaEJELGVBVUcsRUFPdkIsQ0FoQmlCLGVBQ2pCLEdBR3lCLEFBTUwsSUFVcEIsY0FUQSxpRkFOQSIsImZpbGUiOiIvVXNlcnMvbm9haG1haXplbHMvRGVza3RvcC9wb3J0Zm9saW8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHByb2plY3RzIGZyb20gJy4uL2NvbmZpZy9wcm9qZWN0cydcbmltcG9ydCBQcm9qZWN0VGlsZSBmcm9tICcuLi9jb21wb25lbnRzL1Byb2plY3RUaWxlJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xuICBbYmVsb3dDbGlja0hhbmRsZXIsIHNldEhhbmRsZXJdID0gXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbXlXb3JrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LXdvcmsnKVxuICAgIGNvbnN0IGJlbG93Q2xpY2sgPSBteVdvcmsuc2Nyb2xsSW50b1ZpZXcoKVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4taW50cm8nPlxuICAgICAgICAgIEhpIEknbSBOb2FoLCA8YnIgLz5JIGxpa2UgYnVpbGRpbmcgc3R1ZmYgb25saW5lLlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N1Yi1pbnRybyc+XG4gICAgICAgICAgQ2hlY2sgb3V0IG15IHByb2plY3RzIDxhIG9uQ2xpY2s9e2JlbG93Q2xpY2t9IGlkPSdiZWxvdyc+YmVsb3c8L2E+LCA8YnIgLz5cbiAgICAgICAgICBhbmQgZmVlbCBmcmVlIHRvIDxhIGhyZWY9J21haWx0bzpub2FobWFpemVsc0Bwcm90b25tYWlsLmNvbSc+Z2V0IGluIHRvdWNoPC9hPi5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uLXRpdGxlJyBpZD0nbXktd29yayc+TXkgV29yazwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdHMtY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZC1jb250YWluZXInPlxuICAgICAgICAgICAge09iamVjdC5rZXlzKHByb2plY3RzKS5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxQcm9qZWN0VGlsZSBrZXk9e2l9IHByb2plY3Q9e3Byb2plY3RzW2l0ZW1dfS8+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICBcbiAgICAgIC5zZWN0aW9uLXRpdGxlIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICB9XG4gICAgICAucHJvamVjdHMtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDMwMHB4IDMwMHB4O1xuICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDFyZW07XG4gICAgICAgIGdyaWQtcm93LWdhcDogMXJlbTtcbiAgICAgIH1cbiAgICAgIC5tYWluLWludHJvIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjdyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICB9ICBcbiAgICAgIGEge1xuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgIC5zdWItaW50cm8ge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgIH1cbiAgICAgIC5tYWluIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDEwMDBweCl7XG4gICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAzMDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEobWF4LXdpZHRoOiA2NTBweCl7XG4gICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il19 */\n/*@ sourceURL=/Users/noahmaizels/Desktop/portfolio/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.c0e5186490f8cf53b8c6.hot-update.js.map