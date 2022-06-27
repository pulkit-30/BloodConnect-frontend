import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MessageProvider from './context/Messages/MessageProvider';
import UserProvider from './context/user/UserProvider';
import ModalProvider from './context/Modal/ModalProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalProvider>
      <MessageProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </MessageProvider>
    </ModalProvider>
  </React.StrictMode>
);
