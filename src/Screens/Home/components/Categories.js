import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ColorTheme } from "@libs/Constant/Colors";

const categories = [
  { index: 0, name: "전체" },
  { index: 1, name: "채소/과일" },
  { index: 2, name: "수산" },
  { index: 3, name: "정육" },
  { index: 4, name: "계란" },
  { index: 5, name: "유제품/가공" },
  { index: 6, name: "생필품" },
];

const Categories = ({ activeTab, setActiveTab, style, height }) => {
  const { colors } = ColorTheme;

  return (
    <View
      style={{
        height: height,
        // alignContent: "space-between",
        borderBottomColor: colors.grayLine,
        borderBottomWidth: 1,
        ...style,
      }}
    >
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{
                height: "100%",
                justifyContent: "center",
                paddingHorizontal: 15,
                borderBottomColor: colors.primary,
                borderBottomWidth: activeTab === item.index ? 2 : 0,
              }}
              onPress={() => setActiveTab(item.index)}
            >
              <Text
                style={{
                  fontWeight: "700",

                  color: activeTab === item.index ? colors.black : colors.grayTitle,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
