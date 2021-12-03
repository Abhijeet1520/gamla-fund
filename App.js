import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';


export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.CircleShape} />
        <Text style={styles.headerText}> User Name </Text>

        <Text style={styles.subHeaderText}> First Name: </Text>
        <Text style={styles.subHeaderText}> Last Name: </Text>
        <Text style={styles.subHeaderText}> Email: </Text>

        <View style={styles.currLogo} />
        <View style={styles.currLogo} />
        <View style={styles.currLogo} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5",
  },
  CircleShape: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: '#FF9800',
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  subHeaderText: {
    fontSize: 16,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  currLogo: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: '#00ffcc',
    margin: 10,
  }

});