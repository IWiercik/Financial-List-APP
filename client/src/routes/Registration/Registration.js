import RegisterFormInput from 'components/atoms/RegisterFormInput/RegisterFormInput';
import { Title } from 'components/atoms/Title/Title.style';
import { FormContainer } from 'components/organisms/Form(styled)/Form.style';
import { useReducer } from 'react';
import { formReducer } from 'reducers/formReducer';
import { AuthButton } from 'components/organisms/Form(styled)/Form.style';
function Registration() {
  const initialState = {
    login: {
      value: '',
      errorMessage: '',
      isValid: 'initial',
    },
    password: {
      value: '',
      errorMessage: '',
      isValid: 'initial',
    },
  };
  const [formAttributes, dispatch] = useReducer(formReducer, initialState);
  const submitHandler = (e) => {
    const { login, password } = formAttributes;
    e.preventDefault();
    console.log(login.isValid, password.isValid);
  };
  return (
    <FormContainer onSubmit={submitHandler}>
      <Title>{`Register Form`}</Title>
      <RegisterFormInput
        type="text"
        name="login"
        placeholder="Your-email"
        inputAttributes={formAttributes.login}
        updateAttributes={dispatch}
      />
      <RegisterFormInput
        type="password"
        name="password"
        placeholder="Password"
        inputAttributes={formAttributes.password}
        updateAttributes={dispatch}
      />
      <AuthButton>Register </AuthButton>
    </FormContainer>
  );
}

export default Registration;
