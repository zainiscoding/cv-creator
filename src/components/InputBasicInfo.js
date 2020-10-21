import React, { Component } from 'react';

class InputBasicInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailError: false,
            phoneNumberError: false,
            emailEditing: true,
            phoneNumberEditing: true,
        };
        this.checkEmailInput = this.checkEmailInput.bind(this);
        this.checkPhoneNumberInput = this.checkPhoneNumberInput.bind(this);
        this.setInputFocus = this.setInputFocus.bind(this);
    }

    //change Email to e.value.... id, so you can use it on anything!

    setInputFocus = (e) => {
        return this.setState({ [e.target.id + 'Editing']: true });
    };

    unsetInputFocus = (e) => {
        return this.setState({ [e.target.id + 'Editing']: false });
    };

    checkEmailInput = (e) => {
        this.setInputFocus(e);
        const emailTest = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (e.target.value.match(emailTest)) {
            return this.setState(
                { emailError: false },
                this.unsetInputFocus(e)
            );
        } else return this.setState({ emailError: true });
    };

    checkPhoneNumberInput = (e) => {
        this.setInputFocus(e);

        const numberTest = /^\d{10}$/;
        if (e.target.value.match(numberTest)) {
            return this.setState(
                { phoneNumberError: false },
                this.unsetInputFocus(e)
            );
        } else if (e.target.value.length === 0) {
            return this.setState({ phoneNumberError: false });
        } else {
            return this.setState({ phoneNumberError: true });
        }
    };

    render() {
        return (
            <div id='basicInputsContainer' className='inputArea'>
                <h2>Basic Information</h2>
                <label htmlFor='nameInput'>
                    Full name {this.props.requiredText}
                </label>
                <input
                    name='basic'
                    type='text'
                    id='name'
                    className='input'
                    title='Name'
                    onChange={this.props.checkEmptyInput}
                ></input>
                <label htmlFor='email'>
                    Email address {this.props.requiredText}
                </label>
                {this.state.emailError === true &&
                    this.state.emailEditing === true && (
                        <div className='inputErrorContainer'>
                            <p className='inputFieldError'>
                                Enter a valid email address!
                            </p>
                        </div>
                    )}
                <input
                    name='basic'
                    type='email'
                    id='email'
                    className='input'
                    title='Email'
                    onChange={this.checkEmailInput}
                    onBlur={this.unsetInputFocus}
                ></input>
                <label htmlFor='phoneNumber'>Phone number</label>
                {this.state.phoneNumberError === true &&
                    this.state.phoneNumberEditing === true && (
                        <div className='inputErrorContainer'>
                            <p className='inputFieldError'>
                                Enter a valid phone number!
                            </p>
                        </div>
                    )}
                <input
                    name='basic'
                    type='text'
                    id='phoneNumber'
                    className='input'
                    title='Phone'
                    onChange={this.checkPhoneNumberInput}
                ></input>
                <label htmlFor='website'>Website</label>
                <input
                    name='basic'
                    type='url'
                    id='website'
                    className='input'
                    title='Website'
                ></input>
                {this.props.info.inputError === false &&
                    this.state.emailEditing === false &&
                    this.state.emailError === false &&
                    this.state.phoneNumberError === false && (
                        <div className='submitBtnContainer'>
                            <button
                                type='submit'
                                id='submitBasicInfoBtn'
                                onClick={this.props.submitChange}
                            >
                                Submit
                            </button>
                        </div>
                    )}
            </div>
        );
    }
}

export default InputBasicInfo;
