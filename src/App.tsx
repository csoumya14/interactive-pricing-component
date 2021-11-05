import React from 'react';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './themes/ThemeVariables';
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
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Main>
        <TopBackground />
        <Header />
        <SliderToggle />
      </Main>
    </ThemeProvider>
  );
}

export default App;
/*

*/
