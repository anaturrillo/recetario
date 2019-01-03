import React, {PropTypes} from 'react';
import IngredientRow from './IngredientRow';
import {lowerToHigher} from '../common/helpers';

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
          {deleteIngredient && <th>&nbsp;</th>}
          {deleteIngredient && <th>&nbsp;</th>}
        </tr>
      </thead>
      <tbody>
      {ingredients.sort(lowerToHigher('id')).map(ingredient => <IngredientRow key={ingredient.id} ingredient={ingredient} deleteIngredient={deleteIngredient} /> )}
      </tbody>
    </table>
  );
};

IngredientList.propTypes = {
  ingredients: PropTypes.array.isRequired
};

export default IngredientList;
