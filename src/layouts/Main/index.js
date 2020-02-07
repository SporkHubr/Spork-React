import React, { Suspense } from 'react';
import qs from 'query-string';
import styled from 'styled-components';
import { useTheme } from '@material-ui/styles';
import { LinearProgress } from '@material-ui/core';
import { renderRoutes } from 'react-router-config';
import { useSelector, useDispatch } from 'react-redux';
import ReactRouterPropTypes from 'react-router-prop-types';
import { fetchUserInfo } from '../../actions';
import { Topbar } from './components';


const Main = (props) => {
  const { route, location, history } = props;
  const theme = useTheme();
  const dispatch = useDispatch();

  const Conent = styled.main`
    height: 100%;
    paddingTop: 56;
    ${theme.breakpoints.up('sm')} {
      paddingTop: 64;
    };
  `;

  const { token } = qs.parse(location.search, { ignoreQueryPrefix: true });
  if (token) {
    dispatch(fetchUserInfo(token));
    history.push('/');
  }

  // TODO: Rewrite to redux store
  const user = useSelector((state) => state.user);

  return (
    <>
      <Topbar user={user} />
      <Conent>
        <Suspense fallback={<LinearProgress />}>
          {renderRoutes(route.routes)}
        </Suspense>
      </Conent>
    </>
  );
};

Main.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  route: ReactRouterPropTypes.route.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

export default Main;
