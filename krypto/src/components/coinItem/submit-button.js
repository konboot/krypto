import React, { Component } from 'react';
import './button.css';

export default class SubmitButton extends Component {
    render() {
        return (
            <div>
                <input type='submit' className='success button' onClick={this.props.action} />
            </div>
        );
    }
}
