import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [multiplication, setMultiplication] = useState(0);
  const [number, setNumber] = useState(0);

  const onPress = () => {
    setMultiplication(multiplication + 5);
    setNumber(number + 1);
  };

  const CustomButton = () => {
    return (
      <TouchableHighlight onPress={onPress}>
        <View style={styles.customButton}>
          <Text>ADD</Text>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>{multiplication}</Text>
      <CustomButton />
      <Text style={styles.text}>You clicked {number} times</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fe77ab",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
  customButton: {
    padding: 15,
    backgroundColor: "#ffbc8d",
  },
});
