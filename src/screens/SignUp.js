import React from "react";
import "./SignUp.css";
import { useRef } from "react";
import { auth } from "../firebase";

export const SignUp = () => {
  const emailRef = useRef();
  const passRef = useRef();

  const register = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const login = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(emailRef.current.value, passRef.current.value)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signup">
      <h1> Sign In </h1>
      <form>
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passRef} />
        <button type="submit" onClick={login}>
          Sign In
        </button>
        <h4>
          <span className="signup_gray">New to Netflix? </span>
          <span className="signup_link" onClick={register}>
            Signup now.
          </span>
        </h4>
      </form>
    </div>
  );
};
