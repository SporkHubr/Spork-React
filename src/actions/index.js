import { SET_USER_INFO, API, FETCH_USER_INFO } from './types';

const apiAction = ({
  url = '',
  method = 'GET',
  data = null,
  accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = '',
  headersOverride = null,
}) => ({
  type: API,
  payload: {
    url,
    method,
    data,
    accessToken,
    onSuccess,
    onFailure,
    label,
    headersOverride,
  },
});

export const setUserToken = () => {

};

export const fetchUserInfo = (accessToken) => {
  const setUserInfo = (data) => ({
    type: SET_USER_INFO,
    payload: data,
  });

  return apiAction({
    url: 'https://api.spork.mindcode.ru/user',
    accessToken,
    onSuccess: setUserInfo,
    onFailure: () => console.log('[api] -> [user] -> error'),
    label: FETCH_USER_INFO,
  });
};
