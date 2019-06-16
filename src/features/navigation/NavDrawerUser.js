import React from "react";
// Components
import Image from "../image";
// Functions
import { useStateValue } from "../../store";
// Style
import "./navigation.css";

const NavDrawerUser = () => {
  const [{ user }] = useStateValue();
  return (
    <React.Fragment>
      <button type="button" className="nav-drawer-user">
        <Image variant="round" url={user.picture} size={32} />
        <span className="nav-drawer-username">{user.name}</span>
      </button>
    </React.Fragment>
  );
};

export default NavDrawerUser;
