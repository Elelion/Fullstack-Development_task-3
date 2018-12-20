/* jshint esversion: 6 */

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

import {
	canvas,
	ctx,
	field,
	fieldSquare,
	pointSize
} from '../model/model.js';

// NOTE: Function to draw rectangles on click
export function drawField() {	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	pointDraw();		

	/**
	 * NOTE:
	 * Iterate over the array, and if some element = 1, then draw
	 * point will have a size 10x10px, if be clicked in first field
	 * coordinates must be from 0 to 10 if second field is from 10 to 20, etc 
	 * that is, in fact it sets a point under the mouse pointer when you click
	 */
	function pointDraw() {
		for (let i = 0; i < fieldSquare; i++) {
			for (let j = 0; j < fieldSquare; j++) {
				if (field[i][j] == 1) {
					ctx.fillRect(j * pointSize, i * pointSize, pointSize, pointSize);
				}
			}
		}	
	}
}

// ---

// FIXME: is there a need?
// function speed() {
// 	startSpeed++;
// 	start.innerHTML = 'speed: x' + startSpeed;
// }
