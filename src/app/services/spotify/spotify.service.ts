import { environments } from '@/app/environments/dev.environment';
// import { getSession } from 'next-auth/react';
// import { getToken } from 'next-auth/jwt';
import { getToken } from 'next-auth/jwt';
import { getSession } from 'next-auth/react';

export async function getUserTopTracks() {
  const session = await getSession();
  if(session?.accessToken !== undefined){
    return fetch(`${environments.SPOTIFY_API_BASE_URL}/me/top/tracks`, {
      headers: {
        Authorization: `Authorization: Bearer ${session.accessToken}`
      }
    }).then( response => response.json())
  }
}

export async function getUserTopArtists() {
  // console.log({code: accessToken})
  const session = await getSession();
  if(session?.accessToken === undefined) return;

  return fetch(`${environments.SPOTIFY_API_BASE_URL}/me/top/artists`, {
    headers: {
      Authorization: `Authorization: Bearer ${session.accessToken}`
    }
  }).then( response => response.json())
}
export async function getGenresList(accessToken: string) {
  console.log({code: accessToken})
  return fetch(`${environments.SPOTIFY_API_BASE_URL}/me/top/artists`, {
    headers: {
      Authorization: `Authorization: Bearer ${accessToken}`
    }
  }).then( response => response.json())
}
