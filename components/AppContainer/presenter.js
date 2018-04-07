import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import LoggedOutNavigation from "../../navigation/LoggedOutNavigation";
import RootNavigation from "../../navigation/RootNavigation";
import CardScreen from "../../screens/CardScreen";

class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    profile: PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      phone: PropTypes.string,
      student: PropTypes.number
    })
  };

  render() {
    const { isLoggedIn, profile: { student } } = this.props;
    console.log("student : ");
    console.log(student);
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />

        {isLoggedIn ? (
          student === null ? (
            <CardScreen />
          ) : (
            <RootNavigation />
          )
        ) : (
          <LoggedOutNavigation />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor : "red",
    // alignItems: "center"
  }
});

export default AppContainer;
