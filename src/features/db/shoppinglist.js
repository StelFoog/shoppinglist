import base62 from "base62";

import { database } from "./firebase";

const blankShoppinglist = {
  uid: "",
  creator: "",
  name: "",
  items: {}
};

const randomChars = () => base62.encode(Math.floor(Math.random() * 14776336));

const newShoppinglist = (shoppinglist, user) => {
  const shoppinglists = database
    .collection("shoppinglists")
    .where("creator", "==", user.uid);
  let idIsNew = false;
  let newId;
  do {
    newId = `${randomChars()}-${user.uid}`;
    idIsNew = !shoppinglists
      .doc(newId)
      .get()
      .then(doc => doc.exists);
  } while (idIsNew === false);

  shoppinglists.doc(newId).set({ ...blankShoppinglist, ...shoppinglist });
};

export { newShoppinglist };
