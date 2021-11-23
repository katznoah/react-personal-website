import React from 'react';

class CollCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h2 className="mb-0">
            <button className="btn btn-link" type="button" data-toggle="collapse" data-target={"#"+this.props.id} aria-expanded="false" aria-controls={this.props.id}>
              {this.props.title}
            </button>
          </h2>
        </div>
        <div id={this.props.id} className="collapse" dataparent={this.props.parent}>
          <div className="card-body text-secondary text-left">
              {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default CollCard;