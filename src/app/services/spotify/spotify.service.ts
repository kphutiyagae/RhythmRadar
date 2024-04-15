import { environments } from '@/app/environments/dev.environment';

export async function getTopTracks(accessToken: string) {
  console.log({code: accessToken})
  return fetch(`${environments.SPOTIFY_API_BASE_URL}/me/top/tracks`, {
    headers: {
      Authorization: `Authorization: Bearer ${accessToken}`
    }
  }).then( response => response.json())
}
