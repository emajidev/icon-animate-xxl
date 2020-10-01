import { useRef } from "react";
import { Animated } from "react-native";

var sizeAnimate = new Animated.Value(1);
var explotion = new Animated.Value(0);

export const styleAnimate = {
  transform: [{ scale: sizeAnimate }],
};
export const styleDoppelganger = {
  transform: [{ scale: explotion }],
  opacity: explotion,
};
export const explode = () => {
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
