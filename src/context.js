import React, { Component } from 'react';
import axios from 'axios'
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
        Contacts : [],

        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    componentDidMount() {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(res=> this.setState({Contacts: res.data}))
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