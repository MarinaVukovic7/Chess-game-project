'use strict';

import { moveRook } from "../components/moves/Rook.js";
import { moveBishop } from "../components/moves/Bishop.js";
import moveKnight from "../components/moves/Knight.js";
import moveQueen from "../components/moves/Queen.js";
import moveKing from "../components/moves/King.js";
import movePawn from "../components/moves/Pawn.js";

export class Figure {
  constructor(name, imgId, colorType) {
    this.name = name;
    this.imgId = imgId;
    this.colorType = colorType;
  }

  getPossibleFieldsToMove(fields, activeField, activeRowIndex, activeColumnIndex) {
    switch (this.name) {
      case 'r':
        return moveRook(fields, activeField, activeRowIndex, activeColumnIndex);
      case 'n':
        return moveKnight(fields, activeField, activeRowIndex, activeColumnIndex);
      case 'b':
        return moveBishop(fields, activeField, activeRowIndex, activeColumnIndex);
      case 'q':
        return moveQueen(fields, activeField, activeRowIndex, activeColumnIndex);
      case 'k':
        return moveKing(fields, activeField, activeRowIndex, activeColumnIndex);
      case 'p':
      return movePawn(fields, activeField, activeRowIndex, activeColumnIndex);
    }
  }
}

export class BlackRook extends Figure {
    constructor() {
        super('r', 'blackRookImg', 'black') 
    }
}

export class BlackKnight extends Figure {
  constructor() {
      super('n', 'blackKnightImg', 'black')
  }
}

export class BlackBishop extends Figure {
  constructor() {
      super('b', 'blackBishopImg', 'black') 
  }
}

export class BlackQueen extends Figure {
  constructor() {
      super('q', 'blackQueenImg', 'black') 
  }
}

export class BlackKing extends Figure {
  constructor() {
      super('k', 'blackKingImg', 'black') 
  }
}

export class BlackPawn extends Figure {
  constructor() {
      super('p', 'blackPawnImg', 'black') 
  }
}

export class WhiteRook extends Figure {
  constructor() {
      super('r', 'whiteRookImg', 'white') 
  }
}

export class WhiteKnight extends Figure {
  constructor() {
      super('n', 'whiteKnightImg', 'white') 
  }
}

export class WhiteBishop extends Figure {
  constructor() {
      super('b', 'whiteBishopImg', 'white') 
  }
}

export class WhiteQueen extends Figure {
  constructor() {
      super('q', 'whiteQueenImg', 'white') 
  }
}

export class WhiteKing extends Figure {
  constructor() {
      super('k', 'whiteKingImg', 'white') 
  }
}

export class WhitePawn extends Figure {
  constructor() {
      super('p', 'whitePawnImg', 'white') 
  }
}