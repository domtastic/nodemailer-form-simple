import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
    constructor(props){
        super(props)

    }



    render() {
        return (
            <div className="Input">
                <input
                    className="input"
                    name={this.props.name}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    onChange={this.props.handleChange} />
            </div>
        );
    }
}

export default Input;

