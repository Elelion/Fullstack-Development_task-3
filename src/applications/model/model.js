/* jshint esversion: 6 */

// Модель - это данные и правила, которые используются для работы с данными, 
// которые представляют концепцию управления приложением. В любом приложении 
// вся структура моделируется как данные, которые обрабатываются определённым 
// образом. Что такое пользователь для приложения — сообщение или книга? Только 
// данные, которые должны быть обработаны в соответствии с правилами (дата не 
// может указывать в будущее, e-mail должен быть в определённом формате, имя 
// не может быть длиннее Х символов, и так далее).

// let one = 1;
// let two = 2;

// module.export = one;
// module.export = two;

import {two} from '../controller/controller.js';
import User from '../controller/controller.js';

export let one = two;

export let three = new User("Вася");
// export let two = 2;

// ----------------------------------------------------------------------------

import {canvas} from '../controller/controller.js';
import {countCycle} from '../controller/controller.js';
import {countLife} from '../controller/controller.js';
import {countDead} from '../controller/controller.js';
import {pausePlay} from '../controller/controller.js';
import {start} from '../controller/controller.js';
import {countPoint} from '../controller/controller.js';
import {speedGame} from '../controller/controller.js';
import {fieldWidth} from '../controller/controller.js';
import {fieldHeight} from '../controller/controller.js';

canvas.width = fieldWidth.value;
canvas.height = fieldHeight.value;

// Объявляем контекст
let ctx = canvas.getContext('2d'); //Двумерный контекст для рисования

// счетчики
var count = 0;
var counterLife = 0;
var counterDead = 0;

// user data:
var pointSize = 10;
var fieldSquare = canvas.width * 1 / pointSize * 1; // 300 / 10 = 30, т.е. массив будет 30х30
var randomStep = canvas.width * 70 / 100; // для случаенного заполнения поля, см.: fieldSize()

var pausePlayStatus = 0;
var startSpeed = 0;
var statusField = 0; // 0 - поле пустое, если > 0 - на поле есть точки
var statusFieldReset = 0; // для кнопки RESET, 0 - кнопка НЕ была нажата, 1 - нажата.
var randomStatus = 0; // если рандомизируем игра НЕ сбрасывается, 0 - не рандомили, 1 - рандомили
var startStatus = 0; // 0 - старт, 1 - стоп
// var resizeStatus = 0;

// ---

pausePlay.disabled = true;

// размер для клеточного поля, идет от размера квадратика, который ставиться при клике
canvas.style.backgroundSize = pointSize + 'px ' + pointSize + 'px';


ctx.fillStyle = '#00FF00'; // цвет квадратика

// Создадим глобальный пустой массив (см. ниже)
let field = function field() {
	let field = [];
	return field;
}

// --------------------------------------------------------------------------------------

