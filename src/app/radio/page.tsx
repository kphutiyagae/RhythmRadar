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
  const ref = React.createRef<HTMLCanvasElement>();

  return (
    <div>
      <div className='w-screen h-screen flex flex-row rounded-lg'>
        <div className='flex flex-col h-full w-full items-center'>
          <Globe waitForGlobeReady={true} globeImageUrl={globeTexture.src} pointsData={currentCoordinates} width={1000} pointAltitude='altitude' pointColor='color'  />
          { currentRadioStation !== undefined ? <StationStreamer station={currentRadioStation}/> : ''}
        </div>
        <StationList api={api}/>
        {/*<StationStreamer station={currentRadioStation}/>*/}
      </div>
    </div>
  );
};

