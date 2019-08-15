import React, { Component } from "react";

class Login extends Component {
  state = {
    isLogin: true
  };

  render() {
    const { isLogin } = this.state;
    console.log(isLogin)
    return (
      <div className="login">
        <h3>{ String(isLogin) }</h3>
        <button onClick={() => this.setState(() => ({ isLogin: !isLogin }))}>
          change login status
        </button>
      </div>
    );
  }
}

export default Login;
