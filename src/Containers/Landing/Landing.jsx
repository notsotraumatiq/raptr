import React, { Component } from "react";
import Subscribe from "../Subscribe/Subscribe";
import Apps from "../../StatelessFunctionalComponents/Apps/apps";

import classes from "./Landing.module.css";

class Landing extends Component {
  state = {};

  HandleAuth = () => {
    this.props.history.push("/auth");
  };

  render() {
    return (
      <div className="outer">
        <div className={classes.hero}>
          <nav>
            <button className={classes.Login} onClick={this.HandleAuth}>
              Login
            </button>
          </nav>
          <header>
            <img src={require("../../assests/gpc_logo@2x.png")} alt="" />

            <h2>APP DESIGN & DEVELOPMENT AGENCY</h2>
          </header>
        </div>

        <main>
          <section className={classes.section1}>
            <div>
              <section>
                <h2>WHO WE ARE</h2>
              </section>
            </div>
            <div>
              <p>
                Rapptr Labs is a Jersey City-based app development firm that
                works with Fortune 500 brands, leading retailers, funded
                startups and more to craft digital products and strategies that
                solve buisness problems and drive measureable results.
              </p>
              <p>
                We're a part of your team. That means working together to meet
                the buisness challenges you face. From iOS and Android to
                emerging technologies like VR, AR and wearables, we do whatever
                it takes to help you thrive in today's - and tomorrow's -digital
                ecosystem
              </p>
            </div>
          </section>
        </main>
        <Apps />
        <Subscribe />
        <footer>Footer</footer>
      </div>
    );
  }
}

export default Landing;
