'use strict';

import { elements } from './settings.js';

const dom = {
  domMapping() {
    elements.myCanvas = document.querySelector('#chessBoard');
    elements.ctx = elements.myCanvas.getContext('2d');
    elements.blackKingImg = document.querySelector('#blackKingImg');
    elements.blackQueenImg = document.querySelector('#blackQueenImg');
    elements.blackRookImg = document.querySelector('#blackRookImg');
    elements.blackBishopImg = document.querySelector('#blackBishopImg');
    elements.blackKnightImg = document.querySelector('#blackKnightImg');
    elements.blackPawnImg = document.querySelector('#blackPawnImg');
    elements.whiteKingImg = document.querySelector('#whiteKingImg');
    elements.whiteQueenImg = document.querySelector('#whiteQueenImg');
    elements.whiteRookImg = document.querySelector('#whiteRookImg');
    elements.whiteBishopImg = document.querySelector('#whiteBishopImg');
    elements.whiteKnightImg = document.querySelector('#whiteKnightImg');
    elements.whitePawnImg = document.querySelector('#whitePawnImg');
  },

  getHTMLImgById(imgId) {
    return document.querySelector(`#${imgId}`);
  }
}

export default dom;