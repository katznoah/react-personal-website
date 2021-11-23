import React from 'react';

class ProjCards extends React.Component {
  render() {
      return (
        <div className="row text-left">
          <div className="col">
              <div id="csh" className="project card">
                  <a href="https://github.com/katznoah/c-shell" target="_blank"><img src="https://katznoah.github.io/img/terminal.png" alt="terminal by berkah terus from the Noun Project" className="card-img-top" />
                  <div className="card-body">
                      <h5 className="card-title text-info">C Shell</h5>
                      <p className="card-text text-info">This is a shell I created using the C Programming Language</p>
                  </div></a>
              </div>
          </div>
          <div className="col">
            <div id="chat" className="project card">
                <a href="https://cisc-chat-app.herokuapp.com/" target="_blank"><img src="https://katznoah.github.io/img/chat.png" alt="chat by Icon Everywhere from the Noun Project" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title text-info">Chat App</h5>
                    <p className="card-text text-info">This is a chat app I created using Bootstrap, jQuery, Node, Express, SQLite, and Firebase</p>
                </div></a>
            </div>
          </div>
          
          <div className="col">
              <div id="crypto" className="project card">
                  <a href="https://inapppurchases.herokuapp.com/" target="_blank"><img src="https://katznoah.github.io/img/crypto.png" alt="click by Deemak Daksina from the Noun Project" className="card-img-top" />
                  <div className="card-body">
                      <h5 className="card-title text-info">Crypto Clicker</h5>
                      <p className="card-text text-info">This is a clicker game I am working on with a team, we are currently using Bootstrap, jQuery, Node, Express, D3, and Firebase</p>
                  </div>
                  </a>
              </div>
          </div>
        </div>
      );
  }
}

export default ProjCards;