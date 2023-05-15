import { Image, StyleSheet, View, useWindowDimensions } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { ColorTheme } from "~/Libs/Constant/Colors";

const Header = ({ style, headerHeight }) => {
  const { colors } = ColorTheme;

  const { height } = useWindowDimensions();
  const logoWidth = headerHeight * (height < 800 ? 1.3 : 1.5);
  const logoHeight = headerHeight * (height < 800 ? 0.26 : 0.3);

  return (
    <View
      style={{
        backgroundColor: colors.primary,
        height: headerHeight,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        ...style,
      }}
    >
      <View style={{ flex: 1, alignItems: "center", marginRight: 5 }}>
        <Image
          source={require("@assets/header_logo.png")}
          style={{ width: logoWidth, height: logoHeight }}
          resizeMode="stretch"
        />
      </View>

      <View style={styles.searchTextInputView}>
        <Image
          source={require("@assets/icons/search.png")}
          style={{ width: 16, height: 16, marginRight: -25, zIndex: 1 }}
        />
        <TextInput
          style={[
            styles.searchTextInput,
            {
              backgroundColor: colors.white,
              borderColor: colors.black,
            },
          ]}
          dense={true}
          underlineColor="transparent"
          activeUnderlineColor="transparent"
          cursorColor={colors.black}
        />
      </View>

      <View style={{ flex: 0.2, marginLeft: -5, marginRight: 10 }}>
        <Image source={require("@assets/icons/bell.png")} style={{ width: 22, height: 22 }} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  searchTextInputView: {
    flex: 2.5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  searchTextInput: {
    width: "100%",
    maxHeight: 35,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 8,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    borderWidth: 1,
    paddingLeft: 15,
  },
});
