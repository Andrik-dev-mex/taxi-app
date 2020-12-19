import React, { Fragment, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import firebase from "../config/database";

const RegistrerScreen = ({navigation}) => {
  const [newUser, setNewUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const registrerUser = () => {
    firebase.auth
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((response) => {
        delete newUser.password;

        firebase
        .db
        .ref(`/users/${response.user.uid}`)
        .set(newUser);
        
        navigation.navigate("home");
      })
      .catch(error => {

      })
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <Text h4>Registrar</Text>
        </View>
        <View style={styles.input}>
          <Input
            placeholder="Nombre"
            onChangeText={(value) => handleChange("name", value)}
          />
        </View>
        <View style={styles.input}>
          <Input
            placeholder="Apellidos"
            onChangeText={(value) => handleChange("lastname", value)}
          />
        </View>
        <View style={styles.input}>
          <Input
            placeholder="Correo Electronico"
            onChangeText={(value) => handleChange("email", value)}
          />
        </View>
        <View style={styles.input}>
          <Input
            placeholder="Contraseña"
            onChangeText={(value) => handleChange("password", value)}
          />
        </View>
        <View style={styles.input}>
          <Button title="Enviar Datos" onPress={() => {registrerUser();}}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  card: {
    height: 350,
    backgroundColor: "#EAF2E3",
    alignItems: "center",
    padding: 15,
    borderRadius: 15,
  },
  input: {
    width: "100%",
    marginBottom: 10
  },
});

export default RegistrerScreen;
