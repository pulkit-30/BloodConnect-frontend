import React from 'react';
const ModalContext = React.createContext({
  open: false,
  cancelButtonRef: null,
  setOpen: (title, message, button, cb) => {},
  cb: () => {},
  title: '',
  message: '',
  button: '',
});
export default ModalContext;
