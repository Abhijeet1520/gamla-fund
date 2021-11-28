import React, { Component } from "react";
import { Text, View } from "react-native";

class StartupScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Welcome to Gamla Funds </Text>
      </View>
    );
  }
}

export { StartupScreen };
