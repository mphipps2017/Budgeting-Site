import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import styles from './styles.css';

const Navbar = (props) => {
    return(
        <nav className="navbar-wrapper">
        <div className="title">Budget Site</div>
            <div className="nav-links">
                <Link style={{textDecoration:'none'}} to='/'>
                    <div className="link">Dashboard</div>
                </Link>
                <Link style={{textDecoration:'none'}} to='/about'>
                    <div className="link">Calendar View</div>
                </Link>
                <Link style={{textDecoration:'none'}} to='/projects'>
                    <div className="link">Edit Budget</div>
                </Link>
            </div>
        </nav>
    );
}

export default withRouter(Navbar);