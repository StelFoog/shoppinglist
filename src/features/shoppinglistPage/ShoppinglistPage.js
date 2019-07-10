import React from "react";
// Components
import ShoppinglistItem from "./ShoppinglistItem";

const ShoppinglistPage = ({ shoppinglist }) => (
  <React.Fragment>
    <div className="shoppinglist-item-list">
      <p>Success</p>
      {Object.keys(shoppinglist.items).map(key => (
        <ShoppinglistItem
          item={shoppinglist.items[key]}
          key={key}
          itemRef={key}
          listRef={shoppinglist.uid}
        />
      ))}
    </div>
    <button type="button" onClick="">
      New
    </button>
  </React.Fragment>
);

export default ShoppinglistPage;
