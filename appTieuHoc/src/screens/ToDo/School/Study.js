import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  LayoutAnimation,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import DropDown from "./dropDown/DropDown";

import Accordion from "react-native-collapsible/Accordion";
import AccordionList from "./AccordionList/AccordionList";
import ListLesson from "./ListLesson/ListLesson";

const data = [
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
    id: 5,
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
    id: 6,
    name: "kết nối tri thức",
    img: (
      <Image
        resizeMode="stretch"
        style={{ height: "100%", width: "100%" }}
        source={require("../../../assets/ToDo/School/sachtoan3.png")}
      />
    ),
  },
];

const Study = ({ route }) => {
  const navigation = useNavigation();
  const [isShow, setIsShow] = useState(false);
  const [subDr, setSubDr] = useState(null);
  const [imgDr, setImgDr] = useState(null);
  const [picked, setPicked] = useState(false);
  const sub = route.params?.sub;
  const img = route.params?.imgSb;

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
          <TouchableOpacity
            onPress={() => navigation.navigate("NavigatiorTabBar")}
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
        <View
          style={{
            height: "80%",
            backgroundColor: "#fff",
            borderTopLeftRadius: 35,
            borderTopRightRadius: 35,
          }}
        >
          <View style={{ flex: 1 }}>
            <View style={{ height: 60 }}></View>
            <View style={{ flex: 1 }}>
              <ListLesson />
            </View>
          </View>
          <ImageBackground
            style={{
              width: 333,
              height: 85,
              position: "absolute",
              top: -35,
              left: 38,
            }}
            source={require("../../../assets/ToDo/School/bosach.png")}
          >
            <View
              style={{
                height: 80,
                width: 60,
                top: -15,
                left: 20,
                position: "absolute",
              }}
            >
              {picked ? imgDr : img}
            </View>

            <Text
              style={{
                fontSize: 24,
                fontWeight: "900",
                color: "#ffff",
                paddingLeft: "30%",
              }}
            >
              Toán
            </Text>
            <TouchableOpacity
              onPress={() => setIsShow(!isShow)}
              style={{
                paddingLeft: "30%",
                flexDirection: "row",

                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "500", color: "#ffff" }}>
                {picked ? subDr : sub}
              </Text>
              <Image
                style={{ width: 9, height: 5, marginLeft: 5 }}
                resizeMode="stretch"
                source={require("../../../assets/ToDo/School/dropDown.png")}
              />
            </TouchableOpacity>
            {isShow && (
              <View style={{ marginTop: 50 }}>
                <DropDown
                  data={data}
                  isShow={isShow}
                  setIsShow={setIsShow}
                  setPicked={setPicked}
                  setSubDr={setSubDr}
                  setImgDr={setImgDr}
                />
              </View>
            )}
          </ImageBackground>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Study;
