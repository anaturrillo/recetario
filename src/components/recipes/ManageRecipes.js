import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/recipesActions';
import RecipeForm from './RecipeForm';
import { lowerToHigher, nonRecipeRecipe, addNutrinfo } from '../common/helpers';
import NutritionalInformation from './NutritionalInformation';
import {browserHistory} from 'react-router';

class ManageRecipes extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = this.props.recipe;

    this.changeComponent = this.changeComponent.bind(this);
    this.ingredients = this.ingredients.bind(this);
    this.changeRecipeSection = this.changeRecipeSection.bind(this);
    this.changeRecipeIngredient = this.changeRecipeIngredient.bind(this);
    this.addRecipeIngredient = this.addRecipeIngredient.bind(this);
    this.addStep = this.addStep.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if (this.state.id !== nextProps.recipe.id) this.setState(nextProps.recipe);
  }

  ingredients(ingredients) {
    return ingredients
        .map(addNutrinfo(this.props.ingredients)) || [];
  }

  changeComponent (e) {
    const newState = Object.assign({}, this.state);
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  changeRecipeSection (recipeSection) {
    const self = this;
    return function (event) {
      const newState = Object.assign({}, self.state);

      self.setState(newState);
    };
  }

  changeRecipeIngredient(ingredientId) {
    const self = this;
    return function (e) {
      const recipeIngredients = [...self.state.ingredients];
      const ingredient = Object.assign(
        {},
        recipeIngredients.find(e => e.ingredientId === ingredientId),
        {[e.target.name]: e.target.value}
      );

      const newIngredientsList = [
        ...recipeIngredients.filter(e => e.ingredientId !== ingredientId),
        ingredient
      ];

      self.setState(Object.assign(
        {},
        self.state,
        {ingredients: newIngredientsList.sort(lowerToHigher('ingredientId'))}
      ));
    };
  }

  addRecipeIngredient (ingredient) {
    const recipe = Object.assign({}, this.state);
    recipe.ingredients = [...recipe.ingredients, ingredient];
    this.setState(recipe);
  }

  addStep (instruction) {
    const recipe = Object.assign({}, this.state);
    recipe.instructions = [...recipe.instructions, instruction];
    this.setState(recipe);
  }

  saveRecipe (event) {
    event.preventDefault();
    console.log(this.state)

    this.props.actions.addRecipe(this.state);
    browserHistory.push('/recetas');
  }

  render() {
    return (
      <div className="row edit-recipe">
        <h1>{this.state.name || 'Receta'}</h1>

        <div className="col-md-6">
          <RecipeForm
            recipe={this.state}
            onSave={this.saveRecipe}
            recipeIngredients={this.ingredients(this.state.ingredients)}
            onChange={this.changeComponent}
            allIngredients={this.props.ingredients}
            onChangeRecipeSection={this.changeRecipeSection}
            onChangeRecipeIngredient={this.changeRecipeIngredient}
            addIngredient={this.addRecipeIngredient}
            addStep={this.addStep}
          />
        </div>
        <div className="col-md-6 nutrinfo">
          <NutritionalInformation ingredients={this.ingredients(this.state.ingredients)} />
        </div>

      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const recipes = state.recipes;

  let recipe = nonRecipeRecipe;

  const recipeId = ownProps.params.id;

  if (recipeId && recipes && recipes.length) {
    recipe = Object.assign({}, recipes.find(r => r.id === recipeId));
    recipe.ingredients && recipe.ingredients.sort(lowerToHigher('ingredientId'));
    recipe.instructions && recipe.instructions.sort(lowerToHigher('step'));
  }
  return {recipe, ingredients: state.ingredients};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageRecipes);
