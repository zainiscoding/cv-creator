import React, { Component } from 'react';
import InputsContainer from './components/InputsContainer';
import DisplayCv from './components/DisplayCv';
import './styles/reset.css';
import './styles/main.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educationCounter: -1,
      workCounter: -1,
      inputError: true,
      basicInputsContainer: {},
      educationInputsContainer: [],
      workExperienceInputsContainer: [],
    };
    this.submitChange = this.submitChange.bind(this);
    this.removeStateItem = this.removeStateItem.bind(this);
    this.checkEmptyInput = this.checkEmptyInput.bind(this);
  }

  //Checks for an empty input and reflects it in the state. Used to prevent submission
  checkEmptyInput = (e) => {
    if (e.target.value.length === 0) {
      return this.setState({ inputError: true });
    } else if (e.target.value.length > 0) {
      return this.setState({ inputError: false });
    }
  };

  //Remove an entry from the state
  removeStateItem = (e) => {
    e.preventDefault();
    const targetId = parseInt(e.target.id);
    const targetState = e.target.parentNode.parentNode.parentNode.id;

    let filteredState = this.state[targetState];

    filteredState = filteredState.filter(
      (obj) => filteredState.indexOf(obj) !== targetId
    );
    this.setState((state) => {
      return (state[targetState] = filteredState);
    });
  };

  submitChange = (e) => {
    e.preventDefault();

    if (this.state.inputError === false) {
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
        this.setState((state) => {
          return { educationCounter: state.educationCounter + 1 };
        });
      }

      //Increase the work counter when submitting a work entry
      if (e.target.id === 'submitWorkBtn') {
        this.setState((state) => {
          return { workCounter: state.workCounter + 1 };
        });
      }

      //Add the values of the input to their respective state objects
      //This works, but acts weird when you hit submit again...
      allInputs.forEach((input) => {
        this.setState((state) => {
          //Creates a new education object within educationInputsCounter, with educationCounter as the object key
          if (input.name === 'education') {
            return (state.educationInputsContainer[state.educationCounter] = [
              ...educationInputs,
            ]);
            //Same as above but for work entries
          } else if (input.name === 'workExperience') {
            return (state.workExperienceInputsContainer[state.workCounter] = [
              ...workInputs,
            ]);
            //Prevents the applicant's name from displaying as, for example, "Name: John Smith"
          } else if (input.title !== 'Name' && input.value.length !== 0) {
            return (state[input.parentNode.id][input.id] = input.value);
          } else {
            return (state[input.parentNode.id][input.id] = input.value);
          }
        });
      });
    }
  };

  render() {
    const info = this.state;
    return (
      <div id='App'>
        <div id='Inputs'>
          <InputsContainer
            submitChange={this.submitChange}
            removeStateItem={this.removeStateItem}
            checkEmptyInput={this.checkEmptyInput}
            info={info}
          />
        </div>
        <DisplayCv info={info} />
      </div>
    );
  }
}

export default App;
