import { FormRow } from 'components/organisms/Form(styled)/Form.style';
import { Icon } from '../Icon/Icon.style';
import email from 'assets/images/icons/mail.svg';
import password from 'assets/images/icons/lock.svg';
import React from 'react';
const RegisterFormInput = (props) => {
  const { inputAttributes, updateAttributes, ...inputProps } = props;
  const updateValue = (e) => {
    updateAttributes({
      type: 'UPDATE VALUE',
      field: e.target.name,
      payload: e.target.value,
    });
  };
  const validateInput = (e) => {
    const fieldName = e.target.name;
    const value = inputAttributes.value;
    let errorMessage = String;
    let isValid = Boolean;
    if (fieldName === 'login') {
      //Login Rules
      const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      switch (true) {
        case !value:
          errorMessage = 'Email is required!';
          isValid = false;
          break;
        case !value.match(regex) || value.length > 256:
          errorMessage = 'This is not a valid email format!';
          isValid = false;
          break;
        default:
          errorMessage = '';
          isValid = true;
      }
    } else {
      //Password Rules
      switch (true) {
        case !value:
          errorMessage = 'Password is required!';
          isValid = false;
          break;
        case value.length < 8:
          errorMessage = 'Password must be more than 8 characters!';
          isValid = false;
          break;
        case value.length > 24:
          errorMessage = 'Password cannot exceed more than 24 characters!';
          isValid = false;
          break;
        default:
          errorMessage = '';
          isValid = true;
      }
    }
    updateAttributes({
      type: 'VALIDATE FORM',
      field: fieldName,
      payload: { isValid: isValid, errorMessage: errorMessage },
    });
  };
  const hideValidation = (e) => {
    updateAttributes({
      type: 'HIDE VALIDATION',
      field: e.target.name,
      payload: 'waiting',
    });
  };
  return (
    <FormRow isValid={inputAttributes.isValid}>
      <Icon src={inputProps.name === 'login' ? email : password} />
      <input {...inputProps} onChange={updateValue} onBlur={validateInput} onFocus={hideValidation}></input>
      {inputAttributes.isValid ? false : <span>{inputAttributes.errorMessage}</span>}
    </FormRow>
  );
};
export default RegisterFormInput;
