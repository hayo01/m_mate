import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ColorTheme } from "@libs/Constant/Colors";
import { getCurrency } from "@libs/CommonUtils";

const Product = ({ item, productWidth }) => {
  const { colors } = ColorTheme;
  const navigation = useNavigation();

  const calculatePercentage = () => {
    return Math.floor(((item?.originPrice - item?.salePrice) / item?.originPrice) * 100);
  };

  return (
    <TouchableOpacity
      style={{ paddingVertical: 5, paddingHorizontal: 10 }}
      onPress={() => navigation.navigate("ProductDetail", { item: item })}
    >
      <Image
        source={item.image}
        style={{
          borderRadius: 10,
          width: productWidth ?? 160,
          height: productWidth ?? 160,
        }}
      />

      <View style={{ paddingVertical: 15 }}>
        <Text>{item?.name ?? "-"}</Text>
        <Text
          style={{
            color: colors.grayFont,
            fontSize: 12,
            textDecorationLine: "line-through",
          }}
        >
          {getCurrency(item?.originPrice) ?? "-"}원
        </Text>
        <View style={{ flexDirection: "row", paddingTop: 8 }}>
          <Text style={[styles.emphasisFont, { color: colors.salePercent, paddingRight: 5 }]}>
            {calculatePercentage() ?? "-"}%
          </Text>
          <Text style={styles.emphasisFont}>{getCurrency(item?.salePrice) ?? "-"}원</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  emphasisFont: { fontWeight: "600", fontSize: 16 },
});
