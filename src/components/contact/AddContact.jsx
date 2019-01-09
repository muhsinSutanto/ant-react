import React, { Component } from 'react';
import {Consumer} from '../../context'
import uuid from 'uuid'

class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           name : '',
           email : '',
           phone : ''
         }
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const {name, email, phone} = this.state
        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        }

        dispatch({type:'ADD_CONTACT', payload: newContact})
    }

    onChange = e => {
        this.setState({
            [e.target.name] :e.target.value
        })
    }

    

    render() { 
        const {name, email, phone} = this.state
        return(
            <Consumer>
                {value => {
                    const {dispatch} = value
                    return(
                        <div className='card mb-3'>
                        <div className='card-header'> Add
                        </div>
                        <div className='card-body'>
                            <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                <div className='form-group'>
                                    <label htmlFor='name'>name</label>
                                    <input
                                        type='text'
                                        name='name'
                                        className='form-control form-control-lg'
                                        placeholder='enter name ...'
                                        value={name}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='email'>email</label>
                                    <input
                                        type='text'
                                        name='email'
                                        className='form-control form-control-lg'
                                        placeholder='enter name ...'
                                        value={email}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='phone'>Phone</label>
                                    <input
                                        type='number'
                                        name='phone'
                                        className='form-control form-control-lg'
                                        placeholder='enter name ...'
                                        value={phone}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <input type='submit' value='add contact' className='btn btn-light btn-block ' />
                            </form>
                        </div>
                    </div>
                    )
                }}
            </Consumer>
        )
    }
}
 
export default AddContact;