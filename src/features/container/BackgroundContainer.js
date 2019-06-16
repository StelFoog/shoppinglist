import React from "react";
import PropTypes from "prop-types";
// Style
import "./container.css";

const BackgroundContainer = ({ children, color, className = "" }) => (
  <div className="container-outer" style={{ backgroundColor: color }}>
    <div className={`container-inner ${className}`}>{children}</div>
  </div>
);

BackgroundContainer.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default BackgroundContainer;
