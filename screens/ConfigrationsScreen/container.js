import React, { Component } from "react";
import ConfigrationsScreen from "./presenter";
import { Alert } from "react-native";
class Container extends Component {
  state = {
    isSubmitting: false
  };
  render() {
    return <ConfigrationsScreen {...this.state} logout={this._logout} />;
  }

  _logout = async() => {
    try {
      const a = await this.props.logout();
    } catch (e) {
      console.log(e);
    }
  };
}

export default Container;
