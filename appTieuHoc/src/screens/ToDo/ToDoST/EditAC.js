import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Dimensions } from "react-native";
const { height } = Dimensions.get("screen");

const EditAC = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);

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
            marginTop: 15,
            marginHorizontal: 20,
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
            Đổi Mật Khẩu
          </Text>
        </View>
        <View style={{ position: "absolute", top: 120, right: -50 }}>
          <Image
            style={{ height: 250, width: 250 }}
            source={require("../../../assets/ToDo/bear.png")}
          />
        </View>
        <KeyboardAwareScrollView>
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
              <View style={{ position: "absolute", left: "37%", top: -40 }}>
                <Image
                  style={{ height: 115, width: 115 }}
                  source={require("../../../assets/ToDo/Ava.png")}
                />
              </View>
              <View
                style={{
                  paddingTop: 30,
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "700",
                      fontSize: 24,
                      color: "#0030C3",
                      paddingRight: 1,
                    }}
                  >
                    Nguyễn Thu Lan
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image source={require("../../../assets/ToDo/flower.png")} />
                  <Text
                    style={{
                      fontWeight: "800",
                      fontSize: 16,
                      color: "#0030C3",
                    }}
                  >
                    Lớp 2
                  </Text>
                </View>
              </View>
              {/*MKHT*/}
              <View style={{ marginHorizontal: 35 }}>
                <Text
                  style={{ fontWeight: "400", fontSize: 14, color: "#6D7FB3" }}
                >
                  Mật khẩu hiện tại
                </Text>
                <TextInput
                  style={{
                    backgroundColor: "#E3EAFF",
                    borderRadius: 30,
                    marginTop: 5,
                    paddingLeft: 15,
                    height:50
                  }}
                />
              </View>
              {/*MKM*/}
              <View style={{ marginHorizontal: 35, marginVertical: 20 }}>
                <Text
                  style={{ fontWeight: "400", fontSize: 14, color: "#6D7FB3" }}
                >
                  Mật Khẩu Mới
                </Text>

                <TextInput
                  style={{
                    backgroundColor: "#E3EAFF",
                    borderRadius: 30,
                    marginTop: 5,
                    paddingLeft: 15,
                    height:50
                    
                  }}
                  secureTextEntry={visible ? false : true}
                />
                <TouchableOpacity
                  style={{ position: "absolute", right: 15, top: 45 }}
                  onPress={() => {
                    setVisible(!visible);
                  }}
                >
                  <Image source={require("../../../assets/Vector.png")} />
                </TouchableOpacity>
              </View>
              {/*MKMM*/}
              <View style={{ marginHorizontal: 35 }}>
                <Text
                  style={{ fontWeight: "400", fontSize: 14, color: "#6D7FB3" }}
                >
                  Nhập lại mật khẩu mới
                </Text>

                <TextInput
                  style={{
                    backgroundColor: "#E3EAFF",
                    borderRadius: 30,
                    marginTop: 5,
                    paddingLeft: 15,
                    height:50
                  }}
                  secureTextEntry={visible1 ? false : true}
                />
                <TouchableOpacity
                  style={{ position: "absolute", right: 15, top: 45 }}
                  onPress={() => {
                    setVisible1(!visible1);
                  }}
                >
                  <Image source={require("../../../assets/Vector.png")} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  height: 47,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#0030C3",
                  marginHorizontal: 40,
                  marginTop: 30,
                  borderRadius: 30,
                }}
              >
                <Text
                  style={{ fontWeight: "900", fontSize: 20, color: "#ffff" }}
                >
                  Cập Nhập
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default EditAC;
