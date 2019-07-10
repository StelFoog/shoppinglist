import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import { initialState, reducer } from "./reducer";
// Components
import { StateProvider, StateRestore, useStateValue } from "./store";
import HomePage from "./features/homePage";
import Navigation from "./features/navigation";
import ShoppinglistPage from "./features/shoppinglistPage";
import Protect from "./features/protect";

const Root = () => (
  <StateProvider initialState={initialState} reducer={reducer}>
    <StateRestore>
      <ProtectRoutes allowedRoutes={["/"]}>
        <Router history={history}>
          <Route path="/app" render={props => <Navigation {...props} />} />
          <Switch>
            <Route exact path="/" render={props => <HomePage {...props} />} />
            <Route exact path="/app" render={props => <React.Fragment />} />
            <Route
              exact
              path="/app/:shoppinglistUid"
              render={props => <ShoppinglistPage {...props} />}
            />
            <Route path="/protect" render={props => <Protect {...props} />} />
          </Switch>
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
    if (!allowed) history.push(`/protect?${pathname}`);
  }
  return children;
};

export default Root;
