import Form from 'components/organisms/Form/Form';
import { useState } from 'react';
import axios from 'axios';
function Login() {
  const initialState = { login: '', password: '' };
  const [loginFormValues, setLoginFormValues] = useState(initialState);
  const loginFormSubmitted = (e) => {
    axios.post('http://localhost:5000/Login', { loginFormValues }).then((response) => {
      console.log('[Axios Result]', response);
      alert('Axios Working!');
    });
    e.preventDefault();
  };
  return (
    <Form
      title={'Login'}
      value={loginFormValues}
      updateValuesMethod={setLoginFormValues}
      formSubmitted={loginFormSubmitted}
    ></Form>
  );
}

export default Login;
