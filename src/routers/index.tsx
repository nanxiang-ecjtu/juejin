import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Root from "../App";
import Home from "../views/Home";
import Login from "../views/Login";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Root>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
        </Root>
      </BrowserRouter>
    );
  }
}
