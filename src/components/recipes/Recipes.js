import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/recipesActions';
import RecipesList from './RecipesList';
import {browserHistory} from 'react-router';
import { lowerToHigher } from '../common/helpers';

class Recipes extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.addRecipeRedirect = this.addRecipeRedirect.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  addRecipeRedirect (){
    browserHistory.push('/recetas/nueva');
  }

  deleteRecipe (recipeId){
    const self = this;
    return function () {
      return self.props.actions.deleteRecipe(recipeId);
    };
  }

  render() {
    return (
      <div>
        <h1>Recetas</h1>
        <input type="button" className="btn-primary btn" value="Agregar receta" onClick={this.addRecipeRedirect} />
        <RecipesList recipes={this.props.recipes} deleteRecipe={this.deleteRecipe} allIngredients={this.props.ingredients} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes.sort(lowerToHigher('id')),
    ingredients: state.ingredients
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
