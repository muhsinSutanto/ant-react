import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContactInfo: false
    };
  }

  onShowClick = e => {
     this.setState({
       showContactInfo: !this.state.showContactInfo
     })
  };

  onDeleteClick = () => {
    // console.log('clicked')
    this.props.deleteClickHandler()
  }

  render() {
    // const {name, email, phone} = this.props
    const { name, email, phone } = this.props.contact;
    const {showContactInfo} = this.state
    return (
      <div className="card card-body mb-3">
        <h4>
          {" "}
          {name}{" "}
          <i onClick={this.onShowClick} 
            className="far fa-arrow-alt-circle-down"
            style={{cursor:'pointer'}}>
            
            {" "}
          </i>
          <i
            className="fas fa-times"
            style={{cursor:'pointer', float:'right', color:'red' }}
            onClick={this.onDeleteClick}
            
          />
        </h4>
        {showContactInfo ? (<ul className="list-group">
          <li className="list-group-item"> Email: {email} </li>
          <li className="list-group-item"> Phone: {phone}</li>
        </ul>): null}
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
  deleteClickHandler:PropTypes.func.isRequired
};

export default Contact;
