/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/swiper */ \"./src/scripts/swiper.js\");\n/* harmony import */ var _scripts_swiper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_swiper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3N3aXBlci8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zY3JpcHRzL3N3aXBlcidcclxuaW1wb3J0ICcuL3Njc3Mvc3R5bGUuc2NzcydcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/swiper.js":
/*!*******************************!*\
  !*** ./src/scripts/swiper.js ***!
  \*******************************/
/***/ (() => {

eval("const swiper = new Swiper('.swiper', {\n  // Optional parameters\n  loop: true,\n  // If we need pagination\n  pagination: {\n    el: '.swiper-pagination'\n  },\n  // Navigation arrows\n  navigation: {\n    nextEl: '.swiper-button-next',\n    prevEl: '.swiper-button-prev'\n  },\n  // And if we need scrollbar\n  scrollbar: {\n    el: '.swiper-scrollbar'\n  }\n});\nconst arr = [{\n  name: 'Giorgi',\n  users: [{\n    name: 'Rolandi',\n    users: [{\n      name: 'Givi'\n    }]\n  }]\n}];\nconst asdas = 'as';\nconst test = arr => {\n  arr.forEach(user => {\n    alert(user.name);\n    if (user.users) {\n      test(user.users);\n    }\n  });\n};\nasdasd;\ntest(arr);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zd2lwZXIuanMuanMiLCJuYW1lcyI6WyJzd2lwZXIiLCJTd2lwZXIiLCJsb29wIiwicGFnaW5hdGlvbiIsImVsIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInNjcm9sbGJhciIsImFyciIsIm5hbWUiLCJ1c2VycyIsImFzZGFzIiwidGVzdCIsImZvckVhY2giLCJ1c2VyIiwiYWxlcnQiLCJhc2Rhc2QiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3N3aXBlci8uL3NyYy9zY3JpcHRzL3N3aXBlci5qcz9lMjI2Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyJywge1xyXG4gICAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICBcclxuICAgIC8vIElmIHdlIG5lZWQgcGFnaW5hdGlvblxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICB9LFxyXG4gIFxyXG4gICAgLy8gTmF2aWdhdGlvbiBhcnJvd3NcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgfSxcclxuICBcclxuICAgIC8vIEFuZCBpZiB3ZSBuZWVkIHNjcm9sbGJhclxyXG4gICAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5cclxuY29uc3QgYXJyID0gW1xyXG4gIHtcclxuICAgIG5hbWU6ICdHaW9yZ2knLFxyXG4gICAgdXNlcnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdSb2xhbmRpJyxcclxuICAgICAgICB1c2VyczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnR2l2aSdcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9XHJcbl1cclxuXHJcbmNvbnN0IGFzZGFzID0nYXMnXHJcblxyXG5jb25zdCB0ZXN0ID0gKGFycikgPT4ge1xyXG4gIGFyci5mb3JFYWNoKHVzZXIgPT4ge1xyXG4gICAgYWxlcnQodXNlci5uYW1lKVxyXG4gICAgaWYodXNlci51c2Vycykge1xyXG4gICAgICB0ZXN0KHVzZXIudXNlcnMpXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcblxyXG59XHJcbmFzZGFzZFxyXG5cclxuXHJcbnRlc3QoYXJyKVxyXG4iXSwibWFwcGluZ3MiOiJBQUNBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyxNQUFNLENBQUMsU0FBUyxFQUFFO0VBQ2pDO0VBQ0FDLElBQUksRUFBRSxJQUFJO0VBRVY7RUFDQUMsVUFBVSxFQUFFO0lBQ1ZDLEVBQUUsRUFBRTtFQUNOLENBQUM7RUFFRDtFQUNBQyxVQUFVLEVBQUU7SUFDUkMsTUFBTSxFQUFFLHFCQUFxQjtJQUM3QkMsTUFBTSxFQUFFO0VBQ1YsQ0FBQztFQUVIO0VBQ0FDLFNBQVMsRUFBRTtJQUNUSixFQUFFLEVBQUU7RUFDTjtBQUNKLENBQUMsQ0FBQztBQUdGLE1BQU1LLEdBQUcsR0FBRyxDQUNWO0VBQ0VDLElBQUksRUFBRSxRQUFRO0VBQ2RDLEtBQUssRUFBRSxDQUNMO0lBQ0VELElBQUksRUFBRSxTQUFTO0lBQ2ZDLEtBQUssRUFBRSxDQUNMO01BQ0VELElBQUksRUFBRTtJQUNSLENBQUM7RUFFTCxDQUFDO0FBRUwsQ0FBQyxDQUNGO0FBRUQsTUFBTUUsS0FBSyxHQUFFLElBQUk7QUFFakIsTUFBTUMsSUFBSSxHQUFJSixHQUFHLElBQUs7RUFDcEJBLEdBQUcsQ0FBQ0ssT0FBTyxDQUFDQyxJQUFJLElBQUk7SUFDbEJDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDTCxJQUFJLENBQUM7SUFDaEIsSUFBR0ssSUFBSSxDQUFDSixLQUFLLEVBQUU7TUFDYkUsSUFBSSxDQUFDRSxJQUFJLENBQUNKLEtBQUssQ0FBQztJQUNsQjtFQUNGLENBQUMsQ0FBQztBQUdKLENBQUM7QUFDRE0sTUFBTTtBQUdOSixJQUFJLENBQUNKLEdBQUcsQ0FBQyIsImlnbm9yZUxpc3QiOltdfQ==\n//# sourceURL=webpack-internal:///./src/scripts/swiper.js\n");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9zdHlsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N3aXBlci8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/OThhZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scss/style.scss\n");

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
/******/ 			// no module.id needed
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;