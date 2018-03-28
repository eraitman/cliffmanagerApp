import { StackNavigator } from "react-navigation";
import LogInScreen from "../screens/LogInScreen";
import SignUpScreen from "../screens/SignUpScreen";

const LoggedOutNavigation = StackNavigator(
  {
    LogIn: {
      screen: LogInScreen,
      navigationOptions: {
        header: null
      }
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: {
        title: "수강 정보 입력"
      }
    }
  },
  {mode:"modal"}
  
);

export default LoggedOutNavigation;
