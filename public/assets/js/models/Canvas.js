'use strict';

import { elements } from "../settings.js";
import { getFieldColumnIndex, getFieldRowIndex, initialBoard, createBoardFromData } from "../initialBoard.js";
import { sendMsgToServer, sendGameoverMsg } from "../serverComunication.js";
import Figures from "../components/Figures.js";


class Canvas {
  constructor() {

    this.fields = [];
    this.activePlayerColor = '';
    this.isActive = false;
  }

  setActivePlayer(color, isActive) {
    this.activePlayerColor = color;
    this.isActive = isActive;
  }

  resetActivePlayer() {
    this.activePlayerColor = '';
    this.isActive = false;
  }

  initCanvas() {
    elements.myCanvas.width = 900;
    elements.myCanvas.height = 900;
  }

  render() {
    const size = this.getFieldSize();
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        this.styleEmptyField(x, y, x * size, y * size, size, size);
      }
    }

    this.fields = initialBoard(size);
  }

  appendEventListener() {
    elements.myCanvas.addEventListener('click', (event) => this.changePosition(event, this.fields));
  }

  changePosition(event, fields) {
    if (!this.isActive) return;

    const { offsetX } = event;
    const { offsetY } = event;

    const activeRow = fields.find((row) => row.find((field) => field.isActive));
    const activeRowIndex = fields.indexOf(activeRow);
    const activeField = activeRow?.find((field) => field.isActive);
    const activeColumnIndex = activeRow?.indexOf(activeField);

    fields.forEach((row, rowIndex) => {

      row.forEach((field, columnIndex) => {

        if (field.getFieldAreaClicked(offsetX, offsetY)) {

          if (field.isActive) {
            this.secondClickStay(rowIndex, columnIndex, field, activeField, fields, activeRowIndex, activeColumnIndex);

          } else {
            if (field.figure !== undefined && !activeField) {
              this.firstClick(fields, field, rowIndex, columnIndex);

            } else {
              if (activeField && (field.figure === undefined || activeField.figure.colorType !== field.figure.colorType)) {
                this.seconClickMove(fields, field, activeField, rowIndex, columnIndex, activeRowIndex, activeColumnIndex);
              }
            }
          }
        }
      })
    })
  }

  firstClick(fields, field, rowIndex, columnIndex) {
    if (field.figure && field.figure.colorType !== this.activePlayerColor) return;

    field.setIsActive(true);
    this.styleActiveField(field);
    const availableFields = field.figure.getPossibleFieldsToMove(fields, field, rowIndex, columnIndex);
    availableFields.forEach((availableField) => {
      if (availableField.figure) {
        this.styleRedField(availableField);
      } else {
        this.styleActiveField(availableField);
      }

    });
  }

  seconClickMove(fields, field, activeField, rowIndex, columnIndex, activeRowIndex, activeColumnIndex) {
    const canBeMovedTo = activeField.figure.getPossibleFieldsToMove(fields, activeField, activeRowIndex, activeColumnIndex);
    if (field.figure && field.figure.name === 'k') {
      this.createCheckmateWindow(`Checkmate!<br>Game is over.You won!`, './assets/images/winner.png');
      sendGameoverMsg({ fields: fields, activePlayerColor: this.activePlayerColor });
    }

    if (!canBeMovedTo || canBeMovedTo.includes(field)) {
      this.styleEmptyField(rowIndex, columnIndex, field.posX, field.posY, field.width, field.height);

      field.setFigure(activeField.figure);
      field.drawFigure();

      activeField.setFigure(undefined);
      activeField.setIsActive(false);
      this.styleEmptyField(activeRowIndex, activeColumnIndex, activeField.posX, activeField.posY, activeField.width, activeField.height);
      this.styleBackAvailableFields(canBeMovedTo);

      sendMsgToServer({ fields: fields, activePlayerColor: this.activePlayerColor });
      this.resetActivePlayer();
    }
  }

  secondClickStay(rowIndex, columnIndex, field, activeField, fields, activeRowIndex, activeColumnIndex) {
    this.styleEmptyField(rowIndex, columnIndex, field.posX, field.posY, field.width, field.height);
    field.drawFigure();
    field.setIsActive(false);
    const canBeMovedTo = activeField.figure.getPossibleFieldsToMove(fields, activeField, activeRowIndex, activeColumnIndex);
    this.styleBackAvailableFields(canBeMovedTo);
  }

  getFieldSize() {
    const size = elements.myCanvas.width / 8;
    return size;
  }

  styleEmptyField(rowIndex, fieldIndex, posX, posY, width, height) {
    const color = (rowIndex + fieldIndex) % 2 == 0 ? "#eeeed2" : "#663300";
    elements.ctx.fillStyle = color;
    elements.ctx.fillRect(posX, posY, width, height);
  }

  styleActiveField(field) {
    elements.ctx.fillStyle = 'rgba(28, 169, 17, .4)';
    elements.ctx.fillRect(field.posX, field.posY, field.width, field.height);
  }

  styleRedField(field) {
    elements.ctx.fillStyle = 'rgba(250, 0, 0, .3)';
    elements.ctx.fillRect(field.posX, field.posY, field.width, field.height);
  }

  createCheckmateWindow(content, src) {
    const container = document.createElement('div');
    container.className = 'container';
    document.body.append(container);

    const gameOverDiv = document.createElement('div');
    gameOverDiv.innerHTML = content;
    gameOverDiv.className = 'gameOverDiv';
    container.append(gameOverDiv);

    const gameOverImg = document.createElement('img');
    gameOverImg.src = src;
    gameOverImg.className = 'gameOverImg';
    gameOverDiv.append(gameOverImg);

    const resetGameButton = document.createElement('button');
    resetGameButton.innerHTML = 'Reset Game';
    resetGameButton.className = 'resetGameButton';
    gameOverDiv.append(resetGameButton);
    resetGameButton.addEventListener('click', () => {
      container.className = 'none';
      this.resetGame();
    });
  }

  resetGame() {
    this.render();
    Figures.renderStartPositions();
  }

  styleBackAvailableFields(arrayOfFields, field) {
    arrayOfFields.filter((e) => e !== field).forEach((f) => {
      const rowIndex = getFieldRowIndex(f.id.row);
      const columnIndex = getFieldColumnIndex(f.id.column);
      this.styleEmptyField(rowIndex, columnIndex, f.posX, f.posY, f.width, f.height);
      if (f.figure) f.drawFigure();
    })
  }

  sendBoardData(msg) {
    this.render();

    this.fields = createBoardFromData(msg.fields);
    this.fields.forEach((row) => {
      row.forEach((column) => {
        if (column.figure) column.drawFigure();
      })
    })
    this.setActivePlayer(msg.color, msg.isActive);
  }
  
}

export default Canvas;