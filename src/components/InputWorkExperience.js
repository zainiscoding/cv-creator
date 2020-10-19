import React, { Component } from 'react';
var uniqid = require('uniqid');

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
            <div id='workExperienceInputsContainer' className='inputArea'>
                <h2>Work Experience</h2>
                {this.state.addingWorkExperience === true && (
                    <>
                        <label htmlFor='jobTitleInput'>Job Title</label>
                        <input
                            name='workExperience'
                            type='text'
                            id='jobTitle'
                            className='input'
                            title='Job Title'
                        ></input>
                        <label htmlFor='courseName'>Company name</label>
                        <input
                            name='workExperience'
                            type='text'
                            id='companyName'
                            className='input'
                            title='Company Name'
                        ></input>
                        <label htmlFor='startDate'>Start date</label>
                        <input
                            name='workExperience'
                            type='date'
                            id='startDate'
                            className='input'
                            title='Start Date'
                        ></input>
                        <label htmlFor='endDate'>End date</label>
                        <input
                            name='workExperience'
                            type='date'
                            id='endDate'
                            className='input'
                            title='End Date'
                        ></input>
                        <div id='submitWorkBtnContainer'>
                            <button
                                id='submitWorkBtn'
                                onClick={this.changeAddWorkExperienceState}
                            >
                                Submit entry
                            </button>
                        </div>
                    </>
                )}
                {this.state.addingWorkExperience === false && (
                    <div id='addWorkExperienceBtnContainer'>
                        <button
                            id='addWorkExperienceButton'
                            onClick={this.changeAddWorkExperienceState}
                        >
                            Add entry
                        </button>
                    </div>
                )}
                <div id='inputAreaWorkInfoContainer'>
                    {this.props.info.workExperienceInputsContainer.map(
                        (work, index) => {
                            return (
                                <div
                                    id={index}
                                    className='workEntry'
                                    key={uniqid()}
                                >
                                    <button
                                        id={index}
                                        onClick={this.props.removeStateItem}
                                    >
                                        Delete
                                    </button>
                                    {work.map((detail) => {
                                        if (
                                            detail.charAt(detail.length - 1) !==
                                            ' '
                                        ) {
                                            return (
                                                <div key={detail}>
                                                    <p>{detail}</p>
                                                </div>
                                            );
                                        }
                                        return '';
                                    })}
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        );
    }
}

export default InputWorkExperience;
