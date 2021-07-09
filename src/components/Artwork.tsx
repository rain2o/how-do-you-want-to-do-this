import { artists, images } from '../data.json'
import { Art, Artists, ArtworkProps, Images } from '../types'

export default function Artwork({ character, pos }: ArtworkProps) {
  const characterArt: Art[] = (images as Images)[character] || []
  if (!characterArt.length) return (null)

  const index = Math.floor(Math.random() * characterArt.length);
  const art = characterArt[index]
  const media = require(`../artwork/${art.artwork}`)

  return (
    <div id={"bg-" + pos} className="artwork">
      <img src={ media.default } alt={ character } />
      <a className="artwork-credit App-link"
          href={(artists as Artists)[art.credit]}
          target="_blank"
          rel="noopener noreferrer"
      >
        Artwork by @{ art.credit }
      </a>
    </div>
  )
}
