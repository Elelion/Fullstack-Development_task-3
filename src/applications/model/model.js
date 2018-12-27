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
		
		// NOTE: for coordinates X and Y
		this.setX = 0;
		this.setY = 0;

		// NOTE: for gaming cycle
		this.neighbors = 0;
		this.i = 0;
		this.j = 0;
		this.fieldTemp = [];
		this.isAlive = [];

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
		this.getCanvasClickEvents();
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

		return;
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
		this.field = model.getField();

		if (this.pausePlayStatus == 0  && this.statusFieldReset == 0) {		
			for (this.i = 0; this.i < this.fieldSquare; this.i++) {			
				this.fieldTemp[i] = [];			
				for (this.j = 0; this.j < this.fieldSquare; this.j++) {				
					this.neighbors = 0;
					setCountNeighbors();

					// NOTE: this is the current state with points
					this.isAlive = this.field[i][j];

					getCheckNeighbors();
					getCheckPointsField();
				}
			}
			
			setLifeData();
		}
	}

	setCountNeighbors() {
		let top = this.field[this.setTopFieldOut(i) - 1][j];
		let right = this.field[i][this.setRightFieldOut(j) + 1];
		let bottom = this.field[this.setRightFieldOut(i) + 1][j];
		let left = this.field[i][this.setTopFieldOut(j) - 1];
		let topRight = this.field[this.setTopFieldOut(i) - 1][this.setRightFieldOut(j) + 1];
		let bottomRight = this.field[this.setRightFieldOut(i) + 1][this.setRightFieldOut(j) + 1];
		let bottomLeft = this.field[this.setRightFieldOut(i) + 1][this.setTopFieldOut(j) - 1];
		let topLeft = this.field[this.setTopFieldOut(i) - 1][this.setTopFieldOut(j) - 1];		
		
		if (top == 1) { 
			this.neighbors++;			
		}

		if (right == 1) { 
			this.neighbors++;			
		}

		if (bottom == 1) { 
			this.neighbors++;			
		}

		if (left == 1) { 
			this.neighbors++;			
		}

		if (topRight == 1) { 
			this.neighbors++;			
		}

		if (bottomRight == 1) { 
			this.neighbors++;			
		}

		if (bottomLeft == 1) { 
			this.neighbors++;			
		}

		if (topLeft == 1) { 
			this.neighbors++;			
		}
	}

	getCheckNeighbors() {
		if (this.isAlive == 0 && this.neighbors === 3) {
			this.fieldTemp[i][j] = 1;
			this.counterLife++;
		} else {
			if (this.isAlive == 1 && (this.neighbors === 3 || this.neighbors === 2)) {
				this.fieldTemp[i][j] = 1; 
				this.counterLife++;				
			} else {
				if (this.isAlive == 1 && this.neighbors > 3) {
					this.fieldTemp[i][j] = 0;
					this.counterDead++;					
				} else {
					if (this.isAlive == 1 && this.neighbors < 2) {
						this.fieldTemp[i][j] = 0;
						this.counterDead++;						
					} else { 
						this.fieldTemp[i][j] = 0; 
						this.counterDead++;							
					}
				}
			}
		}
	}

	getCounterLife() {
		return this.counterLife;
	}

	getCheckPointsField() {
		if (this.statusField < 1 && this.randomStatus == 0) {				
			clearTimeout(handle);						
		}
	
		return;
	}

	// NOTE: take into account the output of the field from the top
	setTopFieldOut(i) {
		if (i == 0) {
			return this.fieldSquare;
		}

		return i;
	}

	// NOTE: take into account the output of the field from the right
	setRightFieldOut(i) {
		if (i == this.fieldSquare * 1 - 1) {
			return -1; 
		}

		return i;
	}

	setLifeData() {
		this.field = this.fieldTemp;		
		statusField = 0;
		randomStatus = 0;
		count++;		
		this.checkEmptyField();
		
		// NOTE: timer for drawing
		setTimeout(this.startLife, this.speedGame.value);
	}

// ---

	/**
	 * NOTE:
	 * we hang the click event on canvas, where the event indicates that 
	 * we will work with the event
	 *
	 * fields from 0 to 10 will belong to the first cube, 
	 * from 10 to 20 - second, etc.
	 * 300 / 10 = 30 cubes, then round to the bottom
	 */	
	clickMouseButton(event) {		
		this.setX = event.offsetX;
		this.setY = event.offsetY;
		let pointSize = this.getSizePoint();

		console.log('offsetX: ' + this.setX + ' | ' + 'offsetY: ' + this.setY);	
		
		this.setX = Math.floor(this.setX / pointSize);
		y = Math.floor(this.setY / pointSize);
		console.log('X: ' + this.setX + ' | ' + 'Y: ' + this.setY);	

		getPointField();
		// drawField();
		console.log(this.field);
	}

	// NOTE: Filling the playing field, where we click, there will be ONE
	getPointField() {
		if (this.field[this.setY][this.setX] == 0) {
			this.field[this.setY][this.setX] = 1;
		} else {
			this.field[this.setY][this.setX] = 0;
		}
	}

	getCanvasClickEvents() {
		this.canvas.onclick = clickMouseButton(event);
		return; 
	}
}