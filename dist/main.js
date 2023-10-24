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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const content = document.getElementById(\"content\");\n\n // -- Navigation Bar --\n\nconst navBar = document.createElement(\"div\");\nconst homeTab = document.createElement(\"div\");\nconst menuTab = document.createElement(\"div\");\nconst contactTab = document.createElement(\"div\");\n\ncontent.appendChild(navBar);\nnavBar.appendChild(homeTab);\nnavBar.appendChild(menuTab);\nnavBar.appendChild(contactTab);\n\nhomeTab.textContent = \"Home\";\nmenuTab.textContent = \"Menu\";\ncontactTab.textContent = \"Contact\";\n\n\n\n\n//# sourceURL=webpack://restaurant-lp/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;