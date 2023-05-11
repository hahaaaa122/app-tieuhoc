import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { Data } from "./Data";
import { AccordionList } from "accordion-collapse-react-native";
import ListItem from "./ListItem";

const ListLesson = () => {
  const [value, setValue] = useState(Data);
  

  const head = (item) => {
    return (
      <View
        bordered
        style={{
          marginHorizontal: 38,
          height: 49,
          backgroundColor: "#674FFA",
          borderRadius: 30,
          marginVertical: 15,
          flexDirection: "row",
        }}
      >
        {/*img*/}
        <View
          style={{ width: "20%", justifyContent: "center", paddingLeft: 8 }}
        >
          <Image
            resizeMode="contain"
            style={{ position: "absolute", height: 70, width: 70, left: -10 }}
            source={require("../../../../assets/ToDo/School/Stt.png")}
          />
          <Image
            resizeMode="contain"
            style={{ height: 35, width: 35 }}
            source={item.img}
          />
        </View>
        {/*name*/}
        <View style={{ width: "50%", justifyContent: "center" }}>
          <Text style={{ fontSize: 13, fontWeight: "700", color: "#ffff" }}>
            {item.name}
          </Text>
        </View>
        {/*SS*/}
        <View style={{ width: "30%", justifyContent: "center" }}>
          <View
            style={{
              height: 3,
              width: 75,
              backgroundColor: "#E3EAFF",
              borderRadius: 3,
            }}
          />
          <View
            style={{
              height: 3,
              width: item.withSS,
              backgroundColor: "#43DF94",
              borderRadius: 3,
              position: "absolute",
            }}
          />
        </View>
      </View>
    );
  };

  const body = (item) => {
    return (
      <View>
        <View
          style={{
            position: "absolute",
            width: 3,
            backgroundColor: "#E3EAFF",
            height: '100%',
            left:63
          }}
        />
        <View style={{ padding: 10 }}>
          <ListItem />
        </View>
      </View>
    );
  };

 

  return (
    <View>
      <AccordionList
        list={Data}
        header={head}
        body={body}
        keyExtractor={(item) => `${item.id}`}
       
      />
    </View>
  );
};

export default ListLesson;

const styles = StyleSheet.create({});
