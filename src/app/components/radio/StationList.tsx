'use client'
import React, { useEffect, useState } from 'react';
import { CountryResult, RadioBrowserApi, StationSearchType, StationQuery } from 'radio-browser-api';
import { number } from 'prop-types';

export interface StationListProps {
  api: RadioBrowserApi
}
function StationList(props: StationListProps) {
  const api = props.api;
  const [userLocation, setUserLocation] = useState<[number, number]>([0,0]);
  const [currentLocation, setCurrentLocation] = useState<[number, number]>([0,0]);
  const [countries, setCountries] = useState<CountryResult[]>([]);
  // const stations = await api.getStationsBy(StationSearchType.byTag, 'jazz').then(console.log);
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

      await api.getStationsBy(StationSearchType.byCountry, 'South Africa').then(console.log);
      await api.getCountries().then((countryList: CountryResult[]) => setCountries(countryList));
    };
  }, []);

  return (
    <div>
    </div>
  )
}


export default StationList;
