import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import Navbar from '../Navbar'
import FailureView from '../FailureView'
import TrendingVideoCard from '../TrendingVideoCard'

import ToggleContext from '../../context/ToggleContext'

import {
  AppContainer,
  ResponsiveContainer,
  TrendingVideosContainer,
  TrendingVideosContent,
  TrendingHeadingContainer,
  TitleIconContainer,
  TrendingHeading,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    trendingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendVideos()
  }

  getTrendVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        trendingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderTrendingVideosView = () => {
    const {trendingVideos} = this.state
    return (
      <TrendingVideosContent>
        {trendingVideos.map(eachItem => (
          <TrendingVideoCard eachVideo={eachItem} key={eachItem.id} />
        ))}
      </TrendingVideosContent>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  onRetry = () => {
    this.getTrendVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderTrendingVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideosView()
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
          const bgColor = darkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = darkTheme ? '#f9f9f9' : '#231f20'

          return (
            <AppContainer>
              <Header />
              <ResponsiveContainer>
                <Navbar />
                <TrendingVideosContainer
                  data-testid="trending"
                  bgColor={bgColor}
                >
                  <TrendingHeadingContainer trendbg={`${darkTheme}`}>
                    <TitleIconContainer iconcolor={`${darkTheme}`}>
                      <HiFire size={25} color="#ff0000" />
                    </TitleIconContainer>
                    <TrendingHeading color={textColor}>
                      Trending
                    </TrendingHeading>
                  </TrendingHeadingContainer>
                  {this.renderTrendingVideos()}
                </TrendingVideosContainer>
              </ResponsiveContainer>
            </AppContainer>
          )
        }}
      </ToggleContext.Consumer>
    )
  }
}
export default Trending
