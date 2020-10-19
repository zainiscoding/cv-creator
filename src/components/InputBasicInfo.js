import React, { Component } from 'react';

class InputBasicInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='basicInputsContainer'>
                <h2>Basic Information</h2>
                <label htmlFor='nameInput'>Name</label>
                <input
                    name='basic'
                    type='text'
                    id='name'
                    className='input'
                    title='Name'
                ></input>
                <label htmlFor='email'>Email address</label>
                <input
                    name='basic'
                    type='email'
                    id='email'
                    className='input'
                    title='Email'
                ></input>
                <label htmlFor='phoneNumber'>Phone number</label>
                <input
                    name='basic'
                    type='number'
                    id='phoneNumber'
                    className='input'
                    title='Phone'
                ></input>
                <label htmlFor='website'>Website</label>
                <input
                    name='basic'
                    type='url'
                    id='website'
                    className='input'
                    title='Website'
                ></input>
                <div className='submitBtnContainer'>
                    <input
                        type='submit'
                        value='Submit'
                        id='submitCvBtn'
                        onClick={this.props.submitChange}
                    ></input>
                </div>
            </div>
        );
    }
}

export default InputBasicInfo;
