import React from 'react';
import { MusicCardProps } from '@/app/models/components/music/PropTypes';
import Image from 'next/image';

function MusicCard(props: MusicCardProps) {
  if(props.type === 'carousel'){
    return (
      <div id={props.id} className='bg-red-500 m-1 h-48 w-48 rounded-md relative overflow-hidden hover:scale-110 m-2 transition duration-300 ease-in-out'>
        <Image src={props.image} alt={`Image for card`} width={192} height={192}/>
        <div className='bg-card-overlay absolute w-full bottom-0 p-5'>
          <p className='line-clamp-1'>{props.title}</p>
          <p className='line-clamp-1 text-xs text-text-subtitle'>{props?.subtitle ? <p>{props.subtitle}</p> : ''}</p>
        </div>
      </div>
      )
  }
}

export default MusicCard;
