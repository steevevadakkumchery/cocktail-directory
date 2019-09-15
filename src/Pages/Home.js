import React, { Suspense } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo-white.png';
import Page from '../Components/Page';
import Title from '../Components/Title';
const RandomCocktail = React.lazy(() => import('./../Components/RandomCocktail'));

const TitleContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;
`;

const LogoImage = styled.img`
  margin-top: 150px;
  width: 30rem;
`;

const Content = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 200px;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 500px;
  width: 500px;
  background-color: #000;
`;

const TextArea = styled.span`
  display: flex;
  align-items: center;
  width: 400px;
  padding-left: 40px;
`;

function Home() {
  return (
    <Page>
      <TitleContainer>
        <LogoImage src={logo} height="168px" alt="cocktail directory" />
      </TitleContainer>
      <Content>
        <Suspense fallback={<Loader>Loading...</Loader>}>
          <RandomCocktail height="400px" width="400px" />
        </Suspense>
        <TextArea>
          <Title>Become a professional barista</Title>
        </TextArea>
      </Content>
    </Page>
  );
}

export default Home;
