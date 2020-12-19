import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegistrerScreen from "../screens/RegistrerScreen";

const Stack = createStackNavigator();

const NavigationAuth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          title: "Taxi App",
          headerStyle: { backgroundColor: "#FF637D" },
        }}
      />
      <Stack.Screen
        name="registrer"
        component={RegistrerScreen}
        options={{
          title: "Registrar",
          headerStyle: { backgroundColor: "#FF637D" },
        }}
      />
    </Stack.Navigator>
  );
};

export default NavigationAuth;