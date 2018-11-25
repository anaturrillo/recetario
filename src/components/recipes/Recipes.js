import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Recipes extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (<div></div>);
  }
}

Recipes.PropTypes = {};

function mapStateToProps(state) {
  return {state};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes)
