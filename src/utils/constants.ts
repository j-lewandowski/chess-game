import { COLORS, Piece, TYPES } from "../Types";

import BPawnImage from "../assets/black/Chess_pdt45.svg";
import BKnightImage from "../assets/black/Chess_ndt45.svg";
import BBishopImage from "../assets/black/Chess_bdt45.svg";
import BKingImage from "../assets/black/Chess_kdt45.svg";
import BQueenImage from "../assets/black/Chess_qdt45.svg";
import BRookImage from "../assets/black/Chess_rdt45.svg";

import WPawnImage from "../assets/white/Chess_plt45.svg";
import WKnightImage from "../assets/white/Chess_nlt45.svg";
import WBishopImage from "../assets/white/Chess_blt45.svg";
import WKingImage from "../assets/white/Chess_klt45.svg";
import WQueenImage from "../assets/white/Chess_qlt45.svg";
import WRookImage from "../assets/white/Chess_rlt45.svg";

// BLACK
export const BPAWN: Piece = {
  color: COLORS.BLACK,
  type: TYPES.PAWN,
  image: BPawnImage,
};

export const BKNIGHT: Piece = {
  color: COLORS.BLACK,
  type: TYPES.KNIGHT,
  image: BKnightImage,
};

export const BBISHOP: Piece = {
  color: COLORS.BLACK,
  type: TYPES.BISHOP,
  image: BBishopImage,
};

export const BROOK: Piece = {
  color: COLORS.BLACK,
  type: TYPES.ROOK,
  image: BRookImage,
};

export const BQUEEN: Piece = {
  color: COLORS.BLACK,
  type: TYPES.QUEEN,
  image: BQueenImage,
};

export const BKING: Piece = {
  color: COLORS.BLACK,
  type: TYPES.KING,
  image: BKingImage,
};
// WHITE

export const WPAWN: Piece = {
  color: COLORS.WHITE,
  type: TYPES.PAWN,
  image: WPawnImage,
};

export const WKNIGHT: Piece = {
  color: COLORS.WHITE,
  type: TYPES.KNIGHT,
  image: WKnightImage,
};

export const WBISHOP: Piece = {
  color: COLORS.WHITE,
  type: TYPES.BISHOP,
  image: WBishopImage,
};

export const WROOK: Piece = {
  color: COLORS.WHITE,
  type: TYPES.ROOK,
  image: WRookImage,
};

export const WQUEEN: Piece = {
  color: COLORS.WHITE,
  type: TYPES.QUEEN,
  image: WQueenImage,
};

export const WKING: Piece = {
  color: COLORS.WHITE,
  type: TYPES.KING,
  image: WKingImage,
};
