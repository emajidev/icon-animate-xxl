import React, { useRef, useState, useEffect } from "react";
import { Animated, Text, View, StyleSheet, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import {explode,styleAnimate,styleDoppelganger} from "./animations/explode"
const AnimatedIcon = Animated.createAnimatedComponent(Icon);
export default function IconAnimate(props) {
  const [motion, setMotion] = useState();
  const name = props.name;
  const color = props.color;
  const size = props.size;
  const doppelganger = props.doppelganger;
  const animation = props.animation;
    const motionList = {
    explode: explode,
  };
  return (
    <View style={styles.container}>
      {doppelganger && (
        <AnimatedIcon
          name={doppelganger}
          size={size+15}
          style={[
            styles.explode,styleDoppelganger
                     ]}
          color={color}
        />
      )}
      <AnimatedIcon
        name={name}
        color={color}
        size={size}
        style={[styleAnimate]}
        onPress={motionList.[animation]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  explode: {
    position: "absolute",
  },

  fadingContainer: {
    width: 50,
    height: 50,
    backgroundColor: "powderblue",
  },
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10,
  },
  buttonRow: {
    flexDirection: "row",
    marginVertical: 16,
  },
});
