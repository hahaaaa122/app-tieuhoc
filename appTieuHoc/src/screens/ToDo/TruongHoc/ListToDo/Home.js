import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import BaiTap from "./BaiTap";
import TaiLieu from "./TaiLieu";
import Subject from "./Subject";

const BAI_TAP = "BAI_TAP";
const TAI_LIEU = "TAI_LIEU";

const Home = () => {
  const [page, setPage] = useState(BAI_TAP);

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
          {/*select*/}
          <View style={styles.viewHead}>
            <TouchableOpacity
              onPress={() => {
                setPage(BAI_TAP);
              }}
              style={[
                styles.buttonHead,
                { backgroundColor: page == BAI_TAP ? "#ffff" : "#6D7FB3" },
              ]}
            >
              <Text
                style={[
                  styles.textHead,
                  { color: page === BAI_TAP ? "#0030C3" : "#E1E7F8" },
                ]}
              >
                Bài tập
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setPage(TAI_LIEU);
              }}
              style={[
                styles.buttonHead,
                { backgroundColor: page == TAI_LIEU ? "#ffff" : "#6D7FB3" },
              ]}
            >
              <Text
                style={[
                  styles.textHead,
                  { color: page === TAI_LIEU ? "#0030C3" : "#E1E7F8" },
                ]}
              >
                Tài liệu
              </Text>
            </TouchableOpacity>
          </View>
          {/*screen*/}
          <View
            style={{
              height: "20%",
            }}
          >
            <Subject />
          </View>
          <View style={{ height: "80%"}}>
            <View>{page === BAI_TAP ? <BaiTap /> : null}</View>
            <View>{page === TAI_LIEU ? <TaiLieu /> : null}</View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    height: "15%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 10,
  },
  body: {
    height: "85%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "#ffff",
  },
  viewHead: {
    width: 320,
    height: 41,
    flexDirection: "row",
    position: "absolute",
    top: -40,
    left: 47,
  },
  buttonHead: {
    width: "50%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  textHead: {
    fontSize: 16,
    fontWeight: "700",
  },
});
