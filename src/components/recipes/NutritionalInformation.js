import React, {PropTypes} from 'react';
import {calculateNutriValues, calculateNutriValues_} from '../common/helpers';

const NutritionalInformation = ({ingredients}) => {

  const nutrivalues = calculateNutriValues(ingredients);

  return (
    <div>
      <h2>Información nutricional</h2>
      <div className="nutri-values">
        <strong>Cantidad por</strong> 100 gramos
      </div>
      <div className="nutri-values">
        <strong>Calorias</strong> {nutrivalues.calories || 0}
      </div>
      <div className="nutri-values">
        <strong>Carbohidratos</strong> {nutrivalues.carbs || 0}
      </div>
      <div className="nutri-values">
        <strong>Proteinas</strong> {nutrivalues.proteins || 0}
      </div>
      <div className="nutri-values">
        <strong>Grasas</strong> {nutrivalues.fats || 0}
      </div>
    </div>
  );
};

NutritionalInformation.propTypes = {};

export default NutritionalInformation;
