import React from "react";
import { StackNavigator } from "react-navigation";
import TodayScreen from "./../screens/TodayScreen";

const TodayRoute = StackNavigator({
  Today: {
    screen: TodayScreen
  }
});

export default TodayRoute;
