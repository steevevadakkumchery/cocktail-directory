import React from 'react';
import CocktailListViewer from '../Components/CocktailListViewer';
import ErrorBoundary from '../Components/ErrorBoundary';

import Page from '../Components/Page';
import Title from '../Components/Title';

function CocktailsList() {
  return (
    <Page>
      <Title>Cocktails</Title>
      <ErrorBoundary>
        <CocktailListViewer />
      </ErrorBoundary>
    </Page>
  );
}

export default CocktailsList;
