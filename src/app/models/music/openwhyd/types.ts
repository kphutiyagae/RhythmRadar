export interface OpenwhydAPIResponse {
  hasMore: HasMore
  tracks: Track[]
}

export interface HasMore {
  skip: number
}

export interface PlaylistReference {
  id: number
  name: string
}

export interface Track {
  id: string
  trackExternalId: string
  name: string
  image: string
  uId: string
  uNm: string
  userPlaylistRef?: PlaylistReference | PlaylistReference[]
  playlistId: string
  nbR: number
  nbL: number
  score: number
  trackUrl: string
}

