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

  //Used to submit or cancel entering an entry
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
            <label htmlFor='companyName'>
              Company name {this.props.requiredText}
            </label>
            <input
              name='workExperience'
              type='text'
              id='companyName'
              className='input'
              title=''
              onChange={this.props.checkEmptyInput}
            ></input>
            <label htmlFor='jobTitleInput'>Job Title</label>
            <input
              name='workExperience'
              type='text'
              id='jobTitle'
              className='input'
              title=''
            ></input>
            <label htmlFor='startDate'>Start date</label>
            <input
              name='workExperience'
              type='date'
              id='startDate'
              className='input'
              title='Start'
            ></input>
            <label htmlFor='endDate'>End date</label>
            <input
              name='workExperience'
              type='date'
              id='endDate'
              className='input'
              title='End'
            ></input>
            {this.props.info.inputError === false && (
              <div id='submitWorkBtnContainer'>
                <button
                  id='submitWorkBtn'
                  onClick={this.changeAddWorkExperienceState}
                >
                  Submit entry
                </button>
              </div>
            )}
            <div id='cancelAddWorkExperience'>
              <button
                id='cancelAddWorkExperienceBtn'
                className='cancelBtn'
                onClick={this.changeAddWorkExperienceState}
              >
                Cancel
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
          {this.props.info.workExperienceInputsContainer.map((work, index) => {
            return (
              <div id={index} className='entryInputArea' key={uniqid()}>
                <button
                  id={index}
                  onClick={this.props.removeStateItem}
                  className='entryDeleteBtn'
                >
                  X
                </button>
                <p>Work {index + 1}</p>
                {work[0]}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default InputWorkExperience;
