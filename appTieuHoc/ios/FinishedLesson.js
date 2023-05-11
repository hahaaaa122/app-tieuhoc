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
const heightMH = Dimensions.get('window').height;
const widthMH = Dimensions.get('window').width;

const FinishedLesson = () => {
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
              style={{height: 261, width: 337}}
              resizeMode={FastImage.resizeMode.contain}
              source={require('../../../../../assets/Tuhoc/success/Score.png')}>
              <TouchableOpacity>
                  <FastImage
                    style={{}}
                   resizeMode={FastImage.resizeMode.contain}
                   source={require("../../../../../assets/Tuhoc/success/Replay.png")}/>
              </TouchableOpacity>
            </FastImage>
          </View>
          <View style={styles.viewScore}>
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
});
