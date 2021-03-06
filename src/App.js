import React, {PropTypes} from 'react';
import Header from './components/common/header';

class App extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.PropTypes = {
  children: PropTypes.object.isRequired
};

export default App;
