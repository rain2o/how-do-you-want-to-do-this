import React, { useState } from "react";
import { campaigns } from "./data";
import Artwork from "./components/Artwork";
import useColorScheme from "./hooks/useColorScheme";
import splitbee from "@splitbee/web";
import getRandomWin from "./helpers/getRandomWin";

import "./App.css";

function App() {
  // handle any dark/light theme changes
  useColorScheme();
  // initialize analytics
  splitbee.init({
    token: "0A21LZ6677CQ",
    scriptUrl: "/bee.js",
    apiUrl: "/_hive",
  });

  // get spoilers from URL params if any are provided
  const queryParams = new URLSearchParams(window.location.search);
  const spoilersParam: string[] =
    queryParams
      .get("spoilers")
      ?.split(",")
      .filter((s) => s !== "") || [];

  const [spoilers, setSpoilers] = useState<Array<string>>(spoilersParam);
  const [win, setWin] = useState(getRandomWin({ spoilers }));

  const toggleSpoilers = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const updatedSpoilers = checked
      ? [...spoilers, value]
      : spoilers.filter((spoiler) => spoiler !== value);

    // update state
    setSpoilers(updatedSpoilers);

    // update current win with new spoilers filter
    const newWin = getRandomWin({ skip: win, spoilers: updatedSpoilers });
    setWin(newWin);

    // update url params
    queryParams.set("spoilers", updatedSpoilers.join(","));
    window.history.pushState(
      null,
      "",
      window.location.pathname + "?" + queryParams.toString()
    );
  };

  const howDoYouWantToDoThis = () => {
    splitbee.track("HDYWTDT");
    const newWin = getRandomWin({ skip: win, spoilers });
    setWin(newWin);
  };

  return (
    <div className="App">
      {win && (
        <>
          <Artwork character={win.victor} pos="left" />
          <Artwork character={win.defeated} pos="right" />

          <header className="App-header">
            <h1 className="video-title">{win.title}</h1>
            <h2 className="spoilers-title">
              <strong>*SPOILERS*</strong> - Campaign {win.campaign} Episode{" "}
              {win.episode}
            </h2>
            <h3 className="versus">
              {win.victor} VS {win.defeated}
            </h3>
          </header>
        </>
      )}

      <div className="App-content">
        {win ? (
          <div className="video">
            <div className="videoWrapper">
              <iframe
                width="560"
                height="315"
                src={win.video + "&autoplay=1"}
                title={win.title}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ) : (
          <h2 className="no-wins">
            Uh oh! It looks like you excluded ALL campaigns! Uncheck at least
            one campaign and try again.
          </h2>
        )}
        {/* Filter to exclude campaigns */}
        <div className="campaign-filters">
          <p className="campaign-filters__description">
            To exclude a campaign from possible videos, select it below.
          </p>
          <div className="campaign-filters__container">
            {campaigns.map((campaign) => (
              <div className="campaign-filters__filter" key={campaign.key}>
                <input
                  name="spoilers"
                  id={`spoilers--${campaign.key}`}
                  value={campaign.key}
                  checked={spoilers.includes(campaign.key)}
                  type="checkbox"
                  onChange={toggleSpoilers}
                />
                <label htmlFor={`spoilers--${campaign.key}`}>
                  {campaign.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        {/* Button to load a new HDYWTDT */}
        <button onClick={howDoYouWantToDoThis} className="square">
          <span>How do you want to do this?</span>
          <span className="border--top-bottom"></span>
          <span className="border--left-right"></span>
        </button>
      </div>
      <footer className="App-footer">
        <p className="credits">
          &copy; Copyright - All content belongs to{" "}
          <a
            href="https://critrole.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Critical Role"
            className="App-link"
          >
            Critical Role
          </a>
          .
        </p>
        <p className="credits">
          Credit goes to{" "}
          <a
            href="https://www.critrolestats.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="CritRoleStats"
            className="App-link"
          >
            CritRoleStats
          </a>{" "}
          for providing the list of episodes and timestamps.
        </p>
      </footer>
    </div>
  );
}

export default App;
