import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar, View } from "react-native";
import StackNavigation from "./src/Navigations/StackNavigation";
import { ColorTheme } from "@libs/Constant/Colors";

export default function App() {
  const { colors } = ColorTheme;

  return (
    <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </View>
  );
}
