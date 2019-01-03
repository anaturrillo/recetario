import React, {PropTypes} from 'react';

const RecipeStepsRow = ({instruction}) => {
  return (
    <tr>
      <td>{instruction.step}</td>
      <td>{instruction.text}</td>
      <td><img src={instruction.image} /></td>
    </tr>
  );
};

export default RecipeStepsRow;
