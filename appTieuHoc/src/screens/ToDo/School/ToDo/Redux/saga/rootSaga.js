import {all, takeEvery} from 'redux-saga/effects';
import practiceSaga from './practiceSaga';

 export default function* rootSaga() {
   yield all([
     practiceSaga()
   ])
   // code after all-effect
 }