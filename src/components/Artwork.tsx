import React from 'react';
import { artists, images } from '../data.json'
import { Art, Artists, ArtworkProps, Images } from '../types'

export default function Artwork({ character, pos }: ArtworkProps) {
  // force correct types
  const characterImages: Images = images;
  const artistsObj: Artists = artists;
  const characterArt: Art[] = characterImages[character] || []
  if (!characterArt.length) return (null)

  const index = Math.floor(Math.random() * characterArt.length);
  const art = characterArt[index]
  const media = require(`../artwork/${art.artwork}`)

  return (
    <div id={"bg-" + pos} className="artwork">
      <img src={ media.default } alt={ character } />
      <a className="artwork-credit App-link"
          href={artistsObj[art.credit]}
          target="_blank"
          rel="noopener noreferrer"
      >
        Artwork by @{ art.credit }
      </a>
    </div>
  )
}
