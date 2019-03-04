import React, { Component } from 'react';
import {Container} from './container.js';

export class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            step : 0
        }
    }

    render() {
        return (
            <div className="App">
            <header className="App-header">
            </header>
            <Container />
            </div>
        );
    }
}