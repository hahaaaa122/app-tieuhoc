import {Image, Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View>
      <Modal transparent={false} visible={true}>
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 200, height: 200}}
            source={{
              uri: 'https://media.tenor.com/wfEN4Vd_GYsAAAAM/loading.gif',
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
