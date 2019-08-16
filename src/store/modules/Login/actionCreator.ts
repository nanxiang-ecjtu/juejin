import actionTypes from './actionTypes';

export const toLogin = (isLogin) => {
    return {
        type: actionTypes.LOGIN_IN,
        payload: isLogin
    }
}