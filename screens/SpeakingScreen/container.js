import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeakingScreen from "./presenter";

class Container extends Component {
  state = {
    isLoading: true
  };

  componentDidMount = () =>{
      this.props.getSchedules()
  }
  componentWillReceiveProps = (nextProps, nextState) => {
    if (nextProps.scheduels) {
      this.setState({ isLoading: false });
    }
  };

  render() {
    return <SpeakingScreen {...this.props} />;
  }
}

export default Container