import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  .h-screen {
    height: 100vh
  }
  .flex {
    display: flex
  }
  .justify-center {
    justify-content: center
  }
  .items-center {
    align-items: center
  }
`;

export default GlobalStyle;
