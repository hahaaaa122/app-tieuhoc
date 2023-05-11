import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';

const ForTest = () => {
  const [select, setSelect] = useState(false);
  const [pick, setPick] = useState(false);
  const handlerSelect = () => {
    setSelect(!select);
  };
  const handlerPick = () => {
    setPick(!pick);
  };
  return (
    <View>
      {/* Header */}
      <View style={styles.viewHeader}>
        <TouchableOpacity
          onPress={handlerSelect}
          style={[
            styles.lissten,
            {backgroundColor: select ? '#674FFA' : '#E3EAFF'},
          ]}>
          <FastImage
            resizeMode={FastImage.resizeMode.contain}
            style={{height: 21, width: 22, marginRight: 13}}
            source={require('../../../../../assets/Luyentap/success/volume.png')}
          />
          <Text style={[styles.text, {color: select ? '#F8F9FF' : '#6D7FB3'}]}>
            Ấn vào để nghe
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlerPick}
          style={[
            styles.watch,
            {backgroundColor: pick ? '#674FFA' : '#E3EAFF'},
          ]}>
          <Text style={[styles.text, {color: pick ? '#F8F9FF' : '#6D7FB3'}]}>
            Xem lại sau
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForTest;

const styles = StyleSheet.create({
  lissten: {
    flexDirection: 'row',
    width: 185,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 36,
  },
  watch: {
    width: 144,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    borderRadius: 36,
  },
  text: {
    fontWeight: '700',
    fontSize: 14,
  },
  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
 
});
