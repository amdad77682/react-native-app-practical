import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";
import { connect } from "react-redux";
import React, { Component } from "react";

export default class ItemsHome extends Component {
  static navigationOptions = ({ navigation, screenProps }) => {
    const { params = {} } = navigation.state;
    var headerLeft = null;

    var headerRight = null;
    return {
      title: "Items Home",
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
  renderItem = item => {
    return (
      <View style={{ backgroundColor: "#333333" }}>
        <Text style={{ color: "#F5FCFF" }}>{item.title}</Text>
      </View>
    );
  };
  render() {
    return (
      <View>
        <Text
          style={{ fontSize: 22, padding: 12, marginTop: 30, marginLeft: 30 }}
        >
          Welcome Mobile Number
        </Text>
        <Text style={{ fontSize: 22, padding: 12, marginTop: 30 }}>
          List of Items
        </Text>
        <FlatList
          data={[{ title: "item" }]}
          keyExtractor={(item, index) => index}
          renderItem={this.renderItem}
        />
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
    backgroundColor: "#F5FCFF",
    color: "#333333",
    paddingHorizontal: 105
  },
  navHeaderTitleStyle: StyleSheet.flatten([
    {
      color: "#333333"
    },
    { fontSize: 16 }
  ])
});
