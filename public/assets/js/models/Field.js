'use strict';

import { elements } from '../settings.js';
import dom from '../dom.js';

class Field {
  constructor(figure, posX, posY, width, height, id) {
    this.figure = figure;
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.id = id;

    this.isActive = false;
  }

  getFieldAreaClicked(offsetX, offsetY) {
    return offsetX > this.posX && offsetX < (this.posX + this.width) && offsetY > this.posY && offsetY < (this.posY + this.height);
  }

  setIsActive(value) {
    this.isActive = value;
  }

  setFigure(figure) {
    this.figure = figure;
  }

  drawFigure() {
    const figureImg = dom.getHTMLImgById(this.figure.imgId);
    elements.ctx.drawImage(figureImg, this.posX, this.posY, this.width, this.height);
  }
}

export default Field;