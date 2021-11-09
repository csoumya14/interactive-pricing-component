import React from 'react';
import { HeaderContainer, Heading, Para1, Para2, ParaDiv } from './Header.css';
const Header = () => {
  return (
    <HeaderContainer>
      <Heading>Simple,traffic based pricing</Heading>
      <ParaDiv>
        <Para1>Sign up for our 30-day trial.</Para1>
        <Para2> No credit card required</Para2>
      </ParaDiv>
    </HeaderContainer>
  );
};

export default Header;
