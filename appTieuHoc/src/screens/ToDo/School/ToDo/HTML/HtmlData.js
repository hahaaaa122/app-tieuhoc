import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
import {useDispatch, useSelector} from 'react-redux';
import {renderQuestion} from './renderHTML/renderQuestion';
import Loading from '../Loading/Loading';
import {Handle} from './handle/Handle';
import {GET_QUESTION, SEND_ANSWER} from '../Redux/action/action';
import Modal from 'react-native-modal';
import {renderStyles} from './renderHTML/renderStyles';


const HtmlData = () => {
  const [nextStepId, setNextStepId] = useState('6459b7b4c60c8460ac99373c');
  const dispatch = useDispatch();
  const getQuestion = useSelector(state => state.getQuestion.question);
  const sendAnswer = useSelector(state => state.sendAnswer.answer);
  const isLoading = useSelector(state => state.getQuestion.isLoading);
  const [answer, setAnswer] = useState('');
  const [check, setCheck] = useState();
  const [isVisible, setShowModal] = useState(false);

  useEffect(() => {
    const payload = {
      nextStepId: nextStepId,
    };
    dispatch({type: GET_QUESTION, payload});
  }, [nextStepId]);

  // const Mock = API?.data?.data;
  // const renderItem = ({item, index}) => {
  //   const getColor = id => {
  //     const pick = id === select;
  //     if (pick) {
  //       return '#674FFA';
  //     } else {
  //       return '#E3EAFF';
  //     }
  //   };
  //   const color = id => {
  //     const pick = id === select;
  //     if (pick) {
  //       return '#ffff';
  //     } else {
  //       return '#6D7FB3';
  //     }
  //   };
  //   return (
  //     <TouchableOpacity
  //       onPress={() => setSelect(index)}
  //       style={{
  //         height: 20,
  //         width: 20,
  //         borderRadius: 20,
  //         backgroundColor: getColor(index),
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         marginLeft: 20,
  //         marginTop: 20,
  //       }}>
  //       <Text style={{fontSize: 10, fontWeight: '700', color: color(index)}}>
  //         {item.dataStandard.stepIndex + 1}
  //       </Text>
  //     </TouchableOpacity>
  //   );
  // };
  const renderHtml = () => {
    let html = '';
    html += `
    <html>
      <head>
        <title>WebView</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">`;
    html += renderStyles();
    `</head>
      <body>
       <div style="margin-left:20px;margin-right:20px">
       <div>`;
    html += `
         <div class="question">
         <div style="margin-top:3px">
          ${getQuestion?.dataStandard?.index} | #${getQuestion?.dataStandard?.questionNumber}
         </div>
         <button class="btn-bug">
           <img width="14" height="14" src="https://tieuhoc.onluyen.vn/assets/assignment/icon-bug.png"/>
           <text style="margin-left:2px"> Báo lỗi </text>
         </button>
         </div>`;
    html += renderQuestion(getQuestion?.dataStandard?.question);
    `</div>`;
    html += Handle();
    `
    </body>
    </html>`;
    return html;
  };

  return (
    <View style={{flex: 1}}>
      <View style={{height: '50%'}}>
        <WebView
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          source={{html: renderHtml()}}
          originWhitelist={['*']}
          ignoreSsError={false}
          scrollEnabled
          onMessage={event => {
            setAnswer(event.nativeEvent.data);
            // setShowErr(event.nativeEvent.data);
          }}
        />
      </View>
      <View style={styles.viewButton}>
        <TouchableOpacity
          onPress={() => {
            const payload = {
              dataOptionId: [],
              dataOptionText: answer || '',
              isSkip: answer ? false : true,
              problemId: getQuestion?.dataStandard?.problemId || '',
              stepId: getQuestion?.dataStandard?.stepId || '',
              studentDoRight: '',
              testId: '',
              textAnswer: '',
              callBack: [],
            };
            dispatch(
              {type: SEND_ANSWER, payload},
              (payload.callBack = data => {
                if (answer) {
                  setCheck(data.isAnswer);
                  setShowModal(true);
                  setNextStepId(data.nextStepId);
                } else {
                  setNextStepId(data.nextStepId);
                }

                setTimeout(() => {
                  setShowModal(false);
                }, 1500);
              }),
            );
            setAnswer('');
          }}
          style={styles.button}>
          {answer ? (
            <Text style={styles.textButton}>Trả Lời </Text>
          ) : (
            <Text style={styles.textButton}>Bỏ Qua </Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={{height: '40%'}}>
        {/* <FlatList
          horizontal
          data={Mock}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={renderItem}
        /> */}

        {/* Modal check true/false */}
        <Modal isVisible={isVisible}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {check === true ? (
              <Image
                resizeMode="center"
                style={{height: 220, width: 220}}
                source={require('../../../../../assets/Luyentap/CheckAnswer/CorrectAnswer.png')}
              />
            ) : (
              <Image
                resizeMode="center"
                style={{height: 220, width: 220}}
                source={require('../../../../../assets/Luyentap/CheckAnswer/WrongAnswer.png')}
              />
            )}
          </View>
        </Modal>
        {/* Modal bao loi */}
        {/* <Modal isVisible={showErr}>
          <View>
            <Text>hungha</Text>
          </View>
        </Modal> */}
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
  textButton: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffff',
  },
});
