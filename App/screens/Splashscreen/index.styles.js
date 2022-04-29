import { StyleSheet, Dimensions } from "react-native";

const Screen = Dimensions.get("window");

export const styles = StyleSheet.create({
  heartLottie: {
    width: Screen.width,
    height: Screen.height,
    // marginLeft: -5,
  },
});
