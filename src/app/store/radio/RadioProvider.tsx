"use client"
import {useState, useContext, createContext } from 'react';
import {create} from 'zustand';
import { RadioSearchParams, RadioStoreType } from '@/app/models/store/types';
import { devtools } from 'zustand/middleware';
import { Station } from 'radio-browser-api';

const radioStore = create<RadioStoreType>()(devtools(set => ({
    currentCoordinates: [
      {
        lat: 28.621322361013092,
        lng: 77.20347613099612,
        altitude: 0.2,
        color: '#ff0000',
      },
    ],
    currentRadioStation: undefined,
    searchParams: {
      filterBy: [],
      sortBy: ''
    },
    searchTerm: '',
    stations: [],
    filteredRadioStations: [],
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
    },
  updateFilteredRadioStations(){
      const currentState = radioStore.getState();
      if(currentState.searchTerm !== ''){
        set({ filteredRadioStations: currentState.stations.filter( station => station.name.includes(currentState.searchTerm))})
      }
      else {
        set({ filteredRadioStations: [] })
      }
  }
  })))

export default radioStore;
