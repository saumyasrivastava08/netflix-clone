import React from 'react';
import  Header  from '../../components/Navbar/index';
import * as ROUTES from '../../Routes/routes';
import logo from '../../components/Navbar/logo/logo1/flixlogo.svg';

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}