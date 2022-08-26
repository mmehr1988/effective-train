import React, { useEffect, useState } from 'react';
import InvoiceForm from '../components/Forms/InvoiceForm';

import { getTotalDays } from '../helpers/helpers';

import UserControl from '../components/userControl';
import InvoiceTable from '../components/Table/InvoiceTable';

const monthlyPriceInDollars = 4;
let dailyPrice = (days) => monthlyPriceInDollars / days;

const InvoicePage = () => {
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [invoiceDate, setInvoiceDate] = useState('');
  const [tableData, setTableData] = useState([]);

  const onSubmit = (values) => {
    const currentUsers = UserControl(values.user);
    const customerId = values.clientId;

    setInvoiceDate(values.invoiceDate);

    // Takes in the date selected
    // Input: 2022-6
    // Output: Tue May 31 2022 20:00:00 GMT-0400 (Eastern Daylight Time)
    // Per the output, the date is the last day of the prev month
    let date = new Date(values.invoiceDate);
    let year = values.invoiceDate.split('-')[0];
    let month = values.invoiceDate.split('-')[1];

    // New function that takes in the date and provides the number of days in that month
    let totalDays = getTotalDays(date);

    // Calcing the daily rate
    let dailyRate = dailyPrice(totalDays);

    // empty array to hold the data for the day
    let dayArray = [];

    // looping through the days in the month starting from i = 1
    for (let i = 1; i <= totalDays; i++) {
      // creating a new Date object for each day in the month
      const day = new Date(year, month - 1, i);

      // empty array to hold the data for each user
      let usersArray = [];

      // looping through the users in the day
      currentUsers.forEach((user) => {
        let userActivatedOn = user.activatedOn;
        let userDeactivatedOn = user.deactivatedOn;
        let userCustomerId = user.customerId;

        // Performing the check to see if the user is active on the day

        if (userCustomerId === parseInt(customerId)) {
          if (
            (userDeactivatedOn === null && userActivatedOn <= day) ||
            (userDeactivatedOn >= day && userActivatedOn <= day)
          ) {
            // If user is active, push the user to the usersArray
            usersArray.push({
              id: user.id,
              name: user.name,
              date: day,
            });
          }
        }
      });

      // using push to update the dayArray
      dayArray.push({
        day: day,
        usersArray: usersArray,
        totalDailyReturn: usersArray.length * dailyRate,
      });
    }

    // finally, setting the tableData with the dayArray
    setTableData(dayArray);
  };

  useEffect(() => {
    if (tableData.length > 0) {
      setTotalRevenue(
        tableData
          .reduce((accumulator, object) => {
            return accumulator + object.totalDailyReturn;
          }, 0)
          .toFixed(2)
      );
    }
  }, [tableData]);

  return (
    <div className='app__invoice-page d-flex flex-column align-items-start'>
      <h1 className='h4 pb-2 mb-4 mt-4 border-bottom w-100'>Invoice Page</h1>

      <div className='d-flex w-100 gap-5 align-items-start flex-wrap flex-md-nowrap'>
        <div className='d-flex flex-column gap-4'>
          <InvoiceForm onSubmit={onSubmit} />
        </div>

        <div className='d-flex flex-column gap-2 w-100'>
          <InvoiceTable
            tableData={tableData}
            totalRevenue={totalRevenue}
            invoiceDate={invoiceDate}
          />
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
