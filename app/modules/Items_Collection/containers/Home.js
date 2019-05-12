import { Platform, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import React, { Component } from "react";

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
  render() {
    return (
      <View>
        <Text>hdaskfgadskfg</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  navHeaderStyle: {
    backgroundColor: "#F5FCFF"
  },
  navHeaderTitleStyle: StyleSheet.flatten([
    {
      color: "#333333"
    },
    { fontSize: 16 }
  ])
});
