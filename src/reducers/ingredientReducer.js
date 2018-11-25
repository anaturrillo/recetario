import actions from '../actions/actionTypes';

export default function ingredientReducer(state = [], action) {
  switch (action.type) {
    case actions.LOAD_INGREDIENT_SUCCESS:
      return action.ingredients;

    case actions.SAVE_INGREDIENT_SUCCESS:
      return [...state, Object.assign({}, action.ingredient)];

    case actions.UPDATE_INGREDIENT_SUCCESS:
      return [...state.filter(e => e.id !== action.ingredient.id), Object.assign({}, action.ingredient)];

    case actions.DELETE_INGREDIENT_SUCCESS:
      return [...state.filter(e => e.id !== action.ingredientId)];

    default:
      return state;
  }
}
