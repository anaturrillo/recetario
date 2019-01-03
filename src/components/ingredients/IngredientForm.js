import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import NumberInput from '../common/NumberInput';

const NewIngredient = ({ingredient, onSave, onChange}) => {
  return (
    <form>
      <TextInput
        name="name"
        value={ingredient.name}
        label="Nombre"
        onChange={onChange}
      />

      <TextInput
        name="units"
        value={ingredient.units}
        label="Unidades"
        onChange={onChange}
      />

      <NumberInput
        name="byAmount"
        value={ingredient.byAmount}
        label="Por cantidad"
        onChange={onChange}
      />

      <NumberInput
        name="calories"
        value={ingredient.calories}
        label="Calorías"
        onChange={onChange}
      />

      <NumberInput
        name="carbs"
        value={ingredient.carbs}
        label="Carbohidratos"
        onChange={onChange}
      />

      <NumberInput
        name="proteins"
        value={ingredient.proteins}
        label="Proteinas"
        onChange={onChange}
      />

      <NumberInput
        name="fats"
        value={ingredient.fats}
        label="Grasas"
        onChange={onChange}
      />

      <input type="submit" onClick={onSave} className="btn btn-primary" />
    </form>
  );
};

NewIngredient.propTypes = {
  ingredient: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default NewIngredient;
