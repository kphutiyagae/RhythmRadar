import { Station } from 'radio-browser-api';

export interface RadioSearchParams {
  filterBy: {[key: string]: string}[]
  sortBy: 'asc' | 'desc' | 'alphabetical' | 'alphabetical-rev' | 'listens';
}
export interface RadioStoreType {
  currentCoordinates: [number, number];
  currentRadioStation: Station;
  stations: Station[];
  searchTerm: string;
  searchParams: RadioSearchParams;
}
