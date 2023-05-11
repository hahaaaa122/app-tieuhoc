import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { allList } from "../Data";

const BaiTap = () => {
  const [select, setSelect] = useState(0);
  const renderList = ({ item, index }) => {
    const getColor = (index) => {
      const itemSelect = index + 1;
      if (itemSelect === select) {
        return " red";
      } else {
        return " #ffff";
      }
    };

    return (
      <TouchableOpacity
        onPress={() => {
          setSelect(item.id);
        }}
        style={[styles.test, styles.shawdow, { backgroundColor: "#ffff" }]}
      >
        <View
          style={{
            width: "20%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image resizeMode="contain" source={item?.img} />
        </View>
        <View
          style={{
            width: "60%",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "700", color: "#5C72AF" }}>
            {item?.name}
          </Text>

          <Text style={{ fontSize: 14, fontWeight: "500", color: "#6D7FB3" }}>
            {item.deathline}
          </Text>
        </View>
        <View style={{ width: "20%" }}>
          <Image
            style={{ position: "absolute", right: 0, height: 60, width: 80 }}
            source={item.status}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={allList}
        renderItem={renderList}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => {
          return item?.id.toString();
        }}
      />
    </View>
  );
};

export default BaiTap;

const styles = StyleSheet.create({
  test: {
    height: 110,
    width: 375,
    borderRadius: 30,
    marginVertical: 10,
    justifyContent: "center",
    marginHorizontal: 20,
    flexDirection: "row",
  },
  shawdow: {
    shadowColor: "#6D7FB3",
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    shadowOffset: { width: 0, height: 5 },
    elevation: 10,
  },
});
