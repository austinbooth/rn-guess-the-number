import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import colours from "../colours";
import CardView from "./CardView";

const GameView = (props) => {
  const generateRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNum = Math.floor(Math.random() * (max - min) + min);
    return randomNum;
  };

  const [randomNumber, setRandomNumber] = useState(
    generateRandomNumber(1, 100)
  );

  const [enteredValue, setEnteredValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");

  const numberInputHandler = (input) => {
    setEnteredValue(input.replace(/[^0-9]/g, ""));
  };

  const clearInput = () => {
    setEnteredValue("");
  };

  const submitInputHandler = () => {
    const chosenNumber = +enteredValue;
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Please enter a number between 1 and 99", [
        { text: "OK", style: "destructive", onPress: clearInput },
      ]);
      return;
    }
    // check if won
    if (chosenNumber === randomNumber) {
      console.log("setting game status to 1...");
      props.setGameStatus(1);
      props.setGameInPlay(false);
      console.log("done");
      return;
    }
    // check if lost
    if (props.attempts === props.maxAttempts) {
      props.setGameStatus(-1);
      props.setGameInPlay(false);
      return;
    }
    //
    setSubmitted(true);
    props.incrementAttempts();
    setSelectedNumber(chosenNumber);
    clearInput();
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <CardView style={styles.inputContainer}>
          <Text style={styles.text}>Enter a number</Text>
          <TextInput
            style={styles.input}
            blurOnSubmit
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Reset" color="red" onPress={clearInput} />
            </View>
            <View style={styles.button}>
              <Button
                title="Submit"
                color={colours.primary}
                onPress={submitInputHandler}
              />
            </View>
          </View>
        </CardView>
        <View style={styles.summaryContainer}>
          <Text>You chose</Text>
          <View style={styles.selectedNumber}>
            <Text style={styles.number}>{selectedNumber}</Text>
          </View>
        </View>
        {submitted && selectedNumber < randomNumber && (
          <CardView style={styles.summaryContainer}>
            <Text style={styles.higher}>Higher</Text>
          </CardView>
        )}
        {submitted && selectedNumber > randomNumber && (
          <CardView style={styles.summaryContainer}>
            <Text style={styles.lower}>Lower</Text>
          </CardView>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: "20%",
    padding: 5,
    marginTop: 10,
    marginBottom: 5,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  button: {
    width: "40%",
  },
  text: {
    fontSize: 16,
  },
  summaryContainer: {
    marginTop: 20,
    // alignItems: "center",
  },
  selectedNumber: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: colours.accent,
    fontSize: 22,
  },
  higher: {
    color: "red",
    fontSize: 22,
  },
  lower: {
    color: "blue",
    fontSize: 22,
  },
});

export default GameView;
