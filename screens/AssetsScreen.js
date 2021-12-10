import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

class AssetScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.titleBar}>
            <Ionicons
              name="ios-arrow-back"
              size={24}
              color="#52575D"
            ></Ionicons>
          </View>

          <View style={styles.infoContainer}>
            <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
              Fund Name
            </Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <View style={styles.fundDetails}>
              <View style={{ width: 250 }}>
                <Text
                  style={[styles.text, { color: "#41444B", fontWeight: "300" }]}
                >
                  Subscribed User:{" "}
                  <Text style={{ fontWeight: "400" }}>500</Text>
                </Text>
              </View>
            </View>
          </View>

          <View style={{ alignItems: "center" }}>
            <View style={styles.fundDetails}>
              <View style={{ width: 250 }}>
                <Text
                  style={[styles.text, { color: "#41444B", fontWeight: "300" }]}
                >
                  Currency:{" "}
                  <Text style={{ fontWeight: "400" }}>Bitcoin, Etherium</Text>
                </Text>
              </View>
            </View>
          </View>

          <View style={{ alignItems: "center" }}>
            <View style={styles.fundDetails}>
              <View style={{ width: 250 }}>
                <Text
                  style={[styles.text, { color: "#41444B", fontWeight: "300" }]}
                >
                  Monthly amount:{" "}
                  <Text style={{ fontWeight: "400" }}>200 ETH</Text>
                </Text>
              </View>
            </View>

            <View style={styles.fundDetails}>
              <View style={{ width: 250 }}>
                <Text
                  style={[styles.text, { color: "#41444B", fontWeight: "300" }]}
                >
                  Duration(in months):{" "}
                  <Text style={{ fontWeight: "400" }}>5</Text>
                </Text>
              </View>
            </View>
          </View>

          <Button
            style={styles.investButton}
            title="Invest here"
            disabled
            onPress={() => Alert.alert('Fund invested')}
          />

        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575D",
    fontSize: 20,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  fundDetails: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
    marginTop: 16,
  },
  investButton: {
    borderRadius: 4,
    backgroundColor: "#5DB075",
    marginLeft: 16,
    marginRight: 16,
  }
});

export { AssetScreen };
