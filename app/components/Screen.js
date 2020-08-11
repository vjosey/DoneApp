import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Constants from "expo-constants";

export default function Screen({ style, children }) {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
