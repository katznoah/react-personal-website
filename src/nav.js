import React from 'react';
import NavBar from './navbar';
import Button from './button';

class Nav extends React.Component {
    render() {
        return (
            <NavBar id="home" className="navbar navbar-extend-lg">
                <h1 className="title navbar-brand text-info">Noah<strong>Katz</strong></h1>
                <div class="row">
                    <Button dest="Resume"/> &emsp;
                    <Button dest="Projects"/> &emsp;
                </div>
            </NavBar>
        );
    }
}

export default Nav;