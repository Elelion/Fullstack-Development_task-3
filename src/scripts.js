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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller_getEventsElementsDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller/getEventsElementsDOM.js */ \"./applications/controller/getEventsElementsDOM.js\");\n/* harmony import */ var _model_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/model.js */ \"./applications/model/model.js\");\n/* harmony import */ var _view_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/view.js */ \"./applications/view/view.js\");\n/* jshint esversion: 6 */\n\n// import {drawField} from './view/drawField.js';\n// import {View} from './view/view.js';\n\n\n// ---\n\nconst getEventsDOM = new _controller_getEventsElementsDOM_js__WEBPACK_IMPORTED_MODULE_0__[\"getEventsElementsDOM\"]();\n// const model = new Model();\n\ngetEventsDOM.getDisabledInputWidth;\ngetEventsDOM.getDisabledInputHeight;\ngetEventsDOM.getDisabledInputSpeed;\n\n\nconst model = new _model_model_js__WEBPACK_IMPORTED_MODULE_1__[\"Model\"]();\n\n\nconst view = new _view_view_js__WEBPACK_IMPORTED_MODULE_2__[\"View\"]();\n\nview.getDebugging();\n// model.setSizePoint('10');\n// console.log('getSizePoint: ' + model.getSizePoint();\n\n//# sourceURL=webpack:///./applications/app.js?");

/***/ }),

/***/ "./applications/controller/getEventsElementsDOM.js":
/*!*********************************************************!*\
  !*** ./applications/controller/getEventsElementsDOM.js ***!
  \*********************************************************/
/*! exports provided: getEventsElementsDOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEventsElementsDOM\", function() { return getEventsElementsDOM; });\n/* harmony import */ var _model_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/model.js */ \"./applications/model/model.js\");\n/* jshint esversion: 6 */\n\n\n\nconst model = new _model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"Model\"]();\n\n// ---\n\nclass getEventsElementsDOM {\n\tconstructor() {\n\t\t// events for the buttons & fields\n\t\tthis.buttonStart = \n\t\t\tdocument.getElementsByClassName('start')[0].onclick = model.startGame();\n\n\t\tthis.buttonRandom = \n\t\t\tdocument.getElementsByClassName('random')[0].onclick = model.getRandomFill();\n\n\t\tthis.buttonPausePlay = \n\t\t\tdocument.getElementsByClassName('pause')[0].onclick = model.getPauseGame();\n\n\t\tthis.inputFieldWidth = \n\t\t\tdocument.getElementsByClassName('width')[0].onclick = model.getFieldSize();\n\n\t\tthis.inputFieldHeight = \n\t\t\tdocument.getElementsByClassName('height')[0].onclick = model.getFieldSize();\n\t}\t\t\n\n\t// disable input for edits\n\tget getDisabledInputWidth() {\n\t\tdocument.getElementsByClassName('width')[0].onkeypress = function (e) {\n\t\t\treturn false;\n\t\t};\n\t}\n\n\tget getDisabledInputHeight() {\n\t\tdocument.getElementsByClassName('height')[0].onkeypress = function (e) {\n\t\t\treturn false;\n\t\t};\n\t}\n\n\tget getDisabledInputSpeed() {\n\t\tdocument.getElementsByClassName('speed')[0].onkeypress = function (e) {\n\t\t\treturn false;\n\t\t};\n\t}\n}\n\n//# sourceURL=webpack:///./applications/controller/getEventsElementsDOM.js?");

/***/ }),

