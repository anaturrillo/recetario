import React, {PropTypes} from 'react';
import RecipesRow from './RecipesRow';
import { addNutrinfo } from '../common/helpers';

const RecipesList = ({recipes, deleteRecipe, allIngredients}) => {

  const addIngredientsInfo = recipe => {
    return Object.assign(
      {},
      recipe,
      {
        ingredients: recipe
          .ingredients
          .map(addNutrinfo(allIngredients))
      }
    );
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Receta</th>
          <th>Calorías</th>
          <th>Carbohidratos</th>
          <th>Proteinas</th>
          <th>Grasas</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
      {recipes
        .map(addIngredientsInfo)
        .map(recipe => <RecipesRow key={recipe.id} recipe={recipe} deleteRecipe={deleteRecipe} />)}
      </tbody>
    </table>
  );
};

RecipesList.propTypes = {};

export default RecipesList;
