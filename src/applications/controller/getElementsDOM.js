/* jshint esversion: 6 */

export class getElementsDOM {
  constructor() {
    this.canvasField = document.getElementsByClassName('grid__gradient')[0];
    this.countCycle = document.getElementsByClassName('count__cycle')[0];
    this.countLife = document.getElementsByClassName('count__life')[0];
    this.countDead = document.getElementsByClassName('count__dead')[0];
    this.countPoint = document.getElementsByClassName('count__point')[0];
    this.pausePlay = document.getElementsByClassName('pause')[0];
    this.startStop = document.getElementsByClassName('start')[0];    
    this.speedGame = document.getElementsByClassName('speed')[0];
    this.fieldWidth = document.getElementsByClassName('width')[0];
    this.fieldHeight = document.getElementsByClassName('height')[0];
  }
 
  get getCanvasFieldDOM() {
    return this.canvasField;
  }

  get getCountCycleDOM() {
    return this.countCycle;
  }

  get getCountLifeDOM() {
    return this.countLife;
  }

  get getCountDeadDOM() {
    return this.countDead;
  }

  get getCountPointDOM() {
    return this.countPoint;
  }

  get getPausePlayDOM() {
    return this.pausePlay;
  }

  get getStartStopDOM() {
    return this.startStop;
  }

  get getSpeedGameDOM() {
    return this.speedGame;
  }

  get getFieldWidthDOM() {
    return this.fieldWidth;
  }

  get getFieldHeightDOM() {
    return this.fieldHeight;
  }
}