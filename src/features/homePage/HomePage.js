import React from "react";
// Components
import Button from "../button";
// Functions
import { useStateValue } from "../../store";
import { authWithGoogle } from "../db";
// Style
import "./homePage.css";

const HomePage = () => {
  const [, dispatch] = useStateValue();
  return (
    <div className="home-page">
      <div className="home-opener">
        <Button
          variant="filled"
          label="SIGN IN WITH GOOGLE"
          color="#C60F7B"
          labelColor="var(--white)"
          onClick={() => {
            authWithGoogle(dispatch);
          }}
        />
      </div>
    </div>
  );
};

export default HomePage;
