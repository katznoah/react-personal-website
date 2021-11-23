import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
            <nav id={this.props.id} className={this.props.className}>
                {this.props.children}
            </nav>
        );
    }
}

export default NavBar;