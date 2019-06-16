import React from "react";
import { Router, Route } from "react-router-dom";
import history from "./history";
import { initialState, reducer } from "./reducer";
// Components
import { StateProvider, StateRestore, useStateValue } from "./store";
import HomePage from "./features/homePage";
import Navigation from "./features/navigation";
import Protect from "./features/protect";

const Root = () => (
  <StateProvider initialState={initialState} reducer={reducer}>
    <StateRestore>
      <ProtectRoutes allowedRoutes={["/"]}>
        <Router history={history}>
          <Route exact path="/" render={props => <HomePage {...props} />} />
          <Route path="/app" render={props => <Navigation {...props} />} />
          <Route path="/protect" render={props => <Protect {...props} />} />
        </Router>
      </ProtectRoutes>
    </StateRestore>
  </StateProvider>
);

const ProtectRoutes = ({ children, allowedRoutes }) => {
  const [{ user }] = useStateValue();
  if (!user) {
    const { pathname } = history.location;
    const allowed = [...allowedRoutes, "/protect"].includes(pathname);
    console.log("historty", history);
    console.log("allowed", allowed);
    if (!allowed) {
      history.push(`/protect?${pathname}`);
    }
  }
  return children;
};

export default Root;
