import React, { Component } from 'react';
var uniqid = require('uniqid');

class DisplayCV extends Component {
    render() {
        return (
            <div id='CV'>
                <div id='basicInfoContainer'>
                    <div id='nameContainer'>
                        <p>{this.props.info.basicInputsContainer.name}</p>
                    </div>
                    <div id='basicInfoExtraContainer'>
                        <div
                            id='emailContainer'
                            className='basicInfoExtraContainerItem'
                        >
                            {this.props.info.basicInputsContainer.email && (
                                <>{this.props.email}</>
                            )}
                            <p>{this.props.info.basicInputsContainer.email}</p>
                        </div>
                        <div
                            id='phoneNumberContainer'
                            className='basicInfoExtraContainerItem'
                        >
                            {this.props.info.basicInputsContainer
                                .phoneNumber && <>{this.props.phone}</>}
                            <p>
                                {
                                    this.props.info.basicInputsContainer
                                        .phoneNumber
                                }
                            </p>
                        </div>
                        <div
                            id='websiteContainer'
                            className='basicInfoExtraContainerItem'
                        >
                            {this.props.info.basicInputsContainer.website && (
                                <>{this.props.website}</>
                            )}
                            <p>
                                {this.props.info.basicInputsContainer.website}
                            </p>
                        </div>
                    </div>
                </div>
                {this.props.info.educationInputsContainer.length !== 0 && (
                    <div id='educationInfoContainer'>
                        <h2>Education</h2>
                        {this.props.info.educationInputsContainer.map(
                            (education) => {
                                return (
                                    <>
                                        <div
                                            className='entryContainer'
                                            key={uniqid()}
                                        >
                                            <div
                                                key={uniqid()}
                                                className='entry'
                                            >
                                                {education.map((detail) => {
                                                    if (
                                                        detail.charAt(
                                                            detail.length - 1
                                                        ) !== ''
                                                    ) {
                                                        return (
                                                            <p key={uniqid()}>
                                                                {detail}
                                                            </p>
                                                        );
                                                    }
                                                    return '';
                                                })}
                                            </div>
                                        </div>
                                    </>
                                );
                            }
                        )}
                    </div>
                )}
                {this.props.info.workExperienceInputsContainer.length !== 0 && (
                    <div id='workExperienceInfoContainer'>
                        <h2>Work Experience</h2>
                        {this.props.info.workExperienceInputsContainer.map(
                            (experience) => {
                                return (
                                    <>
                                        <div
                                            className='entryContainer'
                                            key={uniqid()}
                                        >
                                            <div
                                                key={uniqid()}
                                                className='entry'
                                            >
                                                {experience.map((detail) => {
                                                    if (
                                                        detail.charAt(
                                                            detail.length - 1
                                                        ) !== ''
                                                    ) {
                                                        return (
                                                            <p key={uniqid()}>
                                                                {detail}
                                                            </p>
                                                        );
                                                    }
                                                    return '';
                                                })}
                                            </div>
                                        </div>
                                    </>
                                );
                            }
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default DisplayCV;
