import React from "react";
// Components
import NavDrawerListItem from "./NavDrawerListItem";
// Functions
import { useStateValue } from "../../store";

const NavDrawerList = ({ toggleDrawer }) => {
  const [{ user }] = useStateValue();
  return (
    <div className="nav-drawer-list">
      {user.lists.map(obj => (
        <NavDrawerListItem
          key={obj.uid}
          path={obj.uid}
          name={obj.name}
          toggleDrawer={toggleDrawer}
        />
      ))}
    </div>
  );
};

export default NavDrawerList;
