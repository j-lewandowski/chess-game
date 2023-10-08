import pieceImage from "../assets/black/Chess_pdt45.svg";

const Piece = () => {
  return (
    <div>
      <img src={pieceImage} alt="piece" className="w-14 h-auto" />
    </div>
  );
};

export default Piece;
