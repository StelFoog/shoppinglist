import React from "react";
// Style
import "./navigation.css";

const NavDrawerBottom = () => (
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
        onClick={() => {}}
      >
        New List
      </button>
    </div>
  </React.Fragment>
);

export default NavDrawerBottom;
