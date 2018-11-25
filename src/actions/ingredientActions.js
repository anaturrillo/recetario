import actions from './actionTypes';
import IngredientApi from '../api/mockIngredientsApi';

export function createIngredient(ingredient) {
  return {
    type: actions.CREATE_INGREDIENT,
    ingredient
  };
}

export function loadIngredientsSuccess(ingredients) {
  return {type: actions.LOAD_INGREDIENT_SUCCESS, ingredients};
}

export function loadIngredients() {
  return dispatch => IngredientApi.getAllIngredients()
    .then(ingredients => dispatch(loadIngredientsSuccess(ingredients)))
    .catch(e => {throw(e)});
}

export function saveIngredientSucess(ingredient) {
  return {type: actions.SAVE_INGREDIENT_SUCCESS, ingredient};
}

export function updateIngredientSuccess(ingredient) {
  return {type: actions.UPDATE_INGREDIENT_SUCCESS, ingredient};
}

export function saveIngredient(ingredient) {
  return dispatch => IngredientApi.saveIngredient(ingredient)
    .then(ingredient => {
      if (ingredient.id) dispatch(updateIngredientSuccess(ingredient));
      else dispatch(saveIngredientSucess(ingredient));
    })
    .catch(e => {throw(e)});
}

export function deleteIngredientSuccess(ingredientId) {
  return {type: actions.DELETE_INGREDIENT_SUCCESS, ingredientId};
}

export function deleteIngredient(ingredientId) {
  // ERRORRRR
  return dispatch => IngredientApi.deleteIngredient(ingredientId)
    .then(ingredientId => dispatch(deleteIngredientSuccess(ingredientId)))
    .catch(e => {throw(e)})
}
