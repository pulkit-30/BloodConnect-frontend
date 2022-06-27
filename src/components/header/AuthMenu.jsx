import React from 'react';
import { Link } from 'react-router-dom';
import Classes from './Navbar.module.css';
function AuthMenu(props) {
  return (
    <div className={Classes.AuthMenu} style={props.style}>
      <Link to='/auth/register'>
        <button className='rounded text-white hover:bg-indigo-600 ml-4 bg-indigo-500 h-10 w-20'>
          Register
        </button>
      </Link>
      <Link to='/auth/login'>
        <button className='rounded text-white hover:bg-indigo-600 ml-4 w-20 h-10 border-solid border-2 border-indigo-600'>
          Log In
        </button>
      </Link>
    </div>
  );
}

export default AuthMenu;
