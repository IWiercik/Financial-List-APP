import { FormRow } from 'components/organisms/Form(styled)/Form.style';
import email from 'assets/images/icons/mail.svg';
import password from 'assets/images/icons/lock.svg';
import { Icon } from '../Icon/Icon.style';
function LoginFormInput(props) {
  const { value, updateValue, ...inputProps } = props;
  const inputHandler = (e) => {
    updateValue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <FormRow>
      <Icon src={inputProps.name === 'login' ? email : password} />
      <input {...inputProps} onChange={inputHandler}></input>
    </FormRow>
  );
}

export default LoginFormInput;
