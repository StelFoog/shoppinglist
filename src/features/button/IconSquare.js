import React from "react";
import PropTypes from "prop-types";
// Style
import "./button.css";

const IconSquare = ({ children, className = "", onClick }) => (
  <button
    className={`button-container button-icon-square ${className}`}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

IconSquare.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default IconSquare;
