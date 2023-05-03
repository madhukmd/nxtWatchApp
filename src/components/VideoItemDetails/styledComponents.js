import styled from 'styled-components'

export const VideoItemContainer = styled.div`
  background-color: ${props => (props.videoBg ? '#0f0f0f' : '#f9f9f9')};
  flex-grow: 1;
  overflow-y: auto;
`
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

export const VideoDetailsContainer = styled.div`
  padding: 20px;
`
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
`
