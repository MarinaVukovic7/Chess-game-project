'use strict';

import { countOtherPlayesFigures } from "./Rook.js";

export const moveBishop = (fields, activeField, activeRowIndex, activeColumnIndex) => {
  const result = [];
  result.push(...moveForwardRightDiagonal(fields, activeField, activeRowIndex, activeColumnIndex));
  result.push(...moveBackwardsdRightDiagonal(fields, activeField, activeRowIndex, activeColumnIndex));
  result.push(...moveForwardLeftDiagonal(fields, activeField, activeRowIndex, activeColumnIndex));
  result.push(...moveBackwardsLeftDiagonal(fields, activeField, activeRowIndex, activeColumnIndex));

  return result;
}

export const moveForwardRightDiagonal = (fields, activeField, activeRowIndex, activeColumnIndex) => {
  const result = [];

  for (let i = activeRowIndex - 1, j = activeColumnIndex + 1; i >= 0 && j < 8; i--, j++) {
    const otherPlayerFigures = countOtherPlayesFigures(result, activeField);
    if(otherPlayerFigures === 1)
        break;

    const nextField = fields[i][j];

    if (!nextField.figure || nextField.figure.colorType !== activeField.figure.colorType) {
      result.push(nextField);
    } else {
      break;
    }
  }
  return result;
}

export const moveBackwardsdRightDiagonal = (fields, activeField, activeRowIndex, activeColumnIndex) => {
  const result = [];

  for (let i = activeRowIndex + 1, j = activeColumnIndex + 1; i < 8 && j < 8; i++, j++) {
    const otherPlayerFigures = countOtherPlayesFigures(result, activeField);
    if(otherPlayerFigures === 1)
        break;

    const nextField = fields[i][j];

    if (!nextField.figure || nextField.figure.colorType !== activeField.figure.colorType) {
      result.push(nextField);
    } else {
      break;
    }
  }
  return result;
}

export const moveForwardLeftDiagonal = (fields, activeField, activeRowIndex, activeColumnIndex) => {
  const result = [];

  for (let i = activeRowIndex - 1, j = activeColumnIndex - 1; i >= 0 && j >= 0; i--, j--) {
    const otherPlayerFigures = countOtherPlayesFigures(result, activeField);
    if(otherPlayerFigures === 1)
        break;

    const nextField = fields[i][j];

    if (!nextField.figure || nextField.figure.colorType !== activeField.figure.colorType) {
      result.push(nextField);
    } else {
      break;
    }
  }
  return result;
}

export const moveBackwardsLeftDiagonal = (fields, activeField, activeRowIndex, activeColumnIndex) => {
  const result = [];

  for (let i = activeRowIndex + 1, j = activeColumnIndex - 1; i < 8 && j >= 0; i++, j--) {
    const otherPlayerFigures = countOtherPlayesFigures(result, activeField);
    if(otherPlayerFigures === 1)
        break;

    const nextField = fields[i][j];

    if (!nextField.figure || nextField.figure.colorType !== activeField.figure.colorType) {
      result.push(nextField);
    } else {
      break;
    }
  }
  return result;
}
