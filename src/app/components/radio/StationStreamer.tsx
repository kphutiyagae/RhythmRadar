import React from 'react';
import { StationStreamerProps } from '@/app/models/radio/types';

function StationStreamer(props: StationStreamerProps) {
  console.log(props.streamerRef.current);
  return (
    <div className='bg-primary rounded-lg w-fit h-fit relative bottom-48 pt-3 pl-3 pr-6 pb-3'>
      <p className='mb-1 text-lg font-semibold'>{props.station.name}</p>
      {props.station?.language?.length !== 0 ? <p className='text-sm'>{props.station.language.at(0)}</p> : ''}
      {props.station?.clickCount !== 0 ? <p className='text-sm'>Clicks: {props.station.clickCount}</p> : ''}
      <audio controls autoPlay className='bg-primary text-white rounded-lg'>
        <source ref={props.streamerRef} id='radio-station-streamer' src={props.station.urlResolved} type="audio/mpeg"/>
      </audio>
    </div>
  );
}

export default StationStreamer;
