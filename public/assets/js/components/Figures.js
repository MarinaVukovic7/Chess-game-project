'use strict';

import { elements } from '../settings.js';
import PawnFigures from './PawnFigures.js';

const Figures = {
  renderStartPositions() {
    let size = elements.myCanvas.width / 8;
    elements.ctx.drawImage(elements.blackKingImg, 4 * size, 0, size, size);
    elements.ctx.drawImage(elements.blackQueenImg, 3 * size, 0, size, size);
    elements.ctx.drawImage(elements.blackRookImg, 0, 0, size, size);
    elements.ctx.drawImage(elements.blackBishopImg, 2 * size, 0, size, size);
    elements.ctx.drawImage(elements.blackKnightImg, size, 0, size, size);
    elements.ctx.drawImage(elements.blackBishopImg, 5 * size, 0, size, size);
    elements.ctx.drawImage(elements.blackKnightImg, 6 * size, 0, size, size);
    elements.ctx.drawImage(elements.blackRookImg, 7 * size, 0, size, size);
    PawnFigures.renderBlackPawns();
    elements.ctx.drawImage(elements.whiteKingImg, 4 * size, 7 * size, size, size);
    elements.ctx.drawImage(elements.whiteQueenImg, 3 * size, 7 * size, size, size);
    elements.ctx.drawImage(elements.whiteRookImg, 0, 7 * size, size, size);
    elements.ctx.drawImage(elements.whiteBishopImg, 2 * size, 7 * size, size, size);
    elements.ctx.drawImage(elements.whiteKnightImg, size, 7 * size, size, size);
    elements.ctx.drawImage(elements.whiteBishopImg, 5 * size, 7 * size, size, size);
    elements.ctx.drawImage(elements.whiteKnightImg, 6 * size, 7 * size, size, size);
    elements.ctx.drawImage(elements.whiteRookImg, 7 * size, 7 * size, size, size);
    PawnFigures.renderWhitePawns();
  }
}

export default Figures;