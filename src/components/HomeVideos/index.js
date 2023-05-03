import VideoCard from '../VideoCard'

import {
  VideosContainer,
  NoVideos,
  NoVideosText,
  NoVideosImage,
  NoVideosHeading,
  RetryButton,
} from './styledComponents'

import ToggleContext from '../../context/ToggleContext'

const noVideosImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'

const HomeVideos = props => (
  <ToggleContext.Consumer>
    {value => {
      const {darkTheme} = value
      const {homeVideos, onRetryResults} = props

      return (
        <>
          {homeVideos.length > 0 ? (
            <VideosContainer>
              {homeVideos.map(eachVideo => (
                <VideoCard eachVideo={eachVideo} key={eachVideo.id} />
              ))}
            </VideosContainer>
          ) : (
            <NoVideos>
              <NoVideosImage src={noVideosImage} alt="no videos" />
              <NoVideosHeading NoVideosHeading={darkTheme}>
                No Search results found
              </NoVideosHeading>
              <NoVideosText NoVideosText={darkTheme}>
                Try different key words or remove search filter
              </NoVideosText>
              <RetryButton type="button" onClick={onRetryResults}>
                Retry
              </RetryButton>
            </NoVideos>
          )}
        </>
      )
    }}
  </ToggleContext.Consumer>
)
export default HomeVideos