/***/ "./applications/model/model.js":
/*!*************************************!*\
  !*** ./applications/model/model.js ***!
  \*************************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Model\", function() { return Model; });\n/* jshint esversion: 6 */\n\nclass Model {\n\tconstructor() {\n\t\tthis.ctx;\n\t\tthis.fieldSquare;\n\t\tthis.pointSize;\t\t\n\t\tthis.randomStep;\t\n\n\t\tthis.count = 0;\n\t\tthis.counterLife = 0;\n\t\tthis.counterDead = 0;\n\t\tthis.pausePlayStatus = 0;\n\t\tthis.max = 0;\n\t\tthis.min = 0;\t\t\n\n\t\t/**\n\t\t * NOTE:\n\t\t * statusField: 0 - empty field, if > 0 - on field have a points\n\t\t * statusFieldReset: for button RESET, 0 - button NOT pressed, 1 - pressed\n\t\t * randomStatus: for random points, 0 - not be randoming, 1 - randoming\n\t\t * startStatus: 0 - start, 1 - stop\n\t\t */\n\t\tthis.statusField = 0;\n\t\tthis.statusFieldReset = 0;\n\t\tthis.randomStatus = 0;\n\t\tthis.startStatus = 0;\n\t\t\n\t\t// NOTE: for coordinates X and Y\n\t\t// this.setX = 0;\n\t\t// this.setY = 0;\n\t\tthis.xPos = 0;\n\t\tthis.yPos = 0;\n\n\t\t// NOTE: for gaming cycle\n\t\tthis.neighbors = 0;\n\t\tthis.i = 0;\n\t\tthis.j = 0;\n\t\tthis.fieldTemp = [];\n\t\tthis.isAlive = [];\n\n\t\t// NOTE: creating global empty array, our field for points\n\t\tthis.field = [];\n\n\t\tthis.speedGame = document.getElementsByClassName('speed')[0];\n\t\tthis.fieldWidth = document.getElementsByClassName('width')[0];\n\t\tthis.fieldHeight = document.getElementsByClassName('height')[0];\n\t\tthis.canvas = document.getElementsByClassName('grid__gradient')[0];\t\t\n\n\t\tthis.setCtx();\n\t\tthis.getFieldSquare();\n\t\tthis.setWidthHeightCanvas();\n\t\tthis.setCellFieldSize();\n\t\tthis.clearField();\n\t\tthis.getCanvasClickEvents();\n\t}\t\n\n\t// ---\n\n\t// DEBIGGING: get for view\n\tsetColorPoint(color) {\n\t\tthis.ctx.fillStyle = color;\n\t}\t\n\n\t// ---\n\t\n\t// NOTE: ctx = ConTeXt\n\tsetCtx() {\n\t\tthis.ctx = this.canvas.getContext('2d');\n\t}\n\n\t// ---\n\n\tsetCtxClear() {\n\t\tthis.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n\t}\n\n\t// ---\n\n\tsetSizePoint(size) {\n\t\treturn this.pointSize = size;\n\t}\t\n\n\tgetSizePoint() {\n\t\treturn this.pointSize;\n\t}\n\n\t// ---\n\n\tsetStatusField(status) {\n\t\treturn this.statusField = status;\n\t}\t\n\n\tgetStatusField() {\n\t\treturn this.statusField;\n\t}\n\n\t// ---\n\n\t// NOTE: 300 / 10 = 30, it is array will have 30х30\n\tgetFieldSquare() {\n\t\tlet pointSize = this.getSizePoint();\n\t\tthis.fieldSquare = this.canvas.width * 1 / pointSize * 1;\n\t\treturn this.fieldSquare;\n\t}\n\n\t// ---\n\n\t// DEBIGGING: get for view\n\t// NOTE: for randoming field filling, lookup: fieldSize()\t\t\n\tsetRandomStep(randomMax) {\t\t\n\t\tif (randomMax > 80) {\t\t\t\n\t\t\tthis.randomStep = this.canvas.width * 80 / 100;\n\t\t}\telse {\n\t\t\tthis.randomStep = this.canvas.width * randomMax / 100;\n\t\t}\n\t}\n\n\t// ---\n\n\tgetRandomStep() {\n\t\treturn this.randomStep;\n\t}\n\n\t// ---\n\n\tsetWidthHeightCanvas() {\n\t\tthis.canvas.width = this.fieldWidth.value;\n\t\tthis.canvas.height = this.fieldHeight.value;\n\t}\n\n\t// ---\n\n\t/**\n\t * NOTE:\n\t * the size for the cell field, comes from the size of the square, \n\t * which is put when you click\n\t * ctx.fillStyle - color for square\n\t */\n\tsetCellFieldSize() {\n\t\tlet pointSize = this.pointSize;\n\t\tthis.canvas.style.backgroundSize = pointSize + 'px ' + pointSize + 'px';\n\t}\n\n\t// ---\n\t\n\tsetField(element1, element2, value) {\n\t\treturn this.field[element1][element2] = value;\n\t}\n\n\tgetField() {\n\t\treturn this.field;\t\n\t}\n\n\t// ---\n\n\tresetGame() {\n\t\tthis.count = 0;\n\t\tthis.counterLife = 0;\n\t\tthis.counterDead = 0;\n\t\tthis.pausePlayStatus = 0;\t\n\t\tthis.statusField = 0;\n\n\t\t// NOTE: stops the game cycle\n\t\tthis.statusFieldReset = 1;\n\t\tthis.pausePlayStatus = 1;\n\n\t\tclearField();\n\t\tthis.getDrawField();\n\t\tconsole.log('RESET: (statusFieldReset): ' + statusFieldReset);\n\t}\n\n\t// ---\n\n\tclearField() {\t\t\t\n\t\tfor (let i = 0; i < this.fieldSquare; i++) {\n\t\t\tthis.field[i] = [];\n\n\t\t\tfor (let j = 0; j < this.fieldSquare; j++) {\n\t\t\t\tthis.field[i][j] = 0;\n\t\t\t}\n\t\t}\n\t}\t\n\n\t// ---\n\n\tgetReloadSheet() {\n\t\t// location.reload();\n\t}\n\n\t// ---\n\t\n\t// NOTE: general function\n\tcheckEmptyField() {\n\t\t// let field = this.getField();\n\n\t\tfor (let i = 0; i < this.fieldSquare; i++) {\n\t\t\tfor (let j = 0; j < this.fieldSquare; j++) {\n\t\t\t\tif (this.field[i][j] != 0) {\n\t\t\t\t\tthis.statusField++;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t// ---\n\n\tgetFieldSize() {\n\t\tthis.setProportionHeightWidth();\n\t\tthis.setNewField();\t\n\t}\n\n\tsetProportionHeightWidth() {\n\t\tif (this.fieldWidth.value < this.fieldHeight.value) { \n\t\t\tthis.fieldWidth.value = this.fieldHeight.value;\n\t\t}\n\n\t\tthis.canvas.width = this.fieldWidth.value;\n\t\tthis.canvas.height = this.fieldHeight.value;\n\t}\n\n\tsetNewField() {\n\t\tlet pointSize = this.pointSize;\n\t\tthis.fieldSquare = this.canvas.width * 1 / pointSize * 1;\t\n\t\tthis.getReloadSheet();\n\t}\n\n\t// ---\n\n\tgetPauseGame() {\n\t\tif (this.pausePlayStatus == 0) {\n\t\t\tthis.pausePlayStatus = 1;\t\t\t\t\n\t\t} else {\n\t\t\tthis.pausePlayStatus = 0;\t\t\t\n\t\t\tstartLife();\t\t\t\n\t\t}\t\n\t\n\t\t(this.pausePlayStatus == 0) ? console.log('play') : console.log('pause');\n\t}\n\t\n\t// ---\n\n\tgetRandomFill() {\t\n\t\tthis.getClearFieldBeforeRandom();\n\t\tthis.getMaxRandomNumber();\n\t\tthis.getRandomGenerated();\n\t}\n\n\t// NOTE: clear field\n\tgetClearFieldBeforeRandom() {\n\t\tlet fieldSquare = this.getFieldSquare();\n\n\t\tfor (let i = 0; i < fieldSquare; i++) {\n\t\t\tfor (let j = 0; j < fieldSquare; j++) {\t\t\t\t\n\t\t\t\tthis.setStatusField('0');\n\t\t\t\tthis.setField(i, j, '0');\n\t\t\t\t// this.field[i][j] = 0;\n\t\t\t}\n\t\t}\n\t}\n\n\tgetMaxRandomNumber() {\n\t\tthis.randomStatus = 1;\n\t\tthis.setCtxClear();\t\t\n\t\t\n\t\tthis.max = this.getMaxFieldSize();\n\t\tthis.min = 1;\n\t}\n\n\t// NOTE: take the maximum value of the width or height, whichever is greater\n\tgetMaxFieldSize() {\n\t\tlet max = 0;\n\n\t\tif (this.canvas.width > this.canvas.height) {\n\t\t\tmax = this.canvas.width;\t\t\n\t\t} else {\n\t\t\tmax = this.canvas.height;\n\t\t}\n\n\t\tif (this.canvas.width == this.canvas.height) {\n\t\t\tmax = this.canvas.width;\n\t\t} else { \n\t\t\tmax = this.canvas.width;\n\t\t}\t\n\n\t\treturn max;\n\t}\n\n\t// NOTE: filling the playing field with randomly generated numbers\n\tgetRandomGenerated() {\t\n\t\tlet pointSize = this.pointSize;\n\t\t// this.field = this.getField();\n\n\t\tfor (let i = 0; i < this.randomStep; i++) {\n\t\t\tlet randX = Math.round(Math.random() * (this.max - this.min) + this.min);\n\t\t\tlet randY = Math.round(Math.random() * (this.max - this.min) + this.min);\n\t\t\trandX = Math.floor(randX / pointSize);\n\t\t\trandY = Math.floor(randY / pointSize);\n\n\t\t\tthis.field[randY][randX] = 1;\n\t\t\tthis.getDrawField();\n\t\t}\n\t}\n\t\n\t// ---\n\n\tstartGame() {\n\t\tif (this.startStatus == 0) {\t\t\n\t\t\tthis.checkEmptyField();\n\t\t\tthis.preparingPlay();\n\t\n\t\t\tthis.startStatus = 1;\t\t\t\n\t\t\tconsole.log('startStatus: ' + this.startStatus);\n\t\t} else {\t\t\n\t\t\tthis.resetGame();\n\t\t\tgetReloadSheet();\n\t\n\t\t\t// TODO: thinking about implement without reloading the page\n\t\t\t// startStatus = 0;\n\t\t\t// startStop.innerHTML = 'Start';\n\t\t\t// console.log('startStatus: ' + startStatus);\t\t\n\t\t}\n\n\t\treturn;\n\t}\n\n\tpreparingPlay() {\n\t\tif (this.statusField > 1) {\n\t\t\tthis.statusFieldReset = 0;\n\t\t\tstartLife();\t\t\t\n\t\t} else {\t\t\t\n\t\t\treturn;\n\t\t}\n\t}\t\n\n\t// ---\n\n\tstartLife() {\n\t\tif (this.pausePlayStatus == 0  && this.statusFieldReset == 0) {\t\t\n\t\t\tfor (this.i = 0; this.i < this.fieldSquare; this.i++) {\t\t\t\n\t\t\t\tthis.fieldTemp[i] = [];\t\t\t\n\t\t\t\tfor (this.j = 0; this.j < this.fieldSquare; this.j++) {\t\t\t\t\n\t\t\t\t\tthis.neighbors = 0;\n\t\t\t\t\tsetCountNeighbors();\n\n\t\t\t\t\t// NOTE: this is the current state with points\n\t\t\t\t\tthis.isAlive = this.field[i][j];\n\n\t\t\t\t\tgetCheckNeighbors();\n\t\t\t\t\tgetCheckPointsField();\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t\tsetLifeData();\n\t\t}\n\t}\n\n\tsetCountNeighbors() {\n\t\tlet top = this.field[this.setTopFieldOut(i) - 1][j];\n\t\tlet right = this.field[i][this.setRightFieldOut(j) + 1];\n\t\tlet bottom = this.field[this.setRightFieldOut(i) + 1][j];\n\t\tlet left = this.field[i][this.setTopFieldOut(j) - 1];\n\t\tlet topRight = this.field[this.setTopFieldOut(i) - 1][this.setRightFieldOut(j) + 1];\n\t\tlet bottomRight = this.field[this.setRightFieldOut(i) + 1][this.setRightFieldOut(j) + 1];\n\t\tlet bottomLeft = this.field[this.setRightFieldOut(i) + 1][this.setTopFieldOut(j) - 1];\n\t\tlet topLeft = this.field[this.setTopFieldOut(i) - 1][this.setTopFieldOut(j) - 1];\t\t\n\t\t\n\t\tif (top == 1) { \n\t\t\tthis.neighbors++;\t\t\t\n\t\t}\n\n\t\tif (right == 1) { \n\t\t\tthis.neighbors++;\t\t\t\n\t\t}\n\n\t\tif (bottom == 1) { \n\t\t\tthis.neighbors++;\t\t\t\n\t\t}\n\n\t\tif (left == 1) { \n\t\t\tthis.neighbors++;\t\t\t\n\t\t}\n\n\t\tif (topRight == 1) { \n\t\t\tthis.neighbors++;\t\t\t\n\t\t}\n\n\t\tif (bottomRight == 1) { \n\t\t\tthis.neighbors++;\t\t\t\n\t\t}\n\n\t\tif (bottomLeft == 1) { \n\t\t\tthis.neighbors++;\t\t\t\n\t\t}\n\n\t\tif (topLeft == 1) { \n\t\t\tthis.neighbors++;\t\t\t\n\t\t}\n\t}\n\n\tgetCheckNeighbors() {\n\t\tif (this.isAlive == 0 && this.neighbors === 3) {\n\t\t\tthis.fieldTemp[i][j] = 1;\n\t\t\tthis.counterLife++;\n\t\t} else {\n\t\t\tif (this.isAlive == 1 && (this.neighbors === 3 || this.neighbors === 2)) {\n\t\t\t\tthis.fieldTemp[i][j] = 1; \n\t\t\t\tthis.counterLife++;\t\t\t\t\n\t\t\t} else {\n\t\t\t\tif (this.isAlive == 1 && this.neighbors > 3) {\n\t\t\t\t\tthis.fieldTemp[i][j] = 0;\n\t\t\t\t\tthis.counterDead++;\t\t\t\t\t\n\t\t\t\t} else {\n\t\t\t\t\tif (this.isAlive == 1 && this.neighbors < 2) {\n\t\t\t\t\t\tthis.fieldTemp[i][j] = 0;\n\t\t\t\t\t\tthis.counterDead++;\t\t\t\t\t\t\n\t\t\t\t\t} else { \n\t\t\t\t\t\tthis.fieldTemp[i][j] = 0; \n\t\t\t\t\t\tthis.counterDead++;\t\t\t\t\t\t\t\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\tgetCounterLife() {\n\t\treturn this.counterLife;\n\t}\n\n\tgetCheckPointsField() {\n\t\tif (this.statusField < 1 && this.randomStatus == 0) {\t\t\t\t\n\t\t\tclearTimeout(handle);\t\t\t\t\t\t\n\t\t}\n\t\n\t\treturn;\n\t}\n\n\t// NOTE: take into account the output of the field from the top\n\tsetTopFieldOut(i) {\n\t\tif (i == 0) {\n\t\t\treturn this.fieldSquare;\n\t\t}\n\n\t\treturn i;\n\t}\n\n\t// NOTE: take into account the output of the field from the right\n\tsetRightFieldOut(i) {\n\t\tif (i == this.fieldSquare * 1 - 1) {\n\t\t\treturn -1; \n\t\t}\n\n\t\treturn i;\n\t}\n\n\tsetLifeData() {\n\t\tthis.field = this.fieldTemp;\t\t\n\t\tthis.getDrawField();\n\t\tstatusField = 0;\n\t\trandomStatus = 0;\n\t\tcount++;\t\t\n\t\tthis.checkEmptyField();\n\t\t\n\t\t// NOTE: timer for drawing\n\t\tsetTimeout(this.startLife, this.speedGame.value);\n\t}\n\n\t// ---\n\n\t/**\n\t * NOTE:\n\t * we hang the click event on canvas, where the event indicates that \n\t * we will work with the event\n\t *\n\t * fields from 0 to 10 will belong to the first cube, \n\t * from 10 to 20 - second, etc.\n\t * 300 / 10 = 30 cubes, then round to the bottom\n\t */\t\n\tgetCanvasClickEvents() {\n\t\tthis.canvas.onclick = function clickMouseButton(event) {\n\t\t\tthis.xPos = event.offsetX;\n\t\t\tthis.yPos = event.offsetY;\n\t\t\tlet pointSize = this.getSizePoint;\n\t\t\talert(pointSize);\n\t\n\t\t\tconsole.log('offsetX: ' + this.xPos + ' | ' + 'offsetY: ' + this.yPos);\t\n\t\t\t\n\t\t\tthis.xPos = Math.floor(this.setX / pointSize);\n\t\t\tthis.yPos = Math.floor(this.yPos / pointSize);\n\t\t\tconsole.log('X: ' + this.xPos + ' | ' + 'Y: ' + this.yPos);\t\n\t\n\t\t\tthis.getPointField();\n\t\t\tthis.getDrawField();\n\t\t\tconsole.log(this.field);\n\t\t}\t\t\n\t\t\n\t\t// return; \n\t}\n\n\t// NOTE: Filling the playing field, where we click, there will be ONE\n\tgetPointField() {\n\t\tif (this.field[this.yPos][this.xPos] == 0) {\n\t\t\tthis.field[this.yPos][this.xPos] = 1;\n\t\t} else {\n\t\t\tthis.field[this.yPos][this.xPos] = 0;\n\t\t}\n\t\t// return;\n\t}\n\n\t// ---\n\n\tgetDrawField() {\n\t\tthis.getClearRect();\n\t\tthis.getDrawPoint();\n\t}\n\n\t/**\n\t * NOTE:\n\t * iterate over the array, and if some element = 1, then draw\n\t * point will have a size 10x10px, if be clicked in first field\n\t * coordinates must be from 0 to 10 if second field is from 10 to 20, etc \n\t * that is, in fact it sets a point under the mouse pointer when you click\n\t */\n\tgetDrawPoint() {\n\t\t// let field = this.getField();\t\n\t\tlet pointSize = this.pointSize;\n\t\t\n\t\tfor (let i = 0; i < this.getFieldSquare; i++) {\n\t\t\tfor (let j = 0; j < this.getFieldSquare; j++) {\n\t\t\t\tif (this.field[i][j] == 1) {\n\t\t\t\t\tthis.ctx.fillRect(j * pointSize, i * pointSize, pointSize, pointSize);\n\t\t\t\t}\n\t\t\t}\n\t\t}\t\n\t}\n\n\tgetClearRect() {\n\t\tthis.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n\t}\n\n\t// ==============================================================\n\n\tgetAlert() {\t\t\n\t\tlet field = function field() {\n\t\t\tlet field = [];\n\t\t\treturn field;\n\t\t}\n\n\t\tconsole.log('----');\n\t\tconsole.log('sizePoint: ' + this.getSizePoint());\n\t\tconsole.log('fieldSquare: ' + this.getFieldSquare());\n\t\tconsole.log('RandomStep: ' + this.getRandomStep());\n\n\t\tfor (let i = 0; i < 30; i++) {\n\t\t\tfield[i] = [];\n\t\n\t\t\tfor (let j = 0; j < 30; j++) {\n\t\t\t\tfield[i][j] = 10;\n\t\t\t}\n\t\t}\n\t\t\t\t\n\t\tconsole.log('getField: ' + field[4][5]);\n\t}\n}\n\n// ----------------------------------------------------------------------------\n\n// const model = new Model();\n// model.canvas.onclick = function clickMouseButton(event) {\t\n// \tlet x;\n// \tlet y;\n// \tlet pointSize = model.getSizePoint();\n// \tlet field = model.getField();\n// \tconsole.log(field);\n\n// \tsetData();\n// \t// getPointField();\n// \t// drawField();\n// \t// console.log(field);\n// }\n\n// \tfunction setData() {\t\t\n// \t\tx = event.offsetX;\n// \t\ty = event.offsetY;\n// \t\tconsole.log('offsetX: ' + x + ' | ' + 'offsetY: ' + y);\t\n\t\t\n// \t\tx = Math.floor(x / pointSize);\n// \t\ty = Math.floor(y / pointSize);\n// \t\tconsole.log('X: ' + x + ' | ' + 'Y: ' + y);\t\n// \t}\n\n\t// function getPointField() {\n\t// \tif (field[y][x] == 0) {\n\t// \t\tfield[y][x] = 1;\n\t// \t} else {\n\t// \t\tfield[y][x] = 0;\n\t// \t}\n\t// }\n\n\n//# sourceURL=webpack:///./applications/model/model.js?");

/***/ }),

