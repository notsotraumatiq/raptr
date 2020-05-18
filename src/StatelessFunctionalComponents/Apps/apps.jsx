import React from "react";

import classes from "./apps.module.css";
const apps = () => {
  return (
    <section className={classes.section2}>
      <h2>OUR APPS</h2>

      {/* This is the code you will have to move to a new component */}
      <div className={classes.appContainer}>
        <a
          href="https://movo.me"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.imgContainer}
        >
          <img src={require("../../assests/logo_movo@2x.png")} alt="" />
          <h5>Movo</h5>
        </a>
        {/* Copied the orginal link from the pdf gave me a null error for Conair and Tapping*/}
        <a
          href="https://itunes.apple.com/us/app/ww-body-analysis-scale-tracker/
          id1157071126?mt="
          target="_blank"
          rel="noopener noreferrer"
          className={classes.imgContainer}
        >
          <img src={require("../../assests/logo_conair@2x.png")} alt="" />
          <h5>Conair WeightWatchers</h5>
        </a>
        <a
          href="https://itunes.apple.com/us/app/the-tapping-solution/
          id1419815487?mt=8"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.imgContainer}
        >
          <img
            src={require("../../assests/logo_tappingSolution@2x.png")}
            alt=""
          />
          <h5>Tapping Solution</h5>
        </a>
        <a
          href="https://www.gotenna.com"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.imgContainer}
        >
          <img src={require("../../assests/logo_goTenna@2x.png")} alt="" />
          <h5>goTenna</h5>
        </a>
      </div>
    </section>
  );
};

export default apps;
