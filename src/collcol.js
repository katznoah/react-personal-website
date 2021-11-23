import React from 'react';
import CollCard from './collcard';

class CollCol extends React.Component {
  render() {
    const id = this.props.id;
    return (
          <div className="col col-4 text-center">
            <h2 className="list-title text-center">{this.props.title}</h2>
            <hr />
            <div className="accordian" id={this.props.id}>
              {this.props.json.map((val) => {
                return (
                    <CollCard parent={id} title={val.title} id={val.id} key={val.id}>
                        {val.text}
                    </CollCard>
                );
              })}
            </div>
          </div>
    );
  }
}

export default CollCol;