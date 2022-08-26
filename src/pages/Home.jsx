// ======================================
// EXTERNAL
// ======================================
import Stack from 'react-bootstrap/Stack';

// ======================================
// INTERNAL
// ======================================

const Home = () => {
  return (
    <>
      <Stack
        className='app__home flex-column justify-content-start align-items-start mt-4'
        direction='horizontal'
        gap={2}
      >
        <h2>Invoicing for customer billing</h2>
        <p>
          For my own peace of mind, I wanted to create a little app that
          illustrated my ability to calculate customer invoices.
        </p>

        <h3>Invoice UX/UI</h3>

        <p>
          In terms of user interaction with the app, I created a form with three
          inputs.
        </p>

        <ul>
          <li>Enter client id</li>
          <li>Select user type</li>
          <li>Select the invoice month</li>
        </ul>

        <h3>Form Validation</h3>
        <p>
          Form validation is always a top priority as it is a critical part of
          understanding what the user is trying to do.
        </p>

        <ul>
          <li>Formik</li>
          <li>Yup</li>
        </ul>

        <h3>Question Overview</h3>
        <h4>Background</h4>
        <p>
          In the past, we provided some raw billing data in JSON format to the
          finance team, which they used to manually generate monthly invoices
          for our customers. Recently, they’ve asked us to create some
          automation to make this process less error-prone.
        </p>

        <h4>Instructions</h4>
        <ol>
          <li>Calculate a daily rate for the active subscription tier</li>
          <li>
            For each day of the month, identify which users were active that day
          </li>
          <li>
            Multiply the number of active users for the day by the daily rate to
            calculate the total for the day
          </li>
          <li>
            Return the running total for the month at the end, rounded to 2
            decimal places
          </li>
        </ol>

        <h4>Testing</h4>
        <p>
          The automated tests we provide only cover a few key cases, so you
          should plan to add some of your own tests or modify the existing ones
          to ensure that your solution handles any edge cases.
          <br />
          <br />
          You should be able to follow the existing patterns for naming and
          constructing tests to add your own.
        </p>

        <h4>Notes / Edge cases</h4>
        <ul>
          <li>
            It’s more important for the return value to be correct than it is
            for the algorithm to be highly optimized.
          </li>
          <li>
            You can store intermediate results as any kind of decimal type (e.g.
            float, double). You do not need to round values until the last step.
          </li>
          <li>
            You should bill for all days between and including both the
            activation and deactivation dates since the user still had some
            access on the last day.
          </li>
          <li>
            You should not change function names or return types of the provided
            functions since our test cases depend on those not changing.
          </li>
        </ul>
      </Stack>
      <hr />
    </>
  );
};

export default Home;
