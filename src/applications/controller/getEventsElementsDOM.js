/* jshint esversion: 6 */

import {
	startGame, 
	randomFill, 
	pauseGame, 
	fieldSize
} from '../model/model.js';		

// ---

export class getEventsElementsDOM {
	constructor() {
		// events for the buttons
		this.buttonStart = 
			document.getElementsByClassName('start')[0].onclick = startGame;

		this.buttonRandom = 
			document.getElementsByClassName('random')[0].onclick = randomFill;

		this.buttonPausePlay = 
			document.getElementsByClassName('pause')[0].onclick = pauseGame;

		this.inputFieldWidth = 
			document.getElementsByClassName('width')[0].onclick = fieldSize;

		this.inputFieldHeight = 
			document.getElementsByClassName('height')[0].onclick = fieldSize;
	}		

	// disable input for edits
	get getDisabledInputWidth() {
		document.getElementsByClassName('width')[0].onkeypress = function (e) {
			return false;
		};
	}

	get getDisabledInputHeight() {
		document.getElementsByClassName('height')[0].onkeypress = function (e) {
			return false;
		};
	}

	get getDisabledInputSpeed() {
		document.getElementsByClassName('speed')[0].onkeypress = function (e) {
			return false;
		};
	}
}