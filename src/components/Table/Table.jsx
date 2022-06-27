import React, { useContext } from 'react';
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from 'react-table';
import UserContext from '../../context/user/UserContext';
import TableContent from './TableContent';
import list from '../auth/list.json';
import BgMenu from './BgMenu';

const dummyColumn = [
  {
    Header: 'Name',
    accessor: 'username',
  },
  {
    Header: 'Blood Group',
    accessor: 'bloodGroup',
  },
  {
    Header: 'Course',
    accessor: 'course',
  },
  {
    Header: 'Branch',
    accessor: 'branch',
  },
  {
    Header: 'College',
    accessor: 'college',
  },
  {
    Header: 'City',
    accessor: 'city',
  },
  {
    Header: 'Seek Help',
  },
];
const Donors = (props) => {
  const data = props.data;
  const Auth = useContext(UserContext);
  if (!Auth.User) {
  }

  const { getTableProps, getTableBodyProps, prepareRow } = useTable(
    {
      columns: dummyColumn,
      data: data,
      initialState: { pageSize: 5 },
    },

    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <div className='w-11/12 m-auto'>
      <h1 className='m-10 flex justify-center align-center text-3xl font-extrabold tracking-tight text-indigo-700 sm:text-4xl'>
        Blood Availabilty
      </h1>
      <BgMenu list={list} />
      {!props.loading && (
        <React.Fragment>
          {data.length === 0 && (
            <h1 className='m-10 flex justify-center align-center text-3xl font-extrabold tracking-tight text-green-700 sm:text-2xl'>
              No Data Found!!
            </h1>
          )}
          {data.length !== 0 && (
            <TableContent
              getTableProps={getTableProps}
              getTableBodyProps={getTableBodyProps}
              prepareRow={prepareRow}
              dummyColumn={dummyColumn}
              data={data}
            />
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default Donors;
