import React from 'react';

class NavItem extends React.Component {
    render() {
        return (
            <a href={this.props.href} className={this.props.className}>{this.props.children}</a>
        );
    }
}

export default NavItem;