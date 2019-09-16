import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CocktailsList from './Pages/CocktailsList';
import Navigation from './Components/Navigation';
import Cocktail from './Pages/Cocktail';

function Root() {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact component={Home} />
      <Route path="/cocktails" component={CocktailsList} />
      <Route path="/cocktail/" component={Cocktail} />
      <Route path="/cocktail/:id" component={Cocktail} />
    </Router>
  );
}

export default Root;
