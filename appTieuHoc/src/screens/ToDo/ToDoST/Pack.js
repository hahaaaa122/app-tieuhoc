import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Mock = [
  {
    id: 1,
    img: <Image source={require("../../../assets/ToDo/Course.png")} />,
    name: "Gói School-Primary",
    timeIn: "10/03/2023",
    timeOut: "10/03/2024",
  },
  {
    id: 2,
    img: <Image source={require("../../../assets/ToDo/Course.png")} />,
    name: "Gói School-Primary",
    timeIn: "10/03/2023",
    timeOut: "10/03/2024",
  },
  {
    id: 3,
    img: <Image source={require("../../../assets/ToDo/Course.png")} />,
    name: "Gói School-Primary",
    timeIn: "10/03/2023",
    timeOut: "10/03/2024",
  },
  {
    id: 4,
    img: <Image source={require("../../../assets/ToDo/Course.png")} />,
    name: "Gói School-Primary",
    timeIn: "10/03/2023",
    timeOut: "10/03/2024",
  },
  {
    id: 5,
    img: <Image source={require("../../../assets/ToDo/Course.png")} />,
    name: "Gói School-Primary",
    timeIn: "10/03/2023",
    timeOut: "10/03/2024",
  },
];
const Pack = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {item.img}
        <Text
          style={{
            marginVertical: 15,
            fontWeight: "700",
            fontSize: 24,
            color: "#6D7FB3",
          }}
        >
          {item.name}
        </Text>
        <Text>Ngày kích hoạt: {item.timeIn}</Text>
        <Text style={{ marginVertical: 15 }}> Hết hạn: {item.timeOut}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <ImageBackground
        style={{ height: "100%", width: "100%" }}
        source={require("../../../assets/ToDo/main.png")}
        resizeMode="cover"
      >
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            marginHorizontal: 15,
            marginTop: 15,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={require("../../../assets/ToDo/left.png")} />
            <Text style={{ fontWeight: "700", fontSize: 12, color: "#ffff" }}>
              Trở lại
            </Text>
          </TouchableOpacity>
          <Image
            style={{ height: 30, width: 80 }}
            source={require("../../../assets/Logo.png")}
          />
          <Text style={{ fontWeight: "700", fontSize: 12, color: "#ffff" }}>
            Gói học tập
          </Text>
        </View>
        <View style={{ position: "absolute", left: "12%", top: 50 }}>
          <Image
            resizeMode="cover"
            source={require("../../../assets/ToDo/Group.png")}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            paddingTop: "25%",
          }}
        >
          <ImageBackground
            style={{
              height: "100%",
              width: "100%",
              marginTop: "50%",
              paddingTop: 50,
            }}
            source={require("../../../assets/ToDo/ellipse.png")}
          >
            <FlatList
              data={Mock}
              renderItem={renderItem}
              keyExtractor={(item) => {
                item.id;
              }}
            />
          </ImageBackground>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Pack;
