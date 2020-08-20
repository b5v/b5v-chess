import React, { FC } from 'react';
import styled from 'styled-components';

import Square from './Square';

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
  EmptyPiece,
} from '../../SVG';

const BoardWrap = styled.div`
  width: 32%;
  margin: 100px auto;
  background: tomato;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;

const Board: FC = () => {
  return (
    <BoardWrap>
      <Square piece={<BlackRook />} />
      <Square piece={<BlackKnight />} isDarkSquare />
      <Square piece={<BlackBisoph />} />
      <Square piece={<BlackQueen />} isDarkSquare />
      <Square piece={<BlackKing />} />
      <Square piece={<BlackBisoph />} isDarkSquare />
      <Square piece={<BlackKnight />} />
      <Square piece={<BlackRook />} isDarkSquare />

      <Square piece={<BlackPawn />} isDarkSquare />
      <Square piece={<BlackPawn />} />
      <Square piece={<BlackPawn />} isDarkSquare />
      <Square piece={<BlackPawn />} />
      <Square piece={<BlackPawn />} isDarkSquare />
      <Square piece={<BlackPawn />} />
      <Square piece={<BlackPawn />} isDarkSquare />
      <Square piece={<BlackPawn />} />

      <Square piece={<EmptyPiece />} />
      <Square piece={<EmptyPiece />} isDarkSquare />
      <Square piece={<EmptyPiece />} />
      <Square piece={<EmptyPiece />} isDarkSquare />
      <Square piece={<EmptyPiece />} />
      <Square piece={<EmptyPiece />} isDarkSquare />
      <Square piece={<EmptyPiece />} />
      <Square piece={<EmptyPiece />} isDarkSquare />

      <Square piece={<EmptyPiece />} isDarkSquare />
      <Square piece={<EmptyPiece />} />
      <Square piece={<EmptyPiece />} isDarkSquare />
      <Square piece={<EmptyPiece />} />
      <Square piece={<EmptyPiece />} isDarkSquare />
      <Square piece={<EmptyPiece />} />
      <Square piece={<EmptyPiece />} isDarkSquare />
      <Square piece={<EmptyPiece />} />

      <Square piece={<EmptyPiece />} />
      <Square piece={<EmptyPiece />} isDarkSquare />
      <Square piece={<EmptyPiece />} />
      <Square piece={<EmptyPiece />} isDarkSquare />
      <Square piece={<EmptyPiece />} />
      <Square piece={<EmptyPiece />} isDarkSquare />
      <Square piece={<EmptyPiece />} />
      <Square piece={<EmptyPiece />} isDarkSquare />

      <Square piece={<EmptyPiece />} isDarkSquare />
      <Square piece={<EmptyPiece />} />
      <Square piece={<EmptyPiece />} isDarkSquare />
      <Square piece={<EmptyPiece />} />
      <Square piece={<EmptyPiece />} isDarkSquare />
      <Square piece={<EmptyPiece />} />
      <Square piece={<EmptyPiece />} isDarkSquare />
      <Square piece={<EmptyPiece />} />

      <Square piece={<WhitePawn />} />
      <Square piece={<WhitePawn />} isDarkSquare />
      <Square piece={<WhitePawn />} />
      <Square piece={<WhitePawn />} isDarkSquare />
      <Square piece={<WhitePawn />} />
      <Square piece={<WhitePawn />} isDarkSquare />
      <Square piece={<WhitePawn />} />
      <Square piece={<WhitePawn />} isDarkSquare />

      <Square piece={<WhiteRook />} isDarkSquare />
      <Square piece={<WhiteKnight />} />
      <Square piece={<WhiteBisoph />} isDarkSquare />
      <Square piece={<WhiteQueen />} />
      <Square piece={<WhiteKing />} isDarkSquare />
      <Square piece={<WhiteBisoph />} />
      <Square piece={<WhiteKnight />} isDarkSquare />
      <Square piece={<WhiteRook />} />
    </BoardWrap>
  );
};

export default Board;
