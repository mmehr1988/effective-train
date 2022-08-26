// ======================================
// EXTERNAL
// ======================================
import { Formik } from 'formik';
import * as Yup from 'yup';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// ======================================
// INTERNAL
// ======================================
import FormikControl from '../Formik/FormikControl';

const InvoiceForm = ({ onSubmit }) => {
  const selectUserType = [
    { key: 'Select user', value: '' },
    { key: 'New Users', value: 'userSignedUp' },
    { key: 'Current Users', value: 'constantUsers' },
    { key: 'No Users', value: 'noUsers' },
  ];

  const initialValues = {
    clientId: '',
    user: '',
    invoiceDate: '',
  };

  const validationSchema = Yup.object().shape({
    clientId: Yup.string().required('Required'),
    user: Yup.string().required('Required'),
    invoiceDate: Yup.date().required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form
            noValidate
            className='app__forms border rounded-4 p-4'
            onSubmit={formik.handleSubmit}
          >
            {/* SELECT CUSTOMER */}
            <FormikControl
              control='input'
              type='text'
              label='Client Id'
              name='clientId'
            />

            {/* SELECT USER TYPE */}
            <FormikControl
              control='select'
              label='User'
              name='user'
              options={selectUserType}
            />

            {/* DATEPICKER */}
            <FormikControl
              control='dateMonth'
              label='Invoice date'
              name='invoiceDate'
              type='month'
            />

            <Button variant='primary' type='submit' disabled={!formik.isValid}>
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default InvoiceForm;
