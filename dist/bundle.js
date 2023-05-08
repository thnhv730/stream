/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const openStream = __webpack_require__(/*! ./openStream */ \"./src/openStream.js\");\r\n\r\nopenStream();\r\n\r\nconsole.log('Xin chao cac ban');\n\n//# sourceURL=webpack://stream/./src/app.js?");

/***/ }),

/***/ "./src/openStream.js":
/*!***************************!*\
  !*** ./src/openStream.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const playVideo = __webpack_require__(/*! ./playVideo */ \"./src/playVideo.js\");\r\n\r\nfunction openStream() {\r\n    navigator.mediaDevices.getUserMedia({ audio: false, video: true })\r\n        .then(stream => playVideo(stream, 'localStream'))\r\n        .catch(err => console.log(err));\r\n}\r\n\r\nmodule.exports = openStream;\n\n//# sourceURL=webpack://stream/./src/openStream.js?");

/***/ }),

/***/ "./src/playVideo.js":
/*!**************************!*\
  !*** ./src/playVideo.js ***!
  \**************************/
/***/ ((module) => {

eval("function playVideo(stream, idVideo) {\r\n    const video = document.getElementById(idVideo);\r\n    video.srcObject = stream;\r\n    video.onloadedmetadata = () => {\r\n        video.play();\r\n    };\r\n}\r\n\r\nmodule.exports = playVideo;\n\n//# sourceURL=webpack://stream/./src/playVideo.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;