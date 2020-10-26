import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SignUp from "./pages/SignUp";
import MainScreen from "./pages/MainScreen";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignUp} />
        <Route path="/posts" component={MainScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
