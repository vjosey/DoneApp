import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell what you don't need.</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title={"Login"} onPress={() => console.log("Login")} />
        <AppButton
          title={"Register"}
          color={"secondary"}
          onPress={() => console.log("Registar")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  tagline: {
    paddingVertical: 20,
    fontWeight: "600",
    fontSize: 25,
  },
});
