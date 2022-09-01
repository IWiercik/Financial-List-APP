import styled from 'styled-components';
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 450px;
  .forgot-password {
    transition: 0.5s all;
    opacity: 0.7;
    max-height: 5px;
    cursor: pointer;
  }
  .forgot-password:hover {
    color: #1e81f2;
  }
`;
export const FormRow = styled.div`
  display: flex;
  padding-bottom: 10px;
  max-width: 170px;
  position: relative;
  border-bottom: ${({ isValid }) => {
    let color;
    if (isValid === undefined) {
      color = '1px solid #0092c8';
    } else if (isValid === false) {
      color = '1px solid red';
    } else {
      color = '1px solid #0092c8';
    }
    return color;
  }};
  input {
    background: none;
    outline: none;
    border: none;
    &&::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }
  }
  span {
    font-size: 12px;
    position: absolute;
    color: red;
    margin-top: 35px;
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
