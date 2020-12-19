import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationApp from "./NavigationApp";
import NavigationAuth from "./NavigationAuth";

const Routes = ({ user }) => {
  return (
    <NavigationContainer>
      {user ? <NavigationApp /> : <NavigationAuth />}
    </NavigationContainer>
  );
};

export default Routes;
