import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  piece?: ReactNode;
  isDarkSquare?: boolean;
};

const SquareWrap = styled.div`
  width: 4vw;
  height: 4vw;
  border: thin solid #eaeaea;
  background: ${(props: { isDarkSquare: boolean }): string =>
    props.isDarkSquare ? 'rgb(125, 135, 150)' : 'rgb(232, 235, 239)'};
`;

const Square: FC<Props> = ({ piece, isDarkSquare }) => {
  return <SquareWrap isDarkSquare={isDarkSquare || false}>{piece}</SquareWrap>;
};

export default Square;
