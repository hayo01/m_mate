import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomNavigation from "./BottomNavigation";
import Home from "@screens/Home/Home";
import ProductDetail from "@screens/ProductDetail/ProductDetail";
import CameraScreen from "@screens/ProductUpload/CameraScreen";
import ProductUpload from "@screens/ProductUpload/ProductUpload";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Bottom"
      screenOptions={{ headerBackTitle: "", headerShown: false }}
    >
      <Stack.Screen name="Bottom" component={BottomNavigation} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
      <Stack.Screen name="ProductUpload" component={ProductUpload} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
