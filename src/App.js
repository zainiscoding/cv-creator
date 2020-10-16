import React, { Component } from 'react';
import InputsContainer from './components/InputsContainer';
import CV from './components/CV';

//Make each section an array? This shit must render an array, so everythign has to be in an array
//Wait... make each section an object?? Then convert to array and render??!?!?
//Try with leave focus instead of onChange?
//When leave focus, add the current 'input' to an array
//Then when hit submit, it clears the array and sets it to state
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            BasicInputsContainer: {},
        };
        this.submitChange = this.submitChange.bind(this);
    }

    submitChange = (e) => {
        e.preventDefault();
        const target = e.target;
        const value = target.value;
        const parent = target.parentNode.id;
        const name = target.id;
        const allElements = Array.from(target.parentNode.parentNode.children);
        const allInputs = [];
        allElements.forEach((element) => {
            if (element.className == 'input') {
                allInputs.push(element);
            }
        });
        allInputs.forEach((input) =>
            this.setState((state) => {
                state[input.parentNode.id][input.id] = input.value;
            })
        );
        console.log(this.state);
    };

    render() {
        return (
            <div id='App'>
                <div id='Inputs'>
                    <InputsContainer
                        info={
                            (this.state.BasicInputsContainer.name,
                            this.state.BasicInputsContainer.email,
                            this.state.BasicInputsContainer.phoneNumber,
                            this.state.BasicInputsContainer.website)
                        }
                        submitChange={this.submitChange}
                    />
                </div>
                <CV info={this.state} />
            </div>
        );
    }
}

export default App;
