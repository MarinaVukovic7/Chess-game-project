'use strict';

import { moveForward, moveBackwards, moveRight, moveLeft } from "./Rook.js";
import { moveForwardRightDiagonal, moveBackwardsdRightDiagonal, moveForwardLeftDiagonal, moveBackwardsLeftDiagonal } from "./Bishop.js";

const moveQueen = (fields, activeField, activeRowIndex, activeColumnIndex) => {
  const result = [];

  result.push(...moveForward(fields, activeField, activeRowIndex, activeColumnIndex));
  result.push(...moveBackwards(fields, activeField, activeRowIndex, activeColumnIndex));
  result.push(...moveRight(fields, activeField, activeRowIndex, activeColumnIndex));
  result.push(...moveLeft(fields, activeField, activeRowIndex, activeColumnIndex));
  result.push(...moveForwardRightDiagonal(fields, activeField, activeRowIndex, activeColumnIndex));
  result.push(...moveBackwardsdRightDiagonal(fields, activeField, activeRowIndex, activeColumnIndex));
  result.push(...moveForwardLeftDiagonal(fields, activeField, activeRowIndex, activeColumnIndex));
  result.push(...moveBackwardsLeftDiagonal(fields, activeField, activeRowIndex, activeColumnIndex));

  return result;
}

export default moveQueen;