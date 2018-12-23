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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller_getEventsElementsDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller/getEventsElementsDOM.js */ \"./applications/controller/getEventsElementsDOM.js\");\n/* jshint esversion: 6 */\r\n\r\n// точка входа, с которой начинается выполнение всей модели MVC\r\n// import Controller from './controller/controller.js';\r\n// const startGame = () => new Controller();\r\n// startGame();\r\n// export default startGame;\r\n\r\n// ---\r\n\r\n// import Model from './model.js';\r\n// import View from './view.js';\r\n// import Controller from './controller.js';\r\n\r\n// initializeGame(Model, View, Controller);\r\n\r\n// import {one, two} from './model/model.js';\r\n// import one from './model/model.js';\r\n// import two from './controller/controller.js';\r\n\r\n\r\n// // example: 1\r\n// import {out} from './view/view.js';\r\n// out();\r\n\r\n\r\n// function Constructor(name) {\r\n// \tthis.name = name;\r\n// \talert(this.name);\r\n// }\r\n\r\n// Constructor('vasek');\r\n\r\n// ----------------------------------------------------------------------------\r\n\r\n// import {buttonsEvents} from './view/view.js';\r\n\r\nlet getEventsDOM = new _controller_getEventsElementsDOM_js__WEBPACK_IMPORTED_MODULE_0__[\"getEventsElementsDOM\"]();\r\n\r\ngetEventsDOM.getDisabledInputWidth;\r\ngetEventsDOM.getDisabledInputHeight;\r\ngetEventsDOM.getDisabledInputSpeed;\n\n//# sourceURL=webpack:///./applications/app.js?");

/***/ }),

/***/ "./applications/controller/getElementsDOM.js":
/*!***************************************************!*\
  !*** ./applications/controller/getElementsDOM.js ***!
  \***************************************************/
/*! exports provided: getElementsDOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getElementsDOM\", function() { return getElementsDOM; });\n/* jshint esversion: 6 */\r\n\r\nclass getElementsDOM {\r\n  constructor() {\r\n    this.canvasField = document.getElementsByClassName('grid__gradient')[0];\r\n    this.countCycle = document.getElementsByClassName('count__cycle')[0];\r\n    this.countLife = document.getElementsByClassName('count__life')[0];\r\n    this.countDead = document.getElementsByClassName('count__dead')[0];\r\n    this.countPoint = document.getElementsByClassName('count__point')[0];\r\n    this.pausePlay = document.getElementsByClassName('pause')[0];\r\n    this.startStop = document.getElementsByClassName('start')[0];    \r\n    this.speedGame = document.getElementsByClassName('speed')[0];\r\n    this.fieldWidth = document.getElementsByClassName('width')[0];\r\n    this.fieldHeight = document.getElementsByClassName('height')[0];\r\n  }\r\n \r\n  get getCanvasFieldDOM() {\r\n    return this.canvasField;\r\n  }\r\n\r\n  get getCountCycleDOM() {\r\n    return this.countCycle;\r\n  }\r\n\r\n  get getCountLifeDOM() {\r\n    return this.countLife;\r\n  }\r\n\r\n  get getCountDeadDOM() {\r\n    return this.countDead;\r\n  }\r\n\r\n  get getCountPointDOM() {\r\n    return this.countPoint;\r\n  }\r\n\r\n  get getPausePlayDOM() {\r\n    return this.pausePlay;\r\n  }\r\n\r\n  get getStartStopDOM() {\r\n    return this.startStop;\r\n  }\r\n\r\n  get getSpeedGameDOM() {\r\n    return this.speedGame;\r\n  }\r\n\r\n  get getFieldWidthDOM() {\r\n    return this.fieldWidth;\r\n  }\r\n\r\n  get getFieldHeightDOM() {\r\n    return this.fieldHeight;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./applications/controller/getElementsDOM.js?");

/***/ }),

/***/ "./applications/controller/getEventsElementsDOM.js":
/*!*********************************************************!*\
  !*** ./applications/controller/getEventsElementsDOM.js ***!
  \*********************************************************/
