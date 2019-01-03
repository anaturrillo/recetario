import React, {PropTypes} from 'react';
import RecipeStepRow from './RecipeStepsRow';

const RecipeSteps = ({instructions, onChange}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Paso</th>
        <th>Instrucción</th>
        <th>Imagen</th>
        <th>&nbsp;</th>
      </tr>
      </thead>
      <tbody>
      {instructions.map((e, index)=> <RecipeStepRow key={e.step} instruction={e} />)}
      </tbody>
    </table>
  );
};

RecipeSteps.propTypes = {};

export default RecipeSteps;
