import React, { useState, useEffect } from "react";
// Components
import NavBar from "./NavBar";
import NavDrawer from "./NavDrawer";
// Functions
import { listenToUser } from "../db";
import { useStateValue } from "../../store";

const Navigation = ({ location }) => {
  const [{ user }, dispatch] = useStateValue();

  const [showDrawer, setShowDrawer] = useState(false);
  const openDrawer = () => {
    setShowDrawer(true);
  };
  const closeDrawer = () => {
    setShowDrawer(false);
  };

  const currentPage = () => {
    const { pathname } = location;
    const slashes = pathname.slice(1).split("/");
    switch (slashes.length) {
      case 1:
        return { path: pathname, title: "App" };

      case 2:
        if (user.lists.some(list => list.uid === slashes[1])) {
          return {
            path: pathname,
            title: user.lists.find(list => list.uid === slashes[1]).name
          };
        }
        break;

      default:
        break;
    }
    return { path: pathname, title: "Error" };
  };

  useEffect(() => {
    const unlisten = listenToUser(user.uid, data => {
      dispatch({ type: "UPDATE_USER", user: data });
    });
    return () => {
      unlisten();
    };
  }, [user.uid, dispatch]);

  return (
    <React.Fragment>
      <NavDrawer
        currentPage={currentPage()}
        showDrawer={showDrawer}
        toggleDrawer={closeDrawer}
      />
      <NavBar navText={currentPage().title} toggleDrawer={openDrawer} />
    </React.Fragment>
  );
};

export default Navigation;
