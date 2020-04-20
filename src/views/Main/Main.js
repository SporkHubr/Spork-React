import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '@material-ui/styles';
import { useSelector, useDispatch } from 'react-redux';
import {
  Grid,
  Typography,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { Page, GithubIcon } from 'components';
import { fetchRepoDependencies } from 'actions';
import { ListDependencies } from './components';

const Main = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [urlRepo, setUrlRepo] = useState('');

  const onRepoSubmit = (url) => {
    setUrlRepo(url);
    dispatch(fetchRepoDependencies(url));
  };
  const handleRepoInputKeyDown = ({ keyCode, target }) => {
    if (keyCode === 13) onRepoSubmit(target.value);
  };

  const PageMain = styled(Page)`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing(6, 2)};
    padding-top: 56px;
    ${theme.breakpoints.up('sm')} {
      padding-top: 64px;
    };
  `;

  const RepoField = styled(TextField)`
    background-color: ${theme.palette.secondary.main};
    margin: ${theme.spacing(1)};
  `;

  return (
    <PageMain title={t('mainPage.pageTitle')}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item md={6} xs={12}>
          <Typography variant="h6">
            {t('mainPage.contentTitle')}
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            {t('mainPage.contentDescription')}
          </Typography>
          <RepoField
            fullWidth
            variant="outlined"
            onKeyDown={handleRepoInputKeyDown}
            placeholder="github/linguist"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <GithubIcon />
                </InputAdornment>
              ),
            }}
          />

          <Grid item xs={12}>
            <ListDependencies
              onDone={(list) => { console.log(list); }}
              rows={[
                'github.com/SporkHubr/Spork-go',
                'github.com/go-playground/universal-translator',
                'github.com/golang/protobuf',
                'github.com/joho/godotenv',
                'github.com/juju/errors',
                'github.com/labstack/echo',
                'github.com/labstack/gommon',
                'github.com/leodido/go-urn',
                'github.com/mattn/go-colorable',
                'github.com/mattn/go-isatty',
                'github.com/spf13/viper',
                'github.com/valyala/fasttemplate',
                'golang.org/x/crypto',
                'golang.org/x/net',
                'golang.org/x/sys',
                'google.golang.org/appengine',
                'gopkg.in/go-playground/validator.v9',
              ]}
            />
          </Grid>
        </Grid>
      </Grid>
    </PageMain>
  );
};

export default Main;
