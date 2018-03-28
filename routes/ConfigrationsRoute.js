import React from "react";
import { StackNavigator } from "react-navigation";
import ConfigrationsScreen from "./../screens/ConfigrationsScreen";

const ConfigrationsRoute = StackNavigator({
  Config: {
    screen: ConfigrationsScreen
  }
});

export default ConfigrationsRoute;
