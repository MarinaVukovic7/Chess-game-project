'use strict';

const moveKnight = (fields, activeField, activeRowIndex, activeColumnIndex) => {
  const result = [];
  const possibleKnightMoves = [
    { row: -2, col: -1 }, { row: -2, col: 1 },
    { row: -1, col: -2 }, { row: -1, col: 2 },
    { row: 1, col: -2 }, { row: 1, col: 2 },
    { row: 2, col: -1 }, { row: 2, col: 1 }
  ];

  for (const move of possibleKnightMoves) {
    const nextRow = activeRowIndex + move.row;
    const nextColumn = activeColumnIndex + move.col;

    if (nextRow >= 0 && nextRow < 8 && nextColumn >= 0 && nextColumn < 8) {
      const nextField = fields[nextRow][nextColumn];

      if (!nextField.figure || nextField.figure.colorType !== activeField.figure.colorType) {
        result.push(nextField);
      }
    }
  }

  return result;
}

export default moveKnight;