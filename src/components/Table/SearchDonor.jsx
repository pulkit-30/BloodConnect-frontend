import React from 'react';

const SearchDonor = ({ filter, setFilter }) => {
  return (
    <span className=''>
      <input
        placeholder='Enter Query...'
        value={filter || ''}
        onChange={(e) => setFilter(e.target.value)}
        id='findDonor'
        name='findDonor'
        type='text'
        className='border-2 w-full h-10 p-3 border-gray-300 rounded'
      />
    </span>
  );
};

export default SearchDonor;
