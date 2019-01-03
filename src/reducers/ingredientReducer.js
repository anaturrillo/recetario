import types from '../actions/actionTypes';

export default function ingredientReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_INGREDIENT_SUCCESS:
      return action.ingredients;

    case types.SAVE_INGREDIENT_SUCCESS:
      return [...state, Object.assign({}, action.ingredient)];

    case types.UPDATE_INGREDIENT_SUCCESS:
      return [...state.filter(e => e.id !== action.ingredient.id), Object.assign({}, action.ingredient)];

    case types.DELETE_INGREDIENT_SUCCESS:
      return [...state.filter(e => e.id !== action.ingredientId)];

    default:
      return state;
  }
}
