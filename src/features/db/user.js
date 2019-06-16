import { database } from "./firebase";

const blankUser = {
  uid: "",
  name: "",
  email: "",
  authType: "",
  picture: "",
  lists: {},
  invitations: {}
};

const getUserRef = uid => database.collection("users").doc(uid);

export const getUser = async uid =>
  getUserRef(uid)
    .get()
    .then(doc => doc.data());

export const createUser = async userData => {
  const user = { ...blankUser, ...userData };
  await getUserRef(user.uid).set(user);
  return user;
};
