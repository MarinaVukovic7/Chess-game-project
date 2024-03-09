'use strict';

const moveKing = (fields, activeField, activeRowIndex, activeColumnIndex) => {
  const result = [];
  const possibleKingMoves = [
    { row: -1, col: -1 }, { row: -1, col: 0 }, { row: -1, col: 1 },
    { row: 0, col: -1 }, /* Current position */ { row: 0, col: 1 },
    { row: 1, col: -1 }, { row: 1, col: 0 }, { row: 1, col: 1 }
  ];

  for (const move of possibleKingMoves) {
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

export default moveKing;
  