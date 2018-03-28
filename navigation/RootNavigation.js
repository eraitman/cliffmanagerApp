import { StackNavigator } from "react-navigation";
import TapsNavigation from "./TapsNavigation";

const RootNavigation = StackNavigator({
  Taps: {
    screen: TapsNavigation,
    navigationOptions: {
      header: null,
      styles :{
          backgroundColor : "black"
      }
    }
  }
});

export default RootNavigation;
