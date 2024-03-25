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
      return <div className='p-8'>
        <h2 className='text-3xl font-bold'>{props.title}</h2>
        <table className='table-auto w-full h-fit mt-5'>
          <thead className='border-b pb-2'>
            <th>#</th>
            <th>Title</th>
            <th>Score</th>
            <th>Playlist</th>
          </thead>
          <tbody>
          {props.tracks.map( (track, index) => <tr className='border-b border-gray-100'>
            <td className='flex justify-center items-center'>{index + 1}</td>
            <td>
              <div className='flex p-3 items-center'>
                <Image src={track.img} width={80} height={80} alt={`Album art for ${track.name}`} className='rounded-sm mx-12'/>
                <p className='text-lg font-bold'>{track.name}</p>
              </div>
            </td>
            <td className='py-8 flex justify-center items-center'>
              <p>{track.score}/10</p>
            </td>
            <td className='py-8'>
              {track?.pl?.id ? 'Y' : 'N'}
            </td>
          </tr>)}
          </tbody>
        </table>
      </div>
    }
  }
  else{}
};

export default PageSection;
