import React from 'react';
import { Router } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { createBrowserHistory } from 'history';
import MomentUtils from '@date-io/moment';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { renderRoutes } from 'react-router-config';
import { I18nextProvider } from 'react-i18next';

import configureI18n from './i18n';
import theme from './theme';
import GlobalStyle from './theme/global';
import routes from './routes';
import store from './store';

import hi from './utils/hello';

import { ScrollReset } from './components';

const history = createBrowserHistory();

// TODO: (store.getState().appSettings.language)
const i18n = configureI18n('en');

const App = () => (
  <I18nextProvider i18n={i18n}>
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <SnackbarProvider maxSnack={3}>
            <Router history={history}>
              <ScrollReset />
              <GlobalStyle />
              {renderRoutes(routes)}
            </Router>
          </SnackbarProvider>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </StoreProvider>
  </I18nextProvider>
);

// Say hi in console
hi(console.log);

export default App;
