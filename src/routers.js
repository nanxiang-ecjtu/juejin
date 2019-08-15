import React from "react";
import { Route } from "react-router-dom";

import Root from "./App";
import Home from "./views/Home/";
import Login from './views/Login/';


export default () => (
//   <>
//     <Route path="/" exact component={Root}>
//       <Route path="home" component={Home} />
//     </Route>
//   </>
  <Root>
      <Route path="/home" component={Home} />
      <Route path='/login' component={Login} />
  </Root>
);
