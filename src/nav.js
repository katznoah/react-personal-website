import React from 'react';
import NavBar from './navbar';
import Button from './button';

class Nav extends React.Component {
    render() {
        return (
            <NavBar id="home" className="navbar navbar-extend-lg">
                <h1 className="title navbar-brand text-info">Noah<strong>Katz</strong></h1>
                <Button dest="Resume"/>
            </NavBar>
        );
    }
}

export default Nav;