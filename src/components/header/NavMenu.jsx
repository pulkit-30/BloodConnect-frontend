import { Disclosure } from '@headlessui/react';
import React, { useContext } from 'react';
import UserContext from '../../context/user/UserContext';
import AuthMenu from './AuthMenu';

function NavMenu() {
  const Auth = useContext(UserContext);
  const navigation = [
    { name: 'Blood Availability', href: '#', current: true },
    { name: 'Covid Help', href: '#', current: false },
    { name: 'Learn More', href: '#', current: false },
    { name: 'About', href: '#', current: false },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  return (
    <React.Fragment>
      <Disclosure.Panel className='sm:hidden'>
        <div className='px-2 pt-2 pb-3 space-y-1'>
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as='a'
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-indigo-900 text-white'
                  : 'text-gray-300 hover:bg-indigo-700 hover:text-white',
                'block px-3 py-2 rounded-md text-base font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </Disclosure.Button>
          ))}
          {!Auth.User && (
            <AuthMenu
              style={{
                display: 'block',
              }}
            />
          )}
        </div>
      </Disclosure.Panel>
    </React.Fragment>
  );
}

export default NavMenu;
