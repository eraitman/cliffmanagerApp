import React from "react";
import { TabNavigator } from "react-navigation";
import { Ionicons, Foundation } from "@expo/vector-icons";
import TodayRoute from "../routes/TodayRoute";
import SchedulesRoute from "../routes/SchedulesRoute";
import SpeakingRoute from "../routes/SpeakingRoute";
import ConfigrationsRoute from "../routes/ConfigrationsRoute";

const TapsNavigation = TabNavigator(
  {
    Today: {
      screen: TodayRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? "ios-home" : "ios-home-outline"}
            size={30}
            color={"black"}
          />
        )
      }
    },
    Schedules: {
      screen: SchedulesRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? "ios-calendar" : "ios-calendar-outline"}
            size={30}
            color={"black"}
          />
        )
      }
    },
    Speaking: {
      screen: SpeakingRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? "ios-recording" : "ios-recording-outline"}
            size={30}
            color={"black"}
          />
        )
      }
    },
    Configrations: {
      screen: ConfigrationsRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? "ios-more" : "ios-more-outline"}
            size={30}
            color={"black"}
          />
        )
      }
    }
  },
  {
    tabBarPosition: "bottom"
  }
);

export default TapsNavigation;
