import React, { useReducer } from 'react';
import ModalContext from './ModalContext';
const defaultState = {
  open: false,
  cancelButtonRef: null,
  title: '',
  message: '',
  button: '',
};
const HandelAction = (state, action) => {
  if (action.type === 'Open') {
    return {
      open: true,
      cb: action.cb,
      title: action.title,
      message: action.message,
      button: action.button,
    };
  }
  return defaultState;
};
function ModalProvider(props) {
  const [state, dispatch] = useReducer(HandelAction, defaultState);

  const setOpen = (title, message, button, cb) => {
    dispatch({
      type: state.open ? 'Close' : 'Open',
      cb,
      title,
      message,
      button,
    });
  };

  const StateValue = {
    open: state.open,
    cancelButtonRef: state.cancelButtonRef,
    setOpen: setOpen,
    cb: state.cb,
    title: state.title,
    message: state.message,
    button: state.button,
  };
  return (
    <ModalContext.Provider value={StateValue}>
      {props.children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
