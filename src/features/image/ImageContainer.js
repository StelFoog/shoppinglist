import React from "react";
// Components
import RoundImage from "./RoundImage";

const IMAGE_TYPES = {
  round: RoundImage
};

const ImageContainer = ({ variant, ...rest }) => {
  const ImageType = IMAGE_TYPES[variant] ? IMAGE_TYPES[variant] : "div";
  return <ImageType {...rest} />;
};

export default ImageContainer;
