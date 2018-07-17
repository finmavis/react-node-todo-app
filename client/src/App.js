import React, { Component } from 'react';

import Aux from './hoc/AuxWrap';

import Header from './components/Header';
import Todo from './containers/Todo';
import Footer from './components/Footer';

class App extends Component {
  state = {
    title: 'React Todo'
  }
  
  render() {
    return (
      <Aux>
        <Header
          title={this.state.title}
          icon='fas fa-clipboard-list' />
        <Todo />
        <Footer />
      </Aux>
    );
  }
}

export default App;
