import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import Artwork from './components/Artwork'

function randomExcept(skip) {
  let random = Math.floor(Math.random() * data.wins.length);
  if (random === skip) return randomExcept(skip)
  return random
}

class App extends Component {
  constructor(props) {
    super(props);
    const index = Math.floor(Math.random() * data.wins.length);
    const { win, victorImg, defeatedImg } = this.findNewWin(index)
    this.state = {
      index,
      win,
      victorImg,
      defeatedImg
    }
  }
  findNewWin = (index) => {
    const win = data.wins[index]
    return {
      win,
      victorImg: data.images[win.victor] || null,
      defeatedImg: data.images[win.defeated] || null
    };
  }
  howDoYouWantToDoThis = () => {
    const index = randomExcept(this.state.index)
    const { win, victorImg, defeatedImg } = this.findNewWin(index)
    this.setState({
      index,
      win,
      victorImg,
      defeatedImg
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.victorImg && <Artwork art={this.state.victorImg} pos="left" />}
        {this.state.defeatedImg && <Artwork art={this.state.defeatedImg} pos="right" />}

        <header className="App-header">
          <h1><strong>*SPOILERS*</strong> - Campaign {this.state.win.campaign} Episode {this.state.win.episode}</h1>
        </header>

        <div className="App-content">
          <div className="video">
            <h2 className="video-title">{ this.state.win.title}</h2>
            <h3 className="versus">{ this.state.win.victor } VS { this.state.win.defeated }</h3>
            <div className="videoWrapper">
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
