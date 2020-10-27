import React from 'react';
import InputBasicInfo from './InputBasicInfo';
import InputEducation from './InputEducation';
import InputWork from './InputWork';

const InputsContainer = (props) => {
  const requiredText = <p className='textRequired'>Required</p>;
  return (
    <div id='inputsContainer'>
      <InputBasicInfo
        submitChange={props.submitChange}
        checkEmptyInput={props.checkEmptyInput}
        requiredText={requiredText}
        inputError={props.inputError}
      />
      <InputEducation
        educationInfo={props.educationInfo}
        submitChange={props.submitChange}
        removeStateItem={props.removeStateItem}
        checkEmptyInput={props.checkEmptyInput}
        requiredText={requiredText}
        inputError={props.inputError}
      />
      <InputWork
        workInfo={props.workInfo}
        submitChange={props.submitChange}
        removeStateItem={props.removeStateItem}
        checkEmptyInput={props.checkEmptyInput}
        requiredText={requiredText}
        inputError={props.inputError}
      />
    </div>
  );
};

export default InputsContainer;
