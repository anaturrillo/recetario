import React, {PropTypes} from 'react';
import IngredientRow from './IngredientRow';

const IngredientList = ({ingredients, deleteIngredient}) => {

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Unidades</th>
          <th>Por cantidad</th>
          <th>Calorías</th>
          <th>Carbohidratos</th>
          <th>Proteinas</th>
          <th>Grasas</th>
          <th>&nbsp;</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
      {ingredients.map(ingredient => <IngredientRow key={ingredient.id} ingredient={ingredient} deleteIngredient={deleteIngredient} /> )}
      </tbody>
    </table>
  );
};

IngredientList.propTypes = {
  ingredients: PropTypes.array.isRequired
};

export default IngredientList;
