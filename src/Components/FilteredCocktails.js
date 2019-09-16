import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import DrinkThumbnail from '../Components/DrinkThumnail';

const ListContainer = styled.div`
  width: 100%;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* see notes below */
  grid-gap: 3rem;
`;

class FilteredCocktails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cocktailData } = this.props;
    let cocktailsFound = false;
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
          {!cocktailsFound && <h1>No Drinks Found</h1>}
        </List>
      </ListContainer>
    );
  }
}

export default FilteredCocktails;
