import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import { Text, Input, Button, Link } from "react-native-elements";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.containerBackground}>
      <ImageBackground
        source={require("../assets/inicioprueba1.jpg")}
        style={styles.image}
      >
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.text}>
              <Text h4>Inicio de Sesión</Text>
            </View>
            <View style={styles.input}>
              <Input placeholder="Correo Electroníco" />
            </View>
            <View style={styles.input}>
              <Input placeholder="Contraseña" />
            </View>
            <View style={styles.input}>
              <Button
                title="Entrar"
                buttonStyle={{ backgroundColor: "#FF637D" }}
              />
            </View>
            <View style={styles.input}>
              <Button
                title="Registrar"
                buttonStyle={{ backgroundColor: "#66D7D1" }}
                onPress={() => {
                  navigation.navigate("registrer");
                }}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 10,
  },
  card: {
    height: 345,
    padding: 10,
    backgroundColor: "#EAF2E3",
    alignItems: "center",
    borderRadius: 10,
  },
  input: {
    width: "100%",
    marginBottom: 10,
  },
  text: {
    marginTop: 10,
    marginBottom: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: null,
  },
  button: {
    color: "#fff",
  },
});
export default LoginScreen;
