import React, { useState } from 'react';
var uniqid = require('uniqid');

const InputEducation = (props) => {
  const [addingEducation, setAddingEducation] = useState(false);

  //Used to submit or cancel entering an entry
  function changeAddEducationState(e) {
    if (addingEducation === true) {
      props.submitChange(e);
    }
    //When you combine these two if statements into one, the 'Submit education' button always shows. Idk why!
    if (addingEducation === true) {
      setAddingEducation(false);
    } else {
      setAddingEducation(true);
    }
  }

  return (
    <div id='educationInputsContainer' className='inputArea'>
      <h2>Education</h2>
      {addingEducation === true && (
        <>
          <label htmlFor='institutionNameInput'>
            Institution name {props.requiredText}
          </label>
          <input
            name='education'
            type='text'
            id='institutionName'
            className='input'
            title=''
            onChange={props.checkEmptyInput}
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
          {props.inputError === false && (
            <div id='submitEducationBtnContainer'>
              <button id='submitEducationBtn' onClick={changeAddEducationState}>
                Submit entry
              </button>
            </div>
          )}
          <div id='cancelAddEducation'>
            <button
              id='cancelAddEducationBtnBtn'
              className='cancelBtn'
              onClick={changeAddEducationState}
            >
              Cancel
            </button>
          </div>
        </>
      )}
      {addingEducation === false && (
        <div id='addEducationBtnContainer'>
          <button id='addEducationBtn' onClick={changeAddEducationState}>
            Add entry
          </button>
        </div>
      )}
      <div id='inputAreaEducationInfoContainer'>
        {props.educationInfo.map((education, index) => {
          return (
            <div id={index} className='entryInputArea' key={uniqid()}>
              <button
                id={index}
                onClick={props.removeStateItem}
                className='entryDeleteBtn'
              >
                X
              </button>
              <p>Education {index + 1}</p>
              {education[0]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InputEducation;
