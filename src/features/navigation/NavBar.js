import React from "react";
import PropTypes from "prop-types";
// Components
import Button from "../button";
// Icons
import { Menu, Info } from "../icons";
// Style
import "./navigation.css";

import { useStateValue } from "../../store";

const NavBar = ({ navText, toggleDrawer }) => {
  const [state] = useStateValue();
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-content">
        <Button variant="iconSquare" onClick={toggleDrawer}>
          <Menu size={40} color="white" />
        </Button>
        <span>{navText}</span>
        <Button
          variant="iconSquare"
          onClick={() => {
            console.log(state);
          }}
        >
          <Info size={36} color="white" />
        </Button>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  navText: PropTypes.string
};

export default NavBar;
