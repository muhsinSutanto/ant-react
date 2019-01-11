import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

const Header = props => {
  const { branding } = props;
  return (
    <nav className="nav navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <div className="collapse navbar-collapse">
          <a href="/" className="navbar-brand">
            {" "}
            {branding}
          </a>
          <ul className="navbar-nav float-right">
            <li className="d-flex justify-content-end">
              <Link to="/" className="nav-link">
              <i class="fas fa-home"></i> Home
              </Link>
            </li>
            <li className="d-flex justify-content-end">
              <Link to="/contact/add" className="nav-link">
              <i class="fas fa-plus"></i> Add
              </Link>
            </li>
            <li className="d-flex justify-content-end">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
