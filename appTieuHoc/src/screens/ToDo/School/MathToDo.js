import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";

const mock = [
  {
    id: 1,
    name: "Chân trời sáng tạo",
    img: (
      <Image
        resizeMode="stretch"
        style={{ height: "100%", width: "100%" }}
        source={require("../../../assets/ToDo/School/sachtoan2.png")}
      />
    ),
  },
  {
    id: 2,
    name: "Cánh diều",
    img: (
      <Image
        resizeMode="stretch"
        style={{ height: "100%", width: "100%" }}
        source={require("../../../assets/ToDo/School/sachtoan2.png")}
      />
    ),
  },
  {
    id: 3,
    name: "kết nối tri thức",
    img: (
      <Image
        resizeMode="stretch"
        style={{ height: "100%", width: "100%" }}
        source={require("../../../assets/ToDo/School/sachtoan3.png")}
      />
    ),
  },
  {
    id: 4,
    name: "kết nối tri thức",
    img: (
      <Image
        resizeMode="stretch"
        style={{ height: "100%", width: "100%" }}
        source={require("../../../assets/ToDo/School/sachtoan3.png")}
      />
    ),
  },
  {
    id: 5,
    name: "kết nối tri thức",
    img: (
      <Image
        resizeMode="stretch"
        style={{ height: "100%", width: "100%" }}
        source={require("../../../assets/ToDo/School/sachtoan1.png")}
      />
    ),
  },
  {
    id: 6,
    name: "kết nối tri thức",
    img: (
      <Image
        resizeMode="stretch"
        style={{ height: "100%", width: "100%" }}
        source={require("../../../assets/ToDo/School/sachtoan2.png")}
      />
    ),
  },
];

const MathToDo = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [sub, setSub] = useState(null);
  const [imgSb, setImgSb] = useState(null);

  const renderItem = ({ item, index }) => {
    const toggleModal = () => {
      setModalVisible(true);
      setSub(item.name);
      setImgSb(item.img);
    };
    return (
      <ImageBackground
        key={index}
        style={{
          height: 191,
          width: 210,
        }}
        resizeMode="cover"
        source={require("../../../assets/ToDo/School/tu.png")}
      >
        <TouchableOpacity
          onPress={toggleModal}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{ height: 135, width: 94, marginTop: 20, marginBottom: 5 }}
          >
            {item.img}
          </View>

          <Text style={{ fontWeight: "700", fontSize: 14, color: "#fff" }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      </ImageBackground>
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
            height: "10%",
            flexDirection: "row",
            paddingTop: 20,
            justifyContent: "space-between",
            paddingHorizontal: 25,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: 70,
              height: 30,
            }}
          >
            <Image
              style={{ width: 9, height: 15, marginRight: 10 }}
              source={require("../../../assets/ToDo/School/Back.png")}
            />
            <Text style={{ fontWeight: "700", fontSize: 14, color: "#ffff" }}>
              Trở lại
            </Text>
          </TouchableOpacity>
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
        <View style={{ height: "20%", justifyContent: "center" }}>
          {/*title*/}
          <View
            style={{
              height: "25%",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 35,
            }}
          >
            <Image
              style={{ height: 125, width: 125 }}
              source={require("../../../assets/ToDo/School/fox.png")}
            />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "700", fontSize: 32, color: "#ffff" }}>
                Toán
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: 180,
                  paddingTop: 5,
                }}
              >
                <Image
                  style={{ height: 21, width: 21 }}
                  source={require("../../../assets/ToDo/School/loa.png")}
                />
                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{ fontWeight: "400", fontSize: 14, color: "#ffff" }}
                  >
                    Chọn bộ sách mà bạn
                  </Text>
                  <Text
                    style={{ fontWeight: "400", fontSize: 14, color: "#ffff" }}
                  >
                    muốn học
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            height: "70%",
          }}
        >
          <FlatList
            numColumns={2}
            data={mock}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={renderItem}
          />
          <Modal isVisible={isModalVisible}>
            <ImageBackground
            resizeMode="stretch"
              style={{
                height: 501,
                width: 327,
                borderRadius: 30,
                marginLeft: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
              source={require("../../../assets/ToDo/School/rabit.png")}
            >
              <Text style={{ fontSize: 14, fontWeight: "700", color: "#fff" }}>
                Bạn đã chọn bộ sách
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  color: "#ffff",
                  paddingBottom: 10,
                }}
              >
                {sub}
              </Text>
              <View style={{marginBottom: 10 }}>
                <Image
                  resizeMode="stretch"
                  style={{ height: 255, width: 181 }}
                  source={require("../../../assets/ToDo/School/test.png")}
                />
              </View>
              <View style={{ flexDirection: "row", marginRight: 80 }}>
                <View style={{ marginRight: 20 }}>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!isModalVisible)}
                    style={{
                      height: 65,
                      width: 65,
                      borderRadius: 100,
                      backgroundColor: "#fff",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 20,
                    }}
                  >
                    <Image
                      style={{ width: 48, height: 48 }}
                      source={require("../../../assets/ToDo/School/reloadSchool.png")}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{ fontSize: 14, fontWeight: "700", color: "#fff" }}
                  >
                    Chọn lại
                  </Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Study", { sub: sub, imgSb: imgSb });
                      setModalVisible(false);
                    }}
                    style={{
                      height: 65,
                      width: 65,
                      borderRadius: 100,
                      backgroundColor: "#fff",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 20,
                    }}
                  >
                    <Image
                      style={{ width: 48, height: 48 }}
                      source={require("../../../assets/ToDo/School/Next.png")}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{ fontSize: 14, fontWeight: "700", color: "#fff" }}
                  >
                    Xác nhận
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </Modal>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default MathToDo;
