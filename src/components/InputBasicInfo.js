import React, { Component } from 'react';

class InputBasicInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailError: false,
            editingEmail: false,
        };
        this.checkEmailInput = this.checkEmailInput.bind(this);
        this.setEmailFocus = this.setEmailFocus.bind(this);
    }

    setEmailFocus = () => {
        return this.setState({ editingEmail: true });
    };

    checkEmailInput = (e) => {
        this.setEmailFocus();
        const emailTest = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (e.target.value.match(emailTest) && e.target.value.length > 0) {
            return this.setState({ emailError: false });
        } else if (e.target.value.length === 0) {
            return (
                this.setState({ editingEmail: false }),
                this.setState({ emailError: true })
            );
        }
        console.log(this.state);
    };

    render() {
        return (
            <div id='basicInputsContainer' className='inputArea'>
                <h2>Basic Information</h2>
                <label htmlFor='nameInput'>Full name (Required)</label>
                <input
                    name='basic'
                    type='text'
                    id='name'
                    className='input'
                    title='Name'
                    onChange={this.props.checkEmptyInput}
                ></input>
                <label htmlFor='email'>Email address (Required)</label>
                {this.state.emailError === true &&
                    this.state.editingEmail === true && (
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
                {this.props.info.inputError === false &&
                    this.state.editingEmail === true &&
                    this.state.emailError === false && (
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
