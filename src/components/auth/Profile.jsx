import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/user/UserContext';

function Profile() {
  const Auth = useContext(UserContext);
  const navigate = useNavigate();
  if (!Auth.User) {
    navigate('/');
  }
  return (
    <div className='bg-white shadow overflow-hidden sm:rounded-lg w-11/12 m-auto mt-20'>
      <div className='px-4 py-5 sm:px-6'>
        <h1 className='text-lg leading-6 font-medium text-gray-900'>
          Your Profile
        </h1>
      </div>
      <div className='border-t border-gray-200'>
        <dl>
          <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>UserName</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              {Auth.User.username}
            </dd>
          </div>
          <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Email address</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              {Auth.User.email}
            </dd>
          </div>
          <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Blood Group</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              {Auth.User.bloodGroup}
            </dd>
          </div>
          <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>City</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              {Auth.User.city}
            </dd>
          </div>
          <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>State</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              {Auth.User.state}
            </dd>
          </div>
          <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Country</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              {Auth.User.country}
            </dd>
          </div>
        </dl>
      </div>
      <div className='flex justify-center align-center'>
        <button className='bg-indigo-700 w-20 h-12 text-white rounded m-10 hover:bg-indigo-900'>
          Edit
        </button>
      </div>
    </div>
  );
}

export default Profile;
