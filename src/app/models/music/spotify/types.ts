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

export interface SpotifyArtist {
  external_urls: ExternalUrls
  href: string
  id: string
  name: string
  type: string
  uri: string
}

export interface SpotifyAlbum {
  album_type: string
  artists: SpotifyArtist[]
  available_markets: string[]
  external_urls: ExternalUrls2
  href: string
  id: string
  images: Image[]
  name: string
  release_date: string
  release_date_precision: string
  total_tracks: number
  type: string
  uri: string
}
export interface ExternalIds {
  isrc: string
}
export interface SpotifyTrack {
  album: SpotifyAlbum
  artists: SpotifyArtist[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: ExternalIds
  external_urls: ExternalUrls
  href: string
  id: string
  is_local: boolean
  name: string
  popularity: number
  preview_url: string
  track_number: number
  type: string
  uri: string
}

export interface SpotifyPlaylistResponse extends SpotifyResponse{
  items: SpotifyPlaylist[];
}

export interface SpotifyTracksResponse extends SpotifyResponse{
  items: SpotifyTrack[];
}
