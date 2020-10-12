import React, { Component } from 'react';

class InputBasicInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
            website: '',
        };
    }

    render() {
        const info = this.state;
        return (
            <div id='BasicInputsContainer' onChange={this.props.handleChange}>
                <h2>Basic Information</h2>
                <label htmlFor='nameInput'>Name</label>
                <input
                    name='basic'
                    type='text'
                    id='name'
                    className='input'
                    value={this.props.name}
                ></input>
                <label htmlFor='email'>Email address</label>
                <input
                    name='basic'
                    type='email'
                    id='email'
                    className='input'
                    value={this.props.email}
                ></input>
                <label htmlFor='phoneNumber'>Phone number</label>
                <input
                    name='basic'
                    type='number'
                    id='phoneNumber'
                    className='input'
                    value={this.props.phoneNumber}
                ></input>
                <label htmlFor='website'>Website</label>
                <input
                    name='basic'
                    type='url'
                    id='website'
                    className='input'
                    value={this.props.website}
                ></input>
            </div>
        );
    }
}

export default InputBasicInfo;
