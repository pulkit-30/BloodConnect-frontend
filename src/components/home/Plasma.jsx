import React from 'react';

function Plasma() {
  return (
    <section className='mt-36'>
      <div className='flex flex-wrap'>
        <div className='w-1/2'>
          <h1 className='flex justify-center align-center text-3xl font-extrabold tracking-tight text-indigo-700 sm:text-4xl'>
            Plasma
          </h1>
          <p className='m-10 text-gray-900 text-xl'>
            Plasma is a yellowish liquid in your blood that carries platelets,
            red blood cells and white blood cells around the body. Plasma makes
            up approximately 55% of your blood, and contains antibodies, known
            as immunoglobulins, which fight infection. These antibodies are made
            into medicines to help people with cancers, rare diseases, immune
            disorders and genetic conditions.
          </p>
        </div>
        <img
          className='w-1/2 h-fit'
          src='https://cdn.kastatic.org/ka-perseus-images/8b58582c697c7bc7cc83755edbb599218f8164fe.png'
          alt='plasma-img'
        />
      </div>
    </section>
  );
}

export default Plasma;
