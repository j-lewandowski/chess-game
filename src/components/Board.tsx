import Field from "./Field";

const Board = () => {
  const renderFields = () => {
    const fields = [];

    for (let i = 1; i <= 8; i++) {
      for (let j = 1; j <= 8; j++) {
        fields.push(<Field key={`${i}-${j}`} x={j} y={i} />);
      }
    }

    return fields;
  };

  return <div className="grid grid-cols-8 grid-rows-8">{renderFields()}</div>;
};

export default Board;
