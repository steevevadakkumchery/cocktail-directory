import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import DrinkThumbnail from '../Components/DrinkThumnail';

const ListContainer = styled.div`
  width: 100%;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); /* see notes below */
  grid-gap: 3rem;
  text-align: center;
`;

class FilteredCocktails extends Component {
  render() {
    const { cocktailData } = this.props;
    let cocktailsFound = null;
    if (cocktailData) {
      cocktailsFound = Boolean(cocktailData.drinks);
    }
    return (
      <ListContainer>
        <List>
          {cocktailsFound &&
            cocktailData.drinks.map(drink => {
              return (
                <Link to={`/cocktail/${drink.idDrink}`}>
                  <DrinkThumbnail drink={drink} />
                </Link>
              );
            })}
          {cocktailsFound === false && <h1>No Drinks Found</h1>}
          {cocktailsFound === null && null}
        </List>
      </ListContainer>
    );
  }
}

export default FilteredCocktails;
