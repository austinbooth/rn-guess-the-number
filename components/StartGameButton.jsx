import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const StartGameButton = (props) => {
  return (
    <View style={styles.button}>
      <Button title="Start new game" onPress={props.toggleGameInPlay} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
  },
});

export default StartGameButton;
