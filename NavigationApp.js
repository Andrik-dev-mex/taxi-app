import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import RegistrerScreen from "./screens/RegistrerScreen";

const Stack = createStackNavigator();

const NavigationApp = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={LoginScreen}/>
        <Stack.Screen name="registrer" component={RegistrerScreen} options={{title: "Taxi App"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default NavigationApp;