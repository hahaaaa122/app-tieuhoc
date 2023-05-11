import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


const Sp = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ImageBackground
        style={{ height: "100%", width: "100%" }}
        source={require("../../../assets/ToDo/main.png")}
        resizeMode="cover"
      >
        {/*header*/}
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 15,
            marginHorizontal: 20,
            marginBottom: "35%",
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
          <Image
            style={{ height: 47, width: 47 }}
            source={require("../../../assets/ToDo/Ava.png")}
          />
        </View>
        {/*body*/}

        <ImageBackground
          style={{
            height: "100%",
            alignItems: "center",
            paddingTop: "20%",
          }}
          source={require("../../../assets/ToDo/ellipse.png")}
        >
          <Image
            style={{
              width: 136,
              height: 136,
              position: "absolute",
              left: 135,
              top: -80,
            }}
            source={require("../../../assets/ToDo/Security.png")}
          />

          <Text style={styles.textMain}>CHÍNH SÁCH VÀ DỊCH VỤ</Text>

          <View style={styles.View}>
            <Image
              style={styles.img}
              source={require("../../../assets/ToDo/IconSP/securityIcon.png")}
            />
            <Text style={styles.textId}>Chính sách bảo mật</Text>
          </View>
          <View style={styles.View}>
            <Image
              style={styles.img}
              source={require("../../../assets/ToDo/IconSP/contract.png")}
            />
            <Text style={styles.textId}>Điều khoản và dịch vụ</Text>
          </View>

          <Text style={styles.textMain}>HỖ TRỢ KHÁCH HÀNG </Text>

          <View style={styles.View}>
            <Image
              style={styles.img}
              source={require("../../../assets/ToDo/IconSP/tongDai.png")}
            />
            <View>
              <Text style={styles.textId}>Tổng đài: 096.960.2660</Text>
              <Text style={styles.textId}>(8h00 - 21h00 hàng ngày)</Text>
            </View>
          </View>
          <View style={styles.View}>
            <Image
              style={styles.img}
              source={require("../../../assets/ToDo/IconSP/hotro.png")}
            />
            <Text style={styles.textId}>Trang hỗ trợ Edmicro IELTS</Text>
          </View>
          <View style={styles.View}>
            <Image
              style={styles.img}
              source={require("../../../assets/ToDo/IconSP/hotroKH.png")}
            />
            <Text style={styles.textId}>Email: ielts@edmicro.vn</Text>
          </View>
          <Text style={styles.textMain}>KẾT NỐI VỚI CHÚNG TÔI</Text>
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
                <Image source={require("../../../assets/gg.png")} />
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
                <Image source={require("../../../assets/fb.png")} />
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
        </ImageBackground>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Sp;

const styles = StyleSheet.create({
  textMain: {
    fontWeight: "700",
    fontSize: 16,
    color: "#0030C3",
    marginVertical: 15,
  },
  textId: {
    fontWeight: "400",
    fontSize: 12,
    color: "#0030C3",
    paddingLeft: 20,
    paddingVertical: 5,
  },
  img: {
    width: 22,
    height: 25,
  },
  View: {
    flexDirection: "row",
    width: "50%",
    alignItems: "center",
  },
});
