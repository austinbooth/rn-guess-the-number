import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Header from "./components/Header";
import StartGameButton from "./components/StartGameButton";
import GameView from "./components/GameView";
import CardView from "./components/CardView";

export default function App() {
  const [gameInPlay, setGameInPlay] = useState(false);
  const [attempts, setAttempts] = useState(1);
  const [gameStatus, setGameStatus] = useState(0);

  const toggleGameInPlay = () => {
    setGameInPlay(currentSetting => !currentSetting);
    setAttempts(1);
    setGameStatus(0);
  }

  const incrementAttempts = () => {
    setAttempts((currentAttempts) => currentAttempts + 1);

  }

  const maxAttempts = 6;

  return (
    <View style={styles.main}>
      <Header title="Guess The Number" />
      <Text style={styles.title}>{`Can you guess the random number between 1 and 99?`}</Text>
      <Text style={styles.title}>{`You have ${maxAttempts} goes. Good luck!`}</Text>
      <StartGameButton toggleGameInPlay={toggleGameInPlay} />
      {gameInPlay && <GameView incrementAttempts={incrementAttempts} attempts={attempts} setGameStatus={setGameStatus} setGameInPlay={setGameInPlay} maxAttempts={maxAttempts} />}
      {(gameStatus === -1) && (
        <CardView style={styles.gameSummaryContainer}>
          <Text style={styles.loseText}>You lost 😔</Text>
        </CardView>
      )}
      {gameStatus === 1 && (
        <CardView style={styles.gameSummaryContainer}>
          <Text style={styles.winText}>You won!!! 😃</Text>
        </CardView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center"
  },
  gameSummaryContainer: {
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    // justifyContent: "center",
  },
  winText: {
    color: "orange",
    fontSize: 30,
  },
  loseText: {
    color: "red",
    fontSize: 30,
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    padding: 10,
    paddingBottom: 0,
    textAlign: "center",
  },
});
