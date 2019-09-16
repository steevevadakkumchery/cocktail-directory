import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import CocktailsList from './Pages/CocktailsList';
import Navigation from './Components/Navigation';
import Cocktail from './Pages/Cocktail';
import PageNotFound from './Pages/PageNotFound';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000
  }
`;

function Root() {
  return (
    <Router>
      <GlobalStyle />
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cocktails" component={CocktailsList} />
        <Route path="/cocktail/:id" component={Cocktail} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default Root;
