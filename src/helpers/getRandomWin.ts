import { wins } from "../data.json";
import { RandomWinsParams, Win } from "../types";

/**
 * Get a random win. Optionally excluding a single Win and one or more campaigns
 * @param skip Optional Win object to skip
 * @param spoilers Optional array of Campaigns to exclude. Should be the value used in win.campaign (e.g. "1" or "2")
 * @returns Win
 */
const getRandomWin = ({ skip, spoilers }: RandomWinsParams) => {
  // remove any campaigns flagged as spoilers
  let winOptions: Win[] =
    spoilers && spoilers.length
      ? wins.filter((win) => !spoilers.includes(win.campaign))
      : wins;

  // exclude skipped win if provided
  if (skip) {
    winOptions = winOptions.filter((win) => win.video !== skip.video);
  }

  const index = Math.floor(Math.random() * winOptions.length);
  return winOptions[index];
};

export default getRandomWin;
