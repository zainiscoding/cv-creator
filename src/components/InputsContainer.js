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
                <InputBasicInfo info={this.props.BasicsInputsContainer} />
                <InputEducation />
                <div className='submitBtnContainer'>
                    <input
                        type='submit'
                        onClick={this.props.submitChange}
                        value='Submit'
                    ></input>
                </div>
            </div>
        );
    }
}

export default InputsContainer;
