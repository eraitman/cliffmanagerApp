import React, { Component } from "react";
import PropTypes from "prop-types";
import SchedulesScreen from "./presenter";

class Container extends Component {
  state = {
    isLoading: true
  };

  componentDidMount = () =>{
      this.props.getSchedules()
  }
  componentWillReceiveProps = (nextProps, nextState) => {
    if (nextProps.schedules) {
      this.setState({ isLoading: false });
    }
  };

  render() {
    return <SchedulesScreen {...this.props} />;
  }
}

export default Container