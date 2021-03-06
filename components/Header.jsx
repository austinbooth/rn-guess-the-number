import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colours from "../colours";

const Header = (props) => {
  const { title } = props;
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    paddingBottom: 25,
    backgroundColor: colours.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default Header;
