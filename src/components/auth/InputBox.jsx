import React from 'react';
import Dropdown from '../ui/Dropdown';
import list from './list.json';

function Input(props) {
  return (
    <div className='rounded-md shadow-sm -space-y-px'>
      <div>
        <label htmlFor='email-address' className='sr-only'>
          Email address
        </label>
        <input
          id='email-address'
          name='email'
          type='email'
          autoComplete='email'
          required
          className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
          placeholder='Email address'
          ref={props.email}
        />
      </div>
      {props.isRegister && (
        <React.Fragment>
          <div>
            <label htmlFor='name' className='sr-only'>
              Name
            </label>
            <input
              id='name'
              name='name'
              type='text'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='Name'
              ref={props.username}
            />
          </div>
          <div>
            <label htmlFor='country' className='sr-only'></label>
            <input
              id='country'
              name='country'
              type='text'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='Country'
              // ref={}
            />
          </div>
          <div>
            <label htmlFor='state' className='sr-only'></label>
            <input
              id='state'
              name='state'
              type='text'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='State'
              ref={props.state}
            />
          </div>
          <div>
            <label htmlFor='city' className='sr-only'></label>
            <input
              id='city'
              name='city'
              type='text'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='City'
              ref={props.city}
            />
          </div>
          <Dropdown
            list={list.bg}
            selected={props.bloodGroup}
            setSelected={props.setbloodGroup}
          />

          <Dropdown
            list={list.course}
            selected={props.Course}
            setSelected={props.setCourse}
          />
          <Dropdown
            list={list.branch}
            selected={props.Branch}
            setSelected={props.setBranch}
          />
          <div>
            <label htmlFor='college' className='sr-only'></label>
            <input
              id='college'
              name='college'
              type='text'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='College'
              ref={props.college}
            />
          </div>
        </React.Fragment>
      )}
      <div>
        <label htmlFor='password' className='sr-only'>
          Password
        </label>
        <input
          id='password'
          name='password'
          type='password'
          autoComplete='current-password'
          required
          className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
          placeholder='Password'
          ref={props.password}
        />
      </div>
    </div>
  );
}

export default Input;
