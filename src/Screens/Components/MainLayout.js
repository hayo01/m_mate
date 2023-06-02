import { View, Platform, KeyboardAvoidingView, SafeAreaView } from "react-native";
import React from "react";
import { useNetInfo } from "@react-native-community/netinfo";

import NetworkError from "../Components/Error/NetworkError";

const MainLayout = props => {
  const netInfo = useNetInfo();

  return (
    <React.Fragment>
      <SafeAreaView style={{ flex: 0 }} />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "center", ...props.style }}>
          <KeyboardAvoidingView
            enabled={false}
            style={{ flex: 1, width: "100%" }}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
          >
            {netInfo.isConnected ? props.children : <NetworkError netInfo={netInfo} />}
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
};

export default MainLayout;
