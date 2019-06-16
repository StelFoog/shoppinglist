import React from "react";
import PropTypes from "prop-types";
// Components
import NavDrawerUser from "./NavDrawerUser";

const NavDrawer = ({ currentPage, showDrawer, toggleDrawer }) => (
  <div
    className={`nav-drawer-container${
      !showDrawer ? " nav-drawer-container-hidden" : ""
    }`}
  >
    <div
      className={`nav-drawer-menu${!showDrawer ? " nav-drawer-hidden" : ""}`}
    >
      <NavDrawerUser />
    </div>
    <button
      type="button"
      className={`nav-drawer-outside${
        !showDrawer ? " nav-drawer-outside-hidden" : ""
      }`}
      onClick={toggleDrawer}
    />
  </div>
);

NavDrawer.propTypes = {
  currentPage: PropTypes.string.isRequired
};

export default NavDrawer;
