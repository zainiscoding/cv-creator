import React, { Component } from 'react';
var uniqid = require('uniqid');

class InputEducation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addingEducation: false,
        };
        this.changeAddEducationState = this.changeAddEducationState.bind(this);
    }

    changeAddEducationState = (e) => {
        if (this.state.addingEducation === true) {
            this.props.submitChange(e);
        }

        if (this.state.addingEducation === true) {
            this.setState({ addingEducation: false });
        } else this.setState({ addingEducation: true });
    };

    render() {
        return (
            <div id='educationInputsContainer' className='inputArea'>
                <h2>Education</h2>
                {this.state.addingEducation === true && (
                    <>
                        <label htmlFor='institutionNameInput'>
                            Institution name
                        </label>
                        <input
                            name='education'
                            type='text'
                            id='institutionName'
                            className='input'
                            title=''
                        ></input>
                        <label htmlFor='courseName'>Course name</label>
                        <input
                            name='education'
                            type='text'
                            id='courseName'
                            className='input'
                            title=''
                        ></input>
                        <label htmlFor='startDate'>Start date</label>
                        <input
                            name='education'
                            type='date'
                            id='startDate'
                            className='input'
                            title='Start'
                        ></input>
                        <label htmlFor='endDate'>End date</label>
                        <input
                            name='education'
                            type='date'
                            id='endDate'
                            className='input'
                            title='End'
                        ></input>
                        <div id='submitEducationBtnContainer'>
                            <button
                                id='submitEducationBtn'
                                onClick={this.changeAddEducationState}
                            >
                                Submit entry
                            </button>
                        </div>
                    </>
                )}
                {this.state.addingEducation === false && (
                    <div id='addEducationBtnContainer'>
                        <button
                            id='addEducationBtn'
                            onClick={this.changeAddEducationState}
                        >
                            Add entry
                        </button>
                    </div>
                )}
                <div id='inputAreaEducationInfoContainer'>
                    {this.props.info.educationInputsContainer.map(
                        (education, index) => {
                            return (
                                <div
                                    id={index}
                                    className='entryInputArea'
                                    key={uniqid()}
                                >
                                    <button
                                        id={index}
                                        onClick={this.props.removeStateItem}
                                        className='entryDeleteBtn'
                                    >
                                        X
                                    </button>
                                    <p>Education {index + 1}</p>
                                    {education[0]}
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        );
    }
}

export default InputEducation;
