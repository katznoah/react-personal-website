import React from 'react';

class Button extends React.Component {
  render() {
    const dest = this.props.dest;
    return (
      <a href={"#"+dest}><button type="button" className="btn btn-info">{dest}</button></a>
    );
  }
}

export default Button;