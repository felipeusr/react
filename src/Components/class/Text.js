import React, { Component } from 'react';

export class Text extends Component {
    render() {
        return (
            <h3 className='App-link'>{this.props.Label}</h3>
        );
    }
}