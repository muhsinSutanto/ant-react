import React, { Component } from 'react';
import Contact from './components/contact/Contact';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                Contacts: state.Contacts.filter(Contact =>
                Contact.id !== action.payload)
            }
        case 'ADD_CONTACT':
            return {
                ...state,
               Contacts : [action.payload, ...state.Contacts]
            }
        default:
            return state;
    }
}

export class Provider extends Component{
    state = {
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
        ],

        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }
    
    render() {
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer