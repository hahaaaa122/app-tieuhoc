import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { Sub } from "../Data";
const Subject = () => {
  const [select, setSelect] = useState(1);
  const getColor = (id) => {
    const active = id === select;
    if (active) {
      return "rgba(211,211,255,0.5)";
    } else {
      return "#ffff";
    }
  };
  return (
    <View style={styles.viewOutSide}>
      {Sub.map(({ id, name, img }) => {
        return (
          <TouchableOpacity
            key={id}
            onPress={() => {
              setSelect(id);
            }}
            style={[styles.viewInSide, { backgroundColor: getColor(id) }]}
          >
            <Image
              resizeMode="contain"
              style={{ width: 43, height: 50 }}
              source={img}
            />
            <Text style={styles.text}>{name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Subject;

const styles = StyleSheet.create({
  viewOutSide: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  viewInSide: {
    justifyContent: "center",
    alignItems: "center",
    width: 79,
    height: 103,
    borderRadius: 20,
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    color: "#0030C3",
  },
});
