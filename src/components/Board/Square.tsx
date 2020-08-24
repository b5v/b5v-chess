import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const SquareWrap = styled.div`
  width: 4vw;
  height: 4vw;
  border: thin solid #eaeaea;
  background: ${(props: { isDarkSquare: boolean }): string =>
    props.isDarkSquare ? 'rgb(125, 135, 150)' : 'rgb(232, 235, 239)'};
`;

type Props = {
  piece: ReactNode;
  isDarkSquare: boolean;
  onClick: () => void;
};

const Square: FC<Props> = ({ piece, isDarkSquare, onClick }) => {
  return (
    <SquareWrap onClick={onClick} isDarkSquare={isDarkSquare || false}>
      {piece}
    </SquareWrap>
  );
};

export default Square;
