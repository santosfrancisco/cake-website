import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';

const Title = styled.h1`
  color: ${colors.pink};
  font-size: 50px;
`;

export default function Home() {
  return <Title>My page</Title>;
}
