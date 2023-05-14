import { Image, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import { ColorTheme } from "../../Libs/Constant/Colors";
import { TextInput } from "react-native-paper";

const Header = () => {
    const { colors } = ColorTheme;
    const { height } = useWindowDimensions();

    const [focus, setFocus] = React.useState(false);

    return (
        <View
            style={{
                backgroundColor: colors.primary,
                height: height * 0.065,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <View style={{ flex: 1, alignItems: "center" }}>
                <Image
                    source={require("../../../assets/header_logo.png")}
                    style={{ width: 76, height: 14 }}
                />
            </View>

            <View style={{ flex: 3, alignItems: "center", paddingHorizontal: 10 }}>
                <TextInput
                    style={{
                        backgroundColor: colors.white,
                        width: 221,
                        // height: 30,
                        borderRadius: 5,
                        borderWidth: !focus ? 1 : 1.5,
                        borderColor: !focus ? colors.black : colors.black,
                    }}
                    dense={true}
                    underlineColor="transparent"
                    activeUnderlineColor="transparent"
                    cursorColor={colors.black}
                    onFocus={() => setFocus(true)}
                    left={
                        <TextInput.Icon
                            icon={() => (
                                <Image
                                    source={require("../../../assets/icons/search.png")}
                                    style={{ width: 16, height: 16 }}
                                />
                            )}
                        />
                    }
                />
            </View>

            <View style={{ flex: 0.4, alignItems: "center" }}>
                <Image
                    source={require("../../../assets/icons/bell.png")}
                    style={{ width: 22, height: 22 }}
                />
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({});
