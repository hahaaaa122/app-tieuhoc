import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { ImageBackground } from "react-native";
import { Image } from "@rneui/themed";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";

const MainToDo = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView>
      <ImageBackground
        style={{ height: "100%", width: "100%" }}
        resizeMode="cover"
        source={require("../../../assets/ToDo/main.png")}
      >
        <View style={{ position: "absolute", top: 25, left: 20 }}>
          <Image
            style={{ height: 30, width: 70 }}
            source={require("../../../assets/Logo.png")}
          />
        </View>
        <View style={{ position: "absolute", top: 50, right: -50 }}>
          <Image
            style={{ height: 250, width: 250 }}
            source={require("../../../assets/ToDo/bear.png")}
          />
        </View>

        <View style={{ justifyContent: "center", paddingTop: "20%" }}>
          <ImageBackground
            style={{ height: "100%", width: "100%", marginTop: "50%" }}
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
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "20%",
                marginBottom: 10,
              }}
            >
              <Text
                style={{ fontWeight: "700", fontSize: 24, color: "#0030C3" }}
              >
                Nguyễn Thu Lan
              </Text>
              <Text
                style={{ fontWeight: "800", fontSize: 16, color: "#0030C3" }}
              >
                {" "}
                Lớp 2
              </Text>
            </View>

            <TouchableOpacity
              style={styles.test}
              onPress={() => {
                navigation.navigate("Information");
              }}
            >
              <Image
                style={{ height: 50, width: 50 }}
                source={require("../../../assets/ToDo/settings.png")}
              />
              <Text
                style={{ fontWeight: "400", fontSize: 16, color: "#0030C3" }}
              >
                Thông tin tài khoản
              </Text>
              <Image
                style={{ height: 14, width: 7 }}
                source={require("../../../assets/ToDo/VectorGo.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.test}
              onPress={() => {
                navigation.navigate("Pack");
              }}
            >
              <Image
                style={{ height: 50, width: 50 }}
                source={require("../../../assets/ToDo/reuse.png")}
              />
              <Text
                style={{ fontWeight: "400", fontSize: 16, color: "#0030C3" }}
              >
                Gói tài khoản
              </Text>
              <Image
                style={{ height: 14, width: 7 }}
                source={require("../../../assets/ToDo/VectorGo.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Sp");
              }}
              style={styles.test}
            >
              <Image
                style={{ height: 50, width: 50 }}
                source={require("../../../assets/ToDo/information.png")}
              />
              <Text
                style={{ fontWeight: "400", fontSize: 16, color: "#0030C3" }}
              >
                Hướng dẫn và hỗ trợ
              </Text>
              <Image
                style={{ height: 14, width: 7 }}
                source={require("../../../assets/ToDo/VectorGo.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal} style={styles.test}>
              <Image
                style={{ height: 50, width: 50 }}
                source={require("../../../assets/ToDo/logout.png")}
              />
              <Text
                style={{ fontWeight: "400", fontSize: 16, color: "#0030C3" }}
              >
                Đăng Xuất
              </Text>
              <Image
                style={{ height: 14, width: 7 }}
                source={require("../../../assets/ToDo/VectorGo.png")}
              />
            </TouchableOpacity>
            <Modal isVisible={isModalVisible}>
              <View
                style={{
                  backgroundColor: "#ffff",
                  height: 200,
                  flexDirection: "row",
                  borderRadius: 30,
                }}
              >
                <Image
                  style={{ height: 186, width: 126 }}
                  source={require("../../../assets/ToDo/gauPo.png")}
                />
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Text
                    style={{
                      fontWeight: "700",
                      fontSize: 16,
                      color: "#0030C3",
                    }}
                  >
                    Bạn có chắc chắn muốn
                  </Text>
                  <Text
                    style={{
                      fontWeight: "700",
                      fontSize: 16,
                      color: "#0030C3",
                    }}
                  >
                    đăng xuất?
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      paddingTop: 15,
                    }}
                  >
                    <TouchableOpacity
                    onPress={() => navigation.goBack()}
                      style={{
                        width: 103,
                        height: 27,
                        backgroundColor: "#E3EAFF",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: 5,
                        borderRadius: 25,
                      }}
                    >
                      <Text
                        style={{
                          color: "#6D7FB3",
                          fontWeight: "500",
                          fontSize: 14,
                        }}
                      >
                        Đăng Xuất
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={toggleModal}
                      style={{
                        width: 103,
                        height: 27,
                        backgroundColor: "#E3EAFF",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 25,
                      }}
                    >
                      <Text
                        style={{
                          color: "#6D7FB3",
                          fontWeight: "500",
                          fontSize: 14,
                        }}
                      >
                        Ở Lại
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </ImageBackground>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default MainToDo;

const styles = StyleSheet.create({
  test: {
    with: 338,
    height: 70,
    borderRadius: 30,
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    paddingHorizontal: 30,
    flexDirection: "row",
    backgroundColor: "#ffff",
    shadowColor: "#0030C3",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 20,
  },
});
