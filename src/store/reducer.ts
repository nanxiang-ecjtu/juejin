import { combineReducers } from 'redux';
import LoginReducer from './modules/Login/index';

const reducer = combineReducers({
    login: LoginReducer
});

export default reducer;