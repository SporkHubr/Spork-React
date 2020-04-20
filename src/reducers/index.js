import {
  API_START,
  API_END,
  SET_USER_INFO,
  FETCH_USER_INFO,
} from '../actions/types';

const initialState = {
  user: {},
  loggedIn: false,
};

// eslint-disable-next-line consistent-return
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      console.log('SET_USER_INFO');
      return { ...state, user: action.payload };
    case API_START:
      console.log('API_START');
      if (action.payload === FETCH_USER_INFO) {
        return {
          ...state,
          isLoadingData: true,
        };
      }
    case API_END:
      console.log('API_END');
      if (action.payload === FETCH_USER_INFO) {
        return {
          ...state,
          isLoadingData: false,
        };
      }
    default:
      console.log('DEFAULT');
      return state;
  }
};
