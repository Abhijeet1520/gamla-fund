import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../utils";
import { useNavigation } from "@react-navigation/native";

// import { Ionicons } from '@expo/vector-icons';

const BackIcon = (props) => {
  const navigation = useNavigation();

  // const backIconName = Platform.OS === 'android' ? 'md-arrow-round-back' : 'ios-arrow-round-back'
  return (
    <TouchableOpacity
      style={styles.backIcon}
      onPress={() => {
        navigation.goBack();
      }}
    >
      {/* <Ionicons name={backIconName} size={30} color={colors.PRIMARY_COLOR} /> */}
      <View style={{ ...styles.backArrow, borderColor: props.color }} />
    </TouchableOpacity>
  );
};

export { BackIcon };

const styles = StyleSheet.create({
  backIcon: {
    position: "absolute",
    alignItems: "flex-start",
    top: 60,
    left: 40,
    width: 40,
    height: 40,
    backgroundColor: "transparent",
    marginTop: -10,
    marginLeft: -10,
  },
  backArrow: {
    borderColor: colors.PRIMARY_COLOR,
    borderTopWidth: 0,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderLeftWidth: 0,
    marginTop: 8,
    marginLeft: 8,
    padding: 12,
    transform: [{ rotate: "135deg" }],
  },
});
