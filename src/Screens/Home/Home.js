import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    useWindowDimensions,
} from "react-native";
import React from "react";
import MainLayout from "../Components/MainLayout";
import { ColorTheme } from "../../Libs/Constant/Colors";
import Header from "../Components/Header";
import Categories from "./components/Categories";
import Product from "../Components/Product";
import { sampleProducts } from "../../../sampleProducts";

const Home = () => {
    const { colors } = ColorTheme;
    const { height, width } = useWindowDimensions();

    const [activeTab, setActiveTab] = React.useState(0);

    const numColumns = Math.floor((width - 30) / (160 + 30));

    return (
        <MainLayout style={{ backgroundColor: colors.white }}>
            <Header />

            <Categories activeTab={activeTab} setActiveTab={setActiveTab} />

            <View style={{ paddingHorizontal: 20, height: height * 0.8 }}>
                <FlatList
                    data={sampleProducts}
                    showsVerticalScrollIndicator={false}
                    numColumns={numColumns}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                    style={{ paddingTop: 20 }}
                    renderItem={({ item, index }) => {
                        //TODO: category 별로 걸러줘야 함

                        return <Product item={item} />;
                    }}
                />
            </View>
        </MainLayout>
    );
};

export default Home;

const styles = StyleSheet.create({});
