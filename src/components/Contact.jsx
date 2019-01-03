import React, { Component } from "react";
import PropTypes from 'prop-types';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  onShowClick = (e) => {
    console.log(e.target);
    
  }


  render() {
    // const {name, email, phone} = this.props
    const {name, email, phone} = this.props.contact
    return (
      <div className='card card-body mb-3'>
        <h4> {name} <i onClick={this.onShowClick} 
                    class="far fa-arrow-alt-circle-down"> </i> 
        </h4>
        <ul className='list-group'>
          <li className='list-group-item'> Email: {email} </li>
          <li className='list-group-item'> Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

// Contact.propTypes = {
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired,

// }

Contact.propTypes = {
    contact: PropTypes.object.isRequired,

}

export default Contact;
