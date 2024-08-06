import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

 @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
 div#root {
    min-height: 100vh;
    height: 100vh;
    overflow-x: hidden;
  }

  body,textarea, input, button {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  button {
    background: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
