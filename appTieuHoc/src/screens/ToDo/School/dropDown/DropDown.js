import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';

const DropDown = ({data, setIsShow, setPicked, setSubDr, setImgDr}) => {
  const renderItem = ({item}) => {
    const handleGet = () => {
      setIsShow(false);
      setPicked(true);
      setSubDr(item.name);
      setImgDr(item.img);
    };
    return (
      <TouchableOpacity
        onPress={handleGet}
        style={{
          flexDirection: 'row',
          paddingHorizontal: 23,
          paddingTop: 18,
          alignItems: 'center',
        }}>
        <View style={{height: 50, width: 35}}>{item.img}</View>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 18,
            color: '#ffff',
            paddingLeft: 24,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        height: 194,
        width: 332,
        backgroundColor: 'rgba(0, 20, 123, 0.7)',
        borderRadius: 20,
      }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={item => {
          return item.id;
        }}
        renderItem={renderItem}
      />
    </View>
  );
};

export default DropDown;
