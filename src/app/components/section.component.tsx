'use client'

import React from 'react';
import { SectionComponentProps } from '@/app/models/components/prop.types';
import { Track } from '@/app/models/music/openwhyd/types';
import Image from 'next/image';
import { SpotifyPlaylist, SpotifyTrack } from '@/app/models/music/spotify/types';
import MusicCard from '@/app/components/music/MusicCard';
import { RadioStation } from '@/app/models/radio/types';
import RadioCard from '@/app/components/radio/RadioCard';
import { Station } from 'radio-browser-api';

function handleClick(id: string){
  console.log(`Clicked: ${id}`);
}
const PageSection = (props: SectionComponentProps) => {
  if(props.type === 'track-list'){
    if(!props.items){
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
          {props.items.map( (item, index) => <tr className='border-b border-gray-100'>
            <td className='flex justify-center items-center'>{index + 1}</td>
            <td>
              <div className='flex p-3 items-center'>
                <Image src={item.img} width={80} height={80} alt={`Album art for ${item.name}`} className='rounded-sm mx-12'/>
                <p className='text-lg font-bold'>{item.name}</p>
              </div>
            </td>
            <td className='py-8 flex justify-center items-center'>
              <p>{item.score}/10</p>
            </td>
            <td className='py-8'>
              {item?.pl?.id ? 'Y' : 'N'}
            </td>
          </tr>)}
          </tbody>
        </table>
      </div>
    }
  }
  if(props.type === 'hero'){
    if(!props.items || props.items?.length === 0){
      return <div><p>No tracks to display</p></div>
    }
    return <div>
      <h2></h2>
    </div>
  }
  if(props.type === 'carousel'){

    if(props.itemType === 'playlist-spotify'){
      const playlists = props.items as SpotifyPlaylist[];
      return (
        <>
          <h1 className='section-header'>{props.title}</h1>
          <ul className='w-screen flex flex-row overflow-x-auto overflow-y-hidden py-5'>{playlists.map(playlist =>{
            return  (
              <li>
                <MusicCard id={playlist.id} title={playlist.name} subtitle={playlist.description} type='carousel' image={playlist.images.at(0).url}/>
              </li>
            )
          })}</ul>
        </>
        )
    }
    if(props.itemType === 'track-spotify'){
      const tracks = props.items as SpotifyTrack[];
      return (
        <>
          <h1 className='section-header'>{props.title}</h1>
          <ul className='w-screen flex flex-row overflow-x-auto overflow-y-hidden py-5'>{tracks.map(track =>{
            return  (
              <li>
                <MusicCard id={track.id} title={track.name} subtitle={track?.artists?.at(0)?.name} type='carousel' image={track?.album?.images?.at(0)?.url ?? ''}/>
              </li>
            )
          })}</ul>
        </>
      )
    }

  }
  if(props.type === 'radio'){
    if(props.items){
      const radioStations = props.items as Station [];

      return (
        <>
         <h1 className='section-header'>{props.title}</h1>
         <ul className='w-full h-screen flex flex-col overflow-y-auto overflow-x-hidden py-5'>
           {radioStations.map(station => {
             return (
               <li className='p-5 bg-y m-2 w-3/4'>
                 <div className='flex flex-col'>
                  <p>{station.name}</p>
                   <p>{station.country}</p>
                   <ul>{station.tags.map( (tag, index) => {
                     if(index < 2){
                       return <p>{tag}</p>
                     }
                   })}</ul>
                 </div>
               </li>
             );
           })}
         </ul>
        </>
      )
    }
  }
  else{}
};

export default PageSection;
