import React, { createContext, useContext, useReducer, useEffect } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children, reducer, initialState }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

export const storage = window.localStorage;

export const StateRestore = ({ children }) => {
  const [{ restored }, dispatch] = useStateValue();
  useEffect(() => {
    const restoredState = JSON.parse(storage.getItem("state"));
    if (restoredState)
      dispatch({
        type: "RESTORE_STATE",
        restoredState
      });
    dispatch({ type: "STATE_RESTORED" });
  }, [dispatch]);

  return <React.Fragment>{restored && children}</React.Fragment>;
};
