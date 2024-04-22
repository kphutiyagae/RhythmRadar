import { Station } from 'radio-browser-api';

export interface RadioSearchParams {
  filterBy: {[key: string]: string}[]
  sortBy: 'asc' | 'desc' | 'alphabetical' | 'alphabetical-rev' | 'listens' | '';
}
export interface RadioStoreType {
  currentCoordinates: [number, number];
  currentRadioStation: Station;
  stations: Station[];
  searchTerm: string;
  searchParams: RadioSearchParams;
  updateRadioStations: () => void;
  clearRadioStations: () => void;
  updateCurrentCoordinates: (coordinates: [number, number]) => void;
  clearCurrentCoordinates: () => void;
  updateCurrentRadioStation: (station: Station) => void;
  updateSearchTerm: (searchTerm: string) => void;
  clearSearchTerm: () => void;
  updateSearchParams: (params: RadioSearchParams) => void;
  clearSearchParams: () => void;
}
