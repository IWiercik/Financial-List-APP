import { Title } from 'components/atoms/Title/Title.style';
import PasswordIcon from 'assets/images/icons/lock.svg';
import EmailIcon from 'assets/images/icons/mail.svg';
import { FormContainer, FormInput, FormRow, AuthButton } from './Form.style';
import { Icon } from 'components/atoms/Icon/Icon.style';
function Form({
  title,
  value: formValues,
  updateValuesMethod,
  handleSubmit,
  formValidation,
  cleaningValidationErrors,
}) {
  const inputChangeHandler = (e) => {
    //Cleaning errors when retyping email/password
    cleaningValidationErrors({
      errors: { login: '', password: '' },
      isValid: { login: '', password: '' },
    });
    updateValuesMethod({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>{`${title} Form`}</Title>
      <FormRow isValid={formValidation.isValid.login}>
        <Icon src={EmailIcon}></Icon>
        <FormInput
          type="text"
          name="login"
          placeholder="Your-email"
          value={formValues.login}
          onInput={inputChangeHandler}
          // required="true"
          // maxLength={24}
          // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        ></FormInput>
        {formValidation.errors.login && <p className="form-error">{formValidation.errors.login}</p>}
      </FormRow>
      <FormRow isValid={formValidation.isValid.password}>
        <Icon src={PasswordIcon}></Icon>
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          value={formValues.password}
          onInput={inputChangeHandler}
          // required="true"
          // minLength={8}
          // maxLength={16}
        ></FormInput>
        {formValidation.errors.password && <p className="form-error">{formValidation.errors.password}</p>}
      </FormRow>
      {title === 'Login' && <p className="forgot-password">Forgot Password ?</p>}
      <AuthButton type="submit">{title === 'Login' ? 'Login' : 'Register'}</AuthButton>
    </FormContainer>
  );
}

export default Form;
