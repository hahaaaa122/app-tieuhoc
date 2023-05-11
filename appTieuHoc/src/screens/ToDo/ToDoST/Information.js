import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import DatePicker from "react-native-date-picker";
import { Dropdown } from "react-native-element-dropdown";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];

const Information = () => {
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [num, setNum] = useState("0385236686");
  const [email, setEmail] = useState("hahung@gmail.com");
  const [value, setValue] = useState(null);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (
    <SafeAreaView>
      <ImageBackground
        style={{ height: "100%", width: "100%" }}
        source={require("../../../assets/ToDo/main.png")}
        resizeMode="cover"
      >
        <View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 15,
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
              style={{ height: 30, width: 80, marginLeft: 60, marginRight: 30 }}
              source={require("../../../assets/Logo.png")}
            />
            <Text style={{ fontWeight: "700", fontSize: 12, color: "#ffff" }}>
              Thông tin tài khoản
            </Text>
          </View>
          <View style={{ position: "absolute", top: 120, right: -50 }}>
            <Image
              style={{ height: 250, width: 250 }}
              source={require("../../../assets/ToDo/bear.png")}
            />
          </View>
        </View>
        <KeyboardAwareScrollView>
          <View
            style={{
              justifyContent: "center",
              paddingTop: "15%",
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
              <TouchableOpacity
                style={{ position: "absolute", left: "37%", top: -40 }}
              >
                <Image
                  style={{ height: 115, width: 115 }}
                  source={require("../../../assets/ToDo/Ava.png")}
                />
                <Image
                  style={{ left: 80, top: -25 }}
                  source={require("../../../assets/ToDo/cam.png")}
                />
              </TouchableOpacity>
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
                  <Image source={require("../../../assets/ToDo/pen.png")} />
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
              {/*SDT + NS*/}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginHorizontal: "10%",
                }}
              >
                <View style={{ width: 154 }}>
                  <Text
                    style={{
                      top: 12,
                      fontSize: 12,
                      fontWeight: "400",
                      color: "#6D7FB3",
                    }}
                  >
                    Số điện thoại
                  </Text>

                  <TextInput
                    style={{
                      fontSize: 14,
                      fontWeight: "400",
                      color: "#6D7FB3",
                      marginTop: 20,
                      borderBottomColor:'#6D7FB3',
                      borderBottomWidth:1
                      
                    }}
                    value={num}
                    keyboardType="numeric"
                    onChangeText={(text) => {
                      setNum(text);
                    }}
                  />
                </View>
                <View style={{ width: 154 }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "400",
                      color: "#6D7FB3",
                    }}
                  >
                    Ngày Sinh
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setOpen(true);
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginRight: 5,
                      
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "400",
                          color: "#6D7FB3",

                        }}
                      >
                        {`${date.getDate()}-${
                          date.getMonth() + 1
                        }-${date.getFullYear()}`}
                      </Text>
                      <Image
                        resizeMode="cover"
                        source={require("../../../assets/ToDo/lich.png")}
                      />
                    </View>

                    <View
                      style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#6D7FB3",
                        position:'absolute',
                        bottom:-9
                      }}
                    ></View>
                  </TouchableOpacity>
                  <DatePicker
                    modal
                    mode="date"
                    open={open}
                    date={date}
                    onConfirm={(newdate) => {
                      setDate(newdate);
                      setOpen(false);
                    }}
                    onCancel={() => {
                      setOpen(false);
                    }}
                  />
                </View>
              </View>
              {/*Email*/}
              <View style={{ marginHorizontal: 40, marginTop: 10 }}>
                <Text
                  style={{
                    fontWeight: "400",
                    fontSize: 12,
                    color: "#6D7FB3",
                    position: "absolute",
                    
                  }}
                >
                  E-mail
                </Text>
                <TextInput
                  style={{
                    fontSize: 16,
                    fontWeight: "400",
                    color: "#6D7FB3",
                    marginTop: 20,
                    borderBottomWidth: 1,
                    borderBottomColor: "#6D7FB3",
                  }}
                  value={email}
                  onChangeText={(text) => {
                    setEmail(text);
                  }}
                />
              </View>
              {/*Thanhpho*/}
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  marginHorizontal: 40,
                  marginTop: 20,
                }}
              >
                <View style={{ width: "49%" }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "400",
                      color: "#6D7FB3",
                    }}
                  >
                    Tỉnh / Thành phố
                  </Text>
                  <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Chọn Tỉnh / Thành Phố"
                    searchPlaceholder="Search..."
                    value={value}
                    onChange={(item) => {
                      setValue(item.value);
                    }}
                  />
                </View>
                <View style={{ width: "45%" }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "400",
                      color: "#6D7FB3",
                    }}
                  >
                    Quận / Huyện
                  </Text>
                  <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Chọn Quận / Huyện"
                    searchPlaceholder="Search..."
                    value={value}
                    onChange={(item) => {
                      setValue(item.value);
                    }}
                  />
                </View>
              </View>
              {/*DMK*/}
              <View style={{ marginHorizontal: 40, marginTop: 25 }}>
                <TouchableOpacity onPress={() => navigation.navigate("EditAC")}>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "400",
                        color: "#0030C3",
                      }}
                    >
                      Đổi Mật Khẩu
                    </Text>
                    <Image
                      style={{ width: 10, height: 10, marginTop: 4 }}
                      source={require("../../../assets/ToDo/mk.png")}
                    />
                  </View>

                  <View
                    style={{
                      width: "30%",
                      height: 1,
                      backgroundColor: "#6D7FB3",
                    }}
                  ></View>
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

export default Information;
const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderBottomColor: "#6D7FB3",
    borderBottomWidth: 0.5,
    width: "100%",
  },
  placeholderStyle: {
    fontSize: 12,
    color: "#6D7FB3",
  },
  selectedTextStyle: {
    fontSize: 14,
    color: "#6D7FB3",
  },
  iconStyle: {
    width: 20,
    height: 20,
    tintColor: "#6D7FB3",
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },
});
