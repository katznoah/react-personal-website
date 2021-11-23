import React from 'react';
import CollCard from './collcard';

class CollCol extends React.Component {
  render() {
    const id = this.props.id;
    return (
          <div className="col text-center fat">
            <h2 className="list-title text-center">{this.props.title}</h2>
            <hr />
            <div className="container">
            <div className="container accordian" id={this.props.id}>
              {this.props.json.map((val) => {
                return (
                    <CollCard parent={id} title={val.title} id={val.id} key={val.id}>
                        {val.text}
                    </CollCard>
                );
              })}
            </div>
            </div>
          </div>
    );
  }
}

export default CollCol;