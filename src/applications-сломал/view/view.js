/* jshint esversion: 6 */

import {Model} from '../model/model.js';

const model = new Model();


// console.log('getSizePoint: ' + model.pointSize);
// ---

export class View {
	constructor() {
		this.COLOR_GREEN = '#00FF00';
		this.POINT_SIZE = '10'; 
		this.RANDOM = '70';		

		model.setColorPoint(this.COLOR_GREEN);
		model.setSizePoint(this.POINT_SIZE);
		model.setRandomStep(this.RANDOM);
		model.getCanvasClickEvents(this.POINT_SIZE);
	}

	// ---

	getDebugging() {
		// model.getCreatingField();
		// model.setRandomStatus('asdasdasd');
		model.getAlert();		
	}
}



// // ---

// function DisabledButtons() {
// 	pausePlay.disabled = true;
// }
// DisabledButtons();

// // ---

// function setPointColor() {
// 	ctx.fillStyle = COLOR_GREEN;	
// }
// setPointColor();

// // ---

// export function pauseGame() {
// 	if (pausePlayStatus == 0) {
// 		// pausePlayStatus = 1;	
// 		pausePlay.innerHTML = 'Play';

// 		start.disabled = true;
// 	} else {
// 		// pausePlayStatus = 0;
// 		pausePlay.innerHTML = 'Pause';

// 		// NOTE: in this case - continue our game
// 		startLife();
// 		start.disabled = false;
// 	}	

// 	// (pausePlayStatus == 0) ? console.log('play') : console.log('pause');
// }

// // ---

// function checkEmptyField() {	
// 	// for (let i = 0; i < fieldSquare; i++) {
// 	// 	for (let j = 0; j < fieldSquare; j++) {
// 	// 		if (field[i][j] != 0) {
// 	// 			statusField++;
// 	// 		}
// 	// 	}
// 	// }

// 	countPoint.innerHTML = statusField;
// }

// // ---

// function getRandomGenerated() {	
// 	for (let i = 0; i < randomStep; i++) {
// 		// let randX = Math.round(Math.random() * (max - min) + min);
// 		// let randY = Math.round(Math.random() * (max - min) + min);
// 		// randX = Math.floor(randX / POINT_SIZE);
// 		// randY = Math.floor(randY / POINT_SIZE);

// 		// field[randY][randX] = 1;
// 		drawField();
// 	}
// }

// // ---

// export function startGame() {
// 	if (startStatus == 0) {		
// 		checkEmptyField();
// 		preparingPlay();

// 		// startStatus = 1;
// 		startStop.innerHTML = 'Stop';

// 		// console.log('startStatus: ' + startStatus);
// 	} else {		
// 		resetGame();
// 		getReloadSheet();		
// 	}

// 	function preparingPlay() {
// 		if (statusField > 1) {
// 			// statusFieldReset = 0;
// 			pausePlay.disabled = false;

// 			startLife();			
// 		} else {
// 			alert('Нужно больше точек...');
// 			// return;
// 		}
// 	}	
// }

// function getCheckPointsField() {
// 	if (statusField < 1 && randomStatus == 0) {
// 		alert('GameOver man!. Все точки сдохли, плодиться не кому.');					
// 		let request = prompt('Введите: НЕТ - что бы остаться на страничке', '');

// 		switch (request) {
// 			case 'ДА': 
// 				getReloadSheet();
// 				break;

// 			case 'НЕТ': case 'Нет': case 'нет': case 'НеТ': 
// 			case 'НЕт': case 'неТ': case 'нЕт':
// 				pausePlay.disabled = true;
// 				startStop.disabled = false;
// 				// clearTimeout(handle);
// 				break;

// 			default: 
// 				alert('Некорректное действие, страница будет перезагружена');
// 				getReloadSheet();
// 				break;
// 		}

// 		return;
// 	}
// }

// // ---

// getCheckNeighbors() {
// 	if (this.isAlive == 0 && this.neighbors === 3) {
// 		fieldTemp[i][j] = 1;
// 		counterLife++;
// 		countLife.innerHTML = counterLife  + ' | ';
// 	} else {
// 		if (this.isAlive == 1 && (this.neighbors === 3 || this.neighbors === 2)) {
// 			fieldTemp[i][j] = 1; 
// 			counterLife++;
// 			countLife.innerHTML = counterLife  + ' | ';
// 		} else {
// 			if (this.isAlive == 1 && this.neighbors > 3) {
// 				fieldTemp[i][j] = 0;
// 				counterDead++;
// 				countDead.innerHTML = counterDead  + ' | ';
// 			} else {
// 				if (this.isAlive == 1 && this.neighbors < 2) {
// 					fieldTemp[i][j] = 0;
// 					counterDead++;
// 					countDead.innerHTML = counterDead  + ' | ';
// 				} else { 
// 					fieldTemp[i][j] = 0; counterDead++;
// 						countDead.innerHTML = counterDead + ' | ';
// 				}
// 			}
// 		}
// 	}
// }

// // ---

// setLifeData() {
// 	// this.field = this.fieldTemp;
// 	drawField();
// 	// statusField = 0;
// 	// randomStatus = 0;
// 	// count++;
// 	countCycle.innerHTML = count + ' | ';
// 	countPoint.innerHTML = statusField;
// 	// model.checkEmptyField();
	
// 	// NOTE: timer for drawing
// 	// setTimeout(startLife, this.speedGame.value);
// }

// // ---

// export function resetGame() {
// 	// count = 0;
// 	// counterLife = 0;
// 	// counterDead = 0;
// 	// pausePlayStatus = 0;	
// 	// statusField = 0;
// 	// startSpeed = 0;

// 	// NOTE: stops the game cycle
// 	// statusFieldReset = 1;
// 	// pausePlayStatus = 1;		

// 	pausePlay.innerHTML = 'Pause';
// 	startStop.innerHTML = 'Play';
// 	countCycle.innerHTML = count + ' | ';
// 	countLife.innerHTML = counterLife  + ' | ';
// 	countDead.innerHTML = counterDead + ' | ';
// 	countPoint.innerHTML = statusField;	
	
// 	pausePlay.disabled = true;
// 	startStop.disabled = false;

// 	clearField();	
// 	console.log('RESET: (statusFieldReset): ' + statusFieldReset);
// }

// // ---

// canvas.onclick = function clickMouseButton(event) {	
// 	let x;
// 	let y;
// 	let pointSize = this.getSizePoint();
// 	let field = this.getField();

// 	setData();
// 	getPointField();
// 	// drawField();
// 	console.log(field);
// }

// 	function setData() {		
// 		x = event.offsetX;
// 		y = event.offsetY;
// 		console.log('offsetX: ' + x + ' | ' + 'offsetY: ' + y);	
		
// 		x = Math.floor(x / pointSize);
// 		y = Math.floor(y / pointSize);
// 		console.log('X: ' + x + ' | ' + 'Y: ' + y);	
// 	}

// 	function getPointField() {
// 		if (field[y][x] == 0) {
// 			field[y][x] = 1;
// 		} else {
// 			field[y][x] = 0;
// 		}
// 	}