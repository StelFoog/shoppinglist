import { storage } from "./store";

export const initialState = {
  user: null,
  restored: false
};

export const reducer = (state, action) => {
  let nextState = { ...state };
  const { type, user, restoredState } = action;
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

    default:
      break;
  }
  console.log("Action Type", type);
  console.log("Next State", nextState);
  storage.setItem("state", JSON.stringify(nextState));
  return nextState;
};
