import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class HelloWorldApp extends Component {
  constructor() {
    super();
  }

  fcOptions = ["FC-1", "FC-2", "FC-3", "FC-4", "IBPO"];

  state = {
    fcName: this.fcOptions[this.getRandomIntInclusive(0, 4)]
  };

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

  styles = StyleSheet.create({
    baseText: {
      fontFamily: "Cochin"
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold"
    },
    middleScreen: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      textAlign: "center"
    }
  });

  render() {
    return (
      <View style={this.styles.middleScreen}>
        <Text>
          FC of the day is <br />
        </Text>
        <Text style={this.styles.titleText}>
          {"\u2728"} {this.state.fcName} {"\u2728"}
        </Text>
      </View>
    );
  }
}
