import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";
import TabWithIcon from "../components/TabWithIcon";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import ListItemSeparators from "../components/ListItemSeparators";

const menuItems = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Message",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

export default function AccountScreen() {
  return (
    <Screen style={{ backgroundColor: colors.light }}>
      <View style={styles.Container}>
        <ListItem
          title="Mosh"
          subTitle="Manning"
          image={require("../assets/mosh.jpg")}
        />
      </View>

      <View style={styles.Container}>
        <FlatList
          data={menuItems}
          keyboardDismissMode={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparators}
        />
      </View>

      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor={colors.warning} />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  Container: {
    marginVertical: 15,
  },
  Image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
});
