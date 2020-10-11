import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import data from './data.json';

function randomExcept(skip) {
  let random = Math.floor(Math.random() * data.wins.length);
  if (random === skip) return randomExcept(skip)
  return random
}

class App extends Component {
  constructor(props) {
    super(props);
    let index = Math.floor(Math.random() * data.wins.length);
    this.state = {
      index: index,
      win: data.wins[index]
    };
  }
  howDoYouWantToDoThis = () => {
    let index = randomExcept(this.state.index)
    this.setState({
      index: index,
      win: data.wins[index]
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1><strong>*SPOILERS*</strong> - Campaign {this.state.win.campaign} Episode {this.state.win.episode}</h1>
        </header>
        <div className="App-content">
          <div className="video">
            <h2 className="video-title">{ this.state.win.title}</h2>
            <h3 className="versus">{ this.state.win.victor } VS { this.state.win.defeated }</h3>
            <iframe width="560"
                    height="315"
                    src={this.state.win.video + '&autoplay=1'}
                    title={this.state.win.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
            >
            </iframe>
          </div>
          <button onClick={this.howDoYouWantToDoThis} className="square">How do you want to do this?</button>
        </div>
        <footer className="App-footer">
          <p className="credits">
            &copy; Copyright - All content belongs to <a href="https://critrole.com/" target="_blank" rel="noopener noreferrer" title="Critical Role" className="App-link">Critical Role</a>.
          </p>
          <p className="credits">
            Credit goes to <a href="https://www.critrolestats.com/" target="_blank" rel="noopener noreferrer" title="CritRoleStats" className="App-link">CritRoleStats</a> for providing the list of episodes and timestamps.
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
