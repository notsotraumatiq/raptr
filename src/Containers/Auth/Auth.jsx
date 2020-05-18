import React, { Component } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./Auth.module.css";

// isSignUp state checks whether user has to sign up or log in the default is set to true and based on the boolean it will load formLogin or formSignUp

class Auth extends Component {
  state = {
    controls: {
      username: {
        value: "",
      },
      email: {
        value: "",
      },
      password: {
        value: "",
      },
    },
    isSignUp: true,
  };

  inputChangedHandler = (event, controlName) => {
    const updatedControls = { ...this.state.controls };
    updatedControls[controlName].value = event.target.value;
    this.setState({ controls: updatedControls });
  };

  switchAuthModeHandler = () => {
    this.setState((prevState) => {
      return { isSignUp: !prevState.isSignUp };
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let formData = new FormData();

    if (this.state.isSignUp) {
      formData.set("email", this.state.controls.email.value);
      formData.set("username", this.state.controls.username.value);
      formData.set("password", this.state.controls.password.value);

      axios
        .post(
          "http://dev.rapptrlabs.com/Tests/scripts/user-signup.php",
          formData
        )
        .then((response) => {
          toast.info(`Hello ${response.data.user_username}`, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((error) => {
          toast.info(error.response.data.message, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    } else {
      formData.set("email", this.state.controls.email.value);
      formData.set("password", this.state.controls.password.value);
      axios
        .post(
          "http://dev.rapptrlabs.com/Tests/scripts/user-login.php",
          formData
        )
        .then((response) => {
          toast.info(`Hello ${response.data.user_username}`, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((error) => {
          toast.info(error.response.data.message, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
  };

  render() {
    let formSignUp = (
      <div className={classes.formClass}>
        <h3 className={classes.active}>Sign Up</h3>
        <h3 className={classes.notActive} onClick={this.switchAuthModeHandler}>
          Log In
        </h3>
        <div className={classes.inputContainer}>
          <img src={require("../../assests/ic_username@2x.png")} alt="" />
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(event) => this.inputChangedHandler(event, "username")}
          />
        </div>
        <div className={classes.inputContainer}>
          <img src={require("../../assests/ic_email@2x.png")} alt="" />
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            onChange={(event) => this.inputChangedHandler(event, "email")}
          />
        </div>
        <div className={classes.inputContainer}>
          <img src={require("../../assests/ic_password@2x.png")} alt="" />
          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={(event) => this.inputChangedHandler(event, "password")}
          />
        </div>
        <button>SIGN UP</button>
      </div>
    );
    let formLogin = (
      <div className={classes.formClass}>
        <h3 className={classes.notActive} onClick={this.switchAuthModeHandler}>
          Sign Up
        </h3>

        <h3 className={classes.active}>Log In</h3>
        <div className={classes.inputContainer}>
          <img src={require("../../assests/ic_email@2x.png")} alt="" />
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            onChange={(event) => this.inputChangedHandler(event, "email")}
          />
        </div>
        <div className={classes.inputContainer}>
          <img src={require("../../assests/ic_password@2x.png")} alt="" />
          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={(event) => this.inputChangedHandler(event, "password")}
          />
        </div>
        <button>LOG IN</button>
      </div>
    );

    return (
      <div className={classes.outerMain}>
        <nav>
          <img src={require("../../assests/gpc_logo@2x.png")} alt="" />
        </nav>
        <form onSubmit={this.handleSubmit}>
          {this.state.isSignUp ? formSignUp : formLogin}
        </form>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

export default Auth;
