import React, { useContext } from 'react';
import MessageContext from '../../context/Messages/MessageContext';
import UserContext from '../../context/user/UserContext';
import { SendMail } from '../../utils/sendMessage';
import Pagination from './Pagination';
import SearchDonor from './SearchDonor';

import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from 'react-table';

function TableContent(props) {
  const Auth = useContext(UserContext);
  const Message = useContext(MessageContext);
  const { 
    headerGroups, 
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    setGlobalFilter,
  
  } = useTable(
    {
      columns: props.dummyColumn,
      data: props.data,
      initialState: { pageSize: 5 },
    },

    useGlobalFilter,
    useSortBy,
    usePagination
  );
  // eslint-disable-next-line
  const {pageIndex, globalFilter} = state;

  return (
    <div>
      <div style={{textAlign:'center', padding:'10px'}}><SearchDonor filter={globalFilter} setFilter={setGlobalFilter}/></div>
      <div className='tableDiv'>
      <table {...props.getTableProps()}>
      <thead>
        {
          // eslint-disable-next-line
          headerGroups?.map((headerGroup, index) => (
            <React.Fragment key={index}>
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // eslint-disable-next-line
                  headerGroup.headers?.map((column, index) => {
                    if (Auth.User) {
                      return (
                        <th
                          className='bg-indigo-700 text-white border'
                          key={index}
                          {...column.getHeaderProps(
                            column.getSortByToggleProps({
                              title: undefined,
                            })
                          )}
                        >
                          {column.render('Header')}
                          <span>
                            {column.isSorted
                              ? column.isSortedDesc
                                ? ' ▼'
                                : ' ▲'
                              : ''}
                          </span>
                        </th>
                      );
                    } else {
                      if (
                        column.Header !== 'Seek Help' &&
                        column.Header !== 'Email' &&
                        column.Header !== 'Admission No'
                      ) {
                        return (
                          <th
                            className='bg-indigo-700 text-white border'
                            key={index}
                            {...column.getHeaderProps(
                              column.getSortByToggleProps({
                                title: undefined,
                              })
                            )}
                          >
                            {column.render('Header')}
                            <span>
                              {column.isSorted
                                ? column.isSortedDesc
                                  ? ' ▼'
                                  : ' ▲'
                                : ''}
                            </span>
                          </th>
                        );
                      }
                    }
                  })
                }
              </tr>
            </React.Fragment>
          ))
        }
      </thead>
      <tbody {...props.getTableBodyProps()}>
        {
          // eslint-disable-next-line
          page?.map((row, index) => {
            if (row.original.email !== Auth.User?.email) {
              props.prepareRow(row);
              return (
                <React.Fragment key={index}>
                  <tr {...row.getRowProps()}>
                    {
                      // eslint-disable-next-line
                      row.cells?.map((cell, index) => {
                        if (Auth.User) {
                          return (
                            cell.value && (
                              <td {...cell.getCellProps()} key={index}>
                                {cell.render('Cell')}
                              </td>
                            )
                          );
                        } else {
                          if (
                            cell.column.id !== 'undefined' &&
                            cell.column.id !== 'email' &&
                            cell.column.id !== 'admissionNumber'
                          ) {
                            return (
                              cell.value && (
                                <td {...cell.getCellProps()} key={index}>
                                  {cell.render('Cell')}
                                </td>
                              )
                            );
                          }
                        }
                      })
                    }
                    {Auth.User && (
                      <td>
                        <button
                          className='bg-gray-200 p-1 hover:bg-gray-300 w-32 rounded'
                          variant='outline-success'
                          onClick={() => {
                            SendMail({
                              from: Auth.User,
                              Message: `There is urgent need of blood from ${Auth.User.username}`,
                              to: row.original,
                            })
                              .then(() => {
                                Message.ThrowMessage(
                                  'Message Sent Successfully!!'
                                );
                              })
                              .catch(() => {
                                Message.ThrowMessage('Something went wrong !!');
                              });
                          }}
                        >
                          Seek Help
                        </button>
                      </td>
                    )}
                  </tr>
                </React.Fragment>
              );
            }
          })
        }
      </tbody>
    </table>
    </div>
    <Pagination
            pageIndex={pageIndex}
            canPreviousPage={canPreviousPage}
            previousPage={previousPage}
            pageOptions={pageOptions}
            canNextPage={canNextPage}
            nextPage={nextPage}
          />
    </div>
  );
}

export default TableContent;
