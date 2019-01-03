import React, {PropTypes} from 'react';

const IngredientRow = ({ingredient, deleteIngredient}) => {
  return (
    <tr className="ingredientRow">
      <td>{ingredient.name}</td>
      <td>{ingredient.units}</td>
      <td>{ingredient.byAmount}</td>
      <td>{ingredient.calories}</td>
      <td>{ingredient.carbs}</td>
      <td>{ingredient.proteins}</td>
      <td>{ingredient.fats}</td>
      {deleteIngredient && <td>
        <a href={'ingredientes/' + ingredient.id} className="btn btn-primary">
          editar
        </a>
      </td>}
      {deleteIngredient && <td>
        <button className="btn-primary btn" onClick={deleteIngredient(ingredient.id)}>borrar</button>
      </td>}

    </tr>
  );
};

IngredientRow.propTypes = {
  ingredient: PropTypes.object.isRequired
};

export default IngredientRow;
