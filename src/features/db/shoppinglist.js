import base62 from "base62";

import history from "../../history";
import { database } from "./firebase";
import { updateUser } from "./user";

const shoppinglistMaker = (shoppinglistName, user, listUid) => ({
  uid: listUid,
  creator: user.uid,
  name: shoppinglistName,
  items: {},
  history: {},
  users: [],
  newItemId: 0
});

const getShoppinglistRef = uid => database.collection("shoppinglists").doc(uid);

const randomChars = () => base62.encode(Math.floor(Math.random() * 14776336));

const newShoppinglist = async (
  shoppinglistName,
  user,
  dispatch,
  toggleDrawer
) => {
  const createdShoppinglists = [];
  await database
    .collection("shoppinglists")
    .where("creator", "==", user.uid)
    .get()
    .then(query => {
      query.forEach(doc => {
        createdShoppinglists.push(doc.data().uid);
      });
    })
    .catch(error => {
      console.err(error);
    });
  let newId;
  do {
    newId = `${randomChars()}-${user.uid}`;
  } while (createdShoppinglists.includes(newId));
  const shoppinglist = shoppinglistMaker(shoppinglistName, user, newId);
  shoppinglist.users.push(user.uid);
  const newUser = user;
  newUser.lists.push({ name: shoppinglist.name, uid: shoppinglist.uid });
  await updateUser(newUser);
  await getShoppinglistRef(newId).set(shoppinglist);
  history.push(`/app/${newId}`);
  toggleDrawer();
};

export const makeList = (user, dispatch, toggleDrawer) => {
  console.log(toggleDrawer);
  const listName = window.prompt("Enter a name for the list:");
  if (listName != null && listName !== "")
    newShoppinglist(listName, user, dispatch, toggleDrawer);
};

export const getShoppinglist = async uid =>
  getShoppinglistRef(uid)
    .get()
    .then(doc => (doc.exists ? doc.data() : null));

export const listenToShoppinglist = (uid, callback) =>
  getShoppinglistRef(uid).onSnapshot(doc => {
    callback(doc.data());
  });

export const addShoppinglistItem = async (
  itemData,
  listUid,
  { shoppinglists }
) => {
  const shoppinglist = shoppinglists[listUid];
  const { newItemId } = shoppinglist;
  shoppinglist.items[newItemId] = itemData;
  shoppinglist.newItemId = newItemId + 1;
  await getShoppinglistRef(listUid).set(shoppinglist);
};
