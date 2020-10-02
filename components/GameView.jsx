import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const GameView = (props) => {
  const generateRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNum = Math.floor(Math.random() * (max - min) + min);
  };

  const [randomNumber, setRandomNumber] = useState(
    generateRandomNumber(1, 100)
  );

  return <View></View>;
};

const styles = StyleSheet.create({});

export default GameView;
