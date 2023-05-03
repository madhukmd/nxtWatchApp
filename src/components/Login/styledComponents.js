import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${props =>
    props.loginbg === 'true' ? '#181818' : '#ffffff'};
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 450px;
  box-shadow: 0 4px 8px 0px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  padding: 60px;
  background-color: ${props =>
    props.formbg === 'true' ? '#000000' : '#ffffff'};
  @media screen and (max-width: 567px) {
    padding: 20px;
  }
`
export const Image = styled.img`
  width: 180px;
  margin-bottom: 40px;
  @media screen and (max-width: 567px) {
    margin-bottom: 20px;
    margin-top: 20px;
  }
`
export const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 13px;
  color: #616e7c;
  font-weight: 500;
  line-height: 2;
`
export const Input = styled.input`
  border: 1px solid #e2e8f0;
  height: 40px;
  width: 100%;
  outline: none;
  padding-left: 10px;
  border-radius: 3px;
  font-family: 'Roboto';
  font-size: 15px;
`
export const CheckBoxContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
`
export const CheckBox = styled.input`
  height: 14px;
  width: 14px;
  margin-right: 10px;
`
export const CheckBoxLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
`
export const LoginButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 7px;
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
  background-color: #4f46e5;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  margin-top: 30px;
`
export const Error = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0b37;
  align-self: flex-start;
  font-weight: 500;
`
