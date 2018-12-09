/* jshint esversion: 6 */

const canvas = document.getElementsByClassName('grid-gradient')[0];

const countCycle = document.getElementsByClassName('count__cycle')[0];
const countLife = document.getElementsByClassName('count__life')[0];
const countDead = document.getElementsByClassName('count__dead')[0];
const pausePlay = document.getElementsByClassName('pause')[0];
const start = document.getElementsByClassName('start')[0];
const countPoint = document.getElementsByClassName('count__point')[0];
const speedGame = document.getElementsByClassName('speed')[0];

const editWidth = document.getElementsByClassName('width')[0];
const editHeight = document.getElementsByClassName('height')[0];

// ---

pausePlay.disabled = true;

// default value
canvas.width = editWidth.value;
canvas.height = editHeight.value;

var canvasWidth = canvas.width; // габариты поля Ш
var canvasHeight = canvas.height; // габариты поля В

// Объявляем контекст
var ctx = canvas.getContext('2d'); //Двумерный контекст для рисования
ctx.fillStyle = "#00FF00"; // цвет квадратика

// Создадим глобальный пустой массив (см. ниже)
let mas = [];
let masTemp = [];
let masSave = [];

// счетчики
var count = 0;
var counterLife = 0;
var counterDead = 0;

// таймер для отрисовки
var timer;

// user data:
var pointSize = 10;
var fieldSquare = canvasWidth * 1 / pointSize * 1; // 300 / 10 = 30, т.е. массив будет 30х30

// размер для клеточного поля, идет от размера квадратика, который ставиться при клике
canvas.style.backgroundSize = pointSize + 'px ' + pointSize + 'px';

var randomStep = canvasWidth * 70 / 100; // для случаенного заполнения поля, см.: fieldSize()
var pausePlayStatus = 0;
var startSpeed = 0;
var statusField = 0; // 0 - поле пустое, если > 0 - на поле есть точки
var statusFieldReset = 0; // для кнопки RESET, 0 - кнопка НЕ была нажата, 1 - нажата.
var randomStatus = 0; // если рандомизируем игра НЕ сбрасывается, 0 - не рандомили, 1 - рандомили
var startStatus = 0; // 0 - старт, 1 - стоп
var resizeStatus = 0;

// --------------------------------------------------------------------------------------

function fieldSize() {
	if (editWidth.value < editHeight.value) { 
		editWidth.value = editHeight.value;
	}

	canvas.width = editWidth.value;
	canvas.height = editHeight.value;
	
	canvasWidth = editWidth.value;
	canvasHeight = editHeight.value;

	// ctx = canvas.getContext('2d'); //Двумерный контекст для рисования
	ctx.fillStyle = "#00FF00"; // цвет квадратика
	// ctx.clearRect(0, 0, canvasWidth, canvasHeight);		
	
	if (canvasWidth > canvasHeight || canvasWidth == canvasHeight) {
		randomStep = canvasWidth * 70 / 100;
	} else {
		randomStep = canvasHeight * 70 / 100;
		console.log('randomStep: ' + randomStep);
	}

	fieldSquare = canvasWidth * 1 / pointSize * 1;	
	location.reload();	
}

// Вешаем на canvas событие click, где event указывает, что мы будем работать с событием
canvas.onclick = function(event) {
	// Определим координату мыши относительно canvas
	let x = event.offsetX;
	let y = event.offsetY;
	
	console.log('offsetX: ' + x);
	console.log('offsetY: ' + y);

	// Поля от 0 до 10 будут принадлежать первому кубику, от 10 до 20 - 2му, и.т.д.
	x = Math.floor(x / pointSize); //300 / 10 = 30 кубиков, затем округляем в нижнюю сторону
	y = Math.floor(y / pointSize);

	console.log('X: ' + x);
	console.log('Y: ' + y);

	if (mas[y][x] == 0) {
		mas[y][x] = 1; // Заполнение игрового поля, т.е. куда кликнем, там будет ЕДИНИЦА
	} else {
		mas[y][x] = 0;
	}

	// Проверяем
	console.log(mas); //В начале и в конце будет 1, если тыкнуть на начало и конце поля
	masTemp = mas;	

	drawField(); // Ф-ция которая будет отрисовывать точку при клике		
	
};

