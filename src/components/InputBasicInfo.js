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
        console.log(this.state);
    }

    render() {
        const info = this.state;
        return (
            <div id='BasicInputsContainer' onChange={this.handleChange}>
                <h2>Basic Information</h2>
                <label htmlFor='nameInput'>Name</label>
                <input
                    name='basic'
                    type='text'
                    id='name'
                    className='input'
                    value={info.name}
                ></input>
                <label htmlFor='email'>Email address</label>
                <input
                    name='basic'
                    type='email'
                    id='email'
                    className='input'
                    value={info.email}
                ></input>
                <label htmlFor='phoneNumber'>Phone number</label>
                <input
                    name='basic'
                    type='number'
                    id='phoneNumber'
                    className='input'
                    value={info.phoneNumber}
                ></input>
                <label htmlFor='website'>Website</label>
                <input
                    name='basic'
                    type='url'
                    id='website'
                    className='input'
                    value={info.website}
                ></input>
            </div>
        );
    }
}

export default InputBasicInfo;
