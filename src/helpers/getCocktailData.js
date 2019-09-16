import React, { Component } from 'react';

function getCocktailData(ComponentWithoutData, query) {
  class ComponentWithData extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: null,
      };
    }

    componentDidMount() {
      fetch(`https://www.thecocktaildb.com${query}`)
        .then(response => response.json())
        .then(data => {
          this.setState({ data: data });
        })
        .catch(error => {
          throw new Error("Can't get data");
        });
    }

    render() {
      return <ComponentWithoutData cocktailData={this.state.data} {...this.props} />;
    }
  }

  return ComponentWithData;
}

export default getCocktailData;
