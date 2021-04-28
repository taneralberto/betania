/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss ***!
  \*****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\n.site-main {\\n  background: #251a37;\\n  padding: 1rem;\\n}\\n\\n.wrapper {\\n  display: flex;\\n  flex-direction: column;\\n  row-gap: 1rem;\\n}\\n\\n.label {\\n  color: #fff;\\n  font-weight: bold;\\n}\\n\\n.calc__dollar {\\n  display: flex;\\n}\\n.calc__sync-dollar-value {\\n  width: 60px;\\n}\\n.calc__product {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  row-gap: 1rem;\\n}\\n.calc__dollar-value {\\n  width: 100%;\\n  padding: 0.8rem;\\n  margin-right: 0.5rem;\\n  font-size: 1.2rem;\\n}\\n.calc__dollar-price {\\n  width: 100%;\\n  padding: 0.8rem;\\n  margin-top: 1rem;\\n  font-size: 1.2rem;\\n}\\n.calc__bolivar-price {\\n  font-size: 1.5rem;\\n  border: 3px solid rgba(255, 255, 255, 0.3);\\n  padding: 0.5rem;\\n}\\n\\n.bolivars__values {\\n  display: flex;\\n  flex-direction: column;\\n  row-gap: 0.5rem;\\n  color: #fff;\\n  font-size: 1.2rem;\\n}\\n.bolivars__field {\\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3);\\n  padding-top: 0.5rem;\\n  padding-bottom: 0.5rem;\\n}\\n.bolivars__result {\\n  font-size: 1.5rem;\\n  margin-top: 0.5rem;\\n}\\n\\n.dollars__values {\\n  display: flex;\\n  flex-direction: column;\\n  row-gap: 0.5rem;\\n  color: #fff;\\n  font-size: 1.2rem;\\n}\\n.dollars__field {\\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3);\\n  padding-top: 0.5rem;\\n  padding-bottom: 0.5rem;\\n}\\n.dollars__result {\\n  font-size: 1.5rem;\\n  margin-top: 0.5rem;\\n}\\n\\n.add-button, .new-button {\\n  font-size: 2rem;\\n  color: #251a37;\\n  border: 2px solid rgba(255, 255, 255, 0.3);\\n  border-radius: 100px;\\n  padding-top: 0.5rem;\\n  padding-bottom: 0.5rem;\\n}\\n.add-button:hover, .new-button:hover {\\n  color: #fff;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/scss/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://my-webpack-project/./src/scss/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _js_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/index */ \"./src/js/index.js\");\n\n\n\ndocument.addEventListener( 'DOMContentLoaded', () => {\n    (0,_js_index__WEBPACK_IMPORTED_MODULE_1__.default)();\n} );\n\n\n//# sourceURL=webpack://my-webpack-project/./src/init.js?");

/***/ }),

/***/ "./src/js/classes/bolivars.js":
/*!************************************!*\
  !*** ./src/js/classes/bolivars.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Bolivars)\n/* harmony export */ });\nclass Bolivars {\n\n    constructor() {\n        this.prices = [];\n    }\n\n    getPrices() {\n        return this.prices;\n    }\n\n    addNewField( price ) {\n\n        this.prices.push( price );\n        let formatPrice = new Intl.NumberFormat().format( price );\n\n        let $container = document.querySelector( '.bolivars__values' );\n        let $field = document.createElement( 'div' );\n        $field.classList.add( 'bolivars__field' );\n        let $label = document.createElement( 'label' );\n        $label.classList.add( 'bolivars__value' );\n        $label.innerHTML = formatPrice;\n        $field.appendChild( $label );\n        $container.appendChild( $field );\n    }\n\n    getTotal() {\n\n        let total = 0;\n\n        this.prices.map( price => {\n            total += parseFloat( price );\n        } );\n\n        return total.toFixed( 2 );\n    }\n\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/js/classes/bolivars.js?");

/***/ }),

