import React, { Component } from 'react';

class InputBasicInfo extends Component {
    render() {
        return (
            <div id='basicInputsContainer' className='inputArea'>
                <h2>Basic Information</h2>
                <label htmlFor='nameInput'>Full name</label>
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
                    <button
                        type='submit'
                        id='submitBasicInfoBtn'
                        onClick={this.props.submitChange}
                    >
                        Submit
                    </button>
                </div>
            </div>
        );
    }
}

export default InputBasicInfo;
