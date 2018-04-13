import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    constructor(props){
        super(props)

    }

    render() {
        return (
            <div className="Button">
                <button onClick={this.props.handleClick}>{this.props.label}</button>
            </div>
        );
    }
}

export default Button;
