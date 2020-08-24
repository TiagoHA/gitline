import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  :root {
    --primary: #9B1768;
    --primary-darker: #931562;
    --secondary: #087392;

    --border: #C4C4C4;
    --background: #1B1B1B;

    --box: #FFFFFF;
    --box-secondary: #DADADA;
    --box-in-secondary: #F1F1F1;

    --text-primary: #4F4F4F;
    --text-primary-in-background: #FFF;
    --text-secondary: #8E8E8E;
    --text-in-secondary: #CBCBCB;
  }

`;
