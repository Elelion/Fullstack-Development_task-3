/* jshint esversion: 6 */

// Контроллер управляет запросами пользователя (получаемые в виде запросов 
// HTTP GET или POST, когда пользователь нажимает на элементы интерфейса 
// для выполнения различных действий). Его основная функция — вызывать и 
// координировать действие необходимых ресурсов и объектов, нужных для 
// выполнения действий, задаваемых пользователем. Обычно контроллер вызывает 
// соответствующую модель для задачи и выбирает подходящий вид.

// import Model from './model.js';
// import View from './view.js';

// class Controller {

//   constructor() {
//     this._view = new View();
//     this._gameStateListen();
//     this._changeCellListen();
//     this._unfocusInputsListen();

//     this._model = new Model();
//     this._model.createEmptyField();

//     this._view.drawField(this._model.getHeight(), this._model.getWidth(), this._model.getCells());
//   }
// }

export let two = 2;

export default class User {
  constructor(name) {
    this.name = name;
    // return name;
  }
};

// export {userTest};

// ----------------------------------------------------------------------------

export const canvas = document.getElementsByClassName('grid-gradient')[0];

export const countCycle = document.getElementsByClassName('count__cycle')[0];
export const countLife = document.getElementsByClassName('count__life')[0];
export const countDead = document.getElementsByClassName('count__dead')[0];
export const pausePlay = document.getElementsByClassName('pause')[0];
export const start = document.getElementsByClassName('start')[0];
export const countPoint = document.getElementsByClassName('count__point')[0];
export const speedGame = document.getElementsByClassName('speed')[0];

export const fieldWidth = document.getElementsByClassName('width')[0];
export const fieldHeight = document.getElementsByClassName('height')[0];

// ---

// Вешаем на canvas событие click, где event указывает, что мы будем работать с событием
// canvas.onclick = function(event) {
canvas.onclick = function clickMouseButton(event) {
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
	
	if (field[y][x] == 0) {
		field[y][x] = 1; // Заполнение игрового поля, т.е. куда кликнем, там будет ЕДИНИЦА
	} else {
		field[y][x] = 0;
	}

	// Проверяем
	console.log(field); //В начале и в конце будет 1, если тыкнуть на начало и конце поля
	// masTemp = mas;	// подумать надо ли это или нет

	drawField(); // Ф-ция которая будет отрисовывать точку при клике		
};