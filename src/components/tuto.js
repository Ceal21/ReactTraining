import React, { Component } from 'react';

export class Tuto extends Component{
    render() {
        return (
            <div className="Tuto">
                <img scr={require('../media/tutoImg.png')} alt="tuto" />
            </div>
        );
    }
}