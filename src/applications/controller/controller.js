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

// example: 1
// export let two = 2;

// // example: 2
// export default class Task {
//   constructor(name = Task.getDefaultTitle()) {
// 		this.name = name;
// 		this.done = false;
// 		Task.count += 1; // инкремент, см. ниже статик св-во.
// 		alert(this.name);	
// 	} // тут ни , ни ; не ставятся
	
// 	// создаем методы, т.е. то, что объект будет уметь делать
// 	complete() {
// 		this.done = true;
// 		console.log('task ' + this.name + ' exelent');
// 	}

// 	countStatic() {
// 		console.log(Task.count);
// 	}

// 	// статич. методы, пренадлежат самому классу а не объектам созданным на его основе.
// 	// часто исп. для содания вспомогательных ф-ций
// 	static getDefaultTitle() {
// 		return 'Quest...';
// 	}

// 	// метод, связывает св-во объекта с ф-цией, которое будет вызываться при обращении к этому св-ву
// 	get getDone() {
// 		return this.done === true ? 'Executing' : 'NOT executing';
// 	}

// 	// set - принимает параметр, которому мы можем присвоить св-во.
// 	set getDone(value) {
// 		if(value !== undefined && typeof value === 'boolean') {
// 			this.done = value;
// 		} else {
// 			console.error('Error');
// 		}
// 	}
// }

// // example 3: наследуемый класс
// export class subTaskEx extends Task {
// 	constructor(title) {
// 		super(title); //  super используется для вызова функций, принадлежащих родителю объекта
// 		console.log(title + ' creating subtasking...');		
// 	}

// 	// перезаписываем родительский метод		
// 	complete() {
// 		super.complete();
// 		console.log('subtasking................');
// 	}
// }

// let subtask = new subTaskEx('learn ES');
// console.log(subtask);
// subtask.complete();
// console.log(subtask);

// проверяем является ли объект task - представителем обоих классов
// console.log(subtask instanceof subTask); // true
// console.log(subtask instanceof Task); // true

// ---

// статич. сво-ва, пренадлежат самим классам, а не объектам созданных на его основе,
// используются для хранения статической инф-ы,	объявляются ВСЕГДА за телом класса
// Task.count = 0;

// ----------------------------------------------------------------------------


export class userElements {
 	constructor() {
 		this.canvas = document.getElementsByClassName('grid-gradient')[0];
	}

	// is not function
	get getCanvasDOM() {
		return this.canvas;		
	}

	// function
	complete() {
		console.log(this.canvas + ' func');
	}
}

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

export class userDataOutput {
	constructor() {
		
 }
}

// Вешаем событие на кнопку
import {
	startGame, 
	randomFill, 
	pauseGame, 
	fieldSize
} from '../model/model.js';

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