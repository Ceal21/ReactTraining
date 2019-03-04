import React, { Component } from 'react';
import {Container} from './container.js';
import {Tuto} from './tuto.js';

export class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            step : 0
        }
    }

    next(){
        this.setState({step:1});
    }

    render() {
        return (
            <div className="App">
                <header className="App-header"></header>
                {this.state.step > 0 ? <Container question={this.state.step} /> : <Tuto />}
                {this.state.step === 0 ? 
                <button className="Skip" onClick={()=>this.next()}>Skip</button> : 
                <button className="Skip" >Soporte Técnico</button>}
            </div>
        );
    }
}