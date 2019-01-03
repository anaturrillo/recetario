import actions from './actionTypes';
import IngredientApi from '../api/ingredientsApi';

export function createIngredient(ingredient) {
  return {
    type: actions.CREATE_INGREDIENT,
    ingredient
  };
}

export function loadIngredientsSuccess(ingredients) {
  return {type: actions.LOAD_INGREDIENT_SUCCESS, ingredients};
}

export function transformIngredients(ingredients) {
  return Object.keys(ingredients).map(e => ingredients[e]);
}

export function dispatchIngredients(dispatch) {
  return ingredients => dispatch(loadIngredientsSuccess(transformIngredients(ingredients)));
}

export function loadIngredients() {
  return dispatch => IngredientApi.getAllIngredients()
    .then(dispatchIngredients(dispatch))
    .catch(e => {
      throw(e);
    });
}

export function saveIngredientSucess(ingredient) {
  return {type: actions.SAVE_INGREDIENT_SUCCESS, ingredient};
}

export function updateIngredientSuccess(ingredient) {
  return {type: actions.UPDATE_INGREDIENT_SUCCESS, ingredient};
}

export function saveIngredients(ingredients) {
  return dispatch => IngredientApi.saveIngredients(ingredients)
    .then(ingredients => {
      return ingredients.map(ingredient => {
        if (ingredient.id) dispatch(updateIngredientSuccess(ingredient));
        else dispatch(saveIngredientSucess(Object.assign({}, ingredient, {id:ingredient.name.toLowerCase().replace(/\s/g, "-")})));
      });
    })
    .catch(e => {
      throw(e);
    });
}

export function deleteIngredientSuccess(ingredientId) {
  return {type: actions.DELETE_INGREDIENT_SUCCESS, ingredientId};
}

export function deleteIngredient(ingredientId) {
  return dispatch => IngredientApi.deleteIngredient(ingredientId)
    .then(_ => dispatch(deleteIngredientSuccess(ingredientId)))
    .catch(e => {
      throw(e);
    });
}
