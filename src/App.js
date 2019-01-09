import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Provider} from './context'
import Header from './components/layout/Header'
import Contacts from './components/contact/Contacts'
import AddContact from './components/contact/AddContact'

class App extends Component {
  render() {
    return (
      <Provider>
      <div>
        <Header branding='Contact Manager' />
        <div className='container'> 
          <AddContact />
          <Contacts />
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
