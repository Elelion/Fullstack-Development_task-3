/* jshint esversion: 6 */

import {Model} from '../model/model.js';

const model = new Model();

// ---

export class getEventsElementsDOM {
	constructor() {
		// events for the buttons & fields
		this.buttonStart = 
			document.getElementsByClassName('start')[0].onclick = model.startGame();

		this.buttonRandom = 
			document.getElementsByClassName('random')[0].onclick = model.getRandomFill;

		this.buttonPausePlay = 
			document.getElementsByClassName('pause')[0].onclick = model.getPauseGame();

		this.inputFieldWidth = 
			document.getElementsByClassName('width')[0].onclick = model.getFieldSize();

		this.inputFieldHeight = 
			document.getElementsByClassName('height')[0].onclick = model.getFieldSize();
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