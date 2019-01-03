import {combineReducers} from 'redux';
import ingredients from './ingredientReducer';
import recipes from './recipesReducers';

const rootReducer = combineReducers({
  ingredients,
  recipes
});

export default rootReducer;
