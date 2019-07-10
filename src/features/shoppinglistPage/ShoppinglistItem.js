import React from "react";
// Components
import { MarginContainer } from "../container";

const ShoppinglistItem = ({ item, itemRef, listRef }) => (
  <MarginContainer className="shoppinglist-item">
    {item.name}
    {itemRef}
    {listRef}
  </MarginContainer>
);

export default ShoppinglistItem;
