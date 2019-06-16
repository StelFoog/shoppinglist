import React from "react";
import PropTypes from "prop-types";
// Style
import "./container.css";

const ImageContainer = ({
  children,
  image,
  minHeight = null,
  className = ""
}) => (
  <div className="container-outer" style={{ backgroundImage: `url(${image})` }}>
    <div className={`container-inner  ${className}`} style={{ minHeight }}>
      {children}
    </div>
  </div>
);

ImageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  minHeight: PropTypes.string,
  className: PropTypes.string
};

export default ImageContainer;
