import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import Ionicons from "react-native-vector-icons/Ionicons";

const CategoryBottomSheet = ({ value, setValue }) => {
  const bottomSheetRef = React.useRef(null);
  const snapPoints = React.useMemo(() => ["25%", "50%"], []);

  const items = [
    { label: "채소/과일", value: "vegieFruits" },
    { label: "수산", value: "seefood" },
    { label: "정육", value: "meat" },
    { label: "계란", value: "eggs" },
    { label: "유제품/가공", value: "milkProducts" },
    { label: "생필품", value: "Others" },
  ];

  const handleSheetChanges = React.useCallback(index => {
    console.log("handleSheetChanges", index);
  }, []);

  const handleSheetDismiss = React.useCallback(item => {
    bottomSheetRef.current?.dismiss();
    setValue(item);
  });

  return (
    <View style={{ width: "100%", paddingTop: 15 }}>
      <Text style={{ fontWeight: "600", fontSize: 14, marginBottom: 8 }}>카테고리</Text>
      <TouchableOpacity
        style={{
          width: "100%",
          height: 50,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "#DDDDDD",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 15,
        }}
        onPress={() => bottomSheetRef.current?.present()}
      >
        <Text>{value?.label ?? "선택하세요"}</Text>
        <Ionicons name="chevron-down" size={20} />
      </TouchableOpacity>

      <BottomSheetModal
        ref={bottomSheetRef}
        index={0}
        onChange={handleSheetChanges}
        snapPoints={snapPoints}
      >
        <FlatList
          data={items}
          style={{ flex: 1, backgroundColor: "#E0F6F5" }}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity onPress={() => handleSheetDismiss(item)}>
                <Text>{item.label}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </BottomSheetModal>
    </View>
  );
};

export default CategoryBottomSheet;

const styles = StyleSheet.create({});
