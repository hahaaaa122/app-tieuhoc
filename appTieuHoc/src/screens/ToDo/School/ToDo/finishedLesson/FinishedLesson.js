import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
const heightMH = Dimensions.get('window').height;
const widthMH = Dimensions.get('window').width;

const FinishedLesson = () => {
  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground
        resizeMode="stretch"
        style={{height: heightMH, width: widthMH}}
        source={require('../../../../../assets/Tuhoc/success/Congratulation.png')}>
        <View style={{marginTop: 54, marginHorizontal: 23}}>
          <View style={styles.viewHeader}>
            <Text style={styles.textHeader}>Chúc mừng con</Text>
            <Text style={styles.textBody}>đã hoàn thành</Text>
            <Text style={styles.textBody}> bài luyện!</Text>
          </View>
          <View style={styles.viewHeader}>
            <FastImage
              resizeMode={FastImage.resizeMode.contain}
              style={{width: 330, height: 105}}
              source={require('../../../../../assets/Tuhoc/success/Sao.png')}
            />
          </View>
          <View style={styles.viewScore}>
            <FastImage
              style={{
                height: 261,
                width: 337,
              }}
              resizeMode={FastImage.resizeMode.contain}
              source={require('../../../../../assets/Tuhoc/success/Score.png')}>
              <View style={styles.viewSS}>
                <Text style={styles.textSS}>Số câu đúng: 16 </Text>
                <Text style={styles.textSS}>Số câu sai: 14</Text>
              </View>
            </FastImage>
            <View style={styles.viewButton}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <FastImage
                  style={{height: 104, width: 104, marginRight: 10}}
                  resizeMode={FastImage.resizeMode.contain}
                  source={require('../../../../../assets/Tuhoc/success/Replay.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("NavigatiorTabBar")} >
                <FastImage
                  style={{height: 104, width: 104}}
                  resizeMode={FastImage.resizeMode.contain}
                  source={require('../../../../../assets/Tuhoc/success/Nextlesson.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{height: '30%'}}>
            <FastImage
              style={styles.fox}
              resizeMode={FastImage.resizeMode.contain}
              source={require('../../../../../assets/Tuhoc/success/Layer.png')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default FinishedLesson;

const styles = StyleSheet.create({
  viewHeader: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 32,
    fontWeight: '400',
    color: '#ffff',
  },
  textBody: {
    fontSize: 40,
    fontWeight: '600',
    color: '#fff',
  },
  viewScore: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fox: {
    height: 334,
    width: 274,
    position: 'absolute',
    left: '20%',
    bottom: '-39.7%',
  },
  viewButton: {
    flexDirection: 'row',
    position: 'absolute',
    left: '18%',
    bottom: -50,
  },
  textSS: {
    fontSize: 32,
    fontWeight: '700',
    color: '#ffff',
  },
  viewSS: {
    position: 'absolute',
    left: '15%',
    top: '40%',
    alignItems: 'center',
  },
});
