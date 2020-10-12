import React, { Component } from 'react';
import InputsContainer from './components/InputsContainer';
import CV from './components/CV';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='App'>
                <InputsContainer />
                <CV />
            </div>
        );
    }
}

export default App;
