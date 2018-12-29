/* jshint esversion: 6 */

import {drawField} from '../view/drawField.js';
import {getElementsDOM} from '../controller/getElementsDOM.js';

const COLOR_GREEN = '#00FF00';
export const POINT_SIZE = '10'; 
const GET_DOM = new getElementsDOM();

export let countCycle = GET_DOM.getCountCycleDOM();
export let countLife = GET_DOM.getCountLifeDOM();
export let countDead = GET_DOM.getCountDeadDOM();
export let pausePlay = GET_DOM.getPausePlayDOM();
export let startStop = GET_DOM.getStartStopDOM();
export let countPoint = GET_DOM.getCountPointDOM();
export let speedGame = GET_DOM.getSpeedGameDOM();
export let fieldWidth = GET_DOM.getFieldWidthDOM();
export let fieldHeight = GET_DOM.getFieldHeightDOM();
export let canvas = GET_DOM.getCanvasFieldDOM();

export let ctx;
export let fieldSquare;
let randomStep;

let count = 0;
let counterLife = 0;
let counterDead = 0;
let pausePlayStatus = 0;

/**
 * NOTE:
 * statusField: 0 - empty field, if > 0 - on field have a points
 * statusFieldReset: for button RESET, 0 - button NOT pressed, 1 - pressed
 * randomStatus: for random points, 0 - not be randoming, 1 - randoming
 * startStatus: 0 - start, 1 - stop
 */
let statusField = 0;
let statusFieldReset = 0;
let randomStatus = 0;
let startStatus = 0;

// FIXME: think... is there a need?
// var startSpeed = 0;

setWidthHeightCanvas();
setCtx();
setFieldSquare();
setRandomStep();
setCellFieldSize();
setPointColor();
DisabledButtons();

function setWidthHeightCanvas() {
	canvas.width = fieldWidth.value;
	canvas.height = fieldHeight.value;
}

// NOTE: ctx = ConTeXt
function setCtx() {
	ctx = canvas.getContext('2d');
}

// NOTE: 300 / 10 = 30, it is array will have 30х30
function setFieldSquare() {
	fieldSquare = canvas.width * 1 / POINT_SIZE * 1;
}

// NOTE: for randoming field filling, lookup: fieldSize()
function setRandomStep() {	
	randomStep = canvas.width * 70 / 100;
}

/**
 * NOTE:
 * the size for the cell field, comes from the size of the square, 
 * which is put when you click
 * ctx.fillStyle - color for square
 */
function setCellFieldSize() {
	canvas.style.backgroundSize = POINT_SIZE + 'px ' + POINT_SIZE + 'px';
}

function setPointColor() {
	ctx.fillStyle = COLOR_GREEN;
	// TODO: think of random colors...
}

function DisabledButtons() {
	pausePlay.disabled = true;
}

// NOTE: creating global empty array, our field for points
export let field = function field() {
	let field = [];
	return field;
}

// ---

// NOTE: general function
function getReloadSheet() {
	location.reload();
}	

// ---

// NOTE: general function
function clearField() {	
	for (let i = 0; i < fieldSquare; i++) {
		field[i] = [];

		for (let j = 0; j < fieldSquare; j++) {
			field[i][j] = 0;
		}
	}
}
clearField();

// ---

// NOTE: general function
function checkEmptyField() {	
	for (let i = 0; i < fieldSquare; i++) {
		for (let j = 0; j < fieldSquare; j++) {
			if (field[i][j] != 0) {
				statusField++;
			}
		}
	}

	countPoint.innerHTML = statusField;
}

// ---

export function getFieldSize() {
	proportionHeightWidth();
	randomFillNewSize();
	setNewField();

	function proportionHeightWidth() {
		if (fieldWidth.value < fieldHeight.value) { 
			fieldWidth.value = fieldHeight.value;
		}

		canvas.width = fieldWidth.value;
		canvas.height = fieldHeight.value;
	}

	function randomFillNewSize() {
		if (canvas.width > canvas.height || canvas.width == canvas.height) {
			randomStep = canvas.width * 70 / 100;
		} else {
			randomStep = canvas.height * 70 / 100;
			console.log('randomStep: ' + randomStep);
		}
	}

	function setNewField() {
		fieldSquare = canvas.width * 1 / POINT_SIZE * 1;	
		getReloadSheet();
	}
}

// ---

export function pauseGame() {
	if (pausePlayStatus == 0) {
		pausePlayStatus = 1;	
		pausePlay.innerHTML = 'Play';

		start.disabled = true;
	} else {
		pausePlayStatus = 0;
		pausePlay.innerHTML = 'Pause';

		// NOTE: in this case - continue our game
		startLife();
		start.disabled = false;
	}	

	(pausePlayStatus == 0) ? console.log('play') : console.log('pause');
}

// ---

