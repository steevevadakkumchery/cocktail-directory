import React from 'react';
import styled from 'styled-components';
import CocktailListViewer from '../Components/CocktailListViewer';

import Page from '../Components/Page';
import Title from '../Components/Title';

function CocktailsList() {
  return (
    <Page>
      <Title>Cocktails</Title>
      <CocktailListViewer />
    </Page>
  );
}

export default CocktailsList;
