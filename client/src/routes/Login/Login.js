import { useState } from 'react';
import { FormContainer, AuthButton } from 'components/organisms/Form(styled)/Form.style';
import { Title } from 'components/atoms/Title/Title.style';
import LoginFormInput from 'components/atoms/LoginFormInput/LoginFormInput';

import { setCredentials } from 'redux/auth/authSlice';
import { useLoginMutation } from 'redux/auth/authApiSlice';
import { useDispatch } from 'react-redux';

function Login() {
  const dispatch = useDispatch();
  const initialState = { login: '', password: '' };
  const [loginFormValues, setLoginFormValues] = useState(initialState);

  const [login, { isLoading }] = useLoginMutation();

  const submitHandler = async (e) => {
    const email = loginFormValues.login;
    const password = loginFormValues.password;
    e.preventDefault();
    if (email && password) {
      try {
        const { accessToken } = await login({ email, password }).unwrap();
        dispatch(setCredentials({ accessToken }));
      } catch (err) {
        console.log(err.data.message);
      }
    }
  };

  return (
    <FormContainer onSubmit={submitHandler}>
      <Title>Login Form</Title>
      <LoginFormInput
        type="text"
        name="login"
        placeholder="Your-email"
        value={loginFormValues}
        updateValue={setLoginFormValues}
        required={true}
      />
      <LoginFormInput
        type="password"
        name="password"
        placeholder="Password"
        value={loginFormValues}
        updateValue={setLoginFormValues}
        required={true}
      />
      <p className="forgot-password">Forgot Password ?</p>
      <AuthButton>Login</AuthButton>
    </FormContainer>
  );
}

export default Login;
