export interface SpotifyResponse {
  href: string
  limit: number
  next: string
  offset: number
  previous: any
  total: number
}

export interface ExternalUrls {
  spotify: string
}

export interface ExternalUrls2 {
  spotify: string
}

export interface Image {
  height?: number
  url: string
  width?: number
}

export interface Tracks {
  href: string
  total: number
}

export interface Owner {
  display_name: string
  external_urls: ExternalUrls2
  href: string
  id: string
  type: string
  uri: string
}

export interface SpotifyPlaylist {
  collaborative: boolean
  description: string
  external_urls: ExternalUrls
  href: string
  id: string
  images: Image[]
  name: string
  owner: Owner
  primary_color?: string
  public: boolean
  snapshot_id: string
  tracks: Tracks
  type: string
  uri: string
}

export interface SpotifyPlaylistResponse extends SpotifyResponse{
  items: SpotifyPlaylist[];
}
