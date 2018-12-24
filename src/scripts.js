/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./applications/app.js":
/*!*****************************!*\
  !*** ./applications/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller_getEventsElementsDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller/getEventsElementsDOM.js */ \"./applications/controller/getEventsElementsDOM.js\");\n/* jshint esversion: 6 */\n\n// точка входа, с которой начинается выполнение всей модели MVC\n// import Controller from './controller/controller.js';\n// const startGame = () => new Controller();\n// startGame();\n// export default startGame;\n\n// ---\n\n// import Model from './model.js';\n// import View from './view.js';\n// import Controller from './controller.js';\n\n// initializeGame(Model, View, Controller);\n\n// import {one, two} from './model/model.js';\n// import one from './model/model.js';\n// import two from './controller/controller.js';\n\n\n// // example: 1\n// import {out} from './view/view.js';\n// out();\n\n\n// function Constructor(name) {\n// \tthis.name = name;\n// \talert(this.name);\n// }\n\n// Constructor('vasek');\n\n// ----------------------------------------------------------------------------\n\n// import {buttonsEvents} from './view/view.js';\n\nlet getEventsDOM = new _controller_getEventsElementsDOM_js__WEBPACK_IMPORTED_MODULE_0__[\"getEventsElementsDOM\"]();\n\ngetEventsDOM.getDisabledInputWidth;\ngetEventsDOM.getDisabledInputHeight;\ngetEventsDOM.getDisabledInputSpeed;\n\n//# sourceURL=webpack:///./applications/app.js?");

/***/ }),

/***/ "./applications/controller/getElementsDOM.js":
/*!***************************************************!*\
  !*** ./applications/controller/getElementsDOM.js ***!
  \***************************************************/
/*! exports provided: getElementsDOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getElementsDOM\", function() { return getElementsDOM; });\n/* jshint esversion: 6 */\n\nclass getElementsDOM {\n  constructor() {\n    this.canvasField = document.getElementsByClassName('grid__gradient')[0];\n    this.countCycle = document.getElementsByClassName('count__cycle')[0];\n    this.countLife = document.getElementsByClassName('count__life')[0];\n    this.countDead = document.getElementsByClassName('count__dead')[0];\n    this.countPoint = document.getElementsByClassName('count__point')[0];\n    this.pausePlay = document.getElementsByClassName('pause')[0];\n    this.startStop = document.getElementsByClassName('start')[0];    \n    this.speedGame = document.getElementsByClassName('speed')[0];\n    this.fieldWidth = document.getElementsByClassName('width')[0];\n    this.fieldHeight = document.getElementsByClassName('height')[0];\n  }\n \n  get getCanvasFieldDOM() {\n    return this.canvasField;\n  }\n\n  get getCountCycleDOM() {\n    return this.countCycle;\n  }\n\n  get getCountLifeDOM() {\n    return this.countLife;\n  }\n\n  get getCountDeadDOM() {\n    return this.countDead;\n  }\n\n  get getCountPointDOM() {\n    return this.countPoint;\n  }\n\n  get getPausePlayDOM() {\n    return this.pausePlay;\n  }\n\n  get getStartStopDOM() {\n    return this.startStop;\n  }\n\n  get getSpeedGameDOM() {\n    return this.speedGame;\n  }\n\n  get getFieldWidthDOM() {\n    return this.fieldWidth;\n  }\n\n  get getFieldHeightDOM() {\n    return this.fieldHeight;\n  }\n}\n\n//# sourceURL=webpack:///./applications/controller/getElementsDOM.js?");

/***/ }),

/***/ "./applications/controller/getEventsElementsDOM.js":
/*!*********************************************************!*\
  !*** ./applications/controller/getEventsElementsDOM.js ***!
  \*********************************************************/