/*! exports provided: getEventsElementsDOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEventsElementsDOM\", function() { return getEventsElementsDOM; });\n/* harmony import */ var _model_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/model.js */ \"./applications/model/model.js\");\n/* jshint esversion: 6 */\r\n\r\n\t\t\r\n\r\n// ---\r\n\r\nclass getEventsElementsDOM {\r\n\tconstructor() {\r\n\t\t// events for the buttons & fields\r\n\t\tthis.buttonStart = \r\n\t\t\tdocument.getElementsByClassName('start')[0].onclick = _model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"startGame\"];\r\n\r\n\t\tthis.buttonRandom = \r\n\t\t\tdocument.getElementsByClassName('random')[0].onclick = _model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"randomFill\"];\r\n\r\n\t\tthis.buttonPausePlay = \r\n\t\t\tdocument.getElementsByClassName('pause')[0].onclick = _model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"pauseGame\"];\r\n\r\n\t\tthis.inputFieldWidth = \r\n\t\t\tdocument.getElementsByClassName('width')[0].onclick = _model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"getFieldSize\"];\r\n\r\n\t\tthis.inputFieldHeight = \r\n\t\t\tdocument.getElementsByClassName('height')[0].onclick = _model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"getFieldSize\"];\r\n\t}\t\t\r\n\r\n\t// disable input for edits\r\n\tget getDisabledInputWidth() {\r\n\t\tdocument.getElementsByClassName('width')[0].onkeypress = function (e) {\r\n\t\t\treturn false;\r\n\t\t};\r\n\t}\r\n\r\n\tget getDisabledInputHeight() {\r\n\t\tdocument.getElementsByClassName('height')[0].onkeypress = function (e) {\r\n\t\t\treturn false;\r\n\t\t};\r\n\t}\r\n\r\n\tget getDisabledInputSpeed() {\r\n\t\tdocument.getElementsByClassName('speed')[0].onkeypress = function (e) {\r\n\t\t\treturn false;\r\n\t\t};\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./applications/controller/getEventsElementsDOM.js?");

/***/ }),

/***/ "./applications/model/model.js":
/*!*************************************!*\
  !*** ./applications/model/model.js ***!
  \*************************************/
