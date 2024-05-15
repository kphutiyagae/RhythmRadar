'use client'
import React, { useEffect, useState } from 'react';
import { CountryResult, RadioBrowserApi, StationSearchType, StationQuery, Station } from 'radio-browser-api';
import { number } from 'prop-types';
import StationSearch from '@/app/components/radio/StationSearch';
import SectionComponent from '@/app/components/section.component';
import radioStore from '@/app/store/radio/RadioProvider';

export interface StationListProps {
  api: RadioBrowserApi
}
function StationList(props: StationListProps) {
  const api = props.api;
  const [userLocation, setUserLocation] = useState<[number, number]>([0,0]);
  const [currentLocation, setCurrentLocation] = useState<[number, number]>([0,0]);
  const [countries, setCountries] = useState<CountryResult[]>([]);
  const [radioStations, setRadioStations] = useState<Station[]>([]);
  const {stations, filteredRadioStations, updateRadioStations, updateCurrentRadioStation} = radioStore();
  const audioElement = document?.querySelector("audio") ?? undefined;

  function updateRadioStream(station: Station){
    updateCurrentRadioStation(station);
    if(audioElement !== undefined){
      audioElement.pause();
      setTimeout(function () {
        audioElement.load(); // This stops the stream from downloading
      });
    }
  }

  useEffect(() => {
    return async () => {
       await api.getStationsBy(StationSearchType.byCountry, 'South Africa').then((stations: Station[]) => {
         updateRadioStations(stations);
       });
      // await api.getCountries().then((countryList: CountryResult[]) => setCountries(countryList));
    };
  }, []);

  return (
    <div className='overflow-hidden w-full h-3/4 border border-primary rounded-lg'>
      <StationSearch/>
      <SectionComponent type='radio' itemType='radio' title='Stations' items={filteredRadioStations.length !== 0 ? filteredRadioStations : stations} onItemClick={updateRadioStream}/>
    </div>
  )
}


export default StationList;
