import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CocktailsList from './Pages/CocktailsList';
import IngredientsList from './Pages/IngredientsList';
import CocktailRoulette from './Pages/CocktailRoulette';
import Navigation from './Components/Navigation';

function Root() {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact component={Home} />
      <Route path="/cocktails" component={CocktailsList} />
      <Route path="/ingredients" component={IngredientsList} />
      <Route path="/cocktail-roulette" component={CocktailRoulette} />
    </Router>
  );
}

export default Root;
