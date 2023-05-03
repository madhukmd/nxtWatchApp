import styled from 'styled-components'

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: auto;
  flex-grow: 1;
`
export const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.bgcolor === 'true' ? '#181818' : '#f9f9f9'};
  width: 100vw;
  padding: 20px;
`
export const NotFoundVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NotFoundVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`
export const NotFoundVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  text-align: center;
  color: ${props => (props.headingcolor === 'true' ? '#f1f5f9' : '#1e293b')};
`
export const NotFoundVideosText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;
  color: ${props => (props.textcolor === 'true' ? '#e2e8f0' : '#475569')};
`
