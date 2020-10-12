import React, { Component } from 'react';
import InputsContainer from './components/InputsContainer';
import CV from './components/CV';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            BasicInputsContainer: [],
            education: [],
            practical: [],
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const parent = target.parentNode.id;
        const name = target.id;

        this.setState({
            [name]: value,
        });
        // const newArr = [value];
        // this.setState((prevState) => ({
        //     [parent]: [...prevState[parent], ...newArr],
        // }));
        console.log(this.state);
    }

    render() {
        return (
            <div id='App'>
                <div id='Inputs'>
                    <InputsContainer
                        basics={this.state.basics}
                        handleChange={this.handleChange}
                    />
                </div>
                <CV basics={this.state.basics} />
            </div>
        );
    }
}

export default App;
