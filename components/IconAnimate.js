import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export default function IconAnimate() {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const sizeAnimate = useRef(new Animated.Value(1)).current;
  const explotion = useRef(new Animated.Value(0)).current;

  const SizeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.parallel([
      Animated.sequence([
        Animated.timing(explotion, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(explotion, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]),

      Animated.sequence([
        Animated.timing(sizeAnimate, {
          toValue: 1.5,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(sizeAnimate, {
          toValue: 0.2,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(sizeAnimate, {
          toValue: 1.2,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(sizeAnimate, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(sizeAnimate, {
          toValue: 0.9,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(sizeAnimate, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <AnimatedIcon
        name="heart-o"
        size={100}
        style={[
          styles.explode,
          {
            transform: [{ scale: explotion }],
            opacity: explotion,
          },
        ]}
        color="#f45"
      />
      <AnimatedIcon
        name="heart"
        style={{ transform: [{ scale: sizeAnimate }] }}
        color="#f45"
        size={50}
        onPress={SizeIn}
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
