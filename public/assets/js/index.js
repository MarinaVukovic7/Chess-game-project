'use strict';

import dom from './dom.js';
import Figures from './components/Figures.js';
import PawnFigures from './components/PawnFigures.js';
import Canvas from './models/Canvas.js';
import { appendSocketEventListener } from './serverComunication.js'

const init = () => {
  dom.domMapping();
  const canvas = new Canvas();
  canvas.initCanvas();
  canvas.render();
  PawnFigures.createBlackPawns();
  PawnFigures.createWhitePawns();
  Figures.renderStartPositions();
  canvas.appendEventListener();
  appendSocketEventListener(canvas);
}

// INIT
init();