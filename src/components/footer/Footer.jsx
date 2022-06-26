import React from 'react';

function Footer() {
  return (
    <div className='bg-indigo-800 w-100 h-80 text-white flex flex-col items-center justify-center'>
      <div className='flex-shrink-0 flex items-center'>
        <img
          loading='lazy'
          className=' h-10 w-auto'
          src='https://user-images.githubusercontent.com/76155456/175778468-21661027-22ff-4556-a651-472b699e6d4e.png'
          alt='Workflow'
        />
      </div>
    </div>
  );
}

export default Footer;
