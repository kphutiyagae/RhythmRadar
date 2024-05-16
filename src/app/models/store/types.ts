import { Station } from 'radio-browser-api';

export interface RadioSearchParams {
  filterBy: {[key: string]: string}[]
  sortBy: 'asc' | 'desc' | 'alphabetical' | 'alphabetical-rev' | 'listens' | '';
}

export interface Coordinates     {
  lat: number,
  lng: number,
  altitude: number,
  color: string,
}

export interface RadioStoreType {
  currentCoordinates: Coordinates[];
  currentRadioStation: Station;
  stations: Station[];
  searchTerm: string;
  searchParams: RadioSearchParams;
  filteredRadioStations: Station[];
  updateFilteredRadioStations: () => void;
  updateRadioStations: (stations: Station[]) => void;
  clearRadioStations: () => void;
  updateCurrentCoordinates: (coordinates: [number, number]) => void;
  clearCurrentCoordinates: () => void;
  updateCurrentRadioStation: (station: Station) => void;
  updateSearchTerm: (searchTerm: string) => void;
  clearSearchTerm: () => void;
  updateSearchParams: (params: RadioSearchParams) => void;
  clearSearchParams: () => void;
}
