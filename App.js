import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, YellowBox } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}></View>
      <View style={styles.bluewView}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  yellowView: {
    flex: 3,
    backgroundColor: "yellow"
  },
  bluewView: {
    flex: 2,
    backgroundColor: "brown"
  },
});
