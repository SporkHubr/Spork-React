import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { useTranslation } from 'react-i18next';

import { Page } from 'components';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(6, 2),
  },
  textField: {
    margin: theme.spacing(1),
  },
  card: {
    width: theme.breakpoints.values.sm,
    maxWidth: '100%',
    overflow: 'unset',
    display: 'flex',
    position: 'relative',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%',
    },
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4),
  },
}));

const Main = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Page
      className={classes.root}
      title={t('mainPage.pageTitle')}
    >
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h4">
            {t('mainPage.contentTitle')}
          </Typography>
          <Typography variant="subtitle2">
            {t('mainPage.contentDescription')}
          </Typography>


          <TextField
            id="outlined-password-input"
            class={classes.textField}
            autoComplete="current-password"
            variant="outlined"
            placeholder="github/linguist"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />

        </CardContent>
      </Card>
    </Page>
  );
};

export default Main;
