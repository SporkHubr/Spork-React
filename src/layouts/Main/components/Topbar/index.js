import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTheme } from '@material-ui/styles';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar, Toolbar, Link, Avatar, Typography,
} from '@material-ui/core';


const Topbar = (props) => {
  const { user } = props;
  const theme = useTheme();

  const AppHeaderBar = styled(AppBar)`
    height: '59px';
    flex-grow: 1;
  `;

  const Logo = styled.img`
    height: '25px';
  `;

  const LogoLink = styled(RouterLink)`
    flex-grow: 1;
  `;

  const AvatarUser = styled(Avatar)`
    margin-left: ${theme.spacing(1)}px;
  `;

  return (
    <AppHeaderBar color="secondary">
      <Toolbar>
        <LogoLink to="/">
          <Logo alt="Spork" src="/img/logo.svg" />
        </LogoLink>
        {user && (
          <>
            <Typography variant="body2">{user.login}</Typography>
            <AvatarUser alt="user.login" src={user.avatar_url} />
          </>
        )}
        {!user && (
        <Link href="https://api.spork.mindcode.ru/signin" variant="button">
          Login
        </Link>
        ) }
      </Toolbar>
    </AppHeaderBar>
  );
};

Topbar.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string,
    avatar_url: PropTypes.string,
  }).isRequired,
};

export default Topbar;
