import React, { useState } from 'react';
import InputsContainer from './components/InputsContainer';
import DisplayCv from './components/DisplayCv';
import './styles/reset.css';
import './styles/main.css';

const App = () => {
  const [educationCounter, setEducationCounter] = useState(-1);
  const [workCounter, setWorkCounter] = useState(-1);
  const [inputError, setInputError] = useState(true);
  const [basicInfo, setBasicInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState([]);
  const [workInfo, setWorkInfo] = useState([]);

  //Checks for an empty input and reflects it in the state. Used to prevent submission
  function checkEmptyInput(e) {
    if (e.target.value.length === 0) {
      return setInputError(true);
    } else if (e.target.value.length > 0) {
      return setInputError(false);
    }
    console.log(inputError);
  }

  //Remove an entry from the state
  function removeStateItem(e) {
    e.preventDefault();
    const targetId = parseInt(e.target.id);
    const targetState = e.target.parentNode.parentNode.parentNode.id;

    if (targetState === 'educationInputsContainer') {
      setEducationInfo(
        educationInfo.filter((obj) => educationInfo.indexOf(obj) !== targetId)
      );
    } else if (targetState === 'workInputsContainer') {
      setWorkInfo(workInfo.filter((obj) => workInfo.indexOf(obj) !== targetId));
    }
  }

  function submitChange(e) {
    e.preventDefault();

    if (inputError === false) {
      const allInputElements = Array.from(
        e.target.parentNode.parentNode.children
      );
      const allInputs = [];

      allInputElements.forEach((node) => {
        if (node.className === 'input') {
          allInputs.push(node);
        }
      });

      //Gathers the information from individual education entries and pushes them into an array
      const educationInputs = [];
      allInputs.forEach((input) => {
        if (
          input.name === 'education' &&
          input.title !== '' &&
          input.value.length > 0
        ) {
          educationInputs.push(input.title + ': ' + input.value);
        } else if (input.name === 'education' && input.value.length > 0) {
          educationInputs.push(input.title + input.value);
        }
      });

      //Gathers the information from individual work entires and pushes them into an array
      const workInputs = [];
      allInputs.forEach((input) => {
        if (
          input.name === 'workExperience' &&
          input.title !== '' &&
          input.value.length > 0
        ) {
          workInputs.push(input.title + ': ' + input.value);
        } else if (input.name === 'workExperience' && input.value.length > 0) {
          workInputs.push(input.title + input.value);
        }
      });

      //Increase the education counter when submitting an education entry
      if (e.target.id === 'submitEducationBtn') {
        setEducationCounter(educationCounter + 1);
      }

      //Increase the work counter when submitting a work entry
      if (e.target.id === 'submitWorkBtn') {
        setWorkCounter(workCounter + 1);
      }

      //Looks at all the inputs and sets their respective states to their values
      allInputs.forEach((input) => {
        if (input.name === 'education') {
          return setEducationInfo([...educationInfo, [...educationInputs]]);
        } else if (input.name === 'workExperience') {
          setWorkInfo([...workInfo, [...workInputs]]);
        } else {
          return setBasicInfo((prevState) => ({
            ...prevState,
            [input.id]: input.value,
          }));
        }
      });
    }
  }

  return (
    <div id='App'>
      <div id='Inputs'>
        <InputsContainer
          submitChange={submitChange}
          removeStateItem={removeStateItem}
          checkEmptyInput={checkEmptyInput}
          basicInfo={basicInfo}
          educationInfo={educationInfo}
          workInfo={workInfo}
          inputError={inputError}
        />
      </div>
      <DisplayCv
        basicInfo={basicInfo}
        educationInfo={educationInfo}
        workInfo={workInfo}
      />
    </div>
  );
};

export default App;
