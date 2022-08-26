// ======================================
// EXTERNAL
// ======================================
import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// ======================================
// INTERNAL
// ======================================
import FormLabel from '../FormItems/FormLabel';
import FormError from './FormError';
import FormControl from '../FormItems/FormControl';

const FormDatePickerMonth = (props) => {
  const { controlId, label, type, name, ...rest } = props;

  return (
    <Field name={name}>
      {({ field, meta }) => {
        return (
          <Row className='mb-3'>
            <Form.Group as={Col} md='4' className='mb-3 w-100' controlId={name}>
              <FormLabel label={label} />
              <FormControl
                type={type}
                isInvalid={meta.touched && meta.error}
                {...field}
                {...rest}
              />
              <FormError name={name} />
            </Form.Group>
          </Row>
        );
      }}
    </Field>
  );
};

FormDatePickerMonth.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FormDatePickerMonth;
