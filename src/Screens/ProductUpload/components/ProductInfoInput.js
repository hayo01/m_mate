import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

import { ColorTheme } from "@libs/Constant/Colors";

const ProductInfoInput = ({ label }) => {
  const { colors } = ColorTheme;

  return (
    <View style={{ width: "100%", paddingTop: 15 }}>
      <Text style={styles.emphasisFont}>{label}</Text>
      <TextInput
        mode="outlined"
        outlineStyle={{ backgroundColor: "transparent", borderRadius: 10, borderColor: "#DDDDDD" }}
        activeOutlineColor={colors.primary}
        contentStyle={{ fontSize: 14 }}
      />
    </View>
  );
};

export default ProductInfoInput;

const styles = StyleSheet.create({
  emphasisFont: { fontWeight: "600", fontSize: 14 },
});
