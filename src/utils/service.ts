import { Piece } from "../Types";
import {
  BBISHOP,
  BKING,
  BKNIGHT,
  BPAWN,
  BQUEEN,
  BROOK,
  WPAWN,
  WBISHOP,
  WKING,
  WKNIGHT,
  WQUEEN,
  WROOK,
} from "./constants";

const convertFromFENtoPiecesObjects = (FEN: string) => {
  const boardState = [];

  const isLowerCase = (letter: string) => {
    return letter.toLowerCase() === letter;
  };

  let row: (Piece | null)[] = [];
  for (const letter of FEN) {
    if (letter === "/") {
      boardState.push(row);
      row = [];
      continue;
    }

    if (!isNaN(parseInt(letter))) {
      for (let i = 0; i < parseInt(letter); i++) {
        row.push(null);
      }
      continue;
    }

    if (isLowerCase(letter)) {
      switch (letter) {
        case "p":
          row.push(BPAWN);
          break;
        case "n":
          row.push(BKNIGHT);
          break;
        case "b":
          row.push(BBISHOP);
          break;
        case "r":
          row.push(BROOK);
          break;
        case "q":
          row.push(BQUEEN);
          break;
        case "k":
          row.push(BKING);
          break;
      }
    } else {
      switch (letter) {
        case "P":
          row.push(WPAWN);
          break;
        case "N":
          row.push(WKNIGHT);
          break;
        case "B":
          row.push(WBISHOP);
          break;
        case "R":
          row.push(WROOK);
          break;
        case "Q":
          row.push(WQUEEN);
          break;
        case "K":
          row.push(WKING);
          break;
      }
    }
  }
  boardState.push(row);
  return boardState;
};

export { convertFromFENtoPiecesObjects };
