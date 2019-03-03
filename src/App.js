import React, { Component } from 'react';
import './App.css';

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
      <div className="App">
        <header className="App-header">
        </header>
        <div className="Container">
          <p className="Number">1</p>
          <p className="Text">¿Cuáles son las principales diferencias que encuentras entre UX y UI?</p>
          <video controls="controls"></video>
        </div>
      </div>
    );
  }
}

export default App;
