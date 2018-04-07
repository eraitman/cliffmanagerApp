import React, { Component } from "react";
import LogInScreen from "./presenter";
import { Alert } from "react-native";
class Container extends Component {
  state = {
    username: "",
    password: "",
    isSubmitting: false
  };

  _changeUsername = text => {
    this.setState({ username: text });
  };
  _changePassword = text => {
    this.setState({ password: text });
  };
  _signup = () => {
    this.props.navigation.navigate("SignUp");
  };
  _submit = async () => {
    const { username, password, isSubmitting } = this.state;
    const { login } = this.props;
    if (!isSubmitting) {
      if (username && password) {
        this.setState({
          isSubmitting: true
        });
        let loginResult = await login(username, password);
        console.log("aa")
        console.log(loginResult)
        if (!loginResult) {
          console.log("bb")
          console.log(loginResult)
          this.setState({
            isSubmitting: false
          });
          Alert.alert("Something went Wrong, Try again");
        }
      } else {
        Alert.alert("All Filed");
      }
    }
  };

  render() {
    return (
      <LogInScreen
        {...this.state}
        changeUsername={this._changeUsername}
        changePassword={this._changePassword}
        submit={this._submit}
        signup={this._signup}
      />
    );
  }
}

export default Container;