export function randomFill() {	
	let max;
	let min;

	getClearFieldBeforeRandom();
	setData();
	getRandomGenerated();

	// NOTE: clear field
	function getClearFieldBeforeRandom() {
		for (let i = 0; i < fieldSquare; i++) {
			for (let j = 0; j < fieldSquare; j++) {			
				statusField = 0;
				field[i][j] = 0;
			}
		}
	}

	function setData() {
		randomStatus = 1;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		max = getMaxFieldSize();
		min = 1;
	}

	// NOTE: filling the playing field with randomly generated numbers
	function getRandomGenerated() {	
		for (let i = 0; i < randomStep; i++) {
			let randX = Math.round(Math.random() * (max - min) + min);
			let randY = Math.round(Math.random() * (max - min) + min);
			randX = Math.floor(randX / POINT_SIZE);
			randY = Math.floor(randY / POINT_SIZE);

			field[randY][randX] = 1;
			drawField();
		}
	}

	// NOTE: take the maximum value of the width or height, whichever is greater
	function getMaxFieldSize() {
		let max = 0;

		if (canvas.width > canvas.height) {
			max = canvas.width;		
		} else {
			max = canvas.height;
		}

		if (canvas.width == canvas.height) {
			max = canvas.width;
		} else { 
			max = canvas.width;
		}	

		return max;
	}
}

// ---

export function startGame() {
	if (startStatus == 0) {		
		checkEmptyField();
		preparingPlay();

		startStatus = 1;
		startStop.innerHTML = 'Stop';

		console.log('startStatus: ' + startStatus);
	} else {		
		resetGame();
		getReloadSheet();

		// TODO: thinking about implement without reloading the page
		// startStatus = 0;
		// startStop.innerHTML = 'Start';
		// console.log('startStatus: ' + startStatus);		
	}

	function preparingPlay() {
		if (statusField > 1) {
			statusFieldReset = 0;
			pausePlay.disabled = false;

			startLife();			
		} else {
			alert('Нужно больше точек...');
			return;
		}
	}	
}

// ---

export function resetGame() {
	count = 0;
	counterLife = 0;
	counterDead = 0;
	pausePlayStatus = 0;	
	statusField = 0;
	// startSpeed = 0;

	// NOTE: stops the game cycle
	statusFieldReset = 1;
	pausePlayStatus = 1;		

	pausePlay.innerHTML = 'Pause';
	startStop.innerHTML = 'Play';
	countCycle.innerHTML = count + ' | ';
	countLife.innerHTML = counterLife  + ' | ';
	countDead.innerHTML = counterDead + ' | ';
	countPoint.innerHTML = statusField;	
	
	pausePlay.disabled = true;
	startStop.disabled = false;

	clearField();
	drawField();

	console.log('RESET: (statusFieldReset): ' + statusFieldReset);
}

// ---

