declare const window: any;

import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

import reducer from "./reducer";

// redux chrome调试工具配置
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);

export default store;