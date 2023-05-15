import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const GoBackHeader = ({}) => {
  const { height } = useWindowDimensions();
  const headerHeight = height * (height < 800 ? 0.08 : 0.063);

  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: headerHeight,
        paddingHorizontal: 10,
      }}
    >
      <TouchableOpacity
        style={{ flex: 1, alignItems: "flex-start" }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={25} />
      </TouchableOpacity>

      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ fontSize: 16 }}>상품상세</Text>
      </View>

      <View style={{ flexDirection: "row", flex: 1, justifyContent: "flex-end" }}>
        <Pressable onPress={() => navigation.navigate("Home")} style={{ zIndex: 1 }}>
          <Image
            source={require("@assets/icons/home.png")}
            style={{ width: 20, height: 20, marginRight: 15 }}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("")} style={{ zIndex: 1 }}>
          <Image source={require("@assets/icons/bell.png")} style={{ width: 24, height: 24 }} />
        </Pressable>
      </View>
    </View>
  );
};

export default GoBackHeader;

const styles = StyleSheet.create({});