/*! exports provided: canvas, ctx, pointSize, fieldSquare, field, getFieldSize, pauseGame, randomFill, startGame, resetGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ctx\", function() { return ctx; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pointSize\", function() { return pointSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fieldSquare\", function() { return fieldSquare; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"field\", function() { return field; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFieldSize\", function() { return getFieldSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pauseGame\", function() { return pauseGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomFill\", function() { return randomFill; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startGame\", function() { return startGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetGame\", function() { return resetGame; });\n/* harmony import */ var _view_DrawField_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/DrawField.js */ \"./applications/view/DrawField.js\");\n/* harmony import */ var _controller_getElementsDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/getElementsDOM.js */ \"./applications/controller/getElementsDOM.js\");\n/* jshint esversion: 6 */\r\n\r\n// Модель - это данные и правила, которые используются для работы с данными, \r\n// которые представляют концепцию управления приложением. В любом приложении \r\n// вся структура моделируется как данные, которые обрабатываются определённым \r\n// образом. Что такое пользователь для приложения — сообщение или книга? Только\r\n// данные, которые должны быть обработаны в соответствии с правилами (дата не \r\n// может указывать в будущее, e-mail должен быть в определённом формате, имя \r\n// не может быть длиннее Х символов, и так далее).\r\n\r\n// ---\r\n\r\n\r\n\r\n\r\nconst GREEN = '#00FF00';\r\n\r\nlet getDOM = new _controller_getElementsDOM_js__WEBPACK_IMPORTED_MODULE_1__[\"getElementsDOM\"]();\r\nlet countCycle = getDOM.getCountCycleDOM;\r\nlet countLife = getDOM.getCountLifeDOM;\r\nlet countDead = getDOM.getCountDeadDOM;\r\nlet pausePlay = getDOM.getPausePlayDOM;\r\nlet startStop = getDOM.getStartStopDOM;\r\nlet countPoint = getDOM.getCountPointDOM;\r\nlet speedGame = getDOM.getSpeedGameDOM;\r\nlet fieldWidth = getDOM.getFieldWidthDOM;\r\nlet fieldHeight = getDOM.getFieldHeightDOM;\r\nlet canvas = getDOM.getCanvasFieldDOM;\r\n\r\ncanvas.width = fieldWidth.value;\r\ncanvas.height = fieldHeight.value;\r\n\r\n// NOTE: ctx = ConTeXt\r\nlet ctx = canvas.getContext('2d');\r\n\r\nlet count = 0;\r\nlet counterLife = 0;\r\nlet counterDead = 0;\r\n\r\n/**\r\n * NOTE:\r\n * statusField: 0 - empty field, if > 0 - on field have a points\r\n * statusFieldReset: for button RESET, 0 - button NOT pressed, 1 - pressed\r\n * randomStatus: for random points, 0 - not be randoming, 1 - randoming\r\n * startStatus: 0 - start, 1 - stop\r\n */\r\nlet pausePlayStatus = 0;\r\nlet statusField = 0;\r\nlet statusFieldReset = 0;\r\nlet randomStatus = 0;\r\nlet startStatus = 0;\r\n\r\n// FIXME: think... is there a need?\r\n// var startSpeed = 0;\r\n\r\nlet pointSize = 10; \r\n\r\n// NOTE: 300 / 10 = 30, it is array will have 30х30\r\nlet fieldSquare = canvas.width * 1 / pointSize * 1;\r\n\r\n// NOTE: for randoming field filling, lookup: fieldSize()\r\nlet randomStep = canvas.width * 70 / 100;\r\n\r\n/**\r\n * NOTE:\r\n * the size for the cell field, comes from the size of the square, \r\n * which is put when you click\r\n * ctx.fillStyle - color for square\r\n */\r\ncanvas.style.backgroundSize = pointSize + 'px ' + pointSize + 'px';\r\nctx.fillStyle = GREEN;\r\npausePlay.disabled = true;\r\n// TODO: think of random colors...\r\n\r\n// NOTE: creating global empty array, our field for points\r\nlet field = function field() {\r\n\tlet field = [];\r\n\treturn field;\r\n}\r\n\r\n// ---\r\n\r\nfunction getFieldSize() {\r\n\tproportionHeightWidth();\r\n\trandomFillNewSize();\r\n\tsetNewField();\r\n\r\n\tfunction proportionHeightWidth() {\r\n\t\tif (fieldWidth.value < fieldHeight.value) { \r\n\t\t\tfieldWidth.value = fieldHeight.value;\r\n\t\t}\r\n\r\n\t\tcanvas.width = fieldWidth.value;\r\n\t\tcanvas.height = fieldHeight.value;\r\n\t}\r\n\r\n\tfunction randomFillNewSize() {\r\n\t\tif (canvas.width > canvas.height || canvas.width == canvas.height) {\r\n\t\t\trandomStep = canvas.width * 70 / 100;\r\n\t\t} else {\r\n\t\t\trandomStep = canvas.height * 70 / 100;\r\n\t\t\tconsole.log('randomStep: ' + randomStep);\r\n\t\t}\r\n\t}\r\n\r\n\tfunction setNewField() {\r\n\t\tfieldSquare = canvas.width * 1 / pointSize * 1;\t\r\n\t\tlocation.reload();\t\r\n\t}\r\n}\r\n\r\n// ---\r\n\r\nfunction clearField() {\t\r\n\tfor (let i = 0; i < fieldSquare; i++) {\r\n\t\tfield[i] = [];\r\n\r\n\t\tfor (let j = 0; j < fieldSquare; j++) {\r\n\t\t\tfield[i][j] = 0;\r\n\t\t}\r\n\t}\r\n}\r\nclearField();\r\n\r\n// ---\r\n\r\nfunction checkEmptyField() {\t\r\n\tfor (let i = 0; i < fieldSquare; i++) {\r\n\t\tfor (let j = 0; j < fieldSquare; j++) {\r\n\t\t\tif (field[i][j] != 0) {\r\n\t\t\t\tstatusField++;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tcountPoint.innerHTML = statusField;\r\n}\r\n\r\n// ---\r\n\r\nfunction pauseGame() {\r\n\tif (pausePlayStatus == 0) {\r\n\t\tpausePlayStatus = 1;\t\r\n\t\tpausePlay.innerHTML = 'Play';\r\n\r\n\t\tstart.disabled = true;\r\n\t} else {\r\n\t\tpausePlayStatus = 0;\r\n\t\tpausePlay.innerHTML = 'Pause';\r\n\r\n\t\t// NOTE: in this case - continue our game\r\n\t\tstartLife();\r\n\t\tstart.disabled = false;\r\n\t}\t\r\n\r\n\t(pausePlayStatus == 0) ? console.log('play') : console.log('pause');\r\n}\r\n\r\n// ---\r\n\r\nfunction randomFill() {\t\r\n\tlet max;\r\n\tlet min;\r\n\r\n\tgetClearFieldBeforeRandom();\r\n\tsetData();\r\n\tgetRandomGenerated();\r\n\r\n\t// NOTE: clear field\r\n\tfunction getClearFieldBeforeRandom() {\r\n\t\tfor (let i = 0; i < fieldSquare; i++) {\r\n\t\t\tfor (let j = 0; j < fieldSquare; j++) {\t\t\t\r\n\t\t\t\tstatusField = 0;\r\n\t\t\t\tfield[i][j] = 0;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tfunction setData() {\r\n\t\trandomStatus = 1;\r\n\t\tctx.clearRect(0, 0, canvas.width, canvas.height);\r\n\t\t\r\n\t\tmax = getMaxFieldSize();\r\n\t\tmin = 1;\r\n\t}\r\n\r\n\t// NOTE: filling the playing field with randomly generated numbers\r\n\tfunction getRandomGenerated() {\t\r\n\t\tfor (let i = 0; i < randomStep; i++) {\r\n\t\t\tlet randX = Math.round(Math.random() * (max - min) + min);\r\n\t\t\tlet randY = Math.round(Math.random() * (max - min) + min);\r\n\t\t\trandX = Math.floor(randX / pointSize);\r\n\t\t\trandY = Math.floor(randY / pointSize);\r\n\r\n\t\t\tfield[randY][randX] = 1;\r\n\t\t\tObject(_view_DrawField_js__WEBPACK_IMPORTED_MODULE_0__[\"drawField\"])();\r\n\t\t}\r\n\t}\r\n\r\n\t// NOTE: take the maximum value of the width or height, whichever is greater\r\n\tfunction getMaxFieldSize() {\r\n\t\tlet max = 0;\r\n\r\n\t\tif (canvas.width > canvas.height) {\r\n\t\t\tmax = canvas.width;\t\t\r\n\t\t} else {\r\n\t\t\tmax = canvas.height;\r\n\t\t}\r\n\r\n\t\tif (canvas.width == canvas.height) {\r\n\t\t\tmax = canvas.width;\r\n\t\t} else { \r\n\t\t\tmax = canvas.width;\r\n\t\t}\t\r\n\r\n\t\treturn max;\r\n\t}\r\n}\r\n\r\n// ---\r\n\r\nfunction startGame() {\r\n\tif (startStatus == 0) {\r\n\t\tcheckEmptyField();\r\n\r\n\t\tif (statusField > 1) {\r\n\t\t\tstatusFieldReset = 0;\t\t\t\r\n\t\t\tpausePlay.disabled = false;\r\n\r\n\t\t\tstartLife();\r\n\t\t} else {\r\n\t\t\talert('Нужно больше точек...');\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tstartStatus = 1;\r\n\t\tstartStop.innerHTML = 'Stop';\r\n\t\tconsole.log('startStatus: ' + startStatus);\r\n\t} else {\r\n\t\tresetGame();\r\n\r\n\t\tstartStatus = 0;\r\n\t\tstartStop.innerHTML = 'Start';\r\n\t}\r\n}\r\n\r\n// ---\r\n\r\nfunction resetGame() {\r\n\tcount = 0;\r\n\tcounterLife = 0;\r\n\tcounterDead = 0;\r\n\tpausePlayStatus = 0;\t\r\n\tstatusField = 0;\r\n\t// startSpeed = 0;\r\n\r\n\t// NOTE: stops the game cycle\r\n\tstatusFieldReset = 1;\r\n\tpausePlayStatus = 1;\t\t\r\n\r\n\tpausePlay.innerHTML = 'Pause';\r\n\tstartStop.innerHTML = 'Play';\r\n\tcountCycle.innerHTML = count + ' | ';\r\n\tcountLife.innerHTML = counterLife  + ' | ';\r\n\tcountDead.innerHTML = counterDead + ' | ';\r\n\tcountPoint.innerHTML = statusField;\t\r\n\t\r\n\tpausePlay.disabled = true;\r\n\tstartStop.disabled = false;\r\n\r\n\tclearField();\r\n\tObject(_view_DrawField_js__WEBPACK_IMPORTED_MODULE_0__[\"drawField\"])();\r\n\r\n\tconsole.log('RESET: (statusFieldReset): ' + statusFieldReset);\r\n}\r\n\r\n// ---\r\n\r\nfunction startLife() {\r\n\tlet fieldTemp = [];\r\n\tlet isAlive = [];\t\t\r\n\r\n\tif (pausePlayStatus == 0  && statusFieldReset == 0) {\t\t\r\n\t\tfor (let i = 0; i < fieldSquare; i++) {\t\t\t\r\n\t\t\tfieldTemp[i] = [];\t\t\t\r\n\t\t\tfor (let j = 0; j < fieldSquare; j++) {\t\t\t\t\r\n\t\t\t\t// мы должны посчитать кол-во соседей, нужно учесть что тут у нас встречаются\r\n\t\t\t\t// краевые условия\r\n\t\t\t\tlet neighbors = 0;\r\n\t\t\t\tsetCountNeighbors();\r\n\t\t\t\tisAlive = field[i][j]; // т.е. это текущее состояние с точками\r\n\t\t\t\tgetCheckNeighbors();\r\n\t\t\t\tgetCheckPointsField();\t\t\r\n\r\n\t\t\t\tfunction setCountNeighbors() {\r\n\t\t\t\t\t// NOTE: ↑\r\n\t\t\t\t\tif (field[topFieldOut(i) - 1][j] == 1) {\r\n\t\t\t\t\t\tneighbors++;\r\n\t\t\t\t\t} \r\n\r\n\t\t\t\t\t// NOTE: →\r\n\t\t\t\t\tif (field[i][rightFieldOut(j) + 1] == 1) { \r\n\t\t\t\t\t\tneighbors++;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t// NOTE: ↓\r\n\t\t\t\t\tif (field[rightFieldOut(i) + 1][j] == 1) {\r\n\t\t\t\t\t\tneighbors++;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t// NOTE: ←\r\n\t\t\t\t\tif (field[i][topFieldOut(j) - 1] == 1) {\r\n\t\t\t\t\t\tneighbors++;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t// NOTE: ↗\r\n\t\t\t\t\tif (field[topFieldOut(i) - 1][rightFieldOut(j) + 1] == 1) {\r\n\t\t\t\t\t\tneighbors++;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t// NOTE: ↘\r\n\t\t\t\t\tif (field[rightFieldOut(i) + 1][rightFieldOut(j) + 1] == 1) {\r\n\t\t\t\t\t\tneighbors++;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t// NOTE: ↙\r\n\t\t\t\t\tif (field[rightFieldOut(i) + 1][topFieldOut(j) - 1] == 1) {\r\n\t\t\t\t\t\tneighbors++;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t// NOTE: ↖\r\n\t\t\t\t\tif (field[topFieldOut(i) - 1][topFieldOut(j) - 1] == 1) {\r\n\t\t\t\t\t\tneighbors++;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\tfunction getCheckNeighbors() {\r\n\t\t\t\t\tif (isAlive == 0 && neighbors === 3) {\r\n\t\t\t\t\t\tfieldTemp[i][j] = 1;\r\n\t\t\t\t\t\tcounterLife++;\r\n\t\t\t\t\t\tcountLife.innerHTML = counterLife  + ' | ';\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tif (isAlive == 1 && (neighbors === 3 || neighbors === 2)) {\r\n\t\t\t\t\t\t\tfieldTemp[i][j] = 1; \r\n\t\t\t\t\t\t\tcounterLife++;\r\n\t\t\t\t\t\t\tcountLife.innerHTML = counterLife  + ' | ';\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tif (isAlive == 1 && neighbors > 3) {\r\n\t\t\t\t\t\t\t\tfieldTemp[i][j] = 0;\r\n\t\t\t\t\t\t\t\tcounterDead++;\r\n\t\t\t\t\t\t\t\tcountDead.innerHTML = counterDead  + ' | ';\r\n\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\tif (isAlive == 1 && neighbors < 2) {\r\n\t\t\t\t\t\t\t\t\tfieldTemp[i][j] = 0;\r\n\t\t\t\t\t\t\t\t\tcounterDead++;\r\n\t\t\t\t\t\t\t\t\tcountDead.innerHTML = counterDead  + ' | ';\r\n\t\t\t\t\t\t\t\t} else { \r\n\t\t\t\t\t\t\t\t\tfieldTemp[i][j] = 0; counterDead++;\r\n\t\t\t\t\t\t\t\t\t\tcountDead.innerHTML = counterDead + ' | ';\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\tfunction getCheckPointsField() {\r\n\t\t\t\t\tif (statusField < 1 && randomStatus == 0) {\r\n\t\t\t\t\t\talert('GameOver man!. Все точки сдохли, плодиться не кому.');\t\t\t\t\t\r\n\t\t\t\t\t\tlet request = prompt('Введите: НЕТ - что бы остаться на страничке', '');\r\n\r\n\t\t\t\t\t\tswitch (request) {\r\n\t\t\t\t\t\t\tcase 'ДА': \r\n\t\t\t\t\t\t\t\tlocation.reload(); \r\n\t\t\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t\t\tcase 'НЕТ': case 'Нет': case 'нет': case 'НеТ': \r\n\t\t\t\t\t\t\tcase 'НЕт': case 'неТ': case 'нЕт':\r\n\t\t\t\t\t\t\t\tpausePlay.disabled = true;\r\n\t\t\t\t\t\t\t\tstartStop.disabled = true;\r\n\t\t\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t\t\tdefault: \r\n\t\t\t\t\t\t\t\talert('Некорректное действие, страница будет перезагружена');\r\n\t\t\t\t\t\t\t\tlocation.reload();\r\n\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\treturn;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\tfield = fieldTemp;\r\n\t\tObject(_view_DrawField_js__WEBPACK_IMPORTED_MODULE_0__[\"drawField\"])();\t\t\r\n\t\tcount++;\t\t\r\n\t\tstatusField = 0;\r\n\t\trandomStatus = 0;\r\n\t\tcountCycle.innerHTML = count + ' | ';\r\n\t\tcountPoint.innerHTML = statusField;\r\n\t\tcheckEmptyField();\r\n\t\t\r\n\t\t// NOTE: timer for drawing\r\n\t\tsetTimeout(startLife, speedGame.value);\r\n\t}\r\n\r\n\t// NOTE: take into account the output of the field from the top\r\n\tfunction topFieldOut(i) {\r\n\t\tif (i == 0) {\r\n\t\t\treturn fieldSquare;\r\n\t\t}\r\n\r\n\t\treturn i;\r\n\t}\r\n\r\n\t// NOTE: take into account the output of the field from the right\r\n\tfunction rightFieldOut(i) {\r\n\t\tif (i == fieldSquare * 1 - 1) {\r\n\t\t\treturn -1; \r\n\t\t}\r\n\r\n\t\treturn i;\r\n\t}\r\n\r\n\treturn;\t\r\n}\r\n\r\n// ---\r\n\r\n/**\r\n * NOTE:\r\n * we hang the click event on canvas, where the event indicates that \r\n * we will work with the event\r\n */\r\ncanvas.onclick = function clickMouseButton(event) {\t\r\n\tlet x;\r\n\tlet y;\r\n\r\n\tsetData();\r\n\tgetPointField();\r\n\tObject(_view_DrawField_js__WEBPACK_IMPORTED_MODULE_0__[\"drawField\"])();\r\n\tconsole.log(field);\r\n\r\n\t/**\r\n\t * NOTE:\r\n\t * fields from 0 to 10 will belong to the first cube, \r\n\t * from 10 to 20 - second, etc.\r\n\t * 300 / 10 = 30 cubes, then round to the bottom\r\n\t */\r\n\tfunction setData() {\r\n\t\tx = event.offsetX;\r\n\t\ty = event.offsetY;\r\n\t\tconsole.log('offsetX: ' + x + ' | ' + 'offsetY: ' + y);\t\r\n\t\t\r\n\t\tx = Math.floor(x / pointSize);\r\n\t\ty = Math.floor(y / pointSize);\r\n\t\tconsole.log('X: ' + x + ' | ' + 'Y: ' + y);\t\r\n\t}\r\n\r\n\t// NOTE: Filling the playing field, where we click, there will be ONE\r\n\tfunction getPointField() {\r\n\t\tif (field[y][x] == 0) {\r\n\t\t\tfield[y][x] = 1;\r\n\t\t} else {\r\n\t\t\tfield[y][x] = 0;\r\n\t\t}\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./applications/model/model.js?");

