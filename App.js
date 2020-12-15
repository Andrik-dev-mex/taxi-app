import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationApp from "./NavigationApp";
import firebase from "./config/database";

export default function App() {

  const [user, setUser ] = useState(null);

  useEffect(() => {
    firebase.auth.onAuthStateChanged(DataSnapshot => {
      console.log(DataSnapshot.val());
    });
  },[]);

  return (
    <NavigationApp/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
