import React, { Component } from 'react';
import InputsContainer from './InputsContainer';

class InputEducation extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id='EducationInputsContainer'>
                <h2>Education</h2>
                <label htmlFor='institutionNameInput'>Institution name</label>
                <input
                    name='education'
                    type='text'
                    id='institutionNameInput'
                ></input>
            </div>
        );
    }
}

export default InputEducation;
