import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";

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
    });
  };

  

  onDeleteClick = (id, dispatch) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => dispatch({type: 'DELETE_CONTACT', payload: id}) )
  };

  render() {
    // const {name, email, phone} = this.props
    const { name, id, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const {dispatch} = value
          return (
            <div className="card card-body mb-3">
              <h4>
                {" "}
                {name}{" "}
                <i
                  onClick={this.onShowClick}
                  className="far fa-arrow-alt-circle-down"
                  style={{ cursor: "pointer" }}
                >
                  {" "}
                </i>
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item"> Email: {email} </li>
                  <li className="list-group-item"> Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

// Contact.propTypes = {
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired,

// }

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
