/* jshint esversion: 6 */

// Модель - это данные и правила, которые используются для работы с данными, 
// которые представляют концепцию управления приложением. В любом приложении 
// вся структура моделируется как данные, которые обрабатываются определённым 
// образом. Что такое пользователь для приложения — сообщение или книга? Только
// данные, которые должны быть обработаны в соответствии с правилами (дата не 
// может указывать в будущее, e-mail должен быть в определённом формате, имя 
// не может быть длиннее Х символов, и так далее).

// ---

import {drawField} from '../view/DrawField.js';
import {getElementsDOM} from '../controller/getElementsDOM.js';

let getDOM = new getElementsDOM();
let countCycle = getDOM.getCountCycleDOM;
let countLife = getDOM.getCountLifeDOM;
let countDead = getDOM.getCountDeadDOM;
let pausePlay = getDOM.getPausePlayDOM;
let startStop = getDOM.getStartStopDOM;
let countPoint = getDOM.getCountPointDOM;
let speedGame = getDOM.getSpeedGameDOM;
let fieldWidth = getDOM.getFieldWidthDOM;
let fieldHeight = getDOM.getFieldHeightDOM;
export let canvas = getDOM.getCanvasFieldDOM;

canvas.width = fieldWidth.value;
canvas.height = fieldHeight.value;

// NOTE: ctx = ConTeXt
export let ctx = canvas.getContext('2d');

let count = 0;
let counterLife = 0;
let counterDead = 0;

/**
 * NOTE:
 * statusField: 0 - empty field, if > 0 - on field have a points
 * statusFieldReset: for button RESET, 0 - button NOT pressed, 1 - pressed
 * randomStatus: for random points, 0 - not be randoming, 1 - randoming
 * startStatus: 0 - start, 1 - stop
 */
let pausePlayStatus = 0;
let statusField = 0;
let statusFieldReset = 0;
let randomStatus = 0;
let startStatus = 0;

// FIXME: think... is there a need?
// var startSpeed = 0;

export let pointSize = 10; 

// NOTE: 300 / 10 = 30, it is array will have 30х30
export let fieldSquare = canvas.width * 1 / pointSize * 1;

// NOTE: for randoming field filling, lookup: fieldSize()
let randomStep = canvas.width * 70 / 100;

/**
 * NOTE:
 * the size for the cell field, comes from the size of the square, 
 * which is put when you click
 * ctx.fillStyle - color for square
 */
canvas.style.backgroundSize = pointSize + 'px ' + pointSize + 'px';
ctx.fillStyle = '#00FF00';
pausePlay.disabled = true;
// TODO: think of random colors...

// NOTE: creating global empty array, our field for points
export let field = function field() {
	let field = [];
	return field;
}

// ---

export function fieldSize() {
	if (fieldWidth.value < fieldHeight.value) { 
		fieldWidth.value = fieldHeight.value;
	}

	canvas.width = fieldWidth.value;
	canvas.height = fieldHeight.value;

	if (canvas.width > canvas.height || canvas.width == canvas.height) {
		randomStep = canvas.width * 70 / 100;
	} else {
		randomStep = canvas.height * 70 / 100;
		console.log('randomStep: ' + randomStep);
	}

	fieldSquare = canvas.width * 1 / pointSize * 1;	
	location.reload();	
}

// ---

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
	getClearFieldBeforeRandom();
	randomStatus = 1;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	let max = getMaxFieldSize();
	let min = 1;
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

	// NOTE: filling the playing field with randomly generated numbers
	function getRandomGenerated() {	
		for (let i = 0; i < randomStep; i++) {
			let randX = Math.round(Math.random() * (max - min) + min);
			let randY = Math.round(Math.random() * (max - min) + min);
			randX = Math.floor(randX / pointSize);
			randY = Math.floor(randY / pointSize);

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

		if (statusField > 1) {
			statusFieldReset = 0;			
			pausePlay.disabled = false;

			startLife();
		} else {
			alert('Нужно больше точек...');
			return;
		}

		startStatus = 1;
		startStop.innerHTML = 'Stop';
		console.log('startStatus: ' + startStatus);
	} else {
		resetGame();

		startStatus = 0;
		startStop.innerHTML = 'Start';
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
	let fieldTemp = [];
	let isAlive = [];		

	if (pausePlayStatus == 0  && statusFieldReset == 0) {		
		for (let i = 0; i < fieldSquare; i++) {			
			fieldTemp[i] = [];			
			for (let j = 0; j < fieldSquare; j++) {				
				// мы должны посчитать кол-во соседей, нужно учесть что тут у нас встречаются
				// краевые условия
				let neighbors = 0;

				// считаем соседей с верху + ф-цию см. ниже
				if (field[topFieldOut(i) - 1][j] == 1) neighbors++;
				// if (mas[i][j - 1] == 1) neighbors++;

				// считаем соседей с права
				if (field[i][rightFieldOut(j) + 1] == 1) neighbors++;
				// if (mas[i + 1][j] == 1) neighbors++;

				// сосед с низу
				if (field[rightFieldOut(i) + 1][j] == 1) neighbors++;
				// if (mas[i][j + 1] == 1) neighbors++;

				// сосед с лева
				if (field[i][topFieldOut(j) - 1] == 1) neighbors++;
				// if (mas[i - 1][j] == 1) neighbors++;

				// соседи по диагонали в право вверх /
				if (field[topFieldOut(i) - 1][rightFieldOut(j) + 1] == 1) neighbors++;
				// if (mas[i + 1][j - 1] == 1) neighbors++;

				// соседи по диагонали в право в низ \
				if (field[rightFieldOut(i) + 1][rightFieldOut(j) + 1] == 1) neighbors++;
				// if (mas[i + 1][j + 1] == 1) neighbors++;

				// соседи по диагонали в лево в низ /
				if (field[rightFieldOut(i) + 1][topFieldOut(j) - 1] == 1) neighbors++;
				// if (mas[i - 1][j + 1] == 1) neighbors++;

				// соседи по диагонали в лево в верх \
				if (field[topFieldOut(i) - 1][topFieldOut(j) - 1] == 1) neighbors++;
				// if (mas[i - 1][j - 1] == 1) neighbors++;

/**
 * Распределение живых клеток в начале игры называется первым поколением. 
 * Каждое следующее поколение рассчитывается на основе предыдущего по таким правилам:
 * 
 * - в пустой (мёртвой) клетке, рядом с которой ровно три живые клетки, зарождается жизнь;
 * - если у живой клетки есть две или три живые соседки, то эта клетка продолжает жить; 
 * в противном случае, если соседей меньше двух или больше трёх, клетка умирает 
 * («от одиночества» или «от перенаселённости»)
 * 
 * Игра прекращается, если
 * 
 * - на поле не останется ни одной «живой» клетки
 * - конфигурация на очередном шаге в точности (без сдвигов и поворотов) повторит себя же 
 * на одном из более ранних шагов (складывается периодическая конфигурация)
 * - при очередном шаге ни одна из клеток не меняет своего состояния 
 * (складывается стабильная конфигурация; предыдущее правило, вырожденное до 
 * одного шага назад)
 */
				isAlive = field[i][j]; // т.е. это текущее состояние с точками

				checkNeighbors();


				// Проверка на наличие точек на поле
				if (statusField < 1 && randomStatus == 0) {
					alert('GameOver man!. Все точки сдохли, плодиться не кому.');					

					var request = prompt('Введите: НЕТ - что бы остаться на страничке', '');
					switch (request) {
						case 'ДА': 
							location.reload(); 
							break;

						case 'НЕТ': case 'Нет': case 'нет': case 'НеТ': 
						case 'НЕт': case 'неТ': case 'нЕт':
							pausePlay.disabled = true;
							startStop.disabled = true;
							break;

						default: 
							alert('Некорректное действие, страница будет перезагружена');
							location.reload(); // перезагрузки странички
							break;
					}
					return;
				}

				function checkNeighbors() {
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


			}
		}
		
		field = fieldTemp;
		drawField();		
		count++;		
		countCycle.innerHTML = count + ' | ';
		statusField = 0;
		checkEmptyField();
		countPoint.innerHTML = statusField;
		randomStatus = 0;
		
		// NOTE: timer for drawing
		setTimeout(startLife, speedGame.value);
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

	return;	
}

// ---

/**
 * NOTE:
 * we hang the click event on canvas, where the event indicates that 
 * we will work with the event
 */
canvas.onclick = function clickMouseButton(event) {	
	let x = event.offsetX;
	let y = event.offsetY;
	console.log('offsetX: ' + x + ' | ' + 'offsetY: ' + y);	

	/**
	 * NOTE:
	 * fields from 0 to 10 will belong to the first cube, 
	 * from 10 to 20 - second, etc.
	 * 300 / 10 = 30 cubes, then round to the bottom
	 */
	x = Math.floor(x / pointSize);
	y = Math.floor(y / pointSize);
	console.log('X: ' + x + ' | ' + 'Y: ' + y);	
	
	// NOTE: Filling the playing field, where we click, there will be ONE
	if (field[y][x] == 0) {
		field[y][x] = 1;
	} else {
		field[y][x] = 0;
	}

	drawField();
	console.log(field);
};