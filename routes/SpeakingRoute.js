import React from "react";
import { StackNavigator } from "react-navigation";
import SpeakingScreen from "./../screens/SpeakingScreen";
import SpeakingLinesScreen from "./../screens/SpeakingLinesScreen";
import SpeakingRecordingScreen from "./../screens/SpeakingRecordingScreen";

const SpeakingRoute = StackNavigator({
  Speaking: {
    screen: SpeakingScreen
  },
  Lines: {
    screen: SpeakingLinesScreen
  },
  Recoding: {
    screen: SpeakingRecordingScreen
  }
});

export default SpeakingRoute;
