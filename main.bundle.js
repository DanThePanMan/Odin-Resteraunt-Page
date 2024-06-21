"use strict";
(self["webpackChunkodin_resteraunt_page"] = self["webpackChunkodin_resteraunt_page"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../node_modules/geist/dist/fonts/geist-sans/Geist-Medium.ttf */ "./node_modules/geist/dist/fonts/geist-sans/Geist-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/heroBG.jpg */ "./src/assets/heroBG.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --background: #f0f6f7;
    --light-accent: #E6887E;
    --dark-accent: #cd765d;
    --highlight: #E3483E;
    --dark: #2A1B2E;
}

@font-face {
    font-family: Geist;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});

}

body{
  font-family: 'Geist','roboto-mono', monospace;
}

.content{
  background-color: var(--background);
}

.header{
    display: flex;
    flex-direction: row;
    background-color: var(--highlight);
    padding: 0 20vw 0 20vw ;
}

.brand{
    padding: 24px;
    width: max-content;
    flex-grow: 1;
    font-size: 20px;
    font-weight: 200;
    color: var(--background);
    font-family:'Geist','roboto-mono', monospace;
}


.header nav{
    padding: 12px;
    display: flex;
    flex-direction: row;
    gap: 12px;
    justify-content: flex-end;
    width: 40vw;
}

#button{
    transition: 150ms ease-in-out;
    background-color: var(--highlight);
    font-family: 'Geist','roboto-mono', monospace;
    color: var(--background);
    font-size: 15px;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
}

#button:hover{
    transition: 150ms ease-in-out;
    background-color: var(--dark-accent);
}

.content{
  display: flex;
  flex-direction: column;
  align-items: center;

}

/* home section */

.hero{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background);
  height: 85vh;
  width: 100%;
  padding: 8rem;

}

.background{
  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  width: 50vw;
  height: 60vh;
  background-size: cover;
  resize: both;
  color: var(--background);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 6px;
  font-size: 1.3em;
  padding: 2rem;
}

h1{
  font-weight: bold;
}

.message{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--dark);
  height: fit-content;
  width: 100%;
  padding: 8rem;
}

