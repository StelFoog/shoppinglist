import { storage } from "./store";

export const initialState = {
  restored: false,
  user: null,
  shoppinglists: {}
};

export const reducer = (state, action) => {
  let nextState = { ...state };
  const { type, user, restoredState, shoppinglist } = action;
  switch (type) {
    case "RESTORE_STATE":
      nextState = restoredState;
      break;

    case "STATE_RESTORED":
      nextState.restored = true;
      break;

    case "SIGN_IN_USER":
      nextState = { ...nextState, user };
      break;

    case "UPDATE_USER":
      nextState = { ...nextState, user };
      break;

    case "ADD/UPDATE_SHOPPINGLIST":
      nextState.shoppinglists[shoppinglist.uid] = shoppinglist;
      break;

    default:
      break;
  }
  console.log("Action Type", type);
  console.log("Next State", nextState);
  storage.setItem("state", JSON.stringify(nextState));
  return nextState;
};
