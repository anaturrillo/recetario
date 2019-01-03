import React from 'react';
import { Route, IndexRoute }from 'react-router';
import App from './App';
import HomePage from './components/home/HomePage';
import Ingredients from './components/ingredients/Ingredients';
import ManageIngredients from './components/ingredients/ManageIngredients';
import Recipes from './components/recipes/Recipes';
import ManageRecipes from './components/recipes/ManageRecipes';
import Profile from './components/profiles/Profile';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="ingredientes" component={Ingredients} />
    <Route path="ingredientes/nuevo" component={ManageIngredients} />
    <Route path="ingredientes/:id" component={ManageIngredients} />
    <Route path="recetas" component={Recipes} />
    <Route path="recetas/nueva" component={ManageRecipes} />
    <Route path="recetas/:id" component={ManageRecipes} />
    <Route path="perfil" component={Profile} />
  </Route>
);
