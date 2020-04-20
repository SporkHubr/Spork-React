import {
  API,
  SET_USER_INFO,
  FETCH_USER_INFO,
  SET_REPO_DEPS,
  FETCH_REPO_DEPS,
} from './types';

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

export const fetchUserInfo = (accessToken) => {
  const setUserInfo = (data) => ({
    type: SET_USER_INFO,
    payload: data,
  });

  return apiAction({
    url: 'https://api.spork.mindcode.ru/user',
    accessToken,
    onSuccess: (data) => setUserInfo({ ...data, accessToken }),
    // eslint-disable-next-line
    onFailure: (err) => {console.log('[api] -> [user] -> error'); return {};},
    label: FETCH_USER_INFO,
  });
};

export const fetchRepoDependencies = (urlRepo) => {
  const setRepoDependecies = (data) => ({
    type: SET_REPO_DEPS,
    payload: data,
  });

  return apiAction({
    method: 'POST',
    url: 'https://api.spork.mindcode.ru/parse',
    data: { urlRepo },
    onSuccess: setRepoDependecies,
    // eslint-disable-next-line
    onFailure: (err) => {console.log('[api] -> [parse] -> error'); return {};},
    label: FETCH_REPO_DEPS,
  });
};
