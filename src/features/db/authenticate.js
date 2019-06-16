import { firebase } from "./firebase";
import { getUser, createUser } from "./user";
import history from "../../history";

const authWithProvider = async provider => {
  firebase.auth().useDeviceLanguage();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => result.user)
    .catch(error => {
      throw error;
    });
};

const authWithGoogle = async dispatch => {
  const userData = await authWithProvider(
    new firebase.auth.GoogleAuthProvider()
  );
  const { uid, displayName, email, photoURL } = userData;
  let databaseUser = await getUser(uid);
  if (!databaseUser) {
    const user = {
      uid,
      email,
      picture: photoURL,
      name: displayName,
      authType: "google"
    };
    databaseUser = await createUser(user);
  }
  dispatch({ type: "SIGN_IN_USER", user: databaseUser });
  history.push("/app");
};

export { authWithGoogle };
