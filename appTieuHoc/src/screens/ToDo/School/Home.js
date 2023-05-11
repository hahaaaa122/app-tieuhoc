import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Mock = [
  {
    id: 1,
    img: (
      <Image
        style={{ width: 31, height: 36 }}
        source={require("../../../assets/ToDo/School/toan.png")}
      />
    ),
    name: "Bài tập số 1",
    height: 40,
  },
  {
    id: 2,
    img: (
      <Image
        style={{ width: 31, height: 36 }}
        source={require("../../../assets/ToDo/School/tienganh.png")}
      />
    ),
    name: "Bài tập số 1",
    height: 30,
  },
  {
    id: 3,
    img: (
      <Image
        style={{ width: 31, height: 36 }}
        source={require("../../../assets/ToDo/School/tiengviet.png")}
      />
    ),
    name: "Bài tập số 1",
    height: 60,
  },
  {
    id: 4,
    img: (
      <Image
        style={{ width: 31, height: 36 }}
        source={require("../../../assets/ToDo/School/tiengviet.png")}
      />
    ),
    name: "Bài tập số 1",
    height: 5,
  },
  {
    id: 5,
    img: (
      <Image
        style={{ width: 31, height: 36 }}
        source={require("../../../assets/ToDo/School/tiengviet.png")}
      />
    ),
    name: "Bài tập số 1",
    height: 5,
  },
  {
    id: 6,
    img: (
      <Image
        style={{ width: 31, height: 36 }}
        source={require("../../../assets/ToDo/School/tiengviet.png")}
      />
    ),
    name: "Bài tập số 1",
    height: 5,
  },
  {
    id: 7,
    img: (
      <Image
        style={{ width: 31, height: 36 }}
        source={require("../../../assets/ToDo/School/tiengviet.png")}
      />
    ),
    name: "Bài tập số 1",
    height: 20,
  },
  {
    id: 7,
    img: (
      <Image
        style={{ width: 31, height: 36 }}
        source={require("../../../assets/ToDo/School/tiengviet.png")}
      />
    ),
    name: "Bài tập số 1",
    height: 20,
  },
  {
    id: 7,
    img: (
      <Image
        style={{ width: 31, height: 36 }}
        source={require("../../../assets/ToDo/School/tiengviet.png")}
      />
    ),
    name: "Bài tập số 1",
    height: 20,
  },
  {
    id: 7,
    img: (
      <Image
        style={{ width: 31, height: 36 }}
        source={require("../../../assets/ToDo/School/tiengviet.png")}
      />
    ),
    name: "Bài tập số 1",
    height: 20,
  },
  {
    id: 7,
    img: (
      <Image
        style={{ width: 31, height: 36 }}
        source={require("../../../assets/ToDo/School/tiengviet.png")}
      />
    ),
    name: "Bài tập số 1",
    height: 20,
  },
  {
    id: 7,
    img: (
      <Image
        style={{ width: 31, height: 36 }}
        source={require("../../../assets/ToDo/School/tiengviet.png")}
      />
    ),
    name: "Bài tập số 1",
    height: 20,
  },
];
const Home = () => {
  const navigation = useNavigation();
  const renderItem = ({ item, index }) => {
    return (
      <View
        key={index}
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {item.img}
        <View>
          <Text>Bài tập số 1</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                height: 3,
                width: 91,
                backgroundColor: "#E3EAFF",
                marginRight: 5,
              }}
            ></View>
            <View
              style={{
                height: 3,
                width: item.height,
                backgroundColor: "#43DF94",
                marginRight: 5,
                position: "absolute",
              }}
            ></View>
            <Text style={{ fontSize: 8, fontWeight: "400", color: "#2B4182" }}>
              70%
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: 108,
            height: 30,
            borderRadius: 27,
            backgroundColor: "#43DF94",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "700",
                color: "#ffff",
                paddingRight: 10,
              }}
            >
              Làm Ngay
            </Text>
            <Image source={require("../../../assets/ToDo/School/trigle.png")} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ImageBackground
        style={{ height: "100%", width: "100%" }}
        source={require("../../../assets/ToDo/School/Bg.png")}
      >
        {/*header*/}
        <View
          style={{
            height: "20%",
            flexDirection: "row",
            paddingTop: 20,
            justifyContent: "space-between",
            paddingHorizontal: 25,
          }}
        >
          <Image
            style={{ height: 35, width: 84 }}
            source={require("../../../assets/Logo.png")}
          />
          <View>
            <View
              style={{
                height: 31,
                width: 105,
                borderWidth: 1,
                borderRadius: 30,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#E3EAFF",
                marginRight: 35,
              }}
            >
              <Text>Natra</Text>
            </View>
            <Image
              style={{ position: "absolute", right: 0, top: -12 }}
              source={require("../../../assets/ToDo/School/avatar.png")}
            />
          </View>
        </View>
        {/*body*/}
        <View
          style={{
            height: "80%",
            backgroundColor: "#ffff",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <View style={{ position: "absolute", left: 35, top: -40 }}>
            <ImageBackground
              style={{ height: 130, width: 340, paddingLeft: 20 }}
              source={require("../../../assets/ToDo/School/learn.png")}
            >
              <Text style={{ fontSize: 24, fontWeight: "700", color: "#ffff" }}>
                Tự Học
              </Text>

              <Text style={{ fontWeight: "900", fontSize: 12, color: "#ffff" }}>
                Luyện đọc bài Chiếc nhãn vở
              </Text>
              <Text
                style={{
                  fontWeight: "900",
                  fontSize: 12,
                  color: "#ffff",
                  marginBottom: 12,
                }}
              >
                cho năm học mới
              </Text>
              <TouchableOpacity
                style={{
                  width: 114,
                  height: 30,
                  backgroundColor: "#ffff",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: 21,
                  flexDirection: "row",
                  paddingHorizontal: 20,
                }}
              >
                <Text
                  style={{ fontWeight: "700", fontSize: 14, color: "#FF84A2" }}
                >
                  Học tiếp
                </Text>
                <Image
                  source={require("../../../assets/ToDo/School/trigle.png")}
                />
              </TouchableOpacity>
            </ImageBackground>
          </View>
          {/*MonHoc*/}
          <View
            style={{
              height: "35%",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 40,
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("MathToDo");
              }}
              style={{ alignItems: "center" }}
            >
              <Image
                style={{ width: 69, height: 80 }}
                source={require("../../../assets/ToDo/School/toan.png")}
              />
              <Text
                style={{ fontSize: 14, fontWeight: "700", color: "#2B4182" }}
              >
                Toán
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: "center" }}>
              <Image
                style={{ width: 69, height: 80 }}
                source={require("../../../assets/ToDo/School/tienganh.png")}
              />
              <Text
                style={{ fontSize: 14, fontWeight: "700", color: "#2B4182" }}
              >
                Tiếng Anh
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: "center" }}>
              <Image
                style={{ width: 69, height: 80 }}
                source={require("../../../assets/ToDo/School/tiengviet.png")}
              />
              <Text
                style={{ fontSize: 14, fontWeight: "700", color: "#2B4182" }}
              >
                Tiếng Việt
              </Text>
            </TouchableOpacity>
          </View>
          {/*homeWork*/}
          <View
            style={{
              height: "65%",
              paddingHorizontal: 40,
              paddingTop: 15,
            }}
          >
            <TouchableOpacity onPress={()=>{
               navigation.navigate("LuyenTap");
            }}>
              <Text>Test</Text>
            </TouchableOpacity>
            <Text style={{ fontWeight: "700", fontSize: 24, color: "#2B4182" }}>
              Bài tập về nhà
            </Text>
            <View style={{ height: "100%", marginTop: 20, paddingLeft: 20 }}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={Mock}
                keyExtractor={(item, index) => {
                  return item.id;
                }}
                renderItem={renderItem}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
