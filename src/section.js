import React from 'react';

class Section extends React.Component {
  render() {
    return (
      <div id={this.props.id} className={"section " + this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

export default Section;