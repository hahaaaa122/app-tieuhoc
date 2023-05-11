import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  VirtualizedList,
} from 'react-native';
import React, {useState} from 'react';
import TimeUp from './TimeUp/TimeUp';
import {useNavigation} from '@react-navigation/native';
import LessonSussecc from './LessonSussecc/LessonSussecc';
import ForTest from './ForTest/ForTest';
import HtmlData from './HTML/HtmlData';
import Modal from 'react-native-modal';
import FastImage from 'react-native-fast-image';
const widthMH = Dimensions.get('window').width;

const LuyenTap = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <SafeAreaView>
      {/* Header */}
      <View style={{height: '25%'}}>
        <ImageBackground
          style={styles.imgBG}
          resizeMode="stretch"
          source={require('../../../../assets/Luyentap/Bg.png')}>
          <View style={styles.viewHeader}>
            {/* goBack */}
            <TouchableOpacity
              onPress={() => {
                setIsVisible(true);
              }}>
              <Image
                resizeMode="contain"
                style={{width: 24, height: 24}}
                source={require('../../../../assets/Luyentap/close.png')}
              />
            </TouchableOpacity>
            {/* TimeUp */}
            <View>
              <TimeUp />
            </View>
            <View />
          </View>
          {/* Body */}
          <View style={styles.viewBody}>
            <View style={{marginLeft: 20}}>
              <View style={styles.viewDid} />
              <View style={styles.viewSS} />
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{color: '#ffff', fontSize: 10, fontWeight: '700'}}>
                70%
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      {/* Body */}
      <View style={{height: '75%', backgroundColor: '#ffff'}}>
        <View style={styles.ViewToDo}>
          <View style={{height: '10%'}}>
            <LessonSussecc />
          </View>
          <View style={{height: '10%'}}>
            <ForTest />
          </View>
          <View style={{height: '80%'}}>
            <HtmlData />
          </View>
        </View>
      </View>
      <Modal isVisible={isVisible}>
        <View style={styles.viewPopUp}>
          <FastImage
            resizeMode={FastImage.resizeMode.contain}
            style={styles.imgPopUp}
            source={require('../../../../assets/Tuhoc/success/Cao.png')}
          />
          <Text style={styles.textPopUp}>Bạn chắc chắn muốn</Text>
          <Text style={styles.textPopUp}>dừng bài tập này?</Text>
          <View style={{flexDirection: 'row', paddingTop: 10}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('NavigatiorTabBar');
                setIsVisible(false);
              }}
              style={[styles.touchPopUp, {marginRight: 10}]}>
              <Text style={styles.textOut}>Thoát</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIsVisible(!isVisible);
              }}
              style={styles.touchPopUp}>
              <Text style={styles.textOut}>Ở lại</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default LuyenTap;

const styles = StyleSheet.create({
  imgBG: {
    width: widthMH,
    height: 217,
  },
  ViewToDo: {
    position: 'absolute',
    height: 861,
    width: '100%',
    top: -90,
    backgroundColor: '#ffff',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  viewHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 25,
    height: 35,
    alignItems: 'center',
    marginTop: 16,
  },
  viewBody: {
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  viewDid: {
    height: 10,
    width: 286,
    backgroundColor: '#ffff',
    borderRadius: 11,
  },
  viewSS: {
    height: 10,
    width: 180,
    backgroundColor: '#43DF94',
    borderRadius: 11,
    position: 'absolute',
    left: 0,
  },
  viewPopUp: {
    height: 162,
    width: 245,
    backgroundColor: '#fff',
    marginHorizontal: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgPopUp: {
    width: 152,
    height: 163,
    position: 'absolute',
    top: '-60%',
    left: '15%',
  },
  textPopUp: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2B4182',
  },
  touchPopUp: {
    width: 72,
    height: 28,
    backgroundColor: '#E3EAFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  textOut: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6D7FB3',
  },
});
