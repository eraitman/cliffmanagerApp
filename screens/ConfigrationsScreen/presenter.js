import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ActivityIndicator,
  Button
} from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";

const ConfigrationsScreen = props => {
  return (
    <TouchableOpacity onPressOut={props.logout}>
      <View>
        <Text> LogOut </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default ConfigrationsScreen;
