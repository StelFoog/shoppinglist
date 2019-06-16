import React from "react";
import PropTypes from "prop-types";

const Menu = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path fill={color} d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

Menu.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};

export default Menu;
