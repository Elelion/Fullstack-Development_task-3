// Вид обеспечивает различные способы представления данных, которые получены из 
// модели. Он может быть шаблоном, который заполняется данными. Может быть 
// несколько различных видов, и контроллер выбирает, какой подходит наилучшим 
// образом для текущей ситуации.

// Веб приложение обычно состоит из набора контроллеров, моделей и видов. 
// Контроллер может быть устроен как основной, который получает все запросы и 
// вызывает другие контроллеры для выполнения действий в зависимости от ситуации.

// import Controller from './controller.js';
// const startGame = () => new Controller();
// startGame();
// export default startGame;

// example: 1
// import {one} from '../model/model.js';
// export function out() {
  // alert(one);
// }

// example: 2
// import Task from '../controller/controller.js';
// let two = new Task("Вася"); // new для вызова ф-ции
// console.log(two.getDone, two.done);
// two.complete();
// two.countStatic();
// console.log(two.getDone, two.done);

// let three = new Task()
// console.log(three);
// console.log(three.done);
// console.log(three.getDone);

// example 3
// import {subTaskEx} from '../controller/controller.js';
// let subtask = new subTaskEx('learn ES');
// console.log(subtask);
// subtask.complete();
// subtask.te

// ----------------------------------------------------------------------------

import {canvas} from '../model/model.js';
import {ctx} from '../model/model.js';
import {field} from '../model/model.js';
import {fieldSquare} from '../model/model.js';
import {pointSize} from '../model/model.js';

//Ф-ция для отрисоки прямоугольников при клике
export function drawField() {
	ctx.clearRect(0, 0, canvas.width, canvas.height); // Рисуем очищающий прямоугольник от 00(x,y) до 300(x,y)

	// Перебираем массив, и если какой то елемент = 1, то зарисовываем
	for (var i = 0; i < fieldSquare; i++) {				
		for (var j = 0; j < fieldSquare; j++) {
			// условие проверки
			if (field[i][j] == 1) {
				// квадратик будет размером 10px(10, 10), если кликаем в первом поле, 
				// координата должна быть от 0 до 10, если во втором поле от 10 до 20 и.т.д.
				// т.е. по сути это задает точку под указателем мышки при клике
				ctx.fillRect(j * pointSize, i * pointSize, pointSize, pointSize); 				
			}
			// masSave[i] = mas[i]; // подумать надо ли это или нет
		}
	}	
}

// ---

// function speed() {
// 	startSpeed++;
// 	start.innerHTML = 'speed: x' + startSpeed;
// }

// ---

