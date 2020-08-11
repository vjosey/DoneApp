import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import colors from "../config/colors";

export default function TabWithIcon({ icon, iconColor, title, style }) {
  return (
    <View style={[styles.Container, style]}>
      <View style={[styles.icon, { backgroundColor: colors[iconColor] }]}>
        <MaterialCommunityIcons name={icon} color="white" size={20} />
      </View>

      <AppText style={styles.title}>{title}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    backgroundColor: colors.white,
    marginVertical: 1,
    padding: 15,
    alignItems: "center",
  },
  icon: {
    width: 35,
    height: 35,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  title: {
    fontWeight: "500",
  },
});
