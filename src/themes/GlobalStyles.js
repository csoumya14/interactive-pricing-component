import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
    }
  body {  
    margin: 0px;
    padding: 0;
    font-family: 'Manrope', sans-serif;
    overflow-x:hidden;  
  }
`;

export default GlobalStyle;
