import React from 'react';
import Title from '../Components/Title';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
`;
const Image = styled.img`
  border: 6px solid #ddd;
`;

const Details = styled.div`
  color: #fff;
  padding: 0 3rem;
`;

const Subheading = styled.h2`
  font-weight: 300;
`;

const IngredientView = styled.li`
  color: #fff;
`;

const Instruction = styled.h3`
  color: #fff;
  font-weight: 300;
`;

function CocktailDescripton({ cocktailData }) {
  let ingredientsKeys;
  let ingredients;

  if (cocktailData) {
    const objectKeys = Object.keys(cocktailData.drinks[0]);
    ingredientsKeys = objectKeys.filter(key => key.includes('strIngredient'));

    ingredients = ingredientsKeys.map(key => {
      return cocktailData.drinks[0][key];
    });
  }

  return (
    <>
      <Title>{cocktailData && cocktailData.drinks[0].strDrink}</Title>
      <Section>
        <Image
          width="500px"
          height="500px"
          src={cocktailData && cocktailData.drinks[0].strDrinkThumb}
        />
        <Details>
          <Subheading>Ingredients</Subheading>
          <ul>
            {ingredients &&
              ingredients.map(ingredient => {
                if (ingredient) {
                  return <IngredientView key={ingredient}>{ingredient}</IngredientView>;
                } else {
                  return null;
                }
              })}
          </ul>
          <br />
          <Subheading>Instruction</Subheading>
          <Instruction>{cocktailData && cocktailData.drinks[0].strInstructions}</Instruction>
        </Details>
      </Section>
    </>
  );
}

export default CocktailDescripton;
