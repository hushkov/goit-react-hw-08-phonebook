import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

import Layout from 'Components/Layout';
import routes from 'routes';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

const HomeView = lazy(() =>
  import('views/HomeView' /* webpackChunkName: "home-view" */),
);
const ContactsView = lazy(() =>
  import('views/ContactsView' /* webpackChunkName: "contacts-view" */),
);
const LoginView = lazy(() =>
  import('views/LoginView' /* webpackChunkName: "login-view" */),
);
const RegisterView = lazy(() =>
  import('views/SignupView' /* webpackChunkName: "register-view" */),
);

const App = () => {
  const { home, contacts, login, register } = routes;

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Suspense fallback={<LinearProgress />}>
          <Switch>
            <Route exact path={home} component={HomeView}></Route>
            <Route path={contacts} component={ContactsView}></Route>
            <Route path={login} component={LoginView}></Route>
            <Route path={register} component={RegisterView}></Route>
            <Redirect to={home} />
          </Switch>
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
