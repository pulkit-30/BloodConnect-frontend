import React from 'react';
import { useLocation } from 'react-router-dom';
import Form from '../components/auth/Form';
function Auth() {
  const location = useLocation();
  return (
    <div>
      <Form
        isLogin={location.pathname.includes('login')}
        isRegister={location.pathname.includes('register')}
        isEdit={location.pathname.includes('/profile/edit')}
      />
    </div>
  );
}

export default Auth;
