import React from "react";
import PropTypes from "prop-types";
// Style
import "./container.css";

const MarginContainer = ({ children, className = "" }) => (
  <div className={`container-margin ${className}`}>{children}</div>
);

MarginContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default MarginContainer;
