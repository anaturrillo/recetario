import React, {PropTypes} from 'react';
import { calculateNutriValues } from '../common/helpers';

const RecipesRow = ({recipe, deleteRecipe}) => {
  const nutrivalues = calculateNutriValues(recipe.ingredients);

  return (
    <tr>
      <td><a href={'/recetas/' + recipe.id}>{recipe.name}</a></td>
      <td>{nutrivalues.calories}</td>
      <td>{nutrivalues.carbs}</td>
      <td>{nutrivalues.proteins}</td>
      <td>{nutrivalues.fats}</td>
      <td><a className="btn-primary btn" onClick={deleteRecipe(recipe.id)}>borrar</a></td>
    </tr>
  );
};

export default RecipesRow;
