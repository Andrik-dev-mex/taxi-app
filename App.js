import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, View } from "react-native";
import firebase from "./config/database";
import { loadUser } from "./utils/dbUtils";
import "react-native-gesture-handler";
import Routes from "./navigation/Routes";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth.onAuthStateChanged((snapshot) => {
      if (snapshot) {
        loadUser(snapshot.uid).then((res) => {
          setUser(res);
        }).catch(error => { 
          
        })
      }
    });
  }, []);

  return <Routes user={user} />;
}
