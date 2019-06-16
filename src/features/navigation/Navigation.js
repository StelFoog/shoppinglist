import React, { useState } from "react";
// Components
import NavBar from "./NavBar";
import NavDrawer from "./NavDrawer";

const Navigation = ({ currentPage = "garb", location }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const openDrawer = () => {
    setShowDrawer(true);
  };
  const closeDrawer = () => {
    setShowDrawer(false);
  };
  return (
    <React.Fragment>
      <NavDrawer
        currentPage={currentPage}
        showDrawer={showDrawer}
        toggleDrawer={closeDrawer}
      />
      <NavBar navText="Larssons Inköpslista" toggleDrawer={openDrawer} />
    </React.Fragment>
  );
};

export default Navigation;
