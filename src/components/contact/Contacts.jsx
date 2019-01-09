import React, { Component } from "react";
import { Consumer } from "../../context";
import Contact from './Contact'

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { Contacts } = value;
          return (
            <React.Fragment>
              {Contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
