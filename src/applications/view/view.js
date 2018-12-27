/* jshint esversion: 6 */

import {
	canvas,
	ctx,
	field,
	fieldSquare,
	POINT_SIZE
} from '../model/model.js';

import {Model} from '../model/model.js';

const model = new Model;
const COLOR_GREEN = '#00FF00';
const POINT_SIZE = '10'; 
cons RANDOM = '70';

model.setColorPoint(COLOR_GREEN);
model.setSizePoint(POINT_SIZE);
model.setRandomStep(RANDOM);

// ---

export class View {
	get drawField() {
		this.setClearRect();
		this.getDrawPoint();
	}
		// drawPoint();		
		// setClearRect();
		/**
		 * NOTE:
		 * iterate over the array, and if some element = 1, then draw
		 * point will have a size 10x10px, if be clicked in first field
		 * coordinates must be from 0 to 10 if second field is from 10 to 20, etc 
		 * that is, in fact it sets a point under the mouse pointer when you click
		 */
		getDrawPoint() {
			for (let i = 0; i < fieldSquare; i++) {
				for (let j = 0; j < fieldSquare; j++) {
					if (field[i][j] == 1) {
						ctx.fillRect(j * POINT_SIZE, i * POINT_SIZE, POINT_SIZE, POINT_SIZE);
					}
				}
			}	
		}

		setClearRect() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		}	


}

// ---

function DisabledButtons() {
	pausePlay.disabled = true;
}
DisabledButtons();

// ---

function setPointColor() {
	ctx.fillStyle = COLOR_GREEN;	
}
setPointColor();

// ---

export function pauseGame() {
	if (pausePlayStatus == 0) {
		// pausePlayStatus = 1;	
		pausePlay.innerHTML = 'Play';

		start.disabled = true;
	} else {
		// pausePlayStatus = 0;
		pausePlay.innerHTML = 'Pause';

		// NOTE: in this case - continue our game
		startLife();
		start.disabled = false;
	}	

	// (pausePlayStatus == 0) ? console.log('play') : console.log('pause');
}

// ---

function checkEmptyField() {	
	// for (let i = 0; i < fieldSquare; i++) {
	// 	for (let j = 0; j < fieldSquare; j++) {
	// 		if (field[i][j] != 0) {
	// 			statusField++;
	// 		}
	// 	}
	// }

	countPoint.innerHTML = statusField;
}

// ---

function getRandomGenerated() {	
	for (let i = 0; i < randomStep; i++) {
		// let randX = Math.round(Math.random() * (max - min) + min);
		// let randY = Math.round(Math.random() * (max - min) + min);
		// randX = Math.floor(randX / POINT_SIZE);
		// randY = Math.floor(randY / POINT_SIZE);

		// field[randY][randX] = 1;
		drawField();
	}
}

// ---

export function startGame() {
	if (startStatus == 0) {		
		checkEmptyField();
		preparingPlay();

		// startStatus = 1;
		startStop.innerHTML = 'Stop';

		// console.log('startStatus: ' + startStatus);
	} else {		
		resetGame();
		getReloadSheet();		
	}

	function preparingPlay() {
		if (statusField > 1) {
			// statusFieldReset = 0;
			pausePlay.disabled = false;

			startLife();			
		} else {
			alert('Нужно больше точек...');
			// return;
		}
	}	
}

// ---

export function resetGame() {
	// count = 0;
	// counterLife = 0;
	// counterDead = 0;
	// pausePlayStatus = 0;	
	// statusField = 0;
	// startSpeed = 0;

	// NOTE: stops the game cycle
	// statusFieldReset = 1;
	// pausePlayStatus = 1;		

	pausePlay.innerHTML = 'Pause';
	startStop.innerHTML = 'Play';
	countCycle.innerHTML = count + ' | ';
	countLife.innerHTML = counterLife  + ' | ';
	countDead.innerHTML = counterDead + ' | ';
	countPoint.innerHTML = statusField;	
	
	pausePlay.disabled = true;
	startStop.disabled = false;

	clearField();	
	console.log('RESET: (statusFieldReset): ' + statusFieldReset);
}

// ---

