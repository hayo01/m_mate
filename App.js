import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar, View } from "react-native";
import StackNavigation from "./src/Navigations/StackNavigation";
import { ColorTheme } from "./src/Libs/Constant/Colors";

export default function App() {
    const { colors } = ColorTheme;

    return (
        <View
            style={{
                flex: 1,
                marginTop: StatusBar.currentHeight,
                backgroundColor: colors.white,
            }}
        >
            <NavigationContainer>
                <StackNavigation />
            </NavigationContainer>
        </View>
    );
}
