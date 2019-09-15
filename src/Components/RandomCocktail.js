import React from 'react';
import getCocktailData from '../helpers/getCocktailData';
import styled from 'styled-components';

const RandomCocktailImage = styled.img`
  border: 6px solid #ddd;
`;

function RandomCocktail({ cocktailData, height, width }) {
  if (cocktailData) {
    return (
      <RandomCocktailImage
        height={height}
        width={width}
        src={cocktailData.drinks[0].strDrinkThumb}
      />
    );
  }
  return null;
}

export default getCocktailData(RandomCocktail, '/api/json/v1/1/random.php');
