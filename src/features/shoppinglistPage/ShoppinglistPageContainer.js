import React, { useState, useEffect } from "react";
// Components
import ShoppinglistPage from "./ShoppinglistPage";
// Functions
import { useStateValue } from "../../store";
import { listenToShoppinglist } from "../db";
// Style
import "./shoppinglistPage.css";

const ShoppinglistPageContainer = ({ match }) => {
  const [{ user, shoppinglists }, dispatch] = useStateValue();
  const { shoppinglistUid } = match.params;

  const [pageStatus, setPageStatus] = useState(
    user.lists.some(list => list.uid === shoppinglistUid) ? "RELOAD" : "LOADING"
  );
  const shoppinglist = shoppinglists[shoppinglistUid];

  useEffect(() => {
    if (user.lists.some(list => list.uid === shoppinglistUid)) {
      const unlisten = listenToShoppinglist(shoppinglistUid, data => {
        setPageStatus("FETCHED");
        dispatch({ type: "ADD/UPDATE_SHOPPINGLIST", shoppinglist: data });
      });
      return () => {
        unlisten();
      };
    }
    setPageStatus("NO_ACCESS");
    return () => {};
  }, [shoppinglistUid, user.lists, dispatch]);

  return (
    <div className="shoppinglist-page">
      {(pageStatus === "LOADING" || pageStatus === "RELOAD") && (
        <div>LOADING</div>
      )}
      {pageStatus === "NO_ACCESS" && (
        <div>You dont have access to this page.</div>
      )}
      {pageStatus === "ERROR" && <div>Error accessing page.</div>}
      {(pageStatus === "FETCHED" || pageStatus === "RELOAD") && (
        <ShoppinglistPage shoppinglist={shoppinglist} />
      )}
    </div>
  );
};

export default ShoppinglistPageContainer;
