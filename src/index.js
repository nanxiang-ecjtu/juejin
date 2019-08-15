import React from 'react';
import ReactDom from 'react-dom';

import {
    BrowserRouter
} from 'react-router-dom';

import {
    AppContainer
} from 'react-hot-loader'

import Routes from './routers';

// render func
const renderWithHotReload = (Route) => {
    const RootContainer = () => (
        <AppContainer>
            <BrowserRouter>
                <Route />
            </BrowserRouter>
        </AppContainer>
    )
    ReactDom.render(RootContainer() , document.getElementById('root'));
}

renderWithHotReload(Routes); // 路由初始化

// hot module oper
if(module.hot) {
    module.hot.accept("./routers.js", () => {
        const Router = require("./routers.js").default;
        renderWithHotReload(Router);
      });
}