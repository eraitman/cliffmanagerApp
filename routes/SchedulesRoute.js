import React from "react";
import { StackNavigator } from "react-navigation";
import SchedulesScreen from "./../screens/SchedulesScreen";

const SchedulesRoute = StackNavigator({
  Schedules: {
    screen: SchedulesScreen
  }
});

export default SchedulesRoute;
