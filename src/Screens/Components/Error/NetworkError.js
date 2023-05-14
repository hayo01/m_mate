import { StyleSheet, Text, View } from "react-native";
import React from "react";

const NetworkError = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Please check your network.</Text>
        </View>
    );
};

export default NetworkError;

const styles = StyleSheet.create({});
