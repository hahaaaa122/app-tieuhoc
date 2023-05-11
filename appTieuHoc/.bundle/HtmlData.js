import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
import {useDispatch, useSelector} from 'react-redux';
import { renderQuestion } from './renderHTML/renderQuestion';
let html = ``;

const HtmlData = () => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState(false);
  const API = useSelector(state => state.appReducer.data);
  // useEffect(() => {
  //   new Promise((resolve, reject) => {
  //     axios
  //       .get(
  //         'https://api-elb.onluyen.vn/api/practice/questions/detail/63f49c04456abec2d7baddf5/644659ce0638cfa50eeca26f',
  //         {
  //           headers: {
  //             Authorization:
  //               'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Imh1bmdodDU0QG9ubHV5ZW4udm4iLCJzdWIiOiJodW5naHQ1NEBvbmx1eWVuLnZuIiwidXNlcklkIjoiNjQzZmIzOWIzNzNhZWNiMzQ2MjIzMjFkIiwidXNlck5hbWUiOiJodW5naHQ1NEBvbmx1eWVuLnZuIiwiaXNWZXJpZmllZCI6ZmFsc2UsIkdyYWRlSWQiOiJDMyIsIkRpc3BsYXlOYW1lIjoiSMOAIFRV4bqkTiBIw5lOR2ciLCJCaXJ0aGRheSI6IjIwMTAtMDUtMTIiLCJQcm92aW5jZUlkIjo2NSwiRGlzdHJpY3RJZCI6MTUsIlNjaG9vbFllYXIiOjIwMjIsImNvZGVBcHAiOiJTQ0hPT0wiLCJwYXJ0bmVyIjoiT05MVVlFTiIsIlJvbGUiOiJTVFVERU5UIiwiR2VuZGVyIjoiTkFNIiwiQ3VycmVudFNjaG9vbElkIjozLCJDcmVhdGVCeVNjaG9vbCI6MywiU2Nob29sSWQiOjMsInByZW1pdW0iOmZhbHNlLCJjYW5DaGFuZ2VQYXNzd29yZCI6dHJ1ZSwiTXVsdGlwbGVTY2hvb2wiOmZhbHNlLCJwYWNrYWdlcyI6IjU1Nzk1IiwianRpIjoiNDIxMjFhMzQtNWI5MC00MDU5LWIwZWYtNTBjZDA4Yzg3MTY0IiwiaWF0IjoxNjgyNDA0OTM1LCJuYmYiOjE2ODI0MDQ5MzUsImV4cCI6MTY4MjQxNTczNSwiaXNzIjoiRURNSUNSTyIsImF1ZCI6Ik9OTFVZRU4uVk4ifQ.eROn6esPiLW11Nwr3VZvNA75E07iGPHyHUM-hBNzgUU',
  //           },
  //         },
  //       )
  //       .then(function (res) {
  //         console.log('CallAPI', res);
  //         resolve(res.dataStandard);
  //       })
  //       .catch(function (err) {
  //         console.log(err);
  //         reject(err);
  //       });
  //   });
  // }, []);
  console.log('hunghaData', JSON.stringify(API));
  useEffect(()=>{
    dispatch({type: 'GET_API'})
  },[])

  const Mock = API.data.data

  const renderItem = ({item}) => {
    const getColor = id => {
      const pick = id === select;
      if (pick) {
        return '#674FFA';
      } else {
        return '#E3EAFF';
      }
    };
    const color = id => {
      const pick = id === select;
      if (pick) {
        return '#ffff';
      } else {
        return '#6D7FB3';
      }
    };
    return (
      <TouchableOpacity
        onPress={() => setSelect(item.id)}
        style={{
          height: 20,
          width: 20,
          borderRadius: 20,
          backgroundColor: getColor(item.id),
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 20,
          marginTop: 20,
        }}>
        <Text style={{fontSize: 10, fontWeight: '700', color: color(item.id)}}>
          {item.stepIndex}
        </Text>
      </TouchableOpacity>
    );
  };
  html += `
  <htm>
    <head>
      <title>WebView</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      
    </head>
      <body>
      <div>`;
      html += renderQuestion(API?.data?.data[0].dataStandard.content)
      
  html += `</div>
      </body>
  </html>`;
  return (
    <View style={{flex: 1}}>
      <View style={{height: '50%', backgroundColor: 'red'}}>
        <WebView
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          source={{html}}
          originWhitelist={['*']}
          ignoreSsError={false}
          scrollEnabled
        />
      </View>
      <View style={styles.viewButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch({type: 'GET_API'})}>
          <Text style={styles.textButton}>Bỏ Qua</Text>
        </TouchableOpacity>
      </View>
      <View style={{height: '40%'}}>
        <FlatList
          horizontal
          data={Mock}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default HtmlData;

const styles = StyleSheet.create({
  viewButton: {
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 335,
    height: 50,
    backgroundColor: '#43DF94',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  textButton:{
    fontSize:24,
    fontWeight:'700',
    color:"#ffff"
  }
});
