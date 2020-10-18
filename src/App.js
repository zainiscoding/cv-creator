import React, { Component } from 'react';
import InputsContainer from './components/InputsContainer';
import DisplayCV from './components/DisplayCV';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: true,
            educationCounter: 0,
            basicInputsContainer: {},
            educationInputsContainer: [],
            workExperienceInputsContainer: {},
        };
        this.submitChange = this.submitChange.bind(this);
        this.changeEditingState = this.changeEditingState.bind(this);
    }

    changeEditingState = () => {
        if (this.state.editing === true) {
            this.setState({ editing: false });
        } else this.setState({ editing: true });
    };

    submitChange = (e) => {
        e.preventDefault();

        const allInputElements = Array.from(
            e.target.parentNode.parentNode.children
        );

        console.log(allInputElements);
        //Pushes all the nodes of className "input" into the array allInputs
        //This is super long winded - 3 loops(!?) - but I'm not sure how else I can really extract these nodes that I want. Any suggestions?
        //A document.querySelector kind of deal would be neat!
        const allInputElementsChildren = [];
        const allInputElementsChildrenNodes = [];
        const allInputs = [];

        allInputElements.forEach((element) => {
            allInputElementsChildren.push(element.children);
        });

        allInputElementsChildren.forEach((child) => {
            for (let i = 0; i < child.length; i++) {
                allInputElementsChildrenNodes.push(child[i]);
            }
        });

        allInputElementsChildrenNodes.forEach((node) => {
            if (node.className === 'input') {
                allInputs.push(node);
            }
        });

        //Gathers the information from individual educations and pushes them into an array
        const educationInputs = [];
        allInputs.forEach((input) => {
            if (input.name === 'education') {
                educationInputs.push(input.title + ': ' + input.value);
            }
        });

        //Increase the education counter when submitting an individual education
        if (e.target.id === 'submitEducationButton') {
            this.setState((state) => {
                return { educationCounter: state.educationCounter + 1 };
            });
        }
        console.log(allInputElements);

        //Add the values of the input to their respective state objects
        //This works, but acts weird when you hit submit again...
        allInputs.forEach((input) => {
            if (input.value.length > 0) {
                this.setState((state) => {
                    //Creates a new education object within educationInputsCounter, with educationCounter as the object key
                    if (input.name === 'education') {
                        return (state.educationInputsContainer[
                            state.educationCounter
                        ] = [...educationInputs]);
                        //Prevents the applicant's name from displaying as, for example, "Name: John Smith"
                    } else if (input.title !== 'Name') {
                        return (state[input.parentNode.id][input.id] =
                            input.title + ': ' + input.value);
                    } else {
                        return (state[input.parentNode.id][input.id] =
                            input.value);
                    }
                });
            }
        });

        //Close the CV editor if you push the "Submit" button
        if (e.target.id === 'submitCvBtn') {
            this.setState({ editing: false });
        }
        console.log(this.state);
    };

    render() {
        const editing = this.state.editing;
        const info = this.state;
        return (
            <div id='App'>
                <div id='Inputs'>
                    {editing === true && (
                        <InputsContainer
                            submitChange={this.submitChange}
                            info={info}
                        />
                    )}
                    {editing === false && (
                        <button onClick={this.changeEditingState}>Edit</button>
                    )}
                </div>
                <DisplayCV info={info} />
            </div>
        );
    }
}

export default App;
