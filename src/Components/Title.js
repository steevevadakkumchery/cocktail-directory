import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  color: #fff;
  font-weight: 200;
  font-size: 3em;
`;

function Title({ children }) {
  return <Header>{children}</Header>;
}

export default Title;
