import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Contacts : [
                {
                    id: 1,
                    name:'rahmat awawi',
                    email:'rahmat@gmail.com',
                    phone:'555555'
                },
                {
                    id: 2,
                    name:'karen smiths',
                    email:'karen@gmail.com',
                    phone:'111111'
                },
                {
                    id: 3,
                    name:'ridwan ramadhan',
                    email:'ridwan.com',
                    phone:'3333333'
                }
            ]
         }
    }

    deleteContact = id => {
        console.log(id)
        const {Contacts} = this.state;
        
        const newContacts = Contacts.filter(contact => contact.id !== id)

        this.setState({
            Contacts: newContacts
        })
    }

    render() { 

        const {Contacts} = this.state

        return ( 
            <React.Fragment>
                {/* {Contacts.map(contact => (
                    <Contact 
                        name = {contact.name}
                        email = {contact.email}
                        phone = {contact.phone}/>
                 ) )} */}

                 {Contacts.map(contact => (
                     <Contact 
                        key={contact.id}
                        contact={contact}
                        deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                        />
                 ))}
            </React.Fragment>
         );
    }
}
 
export default Contacts;