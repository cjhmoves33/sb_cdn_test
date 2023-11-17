"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhandlebars"] = self["webpackChunkhandlebars"] || []).push([["modules/layout"],{

/***/ "./src/modules/layout/RecentProducts/RecentProducts.ts":
/*!*************************************************************!*\
  !*** ./src/modules/layout/RecentProducts/RecentProducts.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RecentProducts)\n/* harmony export */ });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core */ \"./src/core/index.ts\");\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ \"./src/modules/layout/RecentProducts/const.ts\");\n\nvar __async = (__this, __arguments, generator) => {\n  return new Promise((resolve, reject) => {\n    var fulfilled = (value) => {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    };\n    var rejected = (value) => {\n      try {\n        step(generator.throw(value));\n      } catch (e) {\n        reject(e);\n      }\n    };\n    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);\n    step((generator = generator.apply(__this, __arguments)).next());\n  });\n};\n\n\nconst _RecentProducts = class _RecentProducts extends _core__WEBPACK_IMPORTED_MODULE_0__.ShopbyElement {\n  constructor() {\n    super(...arguments);\n    this.fetchProducts = (action) => __async(this, null, function* () {\n      const products = (yield action) === _RecentProducts.ACTION_TYPE.NEXT ? [\n        {\n          productNo: \"12345\",\n          productName: \"\\uC0D8\\uD50C \\uC0C1\\uD4883 next3\",\n          thumbnail: \"https://placehold.co/100\"\n        },\n        {\n          productNo: \"67890\",\n          productName: \"\\uC0D8\\uD50C \\uC0C1\\uD4884 next4\",\n          thumbnail: \"https://placehold.co/100\"\n        }\n      ] : [\n        {\n          productNo: \"12345\",\n          productName: \"\\uC0D8\\uD50C \\uC0C1\\uD4881 prev1\",\n          thumbnail: \"https://placehold.co/100\"\n        },\n        {\n          productNo: \"67890\",\n          productName: \"\\uC0D8\\uD50C \\uC0C1\\uD4882 prev2\",\n          thumbnail: \"https://placehold.co/100\"\n        }\n      ];\n      this.setState(\n        {\n          products\n        },\n        _const__WEBPACK_IMPORTED_MODULE_1__.SLOT_NAME_MAP.PRODUCT_LIST\n      );\n    });\n  }\n  setup() {\n    this.setState({\n      products: [\n        {\n          productNo: \"12345\",\n          productName: \"\\uC0D8\\uD50C \\uC0C1\\uD4881\",\n          thumbnail: \"https://placehold.co/100\"\n        },\n        {\n          productNo: \"67890\",\n          productName: \"\\uC0D8\\uD50C \\uC0C1\\uD4882\",\n          thumbnail: \"https://placehold.co/100\"\n        },\n        {\n          productNo: \"13579\",\n          productName: \"\\uC0D8\\uD50C \\uC0C1\\uD4883\",\n          thumbnail: \"https://placehold.co/100\"\n        }\n      ]\n    });\n  }\n  setEvent() {\n    this.handleClickEvent();\n  }\n  handleClickEvent() {\n    const { PREV, NEXT } = _RecentProducts.ACTION_TYPE;\n    const eventMap = /* @__PURE__ */ new Map();\n    eventMap.set(PREV, () => {\n      this.fetchProducts(PREV);\n    });\n    eventMap.set(NEXT, () => {\n      this.fetchProducts(NEXT);\n    });\n    this.addEvent({\n      eventType: \"click\",\n      eventMap\n    });\n  }\n};\n_RecentProducts.ACTION_TYPE = _const__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPE;\nlet RecentProducts = _RecentProducts;\n\ncustomElements.define(_const__WEBPACK_IMPORTED_MODULE_1__.RECENT_PRODUCTS, RecentProducts);\n\n\n//# sourceURL=webpack://handlebars/./src/modules/layout/RecentProducts/RecentProducts.ts?");

/***/ }),

/***/ "./src/modules/layout/RecentProducts/const.ts":
/*!****************************************************!*\
  !*** ./src/modules/layout/RecentProducts/const.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ACTION_TYPE: () => (/* binding */ ACTION_TYPE),\n/* harmony export */   RECENT_PRODUCTS: () => (/* binding */ RECENT_PRODUCTS),\n/* harmony export */   SLOT_NAME_MAP: () => (/* binding */ SLOT_NAME_MAP)\n/* harmony export */ });\n\nconst ACTION_TYPE = {\n  PREV: \"PREV\",\n  NEXT: \"NEXT\"\n};\nconst SLOT_NAME_MAP = {\n  PRODUCT_LIST: \"PRODUCT_LIST\"\n};\nconst RECENT_PRODUCTS = \"recent-products\";\n\n\n//# sourceURL=webpack://handlebars/./src/modules/layout/RecentProducts/const.ts?");

/***/ }),

/***/ "./src/modules/layout/RecentProducts/index.ts":
/*!****************************************************!*\
  !*** ./src/modules/layout/RecentProducts/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ACTION_TYPE: () => (/* reexport safe */ _const__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPE),\n/* harmony export */   RECENT_PRODUCTS: () => (/* reexport safe */ _const__WEBPACK_IMPORTED_MODULE_1__.RECENT_PRODUCTS),\n/* harmony export */   RecentProducts: () => (/* reexport safe */ _RecentProducts__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   SLOT_NAME_MAP: () => (/* reexport safe */ _const__WEBPACK_IMPORTED_MODULE_1__.SLOT_NAME_MAP)\n/* harmony export */ });\n/* harmony import */ var _RecentProducts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecentProducts */ \"./src/modules/layout/RecentProducts/RecentProducts.ts\");\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ \"./src/modules/layout/RecentProducts/const.ts\");\n\n\n\n\n\n//# sourceURL=webpack://handlebars/./src/modules/layout/RecentProducts/index.ts?");

/***/ }),

/***/ "./src/modules/layout/index.ts":
/*!*************************************!*\
  !*** ./src/modules/layout/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ACTION_TYPE: () => (/* reexport safe */ _RecentProducts__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPE),\n/* harmony export */   RECENT_PRODUCTS: () => (/* reexport safe */ _RecentProducts__WEBPACK_IMPORTED_MODULE_0__.RECENT_PRODUCTS),\n/* harmony export */   RecentProducts: () => (/* reexport safe */ _RecentProducts__WEBPACK_IMPORTED_MODULE_0__.RecentProducts),\n/* harmony export */   SLOT_NAME_MAP: () => (/* reexport safe */ _RecentProducts__WEBPACK_IMPORTED_MODULE_0__.SLOT_NAME_MAP)\n/* harmony export */ });\n/* harmony import */ var _RecentProducts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecentProducts */ \"./src/modules/layout/RecentProducts/index.ts\");\n\n\n\n\n//# sourceURL=webpack://handlebars/./src/modules/layout/index.ts?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_handlebars_dist_cjs_handlebars_js","core/index"], () => (__webpack_exec__("./src/modules/layout/index.ts")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);