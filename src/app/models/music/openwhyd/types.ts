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
  _id: string
  eId: string
  name: string
  img: string
  uId: string
  uNm: string
  pl?: PlaylistReference | PlaylistReference[]
  pId: string
  nbR: number
  nbL: number
  score: number
  trackUrl: string
}

