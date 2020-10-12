import React, { Component } from 'react';

class CV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            basics: '',
            education: '',
            practical: '',
        };
    }

    render() {
        return (
            <div id='CV'>
                <div id='basicInfoContainer'></div>
            </div>
        );
    }
}

export default CV;
