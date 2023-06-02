import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useFocusEffect, useIsFocused, useNavigation } from "@react-navigation/native";
import { Camera, CameraType } from "expo-camera";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { ColorTheme } from "@libs/Constant/Colors";

const { colors } = ColorTheme;

const CameraScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const cameraRef = React.useRef();
  const [camera, setCamera] = React.useState({
    type: CameraType.back,
    hasCameraPermission: null,
  });

  // 카메라에 대한 접근 권한을 얻을 수 있는지 묻는 함수
  const openCameraHandler = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();

    // 권한을 획득하면 status가 granted 상태가 됩니다.
    if (status === "granted") {
      setCamera(prevState => ({ ...prevState, hasCameraPermission: true }));
      return;
    } else {
      Alert.alert("", "카메라 접근 허용은 필수입니다.", [
        { text: "RETRY", onPress: () => openCameraHandler() }, //TODO: 재시도가 가능하게끔 만들어야 함
      ]);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      openCameraHandler();
    }, [])
  );

  const toggleCameraType = () => {
    setCamera(prevState => ({
      ...prevState,
      type: prevState.type === CameraType.back ? CameraType.front : CameraType.back,
    }));
  };

  const takePictureHandler = async () => {
    // cameraRef가 없으면 해당 함수가 실행되지 않게 가드
    if (!cameraRef.current) return;

    // takePictureAsync를 통해 사진을 찍습니다.
    // 찍은 사진은 base64 형식으로 저장합니다.
    await cameraRef.current.takePictureAsync({ base64: true }).then(data => {
      navigation.navigate("ProductUpload", { photo: data.uri });
    });
  };

  const closeCamera = async () => {
    navigation.goBack();
  };

  // Camera permissions are still loading
  if (!camera.hasCameraPermission) return <View />;
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: colors.black, flexDirection: "row", flex: 1 }}>
        <View style={[styles.button, { alignItems: "flex-start" }]}>
          <MaterialIcons name="flash-off" color={colors.white} size={25} />
        </View>
        <TouchableOpacity style={[styles.button, { alignItems: "flex-end" }]} onPress={closeCamera}>
          <MaterialCommunityIcons name="close" color={colors.white} size={30} />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 9 }}>
        {isFocused && (
          <Camera
            style={{ flex: 1 }}
            type={camera.type}
            ref={cameraRef}
            onMountError={error => {
              console.log("camera error >>>>> ", error);
              openCameraHandler();
            }}
          />
        )}
      </View>

      <View style={{ backgroundColor: colors.black, flexDirection: "row", flex: 1.3 }}>
        <TouchableOpacity style={[styles.button, { alignItems: "flex-start" }]}>
          <MaterialIcons name="photo-library" color={colors.white} size={25} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { alignItems: "center" }]}
          onPress={takePictureHandler}
        >
          <View style={{ borderColor: colors.white, borderWidth: 4, borderRadius: 50 }}>
            <MaterialCommunityIcons name="circle" color={colors.white} size={50} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { alignItems: "flex-end" }]}
          onPress={toggleCameraType}
        >
          <MaterialCommunityIcons name="camera-flip" color={colors.white} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  button: { flex: 1, justifyContent: "center", paddingHorizontal: 15, zIndex: 1 },
});
