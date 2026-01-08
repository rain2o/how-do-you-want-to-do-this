import { useEffect, useState } from "react";
import { artists, images } from "../data";
import type { Art, ArtworkProps } from "../types";

function useCharacterArt(character: string): Art | undefined {
  const characterArt: Art[] = images[character] || [];
  if (!characterArt.length) {
    return undefined;
  }

  const index = Math.floor(Math.random() * characterArt.length);
  return characterArt[index];
}

export default function Artwork({ character, pos }: ArtworkProps) {
  const art = useCharacterArt(character);

  const [media, setMedia] = useState<string>();

  useEffect(() => {
    if (!art) {
      return;
    }

    const importMedia = async () => {
      const module = await import(`../artwork/${art.artwork}.png`);
      setMedia(module.default);
    };

    importMedia();
  }, [art]);

  if (!art) return null;

  return (
    <div id={"bg-" + pos} className="artwork">
      <img src={media} alt={character} />
      <a
        className="artwork-credit App-link"
        href={artists[art.credit]}
        target="_blank"
        rel="noopener noreferrer"
      >
        Artwork by @{art.credit}
      </a>
    </div>
  );
}
