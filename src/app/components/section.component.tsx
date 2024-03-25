'use client'

import React from 'react';
import { SectionComponentProps } from '@/app/models/components/prop.types';
import { Track } from '@/app/models/music/openwhyd/types';
import Image from 'next/image';

function handleClick(id: string){
  console.log(`Clicked: ${id}`);
}
const PageSection = (props: SectionComponentProps) => {
  if(props.type === 'track-list'){
    if(!props.tracks){
      return <div><p>No tracks to display</p></div>
    }
    else{
      return <div>
        <h2>{props.title}</h2>
        <ul>
          {props.tracks.map( track =>
            <li key={track.id} onClick={() => handleClick(track.id)}>
              <Image src={track.image} alt={`Album art for ${track.name}`}/>
              <div>
                <p>{track.name}</p>
                <p>{track.score}</p>
              </div>
            </li>
          )}
        </ul>
      </div>
    }
  }
  else{}
};

export default PageSection;
