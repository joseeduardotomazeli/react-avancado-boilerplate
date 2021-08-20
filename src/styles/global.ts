import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body, #__next {
    height: 100%;
  }

  body {
    font-family: 'Segoe UI', sans-serif
  }
`;

export default GlobalStyle;