function startLife() {
	let i = 0;
	let j = 0;
	let neighbors = 0;
	let fieldTemp = [];
	let isAlive = [];

	gameLoop();

	function gameLoop() {
		if (pausePlayStatus == 0  && statusFieldReset == 0) {		
			for (i = 0; i < fieldSquare; i++) {			
				fieldTemp[i] = [];			
				for (j = 0; j < fieldSquare; j++) {				
					neighbors = 0;
					setCountNeighbors();

					// NOTE: this is the current state with points
					isAlive = field[i][j];

					getCheckNeighbors();
					getCheckPointsField();
				}
			}
			
			setData();
		}
	}

	function setCountNeighbors() {
		let top = field[topFieldOut(i) - 1][j];
		let right = field[i][rightFieldOut(j) + 1];
		let bottom = field[rightFieldOut(i) + 1][j];
		let left = field[i][topFieldOut(j) - 1];
		let topRight = field[topFieldOut(i) - 1][rightFieldOut(j) + 1];
		let bottomRight = field[rightFieldOut(i) + 1][rightFieldOut(j) + 1];
		let bottomLeft = field[rightFieldOut(i) + 1][topFieldOut(j) - 1];
		let topLeft = field[topFieldOut(i) - 1][topFieldOut(j) - 1];		

		// if ((top == 1) || (right == 1) || (bottom == 1) || (left == 1) || 
		// 		(topRight == 1) || (bottomRight == 1) || (bottomLeft == 1) || (topLeft == 1)) {
		// 	neighbors++;
		// } 
		
		
		if (top == 1) { 
			neighbors++;			
		}

		if (right == 1) { 
			neighbors++;			
		}

		if (bottom == 1) { 
			neighbors++;			
		}

		if (left == 1) { 
			neighbors++;			
		}

		if (topRight == 1) { 
			neighbors++;			
		}

		if (bottomRight == 1) { 
			neighbors++;			
		}

		if (bottomLeft == 1) { 
			neighbors++;			
		}

		if (topLeft == 1) { 
			neighbors++;			
		}
		
		// NOTE: ↑ || → || ↓ || ← || ↗ || ↘ || ↙ || ↖
		// if ((field[topFieldOut(i) - 1][j] == 1) || (field[i][rightFieldOut(j) + 1] == 1)) { 
		// 	neighbors++;
		// }
		
		// if ((field[rightFieldOut(i) + 1][j] == 1) || (field[i][topFieldOut(j) - 1] == 1)) { 
		// 	neighbors++;
		// }
				
		// if ((field[topFieldOut(i) - 1][rightFieldOut(j) + 1] == 1) || (field[rightFieldOut(i) + 1][rightFieldOut(j) + 1] == 1)) {
		// 	neighbors++;
		// }

		// if ((field[rightFieldOut(i) + 1][topFieldOut(j) - 1] == 1) || (field[topFieldOut(i) - 1][topFieldOut(j) - 1] == 1)) {
		// 	neighbors++;
		// }

		// // NOTE: ↑
		// if (field[topFieldOut(i) - 1][j] == 1) {
		// 	neighbors++;
		// } 

		// // NOTE: →
		// if (field[i][rightFieldOut(j) + 1] == 1) { 
		// 	neighbors++;
		// }
		
		// // NOTE: ↓
		// if (field[rightFieldOut(i) + 1][j] == 1) {
		// 	neighbors++;
		// }
		
		// // NOTE: ←
		// if (field[i][topFieldOut(j) - 1] == 1) {
		// 	neighbors++;
		// }
		
		// // NOTE: ↗
		// if (field[topFieldOut(i) - 1][rightFieldOut(j) + 1] == 1) {
		// 	neighbors++;
		// }
		
		// // NOTE: ↘
		// if (field[rightFieldOut(i) + 1][rightFieldOut(j) + 1] == 1) {
		// 	neighbors++;
		// }
		
		// // NOTE: ↙
		// if (field[rightFieldOut(i) + 1][topFieldOut(j) - 1] == 1) {
		// 	neighbors++;
		// }
		
		// // NOTE: ↖
		// if (field[topFieldOut(i) - 1][topFieldOut(j) - 1] == 1) {
		// 	neighbors++;
		// }
	}

	function getCheckNeighbors() {
		if (isAlive == 0 && neighbors === 3) {
			fieldTemp[i][j] = 1;
			counterLife++;
			countLife.innerHTML = counterLife  + ' | ';
		} else {
			if (isAlive == 1 && (neighbors === 3 || neighbors === 2)) {
				fieldTemp[i][j] = 1; 
				counterLife++;
				countLife.innerHTML = counterLife  + ' | ';
			} else {
				if (isAlive == 1 && neighbors > 3) {
					fieldTemp[i][j] = 0;
					counterDead++;
					countDead.innerHTML = counterDead  + ' | ';
				} else {
					if (isAlive == 1 && neighbors < 2) {
						fieldTemp[i][j] = 0;
						counterDead++;
						countDead.innerHTML = counterDead  + ' | ';
					} else { 
						fieldTemp[i][j] = 0; counterDead++;
							countDead.innerHTML = counterDead + ' | ';
					}
				}
			}
		}
	}

	function getCheckPointsField() {
		if (statusField < 1 && randomStatus == 0) {
			alert('GameOver man!. Все точки сдохли, плодиться не кому.');					
			let request = prompt('Введите: НЕТ - что бы остаться на страничке', '');

			switch (request) {
				case 'ДА': 
					getReloadSheet();
					break;

				case 'НЕТ': case 'Нет': case 'нет': case 'НеТ': 
				case 'НЕт': case 'неТ': case 'нЕт':
					pausePlay.disabled = true;
					startStop.disabled = false;
					clearTimeout(handle);
					break;

				default: 
					alert('Некорректное действие, страница будет перезагружена');
					getReloadSheet();
					break;
			}

			return;
		}
	}

	// NOTE: take into account the output of the field from the top
	function topFieldOut(i) {
		if (i == 0) {
			return fieldSquare;
		}

		return i;
	}

	// NOTE: take into account the output of the field from the right
	function rightFieldOut(i) {
		if (i == fieldSquare * 1 - 1) {
			return -1; 
		}

		return i;
	}

	function setData() {
		field = fieldTemp;
		drawField();				
		statusField = 0;
		randomStatus = 0;
		count++;
		countCycle.innerHTML = count + ' | ';
		countPoint.innerHTML = statusField;
		checkEmptyField();
		
		// NOTE: timer for drawing
		setTimeout(startLife, speedGame.value);
	}

	return;	
}

// ---

/**
 * NOTE:
 * we hang the click event on canvas, where the event indicates that 
 * we will work with the event
 */
canvas.onclick = function clickMouseButton(event) {	
	let x;
	let y;

	setData();
	getPointField();
	drawField();
	console.log(field);

	/**
	 * NOTE:
	 * fields from 0 to 10 will belong to the first cube, 
	 * from 10 to 20 - second, etc.
	 * 300 / 10 = 30 cubes, then round to the bottom
	 */
	function setData() {
		x = event.offsetX;
		y = event.offsetY;
		console.log('offsetX: ' + x + ' | ' + 'offsetY: ' + y);	
		
		x = Math.floor(x / POINT_SIZE);
		y = Math.floor(y / POINT_SIZE);
		console.log('X: ' + x + ' | ' + 'Y: ' + y);	
	}

	// NOTE: Filling the playing field, where we click, there will be ONE
	function getPointField() {
		if (field[y][x] == 0) {
			field[y][x] = 1;
		} else {
			field[y][x] = 0;
		}
	}
}