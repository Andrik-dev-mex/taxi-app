import React, { Fragment, useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Text, Input } from "react-native-elements";

const RegistrerScreen = () => {
  const [newUser, setNewUser] = useState({
    name : "",
    lastname: "",
    email: "",
  });

  return (
    <ScrollView style={styles.containerBack}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View>
            <Text h4>Datos Necesarios</Text>
          </View>
          <View style={styles.input}>
            <Input placeholder="Nombre"/>
          </View>
          <View style={styles.input}>
            <Input placeholder="Apellidos"/>
          </View>
          <View style={styles.input}>
            <Input placeholder="Correo Electronico"/>
          </View>
          <View style={styles.input}>
            <Input placeholder="Contraseña"/>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerBack: {
    backgroundColor: "#ffff",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    height: 600,
    backgroundColor: "#EAF2E3",
    alignItems: "center",
    padding: 15,
    borderRadius: 15
  },
  input : {
    width: "100%"
  }
});

export default RegistrerScreen;
