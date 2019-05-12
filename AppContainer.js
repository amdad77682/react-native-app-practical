"use strict";

import { SafeAreaView } from "react-navigation";

import React, { Component } from "react";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./app/store";
export default class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
