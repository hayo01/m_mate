import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "@screens/Home/Home";
import ProductDetail from "@screens/ProductDetail/ProductDetail";
import BottomNavigation from "./BottomNavigation";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Bottom"
      screenOptions={{
        headerBackTitle: "",
        headerShown: false,
      }}
    >
      <Stack.Screen name="Bottom" component={BottomNavigation} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
