import {SEND_ANSWER, SEND_ANSWER_SUCCESS} from '../action/action';
const initData = {
  answer: [],
  isLoading: false,
};

export default appReducer = (state = initData, {type, payload}) => {
  switch (type) {
    case SEND_ANSWER:
      return {
        ...state,
        isLoading: true,
      };
    case SEND_ANSWER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        answer: payload,
      };
    default:
      return state;
  }
};
