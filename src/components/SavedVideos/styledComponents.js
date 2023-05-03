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
export const SavedVideosContainer = styled.div`
  background-color: ${props =>
    props.saveVideoBg === 'true' ? '#0f0f0f' : '#f9f9f9'};
  flex-grow: 1;
  overflow-y: auto;
`
export const SavedVideosItems = styled.ul`
  padding-left: 0;
  list-style: none;
  padding-left: 20px;
  @media screen and (max-width: 567px) {
    padding: 5px;
  }
`
export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`
export const NoSavedVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`
export const NoSavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  text-align: center;
  color: ${props => (props.headingColor === 'true' ? '#f1f5f9' : '#1e293b')};
`
export const NoSavedVideosText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  text-align: center;
  color: ${props => (props.TextColor === 'true' ? '#e2e8f0' : '#475569')};
`
export const SaveVideosHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: ${props =>
    props.trendbg === 'true' ? '#212121' : '#ebebeb'};
  padding: 10px;
  padding-left: 20px;
  margin: 0;
  width: 100%;
`
export const TitleIconContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props =>
    props.iconcolor === 'true' ? '#475569' : '#cbd5e1'};
  padding: 5px;
  border-radius: 50%;
`
export const SavedHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  margin-left: 10px;
  color: ${props => props.color};
`
