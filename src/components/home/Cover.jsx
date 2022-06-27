/* This example requires Tailwind CSS v2.0+ */
import { Popover } from '@headlessui/react';
import { Link } from 'react-router-dom';

export default function CoverPage() {
  return (
    <div className='relative bg-white overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
          <svg
            className='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2'
            fill='currentColor'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            aria-hidden='true'
          >
            <polygon points='50,0 100,0 50,100 0,100' />
          </svg>

          <Popover>
            <div className='relative pt-6 px-4 sm:px-6 lg:px-8'></div>
          </Popover>

          <section className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
            <div className='sm:text-center lg:text-left'>
              <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                <span className='block xl:inline'>Blood Connect</span>{' '}
                <span className='block text-indigo-700 xl:block'>
                  The Gift to Life
                </span>
              </h1>
              <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                BloodConnect is an initiative which can help you in finding a
                person who has the blood group that you need and can really help
                you in times when someone who wants to, can’t.
              </p>
              <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                <div className='rounded-md shadow'>
                  <Link
                    to='/availability'
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'
                  >
                    Blood Availability
                  </Link>
                </div>
                <div className='mt-3 sm:mt-0 sm:ml-3'>
                  <a
                    target={'_blank'}
                    rel='noreferrer'
                    href='https://covid-19-tracker-491fa.firebaseapp.com/'
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10'
                  >
                    Covid Help
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
        <img
          loading='lazy'
          className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
          src='https://img.etimg.com/thumb/msid-66025529,width-650,imgsize-273527,,resizemode-4,quality-100/blood-donation_gettyimages.jpg'
          alt='preview'
        />
      </div>
    </div>
  );
}
