import React, { Component } from 'react';
import InputBasicInfo from './InputBasicInfo';
import InputEducation from './InputEducation';
import InputWorkExperience from './InputWorkExperience';

class InputsContainer extends Component {
    render() {
        const requiredText = <p className='textRequired'>(Required)</p>;
        return (
            <div id='inputsContainer'>
                <InputBasicInfo
                    info={this.props.info}
                    submitChange={this.props.submitChange}
                    checkEmptyInput={this.props.checkEmptyInput}
                    requiredText={requiredText}
                />
                <InputEducation
                    submitChange={this.props.submitChange}
                    removeStateItem={this.props.removeStateItem}
                    info={this.props.info}
                    checkEmptyInput={this.props.checkEmptyInput}
                    requiredText={requiredText}
                />
                <InputWorkExperience
                    submitChange={this.props.submitChange}
                    removeStateItem={this.props.removeStateItem}
                    info={this.props.info}
                    checkEmptyInput={this.props.checkEmptyInput}
                    requiredText={requiredText}
                />
            </div>
        );
    }
}

export default InputsContainer;
