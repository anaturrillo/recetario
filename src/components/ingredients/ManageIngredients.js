import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import IngredientForm from './IngredientForm';
import * as ingredientActions from './../../actions/ingredientActions';
import {browserHistory} from 'react-router';

class ManageIngredients extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = Object.assign({}, this.props.ingredient);

    this.changeIngredient = this.changeIngredient.bind(this);
    this.saveIngredient = this.saveIngredient.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.ingredient.id !== nextProps.ingredient.id) this.setState(nextProps.ingredient);
  }

  changeIngredient(event){
    const field = event.target.name;
    let ingredient = Object.assign({}, this.state);
    ingredient[field] = event.target.value;
    this.setState(ingredient);
  }

  saveIngredient(event){
    event.preventDefault();
    this.props.actions.saveIngredients([this.state]);
    browserHistory.push('/ingredientes');
  }

  render() {


    return (
      <div>

        <h1>Ingrediente</h1>

        <IngredientForm
          ingredient={this.state}
          onSave={this.saveIngredient}
          onChange={this.changeIngredient}
        />
      </div>
    );
  }
}

ManageIngredients.PropTypes = {};

const byId = ingredientId => ingredient => ingredient.id === ingredientId;

function mapStateToProps(state, ownProps) {
  let ingredient = {
    id: '',
    name: '',
    units: '',
    byAmount: 0,
    calories: 0,
    carbs: 0,
    proteins: 0,
    fats: 0
  };

  const ingredientId = ownProps.params.id;

  if (ingredientId && state.ingredients && state.ingredients.length)
    ingredient = state.ingredients.find(byId(ingredientId));

  return {ingredient};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ingredientActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageIngredients);
