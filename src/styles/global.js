import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #191920;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    /* max-width: 1360px; */
    margin: 0 auto;
    /* padding: 0 20px 50px; */
    padding: 0 0 50px;
  }

  button {
    cursor: pointer;
  }
`;
