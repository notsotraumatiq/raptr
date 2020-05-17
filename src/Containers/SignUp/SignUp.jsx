import React, { Component } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateObject, checkValidity } from "../../Utility/Ultility";
import classes from "./SignUp.module.css";

class SignUp extends Component {
  state = {
    controls: {
      username: {
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        value: "",
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
    isSignUp: true,
  };

  inputChangedHandler = (event, controlName) => {
    const updatedControls = { ...this.state.controls };
    console.log(updatedControls);
    updatedControls[controlName].value = event.target.value;

    this.setState({ controls: updatedControls });
  };

  switchAuthModeHandler = () => {
    this.setState((prevState) => {
      return { isSignUp: !prevState.isSignUp };
    });
  };
  handleSubscribe = (event) => {
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
          toast.success(`Hello ${response.data.user_username}`, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          console.log(response);
        })
        .catch((response) => {
          console.log(response);
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
          console.log(response);
        })
        .catch((response) => {
          console.log(response);
        });
    }
  };

  handleInput = (event) => {
    let newInput = event.target.value;

    this.setState({ input: newInput });
  };

  render() {
    let formD = (
      <div className={classes.SignUp}>
        <div>
          {/* <img src={require("../../assests/ic_username@2x.png")} alt="" /> */}
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(event) => this.inputChangedHandler(event, "username")}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            onChange={(event) => this.inputChangedHandler(event, "email")}
          />
        </div>
        <div>
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
      <div>
        <input
          type="text"
          placeholder="Email Address"
          name="email"
          onChange={(event) => this.inputChangedHandler(event, "email")}
        />
        <input
          type="text"
          placeholder="Password"
          name="password"
          onChange={(event) => this.inputChangedHandler(event, "password")}
        />
        <button>LOG IN</button>
      </div>
    );
    return (
      <div className={classes.hero}>
        <nav>
          <img src={require("../../assests/gpc_logo@2x.png")} alt="" />
        </nav>
        <form onSubmit={this.handleSubscribe}>
          <h3>Sign Up</h3>
          <h3>Log In</h3>
          {this.state.isSignUp ? formD : formLogin}
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

export default SignUp;
