import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import NumberInput from '../common/NumberInput';
import SelectInput from '../common/SelectInput';
import RecipeIngredients from './RecipeIngredients';
import AddIngredient from './AddIngredient';
import RecipeSteps from './RecipeSteps';
import AddStep from './AddStep';

class RecipeForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      ingredient: {
        ingredientId: '',
        recipeAmount: 0,
        extras: ''
      },
      instruction: {
        step: 0,
        text: '',
        image: ''
      }
    };

    this.allIngredientsForInput = this.allIngredientsForInput.bind(this);
    this.changeIngredientComponent = this.changeIngredientComponent.bind(this);
    this.changeStepComponent = this.changeStepComponent.bind(this);
    this.saveAddIngredient = this.saveAddIngredient.bind(this);
    this.saveAddStep = this.saveAddStep.bind(this);
  }

  allIngredientsForInput (allIngredients) {
    const thisRecipeIngredients = this.props.recipe.ingredients.map(e => e.ingredientId);
    return allIngredients
      .filter(ingredient => !thisRecipeIngredients.includes(ingredient.id))
      .map(ingredient => {
        return {
          value: ingredient.id,
          text: ingredient.name
        };
      });
  }

  changeIngredientComponent (e){

    const newIngredient = Object.assign(
      {},
      this.state.ingredient,
      {[e.target.name]:e.target.value}
    );

    this.setState(Object.assign({}, this.state, {ingredient: newIngredient}));
  }

  changeStepComponent (e){
    const newStep = Object.assign(
      {},
      this.state.instruction,
      {[e.target.name]:e.target.value}
    );

    this.setState(Object.assign({}, this.state, {instruction: newStep}));
  }

  saveAddIngredient (){
    this.props.addIngredient(Object.assign({}, this.state.ingredient));
    const clearState = {
      ingredientId: '',
      recipeAmount: 0,
      extras: ''
    };

    this.setState(Object.assign(
      {},
      this.state,
      {ingredient: clearState}
    ));
  }

  saveAddStep (nextStep){
    const self = this;
    return function () {
      self.props.addStep(Object.assign({}, self.state.instruction, {step: nextStep}));
      const clearState = {
        step: 0,
        text: '',
        image: ''
      };

      self.setState(Object.assign(
        {},
        self.state,
        {instruction: clearState}
      ));
    };
  }

  render() {
    const recipe= this.props.recipe;
    const allIngredients = this.props.allIngredients;
    const instructions = recipe.instructions;
    const nextStep = instructions? instructions.length + 1 : 1;

    return (
      <form>
        <div className="recipe-form-section">
          <h2>Nombre</h2>
          <TextInput
            name="name"
            onChange={this.props.onChange}
            value={recipe.name}
          />
        </div>
        <div className="recipe-form-section">
          <h2>Ingredientes</h2>
          <RecipeIngredients ingredients={this.props.recipeIngredients} onChange={this.props.onChangeRecipeIngredient} />

          <AddIngredient
            ingredients={this.allIngredientsForInput(allIngredients)}
            onChange={this.changeIngredientComponent}
            onClick={this.saveAddIngredient}
            currentIngredient={this.state.ingredient}
          />
        </div>
        <div className="recipe-form-section">
          <h2>Instrucciones</h2>
          {instructions  && <RecipeSteps instructions={instructions} onChange={this.changeStepComponent} />}
          <AddStep
            onChange={this.changeStepComponent}
            onClick={this.saveAddStep(nextStep)}
            currentStep={this.state.instruction}
            nextStep={nextStep}
          />
        </div>
        <input className="btn btn-lg btn-primary accept-btn" type="button" onClick={this.props.onSave} value="Guardar" />
      </form>
    );
  }
}

export default RecipeForm;
