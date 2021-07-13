import React from 'react';
import JumbotronContainer from './Containers/jumbotron';
import FooterContainer from './Containers/footer';
import FaqsContainer from './Containers/faq';
import HeaderContainer from './Containers/header';

import OptForm from '../components/opt-form/index'
import Feature from '../components/feature';
export default function LandingPage() {
  return (
    <>
  
    <HeaderContainer>
      
        <Feature>
          <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
          <OptForm>
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
          
            <OptForm.Break />
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Get Started</OptForm.Button>
          </OptForm>
        </Feature>
      </HeaderContainer>
    <JumbotronContainer />
    <FaqsContainer />
    <FooterContainer />
    </>
    
  )
}