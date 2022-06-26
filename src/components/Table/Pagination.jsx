import React from 'react';

function Pagination(props) {
  return (
    <div className='flex justify-center align-center mt-10 w-full'>
      <button
        className='bg-indigo-800 text-white w-20 rounded-md h-10'
        disabled={!props.canPreviousPage}
        onClick={() => props.previousPage()}
      >
        Prev{' '}
      </button>
      <span className='mt-2 mr-10 ml-10'>
        Page{' '}
        <strong>
          {props.pageIndex + 1} of {props.pageOptions.length}
        </strong>{' '}
      </span>
      <button
        className='bg-indigo-800 text-white w-20 rounded-md h-10'
        disabled={!props.canNextPage}
        onClick={() => props.nextPage()}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
