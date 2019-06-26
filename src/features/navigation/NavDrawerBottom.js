import React from "react";
// Style
import "./navigation.css";

const NavDrawerBottom = () => (
  <React.Fragment>
    <div className="horizontal-divider" />
    <div className="nav-drawer-bottom">
      <div className="nav-drawer-bottom-content">Search</div>
      <div className="vertical-divider" />
      <div className="nav-drawer-bottom-content">New List</div>
    </div>
  </React.Fragment>
);

export default NavDrawerBottom;
