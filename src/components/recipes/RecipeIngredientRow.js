import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import NumberInput from '../common/NumberInput';

const RecipeIngredientRow = ({ingredient, onChange, deleteIngredient}) => {
  return (

    <tr>
      <td>
        <div className="no-field">
          {ingredient.name}
        </div>
      </td>
      <td>
        <NumberInput name="recipeAmount" value={ingredient.recipeAmount} onChange={onChange(ingredient.ingredientId)} />
      </td>
      <td>
        <TextInput name="extras" value={ingredient.extras} onChange={onChange(ingredient.ingredientId)} />
      </td>
      <td>
        <div className="no-field">
          <input type="button" className="btn btn-primary" value="borrar" onClick={deleteIngredient}/>
        </div>
      </td>
    </tr>
  );
};

RecipeIngredientRow.propTypes = {};

export default RecipeIngredientRow;
