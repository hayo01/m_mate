import { Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import React from "react";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

import { ColorTheme } from "../../Libs/Constant/Colors";
import MainLayout from "../Components/MainLayout";
import { getCurrency } from "../../Libs/CommonUtils";
import GoBackHeader from "../Components/GoBackHeader";

const ProductDetail = ({ route }) => {
  const { height, width } = useWindowDimensions();
  const { colors } = ColorTheme;

  const { item } = route.params;
  const calculatePercentage = () => {
    return Math.floor(((item?.originPrice - item?.salePrice) / item?.originPrice) * 100);
  };

  const [liked, setLiked] = React.useState(false);

  return (
    <MainLayout style={{ backgroundColor: colors.white }}>
      <GoBackHeader />

      <Image
        source={item.image}
        style={{
          height: width <= 500 ? width : 500,
          maxHeight: 500,
          maxWidth: 500,
          resizeMode: "stretch",
          alignSelf: "center",
        }}
      />

      <View
        style={[
          styles.flexRow,
          {
            justifyContent: "space-between",
            height: height * 0.06,
            borderBottomColor: colors.grayLine,
            borderBottomWidth: 1,
            paddingHorizontal: 10,
          },
        ]}
      >
        <View style={styles.flexRow}>
          <Image
            source={require("@assets/sample/userPhoto.png")}
            style={{
              height: 30,
              width: 30,
              borderRadius: 50,
              marginRight: 8,
            }}
          />
          <Text style={styles.emphasisFont}>{item.writer.name ?? "user"}</Text>
        </View>
        <View style={styles.flexRow}>
          <Image
            source={require("@assets/icons/smile1.png")}
            style={{ height: 20, width: 20, marginRight: 8 }}
          />
          <View>
            <Text style={[styles.emphasisFont, { color: colors.primary }]}>
              LV {item.writer.level ?? 0}
            </Text>
            <Text style={{ color: colors.grayFont, fontSize: 8 }}>Mate level</Text>
          </View>
        </View>
      </View>

      <View style={{ padding: 15 }}>
        <View style={[styles.flexRow, { justifyContent: "space-between" }]}>
          <Text style={{ fontSize: 20 }}>{item.name ?? "-"}</Text>
          <View style={styles.flexRow}>
            <FontAwesome
              name={!liked ? "heart-o" : "heart"}
              size={20}
              onPress={() => setLiked(!liked)}
            />
            <Ionicons name="share-social-outline" size={20} style={{ marginLeft: 8 }} />
          </View>
        </View>
        <Text style={{ paddingTop: 8 }}>{item.store.name ?? "Store"}</Text>

        <Text
          style={{
            color: colors.grayFont,
            fontSize: 12,
            textDecorationLine: "line-through",
            paddingTop: 15,
          }}
        >
          {getCurrency(item.originPrice) ?? "-"}원
        </Text>

        <View style={[styles.flexRow, { paddingTop: 8 }]}>
          <Text style={[styles.emphasisSaleFont, { color: colors.salePercent, paddingRight: 5 }]}>
            {calculatePercentage()}%
          </Text>
          <Text style={styles.emphasisSaleFont}>{getCurrency(item.salePrice) ?? "-"}원</Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: colors.primary,
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: height * 0.065,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: colors.onPrimary, fontSize: 16 }}>지도보기</Text>
      </TouchableOpacity>
    </MainLayout>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  emphasisFont: { fontWeight: "600", fontSize: 14 },
  emphasisSaleFont: { fontWeight: "600", fontSize: 20 },
  flexRow: { flexDirection: "row", alignItems: "center" },
});
