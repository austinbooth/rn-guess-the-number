import React from "react";
import { View, StyleSheet } from "react-native";

const CardView = (props) => {
  return <View style={{...styles.cardContainer, ...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    // ios only
    shadowColor: "black",
    shadowOffset: { width: -5, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    // Android only
    elevation: 5,
  },
});

export default CardView;
