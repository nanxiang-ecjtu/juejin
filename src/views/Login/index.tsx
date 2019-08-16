import React, { Component } from "react";
import { connect } from "react-redux";

import { toLogin } from "../../store/modules/Login/actionCreator";

@(connect(
  (state: any) => ({
    login: state.login
  }),
  dispatch => ({
    toLogin(status) {
      dispatch(toLogin(status));
    }
  })
) as any)
class Login extends Component<any, any> {
  state = {
    isLogin: true
  };

  render() {
    const { isLogin } = this.props.login;
    return (
      <div className="login">
        <h3>{String(isLogin)}</h3>
        <button onClick={() => {
          this.props.toLogin(!isLogin)
        }}>
          changeLoginStatus
        </button>
      </div>
    );
  }
}

export default Login;
