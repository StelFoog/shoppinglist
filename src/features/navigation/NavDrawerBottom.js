import React from "react";
import PropTypes from "prop-types";
// Functions
import { makeList } from "../db";
import { useStateValue } from "../../store";
// Style
import "./navigation.css";

const NavDrawerBottom = ({ toggleDrawer }) => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <React.Fragment>
      <div className="horizontal-divider" />
      <div className="nav-drawer-bottom">
        <button
          type="button"
          className="nav-drawer-bottom-content"
          onClick={() => {}}
        >
          Search
        </button>
        <div className="vertical-divider" />
        <button
          type="button"
          className="nav-drawer-bottom-content"
          onClick={() => makeList(user, dispatch, toggleDrawer)}
        >
          New List
        </button>
      </div>
    </React.Fragment>
  );
};

NavDrawerBottom.propTypes = {
  toggleDrawer: PropTypes.func.isRequired
};

export default NavDrawerBottom;
