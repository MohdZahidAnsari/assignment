import { useMemo } from "react";
import "./TextField.css";
const TextField = ({ textFieldPosition, textFieldTop, textFieldLeft }) => {
  const textFieldStyle = useMemo(() => {
    return {
      position: textFieldPosition,
      top: textFieldTop,
      left: textFieldLeft,
    };
  }, [textFieldPosition, textFieldTop, textFieldLeft]);

  return (
    <div className="text-field" style={textFieldStyle}>
      <div className="florida-jacket-parent">
        <div className="florida-jacket">FLORIDA JACKET</div>
        <div className="suffered-alteration-in">
          Suffered alteration in some form, bysuffalterattion in some forme,
          byinjected humor, or randomised
        </div>
        <div className="florida-jacket">$100</div>
      </div>
    </div>
  );
};

export default TextField;
