import React from 'react';
import {BrowserRouter as Router , Switch} from 'react-router-dom';
import Home from './LandingPage/index';
import SignIn from './AuthenticationPages/SignIn';
import SignUp from './AuthenticationPages/signup';
import Browse from './AfterLogin/index';
import { IsUserRedirect , ProtectedRoute} from './RedirectionRoutes/routes'
import * as ROUTES from './Routes/routes';
import useAuthListener from './CustomHooks/authListener';
function App() {
   const { user } = useAuthListener();
  return (
    <>
    <Router>
      <Switch>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
    </>
     
  ); 
}

export default App;
