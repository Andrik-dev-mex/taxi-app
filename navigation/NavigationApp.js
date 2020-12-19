import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const NavigationApp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"home"} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default NavigationApp;
