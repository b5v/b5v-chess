import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { isDarkSquare, getFileAndRank } from './utils';
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

const PIECE_MAP = {
  r: <BlackRook />,
  n: <BlackKnight />,
  b: <BlackBisoph />,
  q: <BlackQueen />,
  k: <BlackKing />,
  p: <BlackPawn />,
  x: <EmptyPiece />,
  R: <WhiteRook />,
  N: <WhiteKnight />,
  B: <WhiteBisoph />,
  Q: <WhiteQueen />,
  K: <WhiteKing />,
  P: <WhitePawn />,
} as { [key: string]: ReactNode };

type Props = {
  boardState: string;
};

const Board: FC<Props> = ({ boardState }) => {
  return (
    <BoardWrap>
      {boardState.split('').map((piece: string, idx) => {
        return (
          <Square
            key={getFileAndRank(idx)}
            piece={PIECE_MAP[piece]}
            isDarkSquare={isDarkSquare(idx)}
            onClick={(): null => null}
          />
        );
      })}
    </BoardWrap>
  );
};

export default Board;
