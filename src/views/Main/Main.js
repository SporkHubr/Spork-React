import React from 'react';
import styled from 'styled-components';
import { useTheme } from '@material-ui/styles';
import {
  Grid,
  Typography,
  TextField,
  InputAdornment,
} from '@material-ui/core';

import { useTranslation } from 'react-i18next';
import { Page, GithubIcon } from 'components';

const Main = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const PageMain = styled(Page)`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing(6, 2)};
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
        <Grid item xs={6}>
          <Typography variant="h6">
            {t('mainPage.contentTitle')}
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            {t('mainPage.contentDescription')}
          </Typography>
          <RepoField
            fullWidth
            variant="outlined"
            placeholder="github/linguist"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <GithubIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </PageMain>
  );
};

export default Main;
