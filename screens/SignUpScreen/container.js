import React, { Component } from "react";
import SignUpScreen from "./presenter";
import { Alert } from "react-native";
class Container extends Component {
    render() {
        return (
          <SignUpScreen
            {...this.state}
          />
        );
      }

}
export default Container