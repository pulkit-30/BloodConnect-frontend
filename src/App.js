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
import { useContext } from 'react';
import MessageContext from './context/Messages/MessageContext';
import Message from './components/messages/Message';
import Modal from './components/messages/Modal';
import Profile from './Pages/Profile';

function App() {
  const MessageCtx = useContext(MessageContext);
  return (
    <BrowserRouter>
      {MessageCtx.isMessage && (
        <Message Message={MessageCtx.Message} isError={MessageCtx.isError} />
      )}
      <Navbar />
      <Modal />
      <main className='min-h-screen'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/availability' element={<Availability />} />
          <Route path='/auth/:type' element={<Auth />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
