import React from "react";
import { Link } from "react-router-dom";

import "./navigation.css";

const NavDrawerListItem = ({ path, name, toggleDrawer }) => (
  <Link
    to={{ pathname: `/app/${path}` }}
    onClick={toggleDrawer}
    className="nav-drawer-list-item"
  >
    {name}
  </Link>
);

export default NavDrawerListItem;
