import { Disclosure } from '@headlessui/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/user/UserContext';
import AuthMenu from './AuthMenu';

function NavMenu() {
  const Auth = useContext(UserContext);
  const navigation = [
    { name: 'Blood Availability', href: '/availability', current: true },
    { name: 'Covid Help', href: '/covid', current: false },
    { name: 'Learn More', href: '/learn', current: false },
    { name: 'About', href: '/about', current: false },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  return (
    <React.Fragment>
      <Disclosure.Panel className='sm:hidden'>
        <div className='px-2 pt-2 pb-3 space-y-1'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                item.current
                  ? 'bg-indigo-900 text-white'
                  : 'text-gray-300 hover:bg-indigo-700 hover:text-white',
                'block px-3 py-2 rounded-md text-base font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </Link>
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
