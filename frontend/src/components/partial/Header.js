import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'

import {isLoggedIn} from '../../App.js';


class Header extends Component {
    userButtons() {
        return (
            <div class="dropdown">
                <a className="btn btn-primary"></a>&nbsp;
                <a className="btn btn-light" to="/register">Log Out</a>
            </div>
        );
    }

    guestUserButtons() {
        return (
            <span>
                <Link className="btn btn-light" to="/login">Log In</Link>&nbsp;
                <Link className="btn btn-light" to="/register">Register</Link>
            </span>
        );
    }

    render() {
        var userControlButtons;

        if (isLoggedIn()) {
            userControlButtons = this.userButtons();
        } else {
            userControlButtons = this.guestUserButtons();
        }

        return (
            <nav className="navbar navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">BeX</Link>
                <form className="form-inline my-2 my-lg-0">
                    {userControlButtons}
                </form>
            </nav>
        );
    }
}

export default Header;
