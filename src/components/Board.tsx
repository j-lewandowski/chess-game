import { useState } from "react";
import initialFENBoardState from "../data/initialBoardState";
import { convertFromFENtoPiecesObjects } from "../utils/service";

import Field from "./Field";
import { Piece as PieceType } from "../Types";
import Piece from "./Piece";

const Board = () => {
  const [boardState, setBoardState] = useState<(PieceType | null)[][]>(
    convertFromFENtoPiecesObjects(initialFENBoardState)
  );

  const renderFields = () => {
    const fields = [];

    for (let i = 1; i <= boardState.length; i++) {
      for (let j = 1; j <= boardState.length; j++) {
        let pieceElement = null;
        if (boardState[i - 1][j - 1] !== null) {
          pieceElement = <Piece data={boardState[i - 1][j - 1] as PieceType} />;
        }

        fields.push(
          <Field key={`${i}-${j}`} x={j} y={i} piece={pieceElement} />
        );
      }
    }

    return fields;
  };

  return <div className="grid grid-cols-8 grid-rows-8">{renderFields()}</div>;
};

export default Board;
