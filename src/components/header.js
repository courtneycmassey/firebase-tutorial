import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    
    //have conditional statements here for various nav bars based on login credential/status
    
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-info">
                <Link className="navbar-brand" to="/">Raise a Question</Link>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/class_form">Add Class</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/teacher_view">Teacher View</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/student_view">Student View</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;