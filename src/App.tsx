import React, { useState } from 'react';
import './App.css';
import { wins } from './data.json';
import Artwork from './components/Artwork'
import useColorScheme from './hooks/useColorScheme'

const randomExcept = (skip: number): number => {
  let random = Math.floor(Math.random() * wins.length);
  if (random === skip) return randomExcept(skip)
  return random
}

const App = () => {
  // handle any dark/light theme changes
  useColorScheme()

  let index = Math.floor(Math.random() * wins.length);
  const [win, setWin] = useState(wins[index]);
  const howDoYouWantToDoThis = () => {
    index = randomExcept(index)
    setWin(wins[index])
  }

  return (
    <div className="App">
      <Artwork character={win.victor} pos="left" />
      <Artwork character={win.defeated} pos="right" />

      <header className="App-header">
        <h1 className="video-title">{ win.title}</h1>
        <h2 className="spoilers-title"><strong>*SPOILERS*</strong> - Campaign {win.campaign} Episode {win.episode}</h2>
        <h3 className="versus">{ win.victor } VS { win.defeated }</h3>
      </header>

      <div className="App-content">
        <div className="video">
          <div className="videoWrapper">
            <iframe width="560"
                    height="315"
                    src={win.video + '&autoplay=1'}
                    title={win.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
            >
            </iframe>
          </div>
        </div>
        <button onClick={howDoYouWantToDoThis} className="square">How do you want to do this?</button>
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

export default App;
