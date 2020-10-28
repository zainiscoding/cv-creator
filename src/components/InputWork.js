import React, { useState } from 'react';
var uniqid = require('uniqid');

const InputWorkExperience = (props) => {
  const [addingWorkExperience, setAddingWorkExperience] = useState(false);

  //Used to submit or cancel entering an entry
  function changeAddWorkExperienceState(e) {
    if (addingWorkExperience === true) {
      props.submitChange(e);
    }
    //When you combine these two if statements into one, the 'Submit education' button always shows. Idk why!
    if (addingWorkExperience === true) {
      setAddingWorkExperience(false);
    } else {
      setAddingWorkExperience(true);
    }
  }

  return (
    <div id='workInputsContainer' className='inputArea'>
      <h2>Work Experience</h2>
      {addingWorkExperience === true && (
        <>
          <label htmlFor='companyName'>Company name {props.requiredText}</label>
          <input
            name='workExperience'
            type='text'
            id='companyName'
            className='input'
            title=''
            onChange={props.checkEmptyInput}
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
          {props.inputError === false && (
            <div id='submitWorkBtnContainer'>
              <button id='submitWorkBtn' onClick={changeAddWorkExperienceState}>
                Submit entry
              </button>
            </div>
          )}
          <div id='cancelAddWorkExperience'>
            <button
              id='cancelAddWorkExperienceBtn'
              className='cancelBtn'
              onClick={changeAddWorkExperienceState}
            >
              Cancel
            </button>
          </div>
        </>
      )}
      {addingWorkExperience === false && (
        <div id='addWorkExperienceBtnContainer'>
          <button
            id='addWorkExperienceButton'
            onClick={changeAddWorkExperienceState}
          >
            Add entry
          </button>
        </div>
      )}
      <div id='inputAreaWorkInfoContainer'>
        {props.workInfo.map((work, index) => {
          return (
            <div id={index} className='entryInputArea' key={uniqid()}>
              <button
                id={index}
                onClick={props.removeStateItem}
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
};

export default InputWorkExperience;
