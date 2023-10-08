import { Piece as PieceType } from "../Types";

interface PiecePropTypes {
  data: PieceType;
}

const Piece: React.FC<PiecePropTypes> = ({ data }) => {
  return (
    <div>
      <img src={data.image} alt="piece" className="w-14 h-auto" />
    </div>
  );
};

export default Piece;
