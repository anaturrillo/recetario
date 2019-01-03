import React, {PropTypes} from 'react';
import RecipeIngredientRow from './RecipeIngredientRow';

const RecipeIngredients = ({ingredients, onChange}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Ingrediente</th>
          <th>Cantidad</th>
          <th>Aclaraciones</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
      {ingredients.map((e, index)=> <RecipeIngredientRow key={index} ingredient={e} onChange={onChange} />)}
      </tbody>
    </table>
  );
};

export default RecipeIngredients;
