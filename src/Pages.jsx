/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import Index from "./components/pages/Index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Pages = ({}) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;
