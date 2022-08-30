import Form from 'components/organisms/Form/Form';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
function Registration() {
  const initialState = { login: '', password: '' };
  let initialValidationState = {
    errors: { login: '', password: '' },
    isValid: { login: 'initial', password: 'initial' },
  };
  const [formValues, setFormValues] = useState(initialState);
  const [formValidation, setFormValidation] = useState(initialValidationState);
  const didMount = useRef(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValidation(validateForm(formValues));
  };
  const validateForm = (values) => {
    console.log(values);
    const errors = {};
    const isValid = {
      login: Boolean,
      password: Boolean,
    };
    const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!values.login) {
      errors.login = 'Email is required!';
      isValid.login = false;
    } else if (!values.login.match(regex) || values.login.length > 256) {
      errors.login = 'This is not a valid email format!';
      isValid.login = false;
    }
    if (!values.password) {
      errors.password = 'Password is required!';
      isValid.password = false;
    } else if (values.password.length < 8) {
      errors.password = 'Password must be more than 8 chars!';
      isValid.password = false;
    } else if (values.password.length > 24) {
      errors.password = 'Password cannot exceed more than 24 chars!';
      isValid.password = false;
    }
    return { errors, isValid };
  };
  //Clearing errors when retyping email/password
  useEffect(() => {
    if (didMount.current) {
      // if (formValidation.isValid.login && formValidation.isValid.password) {
      //   // If everything is correct we pass data to backend
      //   axios.post('http://localhost:5000/Registration', { formValues }).then((response) => {
      //     console.log('[Axios Reuslt]', response);
      //     alert('Axios Working!');
      //   });
      // }
      // console.log(formValidation.isValid.login === true);
      console.log(formValidation.isValid.login);
    }
    return () => {
      didMount.current = true;
    };
  }, [formValidation]);
  return (
    <Form
      title={'Registration'}
      value={formValues}
      updateValuesMethod={setFormValues}
      handleSubmit={handleSubmit}
      formValidation={formValidation}
      cleaningValidationErrors={setFormValidation}
    ></Form>
  );
}

export default Registration;
