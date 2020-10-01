import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import IconAnimate from "./components/IconAnimate";
export default function App() {
  return (
    <View style={styles.container}>
      <IconAnimate
        name={"heart"}
        color={"#f45"}
        size={20}
        animation={"explode"}
        doppelganger={"heart-o"}
        animation={"explode"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
