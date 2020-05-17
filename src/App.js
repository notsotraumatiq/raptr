import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Auth from "./Containers/Auth/Auth";
import Landing from "./Containers/Landing/Landing";
import "./App.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route exact path="/" component={Landing} />

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
