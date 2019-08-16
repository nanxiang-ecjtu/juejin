import ReactDom from "react-dom";
import React from "react";


import { AppContainer } from "react-hot-loader";

import { Provider } from "react-redux";

import store from './store/index';

import Routes from "./routers/index";

// render func
const render = (Router: any) => {
  const RootContainer = () => (
    <AppContainer>
      <Provider store={store}>
        <Router />
      </Provider>
    </AppContainer>
  );
  ReactDom.render(RootContainer(), document.getElementById("root"));
};

render(Routes); // 路由初始化

// hot module oper
if ((module as any).hot) {
  (module as any).hot.accept("./routers/index", () => {
    const Router = require("./routers/index").default;
    render(Router);
  });
}
