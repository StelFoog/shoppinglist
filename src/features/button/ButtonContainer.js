import React from "react";
// Components
import IconSquare from "./IconSquare";
import Filled from "./Filled";
import Text from "./Text";

const BUTTON_TYPES = {
  filled: Filled,
  iconSquare: IconSquare,
  text: Text
};

const ButtonContainer = ({ variant, ...rest }) => {
  const ButtonType = BUTTON_TYPES[variant] ? BUTTON_TYPES[variant] : "div";
  return <ButtonType {...rest} />;
};

export default ButtonContainer;