function fieldSize() {
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

function goLife() {
	var n = fieldSquare;
	var m = fieldSquare;
	for (var i = 0; i < m; i++) {
		field[i] = []; // Объявляем пустой массив

		//для перебоки вышесозданного массива, т.е. создаем двумерный массив
		for (var j = 0; j < n; j++) {
			field[i][j] = 0;
		}
	}
}
goLife(); //Запускаем наше игровое поле

// ---

function checkFieldEmpty() {	
	for (var i = 0; i < fieldSquare; i++) {
		for (var j = 0; j < fieldSquare; j++) {
			if (field[i][j] != 0) {
				statusField++;
			}
		}
	}

	countPoint.innerHTML = statusField;
}

// ---

function pauseGame() {
	if (pausePlayStatus == 0) {
		pausePlayStatus = 1;	
		pausePlay.innerHTML = 'Play';

		start.disabled = true; // отрубаем нашу кнопку которая увеличивает скорость
		
	} else {
		pausePlayStatus = 0;
		pausePlay.innerHTML = 'Pause';

		startLife(); // в данном случае - продолжаем нашу игру

		start.disabled = false; // включаем обратно
	}	

	(pausePlayStatus == 0) ? console.log('play') : console.log('pause');
}

// ---

function randomFill() {		
	randomStatus = 1; // говорим, что мы нажали рандом

	// Очищаем массив каждый раз
	for (var i = 0; i < fieldSquare; i++) {
		for (var j = 0; j < fieldSquare; j++) {			
			statusField = 0;
			field[i][j] = 0;
		}
	}

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	var max;
	var min = 1;

	// Берем максимальное значение от ширины или высоты, смотря что больше.
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

	for (let i = 0; i < randomStep; i++) {
		var randX = Math.round(Math.random() * (max - min) + min);
		var randY = Math.round(Math.random() * (max - min) + min);

		var x = randX;
		var y = randY;

		x = Math.floor(x / pointSize);
		y = Math.floor(y / pointSize);

		field[y][x] = 1; // Заполнение игрового поля сгенерированными рандомными числами

		drawField();
	}
}

// ---

function startGame() {
	if (startStatus == 0) {
		checkFieldEmpty();

		if (statusField > 1) {
			statusFieldReset = 0; // сначала надо сбросить наш RESET !!!

			startLife();
			
			pausePlay.disabled = false;
		} else {
			alert('Нужно больше точек...');
		}

		startStatus = 1;
		start.innerHTML = 'Stop';
		console.log('startStatus: ' + startStatus);
	} else {
		resetGame();

		startStatus = 0;
		start.innerHTML = 'Start';
	}
}

// ---

function resetGame() {
	pausePlayStatus = 1;

	goLife();
	drawField();

	count = 0;
	counterLife = 0;
	counterDead = 0;
	pausePlayStatus = 0;
	startSpeed = 0;
	statusFieldReset = 1; // стопает цикл игры!!!
	statusField = 0;

	countCycle.innerHTML = count + ' | ';
	countLife.innerHTML = counterLife  + ' | ';
	countDead.innerHTML = counterDead + ' | ';
	countPoint.innerHTML = statusField;

	pausePlay.innerHTML = 'Pause';
	pausePlay.disabled = true;	

	start.innerHTML = 'Play';
	start.disabled = false;

	console.log('RESET: (statusFieldReset): ' + statusFieldReset);
}

// ---

function startLife() {
	let field2 = [];
	let isAlive = [];	

	if (pausePlayStatus == 0  && statusFieldReset == 0) {		
		for (let i = 0; i < fieldSquare; i++) {			
			field2[i] = [];
			// console.log('mas2:' + mas2);
			for (let j = 0; j < fieldSquare; j++) {				
				// мы должны посчитать кол-во соседей, нужно учесть что тут у нас встречаются
				// краевые условия
				let neighbors = 0;	

				// считаем соседей с верху + ф-цию см. ниже
				if (field[topField(i) - 1][j] == 1) neighbors++;
				// if (mas[i][j - 1] == 1) neighbors++;

				// считаем соседей с права
				if (field[i][fpp(j) + 1] == 1) neighbors++;
				// if (mas[i + 1][j] == 1) neighbors++;

				// сосед с низу
				if (field[fpp(i) + 1][j] == 1) neighbors++;
				// if (mas[i][j + 1] == 1) neighbors++;

				// сосед с лева
				if (field[i][topField(j) - 1] == 1) neighbors++;
				// if (mas[i - 1][j] == 1) neighbors++;

				// соседи по диагонали в право вверх /
				if (field[topField(i) - 1][fpp(j) + 1] == 1) neighbors++;
				// if (mas[i + 1][j - 1] == 1) neighbors++;

				// соседи по диагонали в право в низ \
				if (field[fpp(i) + 1][fpp(j) + 1] == 1) neighbors++;
				// if (mas[i + 1][j + 1] == 1) neighbors++;

				// соседи по диагонали в лево в низ /
				if (field[fpp(i) + 1][topField(j) - 1] == 1) neighbors++;
				// if (mas[i - 1][j + 1] == 1) neighbors++;

				// соседи по диагонали в лево в верх \
				if (field[topField(i) - 1][topField(j) - 1] == 1) neighbors++;
				// if (mas[i - 1][j - 1] == 1) neighbors++;

/*
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

				// проверка на соседей:				
				if (isAlive == 0 && neighbors === 3) {
					field2[i][j] = 1;
					counterLife++;
					countLife.innerHTML = counterLife  + ' | ';
				} else {
					if (isAlive == 1 && (neighbors === 3 || neighbors === 2)) {
						field2[i][j] = 1; 
						counterLife++;
						countLife.innerHTML = counterLife  + ' | ';
					} else {
						if (isAlive == 1 && neighbors > 3) {
							field2[i][j] = 0;
							counterDead++;
							countDead.innerHTML = counterDead  + ' | ';
						} else {
							if (isAlive == 1 && neighbors < 2) {
								field2[i][j] = 0;
								counterDead++;
								countDead.innerHTML = counterDead  + ' | ';
							} else { 
								field2[i][j] = 0; counterDead++;
									countDead.innerHTML = counterDead + ' | ';
							}
						}
					}
				}

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
							start.disabled = true;
							break;

						default: 
							alert('Некорректное действие, страница будет перезагружена');
							location.reload(); // перезагрузки странички
							break;
					}

					return;
				}
			}
		}

		// присваиваем новое состояние
		field = field2;

		// Запускаем ф-цию отрисовки
		drawField();

		// увеличиваем счетчик
		count++;

		// Записываем в span (html) наш счетчик
		countCycle.innerHTML = count + ' | ';

		statusField = 0;
		checkFieldEmpty();

		countPoint.innerHTML = statusField;
		randomStatus = 0; // отбой нашего рандома
		
		// таймер для отрисовки
		let timer = setTimeout(startLife, speedGame.value); //Где 300 это период отрисовки
	}
	return;	
}

// ---

// учитываем выход за предел поля с верху
function topField(i) {
	if (i == 0) {
		return fieldSquare;
	}
	return i;
}

// учитываем выход за предел поля с права
function fpp(i) {
	if (i == fieldSquare * 1 - 1) {
		return -1; 
	}
	return i;
}

// ---
