import React, { createContext } from "react";

const UserContext = createContext({
  logStatus: false,
  username: "",
  password: "",
  rememberMe: false,
  updateUsername: () => {},
  updatePassword: () => {},
  isLogin: () => {},
  checkboxChange: () => {}
});

export class UserProvider extends React.Component {
  updateUsername = newUsername => {
    this.setState({ username: newUsername });
  };

  updatePassword = newPassword => {
    this.setState({ password: newPassword });
  };

  isLogin = history => {
    if (this.state.username === "abc" && this.state.password === "abc") {
      this.setState({ logStatus: true });
      history.push("/admin");
    } else {
      history.push("/Login");
    }
  };

  checkboxChange = event => {
    const rememberMe = event.currentTarget.checked;
    this.setState({ rememberMe: rememberMe });

    localStorage.setItem("rememberMe", rememberMe ? rememberMe : "");
    localStorage.setItem("username", rememberMe ? this.state.username : "");
  };

  state = {
    logStatus: false,
    rememberMe: false,
    username: "",
    password: "",
    updateUsername: this.updateUsername,
    updatePassword: this.updatePassword,
    isLogin: this.isLogin,
    checkboxChange: this.checkboxChange
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const UserConsumer = UserContext.Consumer;
