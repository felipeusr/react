import React, { Component } from 'react';

export default class CounterClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value : 0
        }
    }
    componentDidUpdate() {
        alert("componentDidUpdate: state atualizado");
    }
    add = () => {
        this.setState({value:this.state.value+=1})
    }
    render() {
        return (
            <div>
                <p>{this.state.value}</p>
                <button onClick={this.add} className='btn'>Add</button>
            </div>
        );
    }
}