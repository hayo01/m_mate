import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import { ColorTheme } from "@libs/Constant/Colors";

const EmptyProductPage = () => {
  const { colors } = ColorTheme;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("@assets/ohno.png")}
        style={{ width: 80, height: 80, marginBottom: 20 }}
      />
      <Text style={{ color: colors.grayTitle, fontSize: 13 }}>죄송합니다.</Text>
      <Text style={{ color: colors.grayTitle, fontSize: 13 }}>등록된 상품이 없습니다.</Text>
    </View>
  );
};

export default EmptyProductPage;

const styles = StyleSheet.create({});
