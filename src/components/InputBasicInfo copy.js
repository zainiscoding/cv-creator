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
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.id;

        this.setState({
            [name]: value,
        });
    }

    render() {
        const { name, email, phoneNumber, website } = this.state;
        const handleChange = this.handleChange;
        return (
            <div id='BasicInputsContainer'>
                <h2>Basic Information</h2>
                <label htmlFor='nameInput'>Name</label>
                <input
                    name='basic'
                    type='text'
                    id='name'
                    className='input'
                    value={name}
                    onChange={handleChange}
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
            </div>
        );
    }
}

export default InputBasicInfo;
