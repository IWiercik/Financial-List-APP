import { useState } from 'react';
import { FormContainer } from 'components/organisms/Form(styled)/Form.style';
import { Title } from 'components/atoms/Title/Title.style';
import LoginFormInput from 'components/atoms/LoginFormInput/LoginFormInput';
import { AuthButton } from 'components/organisms/Form(styled)/Form.style';
function Login() {
  const initialState = { login: '', password: '' };
  const [loginFormValues, setLoginFormValues] = useState(initialState);
  const submitHandler = () => {};
  return (
    <FormContainer onSubmit={submitHandler}>
      <Title>Login Form</Title>
      <LoginFormInput
        type="text"
        name="login"
        placeholder="Your-email"
        value={loginFormValues}
        updateValue={setLoginFormValues}
      />
      <LoginFormInput
        type="password"
        name="password"
        placeholder="Password"
        value={loginFormValues}
        updateValue={setLoginFormValues}
      />
      <p className="forgot-password">Forgot Password ?</p>
      <AuthButton>Login</AuthButton>
    </FormContainer>
  );
}

export default Login;