/*! exports provided: getEventsElementsDOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEventsElementsDOM\", function() { return getEventsElementsDOM; });\n/* harmony import */ var _model_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/model.js */ \"./applications/model/model.js\");\n/* jshint esversion: 6 */\n\n\t\t\n\n// ---\n\nclass getEventsElementsDOM {\n\tconstructor() {\n\t\t// events for the buttons & fields\n\t\tthis.buttonStart = \n\t\t\tdocument.getElementsByClassName('start')[0].onclick = _model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"startGame\"];\n\n\t\tthis.buttonRandom = \n\t\t\tdocument.getElementsByClassName('random')[0].onclick = _model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"randomFill\"];\n\n\t\tthis.buttonPausePlay = \n\t\t\tdocument.getElementsByClassName('pause')[0].onclick = _model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"pauseGame\"];\n\n\t\tthis.inputFieldWidth = \n\t\t\tdocument.getElementsByClassName('width')[0].onclick = _model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"getFieldSize\"];\n\n\t\tthis.inputFieldHeight = \n\t\t\tdocument.getElementsByClassName('height')[0].onclick = _model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"getFieldSize\"];\n\t}\t\t\n\n\t// disable input for edits\n\tget getDisabledInputWidth() {\n\t\tdocument.getElementsByClassName('width')[0].onkeypress = function (e) {\n\t\t\treturn false;\n\t\t};\n\t}\n\n\tget getDisabledInputHeight() {\n\t\tdocument.getElementsByClassName('height')[0].onkeypress = function (e) {\n\t\t\treturn false;\n\t\t};\n\t}\n\n\tget getDisabledInputSpeed() {\n\t\tdocument.getElementsByClassName('speed')[0].onkeypress = function (e) {\n\t\t\treturn false;\n\t\t};\n\t}\n}\n\n//# sourceURL=webpack:///./applications/controller/getEventsElementsDOM.js?");

/***/ }),

/***/ "./applications/model/model.js":
/*!*************************************!*\
  !*** ./applications/model/model.js ***!
  \*************************************/
