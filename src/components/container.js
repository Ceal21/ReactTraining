import React, { Component } from 'react';

export class Container extends Component{
    constructor(props){
        super(props);
        this.state = {
            step : 0
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
            <div className="Container">
                <p className="Number">{this.props.question}</p>
                <p className="Text">¿Cuáles son las principales diferencias que encuentras entre UX y UI?</p>
                <video></video>
            </div>
        );
    }
}