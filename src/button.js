import React from 'react';

class Button extends React.Component {
  render() {
    const dest = this.props.dest;
    return (
      <a href={"#"+dest}>{dest}</a>
    );
  }
}

export default Button;