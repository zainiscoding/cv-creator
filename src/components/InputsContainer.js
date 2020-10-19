import React, { Component } from 'react';
import InputBasicInfo from './InputBasicInfo';
import InputEducation from './InputEducation';
import InputWorkExperience from './InputWorkExperience';

class InputsContainer extends Component {
    render() {
        return (
            <div id='inputsContainer'>
                <InputBasicInfo
                    info={this.props.BasicsInputsContainer}
                    submitChange={this.props.submitChange}
                />
                <InputEducation
                    submitChange={this.props.submitChange}
                    removeStateItem={this.props.removeStateItem}
                    info={this.props.info}
                />
                <InputWorkExperience
                    submitChange={this.props.submitChange}
                    removeStateItem={this.props.removeStateItem}
                    info={this.props.info}
                />
                <div className='submitBtnContainer'>
                    <input
                        type='submit'
                        value='Submit'
                        id='submitCvBtn'
                        onClick={this.props.submitChange}
                    ></input>
                </div>
            </div>
        );
    }
}

export default InputsContainer;
