import actions from './actionTypes';
import recipesApi from '../api/recipesApi';

export function loadRecipesSuccess(recipes) {
  return {type: actions.LOAD_RECIPES_SUCCESS, recipes};
}

export function transformRecipes(recipes) {
  return Object.keys(recipes).map(e => recipes[e]);
}

export function dispatchRecipes(dispatch) {
  return recipes => dispatch(loadRecipesSuccess(transformRecipes(recipes)));
}

export function loadRecipes() {
  return dispatch => recipesApi.getAllRecipes()
    .then(dispatchRecipes(dispatch))
    .catch(e => {
      throw(e);
    });
}

export function addRecipeSuccess(recipe) {
  return {type: actions.ADD_RECIPE_SUCCESS, recipe};
}

export function addRecipe(recipe) {
  return dispatch => recipesApi.saveRecipe(recipe)
    .then(recipe => dispatch(addRecipeSuccess(recipe)))
    .catch(e => {throw(e)});
}

export function deleteRecipeSuccess(recipeId) {
  return {type: actions.DELETE_RECIPE_SUCCESS, recipeId};
}

export function deleteRecipe(recipeId) {
  return dispatch => recipesApi.deleteRecipe(recipeId)
    .then(_ => dispatch(deleteRecipeSuccess(recipeId)))
    .catch(e => {throw(e)});
}
