import React from 'react';
import ReactDom from 'react-dom';

import {
  BlackBisoph,
  BlackKing,
  BlackKnight,
  BlackPawn,
  BlackQueen,
  BlackRook,
  WhiteBisoph,
  WhiteKing,
  WhiteKnight,
  WhitePawn,
  WhiteQueen,
  WhiteRook,
} from './SVG';

const App = () => (
  <div>
    <BlackBisoph />
    <BlackKing />
    <BlackKnight />
    <BlackPawn />
    <BlackQueen />
    <BlackRook />
    <WhiteBisoph />
    <WhiteKing />
    <WhiteKnight />
    <WhitePawn />
    <WhiteQueen />
    <WhiteRook />
  </div>
);

ReactDom.render(<App />, document.getElementById('root'));
