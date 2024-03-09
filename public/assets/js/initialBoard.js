'use strict';

import Field from './models/Field.js';
import {
  Figure,
  BlackRook, BlackKnight, BlackBishop, BlackQueen, BlackKing, BlackPawn,
  WhiteRook, WhiteKnight, WhiteBishop, WhiteQueen, WhiteKing, WhitePawn
} from './models/Figure.js';

export const initialBoard = (size) => [
  [new Field(new BlackRook(), 0, 0, size, size, { row: 'a', column: '8' }),
  new Field(new BlackKnight(), size, 0, size, size, { row: 'b', column: '8' }),
  new Field(new BlackBishop(), 2 * size, 0, size, size, { row: 'c', column: '8' }),
  new Field(new BlackQueen(), 3 * size, 0, size, size, { row: 'd', column: '8' }),
  new Field(new BlackKing(), 4 * size, 0, size, size, { row: 'e', column: '8' }),
  new Field(new BlackBishop(), 5 * size, 0, size, size, { row: 'f', column: '8' }),
  new Field(new BlackKnight(), 6 * size, 0, size, size, { row: 'g', column: '8' }),
  new Field(new BlackRook(), 7 * size, 0, size, size, { row: 'h', column: '8' }),],


  [new Field(new BlackPawn(), 0, size, size, size, { row: 'a', column: '7' }),
  new Field(new BlackPawn(), size, size, size, size, { row: 'b', column: '7' }),
  new Field(new BlackPawn(), 2 * size, size, size, size, { row: 'c', column: '7' }),
  new Field(new BlackPawn(), 3 * size, size, size, size, { row: 'd', column: '7' }),
  new Field(new BlackPawn(), 4 * size, size, size, size, { row: 'e', column: '7' }),
  new Field(new BlackPawn(), 5 * size, size, size, size, { row: 'f', column: '7' }),
  new Field(new BlackPawn(), 6 * size, size, size, size, { row: 'g', column: '7' }),
  new Field(new BlackPawn(), 7 * size, size, size, size, { row: 'h', column: '7' }),],


  [new Field(undefined, 0, 2 * size, size, size, { row: 'a', column: '6' }),
  new Field(undefined, size, 2 * size, size, size, { row: 'b', column: '6' }),
  new Field(undefined, 2 * size, 2 * size, size, size, { row: 'c', column: '6' }),
  new Field(undefined, 3 * size, 2 * size, size, size, { row: 'd', column: '6' }),
  new Field(undefined, 4 * size, 2 * size, size, size, { row: 'e', column: '6' }),
  new Field(undefined, 5 * size, 2 * size, size, size, { row: 'f', column: '6' }),
  new Field(undefined, 6 * size, 2 * size, size, size, { row: 'g', column: '6' }),
  new Field(undefined, 7 * size, 2 * size, size, size, { row: 'h', column: '6' }),],

  [new Field(undefined, 0, 3 * size, size, size, { row: 'a', column: '5' }),
  new Field(undefined, size, 3 * size, size, size, { row: 'b', column: '5' }),
  new Field(undefined, 2 * size, 3 * size, size, size, { row: 'c', column: '5' }),
  new Field(undefined, 3 * size, 3 * size, size, size, { row: 'd', column: '5' }),
  new Field(undefined, 4 * size, 3 * size, size, size, { row: 'e', column: '5' }),
  new Field(undefined, 5 * size, 3 * size, size, size, { row: 'f', column: '5' }),
  new Field(undefined, 6 * size, 3 * size, size, size, { row: 'g', column: '5' }),
  new Field(undefined, 7 * size, 3 * size, size, size, { row: 'h', column: '5' }),],

  [new Field(undefined, 0, 4 * size, size, size, { row: 'a', column: '4' }),
  new Field(undefined, size, 4 * size, size, size, { row: 'b', column: '4' }),
  new Field(undefined, 2 * size, 4 * size, size, size, { row: 'c', column: '4' }),
  new Field(undefined, 3 * size, 4 * size, size, size, { row: 'd', column: '4' }),
  new Field(undefined, 4 * size, 4 * size, size, size, { row: 'e', column: '4' }),
  new Field(undefined, 5 * size, 4 * size, size, size, { row: 'f', column: '4' }),
  new Field(undefined, 6 * size, 4 * size, size, size, { row: 'g', column: '4' }),
  new Field(undefined, 7 * size, 4 * size, size, size, { row: 'h', column: '4' }),],

  [new Field(undefined, 0, 5 * size, size, size, { row: 'a', column: '3' }),
  new Field(undefined, size, 5 * size, size, size, { row: 'b', column: '3' }),
  new Field(undefined, 2 * size, 5 * size, size, size, { row: 'c', column: '3' }),
  new Field(undefined, 3 * size, 5 * size, size, size, { row: 'd', column: '3' }),
  new Field(undefined, 4 * size, 5 * size, size, size, { row: 'e', column: '3' }),
  new Field(undefined, 5 * size, 5 * size, size, size, { row: 'f', column: '3' }),
  new Field(undefined, 6 * size, 5 * size, size, size, { row: 'g', column: '3' }),
  new Field(undefined, 7 * size, 5 * size, size, size, { row: 'h', column: '3' }),],

  [new Field(new WhitePawn(), 0, 6 * size, size, size, { row: 'a', column: '2' }),
  new Field(new WhitePawn(), size, 6 * size, size, size, { row: 'b', column: '2' }),
  new Field(new WhitePawn(), 2 * size, 6 * size, size, size, { row: 'c', column: '2' }),
  new Field(new WhitePawn(), 3 * size, 6 * size, size, size, { row: 'd', column: '2' }),
  new Field(new WhitePawn(), 4 * size, 6 * size, size, size, { row: 'e', column: '2' }),
  new Field(new WhitePawn(), 5 * size, 6 * size, size, size, { row: 'f', column: '2' }),
  new Field(new WhitePawn(), 6 * size, 6 * size, size, size, { row: 'g', column: '2' }),
  new Field(new WhitePawn(), 7 * size, 6 * size, size, size, { row: 'h', column: '2' }),],

  [new Field(new WhiteRook(), 0, 7 * size, size, size, { row: 'a', column: '1' }),
  new Field(new WhiteKnight(), size, 7 * size, size, size, { row: 'b', column: '1' }),
  new Field(new WhiteBishop(), 2 * size, 7 * size, size, size, { row: 'c', column: '1' }),
  new Field(new WhiteQueen(), 3 * size, 7 * size, size, size, { row: 'd', column: '1' }),
  new Field(new WhiteKing(), 4 * size, 7 * size, size, size, { row: 'e', column: '1' }),
  new Field(new WhiteBishop(), 5 * size, 7 * size, size, size, { row: 'f', column: '1' }),
  new Field(new WhiteKnight(), 6 * size, 7 * size, size, size, { row: 'g', column: '1' }),
  new Field(new WhiteRook(), 7 * size, 7 * size, size, size, { row: 'h', column: '1' }),]
];

export const createBoardFromData = (data) => {
  const result = [];

  data.forEach((row) => {
    const columnsOfRow = [];

    row.forEach((column) => {
      const figure = column.figure
        ? new Figure(column.figure.name, column.figure.imgId, column.figure.colorType)
        : undefined;
      const field = new Field(figure, column.posX, column.posY, column.width, column.height, column.id);
      columnsOfRow.push(field);
    })

    result.push(columnsOfRow);
  })

  return result;
}

export const getFieldColumnIndex = (columnId) => {
  switch (columnId) {
    case '8':
      return 0;
    case '7':
      return 1;
    case '6':
      return 2;
    case '5':
      return 3;
    case '4':
      return 4;
    case '3':
      return 5;
    case '2':
      return 6;
    case '1':
      return 7;
  }
}

export const getFieldRowIndex = (rowId) => {
  switch (rowId) {
    case 'a':
      return 0;
    case 'b':
      return 1;
    case 'c':
      return 2;
    case 'd':
      return 3;
    case 'e':
      return 4;
    case 'f':
      return 5;
    case 'g':
      return 6;
    case 'h':
      return 7;
  }
}