import {
  API_START,
  API_END,
  SET_USER_INFO,
  FETCH_USER_INFO,
} from '../actions/types';

// eslint-disable-next-line consistent-return
export default (state = {}, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return { user: action.payload };
    case API_START:
      if (action.payload === FETCH_USER_INFO) {
        return {
          ...state,
          isLoadingData: true,
        };
      }
      break;
    case API_END:
      if (action.payload === FETCH_USER_INFO) {
        return {
          ...state,
          isLoadingData: false,
        };
      }
      break;
    default:
      return state;
  }
};
