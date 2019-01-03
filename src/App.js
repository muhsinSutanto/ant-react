import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import ButtonBasic from './components/ButtonBasic'
import Contact from './components/Contact'
import Header from './components/Header'
import Contacts from './components/Contacts';

class App extends Component {
  render() {
    return (
      <div>
        <Header branding='Contact Manager' />
        <div className='container'> 
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
