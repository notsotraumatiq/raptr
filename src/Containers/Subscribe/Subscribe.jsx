import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./Subscribe.module.css";

class Subscribe extends Component {
  state = { input: "" };
  handleSubscribe = (event) => {
    event.preventDefault();

    let formData = new FormData();

    formData.set("email", this.state.input);

    axios
      .post("http://dev.rapptrlabs.com/Tests/scripts/add-email.php", formData)
      .then((response) => {
        toast.success(response.data.message, {
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
      .catch((error) => {
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(error.response.data);
      });
  };
  handleInput = (event) => {
    let newInput = event.target.value;

    this.setState({ input: newInput });
  };
  render() {
    return (
      <div className={classes.Border}>
        <h2 className={classes.Subscribe}>SUBSCRIBE TO NEWSLETTER</h2>
        <form>
          <input
            className={classes.Input}
            type="email"
            name="email"
            placeholder="Your email"
            value={this.state.input}
            onChange={(event) => {
              this.handleInput(event);
            }}
          />
          <button
            onClick={(event) => this.handleSubscribe(event)}
            className={classes.Btn}
            type="submit"
          >
            SUBSCRIBE
          </button>
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

export default Subscribe;
