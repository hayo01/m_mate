import { Image, Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ColorTheme } from "@libs/Constant/Colors";
import Home from "@screens/Home/Home";
import ProductUpload from "@screens/ProductUpload/ProductUpload";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const { colors } = ColorTheme;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          ...Platform.select({
            ios: {
              shadowColor: colors.black,
              shadowOpacity: 0.6,
              shadowOffset: { height: 2, width: 0 },
            },
            android: { elevation: 3 },
          }),
        },
        tabBarLabelPosition: "below-icon",
      }}
    >
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("@assets/icons/home.png")}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? colors.primary : colors.black,
              }}
            />
          ),
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.black,
        }}
      />
      <Tab.Screen
        name="Hot"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("@assets/icons/sale.png")}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? colors.primary : colors.black,
              }}
            />
          ),
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.black,
        }}
      />
      <Tab.Screen
        name="등록"
        component={ProductUpload}
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                borderRadius: 50,
                backgroundColor: colors.primary,
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                marginTop: -20,
                ...Platform.select({
                  ios: {
                    shadowColor: colors.black,
                    shadowOpacity: 0.5,
                    shadowOffset: { height: 1.2, width: 0 },
                  },
                  android: { elevation: 3 },
                }),
              }}
            >
              <Image
                source={require("@assets/icons/camera.png")}
                style={{ width: 25, height: 25 }}
              />
            </View>
          ),
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.black,
        }}
      />
      <Tab.Screen
        name="My Mate"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("@assets/icons/person.png")}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? colors.primary : colors.black,
              }}
            />
          ),
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.black,
        }}
      />
      <Tab.Screen
        name="전체보기"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("@assets/icons/menu.png")}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? colors.primary : colors.black,
              }}
            />
          ),
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.black,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
