import { LockClosedIcon } from '@heroicons/react/solid';
import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputBox from './InputBox';
import { route } from '../../api';
import UserContext from '../../context/user/UserContext';
import MessageContext from '../../context/Messages/MessageContext';
import Loader from '../loader/Loader';
import list from './list.json';
import ModalContext from '../../context/Modal/ModalContext';

export default function Form(props) {
  const Modal = useContext(ModalContext);
  const Auth = useContext(UserContext);
  const Message = useContext(MessageContext);
  const navigate = useNavigate();
  useEffect(() => {
    Auth.User && navigate('/');
    // eslint-disable-next-line
  }, [Auth.User]);

  const [loading, setLoading] = useState(false);
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const college = useRef();
  const state = useRef();
  const city = useRef();
  // const [selected, setSelected] = useState(props.list[0]);
  const [bloodGroup, setbloodGroup] = useState(list.bg[0]);
  const [Course, setCourse] = useState(list.course[0]);
  const [Branch, setBranch] = useState(list.branch[0]);
  const [permanentLocation, setLocation] = useState(null);

  const getGeoLocation = (permissions) => {
    if (permissions.state === 'denied') {
      Modal.setOpen(
        'Permission',
        'Please enable your location permission to get Registered with us!!',
        'Enabled',
        checkLocationAccess
      );
    }
    setLoading(true);
    navigator.geolocation.getCurrentPosition((location) => {
      const userLocation = {
        accuracy: location.coords.accuracy,
        altitude: location.coords.altitude,
        altitudeAccuracy: location.coords.altitudeAccuracy,
        heading: location.coords.heading,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        speed: location.coords.speed,
      };
      setLoading(false);
      location && setLocation(userLocation);
    });
  };

  const checkLocationAccess = () => {
    navigator.permissions.query({ name: 'geolocation' }).then(getGeoLocation);
  };
  useEffect(() => {
    if (props.isRegister) {
      checkLocationAccess();
    }
    // eslint-disable-next-line
  }, []);

  const HandelSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    if (
      props.isRegister &&
      (bloodGroup.name === 'Blood Group' ||
        Course.name === 'Course' ||
        Branch.name === 'Branch')
    ) {
      Message.ThrowMessage('Please Enter required Information!!');
      setLoading(false);
      return;
    }
    var target = '';
    target = props.isRegister ? route.SignUp : target;
    target = props.isLogin ? route.SignIn : target;
    let data = props.isLogin
      ? {
          email: email.current.value,
          password: password.current.value,
        }
      : {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
          bloodGroup: bloodGroup.alt,
          course: Course.name,
          branch: Branch.name,
          admissionNumber: 'N.A',
          phoneNumber: 'N.A',
          college: college.current.value,
          city: city.current.value,
          state: state.current.value,
          permanentLocation: permanentLocation,
          currentLocation: permanentLocation,
          LastLocation: permanentLocation,
        };
    axios
      .post(target, data)
      .then((res) => {
        props.isLogin && Auth.LogIn(res.data.data);
        var message = '';
        message = props.isLogin ? 'Successfully Logged In!!' : message;
        message = props.isRegister ? res.data.message : message;
        Message.ThrowMessage(message);
        props.isRegister && navigate('/auth/login');
        setLoading(false);
      })
      .catch((err) => {
        Message.ThrowMessage(err.message);
        setLoading(false);
      });
  };
  return (
    <React.Fragment>
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <img
              loading='lazy'
              className='mx-auto h-12 w-auto'
              src='https://user-images.githubusercontent.com/76155456/175778463-76d8e14d-675e-44fd-8ad4-a3ae18bdceca.png'
              alt='Workflow'
            />
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              {props.isLogin && 'Sign in to your account'}
              {props.isRegister && 'Register your account'}
              {props.isEdit && 'Edit your account'}
            </h2>
          </div>
          <form className='mt-8 space-y-6' onSubmit={HandelSubmit}>
            <input type='hidden' name='remember' defaultValue='true' />

            <InputBox
              isLogin={props.isLogin}
              isRegister={props.isRegister}
              isEdit={props.isEdit}
              username={username}
              email={email}
              password={password}
              college={college}
              city={city}
              state={state}
              bloodGroup={bloodGroup}
              setbloodGroup={setbloodGroup}
              Branch={Branch}
              setCourse={setCourse}
              Course={Course}
              setBranch={setBranch}
            />

            {props.isLogin && (
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <input
                    id='remember-me'
                    name='remember-me'
                    type='checkbox'
                    className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                  />
                  <label
                    htmlFor='remember-me'
                    className='ml-2 block text-sm text-gray-900'
                  >
                    Remember me
                  </label>
                </div>

                <div className='text-sm'>
                  <Link
                    to='#'
                    className='font-medium text-indigo-600 hover:text-indigo-500'
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
            )}
            {props.isRegister && (
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <input
                    id='remember-me'
                    name='remember-me'
                    type='checkbox'
                    className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                    required
                  />
                  <label
                    htmlFor='remember-me'
                    className='ml-2 block text-sm text-gray-900'
                  >
                    Yes I am 18+
                  </label>
                </div>
              </div>
            )}

            <div>
              {!loading && (
                <button
                  type='submit'
                  className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                    <LockClosedIcon
                      className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                      aria-hidden='true'
                    />
                  </span>
                  {props.isLogin && 'Login'}
                  {props.isRegister && 'Register'}
                  {props.isEdit && 'Save'}
                </button>
              )}
              {loading && <Loader />}
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
