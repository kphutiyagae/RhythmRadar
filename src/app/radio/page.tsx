'use client'
import React from 'react';
import Globe from 'react-globe.gl';
import globeTexture from '../../../public/earth-dark.jpg';
import { RadioBrowserApi, Station } from 'radio-browser-api';
import StationList from '@/app/components/radio/StationList';
import useRadioStore from '@/app/store/radio/RadioProvider';
import { store } from 'next/dist/build/output/store';
export default function Radio(){
  const api = new RadioBrowserApi('RhythmRadarRadio');

  const {} = useRadioStore();
  const myData = [
    {
      lat: 29.953204744601763,
      lng: -90.08925929478903,
      altitude: 0.4,
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
        <Globe globeImageUrl={globeTexture.src} pointsData={myData} width={1000} pointAltitude='altitude' pointColor='color'  />
        <StationList api={api}/>
      </div>
    </div>
  );
};

