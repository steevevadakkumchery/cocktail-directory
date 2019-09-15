import React, { Component } from 'react';
import styled from 'styled-components';
import { alphabet } from '../helpers/globalConstants';
import FilteredCocktails from '../Components/FilteredCocktails';
import getCocktailData from '../helpers/getCocktailData';

const Viewer = styled.div`
  color: #fff;
  margin-bottom: 5rem;
`;

const LetterList = styled.div`
  display: flex;
`;

const Letter = styled.button`
  color: #fff;
  font-size: 1.5em;
  font-weight: 200;
  background-color: ${props => (props.selected ? 'grey' : '#000')};
  height: 3rem;
  width: 3rem;
  border: 0px;
  cursor: pointer;
  margin-bottom: 2rem;

  &:focus {
    background-color: grey;
    outline: 0;
  }

  &:hover {
    background-color: grey;
    outline: 0;
  }
`;

let FilteredCocktailsWithData = getCocktailData(FilteredCocktails, '/api/json/v1/1/search.php?f=a');

class CocktailListViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLetter: 'a',
    };
  }

  handleSelect(selectedLetter) {
    this.setState({
      selectedLetter,
    });

    FilteredCocktailsWithData = getCocktailData(
      FilteredCocktails,
      `/api/json/v1/1/search.php?f=${selectedLetter}`,
    );
  }

  render() {
    const { selectedLetter } = this.state;

    return (
      <Viewer>
        <LetterList>
          {alphabet.map(letter => (
            <Letter
              selected={letter === selectedLetter}
              onClick={this.handleSelect.bind(this, letter)}
            >
              {letter.toUpperCase()}
            </Letter>
          ))}
        </LetterList>
        <FilteredCocktailsWithData />
      </Viewer>
    );
  }
}

export default CocktailListViewer;
