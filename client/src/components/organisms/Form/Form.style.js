import styled from 'styled-components';
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 450px;
  img {
    display: inline;
  }
  .forgot-password {
    transition: 0.5s all;
    cursor: pointer;
  }
  .forgot-password:hover {
    color: #1e81f2;
  }
  .form-error {
    font-size: 12px;
    text-align: left !important;
    color: red;
  }
`;
export const FormRow = styled.div`
  display: flex;
  padding-bottom: 10px;
  /* border-bottom: 1px solid #0092c8; */
  border-bottom: ${({ isValid }) => (isValid ? '1px solid #0092c8' : '1px solid red')};
  p {
    margin-top: 50px;
    position: absolute;
  }
`;
export const FormInput = styled.input`
  background: none;
  outline: none;
  border: none;
  &&::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;
export const AuthButton = styled.button`
  border: 1px solid #0092c8;
  border-radius: 15px;
  padding: 12px 20px;
  font-size: 16px;
  background: none;
  cursor: pointer;
  transition: 0.5s all;
  &&:hover {
    transform: scale(1.1);
  }
`;