/*! exports provided: POINT_SIZE, canvas, ctx, fieldSquare, field, getFieldSize, pauseGame, randomFill, startGame, resetGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"POINT_SIZE\", function() { return POINT_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ctx\", function() { return ctx; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fieldSquare\", function() { return fieldSquare; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"field\", function() { return field; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFieldSize\", function() { return getFieldSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pauseGame\", function() { return pauseGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomFill\", function() { return randomFill; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startGame\", function() { return startGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetGame\", function() { return resetGame; });\n/* harmony import */ var _view_DrawField_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/DrawField.js */ \"./applications/view/DrawField.js\");\n/* harmony import */ var _controller_getElementsDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/getElementsDOM.js */ \"./applications/controller/getElementsDOM.js\");\n/* jshint esversion: 6 */\n\n\n\n\nconst COLOR_GREEN = '#00FF00';\nconst GET_DOM = new _controller_getElementsDOM_js__WEBPACK_IMPORTED_MODULE_1__[\"getElementsDOM\"]();\nconst POINT_SIZE = 10; \n\nlet countCycle = GET_DOM.getCountCycleDOM;\nlet countLife = GET_DOM.getCountLifeDOM;\nlet countDead = GET_DOM.getCountDeadDOM;\nlet pausePlay = GET_DOM.getPausePlayDOM;\nlet startStop = GET_DOM.getStartStopDOM;\nlet countPoint = GET_DOM.getCountPointDOM;\nlet speedGame = GET_DOM.getSpeedGameDOM;\nlet fieldWidth = GET_DOM.getFieldWidthDOM;\nlet fieldHeight = GET_DOM.getFieldHeightDOM;\nlet canvas = GET_DOM.getCanvasFieldDOM;\n\nlet ctx;\nlet fieldSquare;\nlet randomStep;\n\nlet count = 0;\nlet counterLife = 0;\nlet counterDead = 0;\nlet pausePlayStatus = 0;\n\n/**\n * NOTE:\n * statusField: 0 - empty field, if > 0 - on field have a points\n * statusFieldReset: for button RESET, 0 - button NOT pressed, 1 - pressed\n * randomStatus: for random points, 0 - not be randoming, 1 - randoming\n * startStatus: 0 - start, 1 - stop\n */\nlet statusField = 0;\nlet statusFieldReset = 0;\nlet randomStatus = 0;\nlet startStatus = 0;\n\n// FIXME: think... is there a need?\n// var startSpeed = 0;\n\nsetWidthHeightCanvas();\nsetCtx();\nsetFieldSquare();\nsetRandomStep();\nsetCellFieldSize();\nsetPointColor();\nDisabledButtons();\n\nfunction setWidthHeightCanvas() {\n\tcanvas.width = fieldWidth.value;\n\tcanvas.height = fieldHeight.value;\n}\n\n// NOTE: ctx = ConTeXt\nfunction setCtx() {\n\tctx = canvas.getContext('2d');\n}\n\n// NOTE: 300 / 10 = 30, it is array will have 30х30\nfunction setFieldSquare() {\n\tfieldSquare = canvas.width * 1 / POINT_SIZE * 1;\n}\n\n// NOTE: for randoming field filling, lookup: fieldSize()\nfunction setRandomStep() {\t\n\trandomStep = canvas.width * 70 / 100;\n}\n\n/**\n * NOTE:\n * the size for the cell field, comes from the size of the square, \n * which is put when you click\n * ctx.fillStyle - color for square\n */\nfunction setCellFieldSize() {\n\tcanvas.style.backgroundSize = POINT_SIZE + 'px ' + POINT_SIZE + 'px';\n}\n\nfunction setPointColor() {\n\tctx.fillStyle = COLOR_GREEN;\n\t// TODO: think of random colors...\n}\n\nfunction DisabledButtons() {\n\tpausePlay.disabled = true;\n}\n\n// NOTE: creating global empty array, our field for points\nlet field = function field() {\n\tlet field = [];\n\treturn field;\n}\n\n// ---\n\n// NOTE: general function\nfunction getReloadSheet() {\n\tlocation.reload();\n}\t\n\n// ---\n\n// NOTE: general function\nfunction clearField() {\t\n\tfor (let i = 0; i < fieldSquare; i++) {\n\t\tfield[i] = [];\n\n\t\tfor (let j = 0; j < fieldSquare; j++) {\n\t\t\tfield[i][j] = 0;\n\t\t}\n\t}\n}\nclearField();\n\n// ---\n\n// NOTE: general function\nfunction checkEmptyField() {\t\n\tfor (let i = 0; i < fieldSquare; i++) {\n\t\tfor (let j = 0; j < fieldSquare; j++) {\n\t\t\tif (field[i][j] != 0) {\n\t\t\t\tstatusField++;\n\t\t\t}\n\t\t}\n\t}\n\n\tcountPoint.innerHTML = statusField;\n}\n\n// ---\n\nfunction getFieldSize() {\n\tproportionHeightWidth();\n\trandomFillNewSize();\n\tsetNewField();\n\n\tfunction proportionHeightWidth() {\n\t\tif (fieldWidth.value < fieldHeight.value) { \n\t\t\tfieldWidth.value = fieldHeight.value;\n\t\t}\n\n\t\tcanvas.width = fieldWidth.value;\n\t\tcanvas.height = fieldHeight.value;\n\t}\n\n\tfunction randomFillNewSize() {\n\t\tif (canvas.width > canvas.height || canvas.width == canvas.height) {\n\t\t\trandomStep = canvas.width * 70 / 100;\n\t\t} else {\n\t\t\trandomStep = canvas.height * 70 / 100;\n\t\t\tconsole.log('randomStep: ' + randomStep);\n\t\t}\n\t}\n\n\tfunction setNewField() {\n\t\tfieldSquare = canvas.width * 1 / POINT_SIZE * 1;\t\n\t\tgetReloadSheet();\n\t}\n}\n\n// ---\n\nfunction pauseGame() {\n\tif (pausePlayStatus == 0) {\n\t\tpausePlayStatus = 1;\t\n\t\tpausePlay.innerHTML = 'Play';\n\n\t\tstart.disabled = true;\n\t} else {\n\t\tpausePlayStatus = 0;\n\t\tpausePlay.innerHTML = 'Pause';\n\n\t\t// NOTE: in this case - continue our game\n\t\tstartLife();\n\t\tstart.disabled = false;\n\t}\t\n\n\t(pausePlayStatus == 0) ? console.log('play') : console.log('pause');\n}\n\n// ---\n\nfunction randomFill() {\t\n\tlet max;\n\tlet min;\n\n\tgetClearFieldBeforeRandom();\n\tsetData();\n\tgetRandomGenerated();\n\n\t// NOTE: clear field\n\tfunction getClearFieldBeforeRandom() {\n\t\tfor (let i = 0; i < fieldSquare; i++) {\n\t\t\tfor (let j = 0; j < fieldSquare; j++) {\t\t\t\n\t\t\t\tstatusField = 0;\n\t\t\t\tfield[i][j] = 0;\n\t\t\t}\n\t\t}\n\t}\n\n\tfunction setData() {\n\t\trandomStatus = 1;\n\t\tctx.clearRect(0, 0, canvas.width, canvas.height);\n\t\t\n\t\tmax = getMaxFieldSize();\n\t\tmin = 1;\n\t}\n\n\t// NOTE: filling the playing field with randomly generated numbers\n\tfunction getRandomGenerated() {\t\n\t\tfor (let i = 0; i < randomStep; i++) {\n\t\t\tlet randX = Math.round(Math.random() * (max - min) + min);\n\t\t\tlet randY = Math.round(Math.random() * (max - min) + min);\n\t\t\trandX = Math.floor(randX / POINT_SIZE);\n\t\t\trandY = Math.floor(randY / POINT_SIZE);\n\n\t\t\tfield[randY][randX] = 1;\n\t\t\tObject(_view_DrawField_js__WEBPACK_IMPORTED_MODULE_0__[\"drawField\"])();\n\t\t}\n\t}\n\n\t// NOTE: take the maximum value of the width or height, whichever is greater\n\tfunction getMaxFieldSize() {\n\t\tlet max = 0;\n\n\t\tif (canvas.width > canvas.height) {\n\t\t\tmax = canvas.width;\t\t\n\t\t} else {\n\t\t\tmax = canvas.height;\n\t\t}\n\n\t\tif (canvas.width == canvas.height) {\n\t\t\tmax = canvas.width;\n\t\t} else { \n\t\t\tmax = canvas.width;\n\t\t}\t\n\n\t\treturn max;\n\t}\n}\n\n// ---\n\nfunction startGame() {\n\tif (startStatus == 0) {\t\t\n\t\tcheckEmptyField();\n\t\tpreparingPlay();\n\n\t\tstartStatus = 1;\n\t\tstartStop.innerHTML = 'Stop';\n\n\t\tconsole.log('startStatus: ' + startStatus);\n\t} else {\t\t\n\t\tresetGame();\n\t\tgetReloadSheet();\n\n\t\t// TODO: thinking about implement without reloading the page\n\t\t// startStatus = 0;\n\t\t// startStop.innerHTML = 'Start';\n\t\t// console.log('startStatus: ' + startStatus);\t\t\n\t}\n\n\tfunction preparingPlay() {\n\t\tif (statusField > 1) {\n\t\t\tstatusFieldReset = 0;\n\t\t\tpausePlay.disabled = false;\n\n\t\t\tstartLife();\t\t\t\n\t\t} else {\n\t\t\talert('Нужно больше точек...');\n\t\t\treturn;\n\t\t}\n\t}\t\n}\n\n// ---\n\nfunction resetGame() {\n\tcount = 0;\n\tcounterLife = 0;\n\tcounterDead = 0;\n\tpausePlayStatus = 0;\t\n\tstatusField = 0;\n\t// startSpeed = 0;\n\n\t// NOTE: stops the game cycle\n\tstatusFieldReset = 1;\n\tpausePlayStatus = 1;\t\t\n\n\tpausePlay.innerHTML = 'Pause';\n\tstartStop.innerHTML = 'Play';\n\tcountCycle.innerHTML = count + ' | ';\n\tcountLife.innerHTML = counterLife  + ' | ';\n\tcountDead.innerHTML = counterDead + ' | ';\n\tcountPoint.innerHTML = statusField;\t\n\t\n\tpausePlay.disabled = true;\n\tstartStop.disabled = false;\n\n\tclearField();\n\tObject(_view_DrawField_js__WEBPACK_IMPORTED_MODULE_0__[\"drawField\"])();\n\n\tconsole.log('RESET: (statusFieldReset): ' + statusFieldReset);\n}\n\n// ---\n\nfunction startLife() {\n\tlet i = 0;\n\tlet j = 0;\n\tlet neighbors = 0;\n\tlet fieldTemp = [];\n\tlet isAlive = [];\n\n\tgameLoop();\n\n\tfunction gameLoop() {\n\t\tif (pausePlayStatus == 0  && statusFieldReset == 0) {\t\t\n\t\t\tfor (i = 0; i < fieldSquare; i++) {\t\t\t\n\t\t\t\tfieldTemp[i] = [];\t\t\t\n\t\t\t\tfor (j = 0; j < fieldSquare; j++) {\t\t\t\t\n\t\t\t\t\tneighbors = 0;\n\t\t\t\t\tsetCountNeighbors();\n\n\t\t\t\t\t// NOTE: this is the current state with points\n\t\t\t\t\tisAlive = field[i][j];\n\n\t\t\t\t\tgetCheckNeighbors();\n\t\t\t\t\tgetCheckPointsField();\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t\tsetData();\n\t\t}\n\t}\n\n\tfunction setCountNeighbors() {\n\t\tlet top = field[topFieldOut(i) - 1][j];\n\t\tlet right = field[i][rightFieldOut(j) + 1];\n\t\tlet bottom = field[rightFieldOut(i) + 1][j];\n\t\tlet left = field[i][topFieldOut(j) - 1];\n\t\tlet topRight = field[topFieldOut(i) - 1][rightFieldOut(j) + 1];\n\t\tlet bottomRight = field[rightFieldOut(i) + 1][rightFieldOut(j) + 1];\n\t\tlet bottomLeft = field[rightFieldOut(i) + 1][topFieldOut(j) - 1];\n\t\tlet topLeft = field[topFieldOut(i) - 1][topFieldOut(j) - 1];\t\t\n\n\t\t// if ((top == 1) || (right == 1) || (bottom == 1) || (left == 1) || \n\t\t// \t\t(topRight == 1) || (bottomRight == 1) || (bottomLeft == 1) || (topLeft == 1)) {\n\t\t// \tneighbors++;\n\t\t// } \n\t\t\n\t\t\n\t\tif (top == 1) { \n\t\t\tneighbors++;\t\t\t\n\t\t}\n\n\t\tif (right == 1) { \n\t\t\tneighbors++;\t\t\t\n\t\t}\n\n\t\tif (bottom == 1) { \n\t\t\tneighbors++;\t\t\t\n\t\t}\n\n\t\tif (left == 1) { \n\t\t\tneighbors++;\t\t\t\n\t\t}\n\n\t\tif (topRight == 1) { \n\t\t\tneighbors++;\t\t\t\n\t\t}\n\n\t\tif (bottomRight == 1) { \n\t\t\tneighbors++;\t\t\t\n\t\t}\n\n\t\tif (bottomLeft == 1) { \n\t\t\tneighbors++;\t\t\t\n\t\t}\n\n\t\tif (topLeft == 1) { \n\t\t\tneighbors++;\t\t\t\n\t\t}\n\t\t\n\t\t// NOTE: ↑ || → || ↓ || ← || ↗ || ↘ || ↙ || ↖\n\t\t// if ((field[topFieldOut(i) - 1][j] == 1) || (field[i][rightFieldOut(j) + 1] == 1)) { \n\t\t// \tneighbors++;\n\t\t// }\n\t\t\n\t\t// if ((field[rightFieldOut(i) + 1][j] == 1) || (field[i][topFieldOut(j) - 1] == 1)) { \n\t\t// \tneighbors++;\n\t\t// }\n\t\t\t\t\n\t\t// if ((field[topFieldOut(i) - 1][rightFieldOut(j) + 1] == 1) || (field[rightFieldOut(i) + 1][rightFieldOut(j) + 1] == 1)) {\n\t\t// \tneighbors++;\n\t\t// }\n\n\t\t// if ((field[rightFieldOut(i) + 1][topFieldOut(j) - 1] == 1) || (field[topFieldOut(i) - 1][topFieldOut(j) - 1] == 1)) {\n\t\t// \tneighbors++;\n\t\t// }\n\n\t\t// // NOTE: ↑\n\t\t// if (field[topFieldOut(i) - 1][j] == 1) {\n\t\t// \tneighbors++;\n\t\t// } \n\n\t\t// // NOTE: →\n\t\t// if (field[i][rightFieldOut(j) + 1] == 1) { \n\t\t// \tneighbors++;\n\t\t// }\n\t\t\n\t\t// // NOTE: ↓\n\t\t// if (field[rightFieldOut(i) + 1][j] == 1) {\n\t\t// \tneighbors++;\n\t\t// }\n\t\t\n\t\t// // NOTE: ←\n\t\t// if (field[i][topFieldOut(j) - 1] == 1) {\n\t\t// \tneighbors++;\n\t\t// }\n\t\t\n\t\t// // NOTE: ↗\n\t\t// if (field[topFieldOut(i) - 1][rightFieldOut(j) + 1] == 1) {\n\t\t// \tneighbors++;\n\t\t// }\n\t\t\n\t\t// // NOTE: ↘\n\t\t// if (field[rightFieldOut(i) + 1][rightFieldOut(j) + 1] == 1) {\n\t\t// \tneighbors++;\n\t\t// }\n\t\t\n\t\t// // NOTE: ↙\n\t\t// if (field[rightFieldOut(i) + 1][topFieldOut(j) - 1] == 1) {\n\t\t// \tneighbors++;\n\t\t// }\n\t\t\n\t\t// // NOTE: ↖\n\t\t// if (field[topFieldOut(i) - 1][topFieldOut(j) - 1] == 1) {\n\t\t// \tneighbors++;\n\t\t// }\n\t}\n\n\tfunction getCheckNeighbors() {\n\t\tif (isAlive == 0 && neighbors === 3) {\n\t\t\tfieldTemp[i][j] = 1;\n\t\t\tcounterLife++;\n\t\t\tcountLife.innerHTML = counterLife  + ' | ';\n\t\t} else {\n\t\t\tif (isAlive == 1 && (neighbors === 3 || neighbors === 2)) {\n\t\t\t\tfieldTemp[i][j] = 1; \n\t\t\t\tcounterLife++;\n\t\t\t\tcountLife.innerHTML = counterLife  + ' | ';\n\t\t\t} else {\n\t\t\t\tif (isAlive == 1 && neighbors > 3) {\n\t\t\t\t\tfieldTemp[i][j] = 0;\n\t\t\t\t\tcounterDead++;\n\t\t\t\t\tcountDead.innerHTML = counterDead  + ' | ';\n\t\t\t\t} else {\n\t\t\t\t\tif (isAlive == 1 && neighbors < 2) {\n\t\t\t\t\t\tfieldTemp[i][j] = 0;\n\t\t\t\t\t\tcounterDead++;\n\t\t\t\t\t\tcountDead.innerHTML = counterDead  + ' | ';\n\t\t\t\t\t} else { \n\t\t\t\t\t\tfieldTemp[i][j] = 0; counterDead++;\n\t\t\t\t\t\t\tcountDead.innerHTML = counterDead + ' | ';\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\tfunction getCheckPointsField() {\n\t\tif (statusField < 1 && randomStatus == 0) {\n\t\t\talert('GameOver man!. Все точки сдохли, плодиться не кому.');\t\t\t\t\t\n\t\t\tlet request = prompt('Введите: НЕТ - что бы остаться на страничке', '');\n\n\t\t\tswitch (request) {\n\t\t\t\tcase 'ДА': \n\t\t\t\t\tgetReloadSheet();\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 'НЕТ': case 'Нет': case 'нет': case 'НеТ': \n\t\t\t\tcase 'НЕт': case 'неТ': case 'нЕт':\n\t\t\t\t\tpausePlay.disabled = true;\n\t\t\t\t\tstartStop.disabled = false;\n\t\t\t\t\tclearTimeout(handle);\n\t\t\t\t\tbreak;\n\n\t\t\t\tdefault: \n\t\t\t\t\talert('Некорректное действие, страница будет перезагружена');\n\t\t\t\t\tgetReloadSheet();\n\t\t\t\t\tbreak;\n\t\t\t}\n\n\t\t\treturn;\n\t\t}\n\t}\n\n\t// NOTE: take into account the output of the field from the top\n\tfunction topFieldOut(i) {\n\t\tif (i == 0) {\n\t\t\treturn fieldSquare;\n\t\t}\n\n\t\treturn i;\n\t}\n\n\t// NOTE: take into account the output of the field from the right\n\tfunction rightFieldOut(i) {\n\t\tif (i == fieldSquare * 1 - 1) {\n\t\t\treturn -1; \n\t\t}\n\n\t\treturn i;\n\t}\n\n\tfunction setData() {\n\t\tfield = fieldTemp;\n\t\tObject(_view_DrawField_js__WEBPACK_IMPORTED_MODULE_0__[\"drawField\"])();\t\t\t\t\n\t\tstatusField = 0;\n\t\trandomStatus = 0;\n\t\tcount++;\n\t\tcountCycle.innerHTML = count + ' | ';\n\t\tcountPoint.innerHTML = statusField;\n\t\tcheckEmptyField();\n\t\t\n\t\t// NOTE: timer for drawing\n\t\tsetTimeout(startLife, speedGame.value);\n\t}\n\n\treturn;\t\n}\n\n// ---\n\n/**\n * NOTE:\n * we hang the click event on canvas, where the event indicates that \n * we will work with the event\n */\ncanvas.onclick = function clickMouseButton(event) {\t\n\tlet x;\n\tlet y;\n\n\tsetData();\n\tgetPointField();\n\tObject(_view_DrawField_js__WEBPACK_IMPORTED_MODULE_0__[\"drawField\"])();\n\tconsole.log(field);\n\n\t/**\n\t * NOTE:\n\t * fields from 0 to 10 will belong to the first cube, \n\t * from 10 to 20 - second, etc.\n\t * 300 / 10 = 30 cubes, then round to the bottom\n\t */\n\tfunction setData() {\n\t\tx = event.offsetX;\n\t\ty = event.offsetY;\n\t\tconsole.log('offsetX: ' + x + ' | ' + 'offsetY: ' + y);\t\n\t\t\n\t\tx = Math.floor(x / POINT_SIZE);\n\t\ty = Math.floor(y / POINT_SIZE);\n\t\tconsole.log('X: ' + x + ' | ' + 'Y: ' + y);\t\n\t}\n\n\t// NOTE: Filling the playing field, where we click, there will be ONE\n\tfunction getPointField() {\n\t\tif (field[y][x] == 0) {\n\t\t\tfield[y][x] = 1;\n\t\t} else {\n\t\t\tfield[y][x] = 0;\n\t\t}\n\t}\n}\n\n//# sourceURL=webpack:///./applications/model/model.js?");

