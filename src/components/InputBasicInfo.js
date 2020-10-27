import React, { useState } from 'react';

const InputBasicInfo = (props) => {
  const [emailError, setEmailError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [emailEditing, setEmailEditing] = useState(true);
  const [phoneNumberEditing, setPhoneNumberEditing] = useState(true);

  //Lets React know when you're editing an input
  function setInputFocus(e) {
    if (e.target.id === 'email') {
      return setEmailEditing(true);
    } else if (e.target.id === 'phoneNumber') {
      return setPhoneNumberEditing(true);
    }
  }

  function unsetInputFocus(e) {
    if (e.target.id === 'email') {
      return setEmailEditing(false);
    } else if (e.target.id === 'phoneNumber') {
      return setPhoneNumberEditing(false);
    }
  }

  //Input validation for email
  function checkEmailInput(e) {
    setInputFocus(e);
    const emailTest = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (e.target.value.match(emailTest)) {
      unsetInputFocus(e);
      return setEmailError(false);
    } else {
      return setEmailError(true);
    }
  }

  //Input validation for phone number
  function checkPhoneNumberInput(e) {
    setInputFocus(e);

    const numberTest = /^\d{10}$/;
    if (e.target.value.match(numberTest)) {
      unsetInputFocus(e);
      return setPhoneNumberError(false);
    } else if (e.target.value.length === 0) {
      return setPhoneNumberError(false);
    } else {
      return setPhoneNumberError(true);
    }
  }

  return (
    <div id='basicInputsContainer' className='inputArea'>
      <h2>Basic Information</h2>
      <label htmlFor='nameInput'>Full name {props.requiredText}</label>
      <input
        name='basic'
        type='text'
        id='name'
        className='input'
        title='Name'
        onChange={props.checkEmptyInput}
      ></input>
      <label htmlFor='email'>Email address {props.requiredText}</label>
      {emailError === true && emailEditing === true && (
        <div className='inputErrorContainer'>
          <p className='inputFieldError'>Enter a valid email address!</p>
        </div>
      )}
      <input
        name='basic'
        type='email'
        id='email'
        className='input'
        title='Email'
        onChange={checkEmailInput}
        onBlur={checkEmailInput}
      ></input>
      <label htmlFor='phoneNumber'>Phone number</label>
      {phoneNumberError === true && phoneNumberEditing === true && (
        <div className='inputErrorContainer'>
          <p className='inputFieldError'>Enter a valid phone number!</p>
        </div>
      )}
      <input
        name='basic'
        type='text'
        id='phoneNumber'
        className='input'
        title='Phone'
        onChange={checkPhoneNumberInput}
      ></input>
      <label htmlFor='website'>Website</label>
      <input
        name='basic'
        type='url'
        id='website'
        className='input'
        title='Website'
      ></input>
      {props.inputError === false &&
        emailEditing === false &&
        emailError === false &&
        phoneNumberError === false && (
          <div className='submitBtnContainer'>
            <button
              type='submit'
              id='submitBasicInfoBtn'
              onClick={props.submitChange}
            >
              Submit
            </button>
          </div>
        )}
    </div>
  );
};

export default InputBasicInfo;
