import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ingredientActions from '../../actions/ingredientActions';
import IngredientList from './IngredientList';
import {browserHistory} from 'react-router';

class Ingredients extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.deleteIngredient = this.deleteIngredient.bind(this)
  }

  addIngredientRedirect (){
    browserHistory.push('/ingredientes/nuevo');
  }

  deleteIngredient (ingredientId){
    return ingredientActions.deleteIngredient(ingredientId);
  }

  render() {
    return (<div>
      <h1>Ingredientes</h1>
      <input type="button" className="btn-primary btn" value="agregar ingrediente" onClick={this.addIngredientRedirect} />
      <IngredientList ingredients={this.props.ingredients} deleteIngredient={this.deleteIngredient} />
    </div>);
  }
}

Ingredients.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    ingredients: state.ingredients
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ingredientActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);