.messageInner{
  width: 48vw;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.messageTitle{
  color: var(--highlight);
  font-weight: 500;
}

.messageText{
  color: var(--background);
  font-size: 18px;
  line-height: 28px;
}



/* menu section */
.menuBG{
  background-color: var(--highlight);
  width: 30vw;
  margin: 12rem;
  padding: 7rem 0rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 52px;
  align-items: center;
  justify-content: center;
}

.menuTitle{
  font-weight: bold;
  color: var(--background);
  font-size: 32px;
}

.menuList{
  display: flex;
  flex-direction: column;
  gap: 48px;
  font-size: large;
  color: var(--background);
}



/* about section */

.top{
  background-color: var(--background);
  width: 48rem;
  height: 30vh;
  margin: 12rem 0 12rem 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.aboutMessage{
  font-size: 18px;
}

.bottom{
  width: 100%;
  background-color: var(--dark);
  display: flex;
  align-items: center;
  justify-content: center;
}

.bottomInner{
  width: 48rem;
  margin: 12rem 0 12rem 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: var(--background);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hnf{
  font-size: 24px;
}




/* css reset */
/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
    box-sizing: border-box;
  }
  /*
    2. Remove default margin
  */
  * {
    margin: 0;
  }
  /*
    Typographic tweaks!
    3. Add accessible line-height
    4. Improve text rendering
  */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  /*
    5. Improve media defaults
  */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  /*
    6. Remove built-in form typography styles
  */
  input, button, textarea, select {
    font: inherit;
  }
  /*
    7. Avoid text overflows
  */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  /*
    8. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;
  }`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,uBAAuB;IACvB,sBAAsB;IACtB,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,4CAAwE;;AAE5E;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,mCAAmC;AACrC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kCAAkC;IAClC,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,wBAAwB;IACxB,4CAA4C;AAChD;;;AAGA;IACI,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,yBAAyB;IACzB,WAAW;AACf;;AAEA;IACI,6BAA6B;IAC7B,kCAAkC;IAClC,6CAA6C;IAC7C,wBAAwB;IACxB,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;IAC7B,oCAAoC;AACxC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;;AAErB;;AAEA,iBAAiB;;AAEjB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,mCAAmC;EACnC,YAAY;EACZ,WAAW;EACX,aAAa;;AAEf;;AAEA;EACE,mDAAsC;EACtC,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,YAAY;EACZ,wBAAwB;EACxB,aAAa;EACb,2BAA2B;EAC3B,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;EAC7B,mBAAmB;EACnB,WAAW;EACX,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;EACxB,eAAe;EACf,iBAAiB;AACnB;;;;AAIA,iBAAiB;AACjB;EACE,kCAAkC;EAClC,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,gBAAgB;EAChB,wBAAwB;AAC1B;;;;AAIA,kBAAkB;;AAElB;EACE,mCAAmC;EACnC,YAAY;EACZ,YAAY;EACZ,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,6BAA6B;EAC7B,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,wBAAwB;EACxB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;;;;AAKA,cAAc;AACd;;CAEC;AACD;IACI,sBAAsB;EACxB;EACA;;GAEC;EACD;IACE,SAAS;EACX;EACA;;;;GAIC;EACD;IACE,gBAAgB;IAChB,mCAAmC;EACrC;EACA;;GAEC;EACD;IACE,cAAc;IACd,eAAe;EACjB;EACA;;GAEC;EACD;IACE,aAAa;EACf;EACA;;GAEC;EACD;IACE,yBAAyB;EAC3B;EACA;;GAEC;EACD;IACE,kBAAkB;EACpB","sourcesContent":[":root{\n    --background: #f0f6f7;\n    --light-accent: #E6887E;\n    --dark-accent: #cd765d;\n    --highlight: #E3483E;\n    --dark: #2A1B2E;\n}\n\n@font-face {\n    font-family: Geist;\n    src: url('../node_modules/geist/dist/fonts/geist-sans/Geist-Medium.ttf');\n\n}\n\nbody{\n  font-family: 'Geist','roboto-mono', monospace;\n}\n\n.content{\n  background-color: var(--background);\n}\n\n.header{\n    display: flex;\n    flex-direction: row;\n    background-color: var(--highlight);\n    padding: 0 20vw 0 20vw ;\n}\n\n.brand{\n    padding: 24px;\n    width: max-content;\n    flex-grow: 1;\n    font-size: 20px;\n    font-weight: 200;\n    color: var(--background);\n    font-family:'Geist','roboto-mono', monospace;\n}\n\n\n.header nav{\n    padding: 12px;\n    display: flex;\n    flex-direction: row;\n    gap: 12px;\n    justify-content: flex-end;\n    width: 40vw;\n}\n\n#button{\n    transition: 150ms ease-in-out;\n    background-color: var(--highlight);\n    font-family: 'Geist','roboto-mono', monospace;\n    color: var(--background);\n    font-size: 15px;\n    padding: 12px 24px;\n    border: none;\n    border-radius: 4px;\n}\n\n#button:hover{\n    transition: 150ms ease-in-out;\n    background-color: var(--dark-accent);\n}\n\n.content{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n}\n\n/* home section */\n\n.hero{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--background);\n  height: 85vh;\n  width: 100%;\n  padding: 8rem;\n\n}\n\n.background{\n  background: url(\"./assets/heroBG.jpg\");\n  width: 50vw;\n  height: 60vh;\n  background-size: cover;\n  resize: both;\n  color: var(--background);\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  border-radius: 6px;\n  font-size: 1.3em;\n  padding: 2rem;\n}\n\nh1{\n  font-weight: bold;\n}\n\n.message{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--dark);\n  height: fit-content;\n  width: 100%;\n  padding: 8rem;\n}\n\n.messageInner{\n  width: 48vw;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n.messageTitle{\n  color: var(--highlight);\n  font-weight: 500;\n}\n\n.messageText{\n  color: var(--background);\n  font-size: 18px;\n  line-height: 28px;\n}\n\n\n\n/* menu section */\n.menuBG{\n  background-color: var(--highlight);\n  width: 30vw;\n  margin: 12rem;\n  padding: 7rem 0rem;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 52px;\n  align-items: center;\n  justify-content: center;\n}\n\n.menuTitle{\n  font-weight: bold;\n  color: var(--background);\n  font-size: 32px;\n}\n\n.menuList{\n  display: flex;\n  flex-direction: column;\n  gap: 48px;\n  font-size: large;\n  color: var(--background);\n}\n\n\n\n/* about section */\n\n.top{\n  background-color: var(--background);\n  width: 48rem;\n  height: 30vh;\n  margin: 12rem 0 12rem 0;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n.aboutMessage{\n  font-size: 18px;\n}\n\n.bottom{\n  width: 100%;\n  background-color: var(--dark);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.bottomInner{\n  width: 48rem;\n  margin: 12rem 0 12rem 0;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  color: var(--background);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.hnf{\n  font-size: 24px;\n}\n\n\n\n\n/* css reset */\n/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*, *::before, *::after {\n    box-sizing: border-box;\n  }\n  /*\n    2. Remove default margin\n  */\n  * {\n    margin: 0;\n  }\n  /*\n    Typographic tweaks!\n    3. Add accessible line-height\n    4. Improve text rendering\n  */\n  body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n  }\n  /*\n    5. Improve media defaults\n  */\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n  }\n  /*\n    6. Remove built-in form typography styles\n  */\n  input, button, textarea, select {\n    font: inherit;\n  }\n  /*\n    7. Avoid text overflows\n  */\n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n  /*\n    8. Create a root stacking context\n  */\n  #root, #__next {\n    isolation: isolate;\n  }"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Home */ "./src/pages/Home.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about */ "./src/pages/about.js");






//getting queryselecting the 3 buttons and add event listener
const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const about = document.querySelector(".about")
;(0,_pages_Home__WEBPACK_IMPORTED_MODULE_1__["default"])();


home.addEventListener("click", () => {(0,_pages_Home__WEBPACK_IMPORTED_MODULE_1__["default"])()})
menu.addEventListener("click", () => {;(0,_pages_menu__WEBPACK_IMPORTED_MODULE_2__.displayMenu)()})
about.addEventListener("click", () => {;(0,_pages_about__WEBPACK_IMPORTED_MODULE_3__.displayAbout)()})


/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function displayHomePage() {
    const body = document.querySelector(".content");
    body.innerHTML = ""
    const hero = document.createElement("div");
    hero.classList.add("hero");

    //making the bg inner element
    const bg = document.createElement("div");
    bg.classList.add("background");
    hero.appendChild(bg);

    //making the h1 inner element heroText
    const heroText = document.createElement("h1");
    heroText.classList.add("heroText");
    heroText.textContent = "Freshly Made According To Your Needs";
    bg.appendChild(heroText);

    body.innerHTML = "";
    body.appendChild(hero);

    //for 2nd half
    const message = document.createElement("div");
    message.classList.add("message");

    //inner section
    const messageInner = document.createElement("div");
    messageInner.classList.add("messageInner");
    message.appendChild(messageInner);

    //message content
    const messageTitle = document.createElement("h1");
    const messageText = document.createElement("div");

    messageTitle.classList.add("messageTitle");
    messageText.classList.add("messageText");

    messageTitle.textContent = "A message to ur customers: ";
    messageText.textContent =
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus modi sint dolorem similique quiaratione architecto aut praesentium, ipsum aspernaturobcaecati recusandae, saepe natus? Laudantium quaeratcum fugiat autem doloremque.oremLorem ipsum dolor, sitamet consectetur adipisicing elit. Repellendus modi sintdolorem similique quia ratione architecto autpraesentium, ipsum aspernatur obcaecati recusandae,saepe natus? Laudantium quaerat cum fugiat autemdoloremque.oremLorem ipsum dolor, sit amet consecteturadipisicing elit. Repellendus modi sint doloremsimilique quia ratione architecto aut praesentium, ipsumaspernatur obcaecati recusandae, saepe natus? Laudantiumquaerat cum fugiat autem doloremque.oremLorem ipsumdolor, sit amet consectetur adipisicing elit.Repellendus modi sint dolorem similique quia rationearchitecto aut praesentium, ipsum aspernatur obcaecatirecusandae, saepe natus? Laudantium quaerat cum fugiatautem doloremque.orem";
    messageInner.appendChild(messageTitle);
    messageInner.appendChild(messageText);

    body.appendChild(message);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHomePage);


/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayAbout: () => (/* binding */ displayAbout)
/* harmony export */ });
function displayAbout() {
    const body = document.querySelector(".content");
    body.innerHTML = "";

    //making top
    const top = document.createElement("div");
    top.classList.add("top");
    //adding top content
    const aboutTitle = document.createElement("h1");
    const aboutMessage = document.createElement("p");
    aboutTitle.classList.add("aboutTitle");
    aboutMessage.classList.add("aboutMessage");
    aboutTitle.textContent = "About Us";
    aboutMessage.textContent =
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus modi sint dolorem similique quiaratione architecto aut praesentium, ipsum aspernaturobcaecati recusandae, saepe natus? Laudantium quaeratcum fugiat autem doloremque.oremLorem ipsum dolor, sitamet consectetur adipisicing elit. Repellendus modi sintdolorem similique quia ratione architecto autpraesentium, ipsum aspernatur obcaecati recusandae,saepe natus? Laudantium quaerat cum fugiat autemdoloremque.oremLorem ipsum dolor, sit amet consecteturadipisicing elit. Repellendus modi sint doloremsimilique quia ratione architecto aut praesentium, ipsumaspernatur obcaecati recusandae, saepe natus? Laudantiumquaerat cum fugiat autem doloremque.oremLorem ipsumdolor, sit amet consectetur adipisicing elit.Repellendus modi sint dolorem similique quia rationearchitecto aut praesentium, ipsum aspernatur obcaecatirecusandae, saepe natus? Laudantium quaerat cum fugiatautem doloremque.orem";
    top.appendChild(aboutTitle);
    top.appendChild(aboutMessage);

    //bottom
    const bottom = document.createElement("div");
    bottom.classList.add("bottom");

    //inner
    const bottomInner = document.createElement("div");
    bottomInner.classList.add("bottomInner");
    bottom.appendChild(bottomInner);

    const hours = document.createElement("p");
    const phone = document.createElement("p");
    hours.classList.add("hnf");
    phone.classList.add("hnf");
    hours.textContent = "3:30pm - 9:30pm";
    phone.textContent = "Call us at (111)-222-3333";

    bottomInner.appendChild(hours);
    bottomInner.appendChild(phone);

    body.appendChild(top);
    body.appendChild(bottom);
}




/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayMenu: () => (/* binding */ displayMenu)
/* harmony export */ });
function displayMenu() {
    const listOfItems = [
        "Fish and Chips --- $19.99",
        "Signature Roasted Chicken --- $24.99",
        "Cheeseburger --- 19.99",
        "Cesar Salad --- 14.99",
        "Sweet BBQ Ribs --- 24.99",
        "Baked Potatos -- 8.99",
    ];
    const body = document.querySelector(".content");
    body.innerHTML = "";

    //making menu background
    const menuBG = document.createElement("div");
    menuBG.classList.add("menuBG");

    //making title and list
    const menuTitle = document.createElement("h1");
    const menuList = document.createElement("ul");
    menuTitle.classList.add("menuTitle");
    menuTitle.textContent = "Menu";
    menuList.classList.add("menuList");

    //attach menu to bg
    menuBG.appendChild(menuTitle);
    menuBG.appendChild(menuList);

    //making menu items:
    for (let i = 0; i < listOfItems.length; i++) {
        const menuItem = document.createElement("li");
        menuItem.classList.add("menuItem");
        menuItem.textContent = listOfItems[i];
        menuList.appendChild(menuItem);
    }

    body.appendChild(menuBG);
}




