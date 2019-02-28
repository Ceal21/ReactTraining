import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      buttonText : 'Enviar'
    } 
  }

  componentDidMount() {
    var constraints = {audio: { echoCancellation: true, noiseSuppression:true }, video: true};
    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(stream) {
      var video = document.querySelector('video');
      video.srcObject = stream;
      video.onloadedmetadata = function(e) {
        video.play();
      };
    })
    .catch(function(err) {
      console.log(err.name + ": " + err.message);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p>{this.state.buttonText}</p>
        <video controls="controls"></video>
      </div>
    );
  }
}

export default App;
