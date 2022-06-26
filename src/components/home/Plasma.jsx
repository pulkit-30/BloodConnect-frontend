import React from 'react';

function Plasma() {
  return (
    <section className='mt-20 mb-3'>
      <h1 className='mb-5 flex justify-center align-center text-3xl font-extrabold tracking-tight text-indigo-700 sm:text-4xl'>
        Lean About Plasma
      </h1>
      <div className='flex section-wrap'>
        <div className='w-full subsection m-auto mb-10 mt-10'>
          <p className='text-gray-900 text-xl w-11/12 m-auto'>
            Plasma is a yellowish liquid in your blood that carries platelets,
            red blood cells and white blood cells around the body. Plasma makes
            up approximately 55% of your blood, and contains antibodies, known
            as immunoglobulins, which fight infection. These antibodies are made
            into medicines to help people with cancers, rare diseases, immune
            disorders and genetic conditions.
          </p>
        </div>
        <div className='w-full subsection m-auto'>
          <img
            src='https://cdn.kastatic.org/ka-perseus-images/8b58582c697c7bc7cc83755edbb599218f8164fe.png'
            alt='plasma-img'
          />
        </div>
      </div>
    </section>
  );
}

export default Plasma;
