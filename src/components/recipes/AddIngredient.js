import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput';
import TextInput from '../common/TextInput';
import NumberInput from '../common/NumberInput';

const AddIngredient = ({onChange, ingredients, onClick, currentIngredient}) => {
  return (
    <div>
      <button className="btn btn-primary btn-lg btn-block" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        Agregar ingrediente
      </button>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <SelectInput
            name="ingredientId"
            label="Nuevo ingrediente"
            defaultOption="Seleccionar Ingrediente"
            options={ingredients}
            value={currentIngredient.ingredientId}
            onChange={onChange}
          />

          <NumberInput value={parseInt(currentIngredient.recipeAmount)} name="recipeAmount" label="Cantidad" onChange={onChange}/>
          <TextInput value={currentIngredient.extras} name="extras" label="Aclaraciones" onChange={onChange} />
          <input type="button" className="btn btn-primary accept-btn" value="Agregar Ingrediente" onClick={onClick}/>
        </div>
      </div>
    </div>
  );
};

AddIngredient.propTypes = {};

export default AddIngredient;