/***/ "./applications/view/view.js":
/*!***********************************!*\
  !*** ./applications/view/view.js ***!
  \***********************************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"View\", function() { return View; });\n/* harmony import */ var _model_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/model.js */ \"./applications/model/model.js\");\n/* jshint esversion: 6 */\n\n\n\nconst model = new _model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"Model\"]();\n\n\n// console.log('getSizePoint: ' + model.pointSize);\n// ---\n\nclass View {\n\tconstructor() {\n\t\tthis.COLOR_GREEN = '#00FF00';\n\t\tthis.POINT_SIZE = '10'; \n\t\tthis.RANDOM = '70';\t\t\n\n\t\tmodel.setColorPoint(this.COLOR_GREEN);\n\t\tmodel.setSizePoint(this.POINT_SIZE);\n\t\tmodel.setRandomStep(this.RANDOM);\n\t}\n\n\t// ---\n\n\tgetDebugging() {\n\t\tmodel.getAlert();\n\t}\n}\n\n\n\n// // ---\n\n// function DisabledButtons() {\n// \tpausePlay.disabled = true;\n// }\n// DisabledButtons();\n\n// // ---\n\n// function setPointColor() {\n// \tctx.fillStyle = COLOR_GREEN;\t\n// }\n// setPointColor();\n\n// // ---\n\n// export function pauseGame() {\n// \tif (pausePlayStatus == 0) {\n// \t\t// pausePlayStatus = 1;\t\n// \t\tpausePlay.innerHTML = 'Play';\n\n// \t\tstart.disabled = true;\n// \t} else {\n// \t\t// pausePlayStatus = 0;\n// \t\tpausePlay.innerHTML = 'Pause';\n\n// \t\t// NOTE: in this case - continue our game\n// \t\tstartLife();\n// \t\tstart.disabled = false;\n// \t}\t\n\n// \t// (pausePlayStatus == 0) ? console.log('play') : console.log('pause');\n// }\n\n// // ---\n\n// function checkEmptyField() {\t\n// \t// for (let i = 0; i < fieldSquare; i++) {\n// \t// \tfor (let j = 0; j < fieldSquare; j++) {\n// \t// \t\tif (field[i][j] != 0) {\n// \t// \t\t\tstatusField++;\n// \t// \t\t}\n// \t// \t}\n// \t// }\n\n// \tcountPoint.innerHTML = statusField;\n// }\n\n// // ---\n\n// function getRandomGenerated() {\t\n// \tfor (let i = 0; i < randomStep; i++) {\n// \t\t// let randX = Math.round(Math.random() * (max - min) + min);\n// \t\t// let randY = Math.round(Math.random() * (max - min) + min);\n// \t\t// randX = Math.floor(randX / POINT_SIZE);\n// \t\t// randY = Math.floor(randY / POINT_SIZE);\n\n// \t\t// field[randY][randX] = 1;\n// \t\tdrawField();\n// \t}\n// }\n\n// // ---\n\n// export function startGame() {\n// \tif (startStatus == 0) {\t\t\n// \t\tcheckEmptyField();\n// \t\tpreparingPlay();\n\n// \t\t// startStatus = 1;\n// \t\tstartStop.innerHTML = 'Stop';\n\n// \t\t// console.log('startStatus: ' + startStatus);\n// \t} else {\t\t\n// \t\tresetGame();\n// \t\tgetReloadSheet();\t\t\n// \t}\n\n// \tfunction preparingPlay() {\n// \t\tif (statusField > 1) {\n// \t\t\t// statusFieldReset = 0;\n// \t\t\tpausePlay.disabled = false;\n\n// \t\t\tstartLife();\t\t\t\n// \t\t} else {\n// \t\t\talert('Нужно больше точек...');\n// \t\t\t// return;\n// \t\t}\n// \t}\t\n// }\n\n// function getCheckPointsField() {\n// \tif (statusField < 1 && randomStatus == 0) {\n// \t\talert('GameOver man!. Все точки сдохли, плодиться не кому.');\t\t\t\t\t\n// \t\tlet request = prompt('Введите: НЕТ - что бы остаться на страничке', '');\n\n// \t\tswitch (request) {\n// \t\t\tcase 'ДА': \n// \t\t\t\tgetReloadSheet();\n// \t\t\t\tbreak;\n\n// \t\t\tcase 'НЕТ': case 'Нет': case 'нет': case 'НеТ': \n// \t\t\tcase 'НЕт': case 'неТ': case 'нЕт':\n// \t\t\t\tpausePlay.disabled = true;\n// \t\t\t\tstartStop.disabled = false;\n// \t\t\t\t// clearTimeout(handle);\n// \t\t\t\tbreak;\n\n// \t\t\tdefault: \n// \t\t\t\talert('Некорректное действие, страница будет перезагружена');\n// \t\t\t\tgetReloadSheet();\n// \t\t\t\tbreak;\n// \t\t}\n\n// \t\treturn;\n// \t}\n// }\n\n// // ---\n\n// getCheckNeighbors() {\n// \tif (this.isAlive == 0 && this.neighbors === 3) {\n// \t\tfieldTemp[i][j] = 1;\n// \t\tcounterLife++;\n// \t\tcountLife.innerHTML = counterLife  + ' | ';\n// \t} else {\n// \t\tif (this.isAlive == 1 && (this.neighbors === 3 || this.neighbors === 2)) {\n// \t\t\tfieldTemp[i][j] = 1; \n// \t\t\tcounterLife++;\n// \t\t\tcountLife.innerHTML = counterLife  + ' | ';\n// \t\t} else {\n// \t\t\tif (this.isAlive == 1 && this.neighbors > 3) {\n// \t\t\t\tfieldTemp[i][j] = 0;\n// \t\t\t\tcounterDead++;\n// \t\t\t\tcountDead.innerHTML = counterDead  + ' | ';\n// \t\t\t} else {\n// \t\t\t\tif (this.isAlive == 1 && this.neighbors < 2) {\n// \t\t\t\t\tfieldTemp[i][j] = 0;\n// \t\t\t\t\tcounterDead++;\n// \t\t\t\t\tcountDead.innerHTML = counterDead  + ' | ';\n// \t\t\t\t} else { \n// \t\t\t\t\tfieldTemp[i][j] = 0; counterDead++;\n// \t\t\t\t\t\tcountDead.innerHTML = counterDead + ' | ';\n// \t\t\t\t}\n// \t\t\t}\n// \t\t}\n// \t}\n// }\n\n// // ---\n\n// setLifeData() {\n// \t// this.field = this.fieldTemp;\n// \tdrawField();\n// \t// statusField = 0;\n// \t// randomStatus = 0;\n// \t// count++;\n// \tcountCycle.innerHTML = count + ' | ';\n// \tcountPoint.innerHTML = statusField;\n// \t// model.checkEmptyField();\n\t\n// \t// NOTE: timer for drawing\n// \t// setTimeout(startLife, this.speedGame.value);\n// }\n\n// // ---\n\n// export function resetGame() {\n// \t// count = 0;\n// \t// counterLife = 0;\n// \t// counterDead = 0;\n// \t// pausePlayStatus = 0;\t\n// \t// statusField = 0;\n// \t// startSpeed = 0;\n\n// \t// NOTE: stops the game cycle\n// \t// statusFieldReset = 1;\n// \t// pausePlayStatus = 1;\t\t\n\n// \tpausePlay.innerHTML = 'Pause';\n// \tstartStop.innerHTML = 'Play';\n// \tcountCycle.innerHTML = count + ' | ';\n// \tcountLife.innerHTML = counterLife  + ' | ';\n// \tcountDead.innerHTML = counterDead + ' | ';\n// \tcountPoint.innerHTML = statusField;\t\n\t\n// \tpausePlay.disabled = true;\n// \tstartStop.disabled = false;\n\n// \tclearField();\t\n// \tconsole.log('RESET: (statusFieldReset): ' + statusFieldReset);\n// }\n\n// // ---\n\n// canvas.onclick = function clickMouseButton(event) {\t\n// \tlet x;\n// \tlet y;\n// \tlet pointSize = this.getSizePoint();\n// \tlet field = this.getField();\n\n// \tsetData();\n// \tgetPointField();\n// \t// drawField();\n// \tconsole.log(field);\n// }\n\n// \tfunction setData() {\t\t\n// \t\tx = event.offsetX;\n// \t\ty = event.offsetY;\n// \t\tconsole.log('offsetX: ' + x + ' | ' + 'offsetY: ' + y);\t\n\t\t\n// \t\tx = Math.floor(x / pointSize);\n// \t\ty = Math.floor(y / pointSize);\n// \t\tconsole.log('X: ' + x + ' | ' + 'Y: ' + y);\t\n// \t}\n\n// \tfunction getPointField() {\n// \t\tif (field[y][x] == 0) {\n// \t\t\tfield[y][x] = 1;\n// \t\t} else {\n// \t\t\tfield[y][x] = 0;\n// \t\t}\n// \t}\n\n//# sourceURL=webpack:///./applications/view/view.js?");

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