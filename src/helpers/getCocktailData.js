import React, { Component } from 'react';
import ErrorBoundary from '../Components/ErrorBoundary';

function getCocktailData(ComponentWithoutData, query) {
  class ComponentWithData extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: null,
        error: false,
      };
    }

    componentDidMount() {
      fetch(`https://www.thecocktaildb.com${query}`)
        .then(response => response.json())
        .then(data => {
          this.setState({ data: data });
          return;
        })
        .catch(error => {
          this.setState({ error: true });
        });
    }

    render() {
      if (this.state.error) {
        this.setState({ error: false });
        throw new Error('I crashed');
      }

      return (
        <ErrorBoundary>
          <ComponentWithoutData cocktailData={this.state.data} {...this.props} />
        </ErrorBoundary>
      );
    }
  }

  return ComponentWithData;
}

export default getCocktailData;
