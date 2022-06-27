import React from 'react'

const SearchDonor = ({filter, setFilter}) => {
  return (
    <span style={{fontSize:18}}>
        Find Donor: {' '}
        <input placeholder='Enter Donor Name...' style={{width:'330px', padding:'5px', borderWidth:'3px'}} value={filter || ''} onChange={e=>setFilter(e.target.value)}/>

    </span>
  )
}

export default SearchDonor