/***/ }),

/***/ "./node_modules/geist/dist/fonts/geist-sans/Geist-Medium.ttf":
/*!*******************************************************************!*\
  !*** ./node_modules/geist/dist/fonts/geist-sans/Geist-Medium.ttf ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3336ccd498f29c0bcbbd.ttf";

/***/ }),

/***/ "./src/assets/heroBG.jpg":
/*!*******************************!*\
  !*** ./src/assets/heroBG.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c6eebd0edd55ca924ed7.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGdNQUErRTtBQUMzSCw0Q0FBNEMsbUhBQXNDO0FBQ2xGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DOztBQUVsRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFL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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzdDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRXdCOzs7Ozs7Ozs7Ozs7Ozs7QUN6Q3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RlcmF1bnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0ZXJhdW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGVyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RlcmF1bnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGVyYXVudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tcmVzdGVyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGVyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RlcmF1bnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RlcmF1bnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RlcmF1bnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGVyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0ZXJhdW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0ZXJhdW50LXBhZ2UvLi9zcmMvcGFnZXMvSG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RlcmF1bnQtcGFnZS8uL3NyYy9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RlcmF1bnQtcGFnZS8uL3NyYy9wYWdlcy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9ub2RlX21vZHVsZXMvZ2Vpc3QvZGlzdC9mb250cy9nZWlzdC1zYW5zL0dlaXN0LU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9oZXJvQkcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3R7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjBmNmY3O1xuICAgIC0tbGlnaHQtYWNjZW50OiAjRTY4ODdFO1xuICAgIC0tZGFyay1hY2NlbnQ6ICNjZDc2NWQ7XG4gICAgLS1oaWdobGlnaHQ6ICNFMzQ4M0U7XG4gICAgLS1kYXJrOiAjMkExQjJFO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogR2Vpc3Q7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG5cbn1cblxuYm9keXtcbiAgZm9udC1mYW1pbHk6ICdHZWlzdCcsJ3JvYm90by1tb25vJywgbW9ub3NwYWNlO1xufVxuXG4uY29udGVudHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG59XG5cbi5oZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2hsaWdodCk7XG4gICAgcGFkZGluZzogMCAyMHZ3IDAgMjB2dyA7XG59XG5cbi5icmFuZHtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICAgIGZvbnQtZmFtaWx5OidHZWlzdCcsJ3JvYm90by1tb25vJywgbW9ub3NwYWNlO1xufVxuXG5cbi5oZWFkZXIgbmF2e1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogMTJweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHdpZHRoOiA0MHZ3O1xufVxuXG4jYnV0dG9ue1xuICAgIHRyYW5zaXRpb246IDE1MG1zIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2hsaWdodCk7XG4gICAgZm9udC1mYW1pbHk6ICdHZWlzdCcsJ3JvYm90by1tb25vJywgbW9ub3NwYWNlO1xuICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbiNidXR0b246aG92ZXJ7XG4gICAgdHJhbnNpdGlvbjogMTUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1hY2NlbnQpO1xufVxuXG4uY29udGVudHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxufVxuXG4vKiBob21lIHNlY3Rpb24gKi9cblxuLmhlcm97XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICBoZWlnaHQ6IDg1dmg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4cmVtO1xuXG59XG5cbi5iYWNrZ3JvdW5ke1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIHdpZHRoOiA1MHZ3O1xuICBoZWlnaHQ6IDYwdmg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHJlc2l6ZTogYm90aDtcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbmgxe1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1lc3NhZ2V7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogOHJlbTtcbn1cblxuLm1lc3NhZ2VJbm5lcntcbiAgd2lkdGg6IDQ4dnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjRweDtcbn1cblxuLm1lc3NhZ2VUaXRsZXtcbiAgY29sb3I6IHZhcigtLWhpZ2hsaWdodCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tZXNzYWdlVGV4dHtcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuXG5cblxuLyogbWVudSBzZWN0aW9uICovXG4ubWVudUJHe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdobGlnaHQpO1xuICB3aWR0aDogMzB2dztcbiAgbWFyZ2luOiAxMnJlbTtcbiAgcGFkZGluZzogN3JlbSAwcmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tZW51VGl0bGV7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLm1lbnVMaXN0e1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbn1cblxuXG5cbi8qIGFib3V0IHNlY3Rpb24gKi9cblxuLnRvcHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG4gIHdpZHRoOiA0OHJlbTtcbiAgaGVpZ2h0OiAzMHZoO1xuICBtYXJnaW46IDEycmVtIDAgMTJyZW0gMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyNHB4O1xufVxuXG4uYWJvdXRNZXNzYWdle1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5ib3R0b217XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ib3R0b21Jbm5lcntcbiAgd2lkdGg6IDQ4cmVtO1xuICBtYXJnaW46IDEycmVtIDAgMTJyZW0gMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyNHB4O1xuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5obmZ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuXG5cblxuLyogY3NzIHJlc2V0ICovXG4vKlxuICAxLiBVc2UgYSBtb3JlLWludHVpdGl2ZSBib3gtc2l6aW5nIG1vZGVsLlxuKi9cbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgLypcbiAgICAyLiBSZW1vdmUgZGVmYXVsdCBtYXJnaW5cbiAgKi9cbiAgKiB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC8qXG4gICAgVHlwb2dyYXBoaWMgdHdlYWtzIVxuICAgIDMuIEFkZCBhY2Nlc3NpYmxlIGxpbmUtaGVpZ2h0XG4gICAgNC4gSW1wcm92ZSB0ZXh0IHJlbmRlcmluZ1xuICAqL1xuICBib2R5IHtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICB9XG4gIC8qXG4gICAgNS4gSW1wcm92ZSBtZWRpYSBkZWZhdWx0c1xuICAqL1xuICBpbWcsIHBpY3R1cmUsIHZpZGVvLCBjYW52YXMsIHN2ZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG4gIC8qXG4gICAgNi4gUmVtb3ZlIGJ1aWx0LWluIGZvcm0gdHlwb2dyYXBoeSBzdHlsZXNcbiAgKi9cbiAgaW5wdXQsIGJ1dHRvbiwgdGV4dGFyZWEsIHNlbGVjdCB7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgfVxuICAvKlxuICAgIDcuIEF2b2lkIHRleHQgb3ZlcmZsb3dzXG4gICovXG4gIHAsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIH1cbiAgLypcbiAgICA4LiBDcmVhdGUgYSByb290IHN0YWNraW5nIGNvbnRleHRcbiAgKi9cbiAgI3Jvb3QsICNfX25leHQge1xuICAgIGlzb2xhdGlvbjogaXNvbGF0ZTtcbiAgfWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDRDQUF3RTs7QUFFNUU7O0FBRUE7RUFDRSw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtDQUFrQztJQUNsQyx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4Qiw0Q0FBNEM7QUFDaEQ7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isa0NBQWtDO0lBQ2xDLDZDQUE2QztJQUM3Qyx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLG9DQUFvQztBQUN4Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1COztBQUVyQjs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTs7QUFFZjs7QUFFQTtFQUNFLG1EQUFzQztFQUN0QyxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COzs7O0FBSUEsaUJBQWlCO0FBQ2pCO0VBQ0Usa0NBQWtDO0VBQ2xDLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQUMxQjs7OztBQUlBLGtCQUFrQjs7QUFFbEI7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1Qsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7Ozs7QUFLQSxjQUFjO0FBQ2Q7O0NBRUM7QUFDRDtJQUNJLHNCQUFzQjtFQUN4QjtFQUNBOztHQUVDO0VBQ0Q7SUFDRSxTQUFTO0VBQ1g7RUFDQTs7OztHQUlDO0VBQ0Q7SUFDRSxnQkFBZ0I7SUFDaEIsbUNBQW1DO0VBQ3JDO0VBQ0E7O0dBRUM7RUFDRDtJQUNFLGNBQWM7SUFDZCxlQUFlO0VBQ2pCO0VBQ0E7O0dBRUM7RUFDRDtJQUNFLGFBQWE7RUFDZjtFQUNBOztHQUVDO0VBQ0Q7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTs7R0FFQztFQUNEO0lBQ0Usa0JBQWtCO0VBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLWJhY2tncm91bmQ6ICNmMGY2Zjc7XFxuICAgIC0tbGlnaHQtYWNjZW50OiAjRTY4ODdFO1xcbiAgICAtLWRhcmstYWNjZW50OiAjY2Q3NjVkO1xcbiAgICAtLWhpZ2hsaWdodDogI0UzNDgzRTtcXG4gICAgLS1kYXJrOiAjMkExQjJFO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IEdlaXN0O1xcbiAgICBzcmM6IHVybCgnLi4vbm9kZV9tb2R1bGVzL2dlaXN0L2Rpc3QvZm9udHMvZ2Vpc3Qtc2Fucy9HZWlzdC1NZWRpdW0udHRmJyk7XFxuXFxufVxcblxcbmJvZHl7XFxuICBmb250LWZhbWlseTogJ0dlaXN0Jywncm9ib3RvLW1vbm8nLCBtb25vc3BhY2U7XFxufVxcblxcbi5jb250ZW50e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2hsaWdodCk7XFxuICAgIHBhZGRpbmc6IDAgMjB2dyAwIDIwdncgO1xcbn1cXG5cXG4uYnJhbmR7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgZm9udC1mYW1pbHk6J0dlaXN0Jywncm9ib3RvLW1vbm8nLCBtb25vc3BhY2U7XFxufVxcblxcblxcbi5oZWFkZXIgbmF2e1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDEycHg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHdpZHRoOiA0MHZ3O1xcbn1cXG5cXG4jYnV0dG9ue1xcbiAgICB0cmFuc2l0aW9uOiAxNTBtcyBlYXNlLWluLW91dDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaGxpZ2h0KTtcXG4gICAgZm9udC1mYW1pbHk6ICdHZWlzdCcsJ3JvYm90by1tb25vJywgbW9ub3NwYWNlO1xcbiAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuI2J1dHRvbjpob3ZlcntcXG4gICAgdHJhbnNpdGlvbjogMTUwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYWNjZW50KTtcXG59XFxuXFxuLmNvbnRlbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi8qIGhvbWUgc2VjdGlvbiAqL1xcblxcbi5oZXJve1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICBoZWlnaHQ6IDg1dmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDhyZW07XFxuXFxufVxcblxcbi5iYWNrZ3JvdW5ke1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2Fzc2V0cy9oZXJvQkcuanBnXFxcIik7XFxuICB3aWR0aDogNTB2dztcXG4gIGhlaWdodDogNjB2aDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICByZXNpemU6IGJvdGg7XFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuaDF7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1lc3NhZ2V7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDhyZW07XFxufVxcblxcbi5tZXNzYWdlSW5uZXJ7XFxuICB3aWR0aDogNDh2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyNHB4O1xcbn1cXG5cXG4ubWVzc2FnZVRpdGxle1xcbiAgY29sb3I6IHZhcigtLWhpZ2hsaWdodCk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ubWVzc2FnZVRleHR7XFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMjhweDtcXG59XFxuXFxuXFxuXFxuLyogbWVudSBzZWN0aW9uICovXFxuLm1lbnVCR3tcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2hsaWdodCk7XFxuICB3aWR0aDogMzB2dztcXG4gIG1hcmdpbjogMTJyZW07XFxuICBwYWRkaW5nOiA3cmVtIDByZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNTJweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVUaXRsZXtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG4ubWVudUxpc3R7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNDhweDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxufVxcblxcblxcblxcbi8qIGFib3V0IHNlY3Rpb24gKi9cXG5cXG4udG9we1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICB3aWR0aDogNDhyZW07XFxuICBoZWlnaHQ6IDMwdmg7XFxuICBtYXJnaW46IDEycmVtIDAgMTJyZW0gMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyNHB4O1xcbn1cXG5cXG4uYWJvdXRNZXNzYWdle1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uYm90dG9te1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ib3R0b21Jbm5lcntcXG4gIHdpZHRoOiA0OHJlbTtcXG4gIG1hcmdpbjogMTJyZW0gMCAxMnJlbSAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDI0cHg7XFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5obmZ7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcblxcblxcblxcbi8qIGNzcyByZXNldCAqL1xcbi8qXFxuICAxLiBVc2UgYSBtb3JlLWludHVpdGl2ZSBib3gtc2l6aW5nIG1vZGVsLlxcbiovXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuICAvKlxcbiAgICAyLiBSZW1vdmUgZGVmYXVsdCBtYXJnaW5cXG4gICovXFxuICAqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbiAgLypcXG4gICAgVHlwb2dyYXBoaWMgdHdlYWtzIVxcbiAgICAzLiBBZGQgYWNjZXNzaWJsZSBsaW5lLWhlaWdodFxcbiAgICA0LiBJbXByb3ZlIHRleHQgcmVuZGVyaW5nXFxuICAqL1xcbiAgYm9keSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgfVxcbiAgLypcXG4gICAgNS4gSW1wcm92ZSBtZWRpYSBkZWZhdWx0c1xcbiAgKi9cXG4gIGltZywgcGljdHVyZSwgdmlkZW8sIGNhbnZhcywgc3ZnIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG4gIC8qXFxuICAgIDYuIFJlbW92ZSBidWlsdC1pbiBmb3JtIHR5cG9ncmFwaHkgc3R5bGVzXFxuICAqL1xcbiAgaW5wdXQsIGJ1dHRvbiwgdGV4dGFyZWEsIHNlbGVjdCB7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICB9XFxuICAvKlxcbiAgICA3LiBBdm9pZCB0ZXh0IG92ZXJmbG93c1xcbiAgKi9cXG4gIHAsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgfVxcbiAgLypcXG4gICAgOC4gQ3JlYXRlIGEgcm9vdCBzdGFja2luZyBjb250ZXh0XFxuICAqL1xcbiAgI3Jvb3QsICNfX25leHQge1xcbiAgICBpc29sYXRpb246IGlzb2xhdGU7XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBkaXNwbGF5SG9tZVBhZ2UgZnJvbSBcIi4vcGFnZXMvSG9tZVwiXG5pbXBvcnQgeyBkaXNwbGF5TWVudSB9IGZyb20gXCIuL3BhZ2VzL21lbnVcIjtcbmltcG9ydCB7IGRpc3BsYXlBYm91dCB9IGZyb20gXCIuL3BhZ2VzL2Fib3V0XCI7XG5cblxuLy9nZXR0aW5nIHF1ZXJ5c2VsZWN0aW5nIHRoZSAzIGJ1dHRvbnMgYW5kIGFkZCBldmVudCBsaXN0ZW5lclxuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XG5jb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXRcIilcbmRpc3BsYXlIb21lUGFnZSgpO1xuXG5cbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtkaXNwbGF5SG9tZVBhZ2UoKX0pXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7ZGlzcGxheU1lbnUoKX0pXG5hYm91dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge2Rpc3BsYXlBYm91dCgpfSlcbiIsImZ1bmN0aW9uIGRpc3BsYXlIb21lUGFnZSgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgIGJvZHkuaW5uZXJIVE1MID0gXCJcIlxuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlcm8uY2xhc3NMaXN0LmFkZChcImhlcm9cIik7XG5cbiAgICAvL21ha2luZyB0aGUgYmcgaW5uZXIgZWxlbWVudFxuICAgIGNvbnN0IGJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiZy5jbGFzc0xpc3QuYWRkKFwiYmFja2dyb3VuZFwiKTtcbiAgICBoZXJvLmFwcGVuZENoaWxkKGJnKTtcblxuICAgIC8vbWFraW5nIHRoZSBoMSBpbm5lciBlbGVtZW50IGhlcm9UZXh0XG4gICAgY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVyb1RleHQuY2xhc3NMaXN0LmFkZChcImhlcm9UZXh0XCIpO1xuICAgIGhlcm9UZXh0LnRleHRDb250ZW50ID0gXCJGcmVzaGx5IE1hZGUgQWNjb3JkaW5nIFRvIFlvdXIgTmVlZHNcIjtcbiAgICBiZy5hcHBlbmRDaGlsZChoZXJvVGV4dCk7XG5cbiAgICBib2R5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgYm9keS5hcHBlbmRDaGlsZChoZXJvKTtcblxuICAgIC8vZm9yIDJuZCBoYWxmXG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwibWVzc2FnZVwiKTtcblxuICAgIC8vaW5uZXIgc2VjdGlvblxuICAgIGNvbnN0IG1lc3NhZ2VJbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVzc2FnZUlubmVyLmNsYXNzTGlzdC5hZGQoXCJtZXNzYWdlSW5uZXJcIik7XG4gICAgbWVzc2FnZS5hcHBlbmRDaGlsZChtZXNzYWdlSW5uZXIpO1xuXG4gICAgLy9tZXNzYWdlIGNvbnRlbnRcbiAgICBjb25zdCBtZXNzYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29uc3QgbWVzc2FnZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgbWVzc2FnZVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtZXNzYWdlVGl0bGVcIik7XG4gICAgbWVzc2FnZVRleHQuY2xhc3NMaXN0LmFkZChcIm1lc3NhZ2VUZXh0XCIpO1xuXG4gICAgbWVzc2FnZVRpdGxlLnRleHRDb250ZW50ID0gXCJBIG1lc3NhZ2UgdG8gdXIgY3VzdG9tZXJzOiBcIjtcbiAgICBtZXNzYWdlVGV4dC50ZXh0Q29udGVudCA9XG4gICAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJlcGVsbGVuZHVzIG1vZGkgc2ludCBkb2xvcmVtIHNpbWlsaXF1ZSBxdWlhcmF0aW9uZSBhcmNoaXRlY3RvIGF1dCBwcmFlc2VudGl1bSwgaXBzdW0gYXNwZXJuYXR1cm9iY2FlY2F0aSByZWN1c2FuZGFlLCBzYWVwZSBuYXR1cz8gTGF1ZGFudGl1bSBxdWFlcmF0Y3VtIGZ1Z2lhdCBhdXRlbSBkb2xvcmVtcXVlLm9yZW1Mb3JlbSBpcHN1bSBkb2xvciwgc2l0YW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBSZXBlbGxlbmR1cyBtb2RpIHNpbnRkb2xvcmVtIHNpbWlsaXF1ZSBxdWlhIHJhdGlvbmUgYXJjaGl0ZWN0byBhdXRwcmFlc2VudGl1bSwgaXBzdW0gYXNwZXJuYXR1ciBvYmNhZWNhdGkgcmVjdXNhbmRhZSxzYWVwZSBuYXR1cz8gTGF1ZGFudGl1bSBxdWFlcmF0IGN1bSBmdWdpYXQgYXV0ZW1kb2xvcmVtcXVlLm9yZW1Mb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXJhZGlwaXNpY2luZyBlbGl0LiBSZXBlbGxlbmR1cyBtb2RpIHNpbnQgZG9sb3JlbXNpbWlsaXF1ZSBxdWlhIHJhdGlvbmUgYXJjaGl0ZWN0byBhdXQgcHJhZXNlbnRpdW0sIGlwc3VtYXNwZXJuYXR1ciBvYmNhZWNhdGkgcmVjdXNhbmRhZSwgc2FlcGUgbmF0dXM/IExhdWRhbnRpdW1xdWFlcmF0IGN1bSBmdWdpYXQgYXV0ZW0gZG9sb3JlbXF1ZS5vcmVtTG9yZW0gaXBzdW1kb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5SZXBlbGxlbmR1cyBtb2RpIHNpbnQgZG9sb3JlbSBzaW1pbGlxdWUgcXVpYSByYXRpb25lYXJjaGl0ZWN0byBhdXQgcHJhZXNlbnRpdW0sIGlwc3VtIGFzcGVybmF0dXIgb2JjYWVjYXRpcmVjdXNhbmRhZSwgc2FlcGUgbmF0dXM/IExhdWRhbnRpdW0gcXVhZXJhdCBjdW0gZnVnaWF0YXV0ZW0gZG9sb3JlbXF1ZS5vcmVtXCI7XG4gICAgbWVzc2FnZUlubmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VUaXRsZSk7XG4gICAgbWVzc2FnZUlubmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VUZXh0KTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlIb21lUGFnZTtcbiIsImZ1bmN0aW9uIGRpc3BsYXlBYm91dCgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgIGJvZHkuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIC8vbWFraW5nIHRvcFxuICAgIGNvbnN0IHRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9wLmNsYXNzTGlzdC5hZGQoXCJ0b3BcIik7XG4gICAgLy9hZGRpbmcgdG9wIGNvbnRlbnRcbiAgICBjb25zdCBhYm91dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGNvbnN0IGFib3V0TWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGFib3V0VGl0bGUuY2xhc3NMaXN0LmFkZChcImFib3V0VGl0bGVcIik7XG4gICAgYWJvdXRNZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJhYm91dE1lc3NhZ2VcIik7XG4gICAgYWJvdXRUaXRsZS50ZXh0Q29udGVudCA9IFwiQWJvdXQgVXNcIjtcbiAgICBhYm91dE1lc3NhZ2UudGV4dENvbnRlbnQgPVxuICAgICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBSZXBlbGxlbmR1cyBtb2RpIHNpbnQgZG9sb3JlbSBzaW1pbGlxdWUgcXVpYXJhdGlvbmUgYXJjaGl0ZWN0byBhdXQgcHJhZXNlbnRpdW0sIGlwc3VtIGFzcGVybmF0dXJvYmNhZWNhdGkgcmVjdXNhbmRhZSwgc2FlcGUgbmF0dXM/IExhdWRhbnRpdW0gcXVhZXJhdGN1bSBmdWdpYXQgYXV0ZW0gZG9sb3JlbXF1ZS5vcmVtTG9yZW0gaXBzdW0gZG9sb3IsIHNpdGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmVwZWxsZW5kdXMgbW9kaSBzaW50ZG9sb3JlbSBzaW1pbGlxdWUgcXVpYSByYXRpb25lIGFyY2hpdGVjdG8gYXV0cHJhZXNlbnRpdW0sIGlwc3VtIGFzcGVybmF0dXIgb2JjYWVjYXRpIHJlY3VzYW5kYWUsc2FlcGUgbmF0dXM/IExhdWRhbnRpdW0gcXVhZXJhdCBjdW0gZnVnaWF0IGF1dGVtZG9sb3JlbXF1ZS5vcmVtTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyYWRpcGlzaWNpbmcgZWxpdC4gUmVwZWxsZW5kdXMgbW9kaSBzaW50IGRvbG9yZW1zaW1pbGlxdWUgcXVpYSByYXRpb25lIGFyY2hpdGVjdG8gYXV0IHByYWVzZW50aXVtLCBpcHN1bWFzcGVybmF0dXIgb2JjYWVjYXRpIHJlY3VzYW5kYWUsIHNhZXBlIG5hdHVzPyBMYXVkYW50aXVtcXVhZXJhdCBjdW0gZnVnaWF0IGF1dGVtIGRvbG9yZW1xdWUub3JlbUxvcmVtIGlwc3VtZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuUmVwZWxsZW5kdXMgbW9kaSBzaW50IGRvbG9yZW0gc2ltaWxpcXVlIHF1aWEgcmF0aW9uZWFyY2hpdGVjdG8gYXV0IHByYWVzZW50aXVtLCBpcHN1bSBhc3Blcm5hdHVyIG9iY2FlY2F0aXJlY3VzYW5kYWUsIHNhZXBlIG5hdHVzPyBMYXVkYW50aXVtIHF1YWVyYXQgY3VtIGZ1Z2lhdGF1dGVtIGRvbG9yZW1xdWUub3JlbVwiO1xuICAgIHRvcC5hcHBlbmRDaGlsZChhYm91dFRpdGxlKTtcbiAgICB0b3AuYXBwZW5kQ2hpbGQoYWJvdXRNZXNzYWdlKTtcblxuICAgIC8vYm90dG9tXG4gICAgY29uc3QgYm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib3R0b20uY2xhc3NMaXN0LmFkZChcImJvdHRvbVwiKTtcblxuICAgIC8vaW5uZXJcbiAgICBjb25zdCBib3R0b21Jbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm90dG9tSW5uZXIuY2xhc3NMaXN0LmFkZChcImJvdHRvbUlubmVyXCIpO1xuICAgIGJvdHRvbS5hcHBlbmRDaGlsZChib3R0b21Jbm5lcik7XG5cbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaG91cnMuY2xhc3NMaXN0LmFkZChcImhuZlwiKTtcbiAgICBwaG9uZS5jbGFzc0xpc3QuYWRkKFwiaG5mXCIpO1xuICAgIGhvdXJzLnRleHRDb250ZW50ID0gXCIzOjMwcG0gLSA5OjMwcG1cIjtcbiAgICBwaG9uZS50ZXh0Q29udGVudCA9IFwiQ2FsbCB1cyBhdCAoMTExKS0yMjItMzMzM1wiO1xuXG4gICAgYm90dG9tSW5uZXIuYXBwZW5kQ2hpbGQoaG91cnMpO1xuICAgIGJvdHRvbUlubmVyLmFwcGVuZENoaWxkKHBob25lKTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQodG9wKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGJvdHRvbSk7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlBYm91dCB9O1xuIiwiZnVuY3Rpb24gZGlzcGxheU1lbnUoKSB7XG4gICAgY29uc3QgbGlzdE9mSXRlbXMgPSBbXG4gICAgICAgIFwiRmlzaCBhbmQgQ2hpcHMgLS0tICQxOS45OVwiLFxuICAgICAgICBcIlNpZ25hdHVyZSBSb2FzdGVkIENoaWNrZW4gLS0tICQyNC45OVwiLFxuICAgICAgICBcIkNoZWVzZWJ1cmdlciAtLS0gMTkuOTlcIixcbiAgICAgICAgXCJDZXNhciBTYWxhZCAtLS0gMTQuOTlcIixcbiAgICAgICAgXCJTd2VldCBCQlEgUmlicyAtLS0gMjQuOTlcIixcbiAgICAgICAgXCJCYWtlZCBQb3RhdG9zIC0tIDguOTlcIixcbiAgICBdO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgYm9keS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgLy9tYWtpbmcgbWVudSBiYWNrZ3JvdW5kXG4gICAgY29uc3QgbWVudUJHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51QkcuY2xhc3NMaXN0LmFkZChcIm1lbnVCR1wiKTtcblxuICAgIC8vbWFraW5nIHRpdGxlIGFuZCBsaXN0XG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIG1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKFwibWVudVRpdGxlXCIpO1xuICAgIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIG1lbnVMaXN0LmNsYXNzTGlzdC5hZGQoXCJtZW51TGlzdFwiKTtcblxuICAgIC8vYXR0YWNoIG1lbnUgdG8gYmdcbiAgICBtZW51QkcuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcbiAgICBtZW51QkcuYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xuXG4gICAgLy9tYWtpbmcgbWVudSBpdGVtczpcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RPZkl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1cIik7XG4gICAgICAgIG1lbnVJdGVtLnRleHRDb250ZW50ID0gbGlzdE9mSXRlbXNbaV07XG4gICAgICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgICB9XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKG1lbnVCRyk7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlNZW51IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=