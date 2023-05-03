import styled from 'styled-components'

export const VideosContainer = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
export const NoVideos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoVideosImage = styled.img`
  width: 380px;
  @media screen and (max-width: 768px) {
    width: 200px;
  }
`
export const NoVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => (props.NoVideosHeading ? '#f1f5f9' : '#1e293b')};
`
export const NoVideosText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.NoVideosText ? '#e2e8f0' : '#475569')};
`
export const RetryButton = styled.button`
  font-family: 'Roboto';
  font-size: 15px;
  border: none;
  background-color: #4f46e5;
  border-radius: 3px;
  color: #ffffff;
  padding: 5px 10px;
`
