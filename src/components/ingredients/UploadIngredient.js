import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ingredientActions from './../../actions/ingredientActions';
import CsvParse from '@vtex/react-csv-parse';
import {browserHistory} from 'react-router';
import IngredientList from './IngredientList';

class UploadIngredient extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.handleData = this.handleData.bind(this);
    this.uploadData = this.uploadData.bind(this);
    this.cleanData = this.cleanData.bind(this);
    this.cleanData_ = this.cleanData_.bind(this);
    this.saveIngredients = this.saveIngredients.bind(this);
    this.generateId = this.generateId.bind(this);
  }

  handleData(data){
    this.setState({data});
  }

  uploadData(onChange) {
    return (
      <form>
        <div class="form-group">
          <label for="exampleFormControlFile1">Columnas: nombre, calorias x 100 gr, carbohidratos, proteinas, grasas</label>
          <input onChange={onChange} type="file" class="form-control-file" id="exampleFormControlFile1" />
        </div>
      </form>
    );
  }

  cleanData(e){
    e.stopPropagation();
    this.setState({data:[]});
  }

  cleanData_(event){
    event.stopPropagation();
    //Esto lo tuve que hacer porque no encuentro como agarrar el evento del close de la modal, y el backdrop es parte de la modal
  }

  saveIngredients(event){
    console.log('salver', this.props);

    this.props.actions.saveIngredients(this.state.data);
    browserHistory.push('/ingredientes');
  }

  generateId(ingredient){
    return Object.assign(
      ingredient,
      {id: ingredient.name.toLowerCase().replace(/\s/g, "-")}
    );
  }

  render() {
    const keys = [
      "name",
      "calories",
      "carbs",
      "proteins",
      "fats",
      "units",
      "byAmount"
    ];

    return (
    <div onClick={this.cleanData} className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div onClick={this.cleanData_} className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {this.state.data && this.state.data.length !== 0 ? 'Guardar ingredientes subidos': 'Subir un archivo csv'}
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {(!this.state.data || this.state.data.length === 0) && <CsvParse
              keys={keys}
              onDataUploaded={this.handleData}
              onError={this.handleError}
              render={this.uploadData}
            />}
            {this.state.data && this.state.data.length !== 0 && <IngredientList ingredients={this.state.data.map(this.generateId)} />}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.cleanData}>Cerrar</button>
            {this.state.data && this.state.data.length !== 0 && <button type="button" data-dismiss="modal" className="btn btn-primary" onClick={this.saveIngredients}>Guardar ingredientes</button>}
          </div>
        </div>
      </div>
    </div>
    );
  }
}

UploadIngredient.PropTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ingredientActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(UploadIngredient);
