import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import NavigationApp from "./NavigationApp";
import firebase from "./config/database";
import { loadUser } from "./utils/dbUtils";
import "react-native-gesture-handler";
import { set } from "react-native-reanimated";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth.onAuthStateChanged((response) => {
      if(response){
        loadUser(response.uid)
        .then((response) => {
          setUser(response);
        })
        .catch(() => {
        });
      }
    });
  }, []);

  return <NavigationApp/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
