import React from 'react';
import { Route, IndexRoute }from 'react-router';
import App from './App';
import HomePage from './components/home/HomePage';
import Ingredients from './components/ingredients/Ingredients';
import ManageIngredients from './components/ingredients/ManageIngredients';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="ingredientes" component={Ingredients} />
    <Route path="ingredientes/nuevo" component={ManageIngredients} />
    <Route path="ingredientes/:id" component={ManageIngredients} />
  </Route>
);
