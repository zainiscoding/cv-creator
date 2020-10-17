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
                        <p>{this.props.info.basicInputsContainer.name}</p>
                    </div>
                    <div id='email'>
                        <p>{this.props.info.basicInputsContainer.email}</p>
                    </div>
                    <div id='phoneNumber'>
                        <p>
                            {this.props.info.basicInputsContainer.phoneNumber}
                        </p>
                    </div>
                    <div id='website'>
                        <p>{this.props.info.basicInputsContainer.website}</p>
                    </div>
                </div>
                <div id='educationInfoContainer'>
                    <div id='educationname'>
                        <p>
                            {
                                this.props.info.educationInputsContainer
                                    .institutionName
                            }
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default DisplayCV;
