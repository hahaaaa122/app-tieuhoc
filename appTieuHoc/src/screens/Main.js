import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Register from "./Register";
import SignUp from "./SignUp";
const { height } = Dimensions.get("window");
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Image } from "@rneui/themed";
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Thumbnail, List, ListItem, Separator } from 'native-base';

const SIGN_IN = "SIGN_IN";
const SIGN_UP = " SIGN_UP";

const Main = () => {
  const [page, setPage] = useState("SIGN_IN");
  return (
    <ImageBackground
      resizeMode="cover"
      style={{ height: "100%", width: "100%" }}
      source={require("../assets/ToDo/main.png")}
    >
      <View style={{ height: "40%", alignItems: "center" }}>
        <Image
          resizeMode="contain"
          style={{ height: 337, width: 353 }}
          source={require("../assets/ToDo/Group.png")}
        />
      </View>
     
      <View style={{ height: "60%", backgroundColor: "#ffff" }}>
        <Screen1 page={page} setPage={setPage} />
        <KeyboardAwareScrollView>
          <View>{page === "SIGN_IN" ? <Register /> : null}</View>
          <View>{page === "SIGN_UP" ? <SignUp /> : null}</View>
        </KeyboardAwareScrollView>
      </View>
    </ImageBackground>
  );
};

const Screen1 = ({ page, setPage }) => {
  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/*Login*/}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "60%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setPage("SIGN_IN");
            }}
            style={{
              paddingLeft: 2,
            }}
          >
            <Text
              style={{
                color: "#0030C3",
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              Đăng Nhập{" "}
            </Text>
            {page === "SIGN_IN" ? (
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  height: 2,
                  width: "100%",
                  backgroundColor: "#0030C3",
                }}
              ></View>
            ) : null}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setPage("SIGN_UP");
            }}
            style={{
              paddingLeft: 2,
            }}
          >
            <Text style={{ color: "#0030C3", fontSize: 20, fontWeight: 700 }}>
              Đăng Ký{" "}
            </Text>
            {page === "SIGN_UP" ? (
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  height: 2,
                  width: "100%",
                  backgroundColor: "#0030C3",
                }}
              ></View>
            ) : null}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Main;
