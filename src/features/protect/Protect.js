import React, { useEffect } from "react";
// Components
import Button from "../button";
// Functions
import { useStateValue } from "../../store";
import history from "../../history";
import { authWithGoogle } from "../db";
// Style
import "./protect.css";

const Protect = ({ location }) => {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    if (user) history.push(location.search.slice(1));
  }, [user, location.search]);

  return (
    <div className="protect-outside">
      <div className="protect-inside">
        <div className="protect-text">
          You must be logged in to access this page.
        </div>
        <div className="protect-button">
          <Button
            variant="text"
            color="var(--blue)"
            label="SIGN IN WITH GOOGLE"
            onClick={() => {
              authWithGoogle(dispatch);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Protect;