/* определяем координату X и Y елемента по которому мы кликаем
 * наше поле 300х300 мы разобьем на 30 квадратиков в ширину и высоту
 * за это представление будет отвечать массив. Если поле будет пустое, то там будет НОЛЬ.
 */

// создаем массмв, который будет еметировать пустое игровое поле
function goLife() {
	var n = fieldSquare;
	var m = fieldSquare;
	for (var i = 0; i < m; i++) {
		mas[i] = []; // Объявляем пустой массив

		//для перебоки вышесозданного массива, т.е. создаем двумерный массив
		for (var j = 0; j < n; j++) {
			mas[i][j] = 0;
		}
	}
}
goLife(); //Запускаем наше игровое поле

//Ф-ция для отрисоки прямоугольников при клике
function drawField() {
	ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Рисуем очищающий прямоугольник от 00(x,y) до 300(x,y)

	// Перебираем массив, и если какой то елемент = 1, то зарисовываем
	for (var i = 0; i < fieldSquare; i++) {				
		for (var j = 0; j < fieldSquare; j++) {
			// условие проверки
			if(mas[i][j] == 1) {
				// квадратик будет размером 10px(10, 10), если кликаем в первом поле, 
				// координата должна быть от 0 до 10, если во втором поле от 10 до 20 и.т.д.
				// т.е. по сути это задает точку под указателем мышки при клике
				ctx.fillRect(j * pointSize, i * pointSize, pointSize, pointSize); 				
			}
			masSave[i] = mas[i];
		}
	}	
}

function randomFill() {		
	randomStatus = 1; // говорим, что мы нажали рандом

	// Очищаем массив каждый раз
	for (var i = 0; i < fieldSquare; i++) {
		for (var j = 0; j < fieldSquare; j++) {			
			statusField = 0;
			mas[i][j] = 0;
		}
	}

	ctx.clearRect(0, 0, canvasWidth, canvasHeight);

	var max;
	var min = 1;

	// Берем максимальное значение от ширины или высоты, смотря что больше.
	if (canvasWidth > canvasHeight) {
		max = canvasWidth;		
	} else {
		max = canvasHeight;
	}

	if (canvasWidth == canvasHeight) {
		max = canvasWidth;
	} else { 
		max = canvasWidth;
	}

	for (let i = 0; i < randomStep; i++) {
		var randX = Math.round(Math.random() * (max - min) + min);
		var randY = Math.round(Math.random() * (max - min) + min);

		var x = randX;
		var y = randY;

		x = Math.floor(x / pointSize);
		y = Math.floor(y / pointSize);

		mas[y][x] = 1; // Заполнение игрового поля сгенерированными рандомными числами

		drawField();
	}
}

function checkFieldEmpty() {	
	for (var i = 0; i < fieldSquare; i++) {
		for (var j = 0; j < fieldSquare; j++) {
			if (mas[i][j] != 0) {
				statusField++;
			}
		}
	}

	countPoint.innerHTML = statusField;
}

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

function speed() {
	startSpeed++;
	start.innerHTML = 'speed: x' + startSpeed;
}

