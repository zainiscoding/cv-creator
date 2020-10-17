import React, { Component } from 'react';
import InputsContainer from './components/InputsContainer';
import DisplayCV from './components/DisplayCV';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: true,
            basicInputsContainer: {},
            educationInputsContainer: {},
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

        //Pushes all the nodes of className "input" into the array allInputs
        //This is super long winded - 3 loops(!?) - but I'm not sure how else I can really extract these nodes that I want. Any suggestions?
        const allInputElementsChildren = [];
        const allInputElementsChildrenNodes = [];
        const allInputs = [];

        allInputElements.forEach((element) => {
            allInputElementsChildren.push(element.children);
        });

        console.log(allInputElements);

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

        //I'd like to get this to work rather than using the function below.
        // allInputs.forEach((input) =>
        //     this.setState((state) => {
        //         state[input.parentNode.id][input.id] = input.value;
        //     })
        // );

        //Add the values of the input to their respective state objects
        //This works, but acts weird when you hit submit again...
        allInputs.forEach((input) => {
            if (input.value.length > 0) {
                this.setState((state) => {
                    if (input.name === 'education') {
                        const educationInputs = [];
                        educationInputs.push(input.value);
                        return (state.educationInputsContainer.newEducation = [
                            ...educationInputs,
                        ].join(' '));
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
        return (
            <div id='App'>
                <div id='Inputs'>
                    {editing === true && (
                        <InputsContainer submitChange={this.submitChange} />
                    )}
                    {editing === false && (
                        <button onClick={this.changeEditingState}>Edit</button>
                    )}
                </div>
                <DisplayCV info={this.state} />
            </div>
        );
    }
}

export default App;
