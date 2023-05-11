import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';

const {height} = Dimensions.get('window');

const Login = ({navigation}) => {
  return (
    <SafeAreaView>
      <ImageBackground
        style={{height: height}}
        resizeMode="stretch"
        source={require('../assets/Greeting.png')}
      />
      <View
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: height/10,
        }}>
        <Image
          style={{height: 85, width: '50%',marginBottom:22}}
          resizeMode="cover"
          source={require('../assets/Logo.png')}
        />

        <Text style={{fontWeight:900, color:'#ffff',fontSize:40, marginBottom:21}}>Chào con!</Text>
        <Text style={{fontWeight:400,color:"#fff",fontSize:13}}>Cùng khám phá những điều kỳ thú trong khi</Text>
        <Text style={{fontWeight:400,color:"#fff",fontSize:13}}>học Toán, Tiếng Anh, Tiếng Việt với những</Text>
        <Text style={{fontWeight:400,color:"#fff",fontSize:13}}>người bạn nhỏ dễ thường nhé!</Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
