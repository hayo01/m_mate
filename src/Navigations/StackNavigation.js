import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Screens/Home/Home";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerBackTitle: "",
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
};

export default StackNavigation;
