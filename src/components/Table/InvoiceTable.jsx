import React from 'react';
import { getTableDate } from '../../helpers/helpers';

const InvoiceTable = (props) => {
  const { tableData, totalRevenue, invoiceDate } = props;

  return (
    <>
      <div>Invoice Date: {invoiceDate}</div>
      <div>Total: ${totalRevenue}</div>
      <table className='table table-hover mt-3'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Number Users</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 &&
            tableData.map((client) => {
              return (
                <tr key={client.day}>
                  <td>{getTableDate(client.day)}</td>
                  <td>{client.usersArray.length}</td>
                  <td>${client.totalDailyReturn.toFixed(2)}</td>
                  <td></td>
                </tr>
              );
            })}
          <tr>
            <td
              style={{
                fontWeight: 'bold',
              }}
            >
              Total
            </td>
            <td></td>
            <td
              style={{
                fontWeight: 'bold',
              }}
            >
              ${totalRevenue}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default InvoiceTable;
