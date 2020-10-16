import React, { Component } from 'react';
import InputBasicInfo from './InputBasicInfo';
import InputEducation from './InputEducation';

class InputsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='InputsContainer'>
                <InputBasicInfo
                    info={this.props.BasicsInputsContainer}
                    submitChange={this.props.submitChange}
                />
                <InputEducation />
            </div>
        );
    }
}

export default InputsContainer;
