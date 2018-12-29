/* jshint esversion: 6 */

import {
	canvas,
	ctx,
	field,
	fieldSquare,
	POINT_SIZE
} from '../model/model-bak.js';

// ---

// NOTE: Function to draw rectangles on click
export function drawField() {	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	pointDraw();		

	/**
	 * NOTE:
	 * iterate over the array, and if some element = 1, then draw
	 * point will have a size 10x10px, if be clicked in first field
	 * coordinates must be from 0 to 10 if second field is from 10 to 20, etc 
	 * that is, in fact it sets a point under the mouse pointer when you click
	 */
	function pointDraw() {
		for (let i = 0; i < fieldSquare; i++) {
			for (let j = 0; j < fieldSquare; j++) {
				if (field[i][j] == 1) {
					ctx.fillRect(j * POINT_SIZE, i * POINT_SIZE, POINT_SIZE, POINT_SIZE);
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