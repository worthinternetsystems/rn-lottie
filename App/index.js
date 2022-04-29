import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import { Feed } from "./screens/Feed";
import { Splashscreen } from "./screens/Splashscreen";

const AppStack = createStackNavigator();
const AppStackScreen = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Splashscreen"
      component={Splashscreen}
      options={() => ({
        headerTitle: "Splashscreen",
      })}
    />
  </AppStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <AppStackScreen />
  </NavigationContainer>
);
