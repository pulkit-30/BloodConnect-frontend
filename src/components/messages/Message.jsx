/* This example requires Tailwind CSS v2.0+ */
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline';
import { useContext } from 'react';
import MessageContext from '../../context/Messages/MessageContext';

export default function Message() {
  const Message = useContext(MessageContext);
  Message.isMessage &&
    setTimeout(() => {
      Message.ClearMessage();
    }, 5000);
  return (
    <div className='bg-indigo-600'>
      <div className='max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between flex-wrap'>
          <div className='w-0 flex-1 flex items-center'>
            <span className='flex p-2 rounded-lg bg-indigo-800'>
              <SpeakerphoneIcon
                className='h-6 w-6 text-white'
                aria-hidden='true'
              />
            </span>
            <p className='ml-3 font-medium text-white truncate'>
              <span className='md:hidden'>{Message.Message}</span>
              <span className='hidden md:inline'>{Message.Message}</span>
            </p>
          </div>

          <div
            className='order-2 flex-shrink-0 sm:order-3 sm:ml-3'
            onClick={() => {
              Message.ClearMessage();
            }}
          >
            <button
              type='button'
              className='-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2'
            >
              <span className='sr-only'>Dismiss</span>
              <XIcon className='h-6 w-6 text-white' aria-hidden='true' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
