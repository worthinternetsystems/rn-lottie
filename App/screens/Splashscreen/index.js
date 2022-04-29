import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";

import { styles } from "./index.styles";

export const Splashscreen = () => {
  const animation = React.useRef(null);
  // const isFirstRun = React.useRef(true);

  React.useEffect(() => {
    animation.current.play(0, 180);
  }, []);

  return (
    <View>
      <LottieView
        ref={animation}
        style={styles.heartLottie}
        source={require("../../assets/lottie/splashscreen.json")}
        // loop
        autoplay
      />
    </View>
  );
};
