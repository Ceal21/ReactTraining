import React, { Component } from 'react';

export class Container extends Component{
    constructor(props){
        super(props);
        this.state = {
            step : 0
        }
    }

    render() {
        return (
            <div className="Container">
                <p className="Number">1</p>
                <p className="Text">¿Cuáles son las principales diferencias que encuentras entre UX y UI?</p>
                <video controls="controls"></video>
            </div>
        );
    }
}