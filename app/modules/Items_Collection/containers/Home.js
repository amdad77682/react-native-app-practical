import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { connect } from "react-redux";
import React, { Component } from "react";
import {
  MobileLoginView,
  InputItemView,
  InputContainerView
} from "../../config/styles/style";

export default class Home extends Component {
  static navigationOptions = ({ navigation, screenProps }) => {
    const { params = {} } = navigation.state;
    var headerLeft = null;

    var headerRight = null;
    return {
      title: "Item Collection",
      headerStyle: styles.navHeaderStyle,
      headerTitleStyle: styles.navHeaderTitleStyle,
      headerLeft: headerLeft,
      headerRight: headerRight
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber: ""
    };
  }
  render() {
    return (
      <View
        style={{
          margin: 15,
          marginTop: 100,

          backgroundColor: "#808080"
        }}
      >
        <MobileLoginView>
          <Image
            source={require("../../../../public/images/user.png")}
            style={{
              width: 40,
              height: 40,
              marginLeft: 100,
              marginBottom: 20
              //borderRadius: avatarSize / 2
            }}
            //resizeMode="cover"
          />
          <TextInput
            accessibilityLabel="mobile"
            style={styles.textInput}
            onChangeText={mobileNumber => {
              this.setState({
                mobileNumber
              });
            }}
            keyboardType={"numeric"}
            underlineColorAndroid="#fff"
            placeholder={"Mobile Number"}
          />

          <TouchableOpacity
            style={{
              fontSize: 12,
              alignContent: "center",
              marginLeft: 100,
              marginTop: 30
            }}
            onPress={() => {
              if (this.state.mobileNumber) {
                this.props.navigation.navigate("ItemsHome");
              } else {
                alert("Enter mobile number");
              }
            }}
          >
            <Text style={{ alignContent: "center" }}>Sign in</Text>
          </TouchableOpacity>
        </MobileLoginView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  navHeaderStyle: {
    backgroundColor: "#F5FCFF"
  },
  textInput: {
    height: 50,
    backgroundColor: "#F5FCFF"

    //color: "#333333",
    //paddingHorizontal: 105
  },
  navHeaderTitleStyle: StyleSheet.flatten([
    {
      color: "#333333"
    },
    { fontSize: 16 }
  ])
});
