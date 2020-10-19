import React, { Component } from 'react';
var uniqid = require('uniqid');

class DisplayCV extends Component {
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
                {this.props.info.educationInputsContainer.length !== 0 && (
                    <div id='educationInfoContainer'>
                        <h2>Education</h2>
                        {this.props.info.educationInputsContainer.map(
                            (education) => {
                                return (
                                    <>
                                        <div key={uniqid()}>
                                            {education.map((detail) => {
                                                if (
                                                    detail.charAt(
                                                        detail.length - 1
                                                    ) !== ' '
                                                ) {
                                                    return (
                                                        <div key={detail}>
                                                            <p>{detail}</p>
                                                        </div>
                                                    );
                                                }
                                                return '';
                                            })}
                                        </div>
                                    </>
                                );
                            }
                        )}
                    </div>
                )}
                <div id='workInfoContainer'>
                    {this.props.info.workExperienceInputsContainer.map(
                        (experience) => {
                            return (
                                <>
                                    <h2>Work Experience</h2>
                                    <div key={uniqid()}>
                                        {experience.map((detail) => {
                                            if (
                                                detail.charAt(
                                                    detail.length - 1
                                                ) !== ' '
                                            ) {
                                                return (
                                                    <div key={detail}>
                                                        <p>{detail}</p>
                                                    </div>
                                                );
                                            }
                                            return '';
                                        })}
                                    </div>
                                </>
                            );
                        }
                    )}
                </div>
            </div>
        );
    }
}

export default DisplayCV;
