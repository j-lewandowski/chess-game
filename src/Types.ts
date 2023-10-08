export enum COLORS {
  BLACK = "BLACK",
  WHITE = "WHITE",
}

export enum TYPES {
  ROOK = "ROOK",
  KNIGHT = "KNIGHT",
  BISHOP = "BISHOP",
  QUEEN = "QUEEN",
  KING = "KING",
  PAWN = "PAWN",
}

export type Piece = {
  color: COLORS;
  type: TYPES;
  image: string;
};
