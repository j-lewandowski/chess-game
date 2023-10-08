import { twMerge } from "tailwind-merge";
import { ReactElement } from "react";

interface FieldPropTypes {
  x: number;
  y: number;
  piece: ReactElement | null;
}

const Field: React.FC<FieldPropTypes> = ({ x, y, piece }) => {
  const calculateFieldColor = () => {
    if (x % 2 == 0 && y % 2 == 0) {
      return 0;
    } else if (x % 2 == 0 && y % 2 == 1) {
      return 1;
    } else if (x % 2 == 1 && y % 2 == 0) {
      return 1;
    } else if (x % 2 == 1 && y % 2 == 1) {
      return 0;
    }
  };

  return (
    <div
      className={twMerge(
        "h-16 w-16 flex items-center justify-center",
        calculateFieldColor() ? "bg-darkbox" : "bg-lightbox"
      )}
    >
      {piece}
    </div>
  );
};

export default Field;
