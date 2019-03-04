import React, { Component } from 'react';
import './App.css';
import { Index } from './components/index.js';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      buttonText : 'Enviar'
    } 
  }

  render() {
    return (
      <Index />
    );
  }
}

export default App;
