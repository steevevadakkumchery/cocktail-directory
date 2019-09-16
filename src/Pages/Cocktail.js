import React, { Component } from 'react';
import getCocktailData from '../helpers/getCocktailData';
import Page from '../Components/Page';
import CocktailDescripton from '../Components/CocktailDescripton';
import ErrorBoundary from '../Components/ErrorBoundary';

import { withRouter } from 'react-router-dom';

let CocktailDescriptionWithData;

class Cocktail extends Component {
  constructor(props) {
    super(props);

    CocktailDescriptionWithData = getCocktailData(
      CocktailDescripton,
      `/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`,
    );
  }

  render() {
    const { id } = this.props.match.params;

    if (id) {
      return (
        <Page>
          <ErrorBoundary>
            <CocktailDescriptionWithData />
          </ErrorBoundary>
        </Page>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(Cocktail);
