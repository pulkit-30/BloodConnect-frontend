import React, { useContext } from 'react';
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from 'react-table';
import UserContext from '../../context/user/UserContext';
import MessageContext from '../../context/Messages/MessageContext';
import TableContent from './TableContent';

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
  // eslint-disable-next-line
  const Message = useContext(MessageContext);
  if (!Auth.User) {
  }

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    state,
    // eslint-disable-next-line
    setGlobalFilter,
  } = useTable(
    {
      columns: dummyColumn,
      data: data,
      initialState: { pageSize: 5 },
    },

    useGlobalFilter,
    useSortBy,
    usePagination
  );
  // eslint-disable-next-line
  const { globalFilter, pageIndex } = state;

  return (
    <div className='w-11/12 m-auto'>
      <h1 className='m-10 flex justify-center align-center text-3xl font-extrabold tracking-tight text-indigo-700 sm:text-4xl'>
        Blood Availabilty
      </h1>
      {data.length === 0 && (
        <h1 className='m-10 flex justify-center align-center text-3xl font-extrabold tracking-tight text-green-700 sm:text-2xl'>
          No Data Found!!
        </h1>
      )}
      {data.length !== 0 && (
        <React.Fragment>
          {Auth.User && (
            <button
              variant='secondary'
              onClick={() => {
                var newData = data;
                newData = newData.filter(
                  (user) => user.city === Auth.User.city
                );
                props.updateData(newData);
              }}
            >
              Nearby
            </button>
          )}
          {props.location.search && Auth.User && (
            <button
              variant='outline-success'
              onClick={() => {
                // data?.map(
                //   async (user) =>
                //     await SendMail({
                //       to: user,
                //       from: Auth.User,
                //       Message: `There is urgent need of blood from ${Auth.User.username}`,
                //     })
                // );
              }}
            >
              Seek Help From All
            </button>
          )}

          <TableContent
            getTableProps={getTableProps}
            getTableBodyProps={getTableBodyProps}
            prepareRow={prepareRow}
            dummyColumn={dummyColumn}
            data={data}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default Donors;
