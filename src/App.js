import React, { Component } from 'react';
import InputsContainer from './components/InputsContainer';
import DisplayCV from './components/DisplayCV';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            BasicInputsContainer: {},
            EducationInputsContainer: {},
            ExperienceInputsContainer: {},
        };
        this.submitChange = this.submitChange.bind(this);
    }

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
        allInputs.forEach((input) =>
            this.setState((state) => {
                return (state[input.parentNode.id][input.id] = input.value);
            })
        );
        console.log(allInputs);

        console.log(this.state);
    };

    render() {
        return (
            <div id='App'>
                <div id='Inputs'>
                    <InputsContainer submitChange={this.submitChange} />
                </div>
                <DisplayCV info={this.state} />
            </div>
        );
    }
}

export default App;
