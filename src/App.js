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

  componentDidMount() {
    var constraints = {audio: { echoCancellation: true, noiseSuppression:true }, video: {width:650, height:360}};
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
      <Index />
    );
  }
}

export default App;
