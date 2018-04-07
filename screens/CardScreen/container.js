import React, { Component } from "react";
import CardScreen from "./presenter";
import { Alert } from "react-native";
class Container extends Component {
  state = {
    isSubmitting: false
  };
  render() {
    return <CardScreen {...this.state} {...this.props}/>;
  }
}

export default Container;
