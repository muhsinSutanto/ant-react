import React, { Component } from 'react';
import {Consumer} from '../../context'
import uuid from 'uuid'
import TextInputGroup from '../layout/TextInputGroup'
import axios from '../../../node_modules/axios';

class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           name : '',
           email : '',
           phone : '',
           errors: {}
           
         }
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const {name, email, phone} = this.state

        //check for error
        if(name === '') {
            this.setState({errors:{name: 'Name is required'}})
            return;
        }
        if(email === '') {
            this.setState({errors:{email: 'Email is required'}})
            return;
        }
        if(phone === '') {
            this.setState({errors:{phone: 'phone is required'}})
            return;
        }

        const newContact = {
            name,
            email,
            phone
            
        }

        axios
            .post('https://jsonplaceholder.typicode.com/users',newContact)
            .then(res=> dispatch({type:'ADD_CONTACT', payload: res.data}))

        
        this.setState({
            name:'',
            email:'',
            phone:'',
            errors:{}
        })

        //redirect
        this.props.history.push('/')
    }

    //clear contact after submit
    onChange = e => {
        this.setState({
            [e.target.name] :e.target.value
        })
    }

    render() { 
        const {name, email, phone, errors} = this.state
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
                                <TextInputGroup
                                    label='name'
                                    name='name'
                                    placeholder='enter name ...'
                                    value={name}
                                    onChange={this.onChange}
                                    error={errors.name}
                                />
                                <TextInputGroup
                                    label='email'
                                    name='email'
                                    placeholder='enter email ...'
                                    value={email}
                                    onChange={this.onChange}
                                    error={errors.email}
                                />
                                <TextInputGroup
                                    label='phone'
                                    name='phone'
                                    placeholder='enter phone ...'
                                    value={phone}
                                    onChange={this.onChange}
                                    error={errors.phone}
                                />
                                
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