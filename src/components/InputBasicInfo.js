import React, { Component } from 'react';

class InputBasicInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='BasicInputsContainer'>
                <h2>Basic Information</h2>
                <label htmlFor='nameInput'>Name</label>
                <input
                    name='basic'
                    type='text'
                    id='name'
                    className='input'
                ></input>
                <label htmlFor='email'>Email address</label>
                <input
                    name='basic'
                    type='email'
                    id='email'
                    className='input'
                ></input>
                <label htmlFor='phoneNumber'>Phone number</label>
                <input
                    name='basic'
                    type='number'
                    id='phoneNumber'
                    className='input'
                ></input>
                <label htmlFor='website'>Website</label>
                <input
                    name='basic'
                    type='url'
                    id='website'
                    className='input'
                ></input>
                {/* For submit button on each input section, use the code below. For safe keeping! */}
                {/* <div className='submitBtnContainer'>
                    <input
                        type='submit'
                        onClick={this.props.submitChange}
                        value='Submit'
                    ></input>
                </div> */}
            </div>
        );
    }
}

export default InputBasicInfo;
