import React, { Component } from 'react';

class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           name : '',
           email : '',
           phone : ''
         }
    }
    render() { 
        const {name, email, phone} = this.state
        return ( 
            <div className='card mb-3'>
                <div className='card-header'> Add
                </div>
                <div className='card-body'>
                    <form>
                        <div className='form-group'>
                            <label htmlFor='name'>name</label>
                            <input
                                type='text'
                                name='name'
                                className='form-control form-control-lg'
                                placeholder='enter name ...'
                                value={name}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>email</label>
                            <input
                                type='email'
                                name='email'
                                className='form-control form-control-lg'
                                placeholder='enter name ...'
                                value={email}
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
                            />
                        </div>
                        <input type='submit' value='add contact' className='btn btn-light btn-block ' />
                    </form>
                </div>
            </div>
         );
    }
}
 
export default AddContact;