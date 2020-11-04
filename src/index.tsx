import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import loadable from '@/utils/loadable';
import PrivateRoute from '@/pages/PrivateRoute';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import * as serviceWorker from './serviceWorker';
import './language';
import theme from './theme/theme.json';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route
              path="/login"
              component={loadable(import('./pages/Auth/Login'))}
              exact
            />
            <PrivateRoute
              path="/"
              component={loadable(import('./pages/Home'))}
              exact
            />
            <Route
              path="*"
              component={loadable(import('./pages/NotFound'))}
              exact
            />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
