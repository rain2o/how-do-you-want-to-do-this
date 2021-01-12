import React from 'react';
import { artists } from '../data.json';

export default function Artwork({ art, pos }) {
  return (
    <div id={"bg-" + pos} className="artwork">
      <img src={ require(`../artwork/${art.artwork}`) } alt="" />
      <a className="artwork-credit App-link"
          href={artists[art.credit]}
          target="_blank"
          rel="noopener noreferrer"
      >
        Artwork by @{ art.credit }
      </a>
    </div>
  )
}
