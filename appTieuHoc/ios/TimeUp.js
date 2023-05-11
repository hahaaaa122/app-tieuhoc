import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Countdown from 'react-countdown';
import Modal from 'react-native-modal';
import FinishedLesson from '../finishedLesson/FinishedLesson';
import {useNavigation} from '@react-navigation/native';
const TimeUp = () => {
  const navigation = useNavigation();

  // Renderer callback with condition
  const renderer = ({minutes, seconds, completed}) => {
    if (completed) {
      // Render a completed state
      return navigation.navigate('FinishedLesson');
    } else {
      // Render a countdown
      return (
        <View style={styles.header}>
          <Image
            style={styles.img}
            resizeMode="contain"
            source={require('../../../../../assets/Luyentap/clock.png')}
          />
          <Text style={styles.text}>
            {minutes}:{seconds}
          </Text>
        </View>
      );
    }
  };
  return <Countdown date={Date.now() + 10000} renderer={renderer} />;
};

export default TimeUp;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    height: 24,
    width: 24,
    marginRight: 5,
  },
  text: {
    color: '#ffff',
    fontSize: 24,
    fontWeight: '500',
  },
});
