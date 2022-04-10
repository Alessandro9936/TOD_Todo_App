/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --color-blue: #2bceff;\n  --main-gray: #3c424a;\n  --input-gray: #272b30;\n  --light-gray: #6b7885;\n  --color-text: white;\n\n  --general-font-size: 1.4rem;\n\n  --border-radius: 4px;\n\n  --divider-border: 1.5px solid rgb(34, 31, 31);\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  font-size: var(--general-font-size);\n\n  letter-spacing: 0.1rem;\n}\n\nmain {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  height: 100vh;\n  width: 100vw;\n\n  background: linear-gradient(45deg, #bceaf8, #82defa);\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  height: 70%;\n  width: 30%;\n\n  padding-top: 1rem;\n\n  background-color: var(--main-gray);\n  border-radius: var(--border-radius);\n}\n\n/* Navigation Styling */\n\n.day-nav-container {\n  display: flex;\n  justify-content: center;\n\n  width: 100%;\n  height: 2.4rem;\n\n  border-bottom: var(--divider-border);\n}\n\n.day-nav-list {\n  list-style: none;\n\n  display: flex;\n  gap: 5rem;\n}\n\n.day-btn {\n  color: var(--light-gray);\n\n  padding: 0.4rem;\n\n  cursor: pointer;\n}\n\n/* Add with JS when user click on nav link */\n.on-hover,\n.day-btn:hover {\n  font-weight: bold;\n\n  color: var(--color-text);\n\n  border-bottom: 3px solid var(--color-blue);\n}\n\n/* ****************** */\n\n/* Day-Date Styling */\n\n.day-date-container {\n  display: flex;\n  align-items: center;\n  gap: 2.4rem;\n\n  padding-block: 5rem;\n}\n\n.day-date-container svg {\n  height: 3rem;\n  width: 3rem;\n\n  color: var(--light-gray);\n\n  cursor: pointer;\n}\n\n.day-date-display {\n  text-align: center;\n}\n\n.day-date-display p {\n  font-size: 3rem;\n  font-weight: bold;\n\n  margin-bottom: 0.4rem;\n\n  color: var(--color-text);\n}\n\n.day-date-display span {\n  color: var(--light-gray);\n  font-weight: bold;\n}\n\n/* ****************** */\n\n/* Input Task Container Styling */\n.input-task-container {\n  width: 100%;\n  padding-inline: 6rem;\n\n  margin-bottom: 1.8rem;\n}\n\n.form {\n  position: relative;\n\n  z-index: 1;\n}\n\n.task-container svg {\n  position: absolute;\n\n  color: var(--light-gray);\n  display: block;\n  width: 2rem;\n  height: 2rem;\n}\n\n.input-style {\n  width: 100%;\n\n  outline: none;\n  border: var(--divider-border);\n  border-radius: var(--border-radius);\n\n  font-size: var(--general-font-size);\n  font-weight: bold;\n\n  color: var(--color-text);\n\n  padding: 0.8rem;\n\n  background-color: var(--input-gray);\n}\n\n.task-spec-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 3rem;\n\n  background-color: var(--input-gray);\n\n  height: 34rem;\n\n  padding: 2rem;\n\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.input-field {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n\n.description textarea {\n  resize: none;\n\n  width: 100%;\n\n  outline: none;\n  border: var(--divider-border);\n  border-radius: var(--border-radius);\n\n  padding: 0.8rem;\n\n  font-size: var(--general-font-size);\n  color: var(--input-gray);\n\n  background-color: var(--color-text);\n}\n\n.due-date label {\n  font-weight: bold;\n  color: var(--color-text);\n}\n\n.due-date input {\n  background-color: white;\n  border: none;\n  border-radius: var(--border-radius);\n\n  padding: 0.4rem;\n}\n\n.priority label {\n  font-weight: bold;\n  color: var(--color-text);\n}\n\n.btn-submit {\n  padding-block: 0.8rem;\n  background-color: var(--color-blue);\n  border: none;\n\n  font-size: 1.6rem;\n  color: var(--input-gray);\n  font-weight: bold;\n\n  border-radius: var(--border-radius);\n\n  cursor: pointer;\n}\n\n.btn-submit:hover,\n.btn-submit:active {\n  transform: scale(98%);\n}\n\n/* ****************** */\n\n/* Tasks Container Styling */\n.tasks-container {\n  width: 100%;\n  padding-inline: 6rem;\n\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n\n  overflow: scroll;\n}\n\n.task-visible {\n  display: flex;\n  align-items: center;\n}\n\n.task-visible button {\n  height: 1.6rem;\n  width: 1.6rem;\n\n  border: var(--divider-border);\n  border-radius: var(--border-radius);\n\n  background-color: var(--light-gray);\n\n  cursor: pointer;\n}\n\n/* Add with JS when user click btn */\n.check-btn {\n  background-color: var(--color-blue) !important;\n}\n\n.task-visible p {\n  color: var(--color-text);\n  font-weight: bold;\n  font-size: 1.6rem;\n  margin-left: 1.2rem;\n}\n\n.task-visible svg {\n  height: 3rem;\n  width: 3rem;\n\n  margin-left: auto;\n\n  color: var(--light-gray);\n\n  cursor: pointer;\n}\n\n.task-description {\n  position: relative;\n  padding-top: 1rem;\n\n  border-bottom: 2px solid #272b30;\n}\n\n.task-description strong {\n  color: var(--color-text);\n}\n\n.task-description p {\n  margin-bottom: 1rem;\n  color: var(--light-gray);\n}\n\n.task-description svg {\n  position: absolute;\n\n  height: 2.4rem;\n  width: 2.4rem;\n\n  color: var(--light-gray);\n  right: 0;\n  bottom: 5%;\n\n  cursor: pointer;\n}\n/* ****************** */\n\n/* Hide scrollbar for Chrome, Safari and Opera */\n.tasks-container::-webkit-scrollbar {\n  display: none;\n}\n\n/* Hide scrollbar for IE, Edge and Firefox */\n.tasks-container {\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --color-blue: #2bceff;\n  --main-gray: #3c424a;\n  --input-gray: #272b30;\n  --light-gray: #6b7885;\n  --color-text: white;\n\n  --general-font-size: 1.4rem;\n\n  --border-radius: 4px;\n\n  --divider-border: 1.5px solid rgb(34, 31, 31);\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  font-size: var(--general-font-size);\n\n  letter-spacing: 0.1rem;\n}\n\nmain {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  height: 100vh;\n  width: 100vw;\n\n  background: linear-gradient(45deg, #bceaf8, #82defa);\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  height: 70%;\n  width: 30%;\n\n  padding-top: 1rem;\n\n  background-color: var(--main-gray);\n  border-radius: var(--border-radius);\n}\n\n/* Navigation Styling */\n\n.day-nav-container {\n  display: flex;\n  justify-content: center;\n\n  width: 100%;\n  height: 2.4rem;\n\n  border-bottom: var(--divider-border);\n}\n\n.day-nav-list {\n  list-style: none;\n\n  display: flex;\n  gap: 5rem;\n}\n\n.day-btn {\n  color: var(--light-gray);\n\n  padding: 0.4rem;\n\n  cursor: pointer;\n}\n\n/* Add with JS when user click on nav link */\n.on-hover,\n.day-btn:hover {\n  font-weight: bold;\n\n  color: var(--color-text);\n\n  border-bottom: 3px solid var(--color-blue);\n}\n\n/* ****************** */\n\n/* Day-Date Styling */\n\n.day-date-container {\n  display: flex;\n  align-items: center;\n  gap: 2.4rem;\n\n  padding-block: 5rem;\n}\n\n.day-date-container svg {\n  height: 3rem;\n  width: 3rem;\n\n  color: var(--light-gray);\n\n  cursor: pointer;\n}\n\n.day-date-display {\n  text-align: center;\n}\n\n.day-date-display p {\n  font-size: 3rem;\n  font-weight: bold;\n\n  margin-bottom: 0.4rem;\n\n  color: var(--color-text);\n}\n\n.day-date-display span {\n  color: var(--light-gray);\n  font-weight: bold;\n}\n\n/* ****************** */\n\n/* Input Task Container Styling */\n.input-task-container {\n  width: 100%;\n  padding-inline: 6rem;\n\n  margin-bottom: 1.8rem;\n}\n\n.form {\n  position: relative;\n\n  z-index: 1;\n}\n\n.task-container svg {\n  position: absolute;\n\n  color: var(--light-gray);\n  display: block;\n  width: 2rem;\n  height: 2rem;\n}\n\n.input-style {\n  width: 100%;\n\n  outline: none;\n  border: var(--divider-border);\n  border-radius: var(--border-radius);\n\n  font-size: var(--general-font-size);\n  font-weight: bold;\n\n  color: var(--color-text);\n\n  padding: 0.8rem;\n\n  background-color: var(--input-gray);\n}\n\n.task-spec-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 3rem;\n\n  background-color: var(--input-gray);\n\n  height: 34rem;\n\n  padding: 2rem;\n\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.input-field {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n\n.description textarea {\n  resize: none;\n\n  width: 100%;\n\n  outline: none;\n  border: var(--divider-border);\n  border-radius: var(--border-radius);\n\n  padding: 0.8rem;\n\n  font-size: var(--general-font-size);\n  color: var(--input-gray);\n\n  background-color: var(--color-text);\n}\n\n.due-date label {\n  font-weight: bold;\n  color: var(--color-text);\n}\n\n.due-date input {\n  background-color: white;\n  border: none;\n  border-radius: var(--border-radius);\n\n  padding: 0.4rem;\n}\n\n.priority label {\n  font-weight: bold;\n  color: var(--color-text);\n}\n\n.btn-submit {\n  padding-block: 0.8rem;\n  background-color: var(--color-blue);\n  border: none;\n\n  font-size: 1.6rem;\n  color: var(--input-gray);\n  font-weight: bold;\n\n  border-radius: var(--border-radius);\n\n  cursor: pointer;\n}\n\n.btn-submit:hover,\n.btn-submit:active {\n  transform: scale(98%);\n}\n\n/* ****************** */\n\n/* Tasks Container Styling */\n.tasks-container {\n  width: 100%;\n  padding-inline: 6rem;\n\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n\n  overflow: scroll;\n}\n\n.task-visible {\n  display: flex;\n  align-items: center;\n}\n\n.task-visible button {\n  height: 1.6rem;\n  width: 1.6rem;\n\n  border: var(--divider-border);\n  border-radius: var(--border-radius);\n\n  background-color: var(--light-gray);\n\n  cursor: pointer;\n}\n\n/* Add with JS when user click btn */\n.check-btn {\n  background-color: var(--color-blue) !important;\n}\n\n.task-visible p {\n  color: var(--color-text);\n  font-weight: bold;\n  font-size: 1.6rem;\n  margin-left: 1.2rem;\n}\n\n.task-visible svg {\n  height: 3rem;\n  width: 3rem;\n\n  margin-left: auto;\n\n  color: var(--light-gray);\n\n  cursor: pointer;\n}\n\n.task-description {\n  position: relative;\n  padding-top: 1rem;\n\n  border-bottom: 2px solid #272b30;\n}\n\n.task-description strong {\n  color: var(--color-text);\n}\n\n.task-description p {\n  margin-bottom: 1rem;\n  color: var(--light-gray);\n}\n\n.task-description svg {\n  position: absolute;\n\n  height: 2.4rem;\n  width: 2.4rem;\n\n  color: var(--light-gray);\n  right: 0;\n  bottom: 5%;\n\n  cursor: pointer;\n}\n/* ****************** */\n\n/* Hide scrollbar for Chrome, Safari and Opera */\n.tasks-container::-webkit-scrollbar {\n  display: none;\n}\n\n/* Hide scrollbar for IE, Edge and Firefox */\n.tasks-container {\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");


