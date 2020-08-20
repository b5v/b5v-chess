import React from 'react';
import ReactDom from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import Board from './components/Board';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  body {
    background: rgb(20, 20, 100);
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <Board />
  </>
);

ReactDom.render(<App />, document.getElementById('root'));
