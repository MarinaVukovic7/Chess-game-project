'use strict';

export const moveRook = (fields, activeField, activeRowIndex, activeColumnIndex) => {
  const result = [];
  result.push(...moveForward(fields, activeField, activeRowIndex, activeColumnIndex));
  result.push(...moveBackwards(fields, activeField, activeRowIndex, activeColumnIndex));
  result.push(...moveRight(fields, activeField, activeRowIndex, activeColumnIndex));
  result.push(...moveLeft(fields, activeField, activeRowIndex, activeColumnIndex));

  return result;
}

export const moveForward = (fields, activeField, activeRowIndex, activeColumnIndex) => {
  const result = [];

  for (let i = activeRowIndex + 1; i < 8; i++) {
    const otherPlayerFigures = countOtherPlayesFigures(result, activeField);
    if(otherPlayerFigures === 1)
        break;

    const nextRow = fields[i];
    const nextColumn = nextRow[activeColumnIndex];


    if (!nextColumn.figure || nextColumn.figure.colorType !== activeField.figure.colorType) {
      result.push(nextColumn);
    } else {
      break;
    }
  }
  return result;
}

export const moveBackwards = (fields, activeField, activeRowIndex, activeColumnIndex) => {
  const result = [];

  for (let i = activeRowIndex -1; i >= 0; i--) {
    const otherPlayerFigures = countOtherPlayesFigures(result, activeField);
    if(otherPlayerFigures === 1)
        break;

    const nextRow = fields[i];
    const nextColumn = nextRow[activeColumnIndex];

    if (!nextColumn.figure || nextColumn.figure.colorType !== activeField.figure.colorType) {
      result.push(nextColumn);
    } else {
      break;
    }
  }
  return result;
}

export const moveRight = (fields, activeField, activeRowIndex, activeColumnIndex) => {
  const result = [];

  for (let j = activeColumnIndex + 1; j < 8; j++) {
    const otherPlayerFigures = countOtherPlayesFigures(result, activeField);
    if(otherPlayerFigures === 1)
        break;

    const nextColumn = fields[activeRowIndex][j];

    if (!nextColumn.figure || nextColumn.figure.colorType !== activeField.figure.colorType) {
      result.push(nextColumn);
    } else {
      break;
    }
  }
  return result;
}

export const moveLeft = (fields, activeField, activeRowIndex, activeColumnIndex) => {
  const result = [];

  for (let j = activeColumnIndex - 1; j >= 0; j--) {
    const otherPlayerFigures = countOtherPlayesFigures(result, activeField);
    if(otherPlayerFigures === 1)
        break;

    const nextColumn = fields[activeRowIndex][j];

    if (!nextColumn.figure || nextColumn.figure.colorType !== activeField.figure.colorType) {
      result.push(nextColumn);
    } else {
      break;
    }
  }
  return result;
}

export const countOtherPlayesFigures = (elements, activeField) => {
  return elements.filter((e) => e.figure && e.figure.colorType !== activeField.figure.colorType).length;
}