function startGame() {
	if (startStatus == 0) {
		checkFieldEmpty();

		if (statusField > 1) {
			statusFieldReset = 0; // сначала надо сбросить наш RESET !!!

			startLife();
			// speed();
			
			pausePlay.disabled = false;
		} else {
			alert("Нужно больше точек...");
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

	console.log("RESET: (statusFieldReset): " + statusFieldReset);
}

// тут наше первое условие: если клетка имеет 2 или 3 соседа, то она выживает
// во всех остальных вариантах она погибает

// ф-ция отвечающая за жизнь клетки
function startLife() {
	var mas2 = [];	
	var isAlive = [];

	if (pausePlayStatus == 0  && statusFieldReset == 0) {
		for (var i = 0; i < fieldSquare; i++) {			
			mas2[i] = [];
			// console.log('mas2:' + mas2);
			for (var j = 0; j < fieldSquare; j++) {				
				// мы должны посчитать кол-во соседей, нужно учесть что тут у нас встречаются
				// краевые условия
				var neighbors = 0;	

				// считаем соседей с верху + ф-цию см. ниже
				if (mas[topField(i) - 1][j] == 1) neighbors++;
				// if (mas[i][j - 1] == 1) neighbors++;

				// считаем соседей с права
				if (mas[i][fpp(j) + 1] == 1) neighbors++;
				// if (mas[i + 1][j] == 1) neighbors++;

				// сосед с низу
				if (mas[fpp(i) + 1][j] == 1) neighbors++;
				// if (mas[i][j + 1] == 1) neighbors++;

				// сосед с лева
				if (mas[i][topField(j) - 1] == 1) neighbors++;
				// if (mas[i - 1][j] == 1) neighbors++;

				// соседи по диагонали в право вверх /
				if (mas[topField(i) - 1][fpp(j) + 1] == 1) neighbors++;
				// if (mas[i + 1][j - 1] == 1) neighbors++;

				// соседи по диагонали в право в низ \
				if (mas[fpp(i) + 1][fpp(j) + 1] == 1) neighbors++;
				// if (mas[i + 1][j + 1] == 1) neighbors++;

				// соседи по диагонали в лево в низ /
				if (mas[fpp(i) + 1][topField(j) - 1] == 1) neighbors++;
				// if (mas[i - 1][j + 1] == 1) neighbors++;

				// соседи по диагонали в лево в верх \
				if (mas[topField(i) - 1][topField(j) - 1] == 1) neighbors++;
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
				isAlive = mas[i][j]; // т.е. это текущее состояние с точками

				// проверка на соседей:				
				if (isAlive == 0 && neighbors === 3) {
					mas2[i][j] = 1;
					counterLife++;
					countLife.innerHTML = counterLife  + ' | ';
				} else {
					if (isAlive == 1 && (neighbors === 3 || neighbors === 2)) {
						mas2[i][j] = 1; 
						counterLife++;
						countLife.innerHTML = counterLife  + ' | ';
					} else {
						if (isAlive == 1 && neighbors > 3) {
							mas2[i][j] = 0;
							counterDead++;
							countDead.innerHTML = counterDead  + ' | ';
						} else {
							if (isAlive == 1 && neighbors < 2) {
								mas2[i][j] = 0;
								counterDead++;
								countDead.innerHTML = counterDead  + ' | ';
							} else { 
								mas2[i][j] = 0; counterDead++;
									countDead.innerHTML = counterDead + ' | ';
							}
						}
					}
				}

				// Проверка на наличие точек на поле
				if (statusField < 1 && randomStatus == 0) {
					alert("GameOver man!. Все точки сдохли, плодиться не кому.");
					// alert("Страничка будет перезагружена, а все параметры сброшены.");

					var request = prompt("Введите: НЕТ - что бы остаться на страничке", "");
					switch (request) {
						case "ДА": 
							location.reload(); 
							break;

						case "НЕТ": case "Нет": case "нет": case "НеТ": 
						case "НЕт": case "неТ": case "нЕт":
							pausePlay.disabled = true;
							start.disabled = true;
							break;

						default: 
							alert("Некорректное действие, страница будет перезагружена");
							location.reload(); // перезагрузки странички
							break;
					}

					return;
				}
			}
		}

		// присваиваем новое состояние
		mas = mas2;

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
		timer = setTimeout(startLife, speedGame.value); //Где 300 это период отрисовки
	} else {
		return;
	}
}

// учитываем выход за предел поля с верху
function topField(i) {
	if (i == 0) {
		return fieldSquare;
	} else {
		return i; 
	}
}

// учитываем выход за предел поля с права
function fpp(i) {
	if (i == fieldSquare * 1 - 1) {
		return -1; 
	} else {
		return i; 
	}
}

// Вешаем событие на кнопку
document.getElementsByClassName('start')[0].onclick = startGame;
document.getElementsByClassName('random')[0].onclick = randomFill;
document.getElementsByClassName('pause')[0].onclick = pauseGame;

document.getElementsByClassName('width')[0].onblur = fieldSize;
document.getElementsByClassName('height')[0].onblur = fieldSize;

/**/

document.getElementsByClassName('width')[0].onkeypress = function (e) {
  return false;
};

document.getElementsByClassName('height')[0].onkeypress = function (e) {
  return false;
};

document.getElementsByClassName('speed')[0].onkeypress = function (e) {
  return false;
};