/***/ }),

/***/ "./applications/view/DrawField.js":
/*!****************************************!*\
  !*** ./applications/view/DrawField.js ***!
  \****************************************/
/*! exports provided: drawField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawField\", function() { return drawField; });\n/* harmony import */ var _model_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/model.js */ \"./applications/model/model.js\");\n/* jshint esversion: 6 */\r\n\r\n\r\n\r\n// ---\r\n\r\n// NOTE: Function to draw rectangles on click\r\nfunction drawField() {\t\r\n\t_model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].clearRect(0, 0, _model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width, _model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height);\r\n\tpointDraw();\t\t\r\n\r\n\t/**\r\n\t * NOTE:\r\n\t * iterate over the array, and if some element = 1, then draw\r\n\t * point will have a size 10x10px, if be clicked in first field\r\n\t * coordinates must be from 0 to 10 if second field is from 10 to 20, etc \r\n\t * that is, in fact it sets a point under the mouse pointer when you click\r\n\t */\r\n\tfunction pointDraw() {\r\n\t\tfor (let i = 0; i < _model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"fieldSquare\"]; i++) {\r\n\t\t\tfor (let j = 0; j < _model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"fieldSquare\"]; j++) {\r\n\t\t\t\tif (_model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"field\"][i][j] == 1) {\r\n\t\t\t\t\t_model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(j * _model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"pointSize\"], i * _model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"pointSize\"], _model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"pointSize\"], _model_model_js__WEBPACK_IMPORTED_MODULE_0__[\"pointSize\"]);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\t\r\n\t}\r\n}\r\n\r\n// ---\r\n\r\n// FIXME: is there a need?\r\n// function speed() {\r\n// \tstartSpeed++;\r\n// \tstart.innerHTML = 'speed: x' + startSpeed;\r\n// }\r\n\n\n//# sourceURL=webpack:///./applications/view/DrawField.js?");

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