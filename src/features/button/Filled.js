import React from "react";
import PropTypes from "prop-types";
// Style
import "./button.css";

const Filled = ({
  label,
  color,
  labelColor = "var(--black)",
  onClick,
  className = ""
}) => (
  <button
    className={`button-container button-filled ${className}`}
    type="button"
    onClick={onClick}
    style={{ backgroundColor: color, color: labelColor }}
  >
    {label}
  </button>
);

Filled.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  labelColor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default Filled;
