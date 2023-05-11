import {
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
const { height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SIGNIN = "SIGN_IN";
const SIGNUP = "SIGN_UP";

const Register = () => {
  const [visible, setVisible] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation();
  const handlerChangeVisible = () => {
    setVisible(!visible);
  };
  const handlerChecked = () => {
    setSelection(!isSelected);
  };
  return (
    <KeyboardAwareScrollView>
      <View
        style={{
          width: "100%",
          // backgroundColor: "green",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/*SDT*/}
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: "#6D7FB3",
              marginBottom: 10,
            }}
          >
            Số Điện Thoại
          </Text>
          <TextInput
            keyboardType="numeric"
            style={{
              height: 46,
              width: 300,
              backgroundColor: "#E3EAFF",
              borderRadius: 100,
              paddingLeft: 20,
            }}
          />
        </View>
        {/*MK*/}
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: "#6D7FB3",
              marginBottom: 10,
            }}
          >
            Mật Khẩu
          </Text>
          <TextInput
            autoCapitalize="none"
            secureTextEntry={visible ? false : true}
            style={{
              height: 46,
              width: 300,
              backgroundColor: "#E3EAFF",
              borderRadius: 100,
              paddingLeft: 20,
              fontSize: 15,
            }}
          />
          <TouchableOpacity
            onPress={handlerChangeVisible}
            style={{ position: "absolute", right: 10, top: 50 }}
          >
            <Image
              source={require("../assets/Vector.png")}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        </View>
        {/*remind*/}
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "space-between",
            width: "70%",
          }}
        >
          {/*CheckBox*/}
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={handlerChecked}>
              {isSelected ? (
                <Image
                  style={{ height: 20, width: 20 }}
                  source={require("../assets/checked.png")}
                />
              ) : (
                <Image
                  style={{ height: 20, width: 20 }}
                  source={require("../assets/unchecked.png")}
                />
              )}
            </TouchableOpacity>
            <Text style={{ color: "#6D7FB3" }}> Ghi Nhớ Đăng Nhập </Text>
          </View>
          <TouchableOpacity>
            <Text style={{ color: "#6D7FB3" }}>Quên Mật Khẩu?</Text>
          </TouchableOpacity>
        </View>
        {/*DangNhap*/}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("NavigatiorTabBar");
          }}
        >
          <View
            style={{
              marginTop: 25,
              backgroundColor: "#0030C3",
              width: 298,
              height: 47,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 30,
            }}
          >
            <Text style={{ color: "#ffff" }}>Đăng Nhập</Text>
          </View>
        </TouchableOpacity>
        {/*DangNhapKhac*/}
        <View style={{ marginTop: 20 }}>
          <Text>Hoặc đăng nhập nhanh bằng</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: 298,
              marginTop: 20,
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderWidth: 1,
                  justifyContent: "center",
                  width: 143,
                  height: 46,
                  borderColor: "#C9D6FC",
                  borderRadius: 30,
                }}
              >
                <Image source={require("../assets/gg.png")} />
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 14,
                    color: "#0030C3",
                    fontWeight: "400",
                  }}
                >
                  Google
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderWidth: 1,
                  justifyContent: "center",
                  width: 143,
                  height: 46,
                  borderColor: "#C9D6FC",
                  borderRadius: 30,
                }}
              >
                <Image source={require("../assets/fb.png")} />
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 14,
                    color: "#0030C3",
                    fontWeight: "400",
                  }}
                >
                  FaceBook
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
export default Register;
