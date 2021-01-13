import React from 'react';
import { artists, images } from '../data.json';

export default function Artwork({ character, pos }) {
  const characterArt = images[character] || null
  if (!characterArt) return (null)

  const index = Math.floor(Math.random() * characterArt.length);
  const art = characterArt[index]

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
