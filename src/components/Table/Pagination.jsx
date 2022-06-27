import React from 'react';

function Pagination(props) {
  return (
    <div className='flex justify-center align-center w-full'>
      <button
        className='bg-indigo-700 text-white w-20 rounded-md h-10'
        disabled={!props.canPreviousPage}
        onClick={() => props.previousPage()}
      >
        Prev{' '}
      </button>
      <span className='mt-2 mr-2 ml-2'>
        Page{' '}
        <strong>
          {props.pageIndex + 1} of {props.pageOptions.length}
        </strong>{' '}
      </span>
      <button
        className='bg-indigo-700 text-white w-20 rounded-md h-10'
        disabled={!props.canNextPage}
        onClick={() => props.nextPage()}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
