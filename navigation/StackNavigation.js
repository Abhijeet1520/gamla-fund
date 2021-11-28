import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StartupScreen, LoginScreen, SignUpScreen } from "../screens";

const Stack = createStackNavigator();

const Screens = {
  WelcomeScreen: StartupScreen,
  Login: LoginScreen,
  SignUp: SignUpScreen,
};

const screenOptionStyle = { headerShown: false };

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={screenOptionStyle}
    >
      {Object.keys(Screens).map(function (key, index) {
        return <Stack.Screen key={key} name={key} component={Screens[key]} />;
      })}
    </Stack.Navigator>
  );
};

export { StackNavigator };
