import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar, View } from "react-native";
import StackNavigation from "./src/Navigations/StackNavigation";
import { ColorTheme } from "@libs/Constant/Colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function App() {
  const { colors } = ColorTheme;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <NavigationContainer>
          <BottomSheetModalProvider>
            <StackNavigation />
          </BottomSheetModalProvider>
        </NavigationContainer>
      </View>
    </GestureHandlerRootView>
  );
}