/***/ }),

/***/ "./applications/view/DrawField.js":
/*!****************************************!*\
  !*** ./applications/view/DrawField.js ***!
  \****************************************/
/*! exports provided: drawField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawField\", function() { return drawField; });\n/* harmony import */ var _model_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/model.js */ \"./applications/model/model.js\");\n/* jshint esversion: 6 */\n\n\n\n// ---\n\n// NOTE: Function to draw rectangles on click\nfunction drawField() {\t\n\t_model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].clearRect(0, 0, _model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width, _model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height);\n\tpointDraw();\t\t\n\n\t/**\n\t * NOTE:\n\t * iterate over the array, and if some element = 1, then draw\n\t * point will have a size 10x10px, if be clicked in first field\n\t * coordinates must be from 0 to 10 if second field is from 10 to 20, etc \n\t * that is, in fact it sets a point under the mouse pointer when you click\n\t */\n\tfunction pointDraw() {\n\t\tfor (let i = 0; i < _model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"fieldSquare\"]; i++) {\n\t\t\tfor (let j = 0; j < _model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"fieldSquare\"]; j++) {\n\t\t\t\tif (_model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"field\"][i][j] == 1) {\n\t\t\t\t\t_model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(j * _model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"POINT_SIZE\"], i * _model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"POINT_SIZE\"], _model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"POINT_SIZE\"], _model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"POINT_SIZE\"]);\n\t\t\t\t}\n\t\t\t}\n\t\t}\t\n\t}\n}\n\n// ---\n\n// FIXME: is there a need?\n// function speed() {\n// \tstartSpeed++;\n// \tstart.innerHTML = 'speed: x' + startSpeed;\n// }\n\n\n//# sourceURL=webpack:///./applications/view/DrawField.js?");

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./applications/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./applications/app.js */\"./applications/app.js\");\n\n\n//# sourceURL=webpack:///multi_./applications/app.js?");

/***/ })

/******/ });