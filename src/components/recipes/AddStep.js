import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import NumberInput from '../common/NumberInput';

const AddStep = ({onChange, onClick, currentStep, nextStep}) => {
  return (
    <div>
      <button className="btn btn-primary btn-lg btn-block" type="button" data-toggle="collapse" data-target="#addStepForm" aria-expanded="false" aria-controls="addStepForm">
        Agregar Paso
      </button>
      <div className="collapse" id="addStepForm">
        <div className="card card-body">
          <h3>Paso No. {nextStep}</h3>

          <TextInput value={currentStep.text} name="text" label="Instrucción" onChange={onChange}/>
          <TextInput value={currentStep.image} name="image" label="Imagen" onChange={onChange} />
          <input type="button" className="btn btn-primary accept-btn" value="Agregar Ingrediente" onClick={onClick}/>
        </div>
      </div>
    </div>
  );
};

AddStep.propTypes = {};

export default AddStep;
