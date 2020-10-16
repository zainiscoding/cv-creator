import React, { Component } from 'react';

class DisplayCV extends Component {
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
                    <div id='email'>
                        <p>
                            Email: {this.props.info.BasicInputsContainer.email}
                        </p>
                    </div>
                    <div id='phoneNumber'>
                        <p>
                            Cell:{' '}
                            {this.props.info.BasicInputsContainer.phoneNumber}
                        </p>
                    </div>
                    <div id='website'>
                        <p>
                            Website:{' '}
                            {this.props.info.BasicInputsContainer.website}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default DisplayCV;
