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
  ActivityIndicator
} from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const LogInScreen = props => (
  <View style={styles.container}>
    <StatusBar barStyle={"dark-content"} />
    <View style={styles.header}>
      <Image
        source={require("../../assets/images/logo.jpg")}
        resizeMode="stretch"
        style={styles.logo}
      />
    </View>
    <View style={styles.content}>
      <TextInput
        placeholder="ID"
        style={styles.textInput}
        autoCapitalize={"none"}
        autoCorrect={false}
        value={props.username}
        onChangeText={props.changeUsername}
      />
      <TextInput
        placeholder="Password"
        style={styles.textInput}
        autoCapitalize={"none"}
        secureTextEntry={true}
        autoCorrect={false}
        value={props.password}
        onChangeText={props.changePassword}
        returnKeyType={"send"}
      />
      <TouchableOpacity style={styles.touchable} onPressOut={props.submit}>
        <View style={styles.button}>
          {props.isSubmitting ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={styles.buttonText}> Login </Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
    <View style={styles.footer}>
      <View>
        <Text style={styles.footerText}>
          이 APP는 벼랑영어의 현재 수강생만 사용가능합니다.
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.touchableSignUp} onPressOut={props.signup}>
          <View style={styles.button}>
            <Text style={styles.signupText}>정보입력</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

LogInScreen.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  changeUsername: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center"
  },
  header: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width
  },
  logo: {
    width: 180,
    height: 100,
    marginTop: 20
  },
  content: {
    flex: 3,
    backgroundColor: "#fff",
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    width
  },
  singupContainer: {
    backgroundColor: "red",
    paddingHorizontal: 7,
    paddingVertical: 20,
    marginTop: 50
  },
  singupView: {
    flexDirection: "row",
    height: 50
  },
  textInput: {
    height: 50,
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 15,
    width: width - 80,
    fontSize: 14
  },
  touchable: {
    borderRadius: 5,
    backgroundColor: "#3e99ee",
    width: width - 80,
    marginBottom: 15
  },
  touchableSignUp: {
    
  },
  button: {
    paddingHorizontal: 7,
    paddingVertical: 20
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 14
  },
  signupText : {
    color: "#3e99ee",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 14
  },
  footer: {
    paddingLeft:10,
    backgroundColor: "#fafafa",
    flexDirection: "row",
    alignItems :"center",
    justifyContent : 'space-between',
    width
  } 
});

export default LogInScreen;
