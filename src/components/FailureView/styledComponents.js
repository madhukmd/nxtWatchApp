import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
export const FailureImage = styled.img`
  width: 350px;
  @media screen and (max-width: 768px) {
    width: 180px;
  }
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  text-align: center;
  color: ${props => props.headingColor};
`
export const FailureText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  text-align: center;
  color: ${props => props.failText};
`
export const RetryButton = styled.button`
  outline: none;
  border: none;
  background-color: #4f46e5;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 15px;
  color: #ffffff;
  padding: 5px 10px;
`
