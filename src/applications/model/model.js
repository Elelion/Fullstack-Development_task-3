/* jshint esversion: 6 */

export class Model {
	constructor() {
		this.ctx;
		this.fieldSquare;
		this.pointSize;
		this.randomStep;	

		this.count = 0;
		this.counterLife = 0;
		this.counterDead = 0;
		this.pausePlayStatus = 0;
		this.max = 0;
		this.min = 0;

		/**
		 * NOTE:
		 * statusField: 0 - empty field, if > 0 - on field have a points
		 * statusFieldReset: for button RESET, 0 - button NOT pressed, 1 - pressed
		 * randomStatus: for random points, 0 - not be randoming, 1 - randoming
		 * startStatus: 0 - start, 1 - stop
		 */
		this.statusField = 0;
		this.statusFieldReset = 0;
		this.randomStatus = 0;
		this.startStatus = 0;

		// NOTE: creating global empty array, our field for points
		this.field = [];

		this.speedGame = document.getElementsByClassName('speed')[0];
		this.fieldWidth = document.getElementsByClassName('width')[0];
		this.fieldHeight = document.getElementsByClassName('height')[0];
		this.canvas = document.getElementsByClassName('grid__gradient')[0];		

		this.setCtx();
		this.setFieldSquare();
		this.setWidthHeightCanvas();
		this.setCellFieldSize();
		this.clearField();
	}	

	// ---

	// DEBIGGING: get for view
	setColorPoint(color) {
		this.ctx.fillStyle = color;
	}	

	// ---
	
	// NOTE: ctx = ConTeXt
	setCtx() {
		this.ctx = this.canvas.getContext('2d');
	}

	// ---

