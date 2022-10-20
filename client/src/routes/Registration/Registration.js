import axios from 'axios';
import RegisterFormInput from 'components/atoms/RegisterFormInput/RegisterFormInput';
import { Title } from 'components/atoms/Title/Title.style';
import { FormContainer, AuthButton } from 'components/organisms/Form(styled)/Form.style';
import { useReducer } from 'react';
import { formReducer } from 'reducers/formReducer';
import { useAddNewUserMutation } from 'redux/users/usersApiSlice';
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
  const [addNewUser, { isLoading, isSuccess, isError, error }] = useAddNewUserMutation();
  const submitHandler = async (e) => {
    e.preventDefault();
    const { login, password } = formAttributes;
    // console.log(login.value,password.value);
    if (login.isValid && password.isValid) {
      const email = login.value;
      const pswd = password.value;
      await addNewUser({ email, pswd }).then((result) => console.log(result.data.message));
    }
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
