import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo-white.png';

const Page = styled.section`
  display: flex;
  justify-content: center;
  background-color: #000;
  height: 100vh;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 70vh;
`;

const LogoImage = styled.img`
  width: 30rem;
`;

function Home() {
  return (
    <Page>
      <TitleContainer>
        <LogoImage src={logo} />
      </TitleContainer>
    </Page>
  );
}

export default Home;
