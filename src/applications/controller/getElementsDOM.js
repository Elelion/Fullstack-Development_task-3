/* jshint esversion: 6 */

// import {Model} from '../model/model.js';

// const GET_DOM = new getElementsDOM();

// ---

export class getElementsDOM {
  constructor() {
    // this.model = new Model();

    this.countCycle = document.getElementsByClassName('count__cycle')[0];
    this.countLife = document.getElementsByClassName('count__life')[0];
    this.countDead = document.getElementsByClassName('count__dead')[0];
    this.countPoint = document.getElementsByClassName('count__point')[0];
    this.pausePlay = document.getElementsByClassName('pause')[0];
    this.startStop = document.getElementsByClassName('start')[0];

    // this.speedGame = document.getElementsByClassName('speed')[0];
    // this.fieldWidth = document.getElementsByClassName('width')[0];
    // this.fieldHeight = document.getElementsByClassName('height')[0];
    // this.canvasField = document.getElementsByClassName('grid__gradient')[0];
  }  

  getCountCycleDOM() {
    return this.countCycle;
  }

  getCountLifeDOM() {
    return this.countLife;
  }

  getCountDeadDOM() {
    return this.countDead;
  }

  getCountPointDOM() {
    return this.countPoint;
  }

  getPausePlayDOM() {
    return this.pausePlay;
  }

  getStartStopDOM() {
    return this.startStop;
  }

  // getSpeedGameDOM() {
  //   return this.speedGame;
  // }

  // getFieldWidthDOM() {
  //   return this.fieldWidth;
  // }

  // getFieldHeightDOM() {
  //   return this.fieldHeight;
  // }

  // getCanvasFieldDOM() {
  //   return this.canvasField;
  // }
}