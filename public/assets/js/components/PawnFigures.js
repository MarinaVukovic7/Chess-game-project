'use strict';

import {elements} from '../settings.js';

let blackPawns = [];
let whitePawns = [];

const PawnFigures = {
  createBlackPawns() {
    for (let i = 0; i < 8; i++) {
      let size = elements.myCanvas.width / 8;
      let posX = i * size;
      let posY = size;
      blackPawns.push({
        img: elements.blackPawnImg,
        posX,
        posY,
        size,
        size
      });
    }
  },

  renderBlackPawns() {
    blackPawns.forEach(pawn => {
      elements.ctx.drawImage(
        pawn.img,
        pawn.posX,
        pawn.posY,
        pawn.size,
        pawn.size);
    });
  },

  createWhitePawns() {
    for (let i = 0; i < 8; i++) {
      let size = elements.myCanvas.width / 8;
      let posX = i * size;
      let posY = 6 * size;
      whitePawns.push({
        img: elements.whitePawnImg,
        posX,
        posY,
        size,
        size
      });
    }
  },
  
  renderWhitePawns() {
    whitePawns.forEach(pawn => {
      elements.ctx.drawImage(
        pawn.img,
        pawn.posX,
        pawn.posY,
        pawn.size,
        pawn.size);
    });
  }
}

export default PawnFigures;