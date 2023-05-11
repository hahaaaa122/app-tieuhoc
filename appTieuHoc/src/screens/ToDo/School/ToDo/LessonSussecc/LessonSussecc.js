import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Success} from '../../Data';
import FastImage from 'react-native-fast-image';

const LessonSussecc = () => {
  return (
    <View style={styles.header}>
      {Success.map(({id, number, img}) => {
        return (
          <View key={id} style={{flexDirection: 'row', alignItems: 'center'}}>
            <FastImage
              resizeMode={FastImage.resizeMode.contain}
              style={{height: 46, width: 46}}
              source={img}
            />
            <Text style={styles.text}>{number}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default LessonSussecc;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    marginTop: 30,
  },
  text: {
    fontSize: 21,
    fontWeight: '700',
    color: '#6D7FB3',
    paddingLeft:5
  },
});
