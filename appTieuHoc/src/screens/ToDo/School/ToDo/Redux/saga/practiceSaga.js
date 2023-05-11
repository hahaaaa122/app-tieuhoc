import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {getNextQuestionApi, sendAnswer} from '../../API/getAPI';
import {
  GET_QUESTION,
  GET_QUESTION_SUCCESS,
  SEND_ANSWER,
  SEND_ANSWER_SUCCESS,
} from '../action/action';

function* sendAnswerSaga(action) {
  try {
    const answer = yield call(sendAnswer, action.payload);
    yield put({type: SEND_ANSWER_SUCCESS, payload: answer});
    yield action.payload.callBack(answer);
  } catch (e) {
    console.log(e);
  }
}

function* getQuestionSaga(action) {
  try {
    const question = yield call(getNextQuestionApi, action.payload);
    yield put({type: GET_QUESTION_SUCCESS, payload: question});
  } catch (e) {
    console.log(e);
  }
}

function* practiceSaga() {
  yield takeEvery(GET_QUESTION, getQuestionSaga);
  yield takeLatest(SEND_ANSWER, sendAnswerSaga);
}

export default practiceSaga;
