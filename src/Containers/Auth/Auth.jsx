import React, { Component } from "react";
import Login from "../LogIn/Login";
import SignUp from "../SignUp/SignUp";
import classes from "./Auth.module.css";

class Auth extends Component {
  state = {
    signUp: true,
  };

  switchAuthModeHandler = () => {
    this.setState((prevState) => {
      return { isSignUp: !prevState.isSignUp };
    });
  };

  render() {
    // let showSignUp = null;
    // showSignUp = this.state.signUp ? <SignUp /> : <Login />;
    return (
      <div className={classes.AuthBackground}>
        {/* <img
          src="src/assests/gpc_logo@2x.png"
          alt="src/assests/gpc_logo@2x.png"
        /> */}
        {/* {showSignUp} */}
        <SignUp />
      </div>
    );
  }
}

export default Auth;
