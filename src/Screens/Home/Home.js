import { FlatList, StyleSheet, View, useWindowDimensions } from "react-native";
import React from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { ColorTheme } from "@libs/Constant/Colors";
import EmptyProductPage from "@components/EmptyProductPage";
import MainLayout from "@components/MainLayout";
import Header from "@components/Header";
import Product from "@components/Product";
import Categories from "./components/Categories";
import { sampleProducts } from "../../../sampleProducts";

const Home = () => {
  const { colors } = ColorTheme;

  const { height, width } = useWindowDimensions();
  const tabBarHeight = useBottomTabBarHeight();
  const headerHeight = height * (height < 800 ? 0.08 : 0.063);
  const categoryHeight = height * (height < 800 ? 0.065 : 0.06);
  const productWidth = height < 800 ? 140 : 160;
  const productViewPaddingHorizontal = width < 400 ? 15 : 23;

  const numColumns = Math.floor((width - 30) / productWidth);

  const [activeTab, setActiveTab] = React.useState(0);
  const [filteredProducts, setProducts] = React.useState(sampleProducts);

  const filterProducts = activeTab => {
    return sampleProducts.filter(product => product.category === activeTab);
  };
  React.useEffect(() => {
    if (activeTab === 0) return setProducts(sampleProducts);

    setProducts(filterProducts(activeTab));
  }, [activeTab]);

  return (
    <MainLayout style={{ backgroundColor: colors.white, height: height - tabBarHeight }}>
      <View style={{ flex: height < 800 ? 0.15 : 0.145 }}>
        <Header headerHeight={headerHeight} />

        <Categories activeTab={activeTab} setActiveTab={setActiveTab} height={categoryHeight} />
      </View>

      <View
        style={{
          flex: height < 800 ? 0.85 : 0.855,
          marginTop: height < 800 ? 5 : 0,
          paddingHorizontal: productViewPaddingHorizontal,
        }}
      >
        {filteredProducts.length === 0 ? (
          <EmptyProductPage />
        ) : (
          <FlatList
            data={filteredProducts}
            showsVerticalScrollIndicator={false}
            numColumns={numColumns}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            style={{ paddingTop: 15 }}
            renderItem={({ item, index }) => <Product item={item} productWidth={productWidth} />}
          />
        )}
      </View>
    </MainLayout>
  );
};

export default Home;

const styles = StyleSheet.create({});
