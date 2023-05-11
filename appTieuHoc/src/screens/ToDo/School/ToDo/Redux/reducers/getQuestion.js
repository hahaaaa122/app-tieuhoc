import {GET_QUESTION, GET_QUESTION_SUCCESS} from '../action/action';
const initData = {
  question: [],
  isLoading: false,
};


export default getQuestion = (state = initData, {type, payload}) => {
  switch (type) {
    case GET_QUESTION:
      return {
        ...state,
        isLoading: true,
      };
    case GET_QUESTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        question: payload,
      };

    default:
      return state;
  }
};


