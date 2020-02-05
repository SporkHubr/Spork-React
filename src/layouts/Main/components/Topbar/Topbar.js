import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  AppBar, Toolbar, Link, Avatar,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    height: '59px',
    flexGrow: 1,
  },
  logo: {
    height: '25px',
  },
  logoLink: {
    flexGrow: 1,
  },
}));

const Topbar = (props) => {
  const { className, user } = props;

  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      color="secondary"
    >
      <Toolbar>
        <RouterLink to="/" className={classes.logoLink}>
          <img
            alt="Logo"
            src="/img/logo.svg"
            className={classes.logo}
          />
        </RouterLink>
        {user && (
          <>
            <Avatar alt="Remy Sharp" src={user.avatar_url} />
            {user.login}
          </>
        )}
        {!user && (
        <Link href="https://api.spork.mindcode.ru/signin">
          Login
        </Link>
        ) }
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string.isRequired,
  user: PropTypes.shape({
    login: PropTypes.string,
    avatar_url: PropTypes.string,
  }).isRequired,
};

export default Topbar;
