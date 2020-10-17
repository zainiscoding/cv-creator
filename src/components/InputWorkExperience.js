import React, { Component } from 'react';
import InputsContainer from './InputsContainer';

class InputWorkExperience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addingWorkExperience: false,
        };
        this.changeAddWorkExperienceState = this.changeAddWorkExperienceState.bind(
            this
        );
    }

    changeAddWorkExperienceState = (e) => {
        if (this.state.addingWorkExperience === true) {
            this.props.submitChange(e);
        }

        if (this.state.addingWorkExperience === true) {
            this.setState({ addingWorkExperience: false });
        } else this.setState({ addingWorkExperience: true });
    };

    render() {
        return (
            <div id='workExperienceInputsContainer'>
                <h2>Work Experience</h2>
                {this.state.addingWorkExperience === true && (
                    <>
                        <label htmlFor='jobTitleInput'>Job Title</label>
                        <input
                            name='workExperience'
                            type='text'
                            id='jobTitle'
                            className='input'
                        ></input>
                        <label htmlFor='courseName'>Company name</label>
                        <input
                            name='workExperience'
                            type='text'
                            id='companyName'
                            className='input'
                        ></input>
                        <label htmlFor='startDate'>Start date</label>
                        <input
                            name='workExperience'
                            type='date'
                            id='startDate'
                            className='input'
                        ></input>
                        <label htmlFor='endDate'>End date</label>
                        <input
                            name='workExperience'
                            type='date'
                            id='endDate'
                            className='input'
                        ></input>
                        <button
                            id='submitWorkExperienceButton'
                            onClick={this.changeAddWorkExperienceState}
                        >
                            Submit entry
                        </button>
                    </>
                )}
                {this.state.addingWorkExperience === false && (
                    <button
                        id='addWorkExperienceButton'
                        onClick={this.changeAddWorkExperienceState}
                    >
                        Add entry
                    </button>
                )}
            </div>
        );
    }
}

export default InputWorkExperience;
