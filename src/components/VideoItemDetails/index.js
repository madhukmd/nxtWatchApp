import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import Navbar from '../Navbar'
import PlayVideo from '../PlayVideo'
import FailureView from '../FailureView'
import ToggleContext from '../../context/ToggleContext'

import {
  VideoItemContainer,
  AppContainer,
  ResponsiveContainer,
  VideoDetailsContainer,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: '',
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideo()
  }

  getVideo = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
      }
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderLiked = () => {
    this.setState(prev => ({isLiked: !prev.isLiked, isDisLiked: false}))
  }

  renderDisliked = () => {
    this.setState(prev => ({isDisLiked: !prev.isDisLiked, isLiked: false}))
  }

  onRetryGetVideo = () => {
    this.getVideo()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetryGetVideo} />

  renderPlayVideo = () => {
    const {videoDetails, isLiked, isDisLiked} = this.state
    return (
      <PlayVideo
        videoDetails={videoDetails}
        isLiked={isLiked}
        isDisLiked={isDisLiked}
        renderLiked={this.renderLiked}
        renderDisliked={this.renderDisliked}
      />
    )
  }

  renderVideoDetailAllViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderPlayVideo()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ToggleContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <>
              <AppContainer>
                <Header />
                <ResponsiveContainer>
                  <Navbar />
                  <VideoItemContainer
                    data-testid="videoItemDetails"
                    videoBg={darkTheme}
                  >
                    <VideoDetailsContainer>
                      {this.renderVideoDetailAllViews()}
                    </VideoDetailsContainer>
                  </VideoItemContainer>
                </ResponsiveContainer>
              </AppContainer>
            </>
          )
        }}
      </ToggleContext.Consumer>
    )
  }
}
export default VideoItemDetails
