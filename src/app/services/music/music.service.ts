import { environments } from '@/app/environments/dev.environment';
import { Track } from '@/app/models/music/openwhyd/types';

export async function getAllHotTracks(): Track[] {
  const data = await fetch(`${environments.OPENWHYD_API_BASE_URL}/hot?format=json`, { next: {revalidate: 60}})

  if(!data.ok){
    throw new Error('Failed to fetch hot tracks');
  }
  return await data.json().then( res => res?.tracks);
}
