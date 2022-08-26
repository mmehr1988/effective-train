// ==========================================================================
// FIXED INPUTS
// ==========================================================================

const DAY_TO_MILLISECONDS = 1000 * 60 * 60 * 24;

// ==========================================================================
/**
  Takes a Date instance and returns a Date which is the first day
  of that month. For example:

  firstDayOfMonth(new Date(2019, 2, 7)) // => new Date(2019, 2, 1)

  Input type: Date
  Output type: Date
**/
export function firstDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

/**
    Takes a Date object and returns a Date which is the last day
    of that month. For example:
  
    lastDayOfMonth(new Date(2019, 2, 7)) // => new Date(2019, 2, 28)
  
    Input type: Date
    Output type: Date
  **/
export function lastDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

/**
    Takes a Date object and returns a Date which is the next day.
    For example:
  
    nextDay(new Date(2019, 2, 7))  // => new Date(2019, 2, 8)
    nextDay(new Date(2019, 2, 28)) // => new Date(2019, 3, 1)
  
    Input type: Date
    Output type: Date
  **/
export function nextDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
}

// Takes in a date and returns the number of days in that month.
export function getTotalDays(date) {
  // The date being passed in is the last day of the prev month. So we need to get the first day of the next month to use for the totalDays function
  let newDate = nextDay(date);
  let startDate = firstDayOfMonth(newDate);
  let lastDayTime = lastDayOfMonth(newDate);

  let start = startDate.getTime();
  let end = lastDayTime.getTime();
  let diff = end - start;

  return diff / DAY_TO_MILLISECONDS + 1;
}

// Takes in a date and converts it to the format YYYY-MM-DD
export const getTableDate = (date) => {
  let d = new Date(date);
  let month = (d.getMonth() + 1).toString();
  let day = d.getDate().toString();
  let year = d.getFullYear();

  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }

  return [year, month, day].join('-');
};
