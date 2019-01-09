import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import PropTypes from 'prop-types';

const Header = (props) => {
    const { branding} = props
    return ( 
        <nav className='nav navbar-expand-sm navbar-dark bg-danger mb-3 py-0'>
            <div className='container'>
                <a href='/' className='navbar-brand'> {branding} 
                </a>
                <div className="collapse navbar-collapse">
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a href='/' className='nav-link'>
                                Home
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
     );
}

Header.defaultProps = {
    branding: 'My App'
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
}
 
export default Header;