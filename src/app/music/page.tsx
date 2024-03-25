
import React from 'react';
import { getAllHotTracks } from '@/app/services/music/music.service';
import SectionComponent from '@/app/components/section.component';

export default async function Music() {
  const hotTracks = await getAllHotTracks();
  return (
    <div>
      <SectionComponent type='track-list' title='Trending Tracks' tracks={hotTracks}/>
    </div>
  );
};

