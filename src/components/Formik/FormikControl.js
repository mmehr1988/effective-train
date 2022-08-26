import FormInput from '../Forms/FormComponents/FormInput';
import FormSelect from '../Forms/FormComponents/FormSelect';
import FormDatePickerMonth from '../Forms/FormComponents/FormDatePickerMonth';

function FormikControl(props) {
  const { control, ...rest } = props;

  switch (control) {
    case 'input':
      return <FormInput {...rest} />;

    case 'select':
      return <FormSelect {...rest} />;
    case 'dateMonth':
      return <FormDatePickerMonth {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
