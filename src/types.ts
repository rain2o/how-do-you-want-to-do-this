export type ArtworkProps = {
  character: string,
  pos: string
}

export type Win = {
  campaign: string,
  episode: string,
  video: string,
  title: string,
  victor: string,
  defeated: string
}

export type Art = {
  artwork: string,
  credit: string
}

export type Images = {
  [key: string]: Art[] // Character: Art[]
}

export type Artists = {
  [key: string]: string // Artist name: URL
}

export type SiteData = {
  wins: Win[],
  images: Images,
  artists: Artists
}

export type RandomWinsParams = {
  skip?: Win,
  spoilers?: String[]
}
