import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const SignUp = ({ navigation }) => {
  return (
    <View style={{ alignItems: "center", height: "100%" }}>
      <Text
        style={{
          fontWeight: "700",
          fontSize: 22,
          color: "#6D7FB3",
          marginTop: '10%',
        }}
      >
        Qua số điện thoại
      </Text>
      <Text style={{ fontWeight: "400", fontSize: 12, color: "#6D7FB3" }}>
        Nhắn tin qua cú pháp
      </Text>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          width: 300,
          height: 65,
          borderRadius: 30,
          backgroundColor: "#E3EAFF",
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            fontSize: 13,
            color: "#0030C3",
          }}
        >
          {" "}
          OLKID DK gửi 8100{" "}
        </Text>
        <Text style={{ fontWeight: "400", fontSize: 13, color: "#0030C3" }}>
          ( Cước phí tin nhắn: 1.500đ)
        </Text>
      </View>
      <Text
        style={{
          fontWeight: "400",
          fontSize: 10,
          color: "#0030C3",
          marginTop: 10,
        }}
      >
        * Điều kiện SĐT chưa được liên kết với tài khoản
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 400,
          color: "#6D7FB3",
          marginTop: 50,
        }}
      >
        ----Hoặc----
      </Text>
      <Text style={{ fontWeight: "400", fontSize: 14, color: "#6D7FB3" }}>
        đăng ký ngay bằng:
      </Text>
      <View style={{ marginTop: 20 }}>
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
  );
};

export default SignUp;