console.log("hello");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsY0FBYyxlQUFlLDJCQUEyQixHQUFHLFdBQVcsMEJBQTBCLHlCQUF5QiwwQkFBMEIsMEJBQTBCLHdCQUF3QixrQ0FBa0MsMkJBQTJCLG9EQUFvRCxHQUFHLFVBQVUscUJBQXFCLEdBQUcsVUFBVSx3Q0FBd0Msd0NBQXdDLDZCQUE2QixHQUFHLFVBQVUsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsb0JBQW9CLGlCQUFpQiwyREFBMkQsR0FBRyxnQkFBZ0Isa0JBQWtCLDJCQUEyQix3QkFBd0Isa0JBQWtCLGVBQWUsd0JBQXdCLHlDQUF5Qyx3Q0FBd0MsR0FBRyxvREFBb0Qsa0JBQWtCLDRCQUE0QixrQkFBa0IsbUJBQW1CLDJDQUEyQyxHQUFHLG1CQUFtQixxQkFBcUIsb0JBQW9CLGNBQWMsR0FBRyxjQUFjLDZCQUE2QixzQkFBc0Isc0JBQXNCLEdBQUcsK0VBQStFLHNCQUFzQiwrQkFBK0IsaURBQWlELEdBQUcsK0VBQStFLGtCQUFrQix3QkFBd0IsZ0JBQWdCLDBCQUEwQixHQUFHLDZCQUE2QixpQkFBaUIsZ0JBQWdCLCtCQUErQixzQkFBc0IsR0FBRyx1QkFBdUIsdUJBQXVCLEdBQUcseUJBQXlCLG9CQUFvQixzQkFBc0IsNEJBQTRCLCtCQUErQixHQUFHLDRCQUE0Qiw2QkFBNkIsc0JBQXNCLEdBQUcsMkZBQTJGLGdCQUFnQix5QkFBeUIsNEJBQTRCLEdBQUcsV0FBVyx1QkFBdUIsaUJBQWlCLEdBQUcseUJBQXlCLHVCQUF1QiwrQkFBK0IsbUJBQW1CLGdCQUFnQixpQkFBaUIsR0FBRyxrQkFBa0IsZ0JBQWdCLG9CQUFvQixrQ0FBa0Msd0NBQXdDLDBDQUEwQyxzQkFBc0IsK0JBQStCLHNCQUFzQiwwQ0FBMEMsR0FBRywwQkFBMEIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsY0FBYywwQ0FBMEMsb0JBQW9CLG9CQUFvQixzQ0FBc0MscUNBQXFDLEdBQUcsa0JBQWtCLGtCQUFrQix3QkFBd0IsY0FBYyxHQUFHLDJCQUEyQixpQkFBaUIsa0JBQWtCLG9CQUFvQixrQ0FBa0Msd0NBQXdDLHNCQUFzQiwwQ0FBMEMsNkJBQTZCLDBDQUEwQyxHQUFHLHFCQUFxQixzQkFBc0IsNkJBQTZCLEdBQUcscUJBQXFCLDRCQUE0QixpQkFBaUIsd0NBQXdDLHNCQUFzQixHQUFHLHFCQUFxQixzQkFBc0IsNkJBQTZCLEdBQUcsaUJBQWlCLDBCQUEwQix3Q0FBd0MsaUJBQWlCLHdCQUF3Qiw2QkFBNkIsc0JBQXNCLDBDQUEwQyxzQkFBc0IsR0FBRyw0Q0FBNEMsMEJBQTBCLEdBQUcsaUZBQWlGLGdCQUFnQix5QkFBeUIsb0JBQW9CLDJCQUEyQixjQUFjLHVCQUF1QixHQUFHLG1CQUFtQixrQkFBa0Isd0JBQXdCLEdBQUcsMEJBQTBCLG1CQUFtQixrQkFBa0Isb0NBQW9DLHdDQUF3QywwQ0FBMEMsc0JBQXNCLEdBQUcsdURBQXVELG1EQUFtRCxHQUFHLHFCQUFxQiw2QkFBNkIsc0JBQXNCLHNCQUFzQix3QkFBd0IsR0FBRyx1QkFBdUIsaUJBQWlCLGdCQUFnQix3QkFBd0IsK0JBQStCLHNCQUFzQixHQUFHLHVCQUF1Qix1QkFBdUIsc0JBQXNCLHVDQUF1QyxHQUFHLDhCQUE4Qiw2QkFBNkIsR0FBRyx5QkFBeUIsd0JBQXdCLDZCQUE2QixHQUFHLDJCQUEyQix1QkFBdUIscUJBQXFCLGtCQUFrQiwrQkFBK0IsYUFBYSxlQUFlLHNCQUFzQixHQUFHLHNIQUFzSCxrQkFBa0IsR0FBRyxxRUFBcUUsOEJBQThCLDRDQUE0QyxnQkFBZ0IsU0FBUyxvRkFBb0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxjQUFjLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxXQUFXLFdBQVcsYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxhQUFhLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssYUFBYSxZQUFZLFVBQVUsT0FBTyxZQUFZLE9BQU8sYUFBYSxjQUFjLGFBQWEsT0FBTyxhQUFhLGNBQWMsTUFBTSxVQUFVLFlBQVksWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxhQUFhLGFBQWEsTUFBTSxVQUFVLGFBQWEsYUFBYSxPQUFPLEtBQUssYUFBYSxXQUFXLE1BQU0sS0FBSyxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxZQUFZLGNBQWMsYUFBYSxjQUFjLGNBQWMsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLGFBQWEsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFlBQVksY0FBYyxZQUFZLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFlBQVksWUFBWSxhQUFhLGNBQWMsY0FBYyxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sYUFBYSxhQUFhLE1BQU0sVUFBVSxhQUFhLFdBQVcsWUFBWSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxXQUFXLFlBQVksY0FBYyxjQUFjLFdBQVcsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLGFBQWEsY0FBYyxXQUFXLE9BQU8sS0FBSyxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxhQUFhLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxVQUFVLE1BQU0sYUFBYSxhQUFhLE1BQU0sVUFBVSxNQUFNLFlBQVksTUFBTSx3QkFBd0IsdUJBQXVCLDZCQUE2QixjQUFjLGVBQWUsMkJBQTJCLEdBQUcsV0FBVywwQkFBMEIseUJBQXlCLDBCQUEwQiwwQkFBMEIsd0JBQXdCLGtDQUFrQywyQkFBMkIsb0RBQW9ELEdBQUcsVUFBVSxxQkFBcUIsR0FBRyxVQUFVLHdDQUF3Qyx3Q0FBd0MsNkJBQTZCLEdBQUcsVUFBVSxrQkFBa0Isd0JBQXdCLDRCQUE0QixvQkFBb0IsaUJBQWlCLDJEQUEyRCxHQUFHLGdCQUFnQixrQkFBa0IsMkJBQTJCLHdCQUF3QixrQkFBa0IsZUFBZSx3QkFBd0IseUNBQXlDLHdDQUF3QyxHQUFHLG9EQUFvRCxrQkFBa0IsNEJBQTRCLGtCQUFrQixtQkFBbUIsMkNBQTJDLEdBQUcsbUJBQW1CLHFCQUFxQixvQkFBb0IsY0FBYyxHQUFHLGNBQWMsNkJBQTZCLHNCQUFzQixzQkFBc0IsR0FBRywrRUFBK0Usc0JBQXNCLCtCQUErQixpREFBaUQsR0FBRywrRUFBK0Usa0JBQWtCLHdCQUF3QixnQkFBZ0IsMEJBQTBCLEdBQUcsNkJBQTZCLGlCQUFpQixnQkFBZ0IsK0JBQStCLHNCQUFzQixHQUFHLHVCQUF1Qix1QkFBdUIsR0FBRyx5QkFBeUIsb0JBQW9CLHNCQUFzQiw0QkFBNEIsK0JBQStCLEdBQUcsNEJBQTRCLDZCQUE2QixzQkFBc0IsR0FBRywyRkFBMkYsZ0JBQWdCLHlCQUF5Qiw0QkFBNEIsR0FBRyxXQUFXLHVCQUF1QixpQkFBaUIsR0FBRyx5QkFBeUIsdUJBQXVCLCtCQUErQixtQkFBbUIsZ0JBQWdCLGlCQUFpQixHQUFHLGtCQUFrQixnQkFBZ0Isb0JBQW9CLGtDQUFrQyx3Q0FBd0MsMENBQTBDLHNCQUFzQiwrQkFBK0Isc0JBQXNCLDBDQUEwQyxHQUFHLDBCQUEwQixrQkFBa0IsMkJBQTJCLDRCQUE0QixjQUFjLDBDQUEwQyxvQkFBb0Isb0JBQW9CLHNDQUFzQyxxQ0FBcUMsR0FBRyxrQkFBa0Isa0JBQWtCLHdCQUF3QixjQUFjLEdBQUcsMkJBQTJCLGlCQUFpQixrQkFBa0Isb0JBQW9CLGtDQUFrQyx3Q0FBd0Msc0JBQXNCLDBDQUEwQyw2QkFBNkIsMENBQTBDLEdBQUcscUJBQXFCLHNCQUFzQiw2QkFBNkIsR0FBRyxxQkFBcUIsNEJBQTRCLGlCQUFpQix3Q0FBd0Msc0JBQXNCLEdBQUcscUJBQXFCLHNCQUFzQiw2QkFBNkIsR0FBRyxpQkFBaUIsMEJBQTBCLHdDQUF3QyxpQkFBaUIsd0JBQXdCLDZCQUE2QixzQkFBc0IsMENBQTBDLHNCQUFzQixHQUFHLDRDQUE0QywwQkFBMEIsR0FBRyxpRkFBaUYsZ0JBQWdCLHlCQUF5QixvQkFBb0IsMkJBQTJCLGNBQWMsdUJBQXVCLEdBQUcsbUJBQW1CLGtCQUFrQix3QkFBd0IsR0FBRywwQkFBMEIsbUJBQW1CLGtCQUFrQixvQ0FBb0Msd0NBQXdDLDBDQUEwQyxzQkFBc0IsR0FBRyx1REFBdUQsbURBQW1ELEdBQUcscUJBQXFCLDZCQUE2QixzQkFBc0Isc0JBQXNCLHdCQUF3QixHQUFHLHVCQUF1QixpQkFBaUIsZ0JBQWdCLHdCQUF3QiwrQkFBK0Isc0JBQXNCLEdBQUcsdUJBQXVCLHVCQUF1QixzQkFBc0IsdUNBQXVDLEdBQUcsOEJBQThCLDZCQUE2QixHQUFHLHlCQUF5Qix3QkFBd0IsNkJBQTZCLEdBQUcsMkJBQTJCLHVCQUF1QixxQkFBcUIsa0JBQWtCLCtCQUErQixhQUFhLGVBQWUsc0JBQXNCLEdBQUcsc0hBQXNILGtCQUFrQixHQUFHLHFFQUFxRSw4QkFBOEIsNENBQTRDLGdCQUFnQixxQkFBcUI7QUFDanJhO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMEI7O0FBRTFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNvbG9yLWJsdWU6ICMyYmNlZmY7XFxuICAtLW1haW4tZ3JheTogIzNjNDI0YTtcXG4gIC0taW5wdXQtZ3JheTogIzI3MmIzMDtcXG4gIC0tbGlnaHQtZ3JheTogIzZiNzg4NTtcXG4gIC0tY29sb3ItdGV4dDogd2hpdGU7XFxuXFxuICAtLWdlbmVyYWwtZm9udC1zaXplOiAxLjRyZW07XFxuXFxuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcXG5cXG4gIC0tZGl2aWRlci1ib3JkZXI6IDEuNXB4IHNvbGlkIHJnYigzNCwgMzEsIDMxKTtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZ2VuZXJhbC1mb250LXNpemUpO1xcblxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG5cXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2JjZWFmOCwgIzgyZGVmYSk7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgaGVpZ2h0OiA3MCU7XFxuICB3aWR0aDogMzAlO1xcblxcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWdyYXkpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi8qIE5hdmlnYXRpb24gU3R5bGluZyAqL1xcblxcbi5kYXktbmF2LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMi40cmVtO1xcblxcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tZGl2aWRlci1ib3JkZXIpO1xcbn1cXG5cXG4uZGF5LW5hdi1saXN0IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cmVtO1xcbn1cXG5cXG4uZGF5LWJ0biB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxuXFxuICBwYWRkaW5nOiAwLjRyZW07XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEFkZCB3aXRoIEpTIHdoZW4gdXNlciBjbGljayBvbiBuYXYgbGluayAqL1xcbi5vbi1ob3ZlcixcXG4uZGF5LWJ0bjpob3ZlciB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcXG5cXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1jb2xvci1ibHVlKTtcXG59XFxuXFxuLyogKioqKioqKioqKioqKioqKioqICovXFxuXFxuLyogRGF5LURhdGUgU3R5bGluZyAqL1xcblxcbi5kYXktZGF0ZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIuNHJlbTtcXG5cXG4gIHBhZGRpbmctYmxvY2s6IDVyZW07XFxufVxcblxcbi5kYXktZGF0ZS1jb250YWluZXIgc3ZnIHtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiAzcmVtO1xcblxcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGF5LWRhdGUtZGlzcGxheSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kYXktZGF0ZS1kaXNwbGF5IHAge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxuXFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XFxufVxcblxcbi5kYXktZGF0ZS1kaXNwbGF5IHNwYW4ge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qICoqKioqKioqKioqKioqKioqKiAqL1xcblxcbi8qIElucHV0IFRhc2sgQ29udGFpbmVyIFN0eWxpbmcgKi9cXG4uaW5wdXQtdGFzay1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWlubGluZTogNnJlbTtcXG5cXG4gIG1hcmdpbi1ib3R0b206IDEuOHJlbTtcXG59XFxuXFxuLmZvcm0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHN2ZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4uaW5wdXQtc3R5bGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiB2YXIoLS1kaXZpZGVyLWJvcmRlcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG5cXG4gIGZvbnQtc2l6ZTogdmFyKC0tZ2VuZXJhbC1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XFxuXFxuICBwYWRkaW5nOiAwLjhyZW07XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1ncmF5KTtcXG59XFxuXFxuLnRhc2stc3BlYy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlucHV0LWdyYXkpO1xcblxcbiAgaGVpZ2h0OiAzNHJlbTtcXG5cXG4gIHBhZGRpbmc6IDJyZW07XFxuXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5pbnB1dC1maWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG5cXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogdmFyKC0tZGl2aWRlci1ib3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuXFxuICBwYWRkaW5nOiAwLjhyZW07XFxuXFxuICBmb250LXNpemU6IHZhcigtLWdlbmVyYWwtZm9udC1zaXplKTtcXG4gIGNvbG9yOiB2YXIoLS1pbnB1dC1ncmF5KTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xcbn1cXG5cXG4uZHVlLWRhdGUgbGFiZWwge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XFxufVxcblxcbi5kdWUtZGF0ZSBpbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcblxcbiAgcGFkZGluZzogMC40cmVtO1xcbn1cXG5cXG4ucHJpb3JpdHkgbGFiZWwge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XFxufVxcblxcbi5idG4tc3VibWl0IHtcXG4gIHBhZGRpbmctYmxvY2s6IDAuOHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUpO1xcbiAgYm9yZGVyOiBub25lO1xcblxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBjb2xvcjogdmFyKC0taW5wdXQtZ3JheSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuLXN1Ym1pdDpob3ZlcixcXG4uYnRuLXN1Ym1pdDphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSg5OCUpO1xcbn1cXG5cXG4vKiAqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4vKiBUYXNrcyBDb250YWluZXIgU3R5bGluZyAqL1xcbi50YXNrcy1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWlubGluZTogNnJlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcblxcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLnRhc2stdmlzaWJsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stdmlzaWJsZSBidXR0b24ge1xcbiAgaGVpZ2h0OiAxLjZyZW07XFxuICB3aWR0aDogMS42cmVtO1xcblxcbiAgYm9yZGVyOiB2YXIoLS1kaXZpZGVyLWJvcmRlcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBBZGQgd2l0aCBKUyB3aGVuIHVzZXIgY2xpY2sgYnRuICovXFxuLmNoZWNrLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4udGFzay12aXNpYmxlIHAge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxLjJyZW07XFxufVxcblxcbi50YXNrLXZpc2libGUgc3ZnIHtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiAzcmVtO1xcblxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuXFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcblxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyNzJiMzA7XFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9uIHN0cm9uZyB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9uIHAge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb24gc3ZnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG4gIGhlaWdodDogMi40cmVtO1xcbiAgd2lkdGg6IDIuNHJlbTtcXG5cXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiA1JTtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLyogKioqKioqKioqKioqKioqKioqICovXFxuXFxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xcbi50YXNrcy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xcbi50YXNrcy1jb250YWluZXIge1xcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwi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RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUEsdUJBQXVCOztBQUV2Qiw0QkFBNEI7QUFDNUI7RUFDRSxXQUFXO0VBQ1gsb0JBQW9COztFQUVwQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7O0VBRVQsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhOztFQUViLDZCQUE2QjtFQUM3QixtQ0FBbUM7O0VBRW5DLG1DQUFtQzs7RUFFbkMsZUFBZTtBQUNqQjs7QUFFQSxvQ0FBb0M7QUFDcEM7RUFDRSw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVzs7RUFFWCxpQkFBaUI7O0VBRWpCLHdCQUF3Qjs7RUFFeEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7O0VBRWpCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQkFBa0I7O0VBRWxCLGNBQWM7RUFDZCxhQUFhOztFQUViLHdCQUF3QjtFQUN4QixRQUFRO0VBQ1IsVUFBVTs7RUFFVixlQUFlO0FBQ2pCO0FBQ0EsdUJBQXVCOztBQUV2QixnREFBZ0Q7QUFDaEQ7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsNENBQTRDO0FBQzVDO0VBQ0Usd0JBQXdCLEVBQUUsZ0JBQWdCO0VBQzFDLHFCQUFxQixFQUFFLFlBQVk7QUFDckNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1jb2xvci1ibHVlOiAjMmJjZWZmO1xcbiAgLS1tYWluLWdyYXk6ICMzYzQyNGE7XFxuICAtLWlucHV0LWdyYXk6ICMyNzJiMzA7XFxuICAtLWxpZ2h0LWdyYXk6ICM2Yjc4ODU7XFxuICAtLWNvbG9yLXRleHQ6IHdoaXRlO1xcblxcbiAgLS1nZW5lcmFsLWZvbnQtc2l6ZTogMS40cmVtO1xcblxcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XFxuXFxuICAtLWRpdmlkZXItYm9yZGVyOiAxLjVweCBzb2xpZCByZ2IoMzQsIDMxLCAzMSk7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IHZhcigtLWdlbmVyYWwtZm9udC1zaXplKTtcXG5cXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNiY2VhZjgsICM4MmRlZmEpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGhlaWdodDogNzAlO1xcbiAgd2lkdGg6IDMwJTtcXG5cXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1ncmF5KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4vKiBOYXZpZ2F0aW9uIFN0eWxpbmcgKi9cXG5cXG4uZGF5LW5hdi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIuNHJlbTtcXG5cXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWRpdmlkZXItYm9yZGVyKTtcXG59XFxuXFxuLmRheS1uYXYtbGlzdCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXJlbTtcXG59XFxuXFxuLmRheS1idG4ge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcblxcbiAgcGFkZGluZzogMC40cmVtO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBBZGQgd2l0aCBKUyB3aGVuIHVzZXIgY2xpY2sgb24gbmF2IGxpbmsgKi9cXG4ub24taG92ZXIsXFxuLmRheS1idG46aG92ZXIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XFxuXFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tY29sb3ItYmx1ZSk7XFxufVxcblxcbi8qICoqKioqKioqKioqKioqKioqKiAqL1xcblxcbi8qIERheS1EYXRlIFN0eWxpbmcgKi9cXG5cXG4uZGF5LWRhdGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyLjRyZW07XFxuXFxuICBwYWRkaW5nLWJsb2NrOiA1cmVtO1xcbn1cXG5cXG4uZGF5LWRhdGUtY29udGFpbmVyIHN2ZyB7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogM3JlbTtcXG5cXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRheS1kYXRlLWRpc3BsYXkge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGF5LWRhdGUtZGlzcGxheSBwIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcblxcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xcbn1cXG5cXG4uZGF5LWRhdGUtZGlzcGxheSBzcGFuIHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiAqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4vKiBJbnB1dCBUYXNrIENvbnRhaW5lciBTdHlsaW5nICovXFxuLmlucHV0LXRhc2stY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1pbmxpbmU6IDZyZW07XFxuXFxuICBtYXJnaW4tYm90dG9tOiAxLjhyZW07XFxufVxcblxcbi5mb3JtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBzdmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLmlucHV0LXN0eWxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogdmFyKC0tZGl2aWRlci1ib3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuXFxuICBmb250LXNpemU6IHZhcigtLWdlbmVyYWwtZm9udC1zaXplKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xcblxcbiAgcGFkZGluZzogMC44cmVtO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXQtZ3JheSk7XFxufVxcblxcbi50YXNrLXNwZWMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1ncmF5KTtcXG5cXG4gIGhlaWdodDogMzRyZW07XFxuXFxuICBwYWRkaW5nOiAycmVtO1xcblxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uaW5wdXQtZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5kZXNjcmlwdGlvbiB0ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuXFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IHZhcigtLWRpdmlkZXItYm9yZGVyKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcblxcbiAgcGFkZGluZzogMC44cmVtO1xcblxcbiAgZm9udC1zaXplOiB2YXIoLS1nZW5lcmFsLWZvbnQtc2l6ZSk7XFxuICBjb2xvcjogdmFyKC0taW5wdXQtZ3JheSk7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcXG59XFxuXFxuLmR1ZS1kYXRlIGxhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xcbn1cXG5cXG4uZHVlLWRhdGUgaW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG5cXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG59XFxuXFxuLnByaW9yaXR5IGxhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xcbn1cXG5cXG4uYnRuLXN1Ym1pdCB7XFxuICBwYWRkaW5nLWJsb2NrOiAwLjhyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcXG4gIGJvcmRlcjogbm9uZTtcXG5cXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgY29sb3I6IHZhcigtLWlucHV0LWdyYXkpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bi1zdWJtaXQ6aG92ZXIsXFxuLmJ0bi1zdWJtaXQ6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoOTglKTtcXG59XFxuXFxuLyogKioqKioqKioqKioqKioqKioqICovXFxuXFxuLyogVGFza3MgQ29udGFpbmVyIFN0eWxpbmcgKi9cXG4udGFza3MtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1pbmxpbmU6IDZyZW07XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG5cXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi50YXNrLXZpc2libGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLXZpc2libGUgYnV0dG9uIHtcXG4gIGhlaWdodDogMS42cmVtO1xcbiAgd2lkdGg6IDEuNnJlbTtcXG5cXG4gIGJvcmRlcjogdmFyKC0tZGl2aWRlci1ib3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogQWRkIHdpdGggSlMgd2hlbiB1c2VyIGNsaWNrIGJ0biAqL1xcbi5jaGVjay1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZSkgIWltcG9ydGFudDtcXG59XFxuXFxuLnRhc2stdmlzaWJsZSBwIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBtYXJnaW4tbGVmdDogMS4ycmVtO1xcbn1cXG5cXG4udGFzay12aXNpYmxlIHN2ZyB7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogM3JlbTtcXG5cXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcblxcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG5cXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjcyYjMwO1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbiBzdHJvbmcge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbiBwIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9uIHN2ZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICBoZWlnaHQ6IDIuNHJlbTtcXG4gIHdpZHRoOiAyLjRyZW07XFxuXFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogNSU7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi8qICoqKioqKioqKioqKioqKioqKiAqL1xcblxcbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cXG4udGFza3MtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cXG4udGFza3MtY29udGFpbmVyIHtcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuLi9jc3Mvc3R5bGUuY3NzXCI7XG5cbmNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=