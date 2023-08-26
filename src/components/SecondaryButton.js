import { useMemo } from "react";
import "./SecondaryButton.css";
const SecondaryButton = ({
  secondaryButtonPosition,
  secondaryButtonTop,
  secondaryButtonLeft,
}) => {
  const secondaryButtonStyle = useMemo(() => {
    return {
      position: secondaryButtonPosition,
      top: secondaryButtonTop,
      left: secondaryButtonLeft,
    };
  }, [secondaryButtonPosition, secondaryButtonTop, secondaryButtonLeft]);

  return (
    <div className="secondary-button" style={secondaryButtonStyle}>
      <div className="secondary-button-child" />
      <img className="vector-icon1" alt="" src="/vector1.svg" />
    </div>
  );
};

export default SecondaryButton;
