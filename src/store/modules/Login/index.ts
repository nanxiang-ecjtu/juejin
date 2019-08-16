import actionTypes from './actionTypes';

interface IState {
    isLogin: boolean
}

const initalLoginState: IState = {
  isLogin: false
};

const LoginReducer = (state = initalLoginState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_IN:
      return {
        ...state,
        isLogin: action.payload
      };
    default:
      return state;
  }
};

export default LoginReducer;