/***/ "./src/js/classes/dollars.js":
/*!***********************************!*\
  !*** ./src/js/classes/dollars.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dollars)\n/* harmony export */ });\nclass Dollars {\n\n    constructor() {\n        this.prices = [];\n    }\n\n    getPrices() {\n        return this.prices;\n    }\n\n    addNewField( price ) {\n\n        this.prices.push( price );\n\n        let $container = document.querySelector( '.dollars__values' );\n        let $field = document.createElement( 'div' );\n        $field.classList.add( 'dollars__field' );\n        let $label = document.createElement( 'label' );\n        $label.classList.add( 'dollars__value' );\n        $label.innerHTML = price;\n        $field.appendChild( $label );\n        $container.appendChild( $field );\n    }\n\n    getTotal() {\n\n        let total = 0;\n\n        this.prices.map( price => {\n            total += parseFloat( price );\n        } );\n\n        return total.toFixed( 2 );\n    }\n\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/js/classes/dollars.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _objects_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects/product */ \"./src/js/objects/product.js\");\n/* harmony import */ var _objects_dollar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects/dollar */ \"./src/js/objects/dollar.js\");\n/* harmony import */ var _objects_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects/properties */ \"./src/js/objects/properties.js\");\n/* harmony import */ var _classes_bolivars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/bolivars */ \"./src/js/classes/bolivars.js\");\n/* harmony import */ var _classes_dollars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/dollars */ \"./src/js/classes/dollars.js\");\n\n\n\n\n\n\nfunction init() {\n\n    function updateProductPrice() {\n        _objects_product__WEBPACK_IMPORTED_MODULE_0__.default.price.update( _objects_dollar__WEBPACK_IMPORTED_MODULE_1__.default.value );\n        _objects_product__WEBPACK_IMPORTED_MODULE_0__.default.price.display( _objects_properties__WEBPACK_IMPORTED_MODULE_2__.output.productPrice );\n    }\n\n    updateProductPrice();\n\n    /**\n     * Actualiza el valor del dolar con el de DolarToday y modifica el precio del producto\n     */\n    _objects_properties__WEBPACK_IMPORTED_MODULE_2__.button.sync.addEventListener( 'click', async () => {\n\n        _objects_dollar__WEBPACK_IMPORTED_MODULE_1__.default.value = await _objects_dollar__WEBPACK_IMPORTED_MODULE_1__.default.updateWithDolarToday();\n\n        _objects_properties__WEBPACK_IMPORTED_MODULE_2__.input.dollar.value = _objects_dollar__WEBPACK_IMPORTED_MODULE_1__.default.value;\n\n        updateProductPrice();\n    } );\n\n    /**\n     * Actualiza el precio del producto cada vez que cambia el precio\n     */\n    _objects_properties__WEBPACK_IMPORTED_MODULE_2__.input.product.addEventListener( 'input', e => {\n\n        _objects_product__WEBPACK_IMPORTED_MODULE_0__.default.price.dollar = e.target.value;\n\n        updateProductPrice();\n\n    } );\n\n    /**\n     * Actualiza el valor del dolar con el introducido manualmente\n     * Actualiza el precio del producto cada vez que cambia el valor del dolar\n     */\n    _objects_properties__WEBPACK_IMPORTED_MODULE_2__.input.dollar.addEventListener( 'input', e => {\n\n        _objects_dollar__WEBPACK_IMPORTED_MODULE_1__.default.value = e.target.value;\n\n        updateProductPrice();\n\n    } );\n\n    /********BOLIVARES****************DOLARES******** */\n\n    let bolivars = new _classes_bolivars__WEBPACK_IMPORTED_MODULE_3__.default();\n    let dollars = new _classes_dollars__WEBPACK_IMPORTED_MODULE_4__.default();\n\n    /**\n     * Agrega el valor del producto a la suma total\n     */\n    _objects_properties__WEBPACK_IMPORTED_MODULE_2__.button.add.addEventListener( 'click', () => {\n\n        bolivars.addNewField( _objects_product__WEBPACK_IMPORTED_MODULE_0__.default.price.bolivar );\n        _objects_properties__WEBPACK_IMPORTED_MODULE_2__.output.bolivarsTotal.innerHTML = (0,_objects_properties__WEBPACK_IMPORTED_MODULE_2__.numberFormat)( bolivars.getTotal() );\n\n        dollars.addNewField( _objects_product__WEBPACK_IMPORTED_MODULE_0__.default.price.dollar );\n        _objects_properties__WEBPACK_IMPORTED_MODULE_2__.output.dollarsTotal.innerHTML = (0,_objects_properties__WEBPACK_IMPORTED_MODULE_2__.numberFormat)( dollars.getTotal() );\n\n    } );\n\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/js/index.js?");

/***/ }),

/***/ "./src/js/objects/dollar.js":
/*!**********************************!*\
  !*** ./src/js/objects/dollar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _objects_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../objects/properties */ \"./src/js/objects/properties.js\");\n\n\nlet dollar = {\n\n    value : _objects_properties__WEBPACK_IMPORTED_MODULE_0__.input.dollar.value,\n\n    updateWithDolarToday : async function() {\n\n        let value = 0.00;\n        let response = await fetch( 'https://s3.amazonaws.com/dolartoday/data.json' );\n        let data = await response.json();\n        value = data.USD.promedio;\n\n        return value;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dollar);\n\n//# sourceURL=webpack://my-webpack-project/./src/js/objects/dollar.js?");

/***/ }),

/***/ "./src/js/objects/product.js":
/*!***********************************!*\
  !*** ./src/js/objects/product.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./properties */ \"./src/js/objects/properties.js\");\n\n\nlet product = {\n\n    price : {\n        dollar : _properties__WEBPACK_IMPORTED_MODULE_0__.input.product.value,\n\n        bolivar : parseFloat( _properties__WEBPACK_IMPORTED_MODULE_0__.output.productPrice.innerHTML ),\n\n        update : function( dollarValue ) {\n            let price = ( dollarValue * this.dollar ).toFixed( 2 );\n            this.bolivar = parseFloat( price );\n\n            return this.bolivar;\n        },\n\n        display : function( element ) {\n            element.innerHTML = (0,_properties__WEBPACK_IMPORTED_MODULE_0__.numberFormat)( this.bolivar );\n        },\n    },\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (product);\n\n//# sourceURL=webpack://my-webpack-project/./src/js/objects/product.js?");

/***/ }),

/***/ "./src/js/objects/properties.js":
/*!**************************************!*\
  !*** ./src/js/objects/properties.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"button\": () => (/* binding */ button),\n/* harmony export */   \"input\": () => (/* binding */ input),\n/* harmony export */   \"output\": () => (/* binding */ output),\n/* harmony export */   \"numberFormat\": () => (/* binding */ numberFormat)\n/* harmony export */ });\nlet button = {\n\n    sync : document.querySelector( '.calc__sync-dollar-value' ),\n\n    add : document.querySelector( '.add-button' ),\n\n    new : document.querySelector( '.new-button' ),\n\n}\n\nlet input = {\n\n    dollar : document.querySelector( '.calc__dollar-value' ),\n\n    product : document.querySelector( '.calc__dollar-price' ),\n}\n\nlet output = {\n\n    productPrice : document.querySelector( '.calc__bolivar-price' ),\n\n    bolivarsTotal : document.querySelector( '.bolivars__total' ),\n\n    dollarsTotal : document.querySelector( '.dollars__total' ),\n}\n\nlet numberFormat = new Intl.NumberFormat().format;\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/js/objects/properties.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/init.js");
/******/ 	
/******/ })()
;