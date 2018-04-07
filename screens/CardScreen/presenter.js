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
  Button,
  Picker,
  Linking
} from "react-native";
import PropTypes from "prop-types";
import PickerModal from "react-native-picker-modal";
import { Ionicons } from "@expo/vector-icons";
import RadioForm from "react-native-radio-form";

const { width, height } = Dimensions.get("window");

const genderData = [
  {
    label: "Male",
    value: "M"
  },
  {
    label: "Female",
    value: "F"
  }
];
const CardScreen = props => {
    console.log("a:")
    console.log(props)
    const { profile} = props
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {profile.name}님 반갑습니다.{"\n"}
          아직 수강카드가 입력되지 않았거나, {"\n"}
          접수 후 처리되지 않았습니다.{"\n"}
          (입력 후 평일기준 24시간 이내 처리됩니다.)
        </Text>
      </View>
      {/* <View style={styles.content}>
        <View style={styles.row}>
          <Text> Gender : </Text>
          <RadioForm
            style={{ width: 350 - 30 }}
            dataSource={genderData}
            itemShowKey="label"
            itemRealKey="value"
            circleSize={16}
            initial={1}
            formHorizontal={true}
            labelHorizontal={true}
            //   onPress={(item) => this._onSelect(item)}
          />
        </View>
        <View style={styles.row}>
          <Text>Job : </Text>
          <TextInput
            placeholder="Job"
            style={styles.textInput}
            autoCapitalize={"none"}
            autoCorrect={false}
            value={props.naverid}
            onChangeText={props.changeNaverId}
          />
        </View>
        <View style={styles.row}>
          <Text>Job : </Text>
          <TextInput
            placeholder="Job"
            style={styles.textInput}
            autoCapitalize={"none"}
            autoCorrect={false}
            value={props.naverid}
            onChangeText={props.changeNaverId}
          />
        </View>
        <View style={styles.row}>
          <Text>Naver Id : </Text>
          <TextInput
            placeholder="Naver Id"
            style={styles.textInput}
            autoCapitalize={"none"}
            autoCorrect={false}
            value={props.naverid}
            onChangeText={props.changeNaverId}
          />
        </View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center"
  },
  header: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width
  },
  headerText:{
      fontSize : 20
  },
  content: {
    flex: 3,
    backgroundColor: "#fff",
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    width
  },
  row: {
    paddingLeft: 10,
    backgroundColor: "#fafafa",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width
  },
  textInput: {
    height: 50,
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 15,
    width: width - 100,
    fontSize: 14
  },
  touchable: {
    borderRadius: 5,
    backgroundColor: "#3e99ee",
    width: width - 80,
    marginBottom: 15
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
});

export default CardScreen;
