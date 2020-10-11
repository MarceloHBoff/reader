import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #353535;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body, input, button {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
    border: 0;
    background: none;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
