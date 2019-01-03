import types from '../actions/actionTypes';

export default function recipesReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_RECIPES_SUCCESS:
      return action.recipes;

    case types.ADD_RECIPE_SUCCESS:
      return [...state, action.recipe];

    case types.UPDATE_RECIPE_SUCCESS:
      return [...state.filter(e => e.id !== action.ingredient.id), Object.assign({}, action.ingredient)];

    case types.DELETE_RECIPE_SUCCESS:
      return [...state.filter(e => e.id !== action.recipeId)];

    default:
      return state;
  }
}
