import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Header from "./components/Header";
import GameView from "./components/GameView";

export default function App() {
  const [gameInPlay, setGameInPlay] = useState(false);
  const toggleGameInPlay = () => setGameInPlay(currentSetting => !currentSetting);

  return (
    <View style={styles.main}>
      <Header title="Guess The Number" />
      <Button title="Start new game" onPress={toggleGameInPlay} />
      {gameInPlay && <GameView />}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // alignItems: "center"
  },
  // title: {
  //   fontSize: 20,
  //   marginVertical: 10,
  // },
});
