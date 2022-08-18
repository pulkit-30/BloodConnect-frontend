import React, { Fragment, useContext } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/user/UserContext';
import MessageContext from '../../context/Messages/MessageContext';
import ModalContext from '../../context/Modal/ModalContext';
import axios from 'axios';
import { route } from '../../api';

function ProfileMenu() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  const Auth = useContext(UserContext);
  const Message = useContext(MessageContext);
  const Modal = useContext(ModalContext);
  const LogOut = () => {
    Auth.LogOut();
    Message.ThrowMessage('Signed Out Successfully!!');
  };
  const DeleteAcc = () => {
    axios.delete(route.user_del + Auth.User._id).then(() => {
      Auth.LogOut();
      Message.ThrowMessage('Account Deleted Successfully!!');
    });
  };
  return (
    <React.Fragment>
      {/* Profile dropdown */}
      <Menu as='div' className='ml-3 relative z-50'>
        <div>
          <Menu.Button className='bg-indigo-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
            <span className='sr-only'>Open user menu</span>
            <img
              loading='lazy'
              className='h-8 w-8 rounded-full'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&usqp=CAU'
              alt=''
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to='/profile'
                  className={classNames(
                    active ? 'bg-indigo-100' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                >
                  Your Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(
                    active ? 'bg-indigo-100' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                  onClick={() => {
                    Modal.setOpen(
                      'Logout',
                      'Are you sure you want to log-out?',
                      'LogOut',
                      LogOut
                    );
                  }}
                >
                  Sign out
                </div>
              )}
            </Menu.Item>
            <Menu.Item
              style={{
                width: '90%',
                margin: 'auto',
                borderRadius: '10px',
                backgroundColor: 'red',
                color: 'white',
              }}
            >
              {({ active }) => (
                <Link
                  to='/'
                  className={classNames(
                    active ? 'bg-indigo-100' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                  onClick={() => {
                    Modal.setOpen(
                      'Delete Account',
                      'Are you sure you want to delete your account?',
                      'Delete',
                      DeleteAcc
                    );
                  }}
                >
                  Delete Account
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </React.Fragment>
  );
}

export default ProfileMenu;
