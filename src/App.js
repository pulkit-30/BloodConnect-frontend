import './App.css';
import {
  // eslint-disable-next-line
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import Auth from './Pages/Auth';
import Availability from './Pages/Availability';
import Home from './Pages/Home';
import React, { useContext, useEffect } from 'react';
import MessageContext from './context/Messages/MessageContext';
import Message from './components/messages/Message';
import Modal from './components/messages/Modal';
import Profile from './Pages/Profile';
import Learn from './Pages/Learn';
import { CheckSession } from './utils/session';
import UserContext from './context/user/UserContext';

function App() {
  const MessageCtx = useContext(MessageContext);
  const AuthCtx = useContext(UserContext);
  useEffect(() => {
    const Subscribe = async () => {
      console.log('Checking session!!');
      //check for user available
      // if invalid User --  or user data deleted
      // call LogOut function and Display session expired message
      const res = await CheckSession(AuthCtx.User.email).catch((err) => {
        MessageCtx.ThrowMessage('Session Expired!!');
        AuthCtx.LogOut();
      });
      if (res.data.status === 'Success') {
        AuthCtx.LogIn(res.data?.data);
      }
    };
    AuthCtx.User && Subscribe();
    // eslint-disable-next-line
  }, []);
  return (
    <BrowserRouter>
      <React.Fragment>
        {MessageCtx.isMessage && (
          <Message Message={MessageCtx.Message} isError={MessageCtx.isError} />
        )}
        <Navbar />
        <Modal />
        <main className='min-h-screen'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/learn' element={<Learn />} />
            <Route path='/availability' element={<Availability />} />
            <Route path='/auth/:type' element={<Auth />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
