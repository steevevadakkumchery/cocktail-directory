import React from 'react';
import styled from 'styled-components';

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #000;
  height: auto;
  padding: 60px;
`;

function Page({ children }) {
  return <StyledPage>{children}</StyledPage>;
}

export default Page;
