import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";

import { ColorTheme } from "@libs/Constant/Colors";
import MainLayout from "@components/MainLayout";
import GoBackHeader from "@components/GoBackHeader";
import ProductInfoInput from "./components/ProductInfoInput";
import CategoryBottomSheet from "./components/CategoryBottomSheet";

const ProductUpload = ({ route }) => {
  const { colors } = ColorTheme;
  const { height } = useWindowDimensions();

  const productPhotoUri = route?.params?.photo ?? null;

  const [value, setValue] = React.useState(null);

  return (
    <MainLayout style={{ backgroundColor: colors.white }}>
      <View style={{ flex: 0.075 }}>
        <GoBackHeader title={"상품등록"} />
      </View>

      <View style={{ flex: 0.9 }}>
        <ScrollView
          style={{ paddingHorizontal: 20, paddingVertical: 5 }}
          contentContainerStyle={{ alignItems: "center", paddingBottom: 15 }}
          showsVerticalScrollIndicator={false}
        >
          {productPhotoUri && (
            <Image
              source={{ uri: productPhotoUri }}
              style={{ width: "100%", height: 330, borderRadius: 10, marginBottom: 10 }}
            />
          )}

          <ProductInfoInput label={"위치"} />
          <ProductInfoInput label={"제품명"} />

          <CategoryBottomSheet value={value} setValue={setValue} />

          <ProductInfoInput label={"가격"} />
          <ProductInfoInput label={"할인가격"} />
        </ScrollView>
      </View>

      <View style={{ flex: height < 800 ? 0.07 : 0.075, justifyContent: "flex-end" }}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: height * 0.065,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <Text style={{ color: colors.onPrimary, fontSize: 16 }}>완료</Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

export default ProductUpload;

const styles = StyleSheet.create({});
