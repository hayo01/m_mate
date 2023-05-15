import { FlatList, StyleSheet, View, useWindowDimensions } from "react-native";
import React from "react";

import { ColorTheme } from "../../Libs/Constant/Colors";
import MainLayout from "../Components/MainLayout";
import Header from "@components/Header";
import Categories from "./components/Categories";
import Product from "../Components/Product";
import { sampleProducts } from "../../../sampleProducts";

const Home = () => {
  const { colors } = ColorTheme;
  const { height, width } = useWindowDimensions();
  const headerHeight = height * (height < 800 ? 0.08 : 0.063);
  const categoryHeight = height * (height < 800 ? 0.065 : 0.06);
  const productViewHeight = height - (headerHeight + categoryHeight);
  const productSize = height < 800 ? 140 : 160;

  const numColumns = Math.floor((width - 30) / productSize);

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
    <MainLayout style={{ backgroundColor: colors.white }}>
      <Header headerHeight={headerHeight} />

      <Categories activeTab={activeTab} setActiveTab={setActiveTab} height={categoryHeight} />

      <View style={{ paddingHorizontal: 15, paddingBottom: 10, height: productViewHeight }}>
        <FlatList
          data={filteredProducts}
          showsVerticalScrollIndicator={false}
          numColumns={numColumns}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          style={{ paddingTop: 20 }}
          renderItem={({ item, index }) => <Product item={item} productSize={productSize} />}
        />
      </View>
    </MainLayout>
  );
};

export default Home;

const styles = StyleSheet.create({});
