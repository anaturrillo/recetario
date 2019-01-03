import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ingredientActions from '../../actions/ingredientActions';
import IngredientList from './IngredientList';
import {browserHistory} from 'react-router';
import UploadIngredient from './UploadIngredient';

class Ingredients extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.deleteIngredient = this.deleteIngredient.bind(this);
  }

  addIngredientRedirect (){
    browserHistory.push('/ingredientes/nuevo');
  }

  deleteIngredient (ingredientId){
    const self = this;
    return function () {
      return self.props.actions.deleteIngredient(ingredientId);
    };
  }

  render() {
    return (<div>
      <h1>Ingredientes</h1>
      <div className="btn-group" role="group" aria-label="Basic example">
        <input type="button" className="btn-primary btn" value="Agregar ingrediente" onClick={this.addIngredientRedirect} />
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Subir un archivo
        </button>
      </div>
      <UploadIngredient/>
      <IngredientList ingredients={this.props.ingredients} deleteIngredient={this.deleteIngredient} />
    </div>);
  }
}

Ingredients.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  console.log('ingredients list', state.ingredients);
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
