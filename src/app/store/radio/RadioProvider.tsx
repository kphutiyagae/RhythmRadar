"use client"
import {useState, useContext, createContext } from 'react';
import {create} from 'zustand';
import { RadioSearchParams, RadioStoreType } from '@/app/models/store/types';
import { devtools } from 'zustand/middleware';
import { Station } from 'radio-browser-api';

const radioStore = create<RadioStoreType>()(devtools(set => ({
    currentCoordinates: [0,0],
    currentRadioStation: undefined,
    searchParams: {
      filterBy: [],
      sortBy: ''
    },
    searchTerm: '',
    stations: [],
    clearCurrentCoordinates(){
      set({currentCoordinates: [0,0]});
    },
    clearRadioStations(){
      set({stations: []})
    },
    clearSearchParams(){
      set({
        searchParams: {
          filterBy: [],
          sortBy: ''
        }})
    },
    clearSearchTerm(){
      set({searchTerm: ''})
    },
    updateCurrentCoordinates(coordinates: [number, number]){
      set({currentCoordinates: coordinates})
    },
    updateCurrentRadioStation(station){
      set({currentRadioStation: station})
    },
    updateRadioStations(stations: Station[]){
      set({stations: stations})
    },
    updateSearchParams(params: RadioSearchParams){
      set({searchParams: params})
    },
    updateSearchTerm(searchTerm: string){
      set({searchTerm: searchTerm})
    }
  })))

// const RadioContext = createContext<ReturnType<typeof useRadioStore> | null>(null);
//
// export const useRadio = () => {
//   if (!RadioContext)
//     throw new Error("useRadio must be used within a RadioProvider");
//   return useContext(RadioContext)!;
// };
//
// const RadioProvider = ({ children }: { children: React.ReactNode; }) => {
//   const [store] = useState(() => useRadioStore());
//   return <RadioContext.Provider value={store}>{children}</RadioContext.Provider>;
// };
//
// export default RadioProvider;

export default radioStore;
