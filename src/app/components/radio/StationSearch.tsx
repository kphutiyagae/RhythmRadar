import React from 'react';
import radioStore from '@/app/store/radio/RadioProvider';

function StationSearch(props) {
  const {searchTerm, updateSearchTerm, updateFilteredRadioStations} = radioStore();

  function updateSearchParameters(event: React.ChangeEvent<HTMLInputElement>){
      updateSearchTerm(event.target.value);
      updateFilteredRadioStations();
  }


  return (
    <>
      <input value={searchTerm} onChange={ (event: React.ChangeEvent<HTMLInputElement> ) => {updateSearchParameters(event)} } type='text' placeholder='Search stations' className='p-2 mt-8 ml-14 rounded-lg bg-gray-800 text-white w-3/4'/>
    </>);
}

export default StationSearch;
