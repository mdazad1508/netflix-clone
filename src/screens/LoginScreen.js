import React from "react";
import "./LoginScreen.css";
import { useState } from "react";
import { SignUp } from "./SignUp";

export const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="LoginScreen">
      <div className="LoginScreen__background">
        <img
          className="LoginScreen__logo"
          src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
          alt=""
        />
        <button className="LoginScreen__button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="LoginScreen__overlay"></div>
      </div>
      <div className="LoginScreenBody">
        {signIn ? (
          <SignUp />
        ) : (
          <>
            <h1>Unlimted Movies ,TV programmes and lot more..</h1>
            <h2>Watch anywhere, cancel at anytime</h2>
            <h3>
              Ready to watch?Enter your Email to create or restart your
              membership.
            </h3>
            <div className="LoginScreen__input">
              <form>
                <input type="email" placeholder="Enter your Email Address" />
                <button
                  className="LoginScreen__getStarted"
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
