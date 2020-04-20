import axios from 'axios';
import { API } from '../actions/types';
import {
  accessDenied,
  apiError,
  apiStart,
  apiEnd,
} from '../actions/api';

const apiMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  next(action);

  if (action.type !== API) return;

  const {
    url,
    method,
    data,
    accessToken,
    onSuccess,
    onFailure,
    label,
    headers,
  } = action.payload;
  const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';
  const state = getState();
  const { user: { accessToken: stateToken } } = state;

  // axios default configs
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || '';
  axios.defaults.headers.common['Content-Type'] = 'application/json';

  if (accessToken || stateToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken || stateToken}`;
  }

  if (label) {
    dispatch(apiStart(label));
  }

  axios
    .request({
      url,
      method,
      headers,
      [dataOrParams]: data,
    })
    .then(({ data: res }) => {
      dispatch(onSuccess(res));
    })
    .catch((error) => {
      dispatch(apiError(error));
      dispatch(onFailure(error));

      if (error.response && error.response.status === 403) {
        dispatch(accessDenied(window.location.pathname));
      }
    })
    .finally(() => {
      if (label) {
        dispatch(apiEnd(label));
      }
    });
};

export default apiMiddleware;
