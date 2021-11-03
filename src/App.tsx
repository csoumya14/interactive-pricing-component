import React from 'react';
import TopBackground from './container/TopBackground/TopBackground';
import Header from './container/Header/Header';
import SliderToggle from './container/SliderToggle/SliderToggle';
import styled from 'styled-components';
import GlobalStyle from './themes/GlobalStyles';

const Main = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Main>
      <GlobalStyle />
      <TopBackground />
      <Header />
      <SliderToggle />
    </Main>
  );
}

export default App;
/*

*/
