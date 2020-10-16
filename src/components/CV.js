import React, { Component } from 'react';

class CV extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='CV'>
                <div id='basicInfoContainer'>
                    <div id='name'>
                        <p>{this.props.info.BasicInputsContainer.name}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CV;
