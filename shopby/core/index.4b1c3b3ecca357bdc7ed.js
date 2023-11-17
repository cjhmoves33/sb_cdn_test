"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhandlebars"] = self["webpackChunkhandlebars"] || []).push([
  ["core/index"],
  {
    /***/ "./src/core/ShopbyElement/ShopbyElement.ts":
      /*!*************************************************!*\
  !*** ./src/core/ShopbyElement/ShopbyElement.ts ***!
  \*************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ ShopbyElement)\n/* harmony export */ });\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./src/core/ShopbyElement/const.ts");\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/core/ShopbyElement/helper.ts");\n\nvar __defProp = Object.defineProperty;\nvar __getOwnPropSymbols = Object.getOwnPropertySymbols;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __propIsEnum = Object.prototype.propertyIsEnumerable;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __spreadValues = (a, b) => {\n  for (var prop in b || (b = {}))\n    if (__hasOwnProp.call(b, prop))\n      __defNormalProp(a, prop, b[prop]);\n  if (__getOwnPropSymbols)\n    for (var prop of __getOwnPropSymbols(b)) {\n      if (__propIsEnum.call(b, prop))\n        __defNormalProp(a, prop, b[prop]);\n    }\n  return a;\n};\n\n\nalert("ShopbyElement.ts!!!!!!!!");\nclass ShopbyElement extends HTMLElement {\n  constructor() {\n    super();\n    this.templateMap = /* @__PURE__ */ new Map();\n    this.rendered = false;\n    /**\n     * state 는 항상 객체 타입\n     */\n    this.state = {};\n    this.slotChange = (slot) => {\n      if (this.rendered)\n        return;\n      const [element] = slot.assignedElements();\n      element.querySelectorAll("[slot]").forEach(({ slot: slotName, outerHTML }) => {\n        this.templateMap.set(slotName, outerHTML);\n      });\n      this.rendered = true;\n      this.render(element.outerHTML);\n    };\n    this.insertSlotBy();\n    const initializable = this.getAttribute(\n      _const__WEBPACK_IMPORTED_MODULE_0__.SHOPBY_ELEMENT_PARAMETER.INITIALIZABLE\n    );\n    !initializable && this.setup();\n    this.setEvent();\n  }\n  /**\n   * 인자로 전달하는 selector 에 slot 추가\n   * @param selector slot 이 추가될 요소\n   */\n  insertSlotBy(selector = this) {\n    const shadow = selector.attachShadow({ mode: "open" });\n    shadow.innerHTML = "<slot></slot>";\n  }\n  /**\n   * constructor 호출 시 실행되는 함수\n   * - life-cycle : custom element 가 dom 에 추가 되기 전에 실행\n   * - calling-lazy : custom element 파라미터로 INITIALIZABLE 추가\n   *   🚨 제어권이 호출부로 가게 되기 때문에 수동으로 호출해야함\n   * - use-case : 검색 API 호출 시 query 기본 값을 setState 로 초기화 시킨 후 setup 호출\n   */\n  setup() {\n  }\n  /**\n   *\n   * @param newState\n   * @param slotName 리렌더링 대상 슬롯 이름\n   */\n  setState(newState, slotName) {\n    this.state = __spreadValues(__spreadValues({}, this.state), newState);\n    if (!slotName)\n      return;\n    const template = this.templateMap.get(slotName);\n    const $slot = this.querySelector(`[slot=${slotName}]`);\n    this.render(template, $slot);\n  }\n  /**\n   * custom element 에 바인딩된 state 를 조회\n   * @returns state\n   */\n  getState() {\n    return this.state;\n  }\n  setEvent() {\n  }\n  /**\n   *\n   * @param eventType - element에 추가할 이벤트 타입 ex) click, change, keypress\n   * @param eventMap - 이벤트 발행 시 호출할 callback 함수 Map\n   *  key : data-shopby-action 으로 설정된 값\n   *  value : eventType 발행 시 호출할 함수로 인자에는 event 를 전달\n   */\n  addEvent({ eventType, eventMap, element = this }) {\n    element.addEventListener(eventType, (event) => {\n      var _a;\n      const { target } = event;\n      const action = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.getShopbyAction)(target);\n      (_a = eventMap == null ? void 0 : eventMap.get(action)) == null ? void 0 : _a(event);\n    });\n  }\n  /**\n   * html 을 인자로 보내면 handlebars 를 사용해 compile\n   * element 가 없는 경우 기본으로 custom element 에 렌더\n   * @param html string 타입의 html template\n   * @param element html 을 노출할 element\n   */\n  render(html, element = this) {\n    const template = Handlebars.compile(html);\n    element.innerHTML = template(this.state);\n  }\n  /**\n   * - life-cycle : custom element 가 dom 에 추가 될 때 실행\n   * children element 는 아직 dom 에 추가되지 않은 상태\n   */\n  connectedCallback() {\n    var _a;\n    const slot = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("slot");\n    if (!slot)\n      return;\n    slot.addEventListener("slotchange", () => this.slotChange(slot));\n  }\n  /**\n   * - life-cycle : custom element 가 dom 에서 제거 될 때 실행\n   */\n  disconnectedCallback() {\n    this.rendered = false;\n  }\n  /**\n   * - life-cycle : custom element 가 다른 페이지로 이동할 때 실행\n   */\n  adoptedCallback() {\n  }\n  /**\n   * - life-cycle observedAttributes 에 명시된 속성이 변경될 때 호출\n   * @param name 속성명\n   * @param oldValue 변경 전 값\n   * @param newValue 변경 후 값\n   */\n  // eslint-disable-next-line @typescript-eslint/no-unused-vars\n  attributeChangedCallback(name, oldValue, newValue) {\n    console.log(name, oldValue, newValue);\n  }\n}\nShopbyElement.ACTION_TYPE = {};\n\n\n//# sourceURL=webpack://handlebars/./src/core/ShopbyElement/ShopbyElement.ts?'
        );

        /***/
      },

    /***/ "./src/core/ShopbyElement/const.ts":
      /*!*****************************************!*\
  !*** ./src/core/ShopbyElement/const.ts ***!
  \*****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SHOPBY_ACTION: () => (/* binding */ SHOPBY_ACTION),\n/* harmony export */   SHOPBY_ELEMENT_PARAMETER: () => (/* binding */ SHOPBY_ELEMENT_PARAMETER)\n/* harmony export */ });\n\nconst SHOPBY_ELEMENT_PARAMETER = {\n  INITIALIZABLE: "INITIALIZABLE"\n};\nconst SHOPBY_ACTION = "data-shopby-action";\n\n\n//# sourceURL=webpack://handlebars/./src/core/ShopbyElement/const.ts?'
        );

        /***/
      },

    /***/ "./src/core/ShopbyElement/helper.ts":
      /*!******************************************!*\
  !*** ./src/core/ShopbyElement/helper.ts ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getShopbyAction: () => (/* binding */ getShopbyAction)\n/* harmony export */ });\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./src/core/ShopbyElement/const.ts");\n\n\nconst getShopbyAction = (element) => {\n  var _a, _b, _c;\n  if (!element)\n    return "";\n  const action = (_a = element.dataset) == null ? void 0 : _a.shopbyAction;\n  if (action)\n    return action;\n  return (_c = (_b = element.closest(`[${_const__WEBPACK_IMPORTED_MODULE_0__.SHOPBY_ACTION}]`)) == null ? void 0 : _b.dataset) == null ? void 0 : _c.shopbyAction;\n};\n\n\n//# sourceURL=webpack://handlebars/./src/core/ShopbyElement/helper.ts?'
        );

        /***/
      },

    /***/ "./src/core/ShopbyElement/index.ts":
      /*!*****************************************!*\
  !*** ./src/core/ShopbyElement/index.ts ***!
  \*****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SHOPBY_ACTION: () => (/* reexport safe */ _const__WEBPACK_IMPORTED_MODULE_1__.SHOPBY_ACTION),\n/* harmony export */   SHOPBY_ELEMENT_PARAMETER: () => (/* reexport safe */ _const__WEBPACK_IMPORTED_MODULE_1__.SHOPBY_ELEMENT_PARAMETER),\n/* harmony export */   ShopbyElement: () => (/* reexport safe */ _ShopbyElement__WEBPACK_IMPORTED_MODULE_0__["default"]),\n/* harmony export */   getShopbyAction: () => (/* reexport safe */ _helper__WEBPACK_IMPORTED_MODULE_2__.getShopbyAction)\n/* harmony export */ });\n/* harmony import */ var _ShopbyElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShopbyElement */ "./src/core/ShopbyElement/ShopbyElement.ts");\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./src/core/ShopbyElement/const.ts");\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper */ "./src/core/ShopbyElement/helper.ts");\n\n\n\n\n\n\n//# sourceURL=webpack://handlebars/./src/core/ShopbyElement/index.ts?'
        );

        /***/
      },

    /***/ "./src/core/index.ts":
      /*!***************************!*\
  !*** ./src/core/index.ts ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SHOPBY_ACTION: () => (/* reexport safe */ _ShopbyElement__WEBPACK_IMPORTED_MODULE_0__.SHOPBY_ACTION),\n/* harmony export */   SHOPBY_ELEMENT_PARAMETER: () => (/* reexport safe */ _ShopbyElement__WEBPACK_IMPORTED_MODULE_0__.SHOPBY_ELEMENT_PARAMETER),\n/* harmony export */   ShopbyElement: () => (/* reexport safe */ _ShopbyElement__WEBPACK_IMPORTED_MODULE_0__.ShopbyElement),\n/* harmony export */   getShopbyAction: () => (/* reexport safe */ _ShopbyElement__WEBPACK_IMPORTED_MODULE_0__.getShopbyAction)\n/* harmony export */ });\n/* harmony import */ var _ShopbyElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShopbyElement */ "./src/core/ShopbyElement/index.ts");\n\n__webpack_require__.e(/*! import() */ "vendors-node_modules_handlebars_dist_cjs_handlebars_js").then(__webpack_require__.t.bind(__webpack_require__, /*! handlebars */ "./node_modules/handlebars/dist/cjs/handlebars.js", 23)).then((Handlebars) => {\n  window.Handlebars = Handlebars;\n}).catch((e) => {\n  console.error(e);\n});\n\n\n\n//# sourceURL=webpack://handlebars/./src/core/index.ts?'
        );

        /***/
      },
  },
  /******/ (__webpack_require__) => {
    // webpackRuntimeModules
    /******/ var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    /******/ var __webpack_exports__ = __webpack_exec__("./src/core/index.ts");
    /******/
  },
]);
