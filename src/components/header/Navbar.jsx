/* This example requires Tailwind CSS v2.0+ */
import React, { useContext } from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import NavMenu from './NavMenu';
import ProfileMenu from './ProfileMenu';
import AuthMenu from './AuthMenu';
import UserContext from '../../context/user/UserContext';
import { Link } from 'react-router-dom';
const navigation = [
  { name: 'Blood Availability', href: '/availability', current: true },
  {
    name: 'Covid Help',
    type: 'ext',
    href: 'https://covid-19-tracker-491fa.firebaseapp.com/',
    current: false,
  },
  { name: 'Learn More', href: '/learn', current: false },
  {
    name: 'About',
    type: 'ext',
    href: 'https://pulkit-30.github.io/BloodConnect/',
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const Auth = useContext(UserContext);
  return (
    <Disclosure as='nav' className='bg-indigo-800'>
      {({ open }) => (
        <React.Fragment>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <Link to='/' className='flex-shrink-0 flex items-center'>
                  <img
                    loading='lazy'
                    className='block lg:hidden h-8 w-auto'
                    src='https://user-images.githubusercontent.com/76155456/175778463-76d8e14d-675e-44fd-8ad4-a3ae18bdceca.png'
                    alt='Workflow'
                  />
                  <img
                    loading='lazy'
                    className='hidden lg:block h-10 w-auto'
                    src='https://user-images.githubusercontent.com/76155456/175778468-21661027-22ff-4556-a651-472b699e6d4e.png'
                    alt='Workflow'
                  />
                </Link>
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => {
                      if (item.type !== 'ext') {
                        return (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-indigo-900 text-white'
                                : 'text-gray-300 hover:bg-indigo-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        );
                      } else {
                        return (
                          <a
                            target='_blank'
                            rel='noreferrer'
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-indigo-900 text-white'
                                : 'text-gray-300 hover:bg-indigo-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                {!Auth.User && <AuthMenu />}
                {Auth.User && <ProfileMenu />}
              </div>
            </div>
          </div>
          <NavMenu />
        </React.Fragment>
      )}
    </Disclosure>
  );
}