	setCtxClear() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}

	// ---

	// DEBIGGING: get for view
	setSizePoint(size) {
		this.pointSize = size;
	}

	// ---

	getSizePoint() {
		return this.pointSize;
	}

	// ---

	// NOTE: 300 / 10 = 30, it is array will have 30х30
	setFieldSquare() {
		let pointSize = model.getSizePoint();
		this.fieldSquare = this.canvas.width * 1 / pointSize * 1;
	}

	// ---

	// DEBIGGING: get for view
	// NOTE: for randoming field filling, lookup: fieldSize()		
	setRandomStep(randomMax) {		
		if (randomMax > 80) {			
			this.randomStep = this.canvas.width * 80 / 100;
		}	else {
			this.randomStep = this.canvas.width * randomMax / 100;
		}
	}

	// ---

	getRandomStep() {
		return this.randomStep;
	}

	// ---

	setWidthHeightCanvas() {
		this.canvas.width = this.fieldWidth.value;
		this.canvas.height = this.fieldHeight.value;
	}

	// ---

	/**
	 * NOTE:
	 * the size for the cell field, comes from the size of the square, 
	 * which is put when you click
	 * ctx.fillStyle - color for square
	 */
	setCellFieldSize() {
		let pointSize = model.getSizePoint();
		this.canvas.style.backgroundSize = pointSize + 'px ' + pointSize + 'px';
	}

	// ---
	
	getField() {
		return this.field;

		// FIXME: think... is there a need?
		// export let field = function field() {
		// 	let field = [];
		// 	return field;
		// }
	}

	// ---

	resetGame() {
		this.count = 0;
		this.counterLife = 0;
		this.counterDead = 0;
		this.pausePlayStatus = 0;	
		this.statusField = 0;

		// NOTE: stops the game cycle
		this.statusFieldReset = 1;
		this.pausePlayStatus = 1;

		clearField();	
		console.log('RESET: (statusFieldReset): ' + statusFieldReset);
	}

	// ---

	clearField() {	
		let field = this.getField();

		for (let i = 0; i < this.fieldSquare; i++) {
			field[i] = [];

			for (let j = 0; j < this.fieldSquare; j++) {
				field[i][j] = 0;
			}
		}
	}	

	// ---

	getReloadSheet() {
		location.reload();
	}

	// ---
	
	// NOTE: general function
	checkEmptyField() {
		let field = this.getField();

		for (let i = 0; i < this.fieldSquare; i++) {
			for (let j = 0; j < this.fieldSquare; j++) {
				if (field[i][j] != 0) {
					statusField++;
				}
			}
		}
	}

	// ---

	getFieldSize() {
		this.setProportionHeightWidth();
		this.setNewField();	
	}

	setProportionHeightWidth() {
		if (this.fieldWidth.value < this.fieldHeight.value) { 
			this.fieldWidth.value = this.fieldHeight.value;
		}

		this.canvas.width = this.fieldWidth.value;
		this.canvas.height = this.fieldHeight.value;
	}

	setNewField() {
		let pointSize = this.getSizePoint();
		this.fieldSquare = this.canvas.width * 1 / pointSize * 1;	
		getReloadSheet();
	}

	// ---

	getPauseGame() {
		if (this.pausePlayStatus == 0) {
			this.pausePlayStatus = 1;				
		} else {
			this.pausePlayStatus = 0;			
			startLife();			
		}	
	
		(pausePlayStatus == 0) ? console.log('play') : console.log('pause');
	}
	
	// ---

	getRandomFill() {	
		getClearFieldBeforeRandom();
		getMaxRandomNumber();
		getRandomGenerated();
	}

	// NOTE: clear field
	getClearFieldBeforeRandom() {
		this.field = this.getField();

		for (let i = 0; i < this.fieldSquare; i++) {
			for (let j = 0; j < this.fieldSquare; j++) {			
				this.statusField = 0;
				this.field[i][j] = 0;
			}
		}
	}

	getMaxRandomNumber() {
		this.randomStatus = 1;
		this.setCtxClear();		
		
		this.max = this.getMaxFieldSize();
		this.min = 1;
	}

	// NOTE: take the maximum value of the width or height, whichever is greater
	getMaxFieldSize() {
		let max = 0;

		if (this.canvas.width > this.canvas.height) {
			max = this.canvas.width;		
		} else {
			max = this.canvas.height;
		}

		if (this.canvas.width == this.canvas.height) {
			max = this.canvas.width;
		} else { 
			max = this.canvas.width;
		}	

		return max;
	}

	// NOTE: filling the playing field with randomly generated numbers
	getRandomGenerated() {	
		let pointSize = this.getSizePoint();
		this.field = this.getField();

		for (let i = 0; i < model.randomStep; i++) {
			let randX = Math.round(Math.random() * (this.max - this.min) + this.min);
			let randY = Math.round(Math.random() * (this.max - this.min) + this.min);
			randX = Math.floor(randX / pointSize);
			randY = Math.floor(randY / pointSize);

			this.field[randY][randX] = 1;			
		}
	}
	
	// ---

	startGame() {
		if (this.startStatus == 0) {		
			this.checkEmptyField();
			this.preparingPlay();
	
			startStatus = 1;			
			console.log('startStatus: ' + startStatus);
		} else {		
			this.resetGame();
			getReloadSheet();
	
			// TODO: thinking about implement without reloading the page
			// startStatus = 0;
			// startStop.innerHTML = 'Start';
			// console.log('startStatus: ' + startStatus);		
		}
	}

	preparingPlay() {
		if (this.statusField > 1) {
			this.statusFieldReset = 0;
			startLife();			
		} else {			
			return;
		}
	}	

	// ---

	startLife() {
		let i = 0;
		let j = 0;
		let neighbors = 0;
		let fieldTemp = [];
		let isAlive = [];
		this.field = model.getField();

		gameLoop();

		function gameLoop() {
			if (pausePlayStatus == 0  && statusFieldReset == 0) {		
				for (i = 0; i < model.fieldSquare; i++) {			
					fieldTemp[i] = [];			
					for (j = 0; j < model.fieldSquare; j++) {				
						neighbors = 0;
						setCountNeighbors();

						// NOTE: this is the current state with points
						isAlive = field[i][j];

						getCheckNeighbors();
						getCheckPointsField();
					}
				}
				
				setData();
			}
		}

		function setCountNeighbors() {
			let top = field[topFieldOut(i) - 1][j];
			let right = field[i][rightFieldOut(j) + 1];
			let bottom = field[rightFieldOut(i) + 1][j];
			let left = field[i][topFieldOut(j) - 1];
			let topRight = field[topFieldOut(i) - 1][rightFieldOut(j) + 1];
			let bottomRight = field[rightFieldOut(i) + 1][rightFieldOut(j) + 1];
			let bottomLeft = field[rightFieldOut(i) + 1][topFieldOut(j) - 1];
			let topLeft = field[topFieldOut(i) - 1][topFieldOut(j) - 1];		
			
			if (top == 1) { 
				neighbors++;			
			}

			if (right == 1) { 
				neighbors++;			
			}

			if (bottom == 1) { 
				neighbors++;			
			}

			if (left == 1) { 
				neighbors++;			
			}

			if (topRight == 1) { 
				neighbors++;			
			}

			if (bottomRight == 1) { 
				neighbors++;			
			}

			if (bottomLeft == 1) { 
				neighbors++;			
			}

			if (topLeft == 1) { 
				neighbors++;			
			}
		}

		function getCheckNeighbors() {
			if (isAlive == 0 && neighbors === 3) {
				fieldTemp[i][j] = 1;
				counterLife++;
				countLife.innerHTML = counterLife  + ' | ';
			} else {
				if (isAlive == 1 && (neighbors === 3 || neighbors === 2)) {
					fieldTemp[i][j] = 1; 
					counterLife++;
					countLife.innerHTML = counterLife  + ' | ';
				} else {
					if (isAlive == 1 && neighbors > 3) {
						fieldTemp[i][j] = 0;
						counterDead++;
						countDead.innerHTML = counterDead  + ' | ';
					} else {
						if (isAlive == 1 && neighbors < 2) {
							fieldTemp[i][j] = 0;
							counterDead++;
							countDead.innerHTML = counterDead  + ' | ';
						} else { 
							fieldTemp[i][j] = 0; counterDead++;
								countDead.innerHTML = counterDead + ' | ';
						}
					}
				}
			}
		}

		function getCheckPointsField() {
			if (statusField < 1 && randomStatus == 0) {
				alert('GameOver man!. Все точки сдохли, плодиться не кому.');					
				let request = prompt('Введите: НЕТ - что бы остаться на страничке', '');

				switch (request) {
					case 'ДА': 
						getReloadSheet();
						break;

					case 'НЕТ': case 'Нет': case 'нет': case 'НеТ': 
					case 'НЕт': case 'неТ': case 'нЕт':
						pausePlay.disabled = true;
						startStop.disabled = false;
						clearTimeout(handle);
						break;

					default: 
						alert('Некорректное действие, страница будет перезагружена');
						getReloadSheet();
						break;
				}

				return;
			}
		}

		// NOTE: take into account the output of the field from the top
		function topFieldOut(i) {
			if (i == 0) {
				return model.fieldSquare;
			}

			return i;
		}

		// NOTE: take into account the output of the field from the right
		function rightFieldOut(i) {
			if (i == model.fieldSquare * 1 - 1) {
				return -1; 
			}

			return i;
		}

		function setData() {
			field = fieldTemp;
			drawField();				
			statusField = 0;
			randomStatus = 0;
			count++;
			countCycle.innerHTML = count + ' | ';
			countPoint.innerHTML = statusField;
			model.checkEmptyField();
			
			// NOTE: timer for drawing
			setTimeout(startLife, this.speedGame.value);
		}

		return;	
	}

}
// ----------------------------------------------------------------------------













// ---

/**
 * NOTE:
 * we hang the click event on canvas, where the event indicates that 
 * we will work with the event
 */
canvas.onclick = function clickMouseButton(event) {	
	let x;
	let y;
	let pointSize = model.getSizePoint();
	let field = model.getField();

	setData();
	getPointField();
	// drawField();
	console.log(field);

	/**
	 * NOTE:
	 * fields from 0 to 10 will belong to the first cube, 
	 * from 10 to 20 - second, etc.
	 * 300 / 10 = 30 cubes, then round to the bottom
	 */
	function setData() {		
		x = event.offsetX;
		y = event.offsetY;
		console.log('offsetX: ' + x + ' | ' + 'offsetY: ' + y);	
		
		x = Math.floor(x / pointSize);
		y = Math.floor(y / pointSize);
		console.log('X: ' + x + ' | ' + 'Y: ' + y);	
	}

	// NOTE: Filling the playing field, where we click, there will be ONE
	function getPointField() {
		if (field[y][x] == 0) {
			field[y][x] = 1;
		} else {
			field[y][x] = 0;
		}
	}
}