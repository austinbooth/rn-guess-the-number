import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from "./components/Header"

export default function App() {
  return (
    <View style={styles.main}>
      <Header title={"Guess The Number"} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  }
});
