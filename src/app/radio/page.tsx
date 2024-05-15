'use client'
import React from 'react';
import Globe from 'react-globe.gl';
import globeTexture from '../../../public/earth-dark.jpg';
import { RadioBrowserApi, Station } from 'radio-browser-api';
import StationList from '@/app/components/radio/StationList';
import StationStreamer from '@/app/components/radio/StationStreamer';
import radioStore from '@/app/store/radio/RadioProvider';

export default function Radio(){
  const api = new RadioBrowserApi('RhythmRadarRadio');
  const {currentRadioStation, currentCoordinates} = radioStore();
  const radioStreamerRef = React.createRef<HTMLSourceElement>();
  const myData = [
    {
      lat: 29.953204744601763,
      lng: -90.08925929478903,
      altitude: 0.1,
      color: '#00ff33',
    },
    {
      lat: 28.621322361013092,
      lng: 77.20347613099612,
      altitude: 0.4,
      color: '#ff0000',
    },
    {
      lat: -43.1571459086602,
      lng: 172.72338919659848,
      altitude: 0.4,
      color: '#ffff00',
    },
  ];

  return (
    <div>
      <div className='w-screen h-screen flex flex-row rounded-lg'>
        <div className='flex flex-col h-full w-full items-center'>
          <Globe globeImageUrl={globeTexture.src} pointsData={[currentCoordinates]} width={1000} pointAltitude='altitude' pointColor='color'  />
          { currentRadioStation !== undefined ? <StationStreamer streamerRef={radioStreamerRef} station={currentRadioStation}/> : ''}
        </div>
        <StationList api={api}/>
        {/*<StationStreamer station={currentRadioStation}/>*/}
      </div>
    </div>
  );
};

