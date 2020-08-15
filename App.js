import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Text, Switch } from "react-native";

import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";

const Categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [isNew, setIsNew] = useState(false);
  const [category, setCategory] = useState();
  return (
    <Screen>
      <Switch
        value={isNew}
        onValueChange={(newValue) => setIsNew(newValue)}
      ></Switch>

      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={Categories}
        icon="apps"
        placeholder="Category"
      ></AppPicker>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 100,
    backgroundColor: "#f8f4f4",
  },
  icon: {
    marginRight: 10,
  },
});
