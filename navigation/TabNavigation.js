import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../utils";
import {
  AssetsScreen,
  TransactionsScreen,
  SettingsScreen,
  SearchScreen,
} from "../screens";

const Tab = createBottomTabNavigator();

const userScreens = {
  Assets: AssetsScreen,
  Transactions: TransactionsScreen,
  Search: SearchScreen,
  Settings: SettingsScreen,
};

const tabIcons = {
  Assets: "home",
  Groups: "account-group",
  Search: "trophy",
  Settings: "settings",
};

const tabBarOptionsStyle = {
  activeTintColor: colors.SECONDARY_COLOR,
  inactiveTintColor: colors.BORDER_COLOR,
  style: { backgroundColor: colors.PRIMARY_COLOR },
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={tabBarOptionsStyle}>
      {Object.keys(userScreens).map(function (key, index) {
        return (
          <Tab.Screen
            name={key}
            key={key}
            component={userScreens[key]}
            options={{
              tabBarLabel: key,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name={tabIcons[key]}
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export { BottomTabNavigator };
