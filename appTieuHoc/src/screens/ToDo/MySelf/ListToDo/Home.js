import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Home = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        resizeMode="cover"
        style={{ height: "100%", width: "100%" }}
        source={require("../../../../assets/Chung/hinhnen.png")}
      >
        {/*Header*/}
        <View style={styles.header}>
          <Image
            resizeMode="contain"
            style={{ height: 40, width: 92 }}
            source={require("../../../../assets/Logo.png")}
          />
          <View style={{ flexDirection: "row" }}>
            <FontAwesome name="bell" size={34} color={"#F7C92B"} />
            <Image
              resizeMode="center"
              style={{ height: 40, width: 40, marginLeft: 20 }}
              source={require("../../../../assets/ToDo/Ava.png")}
            />
          </View>
        </View>
        {/*Body*/}
        <View style={styles.body}>
          {/*Item1*/}
          <ImageBackground
            resizeMode="stretch"
            style={styles.imgHeader}
            source={require("../../../../assets/Tuhoc/tuhoc1.png")}
          >
            <View style={styles.viewHeader}>
              <Text style={styles.textHeader}>
                Phép cộng và trừ trong phạm vi 10
              </Text>
              <Text style={styles.textHeader_seccond}>
                Hãy tiếp tục bài học gần nhất ở đây nhé.
              </Text>
            </View>
            <View style={styles.viewButton}>
              <TouchableOpacity style={styles.button}>
                <FontAwesome name="caret-right" color={"#FF84A2"} size={25} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          {/*Item2*/}
          <View style={{ height: 70 }} />
          <ImageBackground
            resizeMode="stretch"
            style={styles.imgBack}
            source={require("../../../../assets/Tuhoc/tuhoc2.png")}
          >
            <Image
              style={styles.imgBody}
              source={require("../../../../assets/Tuhoc/monhoc/maytinh.png")}
            />
            <TouchableOpacity style={styles.touch}>
              <Text style={{ fontWeight: "700", color: "#ffff", fontSize: 20 }}>
                Toán
              </Text>
              <FontAwesome name="caret-right" color={"#ffff"} size={25} />
            </TouchableOpacity>
          </ImageBackground>
          {/*Item3*/}
          <View style={{ height: 10 }} />
          <ImageBackground
            resizeMode="stretch"
            style={styles.imgBack}
            source={require("../../../../assets/Tuhoc/tuhoc3.png")}
          >
            <Image
              style={styles.imgBody}
              source={require("../../../../assets/Tuhoc/monhoc/dictionary.png")}
            />
            <TouchableOpacity style={styles.touch1}>
              <Text style={{ fontWeight: "700", color: "#ffff", fontSize: 20 }}>
                Tiếng Anh
              </Text>
              <FontAwesome name="caret-right" color={"#ffff"} size={25} />
            </TouchableOpacity>
          </ImageBackground>
          {/*Item4*/}
          <View style={{ height: 10 }} />
          <ImageBackground
            resizeMode="stretch"
            style={styles.imgBack}
            source={require("../../../../assets/Tuhoc/tuchoc4.png")}
          >
            <Image
              style={styles.imgBody}
              source={require("../../../../assets/Tuhoc/monhoc/book.png")}
            />
            <TouchableOpacity style={styles.touch2}>
              <Text style={{ fontWeight: "700", color: "#ffff", fontSize: 20 }}>
                Tiếng Việt
              </Text>
              <FontAwesome name="caret-right" color={"#ffff"} size={25} />
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    height: "25%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 10,
  },

  body: {
    height: "75%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "#ffff",
  },
  imgHeader: {
    position: "absolute",
    height: 150,
    width: 375,
    left: 10,
    top: -90,
    flexDirection: "row",
  },
  viewHeader: {
    width: "70%",
    paddingLeft: 24,
    paddingTop: 20,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "700",
    color: "#ffff",
    marginBottom: 8,
  },
  textHeader_seccond: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffff",
  },
  viewButton: {
    width: "30%",
    paddingTop: 22,
    alignItems: "center",
  },
  button: {
    height: 48,
    width: 48,
    backgroundColor: "#ffff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  imgBody: {
    height: 60,
    width: 60,
    marginLeft: 15,
    marginTop: 13,
    marginBottom: 8,
  },
  touch: {
    backgroundColor: "rgba(50,54,188,0.8)",
    flexDirection: "row",
    marginRight: 170,
    height: 44,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    gap: 10,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
  },
  imgBack: {
    height: 145,
    width: 374,
    marginLeft: 10,
  },
  touch1: {
    backgroundColor: "rgba(251,105,91,0.8)",
    flexDirection: "row",
    marginRight: 170,
    height: 44,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    gap: 10,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
  },
  touch2: {
    backgroundColor: "rgba(0,255,133,0.8)",
    flexDirection: "row",
    marginRight: 170,
    height: 44,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    gap: 10,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
  },

});
