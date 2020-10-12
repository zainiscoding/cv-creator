import React, { Component } from 'react';

class CV extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='CV'>
                <div id='basicInfoContainer'>
                    <div id='name'>{this.props.basics}</div>
                </div>
            </div>
        );
    }
}

export default CV;
