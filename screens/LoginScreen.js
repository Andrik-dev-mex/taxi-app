import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text, Input, Button, Link } from "react-native-elements";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.text}>
          <Text h4>Iniciar Sesión</Text>
        </View>
        <View  style={styles.input}>
          <Input  placeholder="Correo Electronico"/>
        </View>
        <View style={styles.input}>
          <Input  placeholder="Contraseña"/>
        </View>
        <View  style={styles.input}>
          <Button title="Ingresar" />
        </View>
      </View>
      <View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#ccc",
    padding: "1em",
  },
  card: {
    height: "25em",
    padding: "1em",
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: "1em",
  },
  input: {
    width: "100%",
    marginBottom: "3em"
  },
  text : {
    marginTop: "1em",
    marginBottom: "3em"
  }
});
export default LoginScreen;
