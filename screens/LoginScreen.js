import React, { Component } from "react";
import { Text, View } from "react-native";

class LoginScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Login Screen! </Text>
      </View>
    );
  }
}

export { LoginScreen };
