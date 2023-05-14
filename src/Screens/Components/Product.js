import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ColorTheme } from "../../Libs/Constant/Colors";

const Product = ({ item }) => {
    const { colors } = ColorTheme;

    const calculatePercentage = () => {
        return Math.floor(((item?.originPrice - item?.salePrice) / item?.originPrice) * 100);
    };

    return (
        <TouchableOpacity style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
            <Image style={{ borderRadius: 10, borderWidth: 1, width: 160, height: 160 }} />

            <View style={{ paddingVertical: 15 }}>
                <Text>{item?.name}</Text>
                <Text
                    style={{
                        color: colors.grayFont,
                        fontSize: 12,
                        textDecorationLine: "line-through",
                    }}
                >
                    {item?.originPrice}원
                </Text>
                <View style={{ flexDirection: "row", paddingTop: 8 }}>
                    <Text
                        style={[
                            styles.emphasisFont,
                            { color: colors.salePercent, paddingRight: 5 },
                        ]}
                    >
                        {calculatePercentage()}%
                    </Text>
                    <Text style={styles.emphasisFont}>{item?.salePrice}원</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default Product;

const styles = StyleSheet.create({
    emphasisFont: { fontWeight: "600", fontSize: 16 },
});
