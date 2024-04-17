import { environments } from '@/app/environments/dev.environment';
// import { getSession } from 'next-auth/react';
// import { getToken } from 'next-auth/jwt';
import { getToken } from 'next-auth/jwt';
import { getSession } from 'next-auth/react';
import {
  SpotifyPlaylist,
  SpotifyPlaylistResponse,
  SpotifyResponse,
  SpotifyTrack, SpotifyTracksResponse,
} from '@/app/models/music/spotify/types';

export async function getUserTopTracks(): Promise<SpotifyTrack[]> {
  const session = await getSession();
  if(session?.accessToken !== undefined){
    return fetch(`${environments.SPOTIFY_API_BASE_URL}/me/top/tracks`, {
      headers: {
        Authorization: `Authorization: Bearer ${session.accessToken}`
      }
    }).then( async response => {
        const res = await response.json() as SpotifyTracksResponse
        return res.items;
      }
    )
      .catch( error => {
        console.log('API Error', error);
        return [];
      })
  }
  return [];
}
export async function getUserTopArtists() {
  const session = await getSession();
  if(session?.accessToken === undefined) return;

  return fetch(`${environments.SPOTIFY_API_BASE_URL}/me/top/artists`, {
    headers: {
      Authorization: `Authorization: Bearer ${session.accessToken}`
    }
  }).then( response => response.json())
}

export async function getUserPlaylists(userId: string): Promise<SpotifyPlaylist[]> {
  const session = await getSession();
  if(session?.accessToken === undefined || session?.user?.name === undefined) return;

  return fetch(`${environments.SPOTIFY_API_BASE_URL}/users/${userId}/playlists`, {
    headers: {
      Authorization: `Authorization: Bearer ${session.accessToken}`
    }
  }).then( async response => {
    const res = await response.json() as SpotifyPlaylistResponse;
    return res.items
  }).catch( e => {console.log(e); return new Array([])})
}

export async function getRecommendedPlaylists() {
  const session = await getSession();
  if (session?.accessToken === undefined) return;

  return fetch(`${environments.SPOTIFY_API_BASE_URL}/browse/featured-playlists`, {
    headers: {
      Authorization: `Authorization: Bearer ${session.accessToken}`
    }
  }).then(response => response.json())
}

export async function getGenresList(accessToken: string) {
  console.log({code: accessToken})
  return fetch(`${environments.SPOTIFY_API_BASE_URL}/me/top/artists`, {
    headers: {
      Authorization: `Authorization: Bearer ${accessToken}`
    }
  }).then( response => response.json())
}

export async function getCurrentUserProfile() {
  // console.log({code: accessToken})
  const session = await getSession();
  if(session?.accessToken === undefined) return;

  return fetch(`${environments.SPOTIFY_API_BASE_URL}/me`, {
    headers: {
      Authorization: `Authorization: Bearer ${session.accessToken}`
    }
  }).then( response => response.json())
}

export async function getCategoryPlaylists(categoryID: string) {
  const session = await getSession();
  if(session?.accessToken === undefined) return;

  return fetch(`${environments.SPOTIFY_API_BASE_URL}/browse/categories/${categoryID}/playlists`, {
    headers: {
      Authorization: `Authorization: Bearer ${session.accessToken}`
    }
  }).then( response => response.json())
}


export async function search(query: string) {
  const session = await getSession();
  if(session?.accessToken === undefined || query.length === 0) return;

  return fetch(`${environments.SPOTIFY_API_BASE_URL}/search?${query}`, {
    headers: {
      Authorization: `Authorization: Bearer ${session.accessToken}`
    }
  }).then( response => response.json())
}

export async function getRecommendations() {
  const session = await getSession();
  if(session?.accessToken === undefined) return;

  return fetch(`${environments.SPOTIFY_API_BASE_URL}/recommendations`, {
    headers: {
      Authorization: `Authorization: Bearer ${session.accessToken}`
    }
  }).then( response => response.json())
}
