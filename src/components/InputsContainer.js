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
                    basics={this.props.basics}
                    handleChange={this.props.handleChange}
                />
                <InputEducation />
                <div className='submitBtnContainer'>
                    <input type='submit' value='Submit'></input>
                </div>
            </div>
        );
    }
}

export default InputsContainer;
