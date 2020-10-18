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
                    {this.props.info.educationInputsContainer.map(
                        (education) => {
                            return (
                                <div>
                                    <h2>Education</h2>
                                    {education.map((detail) => {
                                        if (
                                            detail.charAt(detail.length - 1) !==
                                            ' '
                                        ) {
                                            return (
                                                <div key={detail}>
                                                    <p>{detail}</p>
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        );
    }
}

export default DisplayCV;
