import React, { Component } from 'react';
import InputBasicInfo from './InputBasicInfo';
import InputEducation from './InputEducation';
import InputWorkExperience from './InputWorkExperience';

class InputsContainer extends Component {
    render() {
        return (
            <div id='inputsContainer'>
                <InputBasicInfo
                    info={this.props.info}
                    submitChange={this.props.submitChange}
                    checkEmptyInput={this.props.checkEmptyInput}
                />
                <InputEducation
                    submitChange={this.props.submitChange}
                    removeStateItem={this.props.removeStateItem}
                    info={this.props.info}
                    checkEmptyInput={this.props.checkEmptyInput}
                />
                <InputWorkExperience
                    submitChange={this.props.submitChange}
                    removeStateItem={this.props.removeStateItem}
                    info={this.props.info}
                    checkEmptyInput={this.props.checkEmptyInput}
                />
            </div>
        );
    }
}

export default InputsContainer;
