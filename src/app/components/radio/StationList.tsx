'use client'
import React, { useEffect, useState } from 'react';
import { CountryResult, RadioBrowserApi, StationSearchType, StationQuery, Station } from 'radio-browser-api';
import { number } from 'prop-types';
import StationSearch from '@/app/components/radio/StationSearch';
import SectionComponent from '@/app/components/section.component';
import { RadioStation } from '@/app/models/radio/types';
import {useRadio} from '@/app/store/radio/RadioProvider';

export interface StationListProps {
  api: RadioBrowserApi
}
function StationList(props: StationListProps) {
  const api = props.api;
  const [userLocation, setUserLocation] = useState<[number, number]>([0,0]);
  const [currentLocation, setCurrentLocation] = useState<[number, number]>([0,0]);
  const [countries, setCountries] = useState<CountryResult[]>([]);
  const [radioStations, setRadioStations] = useState<Station[]>([]);
  const c = useRadio();

  useEffect(() => {
    return async () => {
      // if(navigator.geolocation){
      //   navigator.geolocation.getCurrentPosition((location) => {
      //     setUserLocation([location.coords.latitude, location.coords.longitude])
      //     console.log(userLocation);
      //   },
      //     (error) => {
      //     console.log('Could not retrieve your location.')
      //     })
      // }
      // else{
      //   console.log("Geolocation not supported.")
      // }
      await api.getStationsBy(StationSearchType.byCountry, 'South Africa').then((stations: Station[]) => setRadioStations(stations));

      // await api.getCountries().then((countryList: CountryResult[]) => setCountries(countryList));
    };
  }, []);

  return (
    <div className='overflow-hidden w-full h-3/4 border border-primary rounded-lg'>
      <StationSearch/>
      <SectionComponent type='radio' itemType='radio' title='Stations' items={radioStations}/>
    </div>
  )
}


export default StationList;
